# technical.md

# Restricciones técnicas iniciales

## 1. Propósito

Este documento define las restricciones técnicas iniciales para la primera versión del e-commerce multi-tenant.

Su objetivo es establecer un marco arquitectónico general que mantenga la implementación alineada con la especificación funcional del producto, sin entrar todavía en decisiones de bajo nivel.

No se incluyen esquemas de base de datos, migraciones, clases, endpoints, comandos, estructura de carpetas ni detalles concretos de implementación.

---

## 2. Stack principal

La aplicación utilizará:

- Laravel como framework principal del backend.
- React para la interfaz de usuario.
- TypeScript para el desarrollo del frontend.
- Inertia como capa de integración entre Laravel y React.
- Tailwind CSS para estilos.
- MySQL como base de datos relacional.

La solución será una única aplicación que atenderá:

- El marketplace público.
- Las páginas públicas de cada tienda.
- El panel del dueño de la plataforma.
- El panel de los proveedores.
- La experiencia de los compradores.

---

## 3. Arquitectura general

La plataforma utilizará una arquitectura monolítica con una sola aplicación y una sola base de datos.

No se utilizarán aplicaciones independientes por proveedor ni bases de datos separadas por tienda.

El contexto de tienda deberá formar parte de la lógica general de la aplicación para garantizar que cada proveedor únicamente pueda consultar y modificar la información que corresponde a su propia tienda.

El dueño de la plataforma operará fuera de esta restricción de tienda cuando necesite administrar información global.

---

## 4. Multi-tenancy

El multi-tenancy será una implementación propia y ligera.

No se establece como requisito inicial utilizar un paquete especializado de multi-tenancy.

La aplicación compartirá:

- Código.
- Infraestructura.
- Base de datos.
- Sistema de autenticación.

La separación entre tenants será lógica.

Cada tienda actuará como un tenant dentro de la aplicación.

La aplicación deberá garantizar que un proveedor no pueda acceder, consultar ni modificar información perteneciente a otra tienda.

Esta separación deberá mantenerse tanto en operaciones iniciadas desde la interfaz como en cualquier procesamiento interno relacionado con una tienda.

---

## 5. Identificación de tiendas mediante subdominios

Cada tienda se identificará públicamente mediante un subdominio propio, por ejemplo:

```text
vendor.example.com
```

El subdominio deberá permitir a la aplicación determinar qué tienda corresponde a una solicitud pública.

Cada proveedor podrá tener una sola tienda.

Cada subdominio deberá ser único.

Una vez creado, el subdominio no podrá modificarse.

Las páginas públicas de una tienda deberán depender del contexto determinado por ese subdominio.

El marketplace principal seguirá formando parte de la misma aplicación, pero no representará una tienda específica.

---

## 6. Control de acceso

La aplicación deberá distinguir al menos tres capacidades funcionales:

- Administración global de la plataforma.
- Administración de una tienda.
- Uso de la plataforma como comprador.

Una misma cuenta podrá actuar como comprador y proveedor.

Todos los usuarios comienzan con las capacidades de comprador y pueden convertirse en proveedores al crear una tienda.

El proveedor únicamente podrá administrar:

- Su propia tienda.
- Sus propios productos.
- Los archivos asociados con sus productos.
- Sus propias ventas.
- Su proceso de verificación para recibir pagos.

El dueño de la plataforma podrá acceder a información global y administrar tiendas, proveedores, categorías, pedidos, comisiones, reseñas y elementos destacados.

El control de acceso no deberá depender únicamente de que una URL corresponda a determinada tienda; la pertenencia de los recursos también deberá respetarse en todas las operaciones.

---

## 7. Estados que afectan la disponibilidad pública

La disponibilidad pública de una tienda dependerá de condiciones funcionales establecidas en la especificación.

Una tienda que no haya completado correctamente la verificación requerida por Stripe Connect no deberá estar disponible públicamente para realizar compras.

Una tienda suspendida tampoco podrá visitarse públicamente.

La suspensión de una tienda no deberá impedir que:

- El proveedor acceda a su panel.
- Los compradores anteriores accedan a sus compras y archivos adquiridos.

Los productos podrán estar activos o inactivos.

Los productos inactivos no deberán estar disponibles para nuevas compras.

---

## 8. Productos y archivos digitales

La plataforma manejará exclusivamente productos digitales.

Los formatos contemplados inicialmente son:

- PDF.
- EPUB.
- Imágenes.
- Videos.
- ZIP.

Cada producto podrá contener hasta cinco archivos.

Cada archivo tendrá un tamaño máximo de 5 MB.

Los archivos se entregarán mediante descarga.

No se contempla reproducción o visualización de archivos dentro de la plataforma.

Los compradores podrán descargar los archivos adquiridos de forma ilimitada mientras dichos archivos continúen disponibles.

Cuando un proveedor reemplace un archivo, los compradores anteriores deberán tener acceso a la nueva versión.

Cuando un archivo sea retirado de la publicación actual de un producto, los archivos asociados con compras anteriores deberán conservarse para mantener el acceso histórico de los compradores.

Por lo tanto, la arquitectura de almacenamiento deberá diferenciar conceptualmente entre la disponibilidad actual de un archivo dentro de un producto y la conservación del acceso asociado con compras anteriores.

---

## 9. Carrito y consistencia de compra

El carrito estará asociado con un comprador autenticado y deberá conservarse entre sesiones.

Un carrito solo podrá contener productos pertenecientes a una misma tienda.

Antes de iniciar el checkout, la aplicación deberá volver a comprobar:

- La disponibilidad de los productos.
- El precio vigente de los productos.

Si el precio cambió, el comprador deberá conocer y aceptar el nuevo total antes de continuar.

Si un producto dejó de estar disponible, deberá retirarse del carrito antes de continuar con la compra.

La aplicación no deberá asumir que la información almacenada previamente en el carrito continúa siendo válida al momento del checkout.

---

## 10. Pagos

Stripe será el proveedor de pagos de la plataforma.

El checkout se realizará mediante Stripe.

La aplicación manejará una sola moneda en esta primera versión.

Un pedido únicamente deberá considerarse completado cuando Stripe confirme que el pago fue exitoso.

Cuando un pago falle, el comprador deberá poder volver a intentarlo.

La aplicación no contempla en esta primera versión:

- Reembolsos.
- Cancelaciones.
- Gestión de disputas.

---

## 11. Stripe Connect

Stripe Connect se utilizará para:

- La verificación de proveedores.
- Determinar si un proveedor está habilitado para recibir pagos.
- La distribución de los ingresos de cada venta.

Un proveedor se considerará verificado cuando Stripe Connect indique que su cuenta está habilitada para recibir pagos.

La plataforma retendrá una comisión porcentual global configurable.

El resto del ingreso corresponderá al proveedor.

La disponibilidad y los tiempos para que el proveedor reciba sus fondos dependerán de Stripe.

La aplicación deberá tratar el estado de Stripe Connect como información externa que puede afectar la disponibilidad comercial de una tienda.

---

## 12. Dependencia de servicios externos

Stripe y Stripe Connect serán dependencias externas críticas.

La aplicación no podrá asumir que una operación externa se completa de manera inmediata.

Las decisiones de negocio relacionadas con pagos, verificación y disponibilidad de fondos deberán basarse en estados confirmados por Stripe.

Las fallas temporales del proveedor de pagos no deberán interpretarse automáticamente como una confirmación exitosa.

---

## 13. Autenticación

La plataforma permitirá registro e inicio de sesión mediante:

- Correo electrónico y contraseña.
- Google.

El registro mediante correo deberá solicitar:

- Nombre.
- Apellido.
- Nombre de usuario.
- Correo electrónico.
- Contraseña.
- Confirmación de contraseña.

No se requerirá verificación de correo electrónico en esta primera versión.

La autenticación será compartida por las distintas áreas de la aplicación, ya que una misma cuenta puede actuar como comprador y proveedor.

---

## 14. Persistencia y separación de información

MySQL será la única base de datos principal de la aplicación.

La información de todas las tiendas coexistirá dentro de la misma base de datos.

La arquitectura deberá mantener una separación lógica estricta entre la información de diferentes tiendas.

La información global de la plataforma, como categorías y configuración de comisión, deberá poder compartirse entre tiendas cuando corresponda.

La información histórica de compras deberá conservarse incluso cuando un producto deje de estar disponible o una tienda sea suspendida o desactivada.

---

## 15. Paneles y superficies de la aplicación

La aplicación tendrá varias superficies funcionales dentro del mismo sistema:

### Marketplace público

Permitirá descubrir productos, tiendas, categorías y elementos destacados.

### Tiendas públicas

Se resolverán mediante subdominios y mostrarán el catálogo correspondiente a una sola tienda.

### Área del comprador

Permitirá consultar compras y acceder a los archivos adquiridos.

### Panel del proveedor

Permitirá administrar la única tienda del proveedor, sus productos, archivos, ventas y proceso de verificación.

### Panel del dueño de la plataforma

Permitirá administrar información global del marketplace.

Estas superficies deberán compartir la misma aplicación y autenticación cuando corresponda, pero respetando sus reglas de acceso.

---

## 16. Límites técnicos iniciales

Para esta primera versión se mantienen las siguientes restricciones:

- Una sola aplicación.
- Una sola base de datos MySQL.
- Multi-tenancy propio y ligero.
- Una sola tienda por proveedor.
- Identificación pública de tiendas mediante subdominios.
- Sin bases de datos independientes por tenant.
- Sin aplicaciones independientes por tenant.
- Sin búsqueda de texto.
- Sin múltiples monedas.
- Sin productos físicos.
- Sin productos gratuitos.
- Sin reproducción de archivos dentro de la plataforma.
- Sin reembolsos, cancelaciones ni gestión de disputas.
- Sin definición en este documento de estructuras internas de código o base de datos.

---

## 17. Decisiones técnicas pendientes

Los siguientes puntos no pueden derivarse de la especificación funcional ni de las restricciones técnicas proporcionadas y deberán decidirse antes o durante el diseño técnico detallado.

### Infraestructura y despliegue

- Qué proveedor o plataforma alojará la aplicación.
- Cómo se configurarán los subdominios dinámicos en producción.
- Cómo se gestionarán certificados HTTPS para los subdominios.
- Qué estrategia de despliegue se utilizará.
- Qué entornos existirán además de producción.

### Archivos

- Qué servicio o infraestructura almacenará los archivos digitales.
- Si los archivos serán almacenados localmente o en almacenamiento de objetos.
- Cómo se protegerá técnicamente el acceso a archivos privados.
- Cómo se conservarán versiones o copias históricas cuando un archivo vendido sea reemplazado o retirado.
- Cómo se gestionará la eliminación física definitiva de archivos que ya no deban conservarse.

### Stripe

- Qué modalidad concreta de integración de Stripe Connect se utilizará.
- Cómo se realizará técnicamente la distribución de ingresos entre plataforma y proveedor.
- Qué estrategia se utilizará para sincronizar los estados de pagos y cuentas Connect con la aplicación.
- Cómo se manejarán confirmaciones tardías o duplicadas de Stripe.
- Qué estados internos representarán un pago pendiente, fallido o completado.
- Qué estados internos representarán el proceso de verificación de un proveedor.
- Cómo se recuperará la aplicación si Stripe confirma un pago pero la aplicación falla antes de procesarlo completamente.

### Autenticación con Google

- Qué mecanismo concreto se utilizará para integrar Google.
- Cómo se resolverán cuentas que utilizan la misma dirección de correo mediante distintos métodos de autenticación.

### Procesamiento asíncrono

- Si la primera versión utilizará procesamiento en segundo plano.
- Qué operaciones, si existen, requerirán colas o procesamiento diferido.
- Qué mecanismo se utilizaría para reintentar operaciones externas fallidas.

### Caché y sesiones

- Qué mecanismo se utilizará para almacenar sesiones.
- Si será necesario utilizar una capa de caché adicional.
- Cómo se mantendrá técnicamente el carrito persistente entre sesiones.

### Estados del dominio

- Qué conjunto exacto de estados técnicos representará una tienda.
- Qué conjunto exacto de estados técnicos representará un pedido.
- Qué conjunto exacto de estados técnicos representará una reseña pendiente de moderación.
- Cómo se representarán los cambios de disponibilidad derivados del estado de Stripe Connect.

### Historial de compras

- Qué información de un producto deberá conservarse como fotografía histórica al momento de una compra.
- Cómo se distinguirá técnicamente la información actual de un producto de la información que correspondía al momento de la venta.
- Cómo se conservará el acceso histórico a archivos cuando el producto o la tienda cambien posteriormente.

### Observabilidad y operación

- Qué estrategia se utilizará para logs.
- Qué errores externos deberán generar alertas.
- Qué nivel de auditoría requerirán operaciones sensibles como pagos, suspensiones de tiendas y eliminación de archivos.

### Seguridad

- Qué estrategia concreta se utilizará para proteger descargas privadas.
- Qué medidas adicionales se aplicarán a operaciones sensibles.
- Qué política de rate limiting será necesaria.
- Qué estrategia se utilizará para validar y proteger los archivos subidos por proveedores.

---

## 18. Principio arquitectónico

La prioridad técnica de esta primera versión será mantener una arquitectura sencilla.

El sistema deberá comenzar como una única aplicación Laravel con React e Inertia, una única base de datos MySQL y separación lógica de tenants mediante el contexto de tienda.

Las decisiones adicionales deberán introducirse únicamente cuando sean necesarias para cumplir las reglas funcionales del producto o para garantizar la integridad, seguridad y operación correcta de la plataforma.
