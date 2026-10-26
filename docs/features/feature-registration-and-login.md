# Registro e inicio de sesión

## Resumen

La funcionalidad permite crear una cuenta e iniciar sesión mediante correo
electrónico y contraseña o mediante una cuenta de Google. La misma cuenta
puede utilizarse como comprador y, posteriormente, como proveedor al crear
una tienda. Todos los usuarios deben comenzar con las funciones de comprador.

El producto no requiere verificación del correo electrónico en esta primera
versión. La autenticación debe ser compartida por las distintas áreas de la
aplicación, respetando las reglas de acceso que se definan para cada área.

**Decisiones de esta actualización:** el registro conservará el campo `name` y
agregará `last_name` y `username`. La autenticación con Google se implementará
con Laravel Socialite. Una cuenta de Google cuyo correo ya exista se asociará
con la cuenta existente, evitando crear otra identidad. La verificación de
correo no será obligatoria en el MVP. Después del login, Fortify redirigirá a
`/home`, que será la página React principal.

**Estado frente a la implementación:** el flujo de correo electrónico y
contraseña está implementado mediante Laravel Fortify. Los campos de perfil,
la redirección a `/home`, la ausencia de verificación obligatoria y el flujo
de Google con Socialite ya tienen implementación local. Falta instalar la
dependencia mediante Composer, configurar las credenciales de Google y
ejecutar la suite en un entorno con PHP.

## Requisitos

| ID | Requisito de producto | Origen | Comparación con implementación y pruebas |
| --- | --- | --- | --- |
| R1 | Permitir registrarse con correo electrónico y contraseña. | `docs/spec.md`, §14; reglas 34 y 35 | **Implementado localmente.** Fortify crea usuarios con los campos de perfil y la prueba fue actualizada; queda ejecutar la prueba. |
| R2 | Permitir iniciar sesión con correo electrónico y contraseña. | `docs/spec.md`, §14 y §18; `docs/features.md`, §1 | **Cubierto para el flujo básico.** Fortify usa `email` como identificador y `AuthenticationTest.php` cubre renderizado, login exitoso, contraseña inválida, logout y limitación. |
| R3 | Permitir registrarse o iniciar sesión mediante Google. | `docs/spec.md`, §3.3 y §14; `docs/features.md`, §1 | **Implementado localmente, pendiente de instalación y credenciales.** Socialite, rutas, controlador, botón, asociación por correo y pruebas están preparados. |
| R4 | El registro por correo debe solicitar nombre, apellido, nombre de usuario, correo, contraseña y confirmación de contraseña. | `docs/spec.md`, §14; `docs/technical.md`, §13 | **Implementado localmente.** Se conservan `name` y se agregan `last_name` y `username`, incluyendo validación de unicidad y formulario. |
| R5 | Crear la cuenta sin requerir verificación del correo electrónico. | `docs/spec.md`, §14; `docs/features.md`, §1 | **Implementado.** La verificación de correo fue retirada de las features de Fortify y `dashboard` ya no exige `verified`. |
| R6 | Iniciar sesión tras el registro y comenzar con funciones de comprador. | `docs/spec.md`, §3.2, §3.3 y §14; `docs/technical.md`, §6 y §13 | **Parcialmente cubierto.** El registro y login redirigen a `/home`; las capacidades de comprador y los roles pertenecen a una funcionalidad posterior. |
| R7 | Compartir la autenticación entre marketplace, comprador, proveedor y administración, sin convertir una cuenta en identidades separadas. | `docs/technical.md`, §4, §13 y §15 | **Parcialmente cubierto.** Se utiliza el guard `web` de Fortify y el modelo `User` compartido. Las superficies de comprador, proveedor y dueño todavía no están implementadas de forma que pueda verificarse esta integración. |

No se consideran requisitos de esta funcionalidad las capacidades adicionales
que Fortify tenga habilitadas, como recuperación de contraseña, 2FA o
passkeys. Se revisan aquí únicamente cuando afectan al flujo existente o a su
cobertura.

## Criterios de aceptación

| ID | Criterio | Estado actual |
| --- | --- | --- |
| A1 | Una persona puede abrir la pantalla de registro. | **Cubierto por prueba existente:** `tests/Feature/Auth/RegistrationTest.php`, `registration screen can be rendered`. |
| A2 | Una persona puede crear una cuenta con el flujo de correo y contraseña y queda autenticada. | **Implementado, pendiente de ejecución:** `tests/Feature/Auth/RegistrationTest.php`, `new users can register`, ahora cubre los nuevos campos y `/home`. |
| A3 | Una persona puede abrir la pantalla de inicio de sesión. | **Cubierto por prueba existente:** `tests/Feature/Auth/AuthenticationTest.php`, `login screen can be rendered`. |
| A4 | Una persona puede iniciar sesión con credenciales válidas, queda autenticada y es redirigida a `/home`. | **Implementado, pendiente de ejecución:** `users can authenticate using the login screen` fue actualizado a `/home`. |
| A5 | Una contraseña inválida no autentica a la persona. | **Cubierto por prueba existente:** `users can not authenticate with invalid password`. |
| A6 | Una persona autenticada puede cerrar sesión. | **Cubierto por prueba existente:** `users can logout`. |
| A7 | El login está limitado ante intentos excesivos. | **Cubierto por prueba existente:** `users are rate limited`. Es una protección existente, no un requisito funcional adicional. |
| A8 | Se puede completar el flujo de registro o login con Google. | **Implementado localmente, pendiente de credenciales y ejecución:** `tests/Feature/Auth/GoogleAuthenticationTest.php` cubre cuenta nueva y cuenta existente por correo. |
| A9 | El registro no obliga a verificar el correo para usar la aplicación. | **Implementado, pendiente de ejecución:** el acceso autenticado ya no usa `verified`. |
| A10 | La cuenta comienza con funciones de comprador y puede reutilizarse al crear una tienda. | **No cubierto todavía:** no hay implementación de capacidades ni de creación de tienda en esta revisión. Roles y permisos quedan aplazados. |

## Implementación existente y cobertura de pruebas

### Implementación encontrada

- Laravel Fortify está instalado y registrado en `bootstrap/providers.php`.
- `app/Providers/FortifyServiceProvider.php` configura las vistas Inertia de
  login y registro, la acción de creación de usuarios y el límite de cinco
  intentos de login por minuto para la combinación de correo e IP.
- `app/Actions/Fortify/CreateNewUser.php` valida y crea usuarios con `name`,
  `last_name`, `username`, `email` y `password`. La contraseña se almacena
  mediante el cast `hashed` de `app/Models/User.php`.
- `config/fortify.php` habilita registro, recuperación de contraseña, 2FA y
  passkeys. La verificación de correo está deshabilitada para el MVP; las
  demás capacidades no deben interpretarse como requisitos de producto
  cumplidos.
- `resources/js/pages/auth/register.tsx` muestra nombre, correo, contraseña y
  confirmación de contraseña. `resources/js/pages/auth/login.tsx` muestra
  correo, contraseña, recordar sesión y enlace de recuperación.
- `config/fortify.php` usa `/home` como destino posterior a la autenticación.
- `routes/web.php` reserva `/home` para la página React principal y eliminó la
  ruta canónica `/react-home`; la vista Blade anterior dejó de estar conectada
  a esa ruta.
- La migración `2026_10_13_000000_add_profile_and_google_columns_to_users_table.php`
  agrega `last_name`, `username` y `google_id`.
- `app/Http/Controllers/Auth/GoogleAuthController.php` implementa el redirect,
  callback, creación de cuentas y asociación por correo.
- `config/services.php` y `.env.example` definen la configuración de Google;
  las credenciales reales deben permanecer en `.env` o en el gestor de secretos.

### Pruebas encontradas

En `tests/Feature/Auth/RegistrationTest.php` se encontraron:

- `[Existente]` renderizado de la pantalla de registro.
- `[Existente]` registro exitoso, autenticación y redirección a `/home`.

En `tests/Feature/Auth/AuthenticationTest.php` se encontraron:

- `[Existente]` renderizado de la pantalla de login.
- `[Existente]` login exitoso con correo y contraseña.
- `[Existente]` redirección al desafío de 2FA cuando está habilitado.
- `[Existente]` rechazo de contraseña inválida.
- `[Existente]` cierre de sesión.
- `[Existente]` limitación de intentos de login.

No se encontraron pruebas para el estado inicial de comprador ni reutilización
de la cuenta al crear una tienda; esos comportamientos siguen aplazados con
roles y permisos. Las pruebas nuevas para Google, perfil y `/home` están
escritas, pero todavía no se han ejecutado.

### Pruebas ejecutadas

Se intentó ejecutar:

```text
php artisan test --compact tests/Feature/Auth/AuthenticationTest.php tests/Feature/Auth/RegistrationTest.php
```

No se pudo ejecutar porque el entorno no dispone del comando `php`. También
se intentó consultar rutas con Artisan y dependencias directas con Composer;
ambos comandos no estuvieron disponibles (`php` y `composer`). Por tanto, no
hay resultados de ejecución que permitan confirmar el estado de las pruebas
PHP en este entorno. Las comprobaciones frontend sí pasaron:

- `npm run types:check`
- `npm run lint:check`
- `npm run format:check`

La ejecución de las pruebas Pest y Pint queda pendiente en un entorno con PHP.

## Preguntas pendientes

No quedan preguntas pendientes para esta actualización de la funcionalidad.
Las decisiones resueltas son:

- Se agregarán `last_name` y `username`, conservando `name`.
- Se utilizará Laravel Socialite para Google.
- Un correo de Google existente se asociará con la cuenta existente, sin crear
  una identidad duplicada.
- La verificación de correo no será obligatoria en el MVP.
- El destino posterior al login será `/home`, que renderizará la página React
  principal. La vista Blade que actualmente ocupa `/home` dejará de ser el
  destino de esa ruta.

## Pasos de implementación

1. **Implementado:** agregar `last_name` y `username` a la persistencia de usuarios y actualizar
   la validación, la acción `CreateNewUser`, el modelo y el formulario de
   registro. `username` deberá ser único.

   **Tests**

   - `[Existente]` Reutilizar y ejecutar el registro exitoso de
     `tests/Feature/Auth/RegistrationTest.php`.
   - `[Nueva]` Registrar una cuenta con nombre, apellido, nombre de usuario,
     correo, contraseña y confirmación de contraseña, y comprobar que queda
     autenticada.
   - `[Nueva]` Rechazar el registro cuando falte cada campo obligatorio,
     cuando el username esté repetido y cuando la confirmación no coincida.

2. **Implementado localmente:** integrar Google mediante Laravel Socialite, incluyendo la configuración del
   proveedor, las rutas y la interfaz de inicio de sesión. Si el correo
   recibido ya pertenece a una cuenta, autenticar esa cuenta en lugar de crear
   otra identidad.

   **Tests**

   - `[Nueva]` Completar el registro o login con Google para un correo nuevo y
     comprobar que la cuenta queda autenticada.
   - `[Nueva]` Iniciar sesión con Google usando un correo ya registrado y
     comprobar que se reutiliza la cuenta existente.

3. **Implementado:** deshabilitar la verificación de correo para el MVP y quitar la exigencia de
   `verified` de las rutas que deben estar disponibles inmediatamente después
   del login.

   **Tests**

   - `[Existente]` Reutilizar y ejecutar el registro exitoso de
     `tests/Feature/Auth/RegistrationTest.php`.
   - `[Nueva]` Acceder a `/home` después del registro sin verificar el correo.

4. **Implementado:** cambiar el destino de autenticación de Fortify a `/home` y convertir esa
   ruta en la página React principal: trasladar allí el contenido de
   `react-home`, retirar la vista Blade de `/home` y eliminar la ruta
   `/react-home` como ruta canónica.

   **Tests**

   - `[Actualizar]` Actualizar `tests/Feature/Auth/RegistrationTest.php` para
     comprobar la redirección a `/home`.
   - `[Actualizar]` Actualizar `tests/Feature/Auth/AuthenticationTest.php`
     para comprobar la redirección a `/home` después del login.
   - `[Nueva]` Comprobar que `GET /home` renderiza la página React principal.

## Trabajo aplazado y dependencias

- **Roles y permisos:** se aplazan a una funcionalidad posterior. Debe
  integrar la cuenta autenticada con las capacidades de comprador, proveedor
  y dueño de la plataforma, incluida la regla de una sola tienda por
  proveedor. No se implementa ni se marca como cumplido aquí.
- **Creación de tienda y conversión a proveedor:** pertenecen a la
  funcionalidad de creación y administración de tienda; solo se registra la
  dependencia con la cuenta compartida.
- **Protecciones adicionales de Fortify:** 2FA, passkeys y recuperación de
  contraseña existen en la base del proyecto, pero no amplían los requisitos
  documentados de esta funcionalidad.
- **Instalación y credenciales de Google:** requieren ejecutar Composer y
  configurar el cliente OAuth fuera del repositorio. Las instrucciones
  operativas se entregan junto con esta implementación.

## Fuentes

- `docs/spec.md`, §§3.2-3.3, 8, 14, 15, 16 y 18; reglas 33-35.
- `docs/technical.md`, §§4, 6, 13, 15 y 17.
- `docs/features.md`, §1, y las secciones relacionadas de creación de tienda,
  paneles del proveedor y del dueño de la plataforma.
- `app/Providers/FortifyServiceProvider.php`.
- `app/Actions/Fortify/CreateNewUser.php`.
- `app/Models/User.php`.
- `config/fortify.php`.
- `routes/web.php`.
- `resources/js/pages/auth/register.tsx`.
- `resources/js/pages/auth/login.tsx`.
- `database/migrations/0001_01_01_000000_create_users_table.php`.
- `tests/Feature/Auth/RegistrationTest.php`.
- `tests/Feature/Auth/AuthenticationTest.php`.
- `tests/Feature/Auth/GoogleAuthenticationTest.php`.
- `tests/Feature/Settings/ProfileUpdateTest.php`.
