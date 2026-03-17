---
title: NAHPU Día 1
sidebar:
    label: NAHPU Día 1
    order: 2
---
NAHPU es una aplicación de catalogación basada en proyectos. Los datos se gestionan y organizan en función de un proyecto. Cada proyecto puede tener varias personas, sitios, narrativas, eventos de recolección y registros de especímenes. La aplicación está diseñada para su uso en el campo, pero también se puede utilizar en el laboratorio.

## Flujo de trabajo típico

### 1. Crear un nuevo proyecto

Use el botón `+` en la esquina inferior derecha de la pantalla de inicio. El nombre del proyecto debe tener entre 3 y 25 caracteres.

Puede agregar una descripción del proyecto. Esto es opcional, pero es útil para recordar el propósito y el alcance del proyecto.

Luego, seleccione el formato de catálogo principal. La aplicación actualmente admite formatos de catálogo de mamíferos y aves. Separamos los murciélagos de otros mamíferos. El formato de murciélago tendrá un campo de antebrazo en el formulario de medición. Puede cambiar el formato del catálogo más tarde en la configuración del proyecto. NAHPU permite la catalogación de todos los grupos de taxones admitidos dentro del mismo proyecto.

Después de crear un proyecto, la aplicación genera automáticamente un UUID de proyecto. Este identificador único se utiliza en toda la base de datos para distinguir los registros de diferentes proyectos. Usamos [UUID versión 4](https://en.wikipedia.org/wiki/Universally_unique_identifier). Es casi imposible que dos UUID colisionen.

### 2. Agregar un nuevo personal

Puede navegar hasta el proyecto y agregar nuevo personal. Necesita al menos una persona para asumir el rol de catalogador de cuidado de especímenes. Puede agregar más personas con diferentes roles.

[Catalogador](./usages/personnel#cataloger) es responsable de catalogar el espécimen. En algunas instituciones, esto podría llamarse un colector. En la aplicación, llamamos colector a cualquiera que recolecte el espécimen, ya sea que esté involucrado en la catalogación de la aplicación o no. Su inicial y número de campo se utilizarán para generar la ID de campo en la página del catálogo de especímenes. Su nombre también aparecerá cada vez que el campo solicite un nombre de personal, como el personal de recolección и el preparador. La aplicación no permite cambiar el rol de catalogador después de su creación.

[Solo preparador](./usages/personnel#preparator-only) es una persona que ayuda a preparar el espécimen pero no participa en la gestión de los datos. Sus nombres no aparecerán en el campo de catalogador de la página de especímenes, sino en otro lugar, como en los campos `Preparador` y `Personal de recolección` en la página de especímenes.

Para el resto del personal que no participa directamente en el cuidado de los especímenes, seleccione [Ninguno](./usages/personnel#none) como su rol. Sus nombres solo aparecerán en el campo `Personal de recolección`.

### 3. Agregar un nuevo taxón

Puede agregar un taxón manualmente usando el botón Agregar taxón o importar desde un archivo.

Los formatos preferidos son `.xlsx`, `.csv` y `.tsv`. NAHPU hará un intento de mejor esfuerzo para analizar otros tipos de archivos.

Para los archivos delimitados reconocidos, la aplicación selecciona los delimitadores por extensión (`.csv` = coma, `.tsv` = tabulación). Para las extensiones no reconocidas, la detección automática prueba primero Excel, coma, tabulación y punto y coma. Si eso falla, use la anulación del analizador avanzado e ingrese un delimitador sin formato personalizado.

El mejor soporte es para `.xlsx`; los formatos de Excel más antiguos/otros pueden fallar.

Su archivo de importación requiere todas estas columnas: `class`, `Order`, `family`, `genus`, `epithet`. También puede incluir `scientific name`, `common name` y `notes`. La aplicación detectará automáticamente los alias de encabezado admitidos (por ejemplo, `taxonClass`, `taxonOrder`, `taxonFamily`, `specificEpithet`). Puede seleccionar manualmente el tipo de columna usando el menú desplegable si la aplicación no asigna automáticamente la columna correcta para cada dato. Se ignorarán otras columnas.

Tabla de importación de taxones de ejemplo:

| class | Order | family | genus | epithet | scientific name | common name | notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mammalia | Rodentia | Muridae | Bunomys | coelestis | Bunomys coelestis | Rata celestial de la colina | |
| Mammalia | Rodentia | Muridae | Bunomys | penitus | Bunomys penitus | Rata de la colina del interior | |

### 4. Crear un sitio

Para crear un nuevo sitio, use el botón `+` en la esquina superior derecha del sitio. Complete al menos la `ID del sitio`. La aplicación limita la ID del sitio a 20 caracteres. Se referirá a esta ID en todo el campo de registro cada vez que solicite un sitio. Puede hacerlo corto pero descriptivo. A menudo etiquetamos la ciudad, pueblo o aldea de la ID tal como es. Por ejemplo, la ciudad de Bogor será BOGOR. Por otro lado, la línea de trampa a menudo usa una ID con la abreviatura de la localidad y `L` para indicar una línea. Por ejemplo, la línea 1 en el monte Gede-Pangrango será `GP-L1`.

### 5. Agregar narrativa

Para crear una narrativa, use el botón `+` en la esquina superior derecha de la narrativa. Seleccione la fecha y la ID del sitio. Luego, escriba la narrativa.

### 6. Agregar eventos de recolección

Los eventos de recolección lo ayudan a realizar un seguimiento de los esfuerzos de recolección, el personal y los datos meteorológicos de cada evento. Los registros de especímenes se vinculan al evento en lugar del sitio. De esta manera, puede tener múltiples eventos de recolección en un solo sitio.

Para crear un evento de recolección, use el botón `+` en la esquina superior derecha del evento de recolección. Seleccione `ID del sitio`, `fecha de inicio`, `hora de inicio`, `fecha de finalización` y `hora de finalización`. Luego, complete el resto del formulario.

A diferencia del sitio que solo creará cada vez que se mueva a un nuevo sitio, los eventos de recolección se crean para cada esfuerzo de recolección. Por ejemplo, al estudiar roedores nocturnos, a menudo colocamos trampas la noche anterior y las revisamos al día siguiente. Crearemos un evento de recolección después de recolectar el espécimen. La fecha de inicio será un día antes y la fecha de finalización será hoy.

La aplicación combina la ID del sitio y la fecha de inicio para crear una ID única para cada evento de recolección. Por ejemplo, `GP-L1-23 de marzo de 2023`. Usará esta ID para referirse al evento de recolección en el registro del espécimen. En algunos casos extremos en los que tiene múltiples eventos de recolección en un solo día en el mismo sitio, puede agregar un sufijo a la ID. Por ejemplo, `Línea1-26 de marzo de 2023-1` y `Línea1-26 de marzo de 2023-2`.

### 7. Agregar registros de especímenes

Para crear un registro de espécimen, use el botón `+` en la esquina superior derecha del registro de espécimen. El icono de registro de espécimen en la barra de navegación le informa sobre el formato activo actual. Generará el formato coincidente para el catálogo actualmente activo. La única diferencia entre los diferentes formatos de catálogo son los campos de medición. Después de crear un nuevo registro de espécimen, complete la información relevante. Repita el proceso para los siguientes especímenes.

:::tip
NAHPU está diseñado para permitir a los recolectores recolectar diferentes taxones. Para la versión actual, puede tener aves, murciélagos y otros mamíferos en el mismo proyecto. Cambie el formato del catálogo en la configuración cuando agregue un grupo de taxones diferente que difiera del formato de catálogo actualmente activo. NAHPU generará un formulario para ese grupo de taxones cuando cree un nuevo registro de espécimen. Al desplazarse por diferentes registros de especímenes. Puede verificar qué formato de catálogo está en la página actual mirando el icono en las partes del espécimen. El catálogo de mamíferos será una `pata` y el de aves una `cabeza de pájaro`.
:::

### 8. Exportar registros

Para exportar registros, vaya al menú del panel de control (indicado por el icono de hamburguesa/tres líneas horizontales en la esquina superior izquierda). Tenemos múltiples opciones de exportación:

- Crear un informe. Genere una lista de especies, medios y coordenadas del sitio en formato delimitado (.csv o .tsv).

- Agrupar proyectos. Genere informes disponibles (p. ej., recuento de especies), narrativas, sitios, eventos de recolección y registros de especímenes. Todos están en formato delimitado por comas (.csv). La aplicación generará un archivo zip que contiene todos los archivos y medios. Puede usar esta opción para hacer una copia de seguridad de sus datos.

- Exportar registros. Puede elegir qué registros exportar. Admite la exportación en formato delimitado (.csv o .tsv).

### 9. Copia de seguridad de la base de datos

Para hacer una copia de seguridad de la base de datos, vaya al menú en el panel de control y seleccione la base de datos de copia de seguridad. De forma predeterminada, la base de datos se exportará como un archivo sqlite3. Use el botón de alternancia `incluir datos del proyecto` para agregar los datos del proyecto a la copia de seguridad. La aplicación generará un archivo zip que contiene la base de datos y los medios.

:::info
La copia de seguridad de la base de datos hará una copia de seguridad de todos los datos de todos los proyectos en las aplicaciones. Para futuras versiones, NAHPU mejorará el paquete como método de copia de seguridad de datos.
:::
