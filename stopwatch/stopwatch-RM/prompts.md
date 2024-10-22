# Stopwatch and Countdown

### Chatbot: ChatGPT

**Prompt:** Actúa como un desarrollador experto en Frontend con JavaScript. Quiero que generes dos archivos, uno llamado "index.html" para el HTML y otro "script.js" para la lógica de programación en JavaScript.

1. La página debe tener un titulo centrado que diga: "Stopwatch and Countdown".

2. Abajo del titulo, genera dos cuadros con bordes redondeados, los cuales deben estar centrados uno al lado del otro. En los puntos 3 y 4 definiré lo que deben contener cado uno de los cuadros.

3. En el cuadro izquierdo, utiliza el subtitulo Stopwatch, luego del subtitulo debe contener un Stopwatch, que tenga horas, minutos, segundos y milisegundos. Utiliza el signo de dos puntos para separar las horas, minutos, segundos y milisegundos. Además, agrega dos botones con bordes redondeados negros y centrados, uno al lado del otro, el texto de los botones también debe estar centrado en color negro:

3.1. El botón de la izquierda debe tener tres estados, cada vez que se presione el botón deberá cambiar la descripción y la acción del botón. El primer estado iniciará el Stopwatch (será utilizado para iniciar el Stopwatch y en caso de que el botón Clear sea presionado) debe decir "Start", el color del botón será verde. El segundo estado pausará el Stopwatch (solo se podrá pausar si el Stopwatch está en estado iniciado) debe decir "Start", el color del botón será verde. Y por último, el tercer estado estado continuará el Stopwatch (solo se podrá continuar si el Stopwatch está en estado pausado) debe decir "Continue", el color del botón será azul. 

3.2. El botón de la derecha reiniciará el Stopwatch, debe decir "Clear" y el color será de color rojo. Además, recuerda que al presionar este botón, el botón 3.1 pasará al estado "Start".

4. En el cuadro derecho, utiliza el subtitulo Countdown, luego del subtitulo debe contener un Countdown, que tenga horas, minutos, segundos y milisegundos. Utiliza el signo de dos puntos para separar las horas, minutos, segundos y milisegundos. 

4.1. Genera botones del 0 al 9 para poder setear las horas, minutos y segundos del Countdown. Además, genera el botón "Set" para indicarle al Countdown que el tiempo ingresado con los botones del 0 al 9 está seteado. Una vez presionado el botón "Set", deben desaparecer los todos estos botones y el tiempo deberá aparecer en el pantalla esperando para inciarse. Estos botones serán verdes con bordes redondeados negros, el texto de los botones también debe estar centrado en color negro. De presionar "Set" sin haber ingresado horas, minutos y segundos, el Countdown se deberá setear en 10 segundos, esto deberá aparecer en el tiempo del Countdown esperando para inciarse.

4.2. Genera un botón llamado "Clear" para poder borrar la información ingresada al Countdown. Este botón tambien debe desaparecer al presionar el botón "Set". Este botón será plomo con bordes redondeados negros, el texto de los botones también debe estar centrado en color negro.

4.3. Para comenzar con el Countdown, una vez presionado el botón "Set", desaparecerán los botones antes indicados para el Countdown y se agregarán tres botones con bordes redondeados negros y centrados, uno al lado del otro, el texto de los botones también debe estar centrado en color negro:

4.3.1. El botón de la izquierda debe tener tres estados, cada vez que se presione el botón deberá cambiar la descripción y la acción del botón. El primer estado iniciará el Countdown (será utilizado para iniciar el Countdown y en caso de que el botón Clear sea presionado) debe decir "Start", el color del botón será verde. El segundo estado pausará el Countdown (solo se podrá pausar si el Countdown está en estado iniciado) debe decir "Start", el color del botón será verde. Y por último, el tercer estado estado continuará el Countdown (solo se podrá continuar si el Countdown está en estado pausado) debe decir "Continue", el color del botón será azul. 

4.3.2. El botón del centro reiniciará el Countdown, debe decir "Clear" y el color será de color rojo. Además, recuerda que al presionar este botón, el botón 4.4.1. pasará al estado "Start" y el tiempo se seteará en el tiempo inicial cuando se presionó "Set" al inicio.

4.3.3. El botón de la derecha volverá el Countdown a su estado inicial con 0 en horas, minutos, segundos y milesimas, por lo que desaparecerá los tres botones y volverán a aparecer los botones descritos en los puntos del inicio. Deberá debe decir "Reset" y el color será de color plomo.

4.5. Al llegar a 0 el Countdown, este deberá parpadear el fondo del Countdown en rojo y avisar de forma sonora tipo alarma que el Countdown ha finalizado.

5. Utiliza Tailwind CSS como base para el diseño de la interfaz.

6. Utiliza la imagen que te proporciono como guía para el diseño.

7. Recuerda generar los dos archivos indicados al inicio. 

Si tienes preguntas antes de comenzar, hazme las preguntas necesarias. De lo contrario, comienza con el código.