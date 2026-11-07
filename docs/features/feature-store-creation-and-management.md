# Creacion y administracion de tienda

## Resumen

Esta funcionalidad permite que una persona autenticada se convierta en
proveedora mediante la creacion de una unica tienda. La tienda tiene una
identidad publica propia y un espacio privado desde el que su propietaria
puede actualizar el titulo, la descripcion y la imagen de perfil.

La creacion no requiere aprobacion previa. La verificacion necesaria para
recibir pagos mediante Stripe Connect es una funcionalidad separada y no se
considera completada por el hecho de crear una tienda.

**Estado frente a la implementacion:** implementada localmente para la
creacion, administracion, dashboard e identidad publica de la tienda. La
verificacion de pagos, el catalogo y las metricas reales continuan fuera de
esta funcionalidad.

La implementacion utiliza `stores.user_id` como relacion unica del proveedor,
protege el subdominio con una restriccion unica y guarda las imagenes de perfil
en el disco publico configurado por Laravel. La pagina publica dispone de una
ruta por subdominio configurado y una ruta por path para desarrollo y pruebas.

## Decisiones de esta actualizacion

- Una cuenta puede tener como maximo una tienda. La existencia de la tienda
  convierte a la cuenta en proveedora sin crear una identidad de usuario
  separada.
- El titulo, la descripcion y el subdominio se solicitan durante la creacion.
- La imagen de perfil es opcional durante la creacion. La tienda puede crearse
  sin ella y la proveedora puede agregarla o reemplazarla posteriormente.
- El subdominio se almacena en minusculas, se compara sin distinguir
  mayusculas y no puede modificarse despues de crear la tienda.
- El subdominio admite entre 3 y 63 caracteres, comienza y termina con una
  letra o numero y solo contiene letras ASCII, numeros y guiones.
- No se permiten subdominios reservados para la aplicacion, como `www`, `app`,
  `api`, `admin`, `dashboard`, `login`, `register`, `home`, `settings` y
  `preview`. La lista debe mantenerse en una unica regla de dominio.
- Si el subdominio ya existe, la creacion se rechaza y la persona debe elegir
  otro. La unicidad se garantiza en persistencia, no solo mediante una
  comprobacion previa en la interfaz.
- Si una persona autenticada ya tiene una tienda, cualquier entrada de
  creacion la redirige a su dashboard. No se crea una segunda tienda.
- La tienda se crea activa desde el punto de vista administrativo y sin
  aprobacion del dueño de la plataforma. Su disponibilidad comercial publica
  sigue dependiendo de la verificacion de Stripe Connect y de los estados
  globales definidos por la especificacion.
- El dominio base de las tiendas se configura mediante la aplicacion. La
  interfaz no construye dominios a partir de valores fijos ni permite cambiar
  el dominio base desde el panel.
- Durante esta funcionalidad, la pagina publica muestra la identidad de la
  tienda. El catalogo y las compras dependen de la funcionalidad de productos,
  marketplace y verificacion correspondiente.

## Requisitos

| ID | Requisito de producto | Origen | Decision o alcance |
| --- | --- | --- | --- |
| R1 | Una persona autenticada puede crear una tienda. | `docs/spec.md`, §§3.2 y 4; `docs/features.md`, §2 | La creacion requiere autenticacion. |
| R2 | Cada proveedor puede crear una sola tienda. | `docs/spec.md`, §§4 y 15; `docs/technical.md`, §6 | Se garantiza con una relacion unica entre usuario y tienda y con una prueba de concurrencia o equivalente en la capa de persistencia. |
| R3 | La tienda tiene titulo, descripcion, imagen de perfil y subdominio. | `docs/spec.md`, §4; `docs/features.md`, §2 | Titulo, descripcion y subdominio son datos de creacion. La imagen es opcional inicialmente. |
| R4 | El subdominio es unico y permanente. | `docs/spec.md`, §§4 y 13; `docs/technical.md`, §5 | Se normaliza a minusculas, se valida con la regla de dominio y se protege con una restriccion unica. |
| R5 | Una tienda no requiere aprobacion previa. | `docs/spec.md`, §4; regla 5 | La creacion no espera una accion del dueño de la plataforma. |
| R6 | La proveedora puede actualizar titulo, descripcion e imagen de perfil. | `docs/spec.md`, §13; `docs/features.md`, §2 | El subdominio se muestra como solo lectura y nunca aparece como campo editable. |
| R7 | La proveedora solo puede administrar su propia tienda. | `docs/spec.md`, §§3.2 y 13; `docs/technical.md`, §6 | La autorizacion se basa en la pertenencia del recurso, no solo en la URL. |
| R8 | La tienda tiene una pagina publica asociada a su subdominio. | `docs/spec.md`, §4; `docs/technical.md`, §5 | La pagina muestra la identidad de la tienda. La disponibilidad comercial se filtra por verificacion y otros estados aplicables. |
| R9 | Una persona con tienda existente vuelve a su dashboard. | Decision de esta actualizacion | Evita formularios de creacion duplicados y conserva la regla de una tienda por proveedor. |

## Datos y validaciones

### Tienda

- `user_id`: usuario propietario. Obligatorio y unico.
- `title`: titulo publico. Obligatorio, texto entre 1 y 120 caracteres.
- `description`: descripcion publica. Obligatoria, texto entre 1 y 2.000
  caracteres.
- `subdomain`: identificador publico. Obligatorio, unico, permanente y
  normalizado a minusculas.
- `profile_image`: imagen de perfil opcional. Si existe, debe ser una imagen
  valida aceptada por la aplicacion y reemplazable posteriormente.

Los limites de texto se consideran limites de interfaz y validacion iniciales,
no reglas de presentacion del dashboard. Los mensajes de validacion deben
explicar el error y conservar los datos no sensibles del formulario.

La imagen no se elimina de forma destructiva al reemplazarla hasta que la
aplicacion haya confirmado que la nueva imagen fue almacenada correctamente.
La estrategia concreta de almacenamiento y limpieza queda dentro de las
decisiones tecnicas de archivos y no se amplia en esta funcionalidad.

## Flujo de usuario

### Creacion

1. Una persona autenticada accede a la accion para crear su tienda.
2. Si ya tiene una tienda, la aplicacion la redirige a su dashboard.
3. Si no tiene una tienda, completa titulo, descripcion y subdominio.
4. Puede agregar una imagen de perfil o continuar sin ella.
5. La aplicacion valida los datos y la disponibilidad del subdominio.
6. Si el subdominio esta ocupado o no es valido, la tienda no se crea y se
   muestra el error correspondiente.
7. Si los datos son validos, se crea la tienda asociada al usuario autenticado.
8. La persona es redirigida al dashboard de su tienda.

La operacion debe impedir dos creaciones para el mismo usuario aun cuando se
reciban solicitudes concurrentes.

### Administracion

1. La proveedora accede a la seccion de su tienda desde el dashboard.
2. Consulta titulo, descripcion, imagen y subdominio.
3. Puede actualizar titulo, descripcion o imagen.
4. El subdominio permanece visible como dato permanente y no editable.
5. La aplicacion rechaza cualquier intento de modificar una tienda que no
   pertenezca a la persona autenticada.

### Dashboard del vendedor

- Si no existe una tienda, el dashboard muestra un estado de incorporacion con
  una accion `Create Store`, conservando el design system neo-brutalista.
- Si existe una tienda, el dashboard muestra una tarjeta o bloque de identidad
  con titulo, descripcion, imagen de perfil y subdominio.
- La accion principal cambia a `Manage Store` cuando la tienda existe.
- El subdominio se presenta como informacion permanente, no como un control de
  edicion.
- Las metricas de ingresos, ventas y productos de la maqueta continuan siendo
  datos de ejemplo en esta funcionalidad. No se convierten en datos reales
  hasta que existan las funcionalidades que los producen.
- El listado de productos continua siendo de ejemplo en esta funcionalidad.
  La feature 7 define la gestion de productos, pero no se implementa como
  parte de este borrador.

## Pagina publica

La pagina publica de la tienda utiliza el subdominio configurado y muestra,
como minimo, el titulo, la descripcion y la imagen de perfil cuando exista.

Una tienda sin verificacion de Stripe Connect no debe aparecer como tienda
disponible para que compradores realicen compras, conforme a `docs/spec.md`.
La forma concreta de representar una tienda no verificada en la pagina publica
se mantiene alineada con la funcionalidad de verificacion y no habilita compras
por el solo hecho de crear la tienda.

## Criterios de aceptacion

| ID | Criterio |
| --- | --- |
| A1 | Una persona visitante no puede crear una tienda y es redirigida al login. |
| A2 | Una persona autenticada sin tienda puede abrir el formulario de creacion. |
| A3 | El formulario permite crear una tienda sin imagen de perfil. |
| A4 | Una tienda creada conserva el usuario propietario, titulo, descripcion y subdominio normalizado. |
| A5 | Un subdominio ocupado impide la creacion y muestra un error util para la persona. |
| A6 | Una persona no puede crear una segunda tienda y es redirigida a su dashboard. |
| A7 | La proveedora puede actualizar titulo, descripcion e imagen de su tienda. |
| A8 | El subdominio se muestra como solo lectura y no puede modificarse. |
| A9 | Una persona autenticada no puede consultar ni actualizar la tienda de otra persona. |
| A10 | El dashboard muestra el estado de incorporacion cuando no existe tienda y la identidad de la tienda cuando existe. |
| A11 | La pagina publica resuelve la tienda por su subdominio configurado y muestra su identidad. |
| A12 | La creacion no requiere aprobacion previa del dueño de la plataforma. |

## Fuera de alcance

- Productos, archivos, categorias, ventas, metricas y analiticas reales.
- Verificacion de Stripe Connect y habilitacion de pagos.
- Suspension o desactivacion por parte del dueño de la plataforma.
- Cambio o transferencia de propietario de una tienda.
- Cambio de subdominio despues de la creacion.
- Eliminacion de tiendas.
- Configuracion avanzada de dominios, DNS, certificados y despliegue.
- Reglas de almacenamiento definitivo, versionado o limpieza de imagenes.

## Dependencias

- Feature 1: registro e inicio de sesion para disponer de una cuenta
  autenticada compartida.
- Feature 6: verificacion del proveedor para determinar disponibilidad
  comercial publica.
- Feature 7: productos digitales para sustituir el listado de ejemplo del
  dashboard por productos reales.
- Marketplace y pagina publica de tienda para catalogo y descubrimiento.

## Pasos de implementacion

1. Crear la persistencia de tiendas con relacion unica al usuario y unicidad
   del subdominio.
2. Crear validaciones para creacion y actualizacion, incluyendo normalizacion y
   palabras reservadas.
3. Crear los endpoints protegidos de creacion, consulta y actualizacion.
4. Crear la interfaz React de creacion y administracion reutilizando el layout
   y los componentes neo-brutalistas existentes.
5. Conectar el dashboard al estado real de tienda sin convertir todavia las
   metricas ni los productos de ejemplo en consultas.
6. Crear la resolucion publica por subdominio y mostrar la identidad de la
   tienda sin habilitar reglas de compra que pertenezcan a otras features.
7. Cubrir autenticacion, unicidad, una tienda por usuario, autorizacion,
   actualizacion y estados del dashboard con pruebas de feature.

## Preguntas pendientes

No quedan decisiones de producto pendientes para implementar esta feature en
el alcance anterior. Las decisiones tecnicas de almacenamiento de imagenes,
DNS, certificados y despliegue permanecen fuera de alcance y deben resolverse
cuando se implemente la infraestructura correspondiente.

## Implementacion y cobertura

- `Store`, su migracion y `StoreFactory` representan la relacion unica con el
  usuario y los datos publicos de la tienda.
- `StoreRequest` y `UpdateStoreRequest` validan los campos, normalizan el
  subdominio y bloquean palabras reservadas.
- `StorePolicy` limita la consulta y actualizacion al propietario.
- `StoreController` implementa creacion, administracion y pagina publica.
- `DashboardController` comparte la identidad real de la tienda con el
  dashboard; las metricas y productos conservan sus datos de ejemplo.
- `resources/js/pages/stores/` contiene las pantallas React de creacion,
  administracion y pagina publica.
- `tests/Feature/StoreTest.php` cubre autenticacion, creacion sin imagen,
  normalizacion, subdominio ocupado, unica tienda, actualizacion,
  autorizacion, dashboard y pagina publica.

## Fuentes

- `docs/spec.md`, §§3.2, 4, 13, 15 y 16.
- `docs/technical.md`, §§4, 5, 6, 7 y 15-17.
- `docs/features.md`, §§2, 3, 6 y 7.
- `docs/features/feature-registration-and-login.md`.
- `resources/js/pages/dashboard.tsx`.
- `resources/js/layouts/creator-dashboard-layout.tsx`.
