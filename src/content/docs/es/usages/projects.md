---
title: Proyectos
sidebar:
  order: 2
---

- [Creando un nuevo proyecto](#creando-un-nuevo-proyecto)
- [Conociendo el panel de control](#conociendo-el-panel-de-control)
- [Actualizando la información del Proyecto](#actualizando-la-información-del-proyecto)
- [Eliminando Proyectos](#eliminando-proyectos)
- [Creando Informes](#creando-informes)
- [Exportando Registros](#exportando-registros)
- [Terminología](#terminología)

## Creando un nuevo proyecto

Para crear un nuevo proyecto, use el botón `+` en la esquina inferior derecha de la pantalla de inicio. Se le pedirá que ingrese un nombre de proyecto, una descripción del proyecto y el formato principal del catálogo.

- **El nombre del proyecto** debe ser corto y descriptivo
- **La descripción del proyecto** debe ser unas pocas frases que expliquen el propósito del proyecto.
- **El formato principal del catálogo** es el formato del catálogo que se utilizará para generar las páginas del catálogo de especímenes. Puede cambiar esto más tarde. También puede mezclar diferentes tipos de formato de catálogo en el mismo proyecto.

## Conociendo el panel de control

Después de crear un proyecto, procederá al panel de control del proyecto. El panel de control se divide en cuatro paneles principales:

- **Resumen del proyecto**: este panel proporciona una descripción general rápida del proyecto. Incluye el nombre del proyecto, la descripción, el [investigador principal](./projects#investigador-principal), la ubicación, la fecha de inicio, la fecha de finalización, la fecha de creación de la base de datos y la fecha del último acceso.
- **Personal**: este panel enumera todo el personal asociado con el proyecto. Puede agregar más personal haciendo clic en el botón `[+ Agregar personal]` en la parte inferior del panel.
- **Registro de taxones**: este panel enumera todos los taxones registrados en la base de datos. Puede agregar más taxones haciendo clic en el botón `[+ Agregar taxón]` en la parte inferior del panel. También puede importar taxones desde un archivo csv haciendo clic en el botón `[Importar desde archivo]`.
- **Estadísticas de registros**: gráfico que muestra estadísticas en tiempo real del número de registros en el proyecto.

## Actualizando la información del Proyecto

Puede agregar más información sobre el proyecto haciendo clic en el botón `lápiz` en la parte inferior derecha del resumen del proyecto.

## Eliminando Proyectos

Hacemos deliberadamente difícil eliminar un proyecto. Si está seguro de que desea eliminar un proyecto, elimine primero todos los registros asociados con el proyecto siguiendo todos los pasos a continuación:

1. Vaya al panel de control del proyecto
2. Haga clic en el botón de narrativa en la barra de navegación inferior. Use el botón de menú (icono de tres puntos) en la esquina superior derecha para seleccionar `Eliminar todos los registros`.
3. Repita el paso 2 para `Registros de especímenes`, `Eventos de recolección` y `Registros de sitios`. Se requiere el mismo orden exacto para eliminar los registros.
4. Vuelva al panel de control del proyecto y elimine todo el personal listado.
5. Elimine el proyecto usando el botón de eliminar en el cajón del menú.

## Creando Informes

NAHPU ofrece algunas opciones para crear informes.

- **Recuento de especies**: generará un informe del número de especímenes para cada especie en el proyecto.
- **Datos de medios**: generará un informe de todos los archivos de medios y sus metadatos en el proyecto.

## Exportando Registros

Opciones de exportación de NAHPU:

- **Agrupar registros**: esta opción exportará todos los registros, incluidos los medios, en el proyecto como un único archivo zip.
- **Exportar registros**: esta opción proporciona exportación para cada tipo de registro en el proyecto. Tiene opciones para exportar archivos delimitados por comas (.csv) o delimitados por tabuladores (.tsv).
- **Exportar pdf**: esta opción exportará cada tipo de registro como un archivo pdf.

## Terminología

### Investigador Principal

El investigador principal es la persona responsable del proyecto.
