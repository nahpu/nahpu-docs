---
sidebar_position: 3
title: Personal
---

## Agregando nuevo personal

Use el botón `Agregar nuevo personal` para agregar nuevo personal. Se le pedirá que ingrese la siguiente información a continuación. La aplicación por defecto solo muestra información crítica. Haga clic en el botón `Mostrar más` para mostrar todos los campos.

- **Nombre (obligatorio)** - El nombre del personal.
- **Correo electrónico** - El correo electrónico del personal.
- **Teléfono** - El número de teléfono del personal.
- **Afiliación** - La institución del personal.
- **Rol de cuidado de especímenes (obligatorio)** - El rol del personal en el cuidado de los especímenes. Consulte [Terminología](./personnel#terminology) para obtener más información.
- **Iniciales de campo (obligatorio si el rol de cuidado de especímenes es `Catalogador`)** - Las iniciales del personal.
- **Número de campo (obligatorio si el rol de cuidado de especímenes es `Catalogador`)** - El número de campo del personal. La inicial y el número se utilizarán para la identificación de campo. La aplicación autoincrementa el número cada vez que crea un nuevo espécimen. Por ejemplo, si la inicial de campo es `ABC` y el número de campo es `1`, el primer espécimen tendrá la identificación de campo `ABC1`. El segundo espécimen tendrá la identificación de campo `ABC2`, y así sucesivamente.
- **Notas** - Cualquier nota sobre el personal.

> **Importante:** Algunas instituciones pueden usar una combinación de ID de proyecto y número para la ID de campo. Use esta ID como la inicial, en lugar de poner la inicial real de la persona. Por ejemplo, `ABC-1`. En este caso, puede ingresar `ABC-` como la inicial de campo y `1` como el número de campo.

## Editando la información de la persona

En el tablero, haga clic/toque el botón de menú (icono de tres puntos) para el nombre de la persona para la que desea editar la información, luego seleccione editar. Se le llevará a la página de personal donde puede editar la información.

## Terminología

### Catalogador

Una persona que crea y edita registros en el catálogo. Esto incluye crear nuevos registros, editar registros existentes y eliminar registros. Un rol de `catalogador` requiere su inicial de campo y su número de campo.

### Solo preparador

Una persona que ayuda a preparar los especímenes pero no crea ni edita registros en el catálogo.

### Ninguno

En el campo de rol de cuidado de especímenes, esto significa que la persona no tiene un rol en el cuidado del espécimen. Esto puede ser un guía de campo, un conductor o cualquier otra persona que apoye la recopilación de datos pero que no tenga un rol en el cuidado de los especímenes.
