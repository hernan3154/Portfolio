# Portfolio

# install
```nodemailer```
```body-parser```
```express```
```npm install dotenv```
```nodemon```


# Descripción del Código
Este proyecto es un portfolio personal creado con HTML, CSS y JavaScript. Utiliza Bootstrap para el diseño responsivo y SweetAlert2 para las alertas. A continuación se describe la estructura y el contenido del código:

## 1. Estructura del Código
Encabezado del Documento 

* Enlaces a Bootstrap CSS y SweetAlert2 CSS: Estos enlaces importan estilos de Bootstrap y SweetAlert2 desde una CDN para facilitar el diseño y las alertas.

* Metaetiquetas: Configuran la codificación de caracteres y la vista en dispositivos móviles.

* Enlaces a Hojas de Estilo: nav.css y boton.css son hojas de estilo personalizadas para el menú de navegación y los botones.

* Título del Documento: "Mi Portfolio".

## 2. Cuerpo del Documento 

*  Header: Incluye el logotipo y la barra de navegación con enlaces a secciones del portfolio (Proyectos, Sobre Mi, Mi CV, Contacto).

* Main: Sección principal con una breve introducción  y enlaces a las secciones Sobre Mi, Mi CV, y Proyectos.

* Sección Sobre Mi : Contiene una imagen y un texto que describe mis experiencia y habilidades.

* Sección Proyectos : Muestra una lista de proyectos con enlaces a GitHub, al sitio web del proyecto y detalles del proyecto.

* Sección Habilidades : Lista de habilidades con barras de progreso que indican mi nivel de aprendizaje.

* Sección Contacto : Proporciona información de contacto y un formulario para enviar mensajes.

* Footer: Incluye enlaces de navegación y derechos de autor.


## 3. Scripts

* Font Awesome: Para iconos en la sección de proyectos y contacto.
* Bootstrap JS: Para funcionalidad adicional de Bootstrap.
* Script Personalizado (/public/envioDeCorreo.js): Para manejar el envío de correos desde el formulario de contacto.


# Detalles de las Secciones

### Header

  * Logotipo e imagen con dimensiones específicas.
  * Navegación con botones estilizados usando * * button-63 (definido en boton.css).

### Main

  * Introducción con encabezados y párrafos que presentan mis habilidades y proyectos destacados.
  * Botones para navegar a las secciones Sobre Mi, Mi CV y Proyectos.
### Sobre Mi

  * Imagen personal.
  * Texto detallado sobre mis experiencia y habilidades en desarrollo web.

### Proyectos

  * Tarjetas de proyectos con imagen, descripción, y enlaces a GitHub y otros recursos relevantes.

### Habilidades

  * Barras de progreso para cada habilidad tecnológica.

### Contacto

  * Información de contacto directa (ubicación, teléfono, correo electrónico).
  * Formulario para enviar mensajes directamente desde el portfolio.

### Footer

  * Enlaces de navegación a diferentes secciones del portfolio.
  * Derechos de autor.


# Tecnologías Utilizadas


* HTML5: Para la estructura del contenido.
* CSS3: Para los estilos y el diseño.
* Bootstrap 5: Para un diseño responsivo y componentes predefinidos.
* JavaScript: Para la interactividad, incluyendo el manejo del formulario de contacto.
* Font Awesome: Para los iconos en las secciones de proyectos y contacto.
* SweetAlert2: Para alertas estilizadas.


## Cómo Ejecutar el Proyecto
* 1. Clonar el repositorio.
* 2. Abrir el archivo index.html en un navegador web.
* 3. Asegurarse de que los archivos CSS y JS personalizados están en las ubicaciones correctas (nav.css, boton.css, envioDeCorreo.js).


# Notas Adicionales
El formulario de contacto utiliza una ruta /send-email para enviar correos, lo cual requiere una configuración adicional en el servidor backend.
Las imágenes deben estar en la carpeta img para que se muestren correctamente.