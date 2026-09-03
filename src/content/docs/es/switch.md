---
title: Transición a NAHPU
sidebar:
  label: Transición a NAHPU
  order: 4
---

NAHPU es un catálogo de campo digital creado para colecciones de historia
natural. Sustituye a los catálogos de campo en papel preformateados y a las
aplicaciones de formularios personalizados sin código, como
[Claris FileMaker](https://www.claris.com/). Esta página compara las tres
opciones y describe cómo hacer el cambio.

## NAHPU frente a un catálogo de campo en papel

| | Catálogo de campo en papel | NAHPU |
|---|---|---|
| Costo | Gasto continuo en papel, tinta, carpetas y almacenamiento | Gratuito; funciona en un teléfono que ya tiene. Una tableta dedicada cuesta entre 200 y 500 USD y dura unos cinco años. Los catálogos se pueden imprimir cuando se requiere una copia en papel. |
| Acceso | Llevar el cuaderno de vuelta, escanear páginas o volver a teclearlas en una hoja de cálculo | Se abre en cualquier dispositivo y permite entregar a los colaboradores una copia exacta |
| Calidad de los datos | Errores de entrada secundaria al digitalizar | Listas controladas y revisión de campos obligatorios antes de salir del campo |
| Asociaciones | El mismo sitio reescrito en cada página | Registre un sitio una vez y vincúlelo a muchos registros, además de coordenadas GPS, imágenes y audio |
| Copias de seguridad | Fotografiar o volver a teclear cada página | Nube, memoria flash u otro dispositivo; muchas memorias son resistentes al agua y a los golpes |
| Localización de datos | Revisión manual, sin filtros | Búsqueda y filtrado, siguiendo [Darwin Core](https://dwc.tdwg.org/) y los [principios FAIR](https://www.go-fair.org/) |
| Estadísticas | Conteo manual | Resúmenes en vivo de especies, familias y preservación por proyecto y sitio, exportables a una hoja de cálculo |

## NAHPU frente a una aplicación de formularios personalizada

Cambiar desde una aplicación de formularios es la transición más sencilla: sus
hábitos de captura, respaldo y exportación se mantienen casi sin cambios.

| | Aplicación de formularios personalizada | NAHPU |
|---|---|---|
| Costo | Desarrollo y mantenimiento, a menudo con una suscripción de pago; vea la [página de precios](https://www.claris.com/pricing/) de FileMaker | Gratuito, con la aplicación y su documentación en desarrollo activo |
| Estándares | Varía según la implementación | El cumplimiento de Darwin Core y de los principios FAIR es un objetivo del proyecto |
| Apertura | Puede ser propietaria, con formatos propietarios | Código abierto, bibliotecas abiertas, exportación a CSV y JSON, y una base de datos SQLite común que usted mismo puede abrir |
| Dispositivos | La compatibilidad depende de la implementación | Teléfonos, tabletas, portátiles y equipos de escritorio, con la accesibilidad de Flutter y Material Design |

## Planificar la transición

Elija un enfoque:

- **Suave.** Use NAHPU junto con su catálogo de campo en papel.
- **Directo.** Use NAHPU como único catálogo y lleve el papel como respaldo.

Después resuelva tres cuestiones prácticas:

| Pregunta | Qué considerar |
|---|---|
| ¿Qué dispositivo? | Teléfonos, tabletas, portátiles y equipos de escritorio funcionan. Empiece con su teléfono; una tableta con un teclado Bluetooth ofrece una mejor experiencia si el presupuesto lo permite. Consulte [Requisitos del dispositivo](../usages/devices). |
| ¿Cómo son las condiciones de campo? | NAHPU está diseñado para sitios remotos sin internet. Valore la resistencia y la energía: los teléfonos recientes suelen ser resistentes al agua y al polvo, las tabletas y los portátiles normalmente necesitan una funda robusta, y un banco de energía de 20,000 a 25,000 mAh cubre alrededor de una semana con un teléfono o una tableta. |
| ¿Cómo hará las copias de seguridad? | Una memoria flash, USB-C o con adaptador, es lo básico. Un respaldo cruzado en el dispositivo de un compañero añade redundancia. Servicios en la nube como Google Drive o Dropbox funcionan donde haya conexión, pero requieren su propia aplicación y cuenta en el dispositivo. |
