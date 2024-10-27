UBICACIÓN

La API está disponible en http://localhost:3000/api/v1/

COLECCIONES

Para acceder a las colecciones:
GET /:nombre_de_la_colección
Colecciones:
/televisiones;
/tiendas.

BUSCAR UNA TIENDA

Buscar una tienda en una ciudad: GET /ciudad/:nombre_de_la_ciudad

Buscar una marca de televisor en una tienda:GET
/marca/:nombre_de_la_marca_de_televisor

Buscar todas las tiendas:GET /


CREAR UN REGISTRO DE UNA TIENDA

POST /

Esquema:
nombre: (obligatorio),
direccion: (obligatorio),
horario: (opciona),
plazo_de_envio: (opcional)

MODIFICAR LOS DATOS DE UNA TIENDA

PUT /:id_tienda


BORRADO DE UN TELEVISIOR EN UNA TIENDA

DELETE /id_tienda/television/:id_television

BORRADO DE TIENDAS

DELETE /:id_tienda



BUSCAR TELEVISORES

Buscar hasta un precio determinado:
GET /maxprecio/:precio

Buscar hasta un máximo de tamaño (pulgadas):
GET /maxpulgadas/:tamaño

Buscar una marca de televisor:
GET /marca/:marca

Buscar todas las televisiones:
GET /


CREAR UN REGISTRO DE UNA TELEVISIÓN

POST /

imagen: (obligatorio),
pantalla: (obligatorio),
marca: (obligatorio),
tecnología: (obligatiorio),
precio: (obligatorio)


ACTUALIZAR TELEVISIÓN

PUT /:id_televisor


BORRAR TELEVISOR

DELETE /id_televisión
