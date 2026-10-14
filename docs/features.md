# features.md

# Funcionalidades principales del producto

## 1. Registro e inicio de sesión

### Descripción breve
Permite a los usuarios crear una cuenta e iniciar sesión mediante correo electrónico y contraseña o mediante una cuenta de Google. Todos los usuarios comienzan con funciones de comprador y posteriormente pueden convertirse en proveedores al crear una tienda.

### Flujo de usuario
1. El usuario accede al proceso de registro o inicio de sesión.
2. Elige registrarse con correo electrónico y contraseña o utilizar Google.
3. Si utiliza correo, proporciona nombre, apellido, nombre de usuario, correo electrónico, contraseña y confirmación de contraseña.
4. El sistema crea la cuenta sin requerir verificación del correo electrónico.
5. El usuario accede a la plataforma con las funciones disponibles para compradores.

### Descripción general de la interfaz de usuario
El usuario ve formularios de registro e inicio de sesión y una opción para autenticarse mediante Google. En el registro por correo se muestran los campos necesarios para completar su cuenta.

---

---

## 2. Creación y administración de tienda

### Descripción breve
Permite a un usuario convertirse en proveedor mediante la creación de una única tienda. La tienda cuenta con un subdominio permanente, información pública propia y un espacio de administración exclusivo para su proveedor.

### Flujo de usuario
1. Un usuario autenticado decide crear su tienda.
2. Proporciona la información básica de la tienda.
3. Elige un subdominio.
4. Si el subdominio ya está ocupado, debe elegir otro.
5. La tienda se crea sin requerir aprobación previa del dueño de la plataforma.
6. El proveedor puede seguir administrando posteriormente la información de su tienda.

### Descripción general de la interfaz de usuario
El proveedor interactúa con una sección para crear y administrar su tienda. Puede ver y modificar el título, descripción e imagen de perfil. El subdominio se muestra como parte de la identidad de la tienda y no puede cambiarse una vez creado.

---

---

## 3. Panel del proveedor

### Descripción breve
El proveedor dispone de un espacio privado desde el que administra exclusivamente su tienda, productos, archivos, ventas y proceso de verificación para recibir pagos.

### Flujo de usuario
1. El proveedor inicia sesión.
2. Accede a su panel.
3. Consulta y actualiza la información de su tienda.
4. Administra sus productos y archivos.
5. Consulta sus ventas.
6. Revisa o completa su proceso de verificación para recibir pagos.

### Descripción general de la interfaz de usuario
El panel agrupa la información y acciones relacionadas únicamente con la tienda del proveedor. Muestra accesos a configuración de tienda, productos, archivos, ventas y estado de verificación.

---

---

## 4. Panel del dueño de la plataforma

### Descripción breve
El dueño de la plataforma dispone de un panel global para supervisar y administrar el marketplace completo, sin estar limitado al contexto de una sola tienda.

### Flujo de usuario
1. El dueño accede a su panel de administración.
2. Consulta información global del marketplace.
3. Administra tiendas y proveedores.
4. Administra categorías y pedidos.
5. Configura la comisión global.
6. Modera reseñas.
7. Selecciona productos y tiendas destacadas.

### Descripción general de la interfaz de usuario
El panel muestra secciones de administración global para tiendas, proveedores, categorías, pedidos, comisiones, reseñas y elementos destacados. Desde ahí el dueño puede actuar sobre información de cualquier tienda.

---

---

## 5. Categorías de productos

### Descripción breve
Las categorías permiten organizar los productos del marketplace y de cada tienda. Son administradas únicamente por el dueño de la plataforma y cada producto debe pertenecer a una sola categoría.

### Flujo de usuario
1. El dueño de la plataforma accede a la administración de categorías.
2. Crea o administra las categorías disponibles.
3. El proveedor, al crear o editar un producto, selecciona una de esas categorías.
4. Los compradores utilizan las categorías para explorar y filtrar productos.
5. El marketplace puede mostrar la cantidad de productos disponibles en cada categoría.

### Descripción general de la interfaz de usuario
El dueño dispone de una sección de administración de categorías. Los proveedores ven las categorías disponibles al gestionar productos y los compradores las encuentran como opciones de navegación o filtrado.

---

---

## 6. Verificación del proveedor para recibir pagos

### Descripción breve
Los proveedores deben completar el proceso de verificación requerido por Stripe Connect antes de que su tienda esté disponible públicamente para realizar compras y antes de poder recibir ingresos.

### Flujo de usuario
1. El proveedor accede desde su panel al proceso de verificación.
2. Completa la información requerida por Stripe Connect.
3. Stripe Connect determina si la cuenta está habilitada para recibir pagos.
4. Cuando la cuenta queda habilitada, el proveedor se considera verificado.
5. La tienda puede aparecer públicamente para los compradores.

### Descripción general de la interfaz de usuario
El proveedor dispone de una sección dentro de su panel relacionada con su estado de verificación y el proceso necesario para recibir pagos. Mientras la verificación no esté completada, su tienda no se muestra como disponible para compradores.

---

---

## 7. Gestión de productos digitales

### Descripción breve
Permite a los proveedores crear, editar, activar y desactivar productos digitales dentro de su tienda. Los productos pertenecen a una categoría y pueden incluir varios archivos descargables.

### Flujo de usuario
1. El proveedor accede a la administración de productos.
2. Crea un nuevo producto.
3. Selecciona una categoría disponible.
4. Define un precio mayor a cero.
5. Agrega hasta cinco archivos de los formatos permitidos.
6. Activa el producto para que pueda mostrarse públicamente.
7. Posteriormente puede editarlo o desactivarlo.

### Descripción general de la interfaz de usuario
El proveedor ve un listado de sus productos y controles para crearlos o modificarlos. Durante la edición puede seleccionar la categoría, gestionar archivos, consultar el estado del producto y cambiarlo entre activo e inactivo.

---

---

## 8. Gestión de archivos de productos

### Descripción breve
Cada producto puede incluir hasta cinco archivos digitales de máximo 5 MB cada uno. Los archivos pueden reemplazarse o retirarse de la publicación actual, manteniendo el acceso histórico correspondiente a compras anteriores.

### Flujo de usuario
1. El proveedor accede a un producto.
2. Agrega o administra sus archivos.
3. Puede reemplazar un archivo existente por una nueva versión.
4. Los compradores anteriores pasan a tener acceso a la nueva versión.
5. Si intenta retirar un archivo que ya fue adquirido, recibe una advertencia.
6. Los archivos asociados con compras anteriores permanecen accesibles para esos compradores.

### Descripción general de la interfaz de usuario
Dentro de la gestión del producto, el proveedor ve los archivos asociados y opciones para agregarlos, reemplazarlos o retirarlos. Cuando una acción afecta archivos ya adquiridos, la interfaz muestra una advertencia antes de continuar.

---

---

## 9. Página pública de tienda

### Descripción breve
Cada tienda dispone de una página pública accesible mediante su propio subdominio. Desde ella, los compradores pueden conocer la tienda, explorar sus productos y aplicar filtros por categoría y rango de precio.

### Flujo de usuario
1. El comprador accede al subdominio de una tienda.
2. Visualiza la información pública de la tienda.
3. Explora el catálogo de productos disponibles.
4. Filtra productos por categoría o rango de precio.
5. Selecciona un producto para continuar con su proceso de compra.

### Descripción general de la interfaz de usuario
La página muestra el título, descripción e imagen de perfil de la tienda, junto con su catálogo de productos. También incluye opciones de filtrado por categoría y rango de precio.

---

---

## 10. Marketplace y descubrimiento

### Descripción breve
La página principal del marketplace permite descubrir productos y tiendas. Incluye productos destacados, tiendas destacadas, productos más vendidos, vendedores con mayor volumen de ventas y categorías.

### Flujo de usuario
1. El comprador entra al marketplace principal.
2. Explora productos y tiendas destacadas.
3. Consulta productos más vendidos y vendedores con mayor volumen de ventas dentro del periodo correspondiente.
4. Explora categorías y la cantidad de productos disponible en cada una.
5. Filtra productos por categoría o rango de precio.
6. Selecciona un producto o tienda para continuar explorando.

### Descripción general de la interfaz de usuario
La página principal muestra diferentes bloques de descubrimiento para productos, tiendas, categorías y rankings. También ofrece filtros por categoría y rango de precio. No incluye búsqueda por texto.

---

---

## 11. Carrito de compra por tienda

### Descripción breve
El carrito permite reunir productos antes del checkout, pero únicamente puede contener productos de una misma tienda. El usuario debe haber iniciado sesión para agregar productos y el carrito se conserva entre sesiones.

### Flujo de usuario
1. El comprador autenticado agrega un producto al carrito.
2. El sistema comprueba que pertenezca a la misma tienda que los productos ya agregados.
3. Si pertenece a otra tienda, el comprador debe vaciar el carrito actual o finalizar esa compra.
4. El comprador puede abandonar la plataforma y regresar posteriormente conservando su carrito.
5. Cuando decide comprar, continúa al proceso de checkout.

### Descripción general de la interfaz de usuario
El comprador dispone de una vista del carrito con los productos seleccionados de una sola tienda. Si intenta mezclar productos de distintas tiendas, la interfaz le informa que debe resolver primero el carrito actual.

---

---

## 12. Validación del carrito antes del checkout

### Descripción breve
Antes de iniciar el pago, la plataforma vuelve a comprobar el precio y disponibilidad de los productos. Esto evita continuar con información que haya cambiado desde que los productos fueron agregados al carrito.

### Flujo de usuario
1. El comprador inicia el proceso de checkout.
2. El sistema valida nuevamente cada producto.
3. Si un precio cambió, el carrito se actualiza y el comprador es informado.
4. El comprador debe aceptar el nuevo total para continuar.
5. Si un producto dejó de estar disponible, se elimina del carrito y se informa al comprador.
6. El resto de los productos puede permanecer en el carrito.

### Descripción general de la interfaz de usuario
Antes del pago, el comprador ve el contenido actualizado de su carrito. La interfaz muestra avisos cuando existen cambios de precio o productos que ya no están disponibles y requiere confirmación cuando cambia el total.

---

---

## 13. Checkout y pago con Stripe

### Descripción breve
Permite al comprador pagar los productos seleccionados mediante Stripe. La plataforma utiliza una sola moneda y el pedido solo se considera completado después de la confirmación exitosa del pago.

### Flujo de usuario
1. El comprador continúa desde el carrito validado al checkout.
2. Realiza el pago mediante Stripe.
3. Si el pago falla, puede volver a intentarlo.
4. Stripe confirma el pago exitoso.
5. El pedido se considera completado.
6. La plataforma retiene su comisión y el resto del ingreso corresponde al proveedor.

### Descripción general de la interfaz de usuario
El comprador ve el resumen final de su compra y el proceso de pago gestionado mediante Stripe. Después del intento recibe una respuesta de pago exitoso o fallido y, en este último caso, puede intentar nuevamente.

---

---

## 14. Comisión de la plataforma y distribución de ingresos

### Descripción breve
En cada venta, la plataforma retiene una comisión porcentual global configurable por el dueño. El resto del ingreso corresponde al proveedor y su disponibilidad depende de Stripe.

### Flujo de usuario
1. El dueño de la plataforma establece la comisión global.
2. Un comprador completa una venta.
3. Stripe confirma el pago.
4. La plataforma retiene el porcentaje configurado.
5. El resto del ingreso corresponde al proveedor.
6. El proveedor recibe sus fondos según la disponibilidad y tiempos de Stripe.

### Descripción general de la interfaz de usuario
El dueño dispone de una sección para administrar la comisión global. El proveedor puede consultar sus ventas desde su panel y su relación con los ingresos obtenidos por la tienda.

---

---

## 15. Historial de compras y acceso a archivos

### Descripción breve
Después de una compra confirmada, el comprador puede consultar los productos adquiridos y descargar sus archivos. Las descargas son ilimitadas mientras los archivos continúen disponibles.

### Flujo de usuario
1. El comprador completa una compra.
2. Accede a su sección de compras.
3. Consulta su historial y selecciona un producto adquirido.
4. Visualiza los archivos disponibles.
5. Descarga los archivos que necesite.
6. Puede regresar posteriormente y volver a descargarlos mientras sigan disponibles.

### Descripción general de la interfaz de usuario
El comprador ve una sección con su historial de compras y los productos adquiridos. Desde cada compra dispone de acceso a sus archivos descargables y de una advertencia recomendando conservar sus propias copias.

---

---

## 16. Reseñas de productos

### Descripción breve
Los compradores pueden reseñar productos que hayan adquirido. Cada reseña incluye una calificación del 1 al 5 y un texto, y debe pasar por moderación antes de publicarse.

### Flujo de usuario
1. El comprador accede a un producto que ya adquirió.
2. Publica una reseña con calificación y texto.
3. La reseña queda pendiente de moderación.
4. El dueño de la plataforma puede aprobarla, rechazarla o eliminarla.
5. Una vez aprobada, la reseña puede mostrarse públicamente.
6. El comprador puede eliminar su reseña y publicar una nueva posteriormente.

### Descripción general de la interfaz de usuario
El comprador ve una opción para reseñar productos adquiridos y un formulario con calificación y texto. El dueño dispone de una sección de moderación donde revisa las reseñas antes de su publicación.

---

---

## 17. Suspensión de tiendas

### Descripción breve
El dueño de la plataforma puede suspender o desactivar una tienda. Una tienda suspendida deja de ser accesible públicamente, pero su proveedor conserva acceso al panel y los compradores anteriores conservan sus compras.

### Flujo de usuario
1. El dueño accede a la administración de una tienda.
2. Decide suspenderla o desactivarla.
3. La tienda deja de poder visitarse públicamente.
4. El proveedor continúa accediendo a su panel.
5. Los compradores anteriores siguen consultando sus compras y descargando sus archivos.

### Descripción general de la interfaz de usuario
El dueño dispone de controles de administración sobre el estado de las tiendas. El proveedor sigue viendo su panel privado, mientras que la página pública de una tienda suspendida deja de estar disponible.
