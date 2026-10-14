# Especificación del producto

## 1. Visión general

La plataforma será un e-commerce multi-tenant enfocado en creadores y proveedores de productos digitales.

Permitirá que múltiples proveedores se registren, creen su propia tienda y vendan productos digitales desde un subdominio independiente dentro de la plataforma, por ejemplo:

```text
vendor.example.com
```

La plataforma funcionará como un marketplace centralizado donde los compradores podrán descubrir tiendas y productos, realizar compras y acceder posteriormente a los archivos adquiridos.

El producto tendrá una sola aplicación y una sola base de datos. Cada proveedor podrá administrar únicamente la información asociada con su propia tienda.

---

## 2. Objetivo del producto

El objetivo es ofrecer una plataforma donde creadores digitales puedan abrir una tienda, publicar productos, procesar ventas y entregar archivos digitales a sus compradores sin tener que construir o administrar su propio e-commerce.

La plataforma también permitirá al dueño del producto controlar la operación general del marketplace, definir categorías, administrar proveedores, supervisar pedidos, configurar comisiones y seleccionar productos y tiendas destacadas.

---

## 3. Participantes principales

### 3.1 Dueño de la plataforma

Es la persona responsable de administrar el marketplace completo.

Podrá:

- Administrar la plataforma.
- Administrar tiendas y proveedores.
- Crear y administrar categorías.
- Consultar y administrar pedidos.
- Configurar la comisión global de la plataforma.
- Administrar y moderar reseñas.
- Seleccionar productos y tiendas destacadas.
- Suspender o desactivar tiendas.
- Supervisar la operación general del marketplace.

El dueño de la plataforma tendrá acceso a información global y no estará limitado a una sola tienda.

### 3.2 Proveedor

Es un creador o vendedor que utiliza la plataforma para comercializar productos digitales.

Podrá:

- Registrarse en la plataforma.
- Crear y administrar una sola tienda.
- Definir el subdominio permanente de su tienda.
- Completar el proceso de verificación requerido por Stripe Connect para recibir pagos.
- Crear, editar, activar o desactivar productos digitales.
- Asociar uno o varios archivos con cada producto.
- Consultar las ventas realizadas en su tienda.
- Administrar únicamente la información perteneciente a su tienda.

Un proveedor no podrá administrar productos, pedidos, archivos ni información perteneciente a otra tienda.

Una misma cuenta podrá utilizar la plataforma como comprador y, además, crear una tienda para convertirse en proveedor.

### 3.3 Comprador

Es la persona que descubre y adquiere productos digitales dentro del marketplace.

Podrá:

- Registrarse con correo electrónico.
- Registrarse o iniciar sesión mediante una cuenta de Google.
- Descubrir tiendas y productos.
- Consultar la página pública de una tienda.
- Filtrar productos por categoría y rango de precio.
- Agregar productos a un carrito después de iniciar sesión.
- Realizar el pago mediante Stripe.
- Consultar sus compras.
- Descargar los archivos asociados con los productos adquiridos.
- Publicar reseñas sobre productos que haya comprado.

---

## 4. Tiendas

Cada proveedor podrá crear una sola tienda dentro de la plataforma.

Cada tienda tendrá:

- Un subdominio propio y permanente.
- Un título.
- Una descripción.
- Una imagen de perfil.
- Una página pública.
- Un catálogo de productos digitales.
- Filtros por categoría.
- Filtros por rango de precio.
- Un espacio de administración exclusivo para su proveedor.
- Sus propios productos y ventas.

Si el subdominio solicitado ya está ocupado, el proveedor deberá elegir otro.

Una tienda no requerirá aprobación previa del dueño de la plataforma para ser creada o publicada.

El dueño de la plataforma podrá suspender o desactivar una tienda.

Una tienda suspendida o desactivada no podrá visitarse públicamente. Su proveedor podrá seguir accediendo a su panel y los compradores anteriores podrán continuar descargando los archivos adquiridos.

Una tienda que todavía no haya completado correctamente la verificación requerida por Stripe Connect no aparecerá como tienda disponible para los compradores.

La información de cada tienda deberá mantenerse separada de la información de las demás tiendas, aunque todas formen parte de la misma plataforma.

---

## 5. Productos digitales

Los proveedores podrán publicar productos digitales dentro de su tienda sin aprobación previa del dueño de la plataforma.

Los formatos contemplados son:

- PDF.
- EPUB.
- Imágenes.
- Videos.
- Archivos ZIP.

Los videos se entregarán como archivos descargables y no se reproducirán dentro de la plataforma.

Cada producto:

- Pertenecerá a una sola categoría.
- Podrá contener hasta cinco archivos.
- Admitirá archivos de hasta 5 MB cada uno.
- Podrá estar activo o inactivo.
- Deberá tener un precio mayor a cero.

No se contemplan productos gratuitos en esta primera versión.

Un producto activo podrá mostrarse dentro de la tienda que lo publica y en las áreas de descubrimiento del marketplace.

Un producto inactivo no estará disponible para nuevas compras.

El dueño de la plataforma podrá seleccionar manualmente determinados productos para mostrarlos como destacados.

---

## 6. Categorías

Las categorías serán administradas por el dueño de la plataforma.

Los proveedores utilizarán estas categorías para clasificar sus productos.

Cada producto pertenecerá únicamente a una categoría.

Las categorías servirán para:

- Organizar el catálogo.
- Facilitar el descubrimiento de productos.
- Filtrar productos dentro de las páginas públicas de las tiendas.
- Filtrar productos dentro del marketplace principal.
- Mostrar la cantidad de productos disponibles dentro de cada categoría.

Los proveedores no podrán crear categorías por su cuenta.

---

## 7. Marketplace y descubrimiento

La plataforma tendrá una página principal de marketplace.

Desde esta página, los compradores podrán descubrir:

- Productos destacados.
- Tiendas destacadas.
- Productos más vendidos dentro de un periodo determinado, calculados con base en el importe total generado.
- Vendedores con mayor cantidad de ventas dentro de un periodo determinado, calculados con base en el importe total generado.
- Categorías y la cantidad de productos disponibles en cada una.
- Productos filtrados por categoría.
- Productos filtrados por rango de precio.

No se incluirá búsqueda por texto en esta primera versión.

Los productos y tiendas destacados serán seleccionados manualmente por el dueño de la plataforma.

El marketplace funcionará como punto de entrada general, mientras que cada tienda conservará su propia página pública y subdominio.

---

## 8. Carrito de compra

El comprador deberá iniciar sesión antes de agregar productos al carrito.

Un carrito solo podrá contener productos pertenecientes a una misma tienda.

No se podrán combinar en una sola compra productos de proveedores o tiendas diferentes.

Cuando un comprador intente agregar un producto de otra tienda, deberá vaciar el carrito actual o finalizar primero la compra pendiente.

El carrito se conservará cuando el usuario cierre sesión o abandone temporalmente la plataforma.

Antes de iniciar el checkout, la plataforma deberá validar nuevamente la información de cada producto.

Si un producto cambió de precio:

- El carrito deberá actualizarse con el precio vigente.
- El comprador deberá ser informado del cambio.
- El checkout no continuará hasta que el comprador confirme que acepta el nuevo total.

Si un producto fue desactivado o dejó de estar disponible:

- El producto deberá eliminarse del carrito.
- El comprador deberá ser informado.
- El resto de los productos podrá permanecer en el carrito.

No se admitirán cupones ni descuentos en esta primera versión.

---

## 9. Checkout y pagos

El checkout se realizará mediante Stripe.

La plataforma manejará una sola moneda.

Durante una venta:

- El comprador pagará el importe vigente de los productos seleccionados.
- La plataforma retendrá una comisión global.
- La comisión será un porcentaje configurable por el dueño de la plataforma.
- El resto del ingreso corresponderá al proveedor.

Los proveedores deberán completar el proceso de verificación requerido por Stripe Connect para poder recibir pagos.

Un proveedor se considerará verificado cuando Stripe Connect indique que su cuenta está habilitada para recibir pagos.

Las tiendas no verificadas no estarán disponibles públicamente para realizar compras.

Los pagos al proveedor se realizarán tan pronto como Stripe los permita, de acuerdo con su disponibilidad y sus tiempos de procesamiento.

Cuando un pago falle, el comprador deberá poder intentar realizarlo nuevamente.

Un pedido solo se considerará completado después de que Stripe confirme que el pago fue exitoso.

No se contemplan reembolsos, cancelaciones ni gestión de disputas dentro de esta primera versión.

---

## 10. Compras y acceso a archivos

Después de realizar una compra confirmada, el comprador tendrá una sección donde podrá consultar los productos adquiridos.

Desde esta sección podrá:

- Consultar su historial de compras.
- Identificar los productos comprados.
- Descargar los archivos incluidos en cada producto.
- Descargar los archivos un número ilimitado de veces mientras continúen disponibles.

El acceso a los archivos será permanente mientras dichos archivos sigan existiendo en la plataforma.

La plataforma deberá informar al comprador que es recomendable descargar y conservar sus archivos, debido a que el proveedor podría eliminarlos posteriormente.

Los archivos no podrán visualizarse dentro de la plataforma; deberán descargarse.

Si un proveedor reemplaza un archivo:

- El enlace disponible para los compradores se actualizará.
- Los compradores anteriores tendrán acceso a la nueva versión.
- El proveedor podrá crear un producto nuevo cuando desee vender la nueva versión por separado.

El proveedor podrá eliminar un archivo de la publicación actual del producto. Antes de hacerlo, la plataforma deberá advertirle que el archivo ya fue adquirido por compradores.

Los archivos asociados con compras anteriores deberán conservarse para que los compradores puedan seguir descargándolos desde su sección de compras.

Si un producto deja de estar disponible para nuevas compras, permanecerá visible dentro del historial de quienes ya lo adquirieron.

La eliminación o desactivación de una tienda no deberá eliminar los registros de compras ya realizadas ni impedir que los compradores anteriores descarguen sus archivos.

---

## 11. Reseñas

Solo los compradores que hayan adquirido un producto podrán publicar una reseña sobre ese producto.

Cada reseña incluirá:

- Una calificación numérica del 1 al 5.
- Un texto escrito por el comprador.

Cada comprador podrá publicar una sola reseña por producto adquirido.

Las reseñas requerirán moderación antes de publicarse.

El dueño de la plataforma podrá aprobar, rechazar o eliminar reseñas.

Los proveedores no podrán responder reseñas.

El comprador no podrá editar una reseña después de enviarla, pero podrá eliminarla. Si elimina su reseña, podrá publicar una nueva posteriormente.

---

## 12. Panel del dueño de la plataforma

El dueño de la plataforma tendrá un panel de administración global.

Desde este panel podrá administrar:

- La plataforma.
- Tiendas.
- Proveedores.
- Categorías.
- Pedidos.
- La comisión global.
- Reseñas y su moderación.
- Productos destacados.
- Tiendas destacadas.

El panel deberá ofrecer una visión general del marketplace y permitir actuar sobre información de cualquier tienda.

---

## 13. Panel del proveedor

Cada proveedor tendrá un panel exclusivo para su tienda.

Desde este panel podrá administrar:

- El título de su tienda.
- La descripción de su tienda.
- La imagen de perfil de su tienda.
- Sus productos.
- Los archivos asociados con sus productos.
- El estado activo o inactivo de sus productos.
- Sus ventas.
- Su proceso de verificación para recibir pagos.

El proveedor solo podrá consultar y modificar información perteneciente a su propia tienda.

El subdominio no podrá modificarse después de crear la tienda.

---

## 14. Registro e inicio de sesión

Los usuarios podrán registrarse mediante:

- Correo electrónico y contraseña.
- Una cuenta de Google.

No se requerirá verificación del correo electrónico en esta primera versión.

Para registrarse mediante correo electrónico, el usuario deberá proporcionar:

- Nombre.
- Apellido.
- Nombre de usuario.
- Correo electrónico.
- Contraseña.
- Confirmación de contraseña.

Una misma cuenta podrá comprar productos y crear una tienda.

Todos los usuarios comenzarán con las funciones de comprador y podrán convertirse en proveedores al crear su tienda.

---

## 15. Reglas principales del producto

1. La plataforma admitirá múltiples tiendas.
2. Cada proveedor podrá administrar una sola tienda.
3. Cada tienda utilizará un subdominio único que no podrá cambiarse.
4. Si un subdominio ya está ocupado, deberá elegirse otro.
5. Las tiendas no necesitarán aprobación previa.
6. El dueño de la plataforma podrá suspender o desactivar tiendas.
7. Una tienda no verificada mediante Stripe Connect no aparecerá públicamente.
8. Cada proveedor administrará únicamente la información de su tienda.
9. Los productos serán exclusivamente digitales.
10. Cada producto pertenecerá a una sola categoría.
11. Un producto podrá contener hasta cinco archivos.
12. Cada archivo podrá tener un tamaño máximo de 5 MB.
13. Los productos podrán estar activos o inactivos.
14. No se admitirán productos gratuitos.
15. Los compradores deberán iniciar sesión para agregar productos al carrito.
16. Un carrito solo podrá contener productos de una misma tienda.
17. El carrito se conservará entre sesiones.
18. Los precios y la disponibilidad se validarán antes del checkout.
19. El checkout se realizará mediante Stripe.
20. La plataforma manejará una sola moneda.
21. La plataforma retendrá una comisión global porcentual.
22. Los pagos al proveedor dependerán de la disponibilidad y los tiempos de Stripe.
23. Los pagos fallidos podrán volver a intentarse.
24. No se contemplan reembolsos, cancelaciones ni disputas.
25. Los compradores podrán descargar sus archivos de forma ilimitada mientras existan.
26. Los archivos reemplazados estarán disponibles también para compradores anteriores.
27. Los productos comprados permanecerán en el historial aunque se desactiven.
28. Solo los compradores que hayan adquirido un producto podrán reseñarlo.
29. Cada comprador podrá publicar una sola reseña por producto.
30. Las reseñas incluirán una calificación del 1 al 5 y un texto.
31. Las reseñas requerirán moderación.
32. Una reseña eliminada podrá publicarse nuevamente.
33. Una misma cuenta podrá actuar como comprador y proveedor.
34. Los usuarios podrán registrarse con correo y contraseña o con Google.
35. No se requerirá verificación de correo.
36. El marketplace no tendrá búsqueda por texto.
37. El marketplace incluirá filtros por categoría y rango de precio.
38. El dueño seleccionará manualmente productos y tiendas destacadas.

---

## 16. Límites actuales del alcance

Esta primera versión no contempla:

- Venta de productos físicos.
- Más de una tienda por proveedor.
- Cambio de subdominio después de crear la tienda.
- Carritos con productos de múltiples tiendas.
- Categorías creadas por proveedores.
- Productos asociados con múltiples categorías.
- Productos gratuitos.
- Más de cinco archivos por producto.
- Archivos mayores a 5 MB.
- Reproducción o visualización de archivos dentro de la plataforma.
- Cupones o descuentos.
- Búsqueda por texto.
- Múltiples monedas.
- Comisiones diferentes por tienda.
- Comisiones fijas.
- Reembolsos.
- Cancelaciones.
- Gestión de disputas.
- Respuestas de proveedores a reseñas.
- Edición de reseñas.
- Múltiples aplicaciones independientes por proveedor.
- Múltiples bases de datos separadas por tienda.
- Esquemas de base de datos.
- Endpoints, rutas, archivos, clases o detalles técnicos de implementación.
- Detalles internos de integración con Stripe.
- Detalles técnicos sobre almacenamiento o entrega de archivos.
- Detalles técnicos sobre la resolución de subdominios.
- Funcionalidades no descritas explícitamente en este documento.

---

## 17. Preguntas pendientes

No hay preguntas pendientes para esta primera versión.

---

## 18. Criterio general de éxito

El producto cumplirá su objetivo principal cuando:

- Un usuario pueda registrarse con correo y contraseña o con Google.
- Un usuario pueda crear una sola tienda.
- La tienda pueda operar desde un subdominio único y permanente.
- El proveedor pueda completar su verificación mediante Stripe Connect.
- Una tienda verificada pueda aparecer públicamente.
- El proveedor pueda publicar productos digitales sin aprobación previa.
- Cada producto pueda contener hasta cinco archivos descargables.
- Un comprador autenticado pueda agregar productos de una sola tienda al carrito.
- La plataforma pueda validar precios y disponibilidad antes del checkout.
- Un comprador pueda completar una compra mediante Stripe.
- La plataforma pueda retener su comisión porcentual.
- El proveedor pueda recibir el ingreso restante según la disponibilidad de Stripe.
- El comprador pueda consultar sus compras y descargar los archivos adquiridos.
- Los archivos reemplazados estén disponibles para compradores anteriores.
- Un comprador pueda publicar una reseña que pase por moderación.
- El dueño de la plataforma pueda administrar el marketplace completo.
- Cada proveedor permanezca limitado a la información de su propia tienda.
