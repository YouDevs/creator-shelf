# Panel del proveedor

## Resumen

El proveedor dispone de un panel privado para administrar exclusivamente la
tienda asociada con su cuenta.

La aplicación ya cuenta con la ruta protegida del dashboard, el layout visual
del panel y la administración de la información básica de la tienda. Esta
feature reutiliza esas piezas y no reconstruye el panel desde cero.

El acceso actual requiere autenticación, pero todavía no existen roles o
permisos que distingan formalmente a proveedores, compradores y administradores.
Esa integración queda fuera de esta feature y se implementará posteriormente.

Después del login, el destino se mantiene en `/home`, que actualmente es el
marketplace principal. No se agrega un enlace nuevo al panel desde el homepage
como parte de esta feature. El botón actual con el ícono de usuario circular
queda como punto de entrada para los paneles correspondientes cuando la
aplicación pueda distinguir entre proveedor, administrador y usuario normal.

La gestión real de productos y archivos corresponde a las features 7 y 8. La
verificación para recibir pagos depende de Stripe Connect y corresponde a la
feature 6. La consulta de ventas requiere que existan compras, pedidos y pagos
confirmados.

## Requisitos

| ID | Requisito | Estado | Evidencia y alcance |
| --- | --- | --- | --- |
| R1 | Una persona autenticada puede acceder al panel del proveedor. | Parcial | `GET /dashboard` existe y utiliza el middleware `auth`. No hay roles ni permisos específicos de proveedor. |
| R2 | El panel muestra la información de la tienda propia. | Implementado | `DashboardController` comparte título, descripción, subdominio, imagen y URL pública de la tienda autenticada. |
| R3 | El proveedor puede administrar el título, descripción e imagen de su tienda. | Implementado | `StoreController`, `StorePolicy`, `StoreRequest`, `UpdateStoreRequest` y las vistas de tiendas ya cubren esta función. |
| R4 | El subdominio se muestra como permanente y no editable. | Implementado | La feature de tienda valida y persiste el subdominio como único; el formulario de actualización no lo modifica. |
| R5 | El panel agrupa el acceso a productos y archivos propios. | Solo visual | `My Products` existe en la navegación, pero apunta a `#`. El listado de productos en `dashboard.tsx` contiene datos hardcodeados. La funcionalidad real depende de las features 7 y 8. |
| R6 | El proveedor puede consultar sus ventas. | Solo visual | `Sales` existe en la navegación y las métricas muestran valores estáticos. La consulta real queda pendiente de compras, pedidos y pagos confirmados. |
| R7 | El proveedor puede revisar y completar la verificación para recibir pagos. | Pendiente por dependencia | El panel muestra la etiqueta estática `Identity Verified`, pero no existe integración con Stripe Connect. La funcionalidad depende de la feature 6. |
| R8 | El proveedor solo puede consultar y modificar información de su propia tienda. | Parcial | `StorePolicy` protege la administración de tiendas propias. No existen todavía productos, archivos, ventas ni verificaciones sobre los que aplicar esta restricción. |
| R9 | El panel conserva una identidad visual y una navegación reutilizables. | Parcial | `CreatorDashboardLayout`, `StoreStatusCard` y `MetricCard` ya proporcionan la estructura. `My Products`, `Sales`, `Analytics` y `Settings` todavía son elementos visuales sin navegación funcional. |
| R10 | Una cuenta puede utilizarse como comprador y proveedor. | Pendiente por dependencia | La autenticación compartida existe, pero la conversión y las capacidades formales de proveedor dependen de la integración posterior de roles y permisos. |
| R11 | El acceso desde el marketplace a los paneles utiliza el control de cuenta existente. | Pendiente por dependencia | El botón actual con el ícono de usuario circular se reserva para resolver el panel correspondiente cuando existan roles y capacidades diferenciadas. No se agrega un nuevo botón ni una ruta adicional ahora. |
| R12 | El login continúa redirigiendo a `/home`. | Implementado | `config/fortify.php`, `AuthenticationTest.php` y `RegistrationTest.php` establecen `/home` como destino posterior a la autenticación. |

### Alcance que puede resolverse ahora

- Mantener y cubrir mediante pruebas el dashboard existente.
- Reutilizar `CreatorDashboardLayout` como superficie del panel.
- Mantener la integración existente con la administración de la tienda.
- Garantizar que el dashboard reciba únicamente la tienda asociada al usuario
  autenticado.
- Mantener explícitamente como placeholders los módulos que pertenecen a otras
  features.
- Mantener `/home` como destino posterior al login.
- Reservar el botón de usuario del marketplace como punto de entrada futuro a
  los paneles según las capacidades de la cuenta.
- No agregar paquetes ni decidir la arquitectura de Stripe, ventas, pedidos o
  archivos.

### Funcionalidades que deben esperar

- Gestión real de productos: feature 7.
- Gestión real de archivos: feature 8.
- Verificación de Stripe Connect: feature 6.
- Ventas reales: compras, pedidos, pagos confirmados y distribución de
  ingresos.
- Roles y permisos para distinguir capacidades de proveedor, comprador y
  administrador.
- Analítica real y métricas históricas, que no están definidas funcionalmente
  en los documentos actuales.

## Criterios de aceptación

| ID | Criterio | Estado actual |
| --- | --- | --- |
| A1 | Una persona no autenticada que accede al dashboard es redirigida al login. | Cubierto por `tests/Feature/DashboardTest.php`, `guests are redirected to the login page`. |
| A2 | Una persona autenticada puede acceder al dashboard. | Cubierto por `tests/Feature/DashboardTest.php`, `authenticated users can visit the dashboard`. |
| A3 | El dashboard renderiza el componente `dashboard`. | Cubierto por `tests/Feature/DashboardTest.php`. |
| A4 | El dashboard recibe la tienda asociada al usuario autenticado. | Cubierto por `tests/Feature/StoreTest.php`, `renders the dashboard with the authenticated users store`. |
| A5 | El dashboard muestra un estado de incorporación cuando el usuario todavía no tiene tienda. | Implementado en `StoreStatusCard`; falta una aserción específica de Inertia para ese estado. |
| A6 | El proveedor puede abrir la administración de su tienda desde el panel. | Implementado mediante `Manage Store`; la administración se cubre en `tests/Feature/StoreTest.php`. |
| A7 | El proveedor no puede abrir o modificar la tienda de otra persona. | Cubierto para tiendas por `tests/Feature/StoreTest.php`, `updates only the authenticated users store`. |
| A8 | `My Products` permite crear, editar, activar y desactivar productos reales. | Pendiente de la feature 7; actualmente es solo visual. |
| A9 | Los archivos de productos pueden administrarse desde el panel respetando sus reglas de conservación histórica. | Pendiente de la feature 8. |
| A10 | Las ventas mostradas corresponden a compras y pagos confirmados de la tienda propia. | Pendiente de compras, pedidos y pagos. |
| A11 | El estado de verificación procede de Stripe Connect y determina la disponibilidad comercial de la tienda. | Pendiente de la feature 6. |
| A12 | El dashboard no expone información perteneciente a otra tienda. | Parcial; está cubierto para la tienda propia, pero todavía no existen los módulos dependientes que deben aplicar la misma regla. |
| A13 | El login y el registro continúan redirigiendo a `/home`. | Cubierto por `tests/Feature/Auth/AuthenticationTest.php` y `tests/Feature/Auth/RegistrationTest.php`. |
| A14 | El control de usuario del marketplace queda reservado para resolver el panel correspondiente según la capacidad de la cuenta. | Decisión adoptada; la resolución por roles y permisos queda fuera de esta feature. |

## Implementación existente y cobertura de pruebas

### Implementado

- `routes/web.php` define `GET /dashboard` con middleware `auth`.
- `DashboardController` obtiene la tienda desde `$request->user()->store`.
- `User` mantiene una relación `hasOne` con `Store`.
- La migración de tiendas garantiza una sola tienda por usuario y un
  subdominio único.
- `StorePolicy` restringe la consulta de la tienda a su propietario.
- `StoreController` permite crear, consultar y actualizar la tienda.
- `CreatorDashboardLayout` proporciona el shell visual del panel.
- `StoreStatusCard` muestra el estado de incorporación o la identidad de la
  tienda.
- La administración de título, descripción e imagen está implementada en la
  feature de tienda.
- Fortify redirige a `/home` después del login y del registro.
- El marketplace ya tiene un botón de cuenta con ícono circular en
  `resources/js/components/marketplace/main-header.tsx`; actualmente es
  visual y no resuelve roles ni paneles.

### Parcial

- El dashboard está protegido únicamente por autenticación.
- Cualquier usuario autenticado puede acceder a `/dashboard`, aunque todavía
  no exista una tienda ni un sistema formal de capacidades.
- La autorización existente cubre la tienda, pero aún no puede cubrir
  productos, archivos, ventas o verificación.
- El control de cuenta del marketplace existe visualmente, pero su navegación
  por tipo de usuario se difiere junto con roles y permisos.

### Solo visual

- `My Products` apunta a `#`.
- `Sales` apunta a `#`.
- `Analytics` apunta a `#`.
- `Settings` apunta a `#`, aunque existe un acceso funcional separado mediante
  `Manage Store`.
- Las métricas `Revenue`, `Total Sales` y `Active Products` tienen valores
  estáticos.
- El listado `Recent Products` contiene productos de ejemplo.
- Los botones de edición y eliminación del listado no ejecutan acciones.
- La etiqueta `Identity Verified` no representa un estado obtenido desde Stripe
  Connect.
- El selector `Last 30 Days` no modifica datos.
- El botón de cuenta del marketplace todavía no abre un panel.

### Pendiente por dependencia

- No existen modelos, migraciones, controladores ni páginas para productos,
  archivos, ventas, pedidos, compras o pagos.
- No existe una integración de Stripe Connect.
- No existen pruebas de productos, archivos, ventas, pedidos, pagos o
  verificación.
- Los documentos individuales de las features 6, 7 y 8 no están presentes
  actualmente en `docs/features/`; su alcance solo puede derivarse de
  `docs/spec.md`, `docs/technical.md` y `docs/features.md`.

### Pruebas existentes relacionadas

- `tests/Feature/DashboardTest.php`
  - Redirección de visitantes al login.
  - Acceso de usuarios autenticados al dashboard.
- `tests/Feature/StoreTest.php`
  - Creación de una tienda.
  - Regla de una tienda por usuario.
  - Actualización de la tienda propia.
  - Rechazo de acceso a otra tienda.
  - Renderizado del dashboard con la tienda propia.
  - Renderizado de la identidad pública de la tienda.
- `tests/Feature/Auth/AuthenticationTest.php`
  - Login exitoso y redirección a `/home`.
  - Acceso al dashboard sin verificación de correo.
- `tests/Feature/Auth/RegistrationTest.php`
  - Registro exitoso y redirección a `/home`.

La cobertura identificada se basa en los archivos de prueba existentes. Las
pruebas no se ejecutan como parte de la especificación de esta feature.

## Preguntas pendientes

Las siguientes preguntas no bloquean la implementación del alcance actual y se
difieren para cuando corresponda desarrollar las features dependientes:

- Qué roles, permisos o capacidades concretas distinguirán a proveedores,
  compradores y administradores.
- Qué métricas deben mostrarse en el overview cuando existan ventas reales.
- Qué información concreta debe incluir la consulta de ventas.
- Qué estados visuales debe mostrar el panel durante el proceso de Stripe
  Connect.
- Cómo se tratará el panel para tiendas suspendidas o desactivadas, más allá
  de conservar el acceso privado indicado por la especificación.
- Si `Analytics` forma parte del producto o es únicamente un elemento de la
  maqueta.

Decisiones adoptadas para esta feature:

- El destino posterior al login y al registro es `/home`.
- No se agrega un acceso nuevo al panel desde el homepage.
- El botón actual de cuenta del marketplace se utilizará posteriormente como
  punto de entrada a los paneles correspondientes según la capacidad de la
  cuenta.
- La resolución de paneles por tipo de usuario no se implementa hasta que
  existan roles y permisos.

## Pasos de implementación

1. **Conservar el dashboard existente como superficie base.** Reutilizar
   `routes/web.php`, `DashboardController`, `CreatorDashboardLayout`,
   `dashboard.tsx` y `StoreStatusCard`. No crear un panel alternativo ni
   duplicar la administración de tiendas.

   **Tests**

   - `[Existente]` Un visitante que solicite `GET /dashboard` es redirigido al
     login mediante `tests/Feature/DashboardTest.php`.
   - `[Existente]` Un usuario autenticado puede renderizar el componente
     `dashboard`.
   - `[Existente]` El dashboard recibe la tienda perteneciente al usuario
     autenticado mediante `tests/Feature/StoreTest.php`.
   - `[Nueva]` Un usuario autenticado sin tienda recibe el estado de
     incorporación y el enlace `Create Store`.
   - `[Nueva]` Un usuario con tienda recibe el resumen de su propia tienda y el
     enlace `Manage Store`.

2. **Mantener la administración de tienda como integración existente.** El
   panel debe enlazar al flujo de `StoreController` y no introducir formularios
   o persistencia duplicados. El subdominio debe continuar siendo visible y no
   editable.

   **Tests**

   - `[Existente]` Una persona autenticada puede actualizar título, descripción
     e imagen mediante `tests/Feature/StoreTest.php`.
   - `[Existente]` Una persona no puede consultar la tienda de otra persona.
   - `[Existente]` Una persona con tienda existente no puede crear una segunda
     tienda.
   - `[Regresión]` El acceso desde el panel continúa dirigiendo a la tienda
     propia y no a una tienda arbitraria.

3. **Mantener los módulos dependientes fuera de esta implementación.** No
   convertir el listado de productos, las métricas, `Sales`, la verificación ni
   `Analytics` en funcionalidades reales hasta que existan sus features y
   contratos correspondientes.

   **Tests**

   - `[Regresión]` El dashboard continúa renderizando aunque todavía no
     existan productos, ventas o verificación.
   - `[Regresión]` Ningún valor estático del overview se presenta como
     resultado de una consulta real.
   - `[Pendiente feature 7]` Verificar creación, edición, activación y
     desactivación de productos propios.
   - `[Pendiente feature 8]` Verificar gestión de archivos y conservación del
     acceso histórico.
   - `[Pendiente feature 6]` Verificar que el estado del panel procede de
     Stripe Connect.
   - `[Pendiente compras y pagos]` Verificar que las ventas solo incluyen
     operaciones confirmadas de la tienda propia.

4. **Reservar el control de cuenta del marketplace para la navegación futura.**
   El botón actual con el ícono de usuario circular será el punto de entrada a
   los paneles cuando estén definidas las capacidades de la cuenta. Esta
   feature no agrega navegación condicional ni implementa roles.

   **Tests**

   - `[Regresión]` El login y el registro continúan redirigiendo a `/home`.
   - `[Pendiente roles y permisos]` El control de cuenta dirige al panel
     correspondiente según la capacidad de la cuenta.
   - `[Pendiente roles y permisos]` Un comprador autenticado sin tienda no
     puede acceder a capacidades exclusivas del proveedor.
   - `[Pendiente roles y permisos]` Un proveedor puede continuar usando el
     marketplace como comprador.

## Fuentes

- `AGENTS.md`
- `docs/spec.md`, §§3.2-3.3, 4, 5, 9, 10, 13, 14, 15, 16 y 17
- `docs/technical.md`, §§3-7, 11, 13-17
- `docs/features.md`, §§1-3, 6-8 y 13-15
- `docs/features/feature-registration-and-login.md`
- `docs/features/feature-store-creation-and-management.md`
- `routes/web.php`
- `app/Http/Controllers/DashboardController.php`
- `app/Http/Controllers/StoreController.php`
- `app/Models/User.php`
- `app/Models/Store.php`
- `app/Policies/StorePolicy.php`
- `resources/js/pages/dashboard.tsx`
- `resources/js/layouts/creator-dashboard-layout.tsx`
- `resources/js/components/creator-dashboard/store-status-card.tsx`
- `resources/js/components/creator-dashboard/metric-card.tsx`
- `resources/js/components/marketplace/main-header.tsx`
- `tests/Feature/DashboardTest.php`
- `tests/Feature/StoreTest.php`
- `tests/Feature/Auth/AuthenticationTest.php`
- `tests/Feature/Auth/RegistrationTest.php`
- `composer.json`
