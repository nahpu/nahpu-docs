---
sidebar_position: 2
title: "Hoja de Ruta de Desarrollo"
---

## Resumen

El desarrollo de NAHPU se centra en tres áreas clave: **eficiencia**, **reproducibilidad** e **inclusividad**. Inspirándonos en la [Hoja de Ruta de Flutter](https://github.com/flutter/flutter/wiki/Roadmap), hemos diseñado una hoja de ruta para dirigir el desarrollo de NAHPU. Esta hoja de ruta delinea las principales características y mejoras que pretendemos incorporar en los próximos lanzamientos. Sirve como un medio para mantener la transparencia con la comunidad y para recopilar comentarios sobre la trayectoria del proyecto. Como es el caso de la mayoría de los proyectos de desarrollo de software, nuestra hoja de ruta es flexible y puede modificarse en función de los comentarios y los requisitos emergentes. Damos la bienvenida a las contribuciones de la comunidad para que nos ayuden a alcanzar nuestros objetivos.

## Foco de Desarrollo para el Año 2024

### Eficiencia

Estamos en proceso de incorporar más código Rust en la base de código de NAHPU. La integración de Rust con Flutter no solo mejora el rendimiento, sino que también proporciona una experiencia de usuario más sólida. Además, Rust cuenta con una biblioteca GIS de alta calidad, que nos ayudará a aumentar las capacidades de procesamiento de datos espaciales de NAHPU.

Además de esto, nos esforzaremos por mejorar la calidad y el rendimiento del código refactorizando la base de código existente y optimizando la aplicación para la velocidad y el uso de la memoria. Una parte significativa del código de NAHPU requiere documentación, y nos centraremos en mejorar esta documentación para que sea más amigable para los desarrolladores.

### Reproducibilidad

Nuestro objetivo principal es la implementación completa del estándar [Darwin Core](https://dwc.tdwg.org/) y los [principios FAIR](https://www.go-fair.org/fair-principles/). Esto mejorará la interoperabilidad y la reutilización de los datos de NAHPU. También pretendemos mejorar las capacidades de importación y exportación de datos de NAHPU, facilitando a los usuarios el intercambio y la colaboración en los datos de la aplicación. El escaneo de códigos de barras/QR se ha implementado en NAHPU, y planeamos mejorar estas capacidades de escaneo. Un objetivo clave es simplificar el proceso de inventario de especímenes al permitir a los usuarios escanear especímenes y poblar automáticamente el inventario después del trabajo de campo. Este enfoque se integrará con el desarrollo de capacidades de impresión para etiquetas de especímenes.

### Inclusividad

El objetivo principal es ampliar la localización de la aplicación incorporando más idiomas, haciéndola así más fácil de usar para los hablantes no ingleses. Además, estamos mejorando la experiencia para los usuarios con discapacidades para que NAHPU sea más accesible e inclusivo. La versión actual permite a los usuarios utilizar la entrada de voz a través de las funciones de accesibilidad del sistema operativo. Planeamos implementar funciones adicionales, incluidos los lectores de pantalla.
