/* Generado a partir de las listas de reproducción de YouTube. */
const CURSOS = {
"grupos": [
{
"nombre": "STM32",
"cursos": [
"stm32-cubeide",
"stm32-vivo",
"stm32-vscode",
"stm32-keil",
"stm32-dsp",
"stm32-otros"
]
},
{
"nombre": "PIC",
"cursos": [
"pic-mikroc",
"pic-mikroc-proyectos",
"pic-xc8",
"pic-ccs",
"dspic-mikroc",
"dspic-xc16"
]
},
{
"nombre": "ESP32",
"cursos": [
"esp32-simulacion",
"esp32-vivo"
]
},
{
"nombre": "Arduino",
"cursos": [
"arduino"
]
},
{
"nombre": "Raspberry Pi Pico",
"cursos": [
"pico-nextion"
]
},
{
"nombre": "Texas Instruments",
"cursos": [
"texas"
]
},
{
"nombre": "IoT",
"cursos": [
"iot",
"ethernet-wifi"
]
},
{
"nombre": "Electrónica",
"cursos": [
"conceptos-electronica",
"electronica-analoga",
"digitales",
"proteus",
"pcb-proteus"
]
},
{
"nombre": "Pantallas y módulos",
"cursos": [
"nextion",
"modulos-bluetooth",
"huskylens"
]
},
{
"nombre": "Robótica",
"cursos": [
"robotica-proteus"
]
},
{
"nombre": "Control y software",
"cursos": [
"control-automatico",
"matlab",
"labview",
"logica-difusa"
]
},
{
"nombre": "Herramientas e IA",
"cursos": [
"ia",
"analizadores-logicos"
]
},
{
"nombre": "Charlas y desarrollos",
"cursos": [
"ponencias",
"emulador-gps",
"reparaciones"
]
}
],
"cursos": {
"stm32-cubeide": {
"titulo": "STM32 con STM32CubeIDE",
"desc": "Curso completo de STM32 desde cero: Blue Pill, Black Pill, Nucleo y Cortex-M0 a M7. GPIO, retardos, LCD, UART, USB CDC, ADC con DMA, PWM, sensores, librerías propias y simulación en Proteus.",
"lista": "PLp8IkbtcjNXyH390NJ1SFZIZptpsPrps9",
"videos": [
{
"id": "fES3IDSXI9k",
"n": 1,
"t": "Introducción",
"d": "Indica, los temas tarjetas y software autilizar en el curso. se recomienda ver este video de la familia stm32 y el link de librerias en proteus.",
"c": [
"https://github.com/alcidesramos/LIBRERIAS_PROTEUS_2026"
]
},
{
"id": "BC46jcSBV8I",
"n": 2,
"t": "Comparación cortex y software a utilizar",
"d": "Muestro las diferencias entre los cortex M3 a M7, y los software a utilizar, y las opcione spara proteger codifos entre otros temas. LINK DE LOS PROGR.",
"c": [
"https://drive.google.com/drive/folders/1nnjIC1OhM6ieTJ7aiQD21Ma8gtFXgiMK?usp=sharing"
]
},
{
"id": "qc22QcGj0Ho",
"n": 3,
"t": "Caracteristicas basicas del STM32CubeMX",
"d": "Muestra los detalles más importantes que se pueden configurar en el stm32cubemx.",
"c": []
},
{
"id": "NmJlCxs6Ce8",
"n": 4,
"t": "Programación de tarjetas stm32 clone y actualización de firmware de stlink",
"d": "Muestra los detalles de como programar tarjetas stm32 clone, y actualizar el firmware del stlink. Link programas.",
"c": []
},
{
"id": "YWqmhFwCOnA",
"n": 5,
"t": "TIPS Simualción STM32 en proteus. Parte 1",
"d": "Muestra como simular STM32 cortex M3 y M4 en proteus, con las opciones que trae proteus por defecto, usando el arm keil.",
"c": []
},
{
"id": "s1m_9nSbDGY",
"n": 6,
"t": "TIPS Simualción STM32 en proteus. Parte 2",
"d": "Muestra como simular STM32 cortex M3 y M4 en proteus, con las opciones que trae proteus por defecto, usando el STM32cubeIDE.",
"c": []
},
{
"id": "62N1GrTIncE",
"n": 7,
"t": "TIPS Simulación STM32 en proteus. Parte 3",
"d": "Muestras mis liberias para simular ;las tarjetas bluepill , black pill en proteus incluyendo paquete de PCB y modelo 3D ademas de la libreria para la.",
"c": [
"https://github.com/alcidesramos/LIBRERIAS_PROTEUS_2026"
]
},
{
"id": "uzsI4K9HqVA",
"n": 8,
"t": "Hola Mundo en un cortex M0",
"d": "Muestra lo basico para programr tanto en stm32cubeide y ARM Keil un stm32f030f4p6.",
"c": []
},
{
"id": "DB7kbDEHgVY",
"n": 9,
"t": "Hola Mundo en un cortex M3 (BLUE PILL) PARTE1",
"d": "Muestra como prograamr la blue pill en forma fisica usando el stlik V2 o un cable o tarjeta USB serial.",
"c": []
},
{
"id": "pLlrpCLtZXI",
"n": 10,
"t": "Hola mundo en un cortex m3 (blue pill) parte2 bootloader USB",
"d": "Muestra como pasarle el bootloader USB, y configura el stm32cibeid para configuarr el proyecto y poder programar la bluepill con un simple cable USB.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5139-how-use-the-mikroe-arm-bootloader-with-blue-pill"
]
},
{
"id": "SZ3WEe0svsI",
"n": 11,
"t": "Hola Mundo en un cortex M4 (BLACK PILL) (BOOTLOADER USB",
"d": "Muestra como se puede programar un cortex M4 mediante el BOOTLOADER USB de fabrica.",
"c": []
},
{
"id": "sWdkJ5XMJtA",
"n": 12,
"t": "Hola mundo en un cortex m7 (devebox_h7xx) (bootloader USB",
"d": "Muestra como programar un cortex M& con la tarjeta MCUDEV DEVEBOX_ H7XX usando el bootloader por USB.",
"c": []
},
{
"id": "7rsiX4FaJU4",
"n": 13,
"t": "Opciones de programacion usando un ST-Link v2 clone",
"d": "Muestra las opciones para programar microcontroladores stm32 usando el ST LINK V2 clone o chino.",
"c": []
},
{
"id": "30I-8_He5Ek",
"n": 14,
"t": "PROGRAMANDO TARJETAS ORIGINALES DE STMicroelectronics (Tarjetas Nucleo",
"d": "Muestra las formas de progareamr usando tarjetas originales de STMicroelectronics.",
"c": []
},
{
"id": "KVJTGNin0_I",
"n": 15,
"t": "Tips para optimizar el manejo de memoria RAM en micros STM32 de poca memoria",
"d": "Muestra como jugar con el HEAP SIZE y el STACK SIZE en STM32cubeMX size para ganar memoria en micros de poca memoria.",
"c": []
},
{
"id": "aQHwoJuiICI",
"n": null,
"t": "Conceptos basicos de digitales para iniciar con los sitemas embebidos parte 1",
"d": "Miuestra los conceptos, de bit, byte, sistemas numericos bibarios, decimal, Hexadecimal, necesarios para inicar en el mundo de los sistemas embebidos.",
"c": []
},
{
"id": "EDVUga7G7Bw",
"n": null,
"t": "Conceptos basicos de digitales para iniciar con los sitemas embebidos parte 2",
"d": "Muestra conceptos basicos de memorias RAM, ROM, y diferencias entre Microcontrolador y Microprocesador.",
"c": []
},
{
"id": "Gzo7v3xe8zE",
"n": null,
"t": "Operadores logicos y su aplicaciones en C++ , orientado a los sistemas embebdidos",
"d": "Muestra cuales son los operadores logicos, sus simnbolos en c y c++, y sus aplicaciones en la programación.",
"c": []
},
{
"id": "gQYY58GrftE",
"n": null,
"t": "Conceptos basicos de microcontroladores, compilador, programador, firmware,bootloader, debugger,etc",
"d": "Enseña los conceptos básicos relacionado a los microcontrolaodres y su programación.",
"c": []
},
{
"id": "A93QwlYvuak",
"n": null,
"t": "Conceptos basicos de microcontroladores, hardware",
"d": "Muestra de forma general , los pines mas importantes que posee un microcontrolador y las conexiones basica de los mismos.",
"c": []
},
{
"id": "zRcuzKlvKc0",
"n": null,
"t": "Conceptos basicos de programacion en C++, tipos de variables usadas en STM32CubeIDE",
"d": "Muestra los tipos de variables usadas en stm32cubeide y la importancia de saber definilas correctamente.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5179-analyzing-stm32cubeid-variable-types"
]
},
{
"id": "Z7xqb0feb60",
"n": 17,
"t": "Display 7 segmentos basico. En ARM Keil",
"d": "Muestra como sacar informacion por un puerto del stm32 usando registrOS, forma basica, USANDO ARM KEIL. VIDEO EN STM32CUBEID: codigo base.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5176-using-register-for-stm32-port-dispaly-example"
]
},
{
"id": "M_7bO_o8YBg",
"n": 18,
"t": "Utilizacion del modo atomico, debugger, aplicacion operaciones logicas",
"d": "Muestra como iniciar el debbuger parte basica, el DWT o timer para debugGer , como cargar optimamente en modo atomico los puertos y usode operadores l.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5183-use-the-atomic-mode-to-charge-port-in-stm32-debbuger-mode"
]
},
{
"id": "e7Azd2d44y8",
"n": 19,
"t": "Procedimientos en C++",
"d": "Muestra la imporetancia de los procedimientos y su aplicacion usando los conceptos de videos anteriores. Software Display.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5184-procedures-in-c-using-stm32cubeide",
"https://drive.google.com/drive/folders/1wrfjkE4LovN4uvgD72u2uhpK26c7hqpc"
]
},
{
"id": "ZEHMxvsadJE",
"n": 20,
"t": "Retardo us y Melodias",
"d": "Muestra como usar en los cortex m3 hacia arriba el DWT timer para crear retardos de microsegundos, y ser usado en melodias, o crear musica. vi.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5186-microsecond-delay-and-generation-of-tones-and-melodies-in-st"
]
},
{
"id": "xssSKv_D0X0",
"n": 21,
"t": "Multiplexacion basica siete segmentos",
"d": "Muestra varios procedimientos y formas de usar dispaly 7 segmentos anodo o catodo de forma de multiplexado.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5191-stm32-seven-segment-display-multiplexing"
]
},
{
"id": "TJOIynTbkkE",
"n": 22,
"t": "Como programar usando un ST-Link v2 clone",
"d": "Muestra como usar la aplicacion st link utility, para progreamar los stm32 con una prograamdor clone que no reconoce el stm32 programmer. link descarg.",
"c": [
"https://drive.google.com/drive/folders/19mhAFdn6ABU82cjXVgXdtGsJeVL3zZ46?usp=sharing"
]
},
{
"id": "fU91BdXKDTk",
"n": 23,
"t": "Como clonar una STM32 y como proteger para que no sea clonada",
"d": "Muestra como proteger una STM32 para que no sea clonada, y a la vez como clonarla.",
"c": []
},
{
"id": "MelYm8cF-wo",
"n": 24,
"t": "Salidas en modo open drain",
"d": "Muestra cuando y porque usar salidas en stm32 en modo open drain o drenaje abierto.",
"c": []
},
{
"id": "7CLHe79vkFM",
"n": 25,
"t": "Entradas parte 1 (pines compatibles a 5v",
"d": "Muestra como saber que pines del STM32 utilizado es compatible a 5V.",
"c": []
},
{
"id": "koAL3AjbL0c",
"n": 26,
"t": "Entradas parte 2 (lectura modo registro, resistencia pull up, pull down",
"d": "",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5202-stm32-input-manager"
]
},
{
"id": "2x28Sekx1U0",
"n": 26,
"t": "Retardos en microsegundos parte 1. Con ciclos de C++",
"d": "Muestra como hacer retardos en microsegundos, y calibralos PARA LAS BLUE PILL Y LA BLACKPILL F401 contando ciclos.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5207-delays-in-microseconds-stm32-using-cycle-count"
]
},
{
"id": "hHttPXPNu20",
"n": 27,
"t": "Retardos en microsegundos parte 2. Con ciclos de C++ f411",
"d": "Muestra los parametros de calibracion para los ertardos en microsegundos para la f411.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5207-delays-in-microseconds-stm32-using-cycle-count"
]
},
{
"id": "cxm8f3oy1hM",
"n": 28,
"t": "Retardos en microsegundos parte 3.en ensamblador",
"d": "Muestra como usar lenguaje ensambaldor para obtener retardos mas precisos en STM32.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5208-stm32-microsecond-delay-using-assembler"
]
},
{
"id": "h9aaW-9-a5g",
"n": 29,
"t": "Retardos en microsegundos parte 4. Usando timers",
"d": "Muestra como optimizar los retardos en microsegundo usando timers pero tambien los cuidados que hay que terner al hacerlo.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5210-stm32-delay-in-microseconds-using-timer"
]
},
{
"id": "Hvchi_Prvvs",
"n": 30,
"t": "Muestro propio retardo en milisegundos",
"d": "Adios al HAl_delay, por no ser tan preciso, muetsra como usando cualquier a de los retardos en microsegundos ya enseñados, se oprine un terado mucho m.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5209-stm32-using-our-own-delay-in-milliseconds"
]
},
{
"id": "-N8x8kr3qJ0",
"n": 30,
"t": "Creacion de liberias, liberias personalizadas",
"d": "Muestra como crear las liberrias en stm32cubeide y persoibnalizarlas, esta basado en las distintas funciones d eretardos creadas en el video anetrior.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5212-stm32cubeide-creation-and-customization-of-libraries-delay-l"
]
},
{
"id": "YnT6YiuqWGo",
"n": null,
"t": "Tip como usar un programador ST-Link v2 clone con STM32CubeProgrammer",
"d": "Muestra como usar un STLINK V2 clone con el programador official de stm32 el stm32cubeprogrammer.",
"c": []
},
{
"id": "sQj5jzdXpTI",
"n": 31,
"t": "Librerias LCD alfanumerico y personalizacion de caracteres",
"d": "Librerias para manejar un LCD alfanumerico y personalizar caracteres.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5215-stm32-alphanumeric-lcd-liberias"
]
},
{
"id": "K69uY1soHrY",
"n": 32,
"t": "Librerias LCD alfanumerico por I2C",
"d": "Librerias para manejar un LCD alfanumerico POR I2C y personalizar caracteres.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5216-stm32-i2c-lcd-library"
]
},
{
"id": "jgcakY53md4",
"n": 32,
"t": "Usando sprintf",
"d": "Muestra la versalitidad de sprintf, y como confugurarla en stm32fcubeid.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5228-how-to-use-the-sprintf-function-in-stm32cubeide"
]
},
{
"id": "zyFbWRB-88g",
"n": 33,
"t": "Transmision serial, UART, simulacion en Proteus, puerto com por bluetooth",
"d": "Muestra como simular en proteus la transmision serial y conecrar virtualmemnte y externamente con otros dispositivos, por ejemplo bluetooth en el celu.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5240-stm32-basic-serial-transmission"
]
},
{
"id": "QEHZNhDdti0",
"n": 34,
"t": "Comunicacion UART USB o USB directo con USB CDC y un pc",
"d": "Muestra las formas de comunicarse serialmente con un pc y un STM32 usando un cable usb uart o directamente con el micro creando un USB CDC Lin.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5247-stm32-usb-cdc-virtual-serial-com-example"
]
},
{
"id": "kgEUfcMg8yI",
"n": 35,
"t": "Asociar printf a un puerto serial",
"d": "Muestra como asociar la función printf a cualquier puerto serial o uart d ela stm32, facilitando la comunicación.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5251-how-to-associate-printf-to-serial-port-in-stm32cubeide"
]
},
{
"id": "d38wJ9uumX4",
"n": 36,
"t": "Asociar printf a un puerto serial CDC por USB",
"d": "Muetsra como asociar la funcion sprintf a un puerto serial USB , usando la clase CDC Driver DCD.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5252-how-to-associate-printf-to-cdc-usb-port-in-stm32cubeide"
]
},
{
"id": "Vo_gwdFRIAU",
"n": 37,
"t": "Manejo del modulo ADC",
"d": "Muestra como aquirir señales con el ADC y enviarlas a un LCD o puerto serial. CORRECCION: En el minuto 15.18 poner Number Discontinues conversion=1.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5253-stm32-adc-basic"
]
},
{
"id": "eg230lqdZYQ",
"n": 38,
"t": "Protocolo onewire sensor DS18B20",
"d": "Muestra liberuias optimizadas que permite simular a 16Mhz el sensor Ds18B20 en proteus en la blue pill y black pill, ademas de forma fisica.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5285-stm32-optimized-onewire-libraries-use-with-the-ds18b20-senso"
]
},
{
"id": "wYdas21XvCU",
"n": 39,
"t": "Recepcion de ordenes serial bloqueante basica parte1",
"d": "Muestra los principuios basicos de la recepcion serial en un stm32.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5286-stm32-reception-of-basic-serial-orders-part-1"
]
},
{
"id": "68gpsYp_N_g",
"n": 40,
"t": "Recepcion de ordenes serial bloqueante compuesta parte2",
"d": "Muestra la forma de mandar tramas compuestas y controlar motores, led,etc por puerto serial.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5287-stm32-reception-of-composite-blocking-serial-commands"
]
},
{
"id": "b4xlHciLDy0",
"n": 41,
"t": "Recepcion de ordenes serial compuesta por bluetooth parte3",
"d": "Muestra como controlar la clase 40 dese una aplicacion bluettoht. Link de la apk.",
"c": []
},
{
"id": "I0jY57uoJws",
"n": 42,
"t": "Recepcion de ordenes serial compuesta con LabVIEW parte3",
"d": "Muetsra como utilizar labview para controla un mortor y 2 leds por ordenes seriales.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5288-stm32-serial-control-with-labview"
]
},
{
"id": "SLje9-u3y-8",
"n": 43,
"t": "Transmision serial en el micro, recepcion en LabVIEW",
"d": "Muestra como monitorear variibales analogas y digitles desde labview comunicandose serialmente por uart ocn el stm32.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5289-stm32-monitoring-of-analog-and-digital-variables-with-labvie"
]
},
{
"id": "0UP6U24F8wQ",
"n": 44,
"t": "Transmision serial en el micro, recepcion bluetooth en el celular",
"d": "Muestra como usar la aplicacion bluetooth electronics para monitorear variables analogas y digitales en el celular.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-turbulencia-serial"
]
},
{
"id": "hNp0Ox3xM5Y",
"n": 45,
"t": "Librerias PWM para control de motores DC",
"d": "Muestra como mediante labview y usando pwm en el stm32 controla velocidad de un motor DC con Liberrias.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5291-stm32-pwm-library-for-dc-motor-control"
]
},
{
"id": "rRhuqXGphNQ",
"n": 46,
"t": "Librerias para manejo de servomotores",
"d": "Muestra la forma de manejar servomotores en coinjunto de motres dc en STM32.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5292-stm32-pwm-library-for-servo-motor-control"
]
},
{
"id": "WK3SbQReKoU",
"n": 46,
"t": "Libreria para MAX6675, leyendo termocupla tipo k",
"d": "Muestra como leer termocuplas tipo K con stm32.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5293-stm32-library-to-read-the-max6675-thermocouple-type-k"
]
},
{
"id": "PhBGB6bl7OI",
"n": 47,
"t": "Libreria para el sensor DHT11 t DHT22, lectura de humedad y temperatura",
"d": "Muestra colo leer el sensor DHT11 con STM32. se anexa librería también para el DHT22.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5294-stm32-library-to-read-the-dht11-and-dht22-sensor"
]
},
{
"id": "lklmy5J5Mu8",
"n": 48,
"t": "Uso de uwtick; en sensores de lectura lenta",
"d": "Muestra como mantener la transmision serial rapida pero la lectura lenta en un sensor de muestreo lento como el ds18b10 o el dht11.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5295-stm32-uwtick-uses-with-low-speed-sensors-dht11"
]
},
{
"id": "vdFJXLNfD7I",
"n": 49,
"t": "Libreria para el modulo de celda de carga HX711",
"d": "Muetsra como usar el HX711 con un STM32, tarado y calibracion d ela balanza.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5296-hx711-library-stm32"
]
},
{
"id": "MntCemT7YHA",
"n": 50,
"t": "Medicion de distancia con ultrasonido, sensor HC-SR04",
"d": "Muestra mis lberrias para medir distancia con uno o varios sensores de distancia HC SR04.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5297-ultrasonic-hc-sr04-sensor-stm32-library"
]
},
{
"id": "b7dsZupTLCs",
"n": 51,
"t": "Comunicacion full duplex USB serial (CDC",
"d": "Muetsra como crear un cable usb serial para crear u n puerto con en windows y trabajar con el stm32 Drive en el pc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5302-full-duplex-communication-on-stm32-using-cdc-usb-serial"
]
},
{
"id": "quEk1ARAXdU",
"n": 53,
"t": "Librerias sensor luz ambiente BH1750",
"d": "Muestra la forme de como leer el sensor de luz ambiente BH1750.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5336-stm32-bh1750-library"
]
},
{
"id": "TJsRb2wzBWU",
"n": 54,
"t": "Utilizando librerias de terceros, leyendo el sensor BMP280",
"d": "Muetsra como adaptar librerias de terceros a nuestro codigo, utilizando librerias del sensor de presion y temperatura bmp280.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5339-stm32-bmp280-sensor-library"
]
},
{
"id": "iAjoO6wVtHE",
"n": 55,
"t": "ADC blue pill, sin DMA y con DMA",
"d": "Muestra las formas de simular en proteus al ADC de la blue pill, e introduce en el uso del DMA con el ADC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5371-bluepill-stm32-adc-with-dma"
]
},
{
"id": "6SVWePDSimA",
"n": 56,
"t": "ADC black pill, con DMA",
"d": "Muestra como usar con la blackpill el ADC en modo DMA, y comprueba que proteus no lo simula pero que fisicamente si fucniona.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5372-stm32-black-pill-adc-and-dma"
]
},
{
"id": "A-SlJK0x4_E",
"n": null,
"t": "STM32 mcu finder, como buscar y seleccionar el microcontrolador adecuado para mi proyecto",
"d": "Muestra el uso de la herramienta STM32MCU FINDER, para filtrar y seleccionar el microcontrolador acorde a las necesidades de nuestro proyecto.",
"c": []
},
{
"id": "uzUNaFJUOHM",
"n": null,
"t": "STM32 solucionar problema letras pequeñas en STM32CubeIDE",
"d": "Como solucionar el probelma de la sletras pequeñas en stm32cubeide.",
"c": []
},
{
"id": "4rMFj_xjB2M",
"n": 57,
"t": "Libreria para teclado matricial",
"d": "Muestra la forma básica de utilizar el stm32 con un teclado matricIal.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5373-stm32-matrix-keyboard-library"
]
},
{
"id": "fv2vfwcN-jY",
"n": null,
"t": "STM32CubeIDE restaurar el espacio de trabajo por defecto, como poner o quitar el split vertical",
"d": "Muestra TIPS, para quitar o poner la doble ventana vertical de un archivo, o restaurar por defecto el espacio de trabajo cuando no nos aparece alguna.",
"c": []
},
{
"id": "tuTx4Im2IqA",
"n": null,
"t": "STM32CubeIDE colocar el tema oscuro",
"d": "Muestra como poner el tema oscuro a STM32CUBEIDE.",
"c": []
},
{
"id": "tvvZILfazYg",
"n": null,
"t": "STM32CubeIDE instalar otros temas oscuro (devstyle) de tercero y personalizar",
"d": "Muetsra como instalar y oersonalizar el tema oscuro de DEVSTYLE EN STM32CUBEIDE.",
"c": []
},
{
"id": "gDjPsqsIy6w",
"n": null,
"t": "STM32 actualizacion de mis libreria para simulacion bluepill y blackpill en Proteus",
"d": "Este es el link de descarga Ver el video de como se configuran en.",
"c": [
"https://github.com/alcidesramos/LIBRERIAS_PROTEUS_2026"
]
},
{
"id": "b4B-RCQD0ps",
"n": null,
"t": "STM32. Configurar STM32CubeMX o STM32CubeIDE para que recuerde los micros mas usados o favoritos",
"d": "Muestra como seleccionar microcontroladores stm32 favoritos en el STM32CUBEMX O STM32CUBEIDE.",
"c": []
},
{
"id": "Ey0ybpPyvrY",
"n": 58,
"t": "Captura multiples teclas de un teclado matricial",
"d": "Muestra como capturar multiples teclas de un teclado matricial usando maquinas de estado.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5399-stm32-read-multiple-keys-matrix-keyboard"
]
},
{
"id": "bjGXxe3NKuY",
"n": 60,
"t": "Lectura de sensores optico reflectivo parte 2. Calibracion y normalizacion",
"d": "Muestra la forma de calibrar y normalizar sensores opticos reflectivos QTR.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5406-calibration-and-normalized-reading-of-qrt-sensors"
]
},
{
"id": "1u2D-o4vnkU",
"n": 61,
"t": "Leyendo el sensor de temperatura interno de un STM32",
"d": "Muestra la forma de leer la temperatura interna del micro usando el sensor de temperatura interno. Código.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5407-reading-internat-temperature-sensor-stm32"
]
},
{
"id": "Z3oG9cOtZq4",
"n": null,
"t": "STM32 analizando el plano esquematico de la tarjeta blackpill, tips de daños y reparacion",
"d": "Muestra un analisis de la tarjeta black pill , sus componentes , fallas comunes y tips de reparacion.",
"c": []
},
{
"id": "UMRfCoo1Kmw",
"n": null,
"t": "STM32 actualizacion del firmware del ST-Link v2",
"d": "Muestra como actualizar el firmware en un St link v2 para poder usar el prograamdor clone.",
"c": []
},
{
"id": "pOJnhdfs8QI",
"n": 62,
"t": "Programando desde Matlab parte i. Instalacion librerias",
"d": "Muestra que configurar, y descargar para programar los stm32 desde simulink. Link.",
"c": [
"https://drive.google.com/drive/folders/1DxScgv7ib6hp_NljIYXcjH34MO8GdEtQ?usp=sharing"
]
},
{
"id": "pGZVnWD4wnw",
"n": 63,
"t": "Programando desde Matlab parte 2. Simulacion en Proteus",
"d": "Muestra como compilar un STM32 en simulink y hacer el .hex para simularlo en proteus.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5443-matlab-simulink-stm32-proteus-simulation"
]
},
{
"id": "6YMDPgMlVKA",
"n": 64,
"t": "Programando desde Matlab parte 3. Programacion ST-Link v2, blackpill",
"d": "Muestra como cargar a la black pill el codigo generado desde matlab de forma directa.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5444-simulink-build-and-programmer-stm32-wiht-st-link-v2"
]
},
{
"id": "MOiWzV19YC4",
"n": null,
"t": "Stlink v2 con esteroides, v2 debugger, programador y puerto serial USB UART",
"d": "Muestra este nuevo stlink v2 chino que permite programar, hacer debugger y ademas es puerto serial uart.",
"c": []
},
{
"id": "L7C5vnJaCzw",
"n": 65,
"t": "Librerias para el sensor LIDAR tof vl53l0x",
"d": "Muetsra como usar la api de STM32 para manejar el lidar VL53L0X o sensor TOF.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5502-lidar-vl53l0x-tof-sensor-librarys"
]
},
{
"id": "u5OX_Bn2E5c",
"n": 66,
"t": "Modulo MP3 dfplayer mis librerias",
"d": "Librerias para manejar el modulo dfplayer mini, con stm32.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5503-using-dfplayer-mini-with-stm32"
]
},
{
"id": "-NsYqoONvYI",
"n": null,
"t": "Probando las funcionalidades del nuevo stlink v2 clone con esteroides, mejor que el original",
"d": "Muestra como configurar el stlink clone, para usar con stm32cubeide.",
"c": []
},
{
"id": "JLbUFHcTtnk",
"n": null,
"t": "STM32 clase en vivo 10 2023 , recepcion serial por interrpcion, DMA y inline IDLE detect10",
"d": "Como leer por interrpcion serial usando DMA y deteccion de inactividad de linea.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5551-stm32-usart-recive-dma-inline-idle-detect"
]
},
{
"id": "4dw_7VkUMFc",
"n": null,
"t": "HuskyLens parte 3. Librerias para STM32 reconocimiento de rotros",
"d": "Muestra una forma basica de como reconocer rostros con la huskeycam y un stm32.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5579-stm32-face-recognition-using-huskeylens"
]
},
{
"id": "Gct_eliSetQ",
"n": null,
"t": "STM32 parte1. Migrar o pasar un codigo de STM32 a otro STM32 de distinta refrencia",
"d": "Muestra la primera forma de como pasar un codiDo se un stm32 CORTEX M4 CORTEX M3.",
"c": []
},
{
"id": "TJ1OAMw3DiM",
"n": null,
"t": "STM32 parte2. Migrar o pasar un codigo de STM32 a otro STM32 de distinta refrencia",
"d": "Muestra la segunda forma de como pasar un codiDo se un stm32 CORTEX M4 CORTEX M3.",
"c": []
},
{
"id": "HzFlAdeSvWs",
"n": null,
"t": "Stlink v2 clone con esteroides y recargado, actualizar el firmware a mass storage device",
"d": "Muestra como aumentar el potencial, de este super programador clone chino pero poderoso al ser usado como memoria usb para cargarle el archivo .hex VI.",
"c": []
},
{
"id": "TeWVsSt8exk",
"n": null,
"t": "STM32, conociendo el stm32cubemonitor parte 1 , que gran herramienta",
"d": "Muestra como usar el stm32cubemonitor.",
"c": []
},
{
"id": "uXnm6waWVQg",
"n": null,
"t": "STM32, conociendo el stm32cubemonitor parte 2 , que gran herramienta",
"d": "Muestra como hacer datalogger o guardar los datos en excell para su posterior analisis. video anterior.",
"c": []
},
{
"id": "f6RtIEfGqis",
"n": null,
"t": "STM32 actualizacion de mis libreria para simulacion 14/01/2024",
"d": "INCLUYE LIBRERIAS PARA NUCLEOS DE STM767 Y TARJETAS MINIS CON MICROS STM32G4XX. Este es el link de descarga Ver el video de como se configuran en.",
"c": [
"https://github.com/alcidesramos/PROTEUS-2026"
]
},
{
"id": "AkVvcmJhJvA",
"n": null,
"t": "2024_i sem. Clase 5 en vivo STM32. Aplicacion real de los condicionales if.leer puerto con registros",
"d": "Muestra como usar el if. else if, else, y como leer un puerto completo a nivel de registros.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5682-stm32-read-input-with-register"
]
},
{
"id": "jh3SZ72sAGs",
"n": null,
"t": "2024_i sem. Clase 5b en vivo STM32 aplicacion real de los condicionales if.leer puerto con registros",
"d": "Muestra como usar el if. else if, else, y como leer un puerto completo a nivel de registros.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5682-stm32-read-input-with-register"
]
},
{
"id": "Ai_5vWR4Lu0",
"n": 67,
"t": "Leyendo frecuencia, modulo input capture",
"d": "Muestra como leer la frecuencia usando el modulo input capture.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5693-stm32-read-frecuency-using-input-capture-module"
]
},
{
"id": "MVHzLt_o514",
"n": null,
"t": "STM32 2024_i sem. Clase 10 complementaria, crear un puerto USB virtual CDC para comunicacion UART",
"d": "Muestra coimo se crea un puerto com fisico con la black pill por USB.",
"c": []
},
{
"id": "_Y3TWzz4Rl8",
"n": 68,
"t": "Generacion de señal PWM, control por set point motor DC, lectura de frecuencia",
"d": "Muestra como configurar en un STM32 el modulo PWM, como amndar el set point por el puerto serial y leer la frecuancia o velocidad del motor en tiempo.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5696-dc-motor-control-with-set-point-and-pwm-enoder-reader"
]
},
{
"id": "BHjCjlnqA14",
"n": 69,
"t": "Librerias del modulo RFID RC522, algoritmo hash",
"d": "Muestra como leer, el modulo RFID RC522, y el uso del algoritmo HASH.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5701-stm32-using-rc522-rfid-module"
]
},
{
"id": "9NI70szBHgE",
"n": null,
"t": "Tip para conectar el celular al pc por bluetooth y crear un puerto com",
"d": "Muestra como comunicar el celualr por puerto serial com con el computador.",
"c": []
},
{
"id": "Cl_z5PCziOg",
"n": 70,
"t": "Uso del reloj de tiempo real (rtc) en un STM32",
"d": "Muestra como usar el RTC interno del stm32.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5712-using-stm32-internal-rtcc"
]
},
{
"id": "AtF293UuzXk",
"n": 71,
"t": "Obtencion de la curva caracteristica de un motor DC",
"d": "Muestra como obtenr con labview la curva caracteristica de un motor DC. Video anterior.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5714-stm32-curve-of-dc-motor-with-labview"
]
},
{
"id": "KwBnyPYx2G4",
"n": 72,
"t": "Pasar librerias de Arduino a STM32 , sensor sn0575 (rainfall dfobot",
"d": "Muestra como pasa una libraria de arduino a stm32 tomando como referencia el sensor rainfall de DFRobot sen0575.",
"c": []
},
{
"id": "wruI9WCTKSc",
"n": null,
"t": "Clase virtual gratis no te la pierdas jueves 4 de julio 8:30 am hora colombia",
"d": "Conectate y suscribte.",
"c": []
},
{
"id": "SycUOxjMXYg",
"n": 73,
"t": "Clase virtual, macros con #define para manejo facil de pines in/out",
"d": "Muestra como, usar #define y concatenacion, para manejar de forma mas sensoclla encender, apagar, titilar o leeer poines dela STM32.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5752-easy-way-to-manage-input-and-output-in-stm32-using-macos-def"
]
},
{
"id": "8pQGQzPtD6I",
"n": 74,
"t": "Librerias de manejo de memoria SD",
"d": "De memoria Muestra como cerar archivos y manejar una memorisa sd con stm32. imagen d ela memoria.",
"c": [
"https://drive.google.com/drive/folders/1YcyMXKKAmfClXoltpv2qeEPJ3EzXkKz-?usp=sharing",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5761-stm32-sd-library"
]
},
{
"id": "RTduyquKRUg",
"n": 75,
"t": "Librerias control de motores paso paso. Usando LabVIEW",
"d": "Muestra como usar mis librerias de motor paso paso, para stm32, usando interrupicones y control por puerto serial con Labview.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5763-stm32-stepper-motor-control-with-labview"
]
},
{
"id": "UAOsjI5nFkk",
"n": 76,
"t": "Actualizacion de mis librerias para PWM",
"d": "Muestra una manera mas eficiente la forma de crear y manipualr los PWM en STM32.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5781-stm32-pwm-pwm-library-update"
]
},
{
"id": "asDO2njMwG8",
"n": 77,
"t": "Actualizacion de mis librerias para servos",
"d": "Muestra una manera mas eficiente la forma de crear y manipualr los SERVO MOTORES en STM32.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5783-my-stm32-servo-library-update"
]
},
{
"id": "7zoeQ-XShOg",
"n": 78,
"t": "Usando timers para trabajar al tiempo servomotores y motores DC",
"d": "Muestra como usar mis librerias de servomotores y de PWM al mismo tiempo, de forma independiente, o combinadas.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5784-stm32-using-servos-an-dc-motor-same-time"
]
},
{
"id": "OcdkTpU6GmQ",
"n": 79,
"t": "Deteccion de color con el sensor tcs3200",
"d": "Muestra como leer colores, usando timers, y el sensor tcs3200 con interrupciones. en un STM32.",
"c": [
"https://github.com/alcidesramos/SENSOR_COLOR_tcs3200",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5823-stm32-tcs3200-color-sensor"
]
},
{
"id": "NxSnFYu-k6s",
"n": 80,
"t": "Librerias leds ws2812b, neopixel. PWM DMA",
"d": "Muestra como manejar led ws2812 con stm32, usando PWM y DMA.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5827-stm32-ws2812b-neopixel-pwm-dma"
]
},
{
"id": "6Mf7dqS7Kww",
"n": 82,
"t": "Conociendo el modulo DT-06, esp8285 comunicacion UART a wifi, IoT",
"d": "Introduce al uso del modulo DT-06.",
"c": []
},
{
"id": "-oE1FX3SCN8",
"n": 84,
"t": "DT-06 y virtuino, introduccion",
"d": "Muestra como conectar virtuino al DT-06.",
"c": []
},
{
"id": "myJMi4sRYOM",
"n": 85,
"t": "Introduccion a la interrupci0nes. Timers",
"d": "Se explica que son las interrupciones, y como se configura en un STM32, usando timers.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5858-stm32-timers-interrupt"
]
},
{
"id": "0oDkrxaSYMU",
"n": 86,
"t": "Introduccion a la interrupci0nes. Int por flancos exti",
"d": "Muestra como activar la interrupción por flanco en los STM32.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5859-stm32-edge-int-exti"
]
},
{
"id": "Hdnlx21OF2M",
"n": 87,
"t": "Interrupcion serial por DMA y IDLE inline detect",
"d": "Muestra como usar en STM32 la interrupción serial idle inline detect con DMA.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5860-stm32-inline-idle-detect-serial-int"
]
},
{
"id": "Q_8Y-9CoQ28",
"n": 88,
"t": "Interrupcion modulo input capture. Medicion de frecuencia. Lib actualizadas",
"d": "Muestra como usar mis librerías para medir frecuencia en un stm32 y el modulo input captura.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5861-stm32-input-capture-int-frecuency-meter"
]
},
{
"id": "5sf4najxnZE",
"n": 89,
"t": "Interrupcion modulo input capture. Lecturas de puslos PWM",
"d": "Muestra como leer señales PWM con el modulo input capture.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5862-stm32-pwm-signal-read"
]
},
{
"id": "aTIna86uvSY",
"n": 90,
"t": "Interrupcion modulo input capture. Lecturas sensor ultrasonico SFR04",
"d": "Muestra como usar el modulo input capture para leer varios sensores ultrasónicos sfr04 al tiempo.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5863-stm32-input-capture-for-read-sfr04-sensor"
]
},
{
"id": "wr8bERStB18",
"n": 91,
"t": "DT-06 monitoreo wifi con el celular y la app virtuino",
"d": "Muestra como monitorear con el celular por WIFI una variables análoga y una digital con el STM3232, utilizando el modulo dt-06 y la aplicación virtuin.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5864-stm32-dt-06-wifi-monitor-with-virtuino-app"
]
},
{
"id": "xxtGwx7lNqs",
"n": 92,
"t": "DT-06 monitoreo wifi LabVIEW TCP cliente",
"d": "Muestra como monitorear con Labview datos enviados desde el stm32 usando el modulo WIFI DT-06.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5865-stm32-dt-06-labiew-tcp-client-monitor"
]
},
{
"id": "fwqgzvHZUZs",
"n": 93,
"t": "DT-06 control y monitoreo por wifi app virtuino",
"d": "Muestra como, con un STM32 monitorear y controlar por WIFi usando la aplicación virtuino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5866-stm32-wifi-control-and-monitor-using-virtuino-app"
]
},
{
"id": "7MSqoRguaTw",
"n": 94,
"t": "DT-06 control y monitoreo por wifi con LabVIEW",
"d": "Muestra como controlar y monitorear con un stm32 con wifi y labview usando el DT-06.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5867-stm32-dt-06-labview-monitor-and-control"
]
},
{
"id": "1uXE1RQ3aLg",
"n": 96,
"t": "DT-06 conexion IoT a Ubidots , transmison, recepcion y eventos",
"d": "Muestra como hacer una aplicación Iot con STM32, el mopdulo DT-06 y ubidots.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5868-stm32-dt-06-iot-ubidots"
]
},
{
"id": "CIMaAOUekc4",
"n": null,
"t": "Certificaciones y usos de algunos microcontroladores del mercado",
"d": "",
"c": []
},
{
"id": "aKhONgyseOc",
"n": 97,
"t": "Modos de bajo consumo",
"d": "Muestra como usar y cuanto se ahorra el uso de los modos de bajo consumo en un stm32.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5869-stm32-low-power-modes"
]
},
{
"id": "q8DNjBJKE4I",
"n": 98,
"t": "Dimmer AC, control de energia cargas AC. Cruce por cero",
"d": "Muestra toda la teoría, diseño y programación de un sistema de detección de cruce por cero y control de una carga ac , simulado e implementado en dos.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5870-stm32-ac-dimmer"
]
},
{
"id": "1AZdg1SNhoM",
"n": 100,
"t": "Crea tus propias fuentes y tipos de letras en pantallas OLED",
"d": "Muestro como usando el software GLCD Font Creator de Mikroe, crear fuentes propias en pantalla oled.",
"c": []
},
{
"id": "Z5W8TQkbXdw",
"n": 101,
"t": "Imagenes y figuras en pantalla OLED, actualizacion de mis librerias",
"d": "Actualización de mis librerías para OLED, y uso para mostrar figuras y dibujos.",
"c": []
},
{
"id": "zPzmOXfuAHU",
"n": 102,
"t": "Lleva tu STM32 a otro nivel, como activar librerias CMSIS-DSP",
"d": "Muestra como integrar las librerias de DSP CMSIS en un stm32 en stm32cubeide.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5877-using-cmsis-dsp-library-on-stm32"
]
},
{
"id": "Y5VBNk57PMU",
"n": 102,
"t": "Dimmer AC, control de carga AC mediante comandos seriales",
"d": "Es una extensión de mi video de dimmer ac, ahora con carga serial.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5879-dimmer-ac-stm32-uart-control"
]
},
{
"id": "tDukbk2AOGI",
"n": 103,
"t": "Actualizacion de mis librerias recepcion serial DMA inline detect",
"d": "Muestra como usar múltiples interrupciones USART por inline detect y DMA Actualice e manejo de errores subí nuevo código, se debe en el archivo UARTRX.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5886-stm32-multiple-uart-interrupt-inline-detect-dma",
"https://github.com/alcidesramos/INT-_multiple_RX"
]
},
{
"id": "Yszss6jJBV4",
"n": 104,
"t": "Detectando colores con el sensor tcs34725",
"d": "Muestra como leer colores con el sensor tcs34725 por i2c y un STM32, blackpill.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5888-stm32-color-with-tcs34725-sensor"
]
},
{
"id": "ce3ox2ddzgg",
"n": 105,
"t": "Obtener posición y velocidad de varios encoders de cuadratura, sin librerías",
"d": "Muestra como leer posición y velocidad de varios encoders de cuadratura sin el uso de librerías.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5889-stm32-reading-multiple-quadrature-encoders-without-libraries"
]
},
{
"id": "DWjEvugn_z8",
"n": 106,
"t": "Mis librerías para manejo de varios encoders de cuadratura",
"d": "Muestra como usar mis librerías para el fácil manejo de varios encoders de cuadratura con stm32.",
"c": []
},
{
"id": "lHRaJMYxCW8",
"n": 107,
"t": "Mis librerías para leer datos desde un GPS",
"d": "Muestra como leer datos asociados a un GPS.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5891-stm32-gps-library"
]
},
{
"id": "TLEC9x1Kw7k",
"n": 108,
"t": "Mis librerías para manejo de pantallas HMI Nextion con STM32",
"d": "Muestra como interactuar con las pantallas Nextion y los stm32 charla.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5892-stm32-hmi-nextion-lcd-library"
]
},
{
"id": "n8xlfLVfal4",
"n": 109,
"t": "Leyendo presion con el sensor hx710",
"d": "Muestra como usar el hx710 para leer un sensor de presión.",
"c": [
"https://github.com/alcidesramos/HX10_PRESS",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5894-reading-pressure-with-hx710-sensor"
]
},
{
"id": "sBJaIXppxIA",
"n": 110,
"t": "Guardando datos en la memoria flash interna",
"d": "Muestra como guardar datos en la memoria flash interna y los cuidados a tener en cuenta.",
"c": [
"https://github.com/alcidesramos/memoria_flash",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5895-stm32-write-and-read-flash-memory"
]
},
{
"id": "GgW_t5KkCpY",
"n": null,
"t": "Curso STM32 - clase xxx: librerias sensor inercial gy85",
"d": "Muestra como leer el sensor inercial GY85.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5898-stm32-gy85-imu"
]
},
{
"id": "D1Dr36pIfhE",
"n": 110,
"t": "Deteccion de nivel de audio de un pc o celular con el STM32",
"d": "Muestra como llevar una señal de audio de pc o celular a un stm32 y detectar nivel de audio para vumetros u otras aplicaciones.",
"c": [
"https://github.com/alcidesramos/AUDIO",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5902-stm32-analoge-audio-peak-detect"
]
},
{
"id": "E6eHCm16i2E",
"n": null,
"t": "STM32 blackpill con esteroides, stm32u585ciu6 cortex ARM m33 super tarjeta",
"d": "Nueva tarjeta stm32u585ciu6 , blackpill con esteroides.",
"c": []
},
{
"id": "vybuO7JDNUk",
"n": 112,
"t": "Conceptos basicos fuente conmutada con STM32 lazo abierto",
"d": "Muestra como controlar con un Stm32 una fuente conmutada BUCK a lazo abierto.",
"c": [
"https://github.com/alcidesramos/conmutada_LAZO_ABIERTO",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-fuente-conmutada"
]
},
{
"id": "f2-Re_lqEPY",
"n": 113,
"t": "Conceptos basicos fuente conmutada con STM32 lazo cerrado. PID en STM32",
"d": "Muestra mis Liberarías PID aplicada a una fuente conmutada.",
"c": [
"https://github.com/alcidesramos/conmutada_cana_PID",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-fuente-conmutada-pid"
]
},
{
"id": "NRudNTw0RFM",
"n": 114,
"t": "Capitulo 1 control motor DC. Control a lazo abierto",
"d": "Muestra como controlar la velocidad de un motor dc a lazo abierto Explicacion detallada librerias de PWM y Frecuencia.",
"c": [
"https://github.com/alcidesramos/LAZO_ABIERTO",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-control-motor-dc"
]
},
{
"id": "Chyq1VGmcv8",
"n": 115,
"t": "Capitulo 2 control motor DC. Tiempo de muestreo del sistema de control",
"d": "Muestra como seleccionar y establecer un tiempo de muestreo preciso en el sistema de control.",
"c": [
"https://github.com/alcidesramos/CONTROL_MOTOR_MUESTREO",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-control-motor-muestreo"
]
},
{
"id": "twqMAYntxLo",
"n": 116,
"t": "Capitulo 3 control motor DC. Adquisicion y grafica de los datos",
"d": "Muestra como adecuar la entrada y salida del sistema y graficarlas en serial osciloscopio y en Teleplot para posterior identificación.",
"c": [
"https://github.com/alcidesramos/ADQUISION",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-motor-adquisicion"
]
},
{
"id": "R3MppyNEEbU",
"n": 117,
"t": "Capitulo 4 control motor DC. Matlab identificacion de la planta y PID tuner",
"d": "Muestra como graficar datos en Matlab, a una respuesta pulso y usar el PID tuner para identificación de la planta y sintonización.",
"c": [
"https://github.com/alcidesramos/Identificacion_PID1",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-identificacion-pid-1"
]
},
{
"id": "TBlBqf17pjU",
"n": 118,
"t": "Capitulo 5 sintonizacion PID con datos de entrada y salida, Matlab",
"d": "Muestra como identificar una planta y sintonizar un PID con Matlab usando PID Turner basado en los datos de entrada y salida del sistema.",
"c": [
"https://github.com/alcidesramos/Identificacion_PID2",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-identificacion-pid-2"
]
},
{
"id": "m47blusdFIo",
"n": 119,
"t": "Librerias para leer altura, presion y temperatura con el sensor ms5611",
"d": "Muestra como leer por i2c el sensor MS5611.",
"c": [
"https://github.com/alcidesramos/ms5611_arz_presion",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-ms5611-presion"
]
},
{
"id": "I733nHpXUoA",
"n": 120,
"t": "Usar liberrias C++ en STM32CubeIDE, convertir proyecto de de c a C++",
"d": "Muestra como usar librerías C++ en mi proyecto, o convertir un proyecto que tenia en c , para que use librerías c++.",
"c": [
"https://github.com/alcidesramos/cpp_canal",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5906-using-c-code-with-stm32cubeid-stm32"
]
},
{
"id": "jZcAV-e1R7U",
"n": null,
"t": "Nueva tarjeta STM32, stm32h523cet6 compatible con la black-pill poderosa y mas veloz",
"d": "2 adc, 1 dac, 6 uart, usb y usb tipo C, etc.",
"c": []
},
{
"id": "jwq2KTiXGNE",
"n": null,
"t": "Uboxing de la super tarjeta STM32 nucleo-n657x0-q",
"d": "",
"c": []
},
{
"id": "3WruOv8mNvg",
"n": 121,
"t": "Pantalla TFT ili9225, dibujar figuras y colocar texto,cualquier tipo de font",
"d": "Muestra como usar mis librerías para mostrar imágenes y texto en una pantalla TFT.",
"c": [
"https://github.com/alcidesramos/TFT_ILI9225",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-tft-ili9225"
]
},
{
"id": "7mPNZSDV8dQ",
"n": 123,
"t": "Pantalla TFT ILI9488 textos personalizados",
"d": "Muestra como configurar y sacar textos en un TFT ocn el driver ili9488.",
"c": [
"https://github.com/alcidesramos/TFT_ILI9488_CANAL",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-tft-ili9488"
]
},
{
"id": "P2XmxowY0so",
"n": 124,
"t": "Pantalla TFT ILI9488 Figuras e Imágenes",
"d": "Muestra como mostrar figuras e imágenes en una pantalla con driver ILI9488.",
"c": [
"https://github.com/alcidesramos/TFT_ILI9488_CANAL",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-tft-ili9488"
]
},
{
"id": "R8GJqsuhCuM",
"n": 125,
"t": "Pantalla TFT ili9488, dashboard, variables animada",
"d": "Muestra como usar la pantalla TFT para agregar interactividad a las variables.",
"c": [
"https://github.com/alcidesramos/TFT_ILI9488_CANAL",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-tft-ili9488"
]
},
{
"id": "lLgp0dJeypw",
"n": 126,
"t": "Mis librrerias sensor adxl345 acelerometro",
"d": "Muestra como leer el sensor adxl365.",
"c": [
"https://github.com/alcidesramos/ADXL345_CANAL",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-adxl345"
]
},
{
"id": "U9vyOKXWfso",
"n": 127,
"t": "Librerias para la pantalla TFT ili9341 o la TFT st7789v",
"d": "Muestra como adapte unas librerías de tercero para usar la pantalla TFT ILI9341 o la ST7789V.",
"c": [
"https://github.com/alcidesramos/TFT_CANAL_ILI9341",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-tft-ili9341"
]
},
{
"id": "RnYqbtIociU",
"n": null,
"t": "Stmicroelectronics separa en su ultima version ,nuevamente STM32CubeIDE de STM32CubeMX",
"d": "A hace tiempo atrás.",
"c": []
},
{
"id": "JTgzs6NTqwE",
"n": 128,
"t": "Librerias para texto personalizado ,figuras y formas en la TFT ili9341",
"d": "Muestra como cerrar texto (font) personalizables con un STM32 y la pantalla TFT ili9341, ademas de figuras y formas.",
"c": [
"https://github.com/alcidesramos/STM32_-ILI9341_TEXTO_Y-_FORMAS"
]
},
{
"id": "74NMjwjy_8s",
"n": 129,
"t": "Librerias para imagenes personalizadas para TFT ili9341",
"d": "Muestra como mostrar imágenes en la pantalla TFT ILI9341.",
"c": [
"https://github.com/alcidesramos/STM32_IMAGENS_ILI9341"
]
},
{
"id": "3CfcHX2QIck",
"n": 130,
"t": "Librerias para graficos y dashboard con TFT ili9341",
"d": "Muestra como lograr interactividad visual con animaciones ,gráficas y objetos , en un dashboard con la pantalla ili9341.",
"c": [
"https://github.com/alcidesramos/stm32_dashboar_ili9341"
]
},
{
"id": "KJcRYse5oiw",
"n": 131,
"t": "Usando el ili9341 tactil, con el touchgfx, parte 1",
"d": "OJO: Se em olvido decir el proyecto no debe quedar en carpetas que tengan espacios, porque touchgfx molesta con eso. Muestra la forma de diseñar inter.",
"c": [
"https://github.com/alcidesramos/TOUCHGFX_BASICO"
]
},
{
"id": "fBA59MDcl4U",
"n": 132,
"t": "Usando el ili9341 tactil, con el touchgfx, cambio pantalla por hardware",
"d": "Muestra como cambiar entre pantallas, por hardware, si la pantalla no es grafica.",
"c": [
"https://github.com/alcidesramos/TFT_SUICHE"
]
},
{
"id": "1A9M0EsvamQ",
"n": null,
"t": "Como instalar mis liberias de STM32 y otras en Proteus. 12/02/2026",
"d": "Muestra como instalar mis librerías en proteus.",
"c": [
"https://github.com/alcidesramos/Proteus_Librerias_2025"
]
},
{
"id": "GzdwIHHubHk",
"n": 133,
"t": "Usando el ili9341 tactil, con el touchgfx, leer variables, switch virtual",
"d": "Muestra como agregar suiches en la TFT y manipular hardware así como leer variables en el micro y mostrarlas en el TFT.",
"c": [
"https://github.com/alcidesramos/TOUCHGFX_VOLTAJE"
]
},
{
"id": "tA5lkkPL3l0",
"n": 134,
"t": "Usando el ili9341 tactil leyendo un slider control",
"d": "Muestra como leer un slider en touchgfx. codigó.",
"c": [
"https://github.com/alcidesramos/TOUCHGFX_SLIDER"
]
},
{
"id": "VTZwLRSAWvc",
"n": 135,
"t": "Usando el ili9341 tactil,usando graficas",
"d": "Muestra como hacer graficas usando el touchgfx.",
"c": [
"https://github.com/alcidesramos/TOUCHGFX_GRAFICA"
]
},
{
"id": "285zk-qkUFs",
"n": 136,
"t": "Librerias para escanear dispositivos I2C",
"d": "Librerias para escanear dispositivos I2C con STM32.",
"c": [
"https://github.com/alcidesramos/I2C_TEST"
]
},
{
"id": "LE-9Fr4t4jI",
"n": 137,
"t": "Librerias para multiplexar varios sensores LIDAR I2C, modulo tca9548",
"d": "Tca9548.",
"c": [
"https://github.com/alcidesramos/I2C_MUX_LIDAR"
]
},
{
"id": "8z1CsXhhNhw",
"n": 138,
"t": "Actualizacion de mis librerias ADC DMA modo automatico",
"d": "IMPORTANTE: si tiene conectado potenciómetro o sensores de baja impedancia menor de 10k a los canales del ADC, debe dejar el Sampling Time de cada ran.",
"c": [
"https://github.com/alcidesramos/ADC_DMA_AUTO_2026"
]
},
{
"id": "dZ0rydFtviU",
"n": 139,
"t": "Librerias imu mpu6050, conceptos basicos de funcionamiento",
"d": "",
"c": [
"https://github.com/alcidesramos/MP6050_ARZ_2026-_basico"
]
},
{
"id": "T7_PQD8NArY",
"n": 140,
"t": "Librerias imu mpu6050, filtros de kalman y complementario lectura python",
"d": "",
"c": [
"https://github.com/alcidesramos/MP6050_ARZ_2026"
]
},
{
"id": "_wUhyWrHVMw",
"n": 141,
"t": "Recepcion de tramas seriales en phyton, envio desde el micro",
"d": "",
"c": [
"https://github.com/alcidesramos/RECEPCION_PHYTON"
]
},
{
"id": "XLmR5wKwPUA",
"n": 141,
"t": "Librerias sensor imu bno055",
"d": "Librerías para leer el sensor BNO055 , mostrar datos en Python.",
"c": [
"https://github.com/alcidesramos/BN0055_2026"
]
},
{
"id": "kuXrNddgaN8",
"n": 142,
"t": "Uso del iwdg perro guardian independiente en los STM32",
"d": "Uso del iwdg perro guardian independiente en los STM32.",
"c": [
"https://github.com/alcidesramos/IWDG"
]
},
{
"id": "3mVI_m3O3QQ",
"n": 143,
"t": "Medicion de corriente y voltaje usando el ina219",
"d": "Medicion de corriente y voltaje usando el ina219.",
"c": [
"https://github.com/alcidesramos/INA219_2026"
]
},
{
"id": "wGhlog8ZpiE",
"n": 144,
"t": "Librerias para el sensor max30102 pulso cardiaco y saturacion de oxigeno",
"d": "Y temperatura.",
"c": [
"https://github.com/alcidesramos/MAX30102_ARZ"
]
},
{
"id": "ky_6VdHmMU4",
"n": 145,
"t": "Utilizando el DAC modo simple y DMA",
"d": "Muestra el potencial del DAC de 12 bit de un stm32 para generar voltajes o crear señales, modo simple o avanzado con DMA.",
"c": [
"https://github.com/alcidesramos/DAC_CANAL_BASICO"
]
},
{
"id": "s8fngYMbWYI",
"n": 146,
"t": "Mis librerias para el uso del DAC simple y con DMA, generador de señales",
"d": "Muestra el uso de las librerias de Alcides ramos, para general señales con el DAC de algunos STM32.",
"c": [
"https://github.com/alcidesramos/DAC_DMA_CANAL"
]
},
{
"id": "CUJvHptUIrM",
"n": 147,
"t": "Mis librerias para ,manejo de motores paso a paso con driver drv8825",
"d": "Muestro como manejar varios motores paso paso con el driver drv8825.",
"c": [
"https://github.com/alcidesramos/paso_paso_drv8825"
]
},
{
"id": "ZIVC3SkLQPc",
"n": null,
"t": "STM32 PWM complementario primera parte alcides",
"d": "Muestra como crear PWM complementario.",
"c": []
},
{
"id": "ed8eANpR6QE",
"n": null,
"t": "STM32 PWM complementario parte 2",
"d": "Muestra como trabajar pwm complementario.",
"c": []
},
{
"id": "P3hEuzVOTYc",
"n": null,
"t": "Lo que se viene en el canal, curso de Arduino uno q y curso de nuevos micros stm32c5",
"d": "Y migracion a visual studio code.",
"c": []
},
{
"id": "F3BDbp5nwy8",
"n": null,
"t": "STM32 configuracion inicial para visual studio code para stm32cubemx1 o con stm32cubemx2",
"d": "",
"c": []
},
{
"id": "rIKHWyQ9OE4",
"n": null,
"t": "STM32 con visual studio code, modo comandos largos para archivo CMake y agregar librerias",
"d": "Crear .hex.",
"c": [
"https://github.com/alcidesramos/SERIAL_VSC_comandos_largos"
]
},
{
"id": "KS0WsLs1zNg",
"n": null,
"t": "STM32 con visual studio code, modo comandos cortos uso se snippets (fragmentos de codigo)",
"d": "",
"c": []
},
{
"id": "eQPDSMGV1H4",
"n": null,
"t": "STM32 como configurar STM32 en visual studio code de forma visual , para uso librerias y mas",
"d": "Muestra como configuro con un script de python vsc para.",
"c": [
"https://github.com/alcidesramos/VSC_DEFINITIVO"
]
},
{
"id": "LaaKAjiSKBI",
"n": null,
"t": "Mi primera impresion de GitHub copilot en visual studio code , aplicado a STM32 en c",
"d": "",
"c": []
},
{
"id": "dTywiiegBTg",
"n": null,
"t": "GitHub copilot version paga en visual studio code",
"d": "",
"c": []
},
{
"id": "KDxKBYkZhvU",
"n": null,
"t": "STM32 hola mundo con nuevos micros stm32c5 version china weact studio en visual studio code",
"d": "",
"c": []
},
{
"id": "K91sqI4wDtQ",
"n": null,
"t": "STM32 configurar botones para programar y proteger desde visual studio code, uso de breadcrumbs",
"d": "Configuracion botones para programar y proteger el micro STM32 desde visual studio code sin usar stm32cube programmer, y uso de uso de breadcrumbs dec.",
"c": [
"https://github.com/alcidesramos/botones"
]
},
{
"id": "fXi1XrcTwcY",
"n": null,
"t": "STM32 configurarcion inicial de git en visual studio code, subir repositorios a GitHub",
"d": "COMANDO INIIALES EN GIT git config --global user.name \"ALCIDES.",
"c": []
},
{
"id": "GVREZJTDP4A",
"n": 148,
"t": "Actualizacion de mis librerías para leer datos desde un GPS",
"d": "Alarma de ubicacion. Software.",
"c": [
"https://github.com/alcidesramos/GPS_ARZ",
"https://github.com/alcidesramos/GPS_CANAL"
]
},
{
"id": "4SsyAn_Q-zY",
"n": 148,
"t": "Actualizacion de mis librerías para leer datos desde un GPS",
"d": "Alarma de ubicacion. Software.",
"c": [
"https://github.com/alcidesramos/GPS_ARZ",
"https://github.com/alcidesramos/GPS_CANAL1"
]
},
{
"id": "SMFflXoIyAQ",
"n": null,
"t": "STM32, solucionando problema con el codigo:-g ninja exited with code: 1",
"d": "",
"c": []
},
{
"id": "P2kW-lXiQHY",
"n": null,
"t": "Proteus 9.2 sp1, lo nuevo, IA mejorada, simula nuevos microcontroladores, GPS mejorado",
"d": "",
"c": []
},
{
"id": "F9JoXDH9YHs",
"n": 149,
"t": "MQTT control y monitoreo IoT con STM32 y ThingsBoard, con el modulo DT-06",
"d": "",
"c": [
"https://github.com/alcidesramos/MQTT_CANAL"
]
}
]
},
"stm32-vivo": {
"titulo": "Clases en vivo de STM32",
"desc": "Las clases de Sistemas Embebidos grabadas en vivo, organizadas por semestre: desde el primer programa en STM32CubeIDE o VS Code hasta UART, Bluetooth, ADC con DMA, PWM, servos, interrupciones y WiFi.",
"lista": "PLp8IkbtcjNXwcWPLfNjircw68O4--REKZ",
"videos": [
{
"id": "nlqLzPmINtE",
"n": null,
"t": "Puerto serial y sprintf",
"d": "",
"c": [],
"s": "2023-I",
"f": "2023-03-23"
},
{
"id": "Yw-dtjHA7lo",
"n": null,
"t": "Librerias, comunicacion celular bluetooth",
"d": "Que pena el audio no se grabó.",
"c": [],
"s": "2023-I",
"f": "2023-03-21"
},
{
"id": "sss21HtgBIo",
"n": null,
"t": "LCD en STM32",
"d": "Muestra una clase en vivo del uso del lcd en stm32, librerias propias.",
"c": [],
"s": "2023-I",
"f": "2023-03-13"
},
{
"id": "ST1R9po1I8o",
"n": null,
"t": "Utb STM32,  recepcion serial bluetooth celular y en LabVIEW",
"d": "",
"c": [],
"s": "2023-I",
"f": "2023-03-28"
},
{
"id": "U3RXR5zH_wY",
"n": null,
"t": "Transmison de datos LabVIEW recepcion en STM32",
"d": "Muestra como enviar datos seriales desde labview a un stm32.",
"c": [],
"s": "2023-I",
"f": "2023-04-10"
},
{
"id": "EA7kstm_Ny4",
"n": null,
"t": "Recepcion serial por bluetooth control de giro y velocidad de un motro DC",
"d": "",
"c": [],
"s": "2023-I",
"f": "2023-04-18"
},
{
"id": "GkA0LX9POs8",
"n": null,
"t": "Introduccion a las interrupciones STM32, control   carrito de Proteus desde LabVIEW",
"d": "Muestra como crear interrpciones para timers e interrupciones externas control de carro de proteus desde labview.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5317-stm32-timer-extern-interrut"
],
"s": "2023-I",
"f": "2023-05-02"
},
{
"id": "IlyL2hfwV9M",
"n": null,
"t": "Introduccion a las interrupciones STM32, control   carrito de Proteus desde LabVIEW",
"d": "AUDIO MEJORADO Muestra como crear interrpciones para timers e interrpciones externas control de carro de proteus desde labview.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5317-stm32-timer-extern-interrut"
],
"s": "2023-I",
"f": "2023-05-04"
},
{
"id": "DAqyYRk_8I0",
"n": null,
"t": "Interrucpion recepcion serial",
"d": "Muestra como recibir ordenes seriales por interrpcion y poder transmitir, comunicacion full duplex.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5323-basic-serial-interrupt-stm32"
],
"s": "2023-I",
"f": "2023-05-10"
},
{
"id": "1sbJyvI1dqE",
"n": null,
"t": "ESP8266 control por wifi desde el celular y pc del carrito de Proteus",
"d": "Muestra como con interrpcion de recepcion serial leer el modulo esp8266 y controlar el carrito de proteus.",
"c": [],
"s": "2023-I",
"f": "2023-05-13"
},
{
"id": "8Kk0Sn8QJto",
"n": null,
"t": "Primer programa stm32cube ide proteu",
"d": "Primer programa STM32.",
"c": [],
"s": "2023-II",
"f": "2023-08-14"
},
{
"id": "94TmEAg48Yc",
"n": null,
"t": "Programacion , simulacion, y protecion del microcontrolador",
"d": "Muestra las formas de programar y proteger el micro, usando bootloader, y programdor clone u original.",
"c": [],
"s": "2023-II",
"f": "2023-08-16"
},
{
"id": "UMRfCoo1Kmw",
"n": null,
"t": "Actualizacion del firmware del ST-Link v2",
"d": "Muestra como actualizar el firmware en un St link v2 para poder usar el prograamdor clone.",
"c": [],
"s": "2023-II",
"f": "2023-08-22"
},
{
"id": "XzytIdiN4e0",
"n": null,
"t": "Verificando la apropiacion del conocimientos por parte de los estrudiantes",
"d": "Clase de evaluacion de los estudiantes.",
"c": [],
"s": "2023-II",
"f": "2023-08-26"
},
{
"id": "R4yZ0rHyN3M",
"n": null,
"t": "Manejo display 7 segmentos",
"d": "Muentra lo basico para manejo con registro del micro de display 7 segmentos.",
"c": [],
"s": "2023-II",
"f": "2023-08-28"
},
{
"id": "0pXdLnRqC80",
"n": null,
"t": "Control on off con Matlab y la blackpill",
"d": "Muestra como hacer un control on off, con matlab y la black pill.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5452-on-off-control-with-matlab-and-stm32"
],
"s": "2023-II",
"f": "2023-09-06"
},
{
"id": "Lt2eR03qeyY",
"n": null,
"t": "Procedimientos y melodia",
"d": "Muestra los procedimientos en C, retardos en microsegundo en STM32 y melodias.",
"c": [],
"s": "2023-II",
"f": "2023-09-11"
},
{
"id": "aAbav9kSedg",
"n": null,
"t": "Entradas en el STM32, condicional if",
"d": "Muestra como confgurar las entradas usando pull up y pull down y condicional if.",
"c": [],
"s": "2023-II",
"f": "2023-09-12"
},
{
"id": "eXkiTTAAwEI",
"n": null,
"t": "Usando liberrias",
"d": "Muestra como usar librerias en STM32.",
"c": [],
"s": "2023-II",
"f": "2023-09-14"
},
{
"id": "XIdPKMyZ94I",
"n": null,
"t": "Comunicacion UART transmision",
"d": "Muestra como configurar la comunicacion serial, y transmitir datos en proteus y de protesu a otras aplicaciones.",
"c": [],
"s": "2023-II",
"f": "2023-09-26"
},
{
"id": "fV_V5hpP3nc",
"n": null,
"t": "Comunicacion UART recepcion",
"d": "Muestra como recibir datos ordened seriales desde el STM32.",
"c": [],
"s": "2023-II",
"f": "2023-10-23"
},
{
"id": "z78E7GQGOww",
"n": null,
"t": "Introduccion al uso del STM32CubeIDE y simulacion en Proteus",
"d": "Muestra los inicios con el STM32 en el elst32cubeide.",
"c": [],
"s": "2024-I",
"f": "2024-02-10"
},
{
"id": "KeFsZebBeYQ",
"n": null,
"t": "Proteccion firmware, debugger, programacion, 7 segmentos",
"d": "Clase en vivo, proteger código en stm32, programadores stm32, debbuger.",
"c": [],
"s": "2024-I",
"f": "2024-02-14"
},
{
"id": "BfI_dcQGoQU",
"n": null,
"t": "Manejo de  puertos con registros, simulacion blackpil",
"d": "",
"c": [],
"s": "2024-I",
"f": "2024-02-16"
},
{
"id": "_lLZoCXrIDs",
"n": null,
"t": "STM32. Creacion y uso de liberrias, generacion de tonos",
"d": "Muestra como crear o usar liberrias en STM32, y lo aplica en tonos, o melodias.",
"c": [],
"s": "2024-I",
"g": [
"Virtual"
],
"f": "2024-02-20"
},
{
"id": "d5FYtOhD0Zs",
"n": null,
"t": "Entradas pull up, pull dowm,  condicional if, rebote",
"d": "Muestra como configurarr las entradas en STM32.",
"c": [],
"s": "2024-I",
"f": "2024-03-06"
},
{
"id": "AkVvcmJhJvA",
"n": null,
"t": "Aplicacion real de los condicionales if.leer puerto con registros",
"d": "Muestra como usar el if. else if, else, y como leer un puerto completo a nivel de registros.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5682-stm32-read-input-with-register"
],
"s": "2024-I",
"f": "2024-03-08"
},
{
"id": "jh3SZ72sAGs",
"n": null,
"t": "Aplicacion real de los condicionales if.leer puerto con registros",
"d": "Muestra como usar el if. else if, else, y como leer un puerto completo a nivel de registros.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5682-stm32-read-input-with-register"
],
"s": "2024-I",
"f": "2024-03-09"
},
{
"id": "JgUsaaLYhTI",
"n": null,
"t": "Manejo LCD alfanumerico",
"d": "Muetsra la librerias para manejo de lcd y la creacion de caracteres propios.",
"c": [],
"s": "2024-I",
"f": "2024-03-13"
},
{
"id": "04L63QhO0gg",
"n": null,
"t": "Uso de sprintf",
"d": "Mediante un display muestra los usos basicos de la funcion sprintf.",
"c": [],
"s": "2024-I",
"f": "2024-03-15"
},
{
"id": "oyk9gBktx6M",
"n": null,
"t": "Introducion a la comunicacion por usart",
"d": "Muestra como enviar configurar y mandar datos pro el puerto serial uart.",
"c": [],
"s": "2024-I",
"f": "2024-03-20"
},
{
"id": "NYHEn1wvggY",
"n": null,
"t": "Modulo ADC, conexion de diferentes sensores",
"d": "Muestra como conectar sensores analogos al micro.",
"c": [],
"s": "2024-I",
"f": "2024-04-03"
},
{
"id": "MVHzLt_o514",
"n": null,
"t": "Crear un puerto USB  virtual CDC para comunicacion UART",
"d": "Muestra coimo se crea un puerto com fisico con la black pill por USB.",
"c": [],
"s": "2024-I",
"f": "2024-04-04"
},
{
"id": "TiNmD_UIo9Q",
"n": null,
"t": "Comunicacion bluetooth con el celular, monitoreo de variables",
"d": "Muestra como enviar desde proteus a bluetooth informacion al celular y monitorear variables.",
"c": [],
"s": "2024-I",
"f": "2024-04-10"
},
{
"id": "HClJogYZ0JQ",
"n": null,
"t": "Puente en h, control giro motor simualcion Proteus, bluetooh",
"d": "Muestra como controlar el carrito simulado de proteus, y crear un puerto serial por bluetooth para posteriormente utilizarlo.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5710-stm32-class-h-bridge-dc-motor"
],
"s": "2024-I",
"f": "2024-04-26"
},
{
"id": "MQRyTIjC1f0",
"n": null,
"t": "Recepcion de ordenes seriales, modo bloqueante",
"d": "Muestra como recibir ordes seriales en el micro, y manejar actuadofes o indicadores.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5711-stm32-serial-receive"
],
"s": "2024-I",
"f": "2024-04-30"
},
{
"id": "-0BW3hB3--A",
"n": null,
"t": "Manejo de motores DC y servomotores, recepcion serial con valores",
"d": "Muestra como manejar servos y motores dc, forma basica sin librerias.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5716-dc-motor-and-servo-control-stm32"
],
"s": "2024-I",
"f": "2024-05-08"
},
{
"id": "w9YDnCuEwNE",
"n": null,
"t": "Recepcion serial por interrupcion  inline IDLE detect",
"d": "",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5551-stm32-usart-recive-dma-inline-idle-detect"
],
"s": "2024-I",
"f": "2024-05-16"
},
{
"id": "SycUOxjMXYg",
"n": null,
"t": "Macros con #define para manejo facil de pines in/out",
"d": "Muestra como, usar #define y concatenacion, para manejar de forma mas sensoclla encender, apagar, titilar o leeer poines dela STM32.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5752-easy-way-to-manage-input-and-output-in-stm32-using-macos-def"
],
"s": "2024-II",
"g": [
"Virtual"
],
"f": "2024-07-04"
},
{
"id": "Qluo8webG-Y",
"n": null,
"t": "El porque dictar el curso con STM32",
"d": "Seleccion del micro a usar en sistemas embebidos.",
"c": [],
"s": "2024-II",
"f": "2024-08-13"
},
{
"id": "xK26itoj_kg",
"n": null,
"t": "Analizando el esqumatico de la black pill, seleccion de  software a usar",
"d": "Q.",
"c": [],
"s": "2024-II",
"f": "2024-08-16"
},
{
"id": "BnKbncsPquo",
"n": null,
"t": "Iniciando a programar STM32 y simulando en Proteus",
"d": "Inciiando a programar STM32 y simulando en Proteus.",
"c": [],
"s": "2024-II",
"g": [
"Presencial"
],
"f": "2024-08-21"
},
{
"id": "QUc2PLLiY_s",
"n": null,
"t": "Inciando a programar STM32 y simulando en Proteus",
"d": "",
"c": [],
"s": "2024-II",
"g": [
"Virtual"
],
"f": "2024-08-21"
},
{
"id": "d3-Ecm1N_34",
"n": null,
"t": "PWM y recepcion serial por interrupcion IDLE in line detect",
"d": "Enivo datos LabVIEW y Nextion.",
"c": [],
"s": "2024-II",
"g": [
"ENAP"
],
"f": "2024-08-22"
},
{
"id": "_xAogrk9ivs",
"n": null,
"t": "Manejo de puertos, procedimientos y display 7 segmentos",
"d": "",
"c": [],
"s": "2024-II",
"f": "2024-08-23"
},
{
"id": "DWTiPE9QFG0",
"n": null,
"t": "Programacion, proteccion del micro real, debugger",
"d": "Muestra formas de programar el STM32, proteger codigoi, hacer Debbug.",
"c": [],
"s": "2024-II",
"f": "2024-08-27"
},
{
"id": "ES5YYIypZIA",
"n": null,
"t": "Creacion de tonos y melodias",
"d": "Explicaocmo crear retarods de microsegundo para posteriormente usarlo en melodias.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5788-melody-in-stm32"
],
"s": "2024-II",
"f": "2024-08-31"
},
{
"id": "tdvv4fCBQL0",
"n": null,
"t": "Primera evaluacion del curso de sistemas embebidos",
"d": "",
"c": [],
"s": "2024-II",
"f": "2024-09-02"
},
{
"id": "y5YMVulMEKk",
"n": null,
"t": "Requerimientos del proyecto de asignatura",
"d": "",
"c": [],
"s": "2024-II",
"g": [
"Virtual"
],
"f": "2024-09-10"
},
{
"id": "9hpb0dyKgBM",
"n": null,
"t": "Manejo básico de un LCD",
"d": "",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5810-stm32-lcd-basic"
],
"s": "2024-II",
"g": [
"Virtual"
],
"f": "2024-09-24"
},
{
"id": "Mh7o79XeOU8",
"n": null,
"t": "EL ADC, Lectura diferentes sensores analogos",
"d": "Codigo.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5812-stm32-adc-dma"
],
"s": "2024-II",
"g": [
"Virtual"
],
"f": "2024-09-25"
},
{
"id": "KVWkZ0AXhMI",
"n": null,
"t": "Comunicación UART, uso Bluetooh",
"d": "Me quedo la primera parte sin audio, pero despues si tiene.",
"c": [],
"s": "2024-II",
"f": "2024-10-01"
},
{
"id": "Q59cuI32zWU",
"n": null,
"t": "Recepción serial Con Labview",
"d": "Muestra como recibir tarma serial con LabVIEW.",
"c": [],
"s": "2024-II",
"f": "2024-10-04"
},
{
"id": "1gqaR-WFzd4",
"n": null,
"t": "Concepto de PWM, control motores DC y servomotores",
"d": "Muestra como crear señales PWM en Proteus y manejar motores dc y servomotores.",
"c": [],
"s": "2024-II",
"f": "2024-10-19"
},
{
"id": "epFQJteRK60",
"n": null,
"t": "Quitz  de conocimientos adquiridos, manejo PWM",
"d": "",
"c": [],
"s": "2024-II",
"f": "2024-10-30"
},
{
"id": "nudIBv1lrO4",
"n": null,
"t": "Control con wifi,modulo DT-06 ,con el pc y el celular",
"d": "Muestra como controlar por wifi usando el celular un stm32 y el modulo DT-06.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5837-stm32-wifi-control-tcp-controller"
],
"s": "2024-II",
"f": "2024-11-11"
},
{
"id": "7RIJxcXiGD0",
"n": null,
"t": "Creacion de librerias, uso de librerias, conflictos entre librerias",
"d": "Muestra como crear librerías en stm32cubeide, usar librerías de terceros y solucionar problemas entre librerías.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5876-using-library-on-stm32"
],
"s": "2025-I",
"f": "2025-03-18"
},
{
"id": "87pQ64qkdkA",
"n": null,
"t": "Librerias pantallas OLED y transmision serial",
"d": "Muestra el uso de librerias oled y comunicación serial.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5878-stm32-class-about-oled-and-uart"
],
"s": "2025-I",
"f": "2025-03-25"
},
{
"id": "Xqfb0Ex70ZM",
"n": null,
"t": "ADC varios canales  DMA, comunicacion UART, USB-CDC, bluetooth, wifi",
"d": "Muestra como leer seriarmente varios canales con DMA, transmitir la información: USB CDC, UART USB, Bluetooth o WIFI.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5881-adc-dma-bluetooh-wifi-comunication-stm32"
],
"s": "2025-I",
"f": "2025-04-03"
},
{
"id": "Lsn6ycAiGRk",
"n": null,
"t": "Recepcion, serial y wifi en LabVIEW, app monitoreo en celular",
"d": "Comunica el stm32 con LabVIEW por wifi o celular.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5884-stm32-and-labview-wifi-and-serial-read-celualr-app"
],
"s": "2025-I",
"f": "2025-04-12"
},
{
"id": "aoY8C0ytIsM",
"n": null,
"t": "Uso de PWM sin librerias",
"d": "Muestra el uso básico de señales PWM.",
"c": [],
"s": "2025-I",
"f": "2025-05-02"
},
{
"id": "SmQFjVD7BLE",
"n": null,
"t": "Interrupción serial de recepción, control por bluetooth",
"d": "Muestra como usar y configurar la interrupción serial en stm32.",
"c": [],
"s": "2025-I",
"f": "2025-05-08"
},
{
"id": "LkUSXu12Mts",
"n": null,
"t": "PWM con librerias,introduccion a las interrupciones",
"d": "Muestra como manejar motores dc y Servos con librerías y el uso de interrupciones timer y flanco.",
"c": [],
"s": "2025-I",
"f": "2025-05-08"
},
{
"id": "f2-Re_lqEPY",
"n": null,
"t": "Conceptos basicos fuente conmutada con STM32 lazo cerrado. PID en STM32",
"d": "Muestra mis Liberarías PID aplicada a una fuente conmutada.",
"c": [
"https://github.com/alcidesramos/conmutada_cana_PID",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-fuente-conmutada-pid"
],
"s": "2025-I",
"f": "2025-06-01"
},
{
"id": "XuxFiapt8Qc",
"n": null,
"t": "Introduccion STM32CubeIDE, simulacion en Proteus, programacion y debuger",
"d": "",
"c": [],
"s": "2025-II",
"f": "2025-08-21"
},
{
"id": "vPmtCeRmO5g",
"n": null,
"t": "Manejo de display 7 segmento, configuracion cristal del micro",
"d": "",
"c": [],
"s": "2025-II",
"f": "2025-08-29"
},
{
"id": "Woh_TVuLzOU",
"n": null,
"t": "Procedimientos, parametros, tipos de variables creacion de melodias",
"d": "",
"c": [],
"s": "2025-II",
"g": [
"Virtual"
],
"f": "2025-09-01"
},
{
"id": "0EuEyjE5P-g",
"n": null,
"t": "Procedimientos, parametros, tipos de variables creacion de melodias",
"d": "",
"c": [],
"s": "2025-II",
"g": [
"Presencial"
],
"f": "2025-09-02"
},
{
"id": "I-rznvr91rk",
"n": null,
"t": "Creacion de librerias, macros en c",
"d": "Muestra como crear y utilizar librerías en srm32cubeide, y el uso de macros para entradas y salidas.",
"c": [],
"s": "2025-II",
"f": "2025-09-12"
},
{
"id": "rnD_P6TSF0w",
"n": null,
"t": "Pantalla LCD alfanumerica e introduccion a comunicacion UART",
"d": "",
"c": [],
"s": "2025-II",
"f": "2025-09-19"
},
{
"id": "Xtu2CT5tV6s",
"n": null,
"t": "Comunicacion serial virtual y fisica Proteus,  comunicacion bluet0oth. Terminal",
"d": "",
"c": [],
"s": "2025-II",
"f": "2025-09-24"
},
{
"id": "SeKLYjvoUpA",
"n": null,
"t": "Conceptos de ADC y caracterizacion de sensores",
"d": "Muestra como leer un canal de ADC y aplicarlo para leer sensores, voltajes, batería, etc.",
"c": [],
"s": "2025-II",
"f": "2025-10-03"
},
{
"id": "zjJ4swdkIZY",
"n": null,
"t": "Lectura de varios canales ADC por DMA, vizualizacion en LabVIEW",
"d": "Muestra como usar el DMA para leer varios sensores , y comunicarse con LabVIEW para verlos de manera grafica.",
"c": [],
"s": "2025-II",
"f": "2025-10-03"
},
{
"id": "JzNxUs7-Unk",
"n": null,
"t": "Configurar bluetooth HC-05,  comunicacicon TCP LabVIEW, celular, Node-RED",
"d": "Muestra como configurar el modulo hc05, baudios, nombre, uso del modulo wifi dt-06 como servidor, cliente, uso con node red.",
"c": [],
"s": "2025-II",
"f": "2025-10-10"
},
{
"id": "QmA2OReLdAw",
"n": null,
"t": "Diferentes tipos de conectores y tip de diseño PCB usando Proteus",
"d": "",
"c": [],
"s": "2025-II",
"f": "2025-10-21"
},
{
"id": "XqAYReNUhEs",
"n": null,
"t": "PWM, puente  en h servos. Manejo sin librerias de PWM sin STM32",
"d": "",
"c": [],
"s": "2025-II",
"f": "2025-10-24"
},
{
"id": "DPGlUPQ_wgo",
"n": null,
"t": "Librerias PWM y servos , introduccion a las interrupciones",
"d": "",
"c": [],
"s": "2025-II",
"f": "2025-10-28"
},
{
"id": "3LaygrA0ZcM",
"n": null,
"t": "Interrupcion timer, flanco  y serial, comandos y ordenes puntuales",
"d": "",
"c": [],
"s": "2025-II",
"f": "2025-10-31"
},
{
"id": "w2VKwrc2f0E",
"n": null,
"t": "Primer  programa usando STM32CubeMX, cubeide  y  simulacion en Proteus",
"d": "Muestra como hacer el primer proyecto con stm32cubemx y stm32cubeide, y simularlo en proteus.",
"c": [],
"s": "2026-I",
"f": "2026-02-17"
},
{
"id": "jQAKgKY4ZWc",
"n": null,
"t": "Programacion, proteccion , debugger y actualizacion del programdor stlink",
"d": "",
"c": [],
"s": "2026-I",
"f": "2026-02-19"
},
{
"id": "bAaSFPANMwk",
"n": null,
"t": "Display 7 segmentos, maneho de registro sin HAL, procedimeintos en c",
"d": "",
"c": [],
"s": "2026-I",
"f": "2026-02-24"
},
{
"id": "ZEJgWrPf6Uk",
"n": null,
"t": "Generacion de tonos y melodias",
"d": "",
"c": [
"https://github.com/alcidesramos/SOnido1"
],
"s": "2026-I",
"f": "2026-03-03"
},
{
"id": "nw2PpVHQWO8",
"n": null,
"t": "Uso de darlintong  para el parlante y detalles para el parcial",
"d": "",
"c": [],
"s": "2026-I",
"f": "2026-03-06"
},
{
"id": "ECaU9QpL5Is",
"n": null,
"t": "Que debe contener el proyecto de  segundo y tercer  corte",
"d": "",
"c": [],
"s": "2026-I",
"f": "2026-03-18"
},
{
"id": "g4YKsMRRnT8",
"n": null,
"t": "Creacion de librerias y uso de librerias de terceros , manejo de un LCD",
"d": "",
"c": [],
"s": "2026-I",
"f": "2026-03-20"
},
{
"id": "jqrnlt4Eb_o",
"n": null,
"t": "Uso de sprintf, aplicacion con diplasy LCD",
"d": "",
"c": [],
"s": "2026-I",
"f": "2026-03-24"
},
{
"id": "zZEwPVc78Hc",
"n": null,
"t": "Librerias de comunicacion serial UART",
"d": "Codigo.",
"c": [
"https://github.com/alcidesramos/CLASE_UART"
],
"s": "2026-I",
"f": "2026-03-30"
},
{
"id": "fmjYUxlWWao",
"n": null,
"t": "Manejo de ADC, sensores envio de  sensores a  LabVIEW",
"d": "",
"c": [],
"s": "2026-I",
"f": "2026-04-07"
},
{
"id": "15YSjh9VQtE",
"n": null,
"t": "Tips de tipos  de conectores y diseño de PCB en Proteus",
"d": "",
"c": [],
"s": "2026-I",
"f": "2026-04-18"
},
{
"id": "mLJj6oseKHM",
"n": null,
"t": "Taller  uso librerias PWM y servos",
"d": "",
"c": [],
"s": "2026-I",
"f": "2026-05-06"
},
{
"id": "Rypi0t6aIFE",
"n": null,
"t": "Introduccion a las interrupciones, interrupcion de timer, flanco y serial",
"d": "",
"c": [
"https://github.com/alcidesramos/talllerpwm1"
],
"s": "2026-I",
"f": "2026-05-08"
},
{
"id": "TwcxuqhvIps",
"n": null,
"t": "Manejo del ADC con DMA modo normal  en visual studio code",
"d": "",
"c": [
"https://github.com/alcidesramos/ADC_PROYECTO2026"
],
"s": "2026-II",
"g": [
"ENAP"
],
"f": "2026-08-19"
},
{
"id": "-hxFT3Grnas",
"n": null,
"t": "Configurando visual studio code para STM32, simulacion en Proteus",
"d": "",
"c": [
"https://github.com/alcidesramos/Yuca"
],
"s": "2026-II",
"f": "2026-08-21"
},
{
"id": "U0PlqPAmSCE",
"n": null,
"t": "Programacion, debugar en visual studio, manejo display 7 segmento",
"d": "",
"c": [
"https://github.com/alcidesramos/LEDUTB"
],
"s": "2026-II",
"f": "2026-08-25"
},
{
"id": "E-vMcBrzFAc",
"n": null,
"t": "Display 7 segmento",
"d": "",
"c": [
"https://github.com/alcidesramos/Yuca"
],
"s": "2026-II",
"f": "2026-08-26"
},
{
"id": "bC15Lq5sEi4",
"n": null,
"t": "Creacion de librrerias y uso manejo de un LCD",
"d": "",
"c": [],
"s": "2026-II",
"f": "2026-09-18"
},
{
"id": "3ISAWOprK9M",
"n": null,
"t": "Uso de funcion sprintf configuracion de flotantes en VS Code con STM32",
"d": "",
"c": [],
"s": "2026-II",
"f": "2026-09-21"
},
{
"id": "3pFOqElI8vI",
"n": null,
"t": "Configuracion para restaurar el CMake,sprintf y protocolo I2C, SPI",
"d": "",
"c": [],
"s": "2026-II",
"f": "2026-09-23"
},
{
"id": "blz54yBoYTw",
"n": null,
"t": "Recepcion bluetooth en el celular,  introducccion a TCP ip",
"d": "",
"c": [],
"s": "2026-II",
"f": "2026-10-05"
},
{
"id": "3cT96Xym_bg",
"n": null,
"t": "Comunicacion TCP, wifi modulo DT-06 Node-RED diseño PCB en Proteus",
"d": "",
"c": [
"https://github.com/alcidesramos/PATACON"
],
"s": "2026-II",
"f": "2026-10-10"
},
{
"id": "PnqH2wMsQes",
"n": null,
"t": "Interrupciones de flanco y serial",
"d": "",
"c": [
"https://github.com/alcidesramos/ledreto1"
],
"s": "2026-II",
"f": "2026-10-20"
},
{
"id": "HOKtF_IeW18",
"n": null,
"t": "Tipos de conectores  en lectronica,  interrupcion de timers",
"d": "Tipos de conectores en electronica, interrupcion de timers grupo g.",
"c": [
"https://github.com/alcidesramos/bollo"
],
"s": "2026-II",
"f": "2026-10-22"
},
{
"id": "sceyquTkJOA",
"n": null,
"t": "Interrupcion de timers, flanco y serial",
"d": "",
"c": [],
"s": "2026-II",
"g": [
"Grupo I"
],
"f": "2026-10-24"
},
{
"id": "euBhvsxrGPY",
"n": null,
"t": "Interrupcion de timers, flanco y serial",
"d": "",
"c": [],
"s": "2026-II",
"g": [
"Grupo H"
],
"f": "2026-10-24"
},
{
"id": "65NlgiSX8yc",
"n": null,
"t": "Usando la IA apra calificar  , introduccion al PWM",
"d": "",
"c": [],
"s": "2026-II",
"f": "2026-10-26"
},
{
"id": "Dn5w9a68Xe4",
"n": null,
"t": "Manejo de servos, libreria de servos y PWM, laboratorio 4",
"d": "",
"c": [],
"s": "2026-II",
"g": [
"Grupo G"
],
"f": "2026-10-29"
},
{
"id": "VHQB1MrBZGM",
"n": null,
"t": "Manejo de servos, libreria de servos y PWM, laboratorio 4",
"d": "",
"c": [],
"s": "2026-II",
"g": [
"Grupo H"
],
"f": "2026-10-31"
}
],
"secciones": [
{
"id": "2026-II",
"nombre": "Semestre 2026 - II"
},
{
"id": "2026-I",
"nombre": "Semestre 2026 - I"
},
{
"id": "2025-II",
"nombre": "Semestre 2025 - II"
},
{
"id": "2025-I",
"nombre": "Semestre 2025 - I"
},
{
"id": "2024-II",
"nombre": "Semestre 2024 - II"
},
{
"id": "2024-I",
"nombre": "Semestre 2024 - I"
},
{
"id": "2023-II",
"nombre": "Semestre 2023 - II"
},
{
"id": "2023-I",
"nombre": "Semestre 2023 - I"
}
]
},
"stm32-vscode": {
"titulo": "STM32 en Visual Studio Code (y ESP32)",
"desc": "Programa y depura STM32 desde VS Code con CMake, snippets, Git y GitHub Copilot. Incluye clases en vivo, nuevos STM32C5 y ESP32 simulado en Wokwi.",
"lista": "PLUS_QyfxT-Zk",
"videos": [
{
"id": "b-fo9t6tsFc",
"n": null,
"t": "ESP32, simular en Wokwi y enviar informacion a aplicaciones o hardware externo, python, Node-RED, etc",
"d": "",
"c": [
"https://github.com/alcidesramos/COMUNICACION_EXTERNA_IA"
]
},
{
"id": "SMFflXoIyAQ",
"n": null,
"t": "STM32, solucionando problema con el codigo:-g ninja exited with code: 1",
"d": "",
"c": []
},
{
"id": "bC15Lq5sEi4",
"n": null,
"t": "STM32 2026_ii sem. Clase en vivo, creacion de librrerias y uso manejo de un LCD",
"d": "",
"c": []
},
{
"id": "4SsyAn_Q-zY",
"n": 148,
"t": "Actualizacion de mis librerías para leer datos desde un GPS",
"d": "Alarma de ubicacion. Software.",
"c": [
"https://github.com/alcidesramos/GPS_ARZ",
"https://github.com/alcidesramos/GPS_CANAL1"
]
},
{
"id": "GVREZJTDP4A",
"n": 148,
"t": "Actualizacion de mis librerías para leer datos desde un GPS",
"d": "Alarma de ubicacion. Software.",
"c": [
"https://github.com/alcidesramos/GPS_ARZ",
"https://github.com/alcidesramos/GPS_CANAL"
]
},
{
"id": "fXi1XrcTwcY",
"n": null,
"t": "STM32 configurarcion inicial de git en visual studio code, subir repositorios a GitHub",
"d": "COMANDO INIIALES EN GIT git config --global user.name \"ALCIDES RAMOS ZAMBRANO \" git config --global user.email \"a.",
"c": []
},
{
"id": "K91sqI4wDtQ",
"n": null,
"t": "STM32 configurar botones para programar y proteger desde visual studio code, uso de breadcrumbs",
"d": "Configuracion botones para programar y proteger el micro STM32 desde visual studio code sin usar stm32cube programmer, y uso de uso de breadcrumbs decargas.",
"c": [
"https://github.com/alcidesramos/botones"
]
},
{
"id": "E-vMcBrzFAc",
"n": null,
"t": "Display 7 segmento",
"d": "",
"c": [
"https://github.com/alcidesramos/Yuca"
]
},
{
"id": "U0PlqPAmSCE",
"n": null,
"t": "STM32 2026_ii sem. Clase en vivo, programacion, debugar en visual studio, manejo display 7 segmento",
"d": "",
"c": [
"https://github.com/alcidesramos/LEDUTB"
]
},
{
"id": "-hxFT3Grnas",
"n": null,
"t": "STM32 2026_ii sem. Clase en vivo, configurando visual studio code para STM32, simulacion en Proteus",
"d": "",
"c": [
"https://github.com/alcidesramos/Yuca"
]
},
{
"id": "TwcxuqhvIps",
"n": null,
"t": "STM32. 2026_enap clase vivo manejo del ADC con DMA modo normal en visual studio code",
"d": "",
"c": [
"https://github.com/alcidesramos/ADC_PROYECTO2026"
]
},
{
"id": "KDxKBYkZhvU",
"n": null,
"t": "STM32 hola mundo con nuevos micros stm32c5 version china weact studio en visual studio code",
"d": "",
"c": []
},
{
"id": "LaaKAjiSKBI",
"n": null,
"t": "Mi primera impresion de GitHub copilot en visual studio code , aplicado a STM32 en c",
"d": "",
"c": []
},
{
"id": "dTywiiegBTg",
"n": null,
"t": "GitHub copilot version paga en visual studio code",
"d": "",
"c": []
},
{
"id": "eQPDSMGV1H4",
"n": null,
"t": "STM32 como configurar STM32 en visual studio code de forma visual , para uso librerias y mas",
"d": "Muestra como configuro con un script de python vsc para trabajar mas comodo.",
"c": [
"https://github.com/alcidesramos/VSC_DEFINITIVO"
]
},
{
"id": "KS0WsLs1zNg",
"n": null,
"t": "STM32 con visual studio code, modo comandos cortos uso se snippets (fragmentos de codigo)",
"d": "",
"c": []
},
{
"id": "rIKHWyQ9OE4",
"n": null,
"t": "STM32 con visual studio code, modo comandos largos para archivo CMake y agregar librerias",
"d": "Crear .hex.",
"c": [
"https://github.com/alcidesramos/SERIAL_VSC_comandos_largos"
]
},
{
"id": "F3BDbp5nwy8",
"n": null,
"t": "STM32 configuracion inicial para visual studio code para stm32cubemx1 o con stm32cubemx2",
"d": "",
"c": []
},
{
"id": "P3hEuzVOTYc",
"n": null,
"t": "Lo que se viene en el canal, curso de Arduino uno q y curso de nuevos micros stm32c5",
"d": "Y migracion a visual studio code.",
"c": []
}
]
},
"stm32-keil": {
"titulo": "STM32 con ARM Keil",
"desc": "Las clases del curso STM32 trabajadas con ARM Keil MDK: primeros programas, display 7 segmentos, programación con ST-Link y protección de código.",
"lista": "PLp8IkbtcjNXx4_GpJ8Q7JAc8ukwcHFvib",
"videos": [
{
"id": "fES3IDSXI9k",
"n": 1,
"t": "Introducción",
"d": "Indica, los temas tarjetas y software autilizar en el curso. se recomienda ver este video de la familia stm32 y el link de librerias en proteus.",
"c": [
"https://github.com/alcidesramos/LIBRERIAS_PROTEUS_2026"
]
},
{
"id": "BC46jcSBV8I",
"n": 2,
"t": "Comparación cortex y software a utilizar",
"d": "Muestro las diferencias entre los cortex M3 a M7, y los software a utilizar, y las opcione spara proteger codifos entre otros temas. LINK DE LOS PROGRAMA A UTILIZAR.",
"c": [
"https://drive.google.com/drive/folders/1nnjIC1OhM6ieTJ7aiQD21Ma8gtFXgiMK?usp=sharing"
]
},
{
"id": "YWqmhFwCOnA",
"n": 5,
"t": "TIPS Simualción STM32 en proteus. Parte 1",
"d": "Muestra como simular STM32 cortex M3 y M4 en proteus, con las opciones que trae proteus por defecto, usando el arm keil.",
"c": []
},
{
"id": "62N1GrTIncE",
"n": 7,
"t": "TIPS Simulación STM32 en proteus. Parte 3",
"d": "Muestras mis liberias para simular ;las tarjetas bluepill , black pill en proteus incluyendo paquete de PCB y modelo 3D ademas de la libreria para la nucleo L476G Además enseña como…",
"c": [
"https://github.com/alcidesramos/LIBRERIAS_PROTEUS_2026"
]
},
{
"id": "uzsI4K9HqVA",
"n": 8,
"t": "Hola Mundo en un cortex M0",
"d": "Muestra lo basico para programr tanto en stm32cubeide y ARM Keil un stm32f030f4p6.",
"c": []
},
{
"id": "7rsiX4FaJU4",
"n": 13,
"t": "Opciones de programacion usando un ST-Link v2 clone",
"d": "Muestra las opciones para programar microcontroladores stm32 usando el ST LINK V2 clone o chino.",
"c": []
},
{
"id": "Z7xqb0feb60",
"n": 17,
"t": "Display 7 segmentos basico. En ARM Keil",
"d": "Muestra como sacar informacion por un puerto del stm32 usando registrOS, forma basica, USANDO ARM KEIL. VIDEO EN STM32CUBEID: codigo base.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5176-using-register-for-stm32-port-dispaly-example"
]
},
{
"id": "TJOIynTbkkE",
"n": 22,
"t": "Como programar usando un ST-Link v2 clone",
"d": "Muestra como usar la aplicacion st link utility, para progreamar los stm32 con una prograamdor clone que no reconoce el stm32 programmer. link descarga.",
"c": [
"https://drive.google.com/drive/folders/19mhAFdn6ABU82cjXVgXdtGsJeVL3zZ46?usp=sharing"
]
},
{
"id": "fU91BdXKDTk",
"n": 23,
"t": "Como clonar una STM32 y como proteger para que no sea clonada",
"d": "Muestra como proteger una STM32 para que no sea clonada, y a la vez como clonarla.",
"c": []
},
{
"id": "YnT6YiuqWGo",
"n": null,
"t": "Tip como usar un programador ST-Link v2 clone con STM32CubeProgrammer",
"d": "Muestra como usar un STLINK V2 clone con el programador official de stm32 el stm32cubeprogrammer.",
"c": []
},
{
"id": "Z3oG9cOtZq4",
"n": null,
"t": "STM32 analizando el plano esquematico de la tarjeta blackpill, tips de daños y reparacion",
"d": "Muestra un analisis de la tarjeta black pill , sus componentes , fallas comunes y tips de reparacion.",
"c": []
},
{
"id": "-NsYqoONvYI",
"n": null,
"t": "Probando las funcionalidades del nuevo stlink v2 clone con esteroides, mejor que el original",
"d": "Muestra como configurar el stlink clone, para usar con stm32cubeide.",
"c": []
}
]
},
"stm32-dsp": {
"titulo": "DSP en STM32",
"desc": "Procesamiento digital de señales en STM32 con las librerías CMSIS-DSP.",
"lista": "PLp8IkbtcjNXzqyiT4kOakCyPs5GSpDZ2y",
"videos": [
{
"id": "zPzmOXfuAHU",
"n": 102,
"t": "Lleva tu STM32 a otro nivel, como activar librerias CMSIS-DSP",
"d": "Muestra como integrar las librerias de DSP CMSIS en un stm32 en stm32cubeide.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5877-using-cmsis-dsp-library-on-stm32"
]
}
]
},
"stm32-otros": {
"titulo": "Otros proyectos con STM32",
"desc": "Prototipos con STM32: explorador de terreno con mini LIDAR y servo en LabVIEW, y medición de la velocidad de un balín en un acelerador magnético.",
"lista": "PLp8IkbtcjNXymYHxneqC392VpBMCV6v1M",
"videos": [
{
"id": "Wdddhilibq8",
"n": null,
"t": "Breve descripcion del uso de un mini LIDAR y un servo con LabVIEW para un explorador del terreno",
"d": "Muestra un prototipo usando stm32 , la blue pill para realizar in explorador de terreno de 0 a 180 grados usando un mini LIDAR TF.",
"c": [],
"f": "2022-05-11"
},
{
"id": "D-f3rBjnAzA",
"n": null,
"t": "STM32 proyecto.  Leyendo velocidad de un balin, en un acelerador magnetico",
"d": "Muestra una accesoria en un proyecto para detectar la velocidad de un balin girando en un acelerador magnético. Mas información del proyecto contactar a: rojogoba08@gmail.com…",
"c": [],
"f": "2025-04-25"
}
]
},
"pic-mikroc": {
"titulo": "Curso MikroC PRO for PIC",
"desc": "Lecciones paso a paso de lenguaje C para PIC con MikroC: puertos, displays, LCD, ADC, PWM, DAC, UART, interrupciones, timers, I2C, EEPROM, sleep y watchdog.",
"lista": "PLp8IkbtcjNXwVlJtL9yfwC8jUcSyxBn2D",
"videos": [
{
"id": "l38uPtZDNEU",
"n": null,
"t": "Curso Mikroc pro for DSPIC",
"d": "Muestra, mediante tarjetas entrenadoras programa básico de hola mundo, para diferentes tipos de DSPIC utilizando Mikroc Pro for DSPIC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2783-dspic-30f-33f-33ep-hello-word"
]
},
{
"id": "-Hrz6PZwdiw",
"n": null,
"t": "Curso de MPLAB xc 16 dsPIC",
"d": "Muestra, mediante tarjetas entrenadoras programa básico de hola mundo, para diferentes tipos de DSPIC utilizando Mplab xc16.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2843-mplab-xc16-dspic-30f-33f-33ep-hello-word"
]
},
{
"id": "4qMbGSKcLv8",
"n": 1,
"t": "Curso de MikroC para PIC lección 1",
"d": "Conceptos básicos de microcontroladores PIC y MIKROC.",
"c": []
},
{
"id": "Yj6tmkliwEc",
"n": 2,
"t": "Manejo display 7 segmentos",
"d": "Conceptos básicos de microcontroladores PIC y MIKROC. video de como solucionar si mikroc no deja activar los segmentos.",
"c": []
},
{
"id": "6sGOPnSdJ7I",
"n": 3,
"t": "Curso de MikroC para PIC lección 3",
"d": "Acceder a un bit especifico de un registro o de un puerto.",
"c": []
},
{
"id": "unzdRHbI0EI",
"n": 4,
"t": "Multiplexacion, Generación de Archivos .cof",
"d": "Multiplaxación 7 segmento mikroc y pic. debbuger por software. generar archivos .cof mikroc Video similar en.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/1118-4-seven-segment-display-counter-multiplexacion"
]
},
{
"id": "OHL7bfYUUa8",
"n": 6,
"t": "Operadores logicos en c",
"d": "Uso de los operadores NOT, AND, XOR en C y en PIC con MIKROC.",
"c": []
},
{
"id": "BB-nJwQNLgI",
"n": 5,
"t": "Melodias y tono",
"d": "Generación de tonos y melodías con PIC y mikroc.",
"c": []
},
{
"id": "EapZLxtCAq8",
"n": 7,
"t": "Procedimientos",
"d": "Procedimientos en lenguaje C. mikroc, PIC.",
"c": []
},
{
"id": "OUFvkKgqRQ8",
"n": 8,
"t": "Condicional if",
"d": "Muestra las diferentes estructuras del uso del condicional IF.",
"c": []
},
{
"id": "cVSoOqNwf8c",
"n": 9,
"t": "Salida PULL UP micros antiguos",
"d": "Muestra el detalle de como usar los micros que tienen una salida tipo pull up.",
"c": []
},
{
"id": "o9JMoWI-IXo",
"n": 10,
"t": "Tipos de variables y constantes en lenguaje c",
"d": "Tipos de variables en C y tipos de constantes.",
"c": []
},
{
"id": "4h7FbvSTdnE",
"n": null,
"t": "Programación ICSP y por bootloader serial PIC con MIkroc",
"d": "Muestra como programar los microcontroladores PIC por ICSP y también con bootloader, usando Mikroc. Por uart , serial.",
"c": []
},
{
"id": "p7WGXWVDu_4",
"n": 11,
"t": "Ciclo for",
"d": "Muestra la estructura y uso del ciclo for en lenguaje C.",
"c": []
},
{
"id": "-9UkThXVZCA",
"n": 12,
"t": "Ciclo while",
"d": "Muestra una aplicación con el ciclo while.",
"c": []
},
{
"id": "m0A16parj_s",
"n": 13,
"t": "Retardos y Debbuger en MIKROC",
"d": "Muestra el uso de los retardos en mikroc, el uso del debbuger , creacion de procedimientos con parámetros.",
"c": []
},
{
"id": "A-hLOu5fhzw",
"n": 14,
"t": "Switch case y maquinas de estado",
"d": "Muestra como usar el switch-case para elaborar maquinas de estados , usando un 12f1822. Bajar.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2591-state-machine-using-switch-case"
]
},
{
"id": "Iam63Vbe_3w",
"n": 15,
"t": "Pantalla LCD Alfanumerica",
"d": "Muestra el uso Básico de la pantalla LCD.",
"c": []
},
{
"id": "qKYxHJzyuXk",
"n": 16,
"t": "LCD por I2C",
"d": "Muestra mis librerias para manejar un lcd por i2c.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2413-lcd-i2c-with-pcf8574-software-and-hardwre-function"
]
},
{
"id": "K-6vqhA21qU",
"n": 17,
"t": "Creación e instalación de libreriaS",
"d": "Muestra como usar, crear e instalar librerías en mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2602-library-for-i2c-lcd"
]
},
{
"id": "kRbfGGd3me8",
"n": 18,
"t": "Funciones de conversiones a cadena en C y en Mikroc",
"d": "Muestras las diferentes formas de usar las librerias de mikroc y de C para convertir variables a cadenas con formato. ver.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2609-use-the-conversion-library-in-mikroc"
]
},
{
"id": "8wmurTYHVHs",
"n": 19,
"t": "El ADC",
"d": "Tips para usar el conversor analogo digital ADC en cualquier microcontrolador PIC y Mikroc. Video para complementar el temas, usando remapeo de la señal, y mejorando la configuración de…",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2632-tips-for-use-the-adc-module-in-whatever-pic-microcontroller"
]
},
{
"id": "x7RYPm3Toow",
"n": 20,
"t": "EL ADC Parte 2",
"d": "Continuación de la clase del ADC con mikroc, muestra cuando usar ADC_READ o ADC__Get_Sample Se recomienda complementar con este video de una clase en vivo acerca del ADC.",
"c": []
},
{
"id": "Gczp_53FBmQ",
"n": 21,
"t": "Modulo PWM",
"d": "Muestra el control de velocidad y sentido de dos motores usando el modulo PWM.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2666-using-the-pwm-for-speed-control-of-dc-motors"
]
},
{
"id": "c6fz_ZtV3mk",
"n": 22,
"t": "Remapeo valores y tips de diseño hardware",
"d": "TIPS de diseño para un circuito robusto , filtrar y eliminar ruidos asociados a cargas inductivas. y función para remapear variables.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2670-using-the-function-of-remapping-varibles-to-scale-values-in-"
]
},
{
"id": "LNHY2zng_ZU",
"n": 23,
"t": "DAC con PWM",
"d": "Muestra como general voltajes d 5 o 12v con pwm usandolo como DAC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2689-using-the-pwm-as-dac"
]
},
{
"id": "VLZVIEXTKJU",
"n": 24,
"t": "Modulo DAC interno",
"d": "Muestra, como usar el modulo DAC, interno en los nuevos microcontroladores y el modulo de amplificadores operacionales.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2690-using-the-dac-in-the-new-pic-microcontrollers"
]
},
{
"id": "THhHA8V875o",
"n": 25,
"t": "Tip para usar librerías hechas en Mplab XC8",
"d": "Muesta como utilizar código elaborado con Mplab code configurator en Mikroc por for PIC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2714-how-to-use-mplab-code-configurator-code-in-mikroc"
]
},
{
"id": "qv6aR6N-f48",
"n": 26,
"t": "Configuracion de cristal en micros con USB",
"d": "Muestras como configuras los micros 18f que poseen puerto USB.",
"c": []
},
{
"id": "_UrQR_rWySk",
"n": 27,
"t": "Tip para la transmisión serial UART",
"d": "Muestra omo transmitir valores enteros y flotantes con mikroc, teniendo en cuenta la optimización de memoria.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2721-tips-for-basic-information-sensors-transmition-for-serial-ua"
]
},
{
"id": "WPj97zsTqQU",
"n": 28,
"t": "Transmisión serial con Paridad Par o Impar",
"d": "Muestra como configurar el micro para transmitir con paridad PAR o IMPAR.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2722-serial-transmission-by-even-or-odd-parity"
]
},
{
"id": "EqzTapbVg4o",
"n": null,
"t": "Usando Arduino como programador de PICS versión 1.0",
"d": "Se muestra para aquellos que ya tienen la plataforma y quiera empezar a programar PICS, un proyecto que permite que uses el compilador que desees para programar tu pic, pero uses el…",
"c": [
"https://github.com/alcidesramos/PROGRAMADOR_PIC_CON_ARDUINO_ARZ",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2745-using-arduino-to-programmer-pics-microcontroller"
]
},
{
"id": "Xz9o_lKAB44",
"n": null,
"t": "Tips para adquisición serial a alta velocidad en windows",
"d": "Muestra como disminuir la latencia, en la adquisición de datos de alta velocidad en windows.",
"c": []
},
{
"id": "g4Mqph1mP84",
"n": null,
"t": "Comparando CCS, mikro y XC8 en recursos",
"d": "Sto es un reto del amigo MARIANO ROCHA (del grupo de face programando PICs primer nivel), que quise cumplir pero de forma ilustrativa. Muestra de manera informativa, y sin tratar de…",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2968-analyzing-three-pic-compilers-using-a-loop"
]
},
{
"id": "mARQqOvUyWs",
"n": null,
"t": "Desempacando la tarjeta Easypic V8 de MIKROE",
"d": "Muestra las características de la nueva tarjeta y un programa de hola mundo, con la tarjeta easypic v8 de MIKROE.",
"c": []
},
{
"id": "7851BF3HuLo",
"n": null,
"t": "Como utilizar el modulo sleep en un microcontrolador en MIKROC",
"d": "Muestra como usar el modulo sleep en un microcontrolador y mikroc. despertando por interrupcion serial o por flanco de bajada.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3277-how-sleep-mode-works-in-pics-mikroc-version"
]
},
{
"id": "5TssW52j7_s",
"n": null,
"t": "Tips para usar el watchdog timer en microcontroladores pics",
"d": "Muestra para que sirve el uso del watchdog timer en los microcontroladores pics.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3292-pic-tips-for-watchdog-timer"
]
},
{
"id": "SiCzR16j44w",
"n": null,
"t": "Manejo de la memoria EEPROM de datos en PIC y MikroC",
"d": "Muetsra como almacenar y leer todo tipos de datos, y cadenas de textos en la memoria eeprom del PIC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3294-how-read-and-write-in-eeprom-memory-pic"
]
},
{
"id": "cRz0mZbtmXo",
"n": null,
"t": "Multiplexación display siete segmentos usando interrupciones",
"d": "Muestra en tiempo real multiplexar un display siete segmento sin carga computacional en el programa principal.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3312-seven-segment-multiplexation-with-interrupt"
]
},
{
"id": "bsJlusrdRnU",
"n": null,
"t": "Como usar el módulo de Modulación de Señales Digital (DSM) en los PIC modernos y con MIKROC",
"d": "Muestra como utilizar la modulación ASK, FSK y PSK en un microcontrolador PIC usando el modulo DSM.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3496-how-use-the-new-data-signal-modulation-module-in-pic-mikroc-"
]
},
{
"id": "dLz9zk4wHrw",
"n": 29,
"t": "Recepción serial por comandos simples y bloqueante",
"d": "Muestra como recibir ordenes de un carácter por puerto serial y realizar varia acciones en forma bloqueante.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3589-led-and-motor-control-whit-simple-serial-recive-character"
]
},
{
"id": "qIe58XUi2ow",
"n": 30,
"t": "Recepción serial por ordenes tipo trama modo bloqueante",
"d": "Muestra como recibir una trama de datos y extraer la información para controlar leds, motores, etc con pic OTROS videos no bloquantes con interrupciones.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3590-led-and-motor-control-whit-string-data-frame"
]
},
{
"id": "xIAZyA27EiU",
"n": 31,
"t": "Interrupciones parte 1",
"d": "Muestra como utilizar de manera fácil la aplicación timer calculation, para generar multiples tareas, basado en interrupciones en un microc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3764-using-timer-interrupts-for-multiple-tasks"
]
},
{
"id": "zNBNYzR6rhY",
"n": 32,
"t": "Interrupciones parte 2",
"d": "Muestra como configurar la interrupción por flanco con registros.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3778-basic-edge-interrupt"
]
},
{
"id": "eYLvaGV-ubU",
"n": 33,
"t": "Interrupciones timers",
"d": "Muestra como utilizar las interrupciones de timers en los pic 16f.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3796-how-uses-timers-interrupts-on-pic16f"
]
},
{
"id": "IoGxImV778g",
"n": 34,
"t": "Interrupciones timers y flanco PIC18F",
"d": "Muestra como pasar un código de interrupciones de times y flancode un pic16f a un 18f.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3797-how-uses-timers-interrupts-on-pic18f"
]
},
{
"id": "oQ9nI3tnuXY",
"n": 35,
"t": "Vectores de interrupcion en PIC18F",
"d": "Muestra como usar los vectores de interrupciones en los pic18f y su ventaja respecto a los 16f.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3798-use-of-low-and-high-interrption-vectors-in-pic18f"
]
},
{
"id": "esm31c2OS4Y",
"n": 36,
"t": "Interrupcion serial",
"d": "Muestra como utilizar la interrupción de recepción serial para controlar leds motores , y en conjunto con otras interrupciones.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3799-basic-serial-interrrupt-in-pic-18f"
]
},
{
"id": "mRkNAYEiJYs",
"n": 37,
"t": "Interrupción serial leer GPS",
"d": "Muetra como leer una trama serial que contenga inicio y final, ejemplo con una alarma de ubicación por GPS).",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3800-using-serial-interrupt-to-read-gps-coordinates"
]
},
{
"id": "vBbMyVyNGWw",
"n": 38,
"t": "Interrupción CCP, lectura de múltiples frecuencias",
"d": "Muestra como usar eficientemente el modulo de comparación y captura para leer múltiples frecuencia. Aquí el vídeo de como leer una sola frecuencia por interrupción.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3865-multiple-frequency-reading-with-the-ccp-module"
]
},
{
"id": "kXmOIOi1sZA",
"n": 39,
"t": "Recepción ordenes Nextion con Interrupciones",
"d": "Muestra una forma de como obtener, datos, numéricos, texto, y ordenes desde la pantalla HMI Nextion.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4099-reading-numerical-data-text-and-commands-from-the-nextion-tf"
]
},
{
"id": "csjFmSJkSBk",
"n": 39,
"t": "Recepción ordenes Nextion con Interrupciones",
"d": "Muestra una forma de como obtener, datos, numéricos, texto, y ordenes desde la pantalla HMI Nextion.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4099-reading-numerical-data-text-and-commands-from-the-nextion-tf"
]
},
{
"id": "CVQEfpozA-4",
"n": null,
"t": "Usar un control USB con Labview y Xbee, para manejar remotamente un buque a escala. Parte 3.1 PIC18",
"d": "Muestra como armar la trama para posterior mente ser enviada inalámbricamente al micro pic18f.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4190-control-a-joystick-with-labview-and-pic18f"
]
},
{
"id": "vwTd0uu6U0E",
"n": 40,
"t": "Protocolo I2C",
"d": "Explica que es el protocolo I2c; como se maneja en mikroc, y enseña como crear una librería propia más robusta para manejar el protocolo.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4317-i2c-library-by-harwdare-non-blocking"
]
},
{
"id": "2FIGNS14TzY",
"n": null,
"t": "Solución cuando el display 7 segmento de MikroC no funciona",
"d": "Muestra como usar un porgrama extra para poder solucinar el problea o conflñicto que en algunos pc sale cuando mikroc abre la palicacion de 7 segmentos.",
"c": [
"https://drive.google.com/drive/folders/1wrfjkE4LovN4uvgD72u2uhpK26c7hqpc?usp=share_link"
]
},
{
"id": "5KilWy0ryDA",
"n": 41,
"t": "UART IDLE line detect",
"d": "Muestra una técnica para detectar por interrupcion tramas seriales sin importar el tamaño basado en la duración de cada byte del protocolo uart. usando el desboirde de un timer.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4912-uart-idle-line-detect-on-pic-and-mikroc"
]
},
{
"id": "KeUS7tLgaZY",
"n": 42,
"t": "Librerias usando indentificadores #ifdef, #else,#endif",
"d": "Muestra como medir distancia con un TF mini lidar usando identificadores ( #ifdef, #else,#endi) en la libreria.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4975-measure-distance-with-tf-mini-lidar-and-mikroc"
]
},
{
"id": "aMOxtDKU2Lo",
"n": 43,
"t": "Usar remapeo para obtener 2 puertos serial por hardware",
"d": "Muestra como remapear un puerto serial y tener dos puertos serial por hardware.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4995-using-remapping-pins-to-get-2-multiplexed-hardware-serial-po"
]
},
{
"id": "J_eiLAm9j4M",
"n": null,
"t": "Modulo HLK-RM04 parte4 IoT con Ubidots",
"d": "Muestra como configurar el modulo HLK-RM04, para comunicarse con ubiudots y un microcontrolador PIC en MIKROC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5005-hlk-rm04-ubidot-iot"
]
},
{
"id": "atS84Jrvfpo",
"n": 44,
"t": "Debbuger en mikroc",
"d": "Este video como hacer debbuger en mikroc y la diferencias en #define y variables.",
"c": []
},
{
"id": "jXDNjl7Z7wg",
"n": 45,
"t": "Aplicación real del remapeo y protecciones comunicacion RS485",
"d": "Basado en el video anterior, muestro ya una aplicación real que hice del uso de remapeo serial, asociado a una red RS485 y las protecciones necesarias.",
"c": []
},
{
"id": "ptqg85iDqdg",
"n": null,
"t": "Como leer el true RMS( valor RMS real) de cualquier señal, con PIC y MikroC",
"d": "Muestra como mejorar la lectura del valor RMS de un vido anterior del canal Ahora utulizando la formula del valor verdadero de RMS (TRUE RMS).",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5153-how-read-the-true-rms-with-pic-mikroc-version"
]
},
{
"id": "aQHwoJuiICI",
"n": null,
"t": "Conceptos basicos de digitales para iniciar con los sitemas embebidos parte 1",
"d": "Miuestra los conceptos, de bit, byte, sistemas numericos bibarios, decimal, Hexadecimal, necesarios para inicar en el mundo de los sistemas embebidos.",
"c": []
},
{
"id": "EDVUga7G7Bw",
"n": null,
"t": "Conceptos basicos de digitales para iniciar con los sitemas embebidos parte 2",
"d": "Muestra conceptos basicos de memorias RAM, ROM, y diferencias entre Microcontrolador y Microprocesador.",
"c": []
},
{
"id": "Gzo7v3xe8zE",
"n": null,
"t": "Operadores logicos y su aplicaciones en C++ , orientado a los sistemas embebdidos",
"d": "Muestra cuales son los operadores logicos, sus simnbolos en c y c++, y sus aplicaciones en la programación.",
"c": []
},
{
"id": "gQYY58GrftE",
"n": null,
"t": "Conceptos basicos de microcontroladores, compilador, programador, firmware,bootloader, debugger,etc",
"d": "Enseña los conceptos básicos relacionado a los microcontrolaodres y su programación.",
"c": []
},
{
"id": "BLhBBmv46FI",
"n": null,
"t": "Final competencia seguidor de linea velocista",
"d": "",
"c": []
}
]
},
"pic-mikroc-proyectos": {
"titulo": "Proyectos con MikroC",
"desc": "Proyectos completos con PIC y MikroC: IoT con ESP8266 y Ubidots, GPS, RFID, PID, lógica difusa, USB HID, robots seguidores de línea, LabVIEW y mucho más.",
"lista": "PLp8IkbtcjNXyg9MXXSa0jxRYtILgxB9jC",
"videos": [
{
"id": "zoozToj7avY",
"n": null,
"t": "LabVIEW comunicacion full duplex con microcontroladores PIC ( MikroC ) o Arduino",
"d": "Muestra como mandar y recibir al tiempo comandos seriales desde labview aqui el video del programa en PIC (Con Mikroc ) y Arduino.",
"c": []
},
{
"id": "I2zYvOchwv4",
"n": null,
"t": "Recepcion de ordenes seriales con micros, en mikroc for PIC O con Arduino",
"d": "Muestra como recibir ordenes seriales con micros, tanto arduino como PIC, mostrando la ventaja de usar el estandar de lenguaje C.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2429-simple-receipt-of-serial-data-pic-and-arduino"
]
},
{
"id": "Osg5r5_t7IY",
"n": null,
"t": "Recepcion serial con interrupcion en Arduino y PIC",
"d": "Complementa el anterior video , mostrando la forma de recibir ordenes serial pero con interrpciones, lo que permite realizar más tareas a la vez.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2430-simple-receipt-of-serial-data-pic-and-arduino-with-interrupt"
]
},
{
"id": "a9GovfdeyLs",
"n": null,
"t": "Transmision y recepcion serial full duplex en PIC (MikroC )y Arduino",
"d": "Muestra como poder recibir datos con Interrupcion y enviar a la vez desde un pic ( Mikroc ) y desde Arduino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2431-send-and-receive-serial-data-full-duplex-pic-and-arduino"
]
},
{
"id": "UWzuLRw1Yj0",
"n": null,
"t": "Comunicacion full duplex mas interrupcion timers PIC o Arduino",
"d": "Muestra como además de la comunicación full duplex se pueden ejecutar procesos extras con la interrupcion del timer 1, tanto para PIC como Arduino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2435-comunicacion-serial-full-duplex-and-timer-interrut-process"
]
},
{
"id": "XtE98FR9Tmo",
"n": null,
"t": "Lectura de multiples sensores ultrasonicos, PIC ( MikroC ) o Arduino",
"d": "Muestra el uso de timers en pic y Arduino, para medir anchode pulso de manera precisa. en Mikroc ejemplo con sensores ultrasonicos sfr04. codigos aqui.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2441-arduino-multiple-ultrasonic-sensor-sfr04",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2438-pic-multiple-ultrasonic-sensor-sfr04"
]
},
{
"id": "2Cz3NnE00_o",
"n": null,
"t": "Dimmer control de energia carga AC PIC ( con MikroC ) o Arduino",
"d": "Con mikroc para pic Aclaro el timer del pic esta con preescalador de 256 no de 32 como menciono en el video. después lo edito con mas calma.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2453-ac-power-control-zero-crossing-detection-ac-dimming",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2454-arduino-ac-power-control-zero-crossing-detection-ac-dimming"
]
},
{
"id": "ZceQSbxVW8M",
"n": null,
"t": "ENC28J60 Mini Servidor WEB PIC O Arduino",
"d": "Muestra la forma de crear una pequeña pagina WEB tanto en PIC como en Arduino. Driver para que proegtus acpete el modulo enc28j60.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2460-basic-web-server-pic",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2461-basic-web-server-arduino"
]
},
{
"id": "oV86tr6ubkE",
"n": null,
"t": "Control por bluetooth PIC ( MikroC ) o Arduino",
"d": "Modifico el programa de comuniación serial full duplex controlado con el celular y la aplicacion en Adroid bluetotth elecronics. con Mikroc en PIC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2463-celular-bluetooth-control-pic-and-arduino"
]
},
{
"id": "qYhTd31SNwI",
"n": null,
"t": "Control wifi con el ESP8266, con el celular o LabVIEW, en PIC ( MikroC ) o en Arduino",
"d": "Se crea una red wifi y un servidor con el cual se puede conectar un pc o un celular y controlar un motor y unas luces . Tanto en PIC (con Mikroc )como en Arduino al canal.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2465-pic-esp8266-wifi-server-control-whit-android-or-labview",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2466-arduino-esp8266-wifi-server-control-whit-android-or-labview"
]
},
{
"id": "IF7PctWlLGg",
"n": null,
"t": "Funcion millis en PIC con MikroC",
"d": "Muestra como hacer una funcion millis similar a la de arduino para ser usada en pics con Mikroc.",
"c": []
},
{
"id": "oANKsMW4eEI",
"n": null,
"t": "Manejo de hasta 8 servos motores con mikroc pro for pic",
"d": "Muestra como usar librerias propia de servos para manejar hasta 8 servos ,con PICS 12F,16F,18F con Mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2492-manager-until-8-servos-with-pic12f-16f-and-18f"
]
},
{
"id": "k0DTXK43g6w",
"n": null,
"t": "Multiples interrupciones en y PIC MikroC, control carga AC, cruce por cero, disparo triac",
"d": "Muestra como mediante comunicación full duplex e interrupciones controla el cruce por cero y el disparo de una carga AC usando Mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2499-handling-multiple-interruptions-for-full-duplex-communicatio",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2500-arduino-handling-multiple-interruptions-for-full-duplex-comm"
]
},
{
"id": "6c5nL2tcCs0",
"n": null,
"t": "Métodos de lectura de un encoder de cuadratura en PIC con Mikroc",
"d": "Explica la forma de tres métodos para leer un encoder de cuadratura, con Mikroc video mejorado modo 4x: Código Modo 4x.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2506-reading-a-quadrature-encoder-without-interruption",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2507-reading-a-quadrature-encoder-with-timer-interruption",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2508-reading-a-quadrature-encoder-with-edge-interruption",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4443-quadrature-encoder-4x-mode"
]
},
{
"id": "G0Hv7S9KyLQ",
"n": null,
"t": "Control de posicion con PID de un motor DC con encoder de cuadratura con MikroC",
"d": "Muestra como controlar la posición de un motor dc, usando un PID y un encoder de cuadratura. con Mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/1824-pid-position-control-with-quadrature-encoder"
]
},
{
"id": "NvYAlp3d0XE",
"n": null,
"t": "Internet de las cosas con Ubidots y PIC con MikroC",
"d": "Muestra como monitorear variable analoga y digital remotamente en la nube con Ubidots. con Mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2514-iot-application-with-pic-and-ubidots"
]
},
{
"id": "ZhE3z-Py8fw",
"n": null,
"t": "ESP8266 monitoreo y control con Ubidots PIC y MikroC",
"d": "Muestra como monitorear y controlar con el esp8266 en ubidots con pic y mikroc. ademas de recibir un correo si hay una alarma.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2518-esp8266-full-control-iot-application-with-pic-and-ubidots"
]
},
{
"id": "lAvNNCeBk0U",
"n": null,
"t": "Manejo de una pantalla GLCD con PIC ( MikroC) y con visual GLCD",
"d": "Muestra como manejar una pantalla glcd de manera facil con mikroc pro for pic y visual glcd.",
"c": []
},
{
"id": "dyJQsEtPMRw",
"n": null,
"t": "Alarma de posicion con GPS y MikroC",
"d": "Muestra como leer un GPS y dar una alerta por ubicación usando Mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2524-read-gps-and-alert-position"
]
},
{
"id": "1JhMrIEoKik",
"n": null,
"t": "4*4 keypad teclado matricial, lectura de múltiples teclas con MikroC",
"d": "Lectura de multiples tecla con teclado matricial.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2536-how-to-capture-multiple-keys-on-a-4-4-matrix-keypad"
]
},
{
"id": "pc_wWSc9YeU",
"n": null,
"t": "Control motor paso a paso con LabVIEW y MikroC",
"d": "Muestra como manejar dos motores paso a paso, mediante Labview dándole ordenes seriales al micro, realizado en mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2541-stepper-motor-control-with-labiew"
]
},
{
"id": "MDnKXyG4jHc",
"n": null,
"t": "DATALOGGER de temperatura con mikroc y ds18b20 el ds1307",
"d": "Muestra como almacenar en una microsd daos de temperatura. habla de los principios del protocolo onewire, i2c y spi. imagen sd.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2545-temperature-data-recorder-whith-mikroc-using-microsd-memory",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-pic-xc8-datalogger-ds1307"
]
},
{
"id": "9TBZKIv4XXQ",
"n": null,
"t": "Creacion de un puerto com por USB PIC 18f2550 y MikroC",
"d": "Muestra como crear un puerto com , o un USB CDC device usando un microcontrolaodr pic con USB hay dos .rar el de 140K es actualizado a 2019.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2610-basic-usb-cdc-in-pic-18f-with-usb-port"
]
},
{
"id": "ezllZGu8duI",
"n": null,
"t": "Labview lectura por USB-HID, mikroc HID",
"d": "Muestra como usar labview para leer datos por usb usando el modo HID, sin drivers.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2619-labview-daq-read-mikroc-hid-write"
]
},
{
"id": "LutUbhv0ul8",
"n": null,
"t": "Labview, enviar datos via USB HID a mikroc con pic 18f2550",
"d": "Muestra como leer datos via USB-HID desde mikroc , enviados desde labview.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2620-labview-daq-write-mikroc-hid-read"
]
},
{
"id": "e2n5tIIdF9c",
"n": null,
"t": "Diseño de una tarjeta entrenadora básica con el pic 18f2550",
"d": "Muestra esquemas de una tarjeta entrenadora para programar por usb, usando el pic 18f2550.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2627-basic-development-board-with-pic-18f2550"
]
},
{
"id": "NMEPg8ohzbk",
"n": null,
"t": "PID discreto con MikroC, sintonización PID Matlab",
"d": "Muestra como como tomar datos de un sistema con labview, identificarlo con matlab, diseñar el PID en Matlab e implementarlo en mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2645-identification-of-models-and-pid-tuning-with-matlab-labview-"
]
},
{
"id": "q0Q4whGLIVs",
"n": null,
"t": "Implementación de un control difuso con mikroc en un pic 18f",
"d": "Muestra como usar Xfuzzy para implementar un controlador fuzzy, en un pic18f en mikroc. Logica difusa, o fuzzy logic mikroc en microcontrolaodre pic.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2651-implementation-of-a-temperature-fuzzy-logic-control-in-pic18"
]
},
{
"id": "LRiqppeqUO4",
"n": null,
"t": "Generador de onda seno pura a 60hz por PWM",
"d": "Muestra como usar el modulo PWM para generar una señal de seno de 60HZ , que se puede usar para generador de señales o inversores de dc a AC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2697-60hz-pure-sine-wave-with-pwm-module-for-dc-to-ac-inverter"
]
},
{
"id": "EqzTapbVg4o",
"n": null,
"t": "Usando Arduino como programador de PICS versión 1.0",
"d": "Se muestra para aquellos que ya tienen la plataforma y quiera empezar a programar PICS, un proyecto que permite que uses el compilador que desees para programar tu pic, pero uses el…",
"c": [
"https://github.com/alcidesramos/PROGRAMADOR_PIC_CON_ARDUINO_ARZ",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2745-using-arduino-to-programmer-pics-microcontroller"
]
},
{
"id": "dFQ-Hvhh_-c",
"n": null,
"t": "Lectura de sensores Ópticos reflectivos de forma digital",
"d": "Muetsra técnica para leer varios sensores tipo cny7 o cualquier otro sensores óptico reflectivo usando timer en pic y arduino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2759-read-various-reflective-optical-sensors-type-cny70"
]
},
{
"id": "lBFj261LQBk",
"n": null,
"t": "Manejo de pantalla OLED SSD1306 con MikroC y PIC",
"d": "Muestra como manejar la Pantalla SSD1306 poR i2c ya sea por hardware o software.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2767-handling-the-oled-screen-sd1306-with-mikroc-by-i2c-software-"
]
},
{
"id": "aSWNcQW8uuU",
"n": null,
"t": "Medicion de frecuencia con interrupciones (int y CCP) en PIC",
"d": "Muestra dos forma de medir frecuencias con miKroc y microcontroladores PIC. una usando la interurpción por flanco. Y otra el modulo de comparación y captura CCP.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2915-two-ways-to-read-frequency-with-pic-interruption"
]
},
{
"id": "agmclZB7bpk",
"n": null,
"t": "Puerto serial por software para PIC (MikroC, XC8, CCS)",
"d": "Muestra la forma de usar puerto serial pro software en PIC. en CCS, Mroc y XC8 sin MMC. para micros de poca memoria y sin puerto serial. aplicable para cualquier micro y varias velocidades.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2917-pic-software-uart-mikroc-ccs-and-mplab-xc8-for-microcontroll"
]
},
{
"id": "Nkczwg543r4",
"n": null,
"t": "El uso de lat y no port para salidas de PIC18F y los nuevos 16f",
"d": "Muestra cuando usar LAT y cuando PORT y el porque en los micros 18f y los nuevos 16f.",
"c": []
},
{
"id": "in32yGZ5YGM",
"n": null,
"t": "Consideraciones con el pin ra4 en algunos PIC16F",
"d": "Enseña que algunos PIC 16f antiguos necesitan una resistencia PULLUP en el pin RA4 cuando se usa como salida, sino este pin no funciona.",
"c": []
},
{
"id": "GIXf9iQn5lM",
"n": null,
"t": "Control de velocidad de un motor DC, clase de control on-off PID, con microcontrolador PIC y MikroC",
"d": "Muestra como hacer un control de velocidad con pic, usando diferentes técnica. el control esta en revoluciones por segundo, si se quieren tener RPM solo es escalar multiplicando la…",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2920-three-ways-to-control-the-speed-in-a-dc-motor-and-a-microcon"
]
},
{
"id": "wZMCQB1k5MI",
"n": null,
"t": "Decodificador automático de códigos IR (infrarojos) metodo hash",
"d": "Es una continuación del video: y muestra como detectar automáticamente con ahorro de memoria y forma óptima códigos infrarrojos.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2932-pic-ir-code-decoder-has-method"
]
},
{
"id": "M_LPm0dNUXI",
"n": null,
"t": "Clase completa de detección de cualquier código infrarojo (IR) con PIC y MikroC",
"d": "Describe tod el proceso de como usar la interponer externa para detectar códigos infrarojos con PIC y mikroc, y usarlos para controlar cualquier otro dispositivo.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2931-pic-ir-code-decoder"
]
},
{
"id": "ZhL2ayYHSQE",
"n": null,
"t": "Despues de esto, los Hombres de Negro Vendran por mi !!! / The Men in Black will come for me!",
"d": "Pagina de JLCPCB : 5 Prototypes PCBs for Only $2 Video de fisica con un poco de magia si se quiere....muy buen efecto visual y no muy facil de descubrir. ENLACES Experimentos con…",
"c": []
},
{
"id": "KTOdbzodLYA",
"n": null,
"t": "Lector de tarjetas o tag RFID con PIC y MikroC, metoto hash ( con el RC522)",
"d": "Muestra como usar el método has para leer códigos RFID de tarjeta de con el lector RC522 y utilizando el método HASH.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2935-rc522-rfid-card-reader"
]
},
{
"id": "Xz9o_lKAB44",
"n": null,
"t": "Tips para adquisición serial a alta velocidad en windows",
"d": "Muestra como disminuir la latencia, en la adquisición de datos de alta velocidad en windows.",
"c": []
},
{
"id": "EgjW-q1Wi78",
"n": null,
"t": "Comunicacion full duplex PIC y myopenlab",
"d": "Muestra como comunicar myopenlab con mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2952-serial-full-duplex-communication-with-myopenlab"
]
},
{
"id": "g4Mqph1mP84",
"n": null,
"t": "Comparando CCS, mikro y XC8 en recursos",
"d": "Sto es un reto del amigo MARIANO ROCHA (del grupo de face programando PICs primer nivel), que quise cumplir pero de forma ilustrativa. Muestra de manera informativa, y sin tratar de…",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2968-analyzing-three-pic-compilers-using-a-loop"
]
},
{
"id": "mARQqOvUyWs",
"n": null,
"t": "Desempacando la tarjeta Easypic V8 de MIKROE",
"d": "Muestra las características de la nueva tarjeta y un programa de hola mundo, con la tarjeta easypic v8 de MIKROE.",
"c": []
},
{
"id": "cfNY4Pfp6GE",
"n": null,
"t": "Ubidots internet de las cosas con SIM800 parte 3 (recibiendo datos Ubidots)",
"d": "Muestra como mandar y recibir datos de Ubidot con SIM800 usando mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3009-full-transmission-and-reception-to-ubidots-using-sim800"
]
},
{
"id": "LEx2WTSTHbo",
"n": null,
"t": "Ubidots internet de las cosas con SIM800 parte 2 (envio de datos de GPS)",
"d": "Muestra como leer un GPS por softawre y mandarlo a Ubidots usando el modulo SIM800.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3008-read-gps-and-send-via-gprs-to-ubidots-with-sim800-module"
]
},
{
"id": "Cgj49ardWgM",
"n": null,
"t": "Ubidots internet de las cosas con SIM800 parte 1 (envio de datos a Ubidots)",
"d": "Muestra como configurar el sim800 con mikroc y enviar datos básicos Ubidot, usando internet de las cosas.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3007-using-sim800-in-gprs-mode-to-send-data-to-ubidots"
]
},
{
"id": "XiDP4YNlNOQ",
"n": null,
"t": "Internet de las cosas, ESP8266 y Ubidots (monitoreo y control) version con GPS",
"d": "Este video es una adaptacion de los 3 videos de GPRS con el sim800 y ubidot al modulo ESP8266, se recomienda ver esos 3 video anets para enterder mejor este. vidios GPRS.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3021-iot-application-with-esp8266-and-ubidot"
]
},
{
"id": "wK0VOHq5MfE",
"n": null,
"t": "Manejo de un aceptador de billete NV10 USB con MikroC y PIC",
"d": "Muestra como leer los billetes de un aceptador de billetes NV10, usando interrupciones y dejando el programa principal disponible para procesar otros datos.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3267-working-with-the-money-acceptor-nv10"
]
},
{
"id": "7851BF3HuLo",
"n": null,
"t": "Como utilizar el modulo sleep en un microcontrolador en MIKROC",
"d": "Muestra como usar el modulo sleep en un microcontrolador y mikroc. despertando por interrupcion serial o por flanco de bajada.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3277-how-sleep-mode-works-in-pics-mikroc-version"
]
},
{
"id": "5TssW52j7_s",
"n": null,
"t": "Tips para usar el watchdog timer en microcontroladores pics",
"d": "Muestra para que sirve el uso del watchdog timer en los microcontroladores pics.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3292-pic-tips-for-watchdog-timer"
]
},
{
"id": "SiCzR16j44w",
"n": null,
"t": "Manejo de la memoria EEPROM de datos en PIC y MikroC",
"d": "Muetsra como almacenar y leer todo tipos de datos, y cadenas de textos en la memoria eeprom del PIC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3294-how-read-and-write-in-eeprom-memory-pic"
]
},
{
"id": "cRz0mZbtmXo",
"n": null,
"t": "Multiplexación display siete segmentos usando interrupciones",
"d": "Muestra en tiempo real multiplexar un display siete segmento sin carga computacional en el programa principal.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3312-seven-segment-multiplexation-with-interrupt"
]
},
{
"id": "bsJlusrdRnU",
"n": null,
"t": "Como usar el módulo de Modulación de Señales Digital (DSM) en los PIC modernos y con MIKROC",
"d": "Muestra como utilizar la modulación ASK, FSK y PSK en un microcontrolador PIC usando el modulo DSM.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3496-how-use-the-new-data-signal-modulation-module-in-pic-mikroc-"
]
},
{
"id": "cQHck9-uhMs",
"n": null,
"t": "Dado electronico doble y simple con PIC y MikroC",
"d": "Proyecto de un dado con pic.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3696-double-and-simple-electronic-die"
]
},
{
"id": "9eL6wkd1Jws",
"n": null,
"t": "Tips para la sincronizacion de datos entre LabVIEW y un micro comunicacon serial full duplex",
"d": "Muestra como mejorar la cominucación entre labview y un pic. Aquí la primera versión donde se explica mas detallado el código.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3719-tips-to-improve-the-synchronization-between-labview-and-a-pi"
]
},
{
"id": "YowPTb2zvR0",
"n": null,
"t": "Emular teclado USB (HID) con PIC y MikroC",
"d": "Muestra como emular en USB mediante HID un teclado usando mikroc y un pic18f2550 Video de diseño de la tarjeta.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3741-emulate-a-hid-usb-keyboard-with-pic"
]
},
{
"id": "hYOcU9um390",
"n": null,
"t": "Proyecto wifi con ESP8266 con aplicación virtuino y microcontrolador PIC ( parte 1)",
"d": "Primera parte de utilizar la aplicación virtuino con el esp8266 y un Microcontrolador PIC.",
"c": []
},
{
"id": "X1BTHDG2UUE",
"n": null,
"t": "Proyecto wifi con ESP8266 con aplicación virtuino y microcontrolador PIC ( parte 2)",
"d": "Segunda parte de utilizar la aplicación virtuino con el ESP8266 y un Microcontrolador PIC. código del micro, como decodificar la trama.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3787-how-to-use-the-virtuino-app-with-an-esp8266-a-pic18f-and-mik"
]
},
{
"id": "XiXiKZC5KaM",
"n": null,
"t": "Utilizar el Embedded C code de Matlab, Para crear funciones en C para Microcontroladores",
"d": "Muestra como convertir una funciones de Simulink, o Matlab a lenguaje C o C++ para ser usadas en cualquier Microcontrolador.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3833-how-use-the-matlab-embedded-code-and-mikroc"
]
},
{
"id": "vBbMyVyNGWw",
"n": 38,
"t": "Interrupción CCP, lectura de múltiples frecuencias",
"d": "Muestra como usar eficientemente el modulo de comparación y captura para leer múltiples frecuencia. Aquí el vídeo de como leer una sola frecuencia por interrupción.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3865-multiple-frequency-reading-with-the-ccp-module"
]
},
{
"id": "AZFGwpU6uuw",
"n": null,
"t": "Lectura de termocupla tipo k MAX6675 en MikroC y XC8",
"d": "Muestra como leer na termocupla tipo K con el chip max6675, version en Mikroc y mplab xc8.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3866-read-type-k-thermocouple-with-max6675-in-mikroc",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3867-read-type-k-thermocouple-with-max6675-in-mplab-xc8"
]
},
{
"id": "_QL29xCtum8",
"n": null,
"t": "TIPS, para programar nuevos PIC, con el PICKIT2 y el PICKIT3. Actualización firmware PICKIT3",
"d": "Muetra como mofificar el archivo PK2DeviceFile.dat, para poder programar micros mas modernos en pickit2 y pickt3, asi de como activar el modo MPLAB en pickit3 para poder actualizar…",
"c": [
"https://www.microchip.com/forums/download.axd?file=2;749887",
"https://sites.google.com/site/pk2devicefileeditor/home/files"
]
},
{
"id": "vVGuH4-xXF0",
"n": null,
"t": "TIPS, para programar nuevos PIC, con el PICKIT2 y el PICKIT3. Actualización firmware PICKIT3",
"d": "Muestra como modificar el archivo PK2DeviceFile.dat, para poder programar micros mas modernos en pickit2 y pickt3, así de como activar el modo MPLAB en pickit3 para poder actualizar…",
"c": [
"https://www.microchip.com/forums/download.axd?file=2;749887",
"https://sites.google.com/site/pk2devicefileeditor/home/files"
]
},
{
"id": "PwZoVnuykaQ",
"n": null,
"t": "Usar un control USB con Labview y Xbee, para manejar remotamente un buque a escala. Parte 1",
"d": "Muestra como configurar y decodificar los botones de un control USB para ser usado en labvuew y posteriormente mandar esa información en forma remota.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4112-control-a-joystick-with-labview"
]
},
{
"id": "7wKW4qd9fhk",
"n": null,
"t": "Usar un control USB con Labview y Xbee, para manejar remotamente un buque a escala. Parte 2",
"d": "Muestra como armar la trama para posterior mente ser enviada inalámbricamente al micro.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4112-control-a-joystick-with-labview"
]
},
{
"id": "_Olzzjva7fQ",
"n": null,
"t": "Manejo de 8 led con cambio de secuencia con 5 pines de un micro PIC",
"d": "Muestra como realizar efectos de luces con 8 led y solo 5 pines de un microcontrolador pic 12f.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4185-how-to-control-8-leds-with-5-pins-of-pic-12f"
]
},
{
"id": "RskpSM5nduw",
"n": null,
"t": "Manejo de 8 led con cambio de secuencia con 5 pines de un micro PIC",
"d": "Muestra como realizar efectos de luces con 8 led y solo 5 pines de un microcontrolador pic 12f.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4185-how-to-control-8-leds-with-5-pins-of-pic-12f"
]
},
{
"id": "H_2Kxf2Jjtk",
"n": null,
"t": "Usar un control USB con Labview y Xbee, para manejar remotamente un buque a escala. Parte 3",
"d": "Muestra como armar la trama para posterior mente ser enviada inalámbricamente al micro. CLASE DE PWM.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4112-control-a-joystick-with-labview"
]
},
{
"id": "CVQEfpozA-4",
"n": null,
"t": "Usar un control USB con Labview y Xbee, para manejar remotamente un buque a escala. Parte 3.1 PIC18",
"d": "Muestra como armar la trama para posterior mente ser enviada inalámbricamente al micro pic18f.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4190-control-a-joystick-with-labview-and-pic18f"
]
},
{
"id": "3PcUXzmq1Yg",
"n": null,
"t": "Introducción básica a fuentes conmutadas tipo buck. Control con microcontrolador",
"d": "Muestra el funcionamiento de una fuente conmutada tipo buck y el uso de un microcontrolador para su control.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4213-using-a-microcontroller-to-control-buck-type-switching-sourc"
]
},
{
"id": "4Qip3j4fVJ4",
"n": null,
"t": "Balanza con HX711 y microcontrolador PIC",
"d": "Muestra mis librerías para crear una balanza digital con microcontrolador pic y mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4221-digital-scale-with-hx711"
]
},
{
"id": "6pHEF444uEE",
"n": null,
"t": "Control del modulo dfplayer con microcontrolador PIC y MikroC",
"d": "Muestra mi librería para manejar el modulo dfplayer y reproducir mp3, con un pic.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4222-dfplayer-module-control-with-pic"
]
},
{
"id": "luy1GabQKeQ",
"n": null,
"t": "Control actuadores industrial por Modbus TCP , usando ESP8266 , con PIC y factory io. MikroC",
"d": "Muestra como controlar actuadores industriales usando el protocolo Modbus TCP, implementado en un pic y usando el modulo esp8266. simulado en factory IO.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4249-implementation-of-the-modbus-protocol-in-pic-using-the-esp82"
]
},
{
"id": "WQCDpuFA-0I",
"n": null,
"t": "Simulacion de robot seguidor de linea y evasor de obstaculos con Proteus parte 1",
"d": "Muestra el principio de como utilizar los robots de proteus para su posterior programación como seguidor de linea o evasión de obstáculos. Video de como leer los sensores reflectivos.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4307-proteus-robot-simulation-using-mikroc-line-follower-and-obst"
]
},
{
"id": "cuJeucqpRBA",
"n": null,
"t": "Simulacion de robot seguidor de linea y evasor de obstaculos con Proteus parte 2",
"d": "Muestra el principio de como utilizar los robots de proteus para su posterior programación como seguidor de linea o evasión de obstáculos. Video de como leer los sensores reflectivos.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4307-proteus-robot-simulation-using-mikroc-line-follower-and-obst"
]
},
{
"id": "F9aebNwea7U",
"n": null,
"t": "Robot seguidor de linea en Proteus, sencillo parte1",
"d": "Muestra el primer acercamiento de como realizar un robot seguidor de linea con proteus y mikroc pro for pic.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4312-basic-principles-of-a-simple-line-follower-robot"
]
},
{
"id": "16OPyWaNVcI",
"n": null,
"t": "Robot seguidor de linea en Proteus, sencillo parte2",
"d": "Muestra el primer acercamiento de como realizar un robot seguidor de linea con proteus y mikroc pro for pic usando un algoritmo sencillo de control.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4313-basic-principles-of-a-simple-line-follower-robot-part-2"
]
},
{
"id": "lh59JF_3q6I",
"n": null,
"t": "Evasor de obstaculos basico en Proteus con PIC y MikroC parte 1",
"d": "Muestra la forma sencilla de utilizar el robot de evasión de obstáculos de proteus, y programarlo en mirkoc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4429-simple-obstacle-evasor-with-mikro-and-proteus"
]
},
{
"id": "6eBP-g0A6iA",
"n": null,
"t": "Evasor de obstaculos mejorado en Proteus con PIC y MikroC parte 2",
"d": "Muestra un algoritmo mpás avanzado para utilizar el robot de evasión de obstáculos de proteus, y programarlo en mirkoc. de tal forma que inicie a la izquierda y salga del lado derecho de…",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4430-advanced-obstacle-avoidance-with-proteus-and-mikroc"
]
},
{
"id": "-mIl-ImOoXI",
"n": null,
"t": "Control de robot seguidor de linea velocista parte 1 (lectura de sensores digitales)",
"d": "Muestra, como leer los sensores de un seguidor de linea, que tiene sensores reflectivos configurarlos de forma digital y pasarlos o normalizarlos a ceros y uno.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4434-speed-line-follower-robot-sensor-reading-normalization"
]
},
{
"id": "aHBGIq-UNtk",
"n": null,
"t": "Control de robot seguidor de linea velocista parte 2(generacion de pesos)",
"d": "Muestra como generar un sistema que permite saber que tan alejado está el robot de la línea, utilizando un sistema de pesos.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4435-generation-of-weights-which-indicate-how-far-a-line-follower"
]
},
{
"id": "N7IrttxVPIk",
"n": null,
"t": "Control de robot seguidor de linea velocista parte 3 (modo proporcional",
"d": "Muestra un algoritmo básico proporcional para un seguidor de linea velocista.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4436-fast-line-follower-full-proportional-mode"
]
},
{
"id": "FJlNdw5wmGI",
"n": null,
"t": "CLASE EN VIVO DE MICRO AVANZADA, Manejo de encoder de cuadratura, en 1X 2X y 4X, con PIC y Microc",
"d": "Muestra como manear un encoder de cuadratura a máxima velocidad en 4X.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4443-quadrature-encoder-4x-mode"
]
},
{
"id": "-0_uzhs-QGc",
"n": null,
"t": "Control de robot seguidor de linea velocista parte 4 (modo PID)",
"d": "Muestra como implementar y sintonizar empíricamente un controlador PID para un robot seguidor de linea.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4449-fast-line-follower-full-pid-mode"
]
},
{
"id": "qEonvG5vuAw",
"n": null,
"t": "Control de robot seguidor de linea velocista parte 5 (modo PID + velocidad en linea recta)",
"d": "Muestra como implementar y sintonizar empíricamente un controlador PID para un robot seguidor de linea, además de un algoritmo para sacar máximo provecho en las líneas rectas.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4468-fast-line-follower-full-pid-mode-and-maximum-speed-in-straig"
]
},
{
"id": "WP4LAV5RVnM",
"n": null,
"t": "Efectos de Juegos de luces con múltiples leds, en microcontroladores PIC y Mikroc",
"d": "Muestra algoritmos, que optimizan memoria y permiten controlar mas de 16 leds con juegos efectos de luces interesantes, con control de velocidad y de los efectos.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4502-effects-of-light-sets-with-multiple-leds-in-pic-microcontrol"
]
},
{
"id": "zDPywv6W_uo",
"n": null,
"t": "Manejo del modulo MP3 YX5300 con MikroC pro for PIC",
"d": "Muestra como controlar el módulo MP3 YX5300 con pic y mikroc. este módulo es bastante económico.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4564-using-the-yx5300-mp3module"
]
},
{
"id": "h_4Kq9-968c",
"n": null,
"t": "Lectura de voltaje AC con microntroladores PIC",
"d": "Muestra las técnica para leer de forma eficiente y segura un voltaje de la linea AC con un microcontrolador PIC. Mostrando el voltaje RMS.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4659-read-rms-voltage-from-ac-line"
]
},
{
"id": "QQ9a0iKAZ58",
"n": null,
"t": "Como leer señales de +-10V de UN PLC con un microcontrolador",
"d": "Muetsra la forma de como leer señales de rango positivo y negativo con un POIC y mikroc, pueden ser señales de un PLC, ETC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4662-how-to-read-10v-signals-from-a-plc-with-a-microcontroller"
]
},
{
"id": "x5MjKUfiiK4",
"n": null,
"t": "Leyendo temperaturas positivas y negativas con un sensor LM35",
"d": "Muestra como leer temperaturas positivas y negativas con un sensor LM35, mikroc y y microocntolador PIC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4694-how-to-read-positive-and-negative-temperatures-with-an-lm35"
]
},
{
"id": "Aa-DucNGQZk",
"n": null,
"t": "Personalizar letras o fuentes en pantalla OLED (SSD1306) y dezplazamiento de caracteres",
"d": "Librerias mejoradas para pantallas OLED SSD1306, por I2C. Personalización de fuentes o letras, usando el GLCD FONT CREATOR. desplazamiento de texto.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4722-oled-ssd1306-by-i2c-create-own-fonts-using-the-glcd-font-cre"
]
},
{
"id": "nUyDt6tkOqI",
"n": null,
"t": "Desarrollo de un driver para control de valvula proporcional, con micro y usando ingeneiria inversa",
"d": "",
"c": []
},
{
"id": "2FIGNS14TzY",
"n": null,
"t": "Solución cuando el display 7 segmento de MikroC no funciona",
"d": "Muestra como usar un porgrama extra para poder solucinar el problea o conflñicto que en algunos pc sale cuando mikroc abre la palicacion de 7 segmentos.",
"c": [
"https://drive.google.com/drive/folders/1wrfjkE4LovN4uvgD72u2uhpK26c7hqpc?usp=share_link"
]
},
{
"id": "iaOm1-lOsMI",
"n": null,
"t": "Medicion de tiempos largos usando timer de 32 bits en micros de 16 bits",
"d": "Muestra como usar los timers en el DSPIC en forma de 32bits y medir tiempos largos.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4909-measurement-of-long-times-with-dspic"
]
},
{
"id": "5KilWy0ryDA",
"n": 41,
"t": "UART IDLE line detect",
"d": "Muestra una técnica para detectar por interrupcion tramas seriales sin importar el tamaño basado en la duración de cada byte del protocolo uart. usando el desboirde de un timer.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4912-uart-idle-line-detect-on-pic-and-mikroc"
]
},
{
"id": "PMSUpy6P0yk",
"n": null,
"t": "Decodificador automático de códigos IR (infrarojos) metodo hash simulacion en Proteus",
"d": "Muetsra la simulación en proteus de un control infrarojo. Video del explicación y montaje real. Códifo simulación.",
"c": []
},
{
"id": "GTIdBjsuohY",
"n": null,
"t": "Librerias para TF mini LIDAR en dsPIC 33f",
"d": "Muestra co mo pasar las liberrias de pic a DSPIC para manejar el tf mini lidar.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4977-tf-mini-lidar-library-for-dspic"
]
},
{
"id": "J_eiLAm9j4M",
"n": null,
"t": "Modulo HLK-RM04 parte4 IoT con Ubidots",
"d": "Muestra como configurar el modulo HLK-RM04, para comunicarse con ubiudots y un microcontrolador PIC en MIKROC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5005-hlk-rm04-ubidot-iot"
]
},
{
"id": "ptqg85iDqdg",
"n": null,
"t": "Como leer el true RMS( valor RMS real) de cualquier señal, con PIC y MikroC",
"d": "Muestra como mejorar la lectura del valor RMS de un vido anterior del canal Ahora utulizando la formula del valor verdadero de RMS (TRUE RMS).",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5153-how-read-the-true-rms-with-pic-mikroc-version"
]
}
]
},
"pic-xc8": {
"titulo": "Proyectos con MPLAB XC8",
"desc": "Los proyectos del canal portados a MPLAB XC8: sensores ultrasónicos, IoT, GPS, servos, motores paso a paso, SPI, PID, RFID y memoria flash.",
"lista": "PLp8IkbtcjNXyrcWKEytGnT7cixEViZUfN",
"videos": [
{
"id": "NPKM3wpBL2E",
"n": null,
"t": "Lectura de multiples sensores SFR04 XC8",
"d": "Muestra como leer múltiples sensores ultrasonicos usando los timer en xc8 y un pic12f1822. y acyulizado a un pic16f1824 Se actualiza a 16f1824 el 26 de julio de 2019 debido a que las…",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2447-multiple-ultrasonic-sensor-sfr04-pic-xc8-version"
]
},
{
"id": "cUj6RLzdsSQ",
"n": null,
"t": "Comunicación Full Duplex PIC - Labview mplax xc8",
"d": "Muestra como hacer una comunicación full duplex en xc8.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2449-full-duplex-communucation-xc8-version"
]
},
{
"id": "188LTnYOh_U",
"n": null,
"t": "Internet las cosas ESP8266 Ubidots con PIC y XC8",
"d": "Version mplab xc8 de monitores de variables en la nube con ubidots.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2517-iot-application-with-pic-xc8-and-ubidots"
]
},
{
"id": "xVbZPraWRug",
"n": null,
"t": "Alarma de posicion con GPS y PIC en MPLAB XC8",
"d": "Ver antes.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2528-mplab-xc8-version-read-gps-and-alert-position"
]
},
{
"id": "2Gr8FvwzZRw",
"n": null,
"t": "Manejo de 8 servos con MPLAB XC8",
"d": "Version de mi libreria para manejar varos servos con mplab xc8.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2532-library-for-8-servos-control-mplab-xc8-version"
]
},
{
"id": "Ob45u70DIGE",
"n": null,
"t": "Teclado keypad matricial 4*4 leer multiples teclas version XC8",
"d": "",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2537-how-to-capture-multiple-keys-on-a-4-4-matrix-keypad-xc8-vers"
]
},
{
"id": "3QmteyAhNMY",
"n": null,
"t": "Control motor paso a paso con LabVIEW y MPLAB XC8",
"d": "Muestra como manejar dos motores paso a paso, mediante Labview dándole ordenes seriales al micro, realizado en MPLAB XC8.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2544-mplab-xc8-version-stepper-motor-control-with-labiew"
]
},
{
"id": "8mubsAQdr94",
"n": null,
"t": "Version MPLAB XC8 datalogger de tempertura con DS1307 y DS18B20",
"d": "Almacena datos de temperatura y tiempo en una SD Versión MPlaB XC8. LINK E L IMAGEN SD.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-pic-xc8-datalogger-ds1307",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2551-temperature-data-recorder-with-mplab-xc8-using-microsd-memor"
]
},
{
"id": "-DfV0pcxzk8",
"n": null,
"t": "MPLAB XC8 generador de onda seno pura a 60hz por PWM",
"d": "VERSION EN MPLAB XC8 DE Muestra como usar el modulo PWM para generar una señal de seno de 60HZ , que se puede usar para generador de señales o inversores de dc a AC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2698-mplab-xc8-version-of-60hz-pure-sine-wave-with-pwm-module-for"
]
},
{
"id": "2ly0fza9c9A",
"n": null,
"t": "Principios del modulo SPI, manejo del DAC mcp4922 con MPLAB XC8",
"d": "Muestra principios del protocolo SPI, y su funcionalidad mediante el manejo del DAC mcp4922, usando mplab xc8.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2741-dac-mcp4922-with-mplab-xc8-an-pic-18f4550"
]
},
{
"id": "EqzTapbVg4o",
"n": null,
"t": "Usando Arduino como programador de PICS versión 1.0",
"d": "Se muestra para aquellos que ya tienen la plataforma y quiera empezar a programar PICS, un proyecto que permite que uses el compilador que desees para programar tu pic, pero uses el…",
"c": [
"https://github.com/alcidesramos/PROGRAMADOR_PIC_CON_ARDUINO_ARZ",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2745-using-arduino-to-programmer-pics-microcontroller"
]
},
{
"id": "Nkczwg543r4",
"n": null,
"t": "El uso de lat y no port para salidas de PIC18F y los nuevos 16f",
"d": "Muestra cuando usar LAT y cuando PORT y el porque en los micros 18f y los nuevos 16f.",
"c": []
},
{
"id": "agmclZB7bpk",
"n": null,
"t": "Puerto serial por software para PIC (MikroC, XC8, CCS)",
"d": "Muestra la forma de usar puerto serial pro software en PIC. en CCS, Mroc y XC8 sin MMC. para micros de poca memoria y sin puerto serial. aplicable para cualquier micro y varias velocidades.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2917-pic-software-uart-mikroc-ccs-and-mplab-xc8-for-microcontroll"
]
},
{
"id": "EBw3giRaSM8",
"n": null,
"t": "Control de velocidad ( PID ) de un motor DC con PIC y MPLAB XC8",
"d": "Muestra la versión en xc8 de la clase de controladores dictada con PIC y MIKROC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2921-speed-control-of-a-dc-motor-with-pid-mplab-xc8-version"
]
},
{
"id": "KUBoPqIMqFk",
"n": null,
"t": "Lector de tag RFID con MPLAB XC8 (RC522) metodo hash",
"d": "Versión del lector de tarjetas RFID con MPLAB XC8 Metodo HASH.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2936-rc522-rfid-card-reader-mplab-xc8-version"
]
},
{
"id": "Xz9o_lKAB44",
"n": null,
"t": "Tips para adquisición serial a alta velocidad en windows",
"d": "Muestra como disminuir la latencia, en la adquisición de datos de alta velocidad en windows.",
"c": []
},
{
"id": "g4Mqph1mP84",
"n": null,
"t": "Comparando CCS, mikro y XC8 en recursos",
"d": "Sto es un reto del amigo MARIANO ROCHA (del grupo de face programando PICs primer nivel), que quise cumplir pero de forma ilustrativa. Muestra de manera informativa, y sin tratar de…",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2968-analyzing-three-pic-compilers-using-a-loop"
]
},
{
"id": "catM1cpn7Cc",
"n": null,
"t": "Como Utilizar el modulo Sleep en un PIC version XC8",
"d": "Muestra la importancia de saber seleccionar un micro y de como usar el modo Sleep es un microcontrolador con MPLAB xc8.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3276-how-sleep-mode-works-in-pics-mplab-xc8-version"
]
},
{
"id": "dVZlkE7NhNU",
"n": null,
"t": "Como usar el módulo de Modulación de Señales Digital (DSM) en los PIC modernos y en MPLAB XC8",
"d": "Muestra como utilizar la modulación ASK, FSK y PSK en un microcontrolador PIC usando el modulo DSM.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3479-how-use-the-new-data-signal-modulation-module-in-pic-and-mpl"
]
},
{
"id": "MllJIkpUqKI",
"n": null,
"t": "Uso de la memoria flash de programa para almacenar varios tipos de datos en XC8",
"d": "Muestra como usar en un pic16f15324 la memoria flash de programa para almacenar varios ripos de datos en MPLAB XC8.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3775-using-the-program-s-flash-memory-to-save-data-at-runtime-pic"
]
},
{
"id": "AZFGwpU6uuw",
"n": null,
"t": "Lectura de termocupla tipo k MAX6675 en MikroC y XC8",
"d": "Muestra como leer na termocupla tipo K con el chip max6675, version en Mikroc y mplab xc8.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3866-read-type-k-thermocouple-with-max6675-in-mikroc",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3867-read-type-k-thermocouple-with-max6675-in-mplab-xc8"
]
},
{
"id": "_QL29xCtum8",
"n": null,
"t": "TIPS, para programar nuevos PIC, con el PICKIT2 y el PICKIT3. Actualización firmware PICKIT3",
"d": "Muetra como mofificar el archivo PK2DeviceFile.dat, para poder programar micros mas modernos en pickit2 y pickt3, asi de como activar el modo MPLAB en pickit3 para poder actualizar…",
"c": [
"https://www.microchip.com/forums/download.axd?file=2;749887",
"https://sites.google.com/site/pk2devicefileeditor/home/files"
]
},
{
"id": "vVGuH4-xXF0",
"n": null,
"t": "TIPS, para programar nuevos PIC, con el PICKIT2 y el PICKIT3. Actualización firmware PICKIT3",
"d": "Muestra como modificar el archivo PK2DeviceFile.dat, para poder programar micros mas modernos en pickit2 y pickt3, así de como activar el modo MPLAB en pickit3 para poder actualizar…",
"c": [
"https://www.microchip.com/forums/download.axd?file=2;749887",
"https://sites.google.com/site/pk2devicefileeditor/home/files"
]
},
{
"id": "dnLLRh24W4I",
"n": null,
"t": "Como pasar librerias de un compialdor(MikroC) a otro (XC8) de forma fácil. Ejemplo mis librerías I2C",
"d": "Muestra como pasar mis librerias de i2c en mikroc a mplab xc8 de forma fácil. Cuando se trabaja a Nivel de bits.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4318-i2c-library-by-harwdare-non-blocking-xc8-version"
]
},
{
"id": "eACoxIjEUvc",
"n": null,
"t": "Como leer el true RMS( valor RMS real) de cualquier señal, con PIC y XC8",
"d": "Verison en mplab xc8 para leer un true RMS con pic vesion Mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5154-how-read-the-true-rms-with-pic-xc8-version"
]
}
]
},
"pic-ccs": {
"titulo": "Proyectos con CCS",
"desc": "Proyectos con el compilador CCS PIC C y comparación de recursos entre CCS, MikroC y XC8.",
"lista": "PLp8IkbtcjNXzV3bVZRaKCDk3X_-UU7VwK",
"videos": [
{
"id": "Mfv4yIHB7u8",
"n": null,
"t": "Manejo de múltiples servos con CCS",
"d": "Es la versión con el compilador CCS de manejo de 8 servomotores.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2511-multiple-servo-control-with-css-compiler"
]
},
{
"id": "g4Mqph1mP84",
"n": null,
"t": "Comparando CCS, mikro y XC8 en recursos",
"d": "Sto es un reto del amigo MARIANO ROCHA (del grupo de face programando PICs primer nivel), que quise cumplir pero de forma ilustrativa. Muestra de manera informativa, y sin tratar de…",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2968-analyzing-three-pic-compilers-using-a-loop"
]
},
{
"id": "7sIcJHF0k14",
"n": null,
"t": "UART IDLE line detect en CCS picc compiler",
"d": "Muestra una técnica para detectar por interrupcion tramas seriales sin importar el tamaño basado en la duración de cada byte del protocolo uart. usando el desboirde de un timer. video de…",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4914-uart-idle-line-detect-on-pic-and-ccs"
]
}
]
},
"dspic-mikroc": {
"titulo": "MikroC para dsPIC",
"desc": "Curso de dsPIC 30F, 33F y 33EP con MikroC: timers de 16 y 32 bits, medición de ancho de pulso, varios HC-SR04 a la vez, input capture, output compare y motor control como PWM, LabVIEW y TF Mini LIDAR.",
"lista": "PLp8IkbtcjNXxiASMmpPK9nub_eOwtj73o",
"videos": [
{
"id": "l38uPtZDNEU",
"n": 1,
"t": "Introducción a los dspic 30f , 33f y 33ep",
"d": "Muestra, mediante tarjetas entrenadoras programa básico de hola mundo, para diferentes tipos de DSPIC utilizando Mikroc Pro for DSPIC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2783-dspic-30f-33f-33ep-hello-word"
],
"f": "2019-02-24"
},
{
"id": "Xz9o_lKAB44",
"n": null,
"t": "Tips para adquisición serial a alta velocidad en windows",
"d": "Muestra como disminuir la latencia, en la adquisición de datos de alta velocidad en windows.",
"c": [],
"f": "2019-09-01"
},
{
"id": "ryTcc3kaovM",
"n": 2,
"t": "Timers de 16 y 32 bits con interrupciones",
"d": "Muestra como trabajar con los timer en los dspic.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3720-dspic-basic-timer-concept-and-interrputs"
],
"f": "2020-04-16"
},
{
"id": "8xxRq03145E",
"n": 3,
"t": "Timers para leer varios ancho de pulso al tiempo",
"d": "Muestra como usar la propiedad TGATE de los timer para medoir ancho de pulso de manera automática.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3724-read-multiple-pulse-width-signal-pwm-at-time-with-dspic"
],
"f": "2020-04-21"
},
{
"id": "99BbzN7fCmg",
"n": 4,
"t": "Lectura de sensores hc-sr04 al tiempo",
"d": "Muestra como leer simultáneamente varios sensores hc-sr04 de forma eficiente.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3725-read-multiple-hc-sr04-ultrasonic-sensors-at-the-same-time-wi"
],
"f": "2020-04-21"
},
{
"id": "IjOaM7vzqqs",
"n": 5,
"t": "Modulo input capture",
"d": "Muestra como optimizar la lectura de hasta 4 sensores ultrasónicos, o cualquier señal de ancho de pulso simultáneamente, usando el modulo de Input Capture.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3805-dspic-read-multiple-sfr04-sensors-simultaneously-using-the-i"
],
"f": "2020-06-02"
},
{
"id": "GMfT48GuV8s",
"n": 6,
"t": "Modulo output compare como PWM",
"d": "Muestra como utilizar el modulo de Output compare para generar señales PWM, y controlar servos o morores DC. Manejo de Servos con DSPIC y mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3910-using-the-pwm-module-in-dspics"
],
"f": "2020-09-15"
},
{
"id": "sXBpBc2N3tY",
"n": null,
"t": "Clase en vivo, de comunicación serial entre DSPIC y LABVIEW",
"d": "Muestra como comunicar y controlar variables leídas en un DSPIC en LABVIEW.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3926-seria-lcommunication-between-a-dspic-and-labview"
],
"f": "2020-09-23"
},
{
"id": "H_2Kxf2Jjtk",
"n": null,
"t": "Usar un control USB con Labview y Xbee, para manejar remotamente un buque a escala. Parte 3",
"d": "Muestra como armar la trama para posterior mente ser enviada inalámbricamente al micro. CLASE DE PWM.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4112-control-a-joystick-with-labview"
],
"f": "2020-12-12"
},
{
"id": "kpjc0n-c8wk",
"n": 7,
"t": "Motor control como PWM",
"d": "Muestra como manejar motores y servomotores usando el modulo motor control de los dspic33fj.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4240-driving-dc-motors-and-servos-with-dspic-motor-control-module"
],
"f": "2021-01-03"
},
{
"id": "iaOm1-lOsMI",
"n": null,
"t": "Medicion de tiempos largos usando timer de 32 bits en micros de 16 bits",
"d": "Muestra como usar los timers en el DSPIC en forma de 32bits y medir tiempos largos.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4909-measurement-of-long-times-with-dspic"
],
"f": "2022-02-16"
},
{
"id": "GTIdBjsuohY",
"n": null,
"t": "Librerias para TF mini LIDAR en dsPIC 33f",
"d": "Muestra co mo pasar las liberrias de pic a DSPIC para manejar el tf mini lidar.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4977-tf-mini-lidar-library-for-dspic"
],
"f": "2022-05-04"
}
]
},
"dspic-xc16": {
"titulo": "MPLAB XC16 para dsPIC",
"desc": "Las mismas clases de dsPIC con el compilador MPLAB XC16: introducción, timers con interrupciones, ancho de pulso, sensores ultrasónicos, input capture y output compare.",
"lista": "PLp8IkbtcjNXwearFBxVFtzjGOzzEW1IR_",
"videos": [
{
"id": "-Hrz6PZwdiw",
"n": 1,
"t": "Introducción a los dspic 30f , 33f y 33ep",
"d": "Muestra, mediante tarjetas entrenadoras programa básico de hola mundo, para diferentes tipos de DSPIC utilizando Mplab xc16.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2843-mplab-xc16-dspic-30f-33f-33ep-hello-word"
],
"f": "2019-04-02"
},
{
"id": "n4GmqLU3Qqw",
"n": 2,
"t": "Timers de 16 y 32 bits con interrupciones",
"d": "Muestra como trabajar con los timer en los dspic, usando interpciones y mplab xc16.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3913-dspic-basic-timer-concept-and-interrputs-xc16-version"
],
"f": "2020-09-16"
},
{
"id": "nVF_b1Fxd2s",
"n": 3,
"t": "Timers para leer varios ancho de pulso al tiempo",
"d": "Muestra como usar la propiedad TGATE de los timer para medoir ancho de pulso de manera automática., versión XC16.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3914-read-multiple-pulse-width-signal-pwm-at-time-with-dspic-mpla"
],
"f": "2020-09-16"
},
{
"id": "QsB7GNphThs",
"n": 4,
"t": "Lectura de sensores hc-sr04 al tiempo",
"d": "Muestra como leer simultáneamente varios sensores hc-sr04 de forma eficiente.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3915-read-multiple-hc-sr04-ultrasonic-sensors-at-the-same-time-wi"
],
"f": "2020-09-16"
},
{
"id": "ZzpgmWsSg0I",
"n": 5,
"t": "Modulo input capture",
"d": "Muestra como optimizar la lectura de hasta 4 sensores ultrasónicos, o cualquier señal de ancho de pulso simultáneamente, usando el modulo de Input Capture. en MPLAB XC8.",
"c": [],
"f": "2020-09-16"
},
{
"id": "ELkNRrL72Vw",
"n": 6,
"t": "Modulo output compare como PWM",
"d": "Muestra como utilizar el modulo de Output compare para generar señales PWM, y controlar servos o motores DC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3917-mplab-xc16-using-the-pwm-module-in-dspics"
],
"f": "2020-09-17"
},
{
"id": "eQsgcdz9kzI",
"n": 6,
"t": "Modulo output compare como PWM",
"d": "Muestra como usar el modulo output capture como salida para generar señales pwm y manejar servomotores o motores DC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4239-using-the-pwm-module-in-dspics-mplab-xc16-version"
],
"f": "2020-12-31"
}
]
},
"texas": {
"titulo": "Microcontroladores Texas Instruments",
"desc": "Curso de ARM Cortex-R5F de Texas Instruments (TMS570LC43x) para aplicaciones críticas: puertos, entradas, transmisión serial e interrupciones por flanco y por timer.",
"lista": "PLp8IkbtcjNXwo-FPnCCrmf74bgQpDfGlg",
"videos": [
{
"id": "4HV9L5kMD9Y",
"n": 1,
"t": "Puertos entrada y salidas",
"d": "Muestra como iniciar con los microcontroladores de texas (TMS570LC43X) Haciendo titilar unos leds.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3287-led-blink-i570lc43x-microcontrollern-texas-instruments-tms"
],
"f": "2020-03-30"
},
{
"id": "KHRMXDgTpqA",
"n": 2,
"t": "Leyendo entrada digital",
"d": "Muestra como leer una entrada digital.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3288-input-read-gio-texas-instrument-microcontroller"
],
"f": "2020-03-30"
},
{
"id": "iEs5sJBPd6w",
"n": 3,
"t": "Transmision serial",
"d": "Muestra como mandar cadenas por el puerto serial.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3289-send-string-serial-helllo-word-texas-instrument"
],
"f": "2020-03-30"
},
{
"id": "5LsglFPrOII",
"n": 4,
"t": "Interrupcion por flanco",
"d": "Muestra como tener otro proceso y utilizar la interrupción por flanco.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3290-edge-interrup-texas-microntroller"
],
"f": "2020-03-30"
},
{
"id": "sOR5bphqe3o",
"n": 5,
"t": "Interrupcion por timer",
"d": "Muestra como usar el modulo RTI para interrpcion por timer en microcntorladores texas intruments.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3291-rti-interrpupt-texas-instruments"
],
"f": "2020-03-30"
},
{
"id": "GZ0p-CgeE0M",
"n": null,
"t": "Taller Introductorio de Microcontroladores ARM Texas",
"d": "Taller en linea, de introcucción a los micros de aplicaciones criticas con ARM cortex R5f de Texas Instruments.",
"c": [],
"f": "2020-07-13"
}
]
},
"nextion": {
"titulo": "Pantallas HMI Nextion",
"desc": "Cómo diseñar interfaces en pantallas Nextion y manejarlas sin bloqueos desde PIC, Arduino, STM32 y Raspberry Pi Pico, con interrupciones y librerías propias. Filtra por microcontrolador.",
"lista": "PLp8IkbtcjNXx1Or9xrgHFolNMrg4QnRtK",
"videos": [
{
"id": "_9gsAkEQJ4U",
"n": null,
"t": "Manejo pantalla TFT Nextion con PIC (con MikroC ) o Arduino",
"d": "Describe como manejar en tiempo real y sin bloqueos la pantalla nextion tanto como para PIC ( con Mikroc ), como Arduino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2457-hmi-nextion-tft-with-pic",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2458-hmi-nextion-tft-with-arduino"
],
"f": "2018-06-20",
"m": [
"PIC",
"Arduino"
]
},
{
"id": "WEqHm_YXfnA",
"n": null,
"t": "Interfaz con pantalla  Nextion parte 1",
"d": "Muestra como crear una interfaz HMI con la pantalla nextion.",
"c": [],
"f": "2018-04-20",
"m": [
"General"
]
},
{
"id": "kXmOIOi1sZA",
"n": 39,
"t": "Recepción ordenes Nextion con Interrupciones",
"d": "Muestra una forma de como obtener, datos, numéricos, texto, y ordenes desde la pantalla HMI Nextion.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4099-reading-numerical-data-text-and-commands-from-the-nextion-tf"
],
"f": "2020-11-04",
"m": [
"PIC"
]
},
{
"id": "csjFmSJkSBk",
"n": 39,
"t": "Recepción ordenes Nextion con Interrupciones",
"d": "Muestra una forma de como obtener, datos, numéricos, texto, y ordenes desde la pantalla HMI Nextion.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4099-reading-numerical-data-text-and-commands-from-the-nextion-tf"
],
"f": "2020-11-04",
"m": [
"PIC"
]
},
{
"id": "TLEC9x1Kw7k",
"n": 108,
"t": "Mis librerías para manejo de pantallas HMI Nextion con STM32",
"d": "Muestra como interactuar con las pantallas Nextion y los stm32 charla.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5892-stm32-hmi-nextion-lcd-library"
],
"f": "2025-04-20",
"m": [
"STM32"
]
},
{
"id": "rb9FiJpyTiQ",
"n": null,
"t": "Charla CVR Electrónica: pantallas HMI Nextion controladas desde microcontroladores (Raspberry Pi Pico y MicroPython)",
"d": "Manejando Rasberry PI pico, Microphyton, manejo pantalla Nextion.",
"c": [
"https://www.cvrelectronica.com/downloads/"
],
"m": [
"Raspberry Pi Pico"
]
}
],
"filtros": [
"STM32",
"PIC",
"Arduino",
"Raspberry Pi Pico",
"General"
]
},
"arduino": {
"titulo": "Arduino",
"desc": "Comunicación serial, interrupciones, IoT, GPS, motores, PID, simulación en Proteus, ESP32 en Wokwi y la nueva Arduino UNO Q.",
"lista": "PLp8IkbtcjNXxLuRIhWalkkThlsRO06kV_",
"videos": [
{
"id": "Q9resP5JoRc",
"n": null,
"t": "Cómo clonar código .hex de arduino",
"d": "Pasar el código máquina de un Arduino a otro Link.",
"c": [
"https://drive.google.com/drive/folders/1l-tkosJgmDlIWx0rnOKTJ83IjuhRlUrA?usp=sharing"
]
},
{
"id": "2U31VmYJZKc",
"n": null,
"t": "Proteger código Arduino uno",
"d": "Muestra como.activar los fusibles de protección en un Arduino uno.",
"c": []
},
{
"id": "LtRaaFNEG2Y",
"n": null,
"t": "Conflictos de librerias en Arduino uno",
"d": "Muestra que no todo en Arduino es color de rosa l os cuidados que hay que tener para saber sacarle el máximo provecho.",
"c": []
},
{
"id": "I2zYvOchwv4",
"n": null,
"t": "Recepcion de ordenes seriales con micros, en mikroc for PIC O con Arduino",
"d": "Muestra como recibir ordenes seriales con micros, tanto arduino como PIC, mostrando la ventaja de usar el estandar de lenguaje C.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2429-simple-receipt-of-serial-data-pic-and-arduino"
]
},
{
"id": "Osg5r5_t7IY",
"n": null,
"t": "Recepcion serial con interrupcion en Arduino y PIC",
"d": "Complementa el anterior video , mostrando la forma de recibir ordenes serial pero con interrpciones, lo que permite realizar más tareas a la vez.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2430-simple-receipt-of-serial-data-pic-and-arduino-with-interrupt"
]
},
{
"id": "a9GovfdeyLs",
"n": null,
"t": "Transmision y recepcion serial full duplex en PIC (MikroC )y Arduino",
"d": "Muestra como poder recibir datos con Interrupcion y enviar a la vez desde un pic ( Mikroc ) y desde Arduino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2431-send-and-receive-serial-data-full-duplex-pic-and-arduino"
]
},
{
"id": "UWzuLRw1Yj0",
"n": null,
"t": "Comunicacion full duplex mas interrupcion timers PIC o Arduino",
"d": "Muestra como además de la comunicación full duplex se pueden ejecutar procesos extras con la interrupcion del timer 1, tanto para PIC como Arduino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2435-comunicacion-serial-full-duplex-and-timer-interrut-process"
]
},
{
"id": "zoozToj7avY",
"n": null,
"t": "LabVIEW comunicacion full duplex con microcontroladores PIC ( MikroC ) o Arduino",
"d": "Muestra como mandar y recibir al tiempo comandos seriales desde labview aqui el video del programa en PIC (Con Mikroc ) y Arduino.",
"c": []
},
{
"id": "XtE98FR9Tmo",
"n": null,
"t": "Lectura de multiples sensores ultrasonicos, PIC ( MikroC ) o Arduino",
"d": "Muestra el uso de timers en pic y Arduino, para medir anchode pulso de manera precisa. en Mikroc ejemplo con sensores ultrasonicos sfr04. codigos aqui.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2441-arduino-multiple-ultrasonic-sensor-sfr04",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2438-pic-multiple-ultrasonic-sensor-sfr04"
]
},
{
"id": "2Cz3NnE00_o",
"n": null,
"t": "Dimmer control de energia carga AC PIC ( con MikroC ) o Arduino",
"d": "Con mikroc para pic Aclaro el timer del pic esta con preescalador de 256 no de 32 como menciono en el video. después lo edito con mas calma.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2453-ac-power-control-zero-crossing-detection-ac-dimming",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2454-arduino-ac-power-control-zero-crossing-detection-ac-dimming"
]
},
{
"id": "ZceQSbxVW8M",
"n": null,
"t": "ENC28J60 Mini Servidor WEB PIC O Arduino",
"d": "Muestra la forma de crear una pequeña pagina WEB tanto en PIC como en Arduino. Driver para que proegtus acpete el modulo enc28j60.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2460-basic-web-server-pic",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2461-basic-web-server-arduino"
]
},
{
"id": "oV86tr6ubkE",
"n": null,
"t": "Control por bluetooth PIC ( MikroC ) o Arduino",
"d": "Modifico el programa de comuniación serial full duplex controlado con el celular y la aplicacion en Adroid bluetotth elecronics. con Mikroc en PIC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2463-celular-bluetooth-control-pic-and-arduino"
]
},
{
"id": "qYhTd31SNwI",
"n": null,
"t": "Control wifi con el ESP8266, con el celular o LabVIEW, en PIC ( MikroC ) o en Arduino",
"d": "Se crea una red wifi y un servidor con el cual se puede conectar un pc o un celular y controlar un motor y unas luces . Tanto en PIC (con Mikroc )como en Arduino al canal.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2465-pic-esp8266-wifi-server-control-whit-android-or-labview",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2466-arduino-esp8266-wifi-server-control-whit-android-or-labview"
]
},
{
"id": "TziXXKABmSo",
"n": null,
"t": "Multiples interrupciones Arduino",
"d": "Versión de Arduino de manejo de comunicación full duplex y uso de interrupciones para manejo de carga AC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2499-handling-multiple-interruptions-for-full-duplex-communicatio",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2500-arduino-handling-multiple-interruptions-for-full-duplex-comm"
]
},
{
"id": "wKX32-f5Qzk",
"n": null,
"t": "Lectura de encoder de cuadratura con Arduino",
"d": "Muestra como usar la interrupcion por flanco para la lectura de un encoder por cuadratura con Arduino.",
"c": []
},
{
"id": "7J8XcpBB4Po",
"n": null,
"t": "Internet de las cosas version Arduino con Ubidots",
"d": "Monitorea variables con Arduino y ubidot.",
"c": []
},
{
"id": "hWpmDe2n-MY",
"n": null,
"t": "Version Arduino ESP8266 control y monitoreo por internet",
"d": "Ver antes la configuracion de ubidots en la versión para PICS. Muestra como monitorear y controlar con el esp8266 en ubidots con Arduino, ademas de recibir un correo si hay una alarma.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2520-esp8266-full-control-iot-application-with-arduino-and-ubidot"
]
},
{
"id": "LEg94Bj2XRA",
"n": null,
"t": "Alarma de posicion con GPS y Arduino",
"d": "Muestra como leer un GPS y dar una alerta por ubicación usando Arduino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2525-arduino-version-read-gps-and-alert-position"
]
},
{
"id": "r7_ir2T66aI",
"n": null,
"t": "Arduino control de motores paso a paso con LabVIEW",
"d": "Usa interrupciones para controlar un motor paso a paso recibiendo ordenes desde Labview.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2542-arduino-version-stepper-motor-control-with-labiew"
]
},
{
"id": "og2V82RGX6g",
"n": null,
"t": "Diseño esquemático y PCB en Proteus (parte i)",
"d": "Muestra basado en una shield para Arduino como diseñar una pcb desde cero es la primera parte.",
"c": []
},
{
"id": "4Ab8-yjHqJA",
"n": null,
"t": "Diseño previo programador de PIC con Arduino",
"d": "Muestras tips de software y hardware para el diseño del programador de PIC con Arduino.",
"c": []
},
{
"id": "EqzTapbVg4o",
"n": null,
"t": "Usando Arduino como programador de PICS versión 1.0",
"d": "Se muestra para aquellos que ya tienen la plataforma y quiera empezar a programar PICS, un proyecto que permite que uses el compilador que desees para programar tu pic, pero uses el…",
"c": [
"https://github.com/alcidesramos/PROGRAMADOR_PIC_CON_ARDUINO_ARZ",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2745-using-arduino-to-programmer-pics-microcontroller"
]
},
{
"id": "dFQ-Hvhh_-c",
"n": null,
"t": "Lectura de sensores Ópticos reflectivos de forma digital",
"d": "Muetsra técnica para leer varios sensores tipo cny7 o cualquier otro sensores óptico reflectivo usando timer en pic y arduino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2759-read-various-reflective-optical-sensors-type-cny70"
]
},
{
"id": "q_gl2C0LwNE",
"n": null,
"t": "Programar Arduino con vscode",
"d": "Muestra como programar Arduino usando visual studio code, y aprovechar el potencial del autocompletado o intellensense.",
"c": []
},
{
"id": "IDLiubs_rc4",
"n": null,
"t": "Control PID de velocidad en un motor DC con Arduino",
"d": "Muestra como controlar la velocidad de un motor dc con arduino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2920-three-ways-to-control-the-speed-in-a-dc-motor-and-a-microcon"
]
},
{
"id": "1x4n9cgr_kg",
"n": null,
"t": "Usar Arduino para operaciones logicas",
"d": "Muestra como se puede usar arduino para operaciones lógicas basicas. Video de como simualr arduino en proteus.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4999-how-use-boolean-logic-with-arduino"
]
},
{
"id": "cn2YRh2TlIc",
"n": null,
"t": "Charla, de cómo se ha reinventado Arduino,mejorado sus debelidades para seguir vigente en el mercado",
"d": "Muestro como Arduino se ha adaptado a los cambios y soportado el ataque de nuevas platadformas, fortaleciendo sus debilidades para seguir vigente.",
"c": []
},
{
"id": "XRa9J2-e1Lw",
"n": null,
"t": "Charla de comunicacion Arduino y bluetooth, full duplex, carrito Proteus",
"d": "Charla simualda pero aplicada del uso del carrito d eproteus con Arduino.",
"c": []
},
{
"id": "Kuo80ZvEUTM",
"n": null,
"t": "Charla de adquision de datos analogos desde simulink y pasarlo a Matlab para procesar, on Arduino",
"d": "Muestra como adquirir datos desde simulink usando arduino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-simulink-arduino-adquisicion"
]
},
{
"id": "rk-SdRB1DU0",
"n": null,
"t": "Haz tu propio modulo de iniico y parada para tus robot con Arduino",
"d": "MuesTra mi libreria para leer codigos ir con Arduino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5522-arduino-start-and-stop-ir-modulo-for-robotic"
]
},
{
"id": "RYuYgjH2_Vs",
"n": null,
"t": "Clase robotica elemental en vivo 1. Programacion de ESP32 con Arduino en Wokwi",
"d": "Muestra como Programar la esp32 con arduino y wokwi.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-esp32-robotica-elemental"
]
},
{
"id": "5CZr16UkUio",
"n": null,
"t": "\"Arduino se reinventa y la saca del estadio\" la nueva Arduino uno q es una locura",
"d": "Qualcomm compra Arduino y la reinventa.",
"c": []
},
{
"id": "Rpq3rWh68IM",
"n": null,
"t": "Arduino uno q . Revisando el datasheet y cartacteriasticas principales",
"d": "Muestra características fundamentales de la Arduino UNO Q. Análisis datasheet Arduino uno Q.",
"c": []
},
{
"id": "wjCxZe-CXeQ",
"n": null,
"t": "Simulacion Arduino en Proteus",
"d": "",
"c": []
},
{
"id": "7B_dCX-1bvo",
"n": null,
"t": "Proteus simulacion en Arduino generacion de tonos y melodias",
"d": "",
"c": []
},
{
"id": "JNYdeYtD_UU",
"n": null,
"t": "Clase de simulacion y control de carrito virtual con Proteus, y programacion en Arduino",
"d": "",
"c": []
},
{
"id": "x_yzt3SuaJo",
"n": null,
"t": "Procedimientos en Arduino , simulacion en carrito en Proteus, variando movimientos y velocidad",
"d": "",
"c": [
"https://github.com/alcidesramos/zumo"
]
},
{
"id": "P3hEuzVOTYc",
"n": null,
"t": "Lo que se viene en el canal, curso de Arduino uno q y curso de nuevos micros stm32c5",
"d": "Y migracion a visual studio code.",
"c": []
},
{
"id": "KY_IIIEucP8",
"n": null,
"t": "Simulando un ESP32 , de mentira en una carcasa en Proteus",
"d": "",
"c": [
"https://github.com/alcidesramos/ESP32_ARDUINO_MENTIRA"
]
}
]
},
"digitales": {
"titulo": "Digitales básicos",
"desc": "Bases para empezar en sistemas embebidos: sistemas numéricos, memorias, operadores lógicos y la GAL22V10 en Proteus.",
"lista": "PLp8IkbtcjNXyXzGsDhP9WmehH72wrYZYO",
"videos": [
{
"id": "5MvzTkgMiIw",
"n": null,
"t": "Como usar la GAL22V10 en Proteus",
"d": "Muestra como configurar la GALS con wincupl y simular en proteus.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5017-use-gal22v20-and-proteus"
]
},
{
"id": "1x4n9cgr_kg",
"n": null,
"t": "Usar Arduino para operaciones logicas",
"d": "Muestra como se puede usar arduino para operaciones lógicas basicas. Video de como simualr arduino en proteus.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4999-how-use-boolean-logic-with-arduino"
]
},
{
"id": "aQHwoJuiICI",
"n": null,
"t": "Conceptos basicos de digitales para iniciar con los sitemas embebidos parte 1",
"d": "Miuestra los conceptos, de bit, byte, sistemas numericos bibarios, decimal, Hexadecimal, necesarios para inicar en el mundo de los sistemas embebidos.",
"c": []
},
{
"id": "EDVUga7G7Bw",
"n": null,
"t": "Conceptos basicos de digitales para iniciar con los sitemas embebidos parte 2",
"d": "Muestra conceptos basicos de memorias RAM, ROM, y diferencias entre Microcontrolador y Microprocesador.",
"c": []
},
{
"id": "Gzo7v3xe8zE",
"n": null,
"t": "Operadores logicos y su aplicaciones en C++ , orientado a los sistemas embebdidos",
"d": "Muestra cuales son los operadores logicos, sus simnbolos en c y c++, y sus aplicaciones en la programación.",
"c": []
}
]
},
"esp32-simulacion": {
"titulo": "ESP32: simulación en Proteus y Wokwi",
"desc": "Cómo simular la ESP32 en Proteus con MicroPython y en Wokwi con VS Code, depurar, armar circuitos con IA y enviar datos a Python o Node-RED.",
"lista": "PLp8IkbtcjNXz-SDFriB27DBLnNL5tuJGl",
"videos": [
{
"id": "sGTY4Gh1sjg",
"n": null,
"t": "Mi sobrina ANGELA  RAMOS PÁJARO quería hacer un video para el canal, y fue sobre la ESP32",
"d": "ESP32 para principiantes pronto en mi canal.",
"c": [],
"s": "primeros-pasos",
"f": "2024-01-28"
},
{
"id": "QYCiRebcUxQ",
"n": null,
"t": "ESP32  en nuevo Proteus 8.17 sp4, se vienen cosas buenas.ESP32 en Proteus",
"d": "ESP32 en Proteus.",
"c": [],
"s": "esp32-en-proteus",
"f": "2024-07-27"
},
{
"id": "v0bCdETy1XU",
"n": null,
"t": "Simular ESP32 con Proteus y MicroPython",
"d": "Muestra como simular esp32 y micropyhton con proteus.",
"c": [],
"s": "esp32-en-proteus",
"f": "2025-02-03"
},
{
"id": "j49WYKo-7lo",
"n": null,
"t": "ESP32 simulacion  en Proteus usando MicroPython",
"d": "",
"c": [
"https://github.com/alcidesramos/ESP32_CANAL"
],
"s": "esp32-en-proteus",
"f": "2026-09-17"
},
{
"id": "KY_IIIEucP8",
"n": null,
"t": "Simulando un ESP32 , de mentira en una carcasa en Proteus",
"d": "",
"c": [
"https://github.com/alcidesramos/ESP32_ARDUINO_MENTIRA"
],
"s": "esp32-en-proteus",
"f": "2026-09-18"
},
{
"id": "AspJqZMxJJg",
"n": null,
"t": "ESP32, simular en Wokwi, armar circuito con IA, debugger desde VS Code y Wokwi, monitoreal variables",
"d": "",
"c": [
"https://github.com/alcidesramos/ESP32_DEBUUGER_IA"
],
"s": "esp32-en-wokwi-y-vs-code",
"f": "2026-10-11"
},
{
"id": "b-fo9t6tsFc",
"n": null,
"t": "ESP32, simular en Wokwi y enviar informacion a aplicaciones o hardware externo, python, Node-RED, etc",
"d": "",
"c": [
"https://github.com/alcidesramos/COMUNICACION_EXTERNA_IA"
],
"s": "esp32-en-wokwi-y-vs-code",
"f": "2026-10-13"
}
],
"secciones": [
{
"id": "primeros-pasos",
"nombre": "Primeros pasos"
},
{
"id": "esp32-en-proteus",
"nombre": "ESP32 en Proteus"
},
{
"id": "esp32-en-wokwi-y-vs-code",
"nombre": "ESP32 en Wokwi y VS Code"
}
]
},
"esp32-vivo": {
"titulo": "Robótica elemental con ESP32 (clases en vivo)",
"desc": "Clases en vivo para empezar en robótica con ESP32 y Arduino: simulación en Wokwi, LED RGB, tonos y melodías, Bluetooth, motores DC, sensores ultrasónicos y de humedad, impresión 3D y los prototipos de los estudiantes.",
"lista": "PLp8IkbtcjNXy1HVBtqWrMIhlpSh-EbHbR",
"videos": [
{
"id": "RYuYgjH2_Vs",
"n": 1,
"t": "Programacion de ESP32 con Arduino en Wokwi",
"d": "Muestra como Programar la esp32 con arduino y wokwi.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-esp32-robotica-elemental"
]
},
{
"id": "MuQ8mR9KwjI",
"n": 2,
"t": "Manejo de LED rgb con ESP32 y Wokwi",
"d": "Muetsra como leer uin led rgb con arduino y wokwi Pagina simualdor de RGB.",
"c": [
"https://wokwi.com/projects/394915444055050241"
]
},
{
"id": "NrBO-1hE63U",
"n": 3,
"t": "Configuracion de la ide de Arduino para programar el ESP32",
"d": "Muestra como configurar arduino para trabajar cone el esp32.",
"c": []
},
{
"id": "Iq8x0qgss64",
"n": 4,
"t": "Generacion de tonos, charla acerca de la radiofrecuencia",
"d": "Muestra como generar tonos con Arduino.",
"c": []
},
{
"id": "jLTorPmHZRM",
"n": 5,
"t": "Generacion de tonos y melodias ESP32 con  Arduino ide",
"d": "Muestra como general tonos y melodoas con la esp32. Uso del protoboard.",
"c": [
"https://wokwi.com/projects/395278615436177409",
"https://wokwi.com/projects/395278979516473345"
]
},
{
"id": "yqtOzWmDnzA",
"n": 6,
"t": "Taller practico de melodias con Arduino",
"d": "Muestra con un Buzzer Real como programarlo en Arduino.",
"c": []
},
{
"id": "We7DAJA0J0U",
"n": 7,
"t": "Controlando un led por bluetooth ESP32",
"d": "Muestra como controla un led por bluetooth con la EP32.",
"c": []
},
{
"id": "Bny3s3yclNY",
"n": 8,
"t": "Manejo de motores DC",
"d": "Muestra como controlar un carrito con motores y luces direccionales, y poner una melodia.",
"c": []
},
{
"id": "PHHckhwUHhw",
"n": 9,
"t": "Control de motores por bluetooth ESP32",
"d": "Muestra como manejar motores con el esp32 por bluetooth.",
"c": []
},
{
"id": "DFvXuEQ-3wA",
"n": 10,
"t": "Lectura de distancia con ESP32 y hc -sr04",
"d": "Muestra como leer distancia copn el esp32.",
"c": []
},
{
"id": "0xy6GFijz_M",
"n": 11,
"t": "Leer sensores de distancia ultrasonico con ESP32",
"d": "Lee la distancia d eun sensor ultrasinico hc04.",
"c": []
},
{
"id": "b20CQDvflQE",
"n": 12,
"t": "Lectura de sensores de humedad y temperatura con ESP32",
"d": "Lectura de sensores de humedad y temperatura con ESP32.",
"c": []
},
{
"id": "l9uxnAxFnFQ",
"n": 13,
"t": "Charla sobre la impresora 3d",
"d": "Chala basica del uso de la impresora 3D.",
"c": []
},
{
"id": "D_D1-Ag334k",
"n": 14,
"t": "Piezas para los prototipos en la impresora 3d",
"d": "",
"c": []
},
{
"id": "nndqmleZu2M",
"n": 15,
"t": "Evaluacion, sustentaciones y prototipos creados",
"d": "Ver este otro video, que se me olvido anexar.",
"c": []
},
{
"id": "gq7AfMi8KHw",
"n": 16,
"t": "Sustentacion proyecto",
"d": "",
"c": []
}
]
},
"pico-nextion": {
"titulo": "Raspberry Pi Pico y pantallas Nextion",
"desc": "Charla sobre pantallas HMI Nextion manejadas desde microcontroladores, con la Raspberry Pi Pico en MicroPython.",
"lista": "PLp8IkbtcjNXzMyWVgMA4i4P7G1rkOqwc_",
"videos": [
{
"id": "rb9FiJpyTiQ",
"n": null,
"t": "Charla CVR Electrónica: pantallas HMI Nextion controladas desde microcontroladores (Raspberry Pi Pico y MicroPython)",
"d": "Manejando Rasberry PI pico, Microphyton, manejo pantalla Nextion.",
"c": [
"https://www.cvrelectronica.com/downloads/"
]
}
]
},
"ia": {
"titulo": "Cosas con la IA",
"desc": "Cómo uso la inteligencia artificial en el trabajo y en clase: calificar con IA, la IA de Proteus 9.2, armar circuitos en Wokwi y crear aplicaciones con Claude como agente de ingeniería inversa.",
"lista": "PLcGw1xGMXD8k",
"videos": [
{
"id": "65NlgiSX8yc",
"n": null,
"t": "Clase en vivo: usando la IA apra calificar  , introduccion al PWM",
"d": "",
"c": [],
"f": "2026-10-26"
},
{
"id": "P2kW-lXiQHY",
"n": null,
"t": "Proteus 9.2 sp1, lo nuevo,  IA mejorada, simula nuevos microcontroladores, GPS mejorado",
"d": "",
"c": [],
"f": "2026-10-25"
},
{
"id": "NWlyid-eeM0",
"n": null,
"t": "(RAE+Claude)  crea tus propias aplicaciones con ingenieria inversa usando Claude como agente de RAE",
"d": "Crea tus propias aplicaciones con ingenieria inversa usano Claude como agente de RAE, funciona para windows, mac, linux, android.",
"c": [],
"f": "2026-10-14"
},
{
"id": "AspJqZMxJJg",
"n": null,
"t": "ESP32, simular en Wokwi, armar circuito con IA, debugger desde VS Code y Wokwi, monitoreal variables",
"d": "",
"c": [
"https://github.com/alcidesramos/ESP32_DEBUUGER_IA"
],
"f": "2026-10-11"
}
]
},
"analizadores-logicos": {
"titulo": "Analizadores lógicos",
"desc": "Instalar y usar analizadores lógicos económicos: el clon de Saleae y el analizador USB WeAct con PulseView.",
"lista": "PLp8IkbtcjNXynw3wwf0xji3odpz0A5DJF",
"videos": [
{
"id": "W9YmGq1XseA",
"n": null,
"t": "Cómo instalar  los Drivers al Analizador Lógico Saleae Clone, o chino. 2023",
"d": "Muestra como instalar los driver al analizador logico chino. Drivers.",
"c": [
"https://drive.google.com/drive/folders/10rJRMCQJTiB8_RuCxghcH3qaKY3LkkhJ?usp=share_link"
],
"f": "2023-03-23"
},
{
"id": "4d1QylkXOSY",
"n": null,
"t": "Primera impresión del Analizador lógico USB WeAct , con PulseView",
"d": "Muestra el funcionamiento básico del Analizador lógico USB WeAct , usando en software PIuseView. link de compra.",
"c": [],
"f": "2025-06-07"
}
]
},
"ponencias": {
"titulo": "Ponencias y charlas",
"desc": "Mis ponencias en universidades de Colombia, México y Perú: sistemas embebidos en lo militar, industrial y aeroespacial, STM32, pantallas Nextion y temas de actualidad.",
"lista": "PLp8IkbtcjNXzMHAGaNFASy-J0TZCf7SPl",
"videos": [
{
"id": "DwAVqh5MXtI",
"n": null,
"t": "Ponencia utb. Introduccion de los sistemas embebidos en aplicaciones aeroespaciales",
"d": "Presentacion.",
"c": [
"https://github.com/alcidesramos/utb_ieee_alcides"
],
"f": "2026-05-14"
},
{
"id": "rb9FiJpyTiQ",
"n": null,
"t": "CHARLA CVR ELECTRÓNICA. Manejo de pantallas HMI Nextion y su control desde microcontroladores",
"d": "Manejando Rasberry PI pico, Microphyton, manejo pantalla Nextion.",
"c": [
"https://www.cvrelectronica.com/downloads/"
],
"f": "2025-04-05"
},
{
"id": "h8u3TBE52LQ",
"n": null,
"t": "Charla universidad  privada del norte peru",
"d": "Charla sobre la electrónica y sistemas embebidos a estudiantes de la UPN.",
"c": [],
"f": "2024-12-07"
},
{
"id": "Kuo80ZvEUTM",
"n": null,
"t": "Charla de adquision de datos analogos desde simulink y pasarlo a Matlab para procesar,  on Arduino",
"d": "Muestra como adquirir datos desde simulink usando arduino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-simulink-arduino-adquisicion"
],
"f": "2023-10-22"
},
{
"id": "UmHmBIZbFwc",
"n": null,
"t": "Microcontrolaodores, precios disparados, escasez",
"d": "Muetsra como los micros radicionales se estan agotando y como hay que migrar y buscar mejores opciones.",
"c": [],
"f": "2023-02-07"
},
{
"id": "q9uBqbgQ66o",
"n": null,
"t": "Probando el chatpgt",
"d": "Muetsra lo positivo y negativo del CAHRGPT.",
"c": [],
"f": "2023-01-07"
},
{
"id": "1Ye2bhGAGlM",
"n": null,
"t": "Ponencia en la universidad privada del norte. Lima peru",
"d": "Sistemas embebidos en el ambito militar e indiustrial actualizado a mis ultimos proyctyos 2021.",
"c": [],
"f": "2022-02-06"
},
{
"id": "AMFr8WGVaY8",
"n": null,
"t": "Ponencia de  algunos de mis desarrollos con  sistemas embebidos",
"d": "Ponencia para el Instituto Tecnológico Nacional de México.",
"c": [],
"f": "2021-06-20"
},
{
"id": "8pQjhEphwJU",
"n": null,
"t": "Charla de microcontroladores STM32, simulación y prática, introducción y modos de programación",
"d": "Muestra como simular los stm32 en proteus, así como los métodos de programación de la tarjetas blue pill y devebox.",
"c": [],
"f": "2021-03-24"
}
]
},
"emulador-gps": {
"titulo": "Mi emulador de GPS",
"desc": "Software propio para emular un GPS desde el PC y probar proyectos sin salir del laboratorio. El código está en GitHub.",
"lista": "PLp8IkbtcjNXwS0pk8Cs6-u-B1S0F2bdFX",
"videos": [
{
"id": "VHORnkREfII",
"n": null,
"t": "Mi propio emulador o simulador de GPS",
"d": "Muestra las funcionalidades de mi emulador o simulador de GPS en el PC software.",
"c": [
"https://github.com/alcidesramos/GPS_ARZ"
]
}
]
},
"reparaciones": {
"titulo": "Mis reparaciones",
"desc": "Reparaciones del día a día explicadas paso a paso, como cambiar el pulsador dañado de un mouse.",
"lista": "PLp8IkbtcjNXwgJ-cFMySsy7JUhYk5KQGq",
"videos": [
{
"id": "ZMCGdHW2M70",
"n": null,
"t": "Jugando al técnico: recuperando mi mouse favorito, cambio de pulsador dañado",
"d": "Muestro proceso de cambio de pulsador de mi mouse favorito.",
"c": []
}
]
},
"iot": {
"titulo": "Internet de las cosas (IoT)",
"desc": "Monitoreo y control en la nube con Ubidots y ThingsBoard usando ESP8266, SIM800 (GPRS) y el módulo DT-06, con STM32, PIC y Arduino. Filtra por microcontrolador.",
"lista": "PLp8IkbtcjNXwN7ZQazriAbMVie5IujzKh",
"videos": [
{
"id": "XiDP4YNlNOQ",
"n": null,
"t": "Internet de las cosas, ESP8266 y Ubidots (monitoreo y control) version con GPS",
"d": "Este video es una adaptacion de los 3 videos de GPRS con el sim800 y ubidot al modulo ESP8266, se recomienda ver esos 3 video anets para enterder mejor este. vidios GPRS.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3021-iot-application-with-esp8266-and-ubidot"
],
"f": "2019-11-15",
"m": [
"PIC"
]
},
{
"id": "ZhE3z-Py8fw",
"n": null,
"t": "ESP8266 monitoreo y control con Ubidots PIC y MikroC",
"d": "Muestra como monitorear y controlar con el esp8266 en ubidots con pic y mikroc. ademas de recibir un correo si hay una alarma.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2518-esp8266-full-control-iot-application-with-pic-and-ubidots"
],
"f": "2018-07-21",
"m": [
"PIC"
]
},
{
"id": "188LTnYOh_U",
"n": null,
"t": "Internet las cosas ESP8266  Ubidots  con PIC y XC8",
"d": "Version mplab xc8 de monitores de variables en la nube con ubidots.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2517-iot-application-with-pic-xc8-and-ubidots"
],
"f": "2018-07-20",
"m": [
"PIC"
]
},
{
"id": "Cgj49ardWgM",
"n": null,
"t": "Ubidots internet de las cosas con SIM800 parte 1 (envio de datos a Ubidots)",
"d": "Muestra como configurar el sim800 con mikroc y enviar datos básicos Ubidot, usando internet de las cosas.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3007-using-sim800-in-gprs-mode-to-send-data-to-ubidots"
],
"f": "2019-11-11",
"m": [
"PIC"
]
},
{
"id": "LEx2WTSTHbo",
"n": null,
"t": "Ubidots internet de las cosas con SIM800 parte 2 (envio de datos de GPS)",
"d": "Muestra como leer un GPS por softawre y mandarlo a Ubidots usando el modulo SIM800.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3008-read-gps-and-send-via-gprs-to-ubidots-with-sim800-module"
],
"f": "2019-11-11",
"m": [
"PIC"
]
},
{
"id": "cfNY4Pfp6GE",
"n": null,
"t": "Ubidots internet de las cosas con SIM800 parte 3 (recibiendo datos Ubidots)",
"d": "Muestra como mandar y recibir datos de Ubidot con SIM800 usando mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3009-full-transmission-and-reception-to-ubidots-using-sim800"
],
"f": "2019-11-11",
"m": [
"PIC"
]
},
{
"id": "0wdl7qWS4F4",
"n": null,
"t": "Clase en vivo de Ubidots",
"d": "Clase en vivo de envío y recibir datos de ubidots.",
"c": [],
"f": "2020-06-29",
"m": [
"General"
]
},
{
"id": "NvYAlp3d0XE",
"n": null,
"t": "Internet  de las cosas con  Ubidots y PIC con MikroC",
"d": "Muestra como monitorear variable analoga y digital remotamente en la nube con Ubidots. con Mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2514-iot-application-with-pic-and-ubidots"
],
"f": "2018-07-19",
"m": [
"PIC"
]
},
{
"id": "7J8XcpBB4Po",
"n": null,
"t": "Internet de las cosas  version Arduino con Ubidots",
"d": "Monitorea variables con Arduino y ubidot.",
"c": [],
"f": "2018-07-20",
"m": [
"Arduino"
]
},
{
"id": "ocliuvPF9bI",
"n": 95,
"t": "DT-06  conexion a Ubidots , IoT internet de las cosas (introducccion",
"d": "Muestra como conectar un modulo DT-06 a Ubidot y crear una aplicación IOT.",
"c": [],
"f": "2025-01-15",
"m": [
"STM32"
]
},
{
"id": "1uXE1RQ3aLg",
"n": 96,
"t": "DT-06  conexion IoT a Ubidots , transmison, recepcion y eventos",
"d": "Muestra como hacer una aplicación Iot con STM32, el mopdulo DT-06 y ubidots.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5868-stm32-dt-06-iot-ubidots"
],
"f": "2025-01-20",
"m": [
"STM32"
]
},
{
"id": "F9JoXDH9YHs",
"n": 149,
"t": "MQTT control y monitoreo IoT con STM32 y ThingsBoard, con el modulo DT-06",
"d": "",
"c": [
"https://github.com/alcidesramos/MQTT_CANAL"
],
"f": "2026-11-11",
"m": [
"STM32"
]
}
],
"filtros": [
"STM32",
"PIC",
"Arduino",
"General"
]
},
"ethernet-wifi": {
"titulo": "Ethernet y WiFi",
"desc": "Conectar microcontroladores a la red: servidor web con ENC28J60, TCP y UDP, ESP8266 con el celular y LabVIEW, la app Virtuino y el módulo DT-06 con STM32. Filtra por microcontrolador.",
"lista": "PLp8IkbtcjNXy8XYNXE0sQsMIQViKW9P8Y",
"videos": [
{
"id": "ZceQSbxVW8M",
"n": null,
"t": "ENC28J60 Mini Servidor WEB PIC O Arduino",
"d": "Muestra la forma de crear una pequeña pagina WEB tanto en PIC como en Arduino. Driver para que proegtus acpete el modulo enc28j60.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2460-basic-web-server-pic",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2461-basic-web-server-arduino"
],
"f": "2018-06-25",
"m": [
"PIC",
"Arduino"
]
},
{
"id": "qYhTd31SNwI",
"n": null,
"t": "Control wifi con el ESP8266, con el celular o LabVIEW, en PIC ( MikroC ) o en Arduino",
"d": "Se crea una red wifi y un servidor con el cual se puede conectar un pc o un celular y controlar un motor y unas luces . Tanto en PIC (con Mikroc )como en Arduino al canal.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2465-pic-esp8266-wifi-server-control-whit-android-or-labview",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2466-arduino-esp8266-wifi-server-control-whit-android-or-labview"
],
"f": "2018-06-29",
"m": [
"PIC",
"Arduino"
]
},
{
"id": "hWpmDe2n-MY",
"n": null,
"t": "Version Arduino ESP8266 control y monitoreo por internet",
"d": "Ver antes la configuracion de ubidots en la versión para PICS. Muestra como monitorear y controlar con el esp8266 en ubidots con Arduino, ademas de recibir un correo si hay una alarma.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2520-esp8266-full-control-iot-application-with-arduino-and-ubidot"
],
"f": "2018-07-21",
"m": [
"PIC",
"Arduino"
]
},
{
"id": "hYOcU9um390",
"n": null,
"t": "Proyecto wifi con ESP8266 con aplicación virtuino y microcontrolador PIC ( parte 1)",
"d": "Primera parte de utilizar la aplicación virtuino con el esp8266 y un Microcontrolador PIC.",
"c": [],
"f": "2020-05-23",
"m": [
"PIC"
]
},
{
"id": "X1BTHDG2UUE",
"n": null,
"t": "Proyecto wifi con ESP8266 con aplicación virtuino y microcontrolador PIC ( parte 2)",
"d": "Segunda parte de utilizar la aplicación virtuino con el ESP8266 y un Microcontrolador PIC. código del micro, como decodificar la trama.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3787-how-to-use-the-virtuino-app-with-an-esp8266-a-pic18f-and-mik"
],
"f": "2020-05-23",
"m": [
"PIC"
]
},
{
"id": "1VRh2rfImTo",
"n": null,
"t": "Clase en vivo de ethernet, TCP, UDP  servidor remoto, aplicado a micro  y app en celular",
"d": "Descargales.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3809-tcp-with-pic-microcontroller-and-virtuino-ans-tcp-udp-contro"
],
"f": "2020-06-08",
"m": [
"General"
]
},
{
"id": "-oE1FX3SCN8",
"n": 84,
"t": "DT-06  y virtuino, introduccion",
"d": "Muestra como conectar virtuino al DT-06.",
"c": [],
"f": "2024-12-19",
"m": [
"STM32"
]
},
{
"id": "wr8bERStB18",
"n": 91,
"t": "DT-06  monitoreo wifi con el celular y la app virtuino",
"d": "Muestra como monitorear con el celular por WIFI una variables análoga y una digital con el STM3232, utilizando el modulo dt-06 y la aplicación virtuino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5864-stm32-dt-06-wifi-monitor-with-virtuino-app"
],
"f": "2025-01-06",
"m": [
"STM32"
]
},
{
"id": "xxtGwx7lNqs",
"n": 92,
"t": "DT-06  monitoreo wifi LabVIEW TCP cliente",
"d": "Muestra como monitorear con Labview datos enviados desde el stm32 usando el modulo WIFI DT-06.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5865-stm32-dt-06-labiew-tcp-client-monitor"
],
"f": "2025-01-06",
"m": [
"STM32"
]
},
{
"id": "fwqgzvHZUZs",
"n": 93,
"t": "DT-06  control y monitoreo por wifi app virtuino",
"d": "Muestra como, con un STM32 monitorear y controlar por WIFi usando la aplicación virtuino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5866-stm32-wifi-control-and-monitor-using-virtuino-app"
],
"f": "2025-01-14",
"m": [
"STM32"
]
},
{
"id": "7MSqoRguaTw",
"n": 94,
"t": "DT-06  control y monitoreo por wifi con LabVIEW",
"d": "Muestra como controlar y monitorear con un stm32 con wifi y labview usando el DT-06.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5867-stm32-dt-06-labview-monitor-and-control"
],
"f": "2025-01-14",
"m": [
"STM32"
]
},
{
"id": "ocliuvPF9bI",
"n": 95,
"t": "DT-06  conexion a Ubidots , IoT internet de las cosas (introducccion",
"d": "Muestra como conectar un modulo DT-06 a Ubidot y crear una aplicación IOT.",
"c": [],
"f": "2025-01-15",
"m": [
"STM32"
]
},
{
"id": "1uXE1RQ3aLg",
"n": 96,
"t": "DT-06  conexion IoT a Ubidots , transmison, recepcion y eventos",
"d": "Muestra como hacer una aplicación Iot con STM32, el mopdulo DT-06 y ubidots.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5868-stm32-dt-06-iot-ubidots"
],
"f": "2025-01-20",
"m": [
"STM32"
]
}
],
"filtros": [
"STM32",
"PIC",
"Arduino",
"General"
]
},
"electronica-analoga": {
"titulo": "Electrónica análoga",
"desc": "Filtros activos con operacionales, saturación de transistores y Darlington, conmutación de MOSFET, fuentes conmutadas buck y fuentes sin transformador.",
"lista": "PLp8IkbtcjNXwt_zo57WFZKCJ3UUFh6U_-",
"videos": [
{
"id": "L_YLPnMz4O0",
"n": null,
"t": "Diseño de filtros activos con operacionales de forma sencilla",
"d": "Muestra la forma de como diseñar filtros tipo buterworth, hasta grado 10 con operacionales.",
"c": [
"https://github.com/alcidesramos/filtros2020",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3742-easy-design-of-analog-filters"
],
"f": "2020-04-29"
},
{
"id": "tKfLp5oQLuo",
"n": null,
"t": "Diseño de filtro pasabanda de banda angosta",
"d": "Muestra una forma práctica y fácil de diseñar filtros pasabanda de banda angosta.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3743-narrow-band-filter-design"
],
"f": "2020-04-30"
},
{
"id": "Cfx_Yiz65t4",
"n": null,
"t": "Clase de saturación de transistores de manera práctica, uso de darlintong",
"d": "Muestra, la importancia de la saturación y como garantizarla, y aplicabilidad de la misma.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3879-how-to-guarantee-saturation-in-circuits-with-microcontroller"
],
"f": "2020-08-19"
},
{
"id": "VSpzVmsOD1Y",
"n": null,
"t": "Conmutación de MOSFET con circuitos microcontrolados. Parte 1analisis de disipación de temperatura",
"d": "Muestra las diferentes opciones y configuraciones de un Mosfet de Canal N para ser usado en circuitos microcontrolados.",
"c": [],
"f": "2020-09-17"
},
{
"id": "vJhSSLljL8E",
"n": null,
"t": "Conmutación de MOSFET con circuitos microcontrolados. Parte 2 Conexión con el micro",
"d": "Muestras las recomendaciones cuando el micro ya genera los pulsos PWM.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3920-pic12f1822-low-frequency-mosfet-switching-using-internal-osc"
],
"f": "2020-09-21"
},
{
"id": "3PcUXzmq1Yg",
"n": null,
"t": "Introducción básica  a fuentes conmutadas tipo buck. Control con microcontrolador",
"d": "Muestra el funcionamiento de una fuente conmutada tipo buck y el uso de un microcontrolador para su control.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4213-using-a-microcontroller-to-control-buck-type-switching-sourc"
],
"f": "2020-12-23"
},
{
"id": "YMiLadjTMY0",
"n": null,
"t": "Amplificador operacional, porque usarlo como seguidor de voltaje, y tecnologia rail to rail",
"d": "Enseña, como usar un operacional como seguidor, da un ejemplo practico, de un convertidor de 4ma -20ma a 0-5V. y explica la tecnología rail to rail.",
"c": [],
"f": "2021-05-01"
},
{
"id": "aYBRjhiPVk4",
"n": null,
"t": "Diseño de una fuente sin transformador óptima",
"d": "Muestra los elementos, y consideraciones de diseño para una buena fuente sin transformador. útil para alimentar circuitos microcontrolados de bajo consumo.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4511-design-of-a-transformerless-source-for-circuits-with-microco"
],
"f": "2021-06-05"
},
{
"id": "2S8IXfP33io",
"n": null,
"t": "Como colocar el Beta y el VBE a un transitor en Proteus",
"d": "Muestra la forma de simualr ejercios en proteus para detectar si un transiostor esta en corte, saturación o zona activa.",
"c": [],
"f": "2021-07-27"
}
]
},
"conceptos-electronica": {
"titulo": "Conceptos de electrónica",
"desc": "Fundamentos que conviene tener claros: tipos de variables en C para STM32 y el teorema de muestreo de Nyquist-Shannon explicado y simulado.",
"lista": "PLp8IkbtcjNXyYsZwiCE0MGL1POapfX2SW",
"videos": [
{
"id": "zRcuzKlvKc0",
"n": null,
"t": "Conceptos basicos de programacion en C++, tipos de variables usadas en STM32CubeIDE",
"d": "Muestra los tipos de variables usadas en stm32cubeide y la importancia de saber definilas correctamente.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5179-analyzing-stm32cubeid-variable-types"
]
},
{
"id": "lD3-5zNYCpQ",
"n": null,
"t": "Teorema de Muestreo de Nyquist-Shannon, Explicación teórico simulada",
"d": "Explica la teoria y demuestra simuladamente el teorema de Nyquist-Shannon.",
"c": []
}
]
},
"modulos-bluetooth": {
"titulo": "Módulos Bluetooth",
"desc": "El módulo JDY-33 en Proteus con mis librerías, sus comandos AT, y cómo crear un puerto COM entre el celular y el PC.",
"lista": "PLp8IkbtcjNXyY78QEAz5f7GpAhONqZdbd",
"videos": [
{
"id": "X7KoHOqptzU",
"n": null,
"t": "Conociendo el modulo bluetooth JDY-33 , bueno, bonito y barato. LIBRERIAS PARA PROTEUS",
"d": "Muestra como usar el modulo JDY-33 en proteus. entrego mis liberias de proteus. Librerias.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-jdy-33-bluetooth"
],
"f": "2024-04-09"
},
{
"id": "FSVhB44mj1Q",
"n": null,
"t": "Cambiando parametros al el modulo bluetooth JDY-33, Usando comandos AT",
"d": "Muestra como ca,biarle el nombre el modulo bluetooh JDY-33.",
"c": [],
"f": "2024-04-11"
},
{
"id": "9NI70szBHgE",
"n": null,
"t": "Tip para conectar el celular al pc por bluetooth y crear un puerto com",
"d": "Muestra como comunicar el celualr por puerto serial com con el computador.",
"c": [],
"f": "2024-04-26"
}
]
},
"matlab": {
"titulo": "MATLAB y Simulink",
"desc": "Control y adquisición de datos con MATLAB: PID discreto, identificación de plantas, PID Tuner, lógica difusa, App Designer, Simulink con STM32 y Arduino, y generación de código C.",
"lista": "PLp8IkbtcjNXzC-yJTubPaGedwlFREPmd_",
"videos": [
{
"id": "XiXiKZC5KaM",
"n": null,
"t": "Utilizar el Embedded C code de Matlab, Para crear funciones en C para Microcontroladores",
"d": "Muestra como convertir una funciones de Simulink, o Matlab a lenguaje C o C++ para ser usadas en cualquier Microcontrolador.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3833-how-use-the-matlab-embedded-code-and-mikroc"
],
"f": "2020-07-04"
},
{
"id": "NMEPg8ohzbk",
"n": null,
"t": "PID discreto con MikroC, sintonización PID Matlab",
"d": "Muestra como como tomar datos de un sistema con labview, identificarlo con matlab, diseñar el PID en Matlab e implementarlo en mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2645-identification-of-models-and-pid-tuning-with-matlab-labview-"
],
"f": "2018-11-08"
},
{
"id": "LRiqppeqUO4",
"n": null,
"t": "Generador de onda seno  pura a 60hz por PWM",
"d": "Muestra como usar el modulo PWM para generar una señal de seno de 60HZ , que se puede usar para generador de señales o inversores de dc a AC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2697-60hz-pure-sine-wave-with-pwm-module-for-dc-to-ac-inverter"
],
"f": "2018-12-14"
},
{
"id": "-DfV0pcxzk8",
"n": null,
"t": "MPLAB XC8 generador de onda seno pura a 60hz por PWM",
"d": "VERSION EN MPLAB XC8 DE Muestra como usar el modulo PWM para generar una señal de seno de 60HZ , que se puede usar para generador de señales o inversores de dc a AC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2698-mplab-xc8-version-of-60hz-pure-sine-wave-with-pwm-module-for"
],
"f": "2018-12-16"
},
{
"id": "v1YwXrSGGNw",
"n": null,
"t": "Simualción del algoritmo de evasión",
"d": "",
"c": [],
"f": "2021-07-18"
},
{
"id": "3a4sqPcOG_A",
"n": null,
"t": "Leer datos serial y graficar con  Matlab app designer",
"d": "Muestra como leer datos seriales con Matlab y graficarlos video anterior.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-matlab-app-designer-serial"
],
"f": "2022-10-30"
},
{
"id": "PHNhqPFJjCk",
"n": null,
"t": "Leer varios datos serial y graficar con  Matlab app designer",
"d": "Muestra como obtener varios datos del puerto serial en matlab y graficarlos usando app designer.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-matlab-app-designer-serial"
],
"f": "2023-03-23"
},
{
"id": "pOJnhdfs8QI",
"n": 62,
"t": "Programando desde Matlab parte i. Instalacion librerias",
"d": "Muestra que configurar, y descargar para programar los stm32 desde simulink. Link.",
"c": [
"https://drive.google.com/drive/folders/1DxScgv7ib6hp_NljIYXcjH34MO8GdEtQ?usp=sharing"
],
"f": "2023-08-28"
},
{
"id": "pGZVnWD4wnw",
"n": 63,
"t": "Programando desde Matlab parte 2. Simulacion en Proteus",
"d": "Muestra como compilar un STM32 en simulink y hacer el .hex para simularlo en proteus.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5443-matlab-simulink-stm32-proteus-simulation"
],
"f": "2023-08-28"
},
{
"id": "6YMDPgMlVKA",
"n": 64,
"t": "Programando desde Matlab parte 3. Programacion ST-Link v2, blackpill",
"d": "Muestra como cargar a la black pill el codigo generado desde matlab de forma directa.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5444-simulink-build-and-programmer-stm32-wiht-st-link-v2"
],
"f": "2023-08-28"
},
{
"id": "0pXdLnRqC80",
"n": null,
"t": "STM32 clase en vivo, control on off con Matlab y la blackpill",
"d": "Muestra como hacer un control on off, con matlab y la black pill.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5452-on-off-control-with-matlab-and-stm32"
],
"f": "2023-09-06"
},
{
"id": "Kuo80ZvEUTM",
"n": null,
"t": "Charla de adquision de datos analogos desde simulink y pasarlo a Matlab para procesar,  on Arduino",
"d": "Muestra como adquirir datos desde simulink usando arduino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-simulink-arduino-adquisicion"
],
"f": "2023-10-22"
},
{
"id": "F28q5Wqq-uk",
"n": null,
"t": "Usando Matlab para un controlador difuso",
"d": "Muestra como configurar con las nuevas herramientas de matlab un controlaodr difuso.",
"c": [],
"f": "2024-03-14"
},
{
"id": "OwR_AXDrUYs",
"n": null,
"t": "Usando LabVIEW para tomar datos de una planta de factory io e identificarla despues con Matlab",
"d": "Digos: Factory io.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5691-example-how-use-matlab-and-labview-with-factory-io",
"https://drive.google.com/drive/folders/1wImYl9GO2fnLhCkCdgftG6uehYXUP_fw?usp=sharing"
],
"f": "2024-03-28"
},
{
"id": "jl0b63mCuoQ",
"n": null,
"t": "PID tuner con Matlab, aplicado a una planta simulada en factory io e implementado en LabVIEW",
"d": "Usa la Herramienta PID Tuner de Matlab, para sintonizar un PID en LAbview y aplicarlo a una planta simulada en Factory IO. Factory io.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5691-example-how-use-matlab-and-labview-with-factory-io",
"https://drive.google.com/drive/folders/1wImYl9GO2fnLhCkCdgftG6uehYXUP_fw?usp=sharing"
],
"f": "2024-03-28"
},
{
"id": "HDwl-Rn8-HY",
"n": null,
"t": "Matlab 3d evasion de obtaculos",
"d": "",
"c": [],
"f": "2024-09-07"
},
{
"id": "R3MppyNEEbU",
"n": 117,
"t": "Capitulo 4 control motor DC. Matlab identificacion de la planta y PID tuner",
"d": "Muestra como graficar datos en Matlab, a una respuesta pulso y usar el PID tuner para identificación de la planta y sintonización.",
"c": [
"https://github.com/alcidesramos/Identificacion_PID1",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-identificacion-pid-1"
],
"f": "2025-06-03"
},
{
"id": "TBlBqf17pjU",
"n": 118,
"t": "Capitulo 5 sintonizacion PID con datos de entrada y salida, Matlab",
"d": "Muestra como identificar una planta y sintonizar un PID con Matlab usando PID Turner basado en los datos de entrada y salida del sistema.",
"c": [
"https://github.com/alcidesramos/Identificacion_PID2",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-identificacion-pid-2"
],
"f": "2025-06-03"
}
]
},
"control-automatico": {
"titulo": "Control automático",
"desc": "Control on-off, PID de velocidad y posición, lógica difusa, identificación de plantas y PID Tuner en MATLAB, Modbus TCP con Factory IO y el curso de control de motor DC con STM32. Filtra por microcontrolador.",
"lista": "PLp8IkbtcjNXy_RBtFGoaSEFyGVroxCsym",
"videos": [
{
"id": "EBw3giRaSM8",
"n": null,
"t": "Control de velocidad ( PID ) de un motor DC con PIC y MPLAB XC8",
"d": "Muestra la versión en xc8 de la clase de controladores dictada con PIC y MIKROC.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2921-speed-control-of-a-dc-motor-with-pid-mplab-xc8-version"
],
"f": "2019-07-24",
"m": [
"PIC"
]
},
{
"id": "IDLiubs_rc4",
"n": null,
"t": "Control PID de velocidad en un motor DC con Arduino",
"d": "Muestra como controlar la velocidad de un motor dc con arduino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2920-three-ways-to-control-the-speed-in-a-dc-motor-and-a-microcon"
],
"f": "2019-07-23",
"m": [
"PIC",
"Arduino"
]
},
{
"id": "GIXf9iQn5lM",
"n": null,
"t": "Control de velocidad de un motor DC, clase de control on-off  PID, con microcontrolador PIC y MikroC",
"d": "Muestra como hacer un control de velocidad con pic, usando diferentes técnica. el control esta en revoluciones por segundo, si se quieren tener RPM solo es escalar multiplicando la…",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2920-three-ways-to-control-the-speed-in-a-dc-motor-and-a-microcon"
],
"f": "2019-07-23",
"m": [
"PIC"
]
},
{
"id": "NMEPg8ohzbk",
"n": null,
"t": "PID discreto con MikroC, sintonización PID Matlab",
"d": "Muestra como como tomar datos de un sistema con labview, identificarlo con matlab, diseñar el PID en Matlab e implementarlo en mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2645-identification-of-models-and-pid-tuning-with-matlab-labview-"
],
"f": "2018-11-08",
"m": [
"PIC"
]
},
{
"id": "G0Hv7S9KyLQ",
"n": null,
"t": "Control de posicion  con PID de un motor DC con encoder de cuadratura con MikroC",
"d": "Muestra como controlar la posición de un motor dc, usando un PID y un encoder de cuadratura. con Mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/1824-pid-position-control-with-quadrature-encoder"
],
"f": "2018-07-18",
"m": [
"PIC"
]
},
{
"id": "09nxV4Wegmo",
"n": null,
"t": "Seguidor de linea Rapido",
"d": "This is a car with PID controller programming in mikroc pro for dspic. this is a fast line follower. this can use fuzzy controller o PD controller.",
"c": [],
"f": "2015-01-14",
"m": [
"PIC"
]
},
{
"id": "q0Q4whGLIVs",
"n": null,
"t": "Implementación de un control difuso con mikroc  en un pic 18f",
"d": "Muestra como usar Xfuzzy para implementar un controlador fuzzy, en un pic18f en mikroc. Logica difusa, o fuzzy logic mikroc en microcontrolaodre pic.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2651-implementation-of-a-temperature-fuzzy-logic-control-in-pic18"
],
"f": "2018-11-11",
"m": [
"PIC"
]
},
{
"id": "2Cz3NnE00_o",
"n": null,
"t": "Dimmer control de energia carga AC  PIC ( con MikroC ) o Arduino",
"d": "Con mikroc para pic Aclaro el timer del pic esta con preescalador de 256 no de 32 como menciono en el video. después lo edito con mas calma.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2453-ac-power-control-zero-crossing-detection-ac-dimming",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2454-arduino-ac-power-control-zero-crossing-detection-ac-dimming"
],
"f": "2018-06-18",
"m": [
"PIC",
"Arduino"
]
},
{
"id": "XiDP4YNlNOQ",
"n": null,
"t": "Internet de las cosas, ESP8266 y Ubidots (monitoreo y control) version con GPS",
"d": "Este video es una adaptacion de los 3 videos de GPRS con el sim800 y ubidot al modulo ESP8266, se recomienda ver esos 3 video anets para enterder mejor este. vidios GPRS.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3021-iot-application-with-esp8266-and-ubidot"
],
"f": "2019-11-15",
"m": [
"PIC"
]
},
{
"id": "ZhE3z-Py8fw",
"n": null,
"t": "ESP8266 monitoreo y control con Ubidots PIC y MikroC",
"d": "Muestra como monitorear y controlar con el esp8266 en ubidots con pic y mikroc. ademas de recibir un correo si hay una alarma.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2518-esp8266-full-control-iot-application-with-pic-and-ubidots"
],
"f": "2018-07-21",
"m": [
"PIC"
]
},
{
"id": "hWpmDe2n-MY",
"n": null,
"t": "Version Arduino ESP8266 control y monitoreo por internet",
"d": "Ver antes la configuracion de ubidots en la versión para PICS. Muestra como monitorear y controlar con el esp8266 en ubidots con Arduino, ademas de recibir un correo si hay una alarma.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2520-esp8266-full-control-iot-application-with-arduino-and-ubidot"
],
"f": "2018-07-21",
"m": [
"PIC",
"Arduino"
]
},
{
"id": "luy1GabQKeQ",
"n": null,
"t": "Control actuadores industrial por Modbus TCP , usando ESP8266 , con PIC y factory io. MikroC",
"d": "Muestra como controlar actuadores industriales usando el protocolo Modbus TCP, implementado en un pic y usando el modulo esp8266. simulado en factory IO.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4249-implementation-of-the-modbus-protocol-in-pic-using-the-esp82"
],
"f": "2021-01-11",
"m": [
"PIC"
]
},
{
"id": "vOe0HFUlLRc",
"n": null,
"t": "Control de factory io con LabVIEW usando Modbus TCP server",
"d": "Muestra como usar labview para controlar procesos en factory IO.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4242-process-control-in-factory-io-using-labview-modbus-tcp-serve"
],
"f": "2021-01-06",
"m": [
"General"
]
},
{
"id": "5Ke62NibMcs",
"n": null,
"t": "Interfazar Microsoft flight Simulator con Labview",
"d": "Muestra la forma de controlar el Microsoft flight simulator con otras aplicaciones, en este caso labview, po que permitirá hacer autopilotos, sillas simuladores de asiento de piloto,…",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4325-interface-labview-with-microsoft-flight-simulator"
],
"f": "2021-02-27",
"m": [
"General"
]
},
{
"id": "eBBdbO4J2Rs",
"n": null,
"t": "Como expadir más canales analogos a un PLC utilizando multiplexores",
"d": "Muestra como usar multiplexores de baja resistencia ON para expandir las capacidades analogas de un PLC.",
"c": [],
"f": "2021-08-02",
"m": [
"General"
]
},
{
"id": "lD3-5zNYCpQ",
"n": null,
"t": "Teorema de Muestreo de Nyquist-Shannon, Explicación teórico simulada",
"d": "Explica la teoria y demuestra simuladamente el teorema de Nyquist-Shannon.",
"c": [],
"f": "2024-03-13",
"m": [
"General"
]
},
{
"id": "e3xjO8hn7ME",
"n": null,
"t": "Usando LabVIEW para un controlador difuso",
"d": "Muestra como configurar los controlaodres difusos en Labview.",
"c": [],
"f": "2024-03-13",
"m": [
"General"
]
},
{
"id": "F28q5Wqq-uk",
"n": null,
"t": "Usando Matlab para un controlador difuso",
"d": "Muestra como configurar con las nuevas herramientas de matlab un controlaodr difuso.",
"c": [],
"f": "2024-03-14",
"m": [
"General"
]
},
{
"id": "OwR_AXDrUYs",
"n": null,
"t": "Usando LabVIEW para tomar datos de una planta de factory io e identificarla despues con Matlab",
"d": "Digos: Factory io.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5691-example-how-use-matlab-and-labview-with-factory-io",
"https://drive.google.com/drive/folders/1wImYl9GO2fnLhCkCdgftG6uehYXUP_fw?usp=sharing"
],
"f": "2024-03-28",
"m": [
"General"
]
},
{
"id": "jl0b63mCuoQ",
"n": null,
"t": "PID tuner con Matlab, aplicado a una planta simulada en factory io e implementado en LabVIEW",
"d": "Usa la Herramienta PID Tuner de Matlab, para sintonizar un PID en LAbview y aplicarlo a una planta simulada en Factory IO. Factory io.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5691-example-how-use-matlab-and-labview-with-factory-io",
"https://drive.google.com/drive/folders/1wImYl9GO2fnLhCkCdgftG6uehYXUP_fw?usp=sharing"
],
"f": "2024-03-28",
"m": [
"General"
]
},
{
"id": "AtF293UuzXk",
"n": 71,
"t": "Obtencion  de la curva caracteristica de un motor DC",
"d": "Muestra como obtenr con labview la curva caracteristica de un motor DC. Video anterior.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5714-stm32-curve-of-dc-motor-with-labview"
],
"f": "2024-05-06",
"m": [
"STM32"
]
},
{
"id": "RTduyquKRUg",
"n": 75,
"t": "Librerias control de  motores paso paso. Usando LabVIEW",
"d": "Muestra como usar mis librerias de motor paso paso, para stm32, usando interrupicones y control por puerto serial con Labview.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5763-stm32-stepper-motor-control-with-labview"
],
"f": "2024-07-24",
"m": [
"STM32"
]
},
{
"id": "NRudNTw0RFM",
"n": 114,
"t": "Capitulo 1 control motor DC.  Control a lazo abierto",
"d": "Muestra como controlar la velocidad de un motor dc a lazo abierto Explicacion detallada librerias de PWM y Frecuencia.",
"c": [
"https://github.com/alcidesramos/LAZO_ABIERTO",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-control-motor-dc"
],
"f": "2025-06-02",
"m": [
"STM32"
]
},
{
"id": "Chyq1VGmcv8",
"n": 115,
"t": "Capitulo 2 control motor DC. Tiempo de muestreo del sistema de control",
"d": "Muestra como seleccionar y establecer un tiempo de muestreo preciso en el sistema de control.",
"c": [
"https://github.com/alcidesramos/CONTROL_MOTOR_MUESTREO",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-control-motor-muestreo"
],
"f": "2025-06-02",
"m": [
"STM32"
]
},
{
"id": "twqMAYntxLo",
"n": 116,
"t": "Capitulo 3 control motor DC. Adquisicion y grafica de los datos",
"d": "Muestra como adecuar la entrada y salida del sistema y graficarlas en serial osciloscopio y en Teleplot para posterior identificación.",
"c": [
"https://github.com/alcidesramos/ADQUISION",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-motor-adquisicion"
],
"f": "2025-06-03",
"m": [
"STM32"
]
},
{
"id": "R3MppyNEEbU",
"n": 117,
"t": "Capitulo 4 control motor DC. Matlab identificacion de la planta y PID tuner",
"d": "Muestra como graficar datos en Matlab, a una respuesta pulso y usar el PID tuner para identificación de la planta y sintonización.",
"c": [
"https://github.com/alcidesramos/Identificacion_PID1",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-identificacion-pid-1"
],
"f": "2025-06-03",
"m": [
"STM32"
]
},
{
"id": "TBlBqf17pjU",
"n": 118,
"t": "Capitulo 5 sintonizacion PID con datos de entrada y salida, Matlab",
"d": "Muestra como identificar una planta y sintonizar un PID con Matlab usando PID Turner basado en los datos de entrada y salida del sistema.",
"c": [
"https://github.com/alcidesramos/Identificacion_PID2",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/drive-stm32-identificacion-pid-2"
],
"f": "2025-06-03",
"m": [
"STM32"
]
},
{
"id": "E2Nal6-5vE0",
"n": null,
"t": "Tests del lplidar c1 con el software slamtec robostudio, mapeo",
"d": "Ra un mapeo con el LPLIDAR.",
"c": [],
"f": "2025-06-24",
"m": [
"General"
]
},
{
"id": "VHORnkREfII",
"n": null,
"t": "Mi propio emulador o simulador de GPS. Alcides ramos, arz",
"d": "Muestra las funcionalidades de mi emulador o simulador de GPS en el PC software.",
"c": [
"https://github.com/alcidesramos/GPS_ARZ"
],
"f": "2026-04-06",
"m": [
"General"
]
}
],
"filtros": [
"STM32",
"PIC",
"Arduino",
"General"
]
},
"labview": {
"titulo": "LabVIEW",
"desc": "Interfaces en LabVIEW para microcontroladores: comunicación serial full duplex, USB HID, WiFi, Modbus TCP y RS485, Factory IO, Xbee, Fourier, motores paso a paso y LabVIEW Robotics. Filtra por microcontrolador.",
"lista": "PLp8IkbtcjNXzUbjs19tg2kMgXjGbgm3zB",
"videos": [
{
"id": "jhkr68V5d-8",
"n": null,
"t": "Utilizando LabVIEW para análisis de fourier caso practico",
"d": "Muestra como hacer el análisis de fourier con labview, y filtra para sacar información de audio.",
"c": [],
"f": "2018-09-18",
"m": [
"General"
]
},
{
"id": "FGSxT7zrmlw",
"n": null,
"t": "Transmision ordenes serial en Labview",
"d": "Muestra como mandar ordenes seriales, desde labview para poteriormente poder ser procesadas por microcontrolador. es el software usado en el video.",
"c": [],
"f": "2018-06-01",
"m": [
"General"
]
},
{
"id": "zoozToj7avY",
"n": null,
"t": "LabVIEW comunicacion full duplex con microcontroladores PIC ( MikroC ) o Arduino",
"d": "Muestra como mandar y recibir al tiempo comandos seriales desde labview aqui el video del programa en PIC (Con Mikroc ) y Arduino.",
"c": [],
"f": "2018-06-01",
"m": [
"PIC",
"Arduino"
]
},
{
"id": "cUj6RLzdsSQ",
"n": null,
"t": "Comunicación Full Duplex PIC - Labview mplax xc8",
"d": "Muestra como hacer una comunicación full duplex en xc8.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2449-full-duplex-communucation-xc8-version"
],
"f": "2018-06-14",
"m": [
"PIC"
]
},
{
"id": "qYhTd31SNwI",
"n": null,
"t": "Control wifi con el ESP8266, con el celular o LabVIEW, en PIC ( MikroC ) o en Arduino",
"d": "Se crea una red wifi y un servidor con el cual se puede conectar un pc o un celular y controlar un motor y unas luces . Tanto en PIC (con Mikroc )como en Arduino al canal.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2465-pic-esp8266-wifi-server-control-whit-android-or-labview",
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2466-arduino-esp8266-wifi-server-control-whit-android-or-labview"
],
"f": "2018-06-29",
"m": [
"PIC",
"Arduino"
]
},
{
"id": "EqzsF5r2hyA",
"n": null,
"t": "Introducción básica a LabVIEW",
"d": "Muestras conceptos generales e introductorios de LABVIEW.",
"c": [],
"f": "2018-08-12",
"m": [
"General"
]
},
{
"id": "ezllZGu8duI",
"n": null,
"t": "Labview  lectura por USB-HID, mikroc HID",
"d": "Muestra como usar labview para leer datos por usb usando el modo HID, sin drivers.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2619-labview-daq-read-mikroc-hid-write"
],
"f": "2018-10-25",
"m": [
"PIC"
]
},
{
"id": "LutUbhv0ul8",
"n": null,
"t": "Labview, enviar datos via USB HID a mikroc con pic 18f2550",
"d": "Muestra como leer datos via USB-HID desde mikroc , enviados desde labview.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2620-labview-daq-write-mikroc-hid-read"
],
"f": "2018-10-26",
"m": [
"PIC"
]
},
{
"id": "7yWnq-vczDc",
"n": null,
"t": "Tips de configuración de visa en LabVIEW para evitar errores",
"d": "Muestra como se habilita la opción en labview de automáticamente cerrar las secciones VISA y así prevenir errores con el puerto.",
"c": [],
"f": "2019-09-01",
"m": [
"General"
]
},
{
"id": "Xz9o_lKAB44",
"n": null,
"t": "Tips para adquisición serial a alta velocidad en windows",
"d": "Muestra como disminuir la latencia, en la adquisición de datos de alta velocidad en windows.",
"c": [],
"f": "2019-09-01",
"m": [
"General"
]
},
{
"id": "E1P_K4l5PR0",
"n": null,
"t": "Usando LabVIEW para conectarse a Ubidots",
"d": "Muestra como probar con un terminar tcp como hercules y con un programa desarrollado en labview la plataforma realizada en ubidots.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3019-labview-iot-application-with-ubidots"
],
"f": "2019-11-14",
"m": [
"General"
]
},
{
"id": "9eL6wkd1Jws",
"n": null,
"t": "Tips para la sincronizacion de datos entre LabVIEW y un micro comunicacon serial full duplex",
"d": "Muestra como mejorar la cominucación entre labview y un pic. Aquí la primera versión donde se explica mas detallado el código.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3719-tips-to-improve-the-synchronization-between-labview-and-a-pi"
],
"f": "2020-04-16",
"m": [
"PIC"
]
},
{
"id": "3QmteyAhNMY",
"n": null,
"t": "Control motor paso a paso con LabVIEW y MPLAB XC8",
"d": "Muestra como manejar dos motores paso a paso, mediante Labview dándole ordenes seriales al micro, realizado en MPLAB XC8.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2544-mplab-xc8-version-stepper-motor-control-with-labiew"
],
"f": "2018-08-09",
"m": [
"PIC"
]
},
{
"id": "r7_ir2T66aI",
"n": null,
"t": "Arduino control de motores paso a paso con LabVIEW",
"d": "Usa interrupciones para controlar un motor paso a paso recibiendo ordenes desde Labview.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2542-arduino-version-stepper-motor-control-with-labiew"
],
"f": "2018-08-08",
"m": [
"Arduino"
]
},
{
"id": "pc_wWSc9YeU",
"n": null,
"t": "Control motor paso a paso con LabVIEW y MikroC",
"d": "Muestra como manejar dos motores paso a paso, mediante Labview dándole ordenes seriales al micro, realizado en mikroc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2541-stepper-motor-control-with-labiew"
],
"f": "2018-08-07",
"m": [
"PIC"
]
},
{
"id": "sXBpBc2N3tY",
"n": null,
"t": "Clase en vivo, de comunicación serial entre DSPIC y LABVIEW",
"d": "Muestra como comunicar y controlar variables leídas en un DSPIC en LABVIEW.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/3926-seria-lcommunication-between-a-dspic-and-labview"
],
"f": "2020-09-23",
"m": [
"PIC"
]
},
{
"id": "syn2PI67oz4",
"n": null,
"t": "Clase introductoria de comunicación serial con LabVIEW",
"d": "Muestra programas comunicación serial básicos y configuración Básica de Recepción serial en Labview.",
"c": [],
"f": "2020-09-04",
"m": [
"General"
]
},
{
"id": "7OM9b6TPYsw",
"n": null,
"t": "Clase introductoria de comunicación serial con LabVIEW",
"d": "Muestra programas comunicación serial básicos y configuración Básica de Recepción serial en Labview.",
"c": [],
"f": "2020-09-04",
"m": [
"General"
]
},
{
"id": "1h96EIpcm0U",
"n": null,
"t": "Clase en vivo de transmisión serial y  bluetooth con PIC, LabVIEW y bluetooth electronics",
"d": "Conceptos de comunicación serial en micro controladores.",
"c": [],
"f": "2020-09-11",
"m": [
"PIC"
]
},
{
"id": "lFcadOVo5hk",
"n": null,
"t": "Clase en vivo en comunicación serial, con MikroC, LabVIEW y uso de la aplicación bluetoothelectronic",
"d": "",
"c": [],
"f": "2020-09-11",
"m": [
"PIC"
]
},
{
"id": "MQZpdFdaseY",
"n": null,
"t": "Clase en vivo de recpecion serial, en PIC modo bloqueante, con MikroC, y transmisión con LabVIEW",
"d": "",
"c": [],
"f": "2020-09-19",
"m": [
"PIC"
]
},
{
"id": "B4rzbnTWMbk",
"n": null,
"t": "Recepcion serial LabVIEW",
"d": "",
"c": [],
"f": "2020-09-21",
"m": [
"General"
]
},
{
"id": "PwZoVnuykaQ",
"n": null,
"t": "Usar un control  USB con Labview y Xbee, para manejar remotamente un buque a escala. Parte 1",
"d": "Muestra como configurar y decodificar los botones de un control USB para ser usado en labvuew y posteriormente mandar esa información en forma remota.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4112-control-a-joystick-with-labview"
],
"f": "2020-11-14",
"m": [
"General"
]
},
{
"id": "7wKW4qd9fhk",
"n": null,
"t": "Usar un control USB con Labview y Xbee, para manejar remotamente un buque a escala. Parte 2",
"d": "Muestra como armar la trama para posterior mente ser enviada inalámbricamente al micro.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4112-control-a-joystick-with-labview"
],
"f": "2020-11-27",
"m": [
"General"
]
},
{
"id": "H_2Kxf2Jjtk",
"n": null,
"t": "Usar un control USB con Labview y Xbee, para manejar remotamente un buque a escala. Parte 3",
"d": "Muestra como armar la trama para posterior mente ser enviada inalámbricamente al micro. CLASE DE PWM.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4112-control-a-joystick-with-labview"
],
"f": "2020-12-12",
"m": [
"General"
]
},
{
"id": "CVQEfpozA-4",
"n": null,
"t": "Usar un control USB con Labview y Xbee, para manejar remotamente un buque a escala. Parte 3.1  PIC18",
"d": "Muestra como armar la trama para posterior mente ser enviada inalámbricamente al micro pic18f.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4190-control-a-joystick-with-labview-and-pic18f"
],
"f": "2020-12-13",
"m": [
"PIC"
]
},
{
"id": "vOe0HFUlLRc",
"n": null,
"t": "Control de factory io con LabVIEW usando Modbus TCP server",
"d": "Muestra como usar labview para controlar procesos en factory IO.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4242-process-control-in-factory-io-using-labview-modbus-tcp-serve"
],
"f": "2021-01-06",
"m": [
"General"
]
},
{
"id": "5Ke62NibMcs",
"n": null,
"t": "Interfazar Microsoft flight Simulator con Labview",
"d": "Muestra la forma de controlar el Microsoft flight simulator con otras aplicaciones, en este caso labview, po que permitirá hacer autopilotos, sillas simuladores de asiento de piloto,…",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4325-interface-labview-with-microsoft-flight-simulator"
],
"f": "2021-02-27",
"m": [
"General"
]
},
{
"id": "a9GovfdeyLs",
"n": null,
"t": "Transmision y recepcion serial full duplex en PIC (MikroC )y Arduino",
"d": "Muestra como poder recibir datos con Interrupcion y enviar a la vez desde un pic ( Mikroc ) y desde Arduino.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2431-send-and-receive-serial-data-full-duplex-pic-and-arduino"
],
"f": "2018-05-29",
"m": [
"PIC",
"Arduino"
]
},
{
"id": "Pk64HXQar04",
"n": null,
"t": "TIPS, como salir de dos loops o while  en Labview con un solo botón de stop",
"d": "Muetsra un TIPS, de como salir de dos loops o while en Labview con un solo botón de stop. Usando variables globales Video anterior: MICROC y Arduino MPLAB XC8.",
"c": [],
"f": "2021-04-22",
"m": [
"PIC",
"Arduino"
]
},
{
"id": "Rj6jUsCbwRs",
"n": null,
"t": "Leyendo el sensor XY-MD02 con labview usando MODBUS RS485",
"d": "Muestra la forma de usar MODBUS RS485 ccon labview.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4990-read-xy-md02-sensor-labview-modbus-rs485"
],
"f": "2022-05-25",
"m": [
"General"
]
},
{
"id": "I0jY57uoJws",
"n": 42,
"t": "Recepcion de ordenes serial compuesta con LabVIEW parte3",
"d": "Muetsra como utilizar labview para controla un mortor y 2 leds por ordenes seriales.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5288-stm32-serial-control-with-labview"
],
"f": "2023-04-07",
"m": [
"STM32"
]
},
{
"id": "SLje9-u3y-8",
"n": 43,
"t": "Transmision serial en el micro, recepcion en LabVIEW",
"d": "Muestra como monitorear variibales analogas y digitles desde labview comunicandose serialmente por uart ocn el stm32.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5289-stm32-monitoring-of-analog-and-digital-variables-with-labvie"
],
"f": "2023-04-08",
"m": [
"STM32"
]
},
{
"id": "hNp0Ox3xM5Y",
"n": 45,
"t": "Librerias PWM para control de motores DC",
"d": "Muestra como mediante labview y usando pwm en el stm32 controla velocidad de un motor DC con Liberrias.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5291-stm32-pwm-library-for-dc-motor-control"
],
"f": "2023-04-08",
"m": [
"STM32"
]
},
{
"id": "GkA0LX9POs8",
"n": null,
"t": "Clase en vivo. Introduccion a las interrupciones STM32, control   carrito de Proteus desde LabVIEW",
"d": "Muestra como crear interrpciones para timers e interrupciones externas control de carro de proteus desde labview.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5317-stm32-timer-extern-interrut"
],
"f": "2023-05-02",
"m": [
"STM32"
]
},
{
"id": "ZP0UQ_rwrQc",
"n": null,
"t": "Como seguir usando los componentes de LabVIEW robotic en las ultimas versiones de LabVIEW",
"d": "Labview Robotic, dejó de dar soporte a partir de 2019, aqui muestro como he hecho para poder tener los controles de robotic en las ultimas versiones.",
"c": [],
"f": "2023-06-22",
"m": [
"General"
]
},
{
"id": "e3xjO8hn7ME",
"n": null,
"t": "Usando LabVIEW para un controlador difuso",
"d": "Muestra como configurar los controlaodres difusos en Labview.",
"c": [],
"f": "2024-03-13",
"m": [
"General"
]
},
{
"id": "OwR_AXDrUYs",
"n": null,
"t": "Usando LabVIEW para tomar datos de una planta de factory io e identificarla despues con Matlab",
"d": "Digos: Factory io.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5691-example-how-use-matlab-and-labview-with-factory-io",
"https://drive.google.com/drive/folders/1wImYl9GO2fnLhCkCdgftG6uehYXUP_fw?usp=sharing"
],
"f": "2024-03-28",
"m": [
"General"
]
},
{
"id": "jl0b63mCuoQ",
"n": null,
"t": "PID tuner con Matlab, aplicado a una planta simulada en factory io e implementado en LabVIEW",
"d": "Usa la Herramienta PID Tuner de Matlab, para sintonizar un PID en LAbview y aplicarlo a una planta simulada en Factory IO. Factory io.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5691-example-how-use-matlab-and-labview-with-factory-io",
"https://drive.google.com/drive/folders/1wImYl9GO2fnLhCkCdgftG6uehYXUP_fw?usp=sharing"
],
"f": "2024-03-28",
"m": [
"General"
]
},
{
"id": "AtF293UuzXk",
"n": 71,
"t": "Obtencion  de la curva caracteristica de un motor DC",
"d": "Muestra como obtenr con labview la curva caracteristica de un motor DC. Video anterior.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5714-stm32-curve-of-dc-motor-with-labview"
],
"f": "2024-05-06",
"m": [
"STM32"
]
},
{
"id": "RTduyquKRUg",
"n": 75,
"t": "Librerias control de  motores paso paso. Usando LabVIEW",
"d": "Muestra como usar mis librerias de motor paso paso, para stm32, usando interrupicones y control por puerto serial con Labview.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5763-stm32-stepper-motor-control-with-labview"
],
"f": "2024-07-24",
"m": [
"STM32"
]
},
{
"id": "Q59cuI32zWU",
"n": null,
"t": "STM32 2024_II SEM. CLASE 12. Recepción serial Con Labview",
"d": "Muestra como recibir tarma serial con LabVIEW.",
"c": [],
"f": "2024-10-04",
"m": [
"STM32"
]
},
{
"id": "xxtGwx7lNqs",
"n": 92,
"t": "DT-06  monitoreo wifi LabVIEW TCP cliente",
"d": "Muestra como monitorear con Labview datos enviados desde el stm32 usando el modulo WIFI DT-06.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5865-stm32-dt-06-labiew-tcp-client-monitor"
],
"f": "2025-01-06",
"m": [
"STM32"
]
},
{
"id": "7MSqoRguaTw",
"n": 94,
"t": "DT-06  control y monitoreo por wifi con LabVIEW",
"d": "Muestra como controlar y monitorear con un stm32 con wifi y labview usando el DT-06.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5867-stm32-dt-06-labview-monitor-and-control"
],
"f": "2025-01-14",
"m": [
"STM32"
]
},
{
"id": "Lsn6ycAiGRk",
"n": null,
"t": "STM32 2025_i sem. Clase recepcion, serial y wifi en LabVIEW, app monitoreo en celular",
"d": "Comunica el stm32 con LabVIEW por wifi o celular.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5884-stm32-and-labview-wifi-and-serial-read-celualr-app"
],
"f": "2025-04-12",
"m": [
"STM32"
]
},
{
"id": "V72mxPIt9GA",
"n": null,
"t": "Usar LabVIEW robotic en ultimas version de LabVIEW",
"d": "Muestra como usar labview robotic en las ultimas versiones de labview.",
"c": [],
"f": "2026-01-07",
"m": [
"General"
]
}
],
"filtros": [
"STM32",
"PIC",
"Arduino",
"General"
]
},
"logica-difusa": {
"titulo": "Lógica difusa",
"desc": "Desde los principios de la lógica difusa hasta un controlador difuso en un PIC18F con MikroC y Xfuzzy, y cómo configurarlo en MATLAB y LabVIEW.",
"lista": "PLp8IkbtcjNXw8nGJdldrqna0dgRK1dCye",
"videos": [
{
"id": "5DzE9exUiRE",
"n": null,
"t": "Introducción a la logica difusa, para dummies",
"d": "Clase de mi tutor y gran Maestro el Doctor Contreras sobre los principios de Lógica difusa.",
"c": [],
"f": "2022-01-17"
},
{
"id": "q0Q4whGLIVs",
"n": null,
"t": "Implementación de un control difuso con mikroc  en un pic 18f",
"d": "Muestra como usar Xfuzzy para implementar un controlador fuzzy, en un pic18f en mikroc. Logica difusa, o fuzzy logic mikroc en microcontrolaodre pic.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2651-implementation-of-a-temperature-fuzzy-logic-control-in-pic18"
],
"f": "2018-11-11"
},
{
"id": "F28q5Wqq-uk",
"n": null,
"t": "Usando Matlab para un controlador difuso",
"d": "Muestra como configurar con las nuevas herramientas de matlab un controlaodr difuso.",
"c": [],
"f": "2024-03-14"
},
{
"id": "e3xjO8hn7ME",
"n": null,
"t": "Usando LabVIEW para un controlador difuso",
"d": "Muestra como configurar los controlaodres difusos en Labview.",
"c": [],
"f": "2024-03-13"
}
]
},
"robotica-proteus": {
"titulo": "Robótica: simulación en Proteus",
"desc": "Robots simulados en Proteus con PIC y MikroC: seguidor de línea, evasor de obstáculos y velocista con control proporcional y PID, más clases en vivo y competencias virtuales.",
"lista": "PLp8IkbtcjNXz3epxMoLD1hIv4nfWrlbJC",
"videos": [
{
"id": "WQCDpuFA-0I",
"n": null,
"t": "Simulacion de robot seguidor de linea y evasor de obstaculos con Proteus parte 1",
"d": "Muestra el principio de como utilizar los robots de proteus para su posterior programación como seguidor de linea o evasión de obstáculos. Video de como leer los sensores reflectivos.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4307-proteus-robot-simulation-using-mikroc-line-follower-and-obst"
],
"s": "seguidor-de-linea-basico",
"f": "2021-02-17"
},
{
"id": "cuJeucqpRBA",
"n": null,
"t": "Simulacion de robot seguidor de linea y evasor de obstaculos con Proteus parte 2",
"d": "Muestra el principio de como utilizar los robots de proteus para su posterior programación como seguidor de linea o evasión de obstáculos. Video de como leer los sensores reflectivos.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4307-proteus-robot-simulation-using-mikroc-line-follower-and-obst"
],
"s": "seguidor-de-linea-basico",
"f": "2021-02-17"
},
{
"id": "F9aebNwea7U",
"n": null,
"t": "Robot seguidor de linea en Proteus, sencillo parte1",
"d": "Muestra el primer acercamiento de como realizar un robot seguidor de linea con proteus y mikroc pro for pic.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4312-basic-principles-of-a-simple-line-follower-robot"
],
"s": "seguidor-de-linea-basico",
"f": "2021-02-20"
},
{
"id": "16OPyWaNVcI",
"n": null,
"t": "Robot seguidor de linea  en Proteus, sencillo parte2",
"d": "Muestra el primer acercamiento de como realizar un robot seguidor de linea con proteus y mikroc pro for pic usando un algoritmo sencillo de control.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4313-basic-principles-of-a-simple-line-follower-robot-part-2"
],
"s": "seguidor-de-linea-basico",
"f": "2021-02-20"
},
{
"id": "lh59JF_3q6I",
"n": null,
"t": "Evasor de obstaculos basico en Proteus con PIC y MikroC  parte 1",
"d": "Muestra la forma sencilla de utilizar el robot de evasión de obstáculos de proteus, y programarlo en mirkoc.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4429-simple-obstacle-evasor-with-mikro-and-proteus"
],
"s": "evasor-de-obstaculos",
"f": "2021-03-31"
},
{
"id": "6eBP-g0A6iA",
"n": null,
"t": "Evasor de obstaculos mejorado en Proteus con PIC y MikroC  parte 2",
"d": "Muestra un algoritmo mpás avanzado para utilizar el robot de evasión de obstáculos de proteus, y programarlo en mirkoc. de tal forma que inicie a la izquierda y salga del lado derecho de…",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4430-advanced-obstacle-avoidance-with-proteus-and-mikroc"
],
"s": "evasor-de-obstaculos",
"f": "2021-03-31"
},
{
"id": "-mIl-ImOoXI",
"n": null,
"t": "Control de robot seguidor de linea velocista parte 1 (lectura de sensores digitales)",
"d": "Muestra, como leer los sensores de un seguidor de linea, que tiene sensores reflectivos configurarlos de forma digital y pasarlos o normalizarlos a ceros y uno.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4434-speed-line-follower-robot-sensor-reading-normalization"
],
"s": "velocista-con-control-p-y-pid",
"f": "2021-04-03"
},
{
"id": "aHBGIq-UNtk",
"n": null,
"t": "Control de robot seguidor de linea velocista parte 2(generacion de pesos)",
"d": "Muestra como generar un sistema que permite saber que tan alejado está el robot de la línea, utilizando un sistema de pesos.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4435-generation-of-weights-which-indicate-how-far-a-line-follower"
],
"s": "velocista-con-control-p-y-pid",
"f": "2021-04-03"
},
{
"id": "N7IrttxVPIk",
"n": null,
"t": "Control de robot seguidor de linea velocista parte 3 (modo proporcional",
"d": "Muestra un algoritmo básico proporcional para un seguidor de linea velocista.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4436-fast-line-follower-full-proportional-mode"
],
"s": "velocista-con-control-p-y-pid",
"f": "2021-04-03"
},
{
"id": "-0_uzhs-QGc",
"n": null,
"t": "Control de robot seguidor de linea velocista parte 4 (modo PID)",
"d": "Muestra como implementar y sintonizar empíricamente un controlador PID para un robot seguidor de linea.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4449-fast-line-follower-full-pid-mode"
],
"s": "velocista-con-control-p-y-pid",
"f": "2021-04-13"
},
{
"id": "qEonvG5vuAw",
"n": null,
"t": "Control de robot seguidor de linea velocista parte 5 (modo PID + velocidad en linea recta)",
"d": "Muestra como implementar y sintonizar empíricamente un controlador PID para un robot seguidor de linea, además de un algoritmo para sacar máximo provecho en las líneas rectas.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/4468-fast-line-follower-full-pid-mode-and-maximum-speed-in-straig"
],
"s": "velocista-con-control-p-y-pid",
"f": "2021-04-24"
},
{
"id": "CLgcNcF0fh0",
"n": null,
"t": "Clase en vivo de robótica, algoritmos  para detección de la ubicación de un velocista en la linea",
"d": "Clase en vivo de como capturar datos de los sensores de un Robot Seguidor de Línea.",
"c": [],
"s": "clases-en-vivo-y-competencias",
"f": "2021-04-06"
},
{
"id": "26F-8R7iTrw",
"n": null,
"t": "Competencia virtual de velocista clase de robótica",
"d": "",
"c": [],
"s": "clases-en-vivo-y-competencias",
"f": "2021-04-27"
},
{
"id": "22orsDGwbLc",
"n": null,
"t": "Clase en vivo de robotica, algorimo lectura sensorres opticos forma digital",
"d": "Clase de robotica, algorimo lectura sensorres opticos forma digital.",
"c": [],
"s": "clases-en-vivo-y-competencias",
"f": "2021-09-14"
},
{
"id": "XL3LvGMzJos",
"n": null,
"t": "Segunda competencia virtual de robot seguidor de linea velocista proteus",
"d": "",
"c": [],
"s": "clases-en-vivo-y-competencias",
"f": "2021-10-19"
}
],
"secciones": [
{
"id": "seguidor-de-linea-basico",
"nombre": "Seguidor de línea básico"
},
{
"id": "evasor-de-obstaculos",
"nombre": "Evasor de obstáculos"
},
{
"id": "velocista-con-control-p-y-pid",
"nombre": "Velocista con control P y PID"
},
{
"id": "clases-en-vivo-y-competencias",
"nombre": "Clases en vivo y competencias"
}
]
},
"huskylens": {
"titulo": "Cámara de IA HuskyLens",
"desc": "La cámara con inteligencia artificial HuskyLens: configuración, análisis de su protocolo, reconocimiento de rostros y mis librerías para STM32.",
"lista": "PLp8IkbtcjNXylmKFipKQjYYWeXBQPCp61",
"videos": [
{
"id": "DRzf4v0ARnk",
"n": null,
"t": "HuskyLens parte1  analisis de la configuracion basica de la camara IA HuskyLens",
"d": "Muestra como configura la comunicación con la cámara.",
"c": [],
"f": "2023-12-09"
},
{
"id": "n1xefhP8FX0",
"n": null,
"t": "HUSKEYLENS PARTE 2. Analisis del protocolo, y reconocimeintos de caras, como funciona",
"d": "Muestra como responde la camara cuando reconoce o no un rostro o cara.",
"c": [],
"f": "2023-12-09"
},
{
"id": "4dw_7VkUMFc",
"n": null,
"t": "HuskyLens parte 3. Librerias para STM32 reconocimiento de rotros",
"d": "Muestra una forma basica de como reconocer rostros con la huskeycam y un stm32.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/5579-stm32-face-recognition-using-huskeylens"
],
"f": "2023-12-09"
}
]
},
"proteus": {
"titulo": "Proteus: primeros pasos, versiones y trucos",
"desc": "Lo básico de Proteus, cómo instalar y qué trae cada versión nueva (8.9 a 9.2), y soluciones a problemas comunes. Los videos de PCB, robótica y simulación de micros ya están en sus propios cursos.",
"lista": "PLp8IkbtcjNXxlzcxMG4ZCjHMOzY-gIcJm",
"videos": [
{
"id": "wZlxE6Rplkw",
"n": null,
"t": "Charla formas de simular Arduino en Proteus",
"d": "Muestra como simular Arduino en proteus de dos formas.",
"c": [],
"s": "primeros-pasos",
"f": "2020-09-21"
},
{
"id": "2ckhIRf8rZk",
"n": null,
"t": "Clase basica de  Proteus busqueda y colocacion de componentes",
"d": "",
"c": [],
"s": "primeros-pasos",
"f": "2026-02-18"
},
{
"id": "JPU1NjJCPBo",
"n": null,
"t": "Proteus basico, ubicacion de  voltimetro y amperimetros",
"d": "",
"c": [],
"s": "primeros-pasos",
"f": "2026-02-18"
},
{
"id": "2QgjgQ4ulQc",
"n": null,
"t": "Nuevas característica de base de datos de componentes en Proteus 8.9 sp0",
"d": "Nueva característica útil en proteus 8.9 SP0 Base de datos samacsys para no componentes.",
"c": [],
"s": "instalacion-y-novedades",
"f": "2019-07-08"
},
{
"id": "uzsK9IsiUNA",
"n": null,
"t": "Proteus 9.0 vuelve a funcionar el GPS virtual",
"d": "",
"c": [],
"s": "instalacion-y-novedades",
"f": "2025-04-19"
},
{
"id": "ll8A8McWgFc",
"n": null,
"t": "Primeras impresiones Proteus 9.0",
"d": "",
"c": [],
"s": "instalacion-y-novedades",
"f": "2025-08-14"
},
{
"id": "Jxk0EuAJ6yY",
"n": null,
"t": "Novedades del ultimo Proteus 9.1 sp2",
"d": "",
"c": [],
"s": "instalacion-y-novedades",
"f": "2026-01-08"
},
{
"id": "Fv5knrcy4OA",
"n": null,
"t": "Como instalar Proteus 9.1 sp4  2026",
"d": "",
"c": [],
"s": "instalacion-y-novedades",
"f": "2026-08-07"
},
{
"id": "E_MM42r0HpQ",
"n": null,
"t": "Instalación  en windows proteus 9.1sp4 2026",
"d": "",
"c": [
"https://drive.google.com/file/d/1PnUZTRZ4NFiWq2Gsk3kTV3_HKlPcVPyL/view"
],
"s": "instalacion-y-novedades",
"f": "2026-08-07"
},
{
"id": "26hd1R47RRA",
"n": null,
"t": "Instalación  en windows proteus 9.2 sp1 2026",
"d": "",
"c": [
"https://drive.google.com/drive/folders/1w9773LlQr_HbLv4OoOIxSN2OLUT63iNP"
],
"s": "instalacion-y-novedades",
"f": "2026-10-24"
},
{
"id": "_tPncsvDuE8",
"n": null,
"t": "Proteus 9.2 sp1 portable",
"d": "",
"c": [
"https://drive.google.com/drive/folders/1ASklESTqODjcYPNz9_5Bu67BYeCx_ffW"
],
"s": "instalacion-y-novedades",
"f": "2026-10-24"
},
{
"id": "EejmO1m56Y0",
"n": null,
"t": "Bug, error en Proteus",
"d": "Muestra porque es que no hay que confiar 100% en los simuladores, no hay nada como la práctica.",
"c": [],
"s": "trucos-y-soluciones",
"f": "2020-11-18"
},
{
"id": "_5S9TD68RlU",
"n": null,
"t": "Como imprimir PCB en negativo usando Proteus",
"d": "Muestra dos formas para hacer los negativos usando proteus.",
"c": [],
"s": "trucos-y-soluciones",
"f": "2021-01-06"
},
{
"id": "TiQW7cBWO8c",
"n": null,
"t": "Solucionar problema de visualización de iconos en Proteus y win 11 en pantallas 2k",
"d": "Muedstra una forma de corregir problemas en pantalla de visualización de iconos en proteus y pantalla de resolución 2k.",
"c": [],
"s": "trucos-y-soluciones",
"f": "2022-02-04"
}
],
"secciones": [
{
"id": "primeros-pasos",
"nombre": "Primeros pasos"
},
{
"id": "instalacion-y-novedades",
"nombre": "Instalación y novedades"
},
{
"id": "trucos-y-soluciones",
"nombre": "Trucos y soluciones"
}
]
},
"pcb-proteus": {
"titulo": "Diseño PCB con Proteus",
"desc": "Del esquemático a la tarjeta: diseño de PCB, creación de encapsulados y personalización en Proteus.",
"lista": "PLp8IkbtcjNXxTxeGu9BdAMTLaDcZ1CxkV",
"videos": [
{
"id": "LcG3_KC9SMo",
"n": null,
"t": "Workshop, charla parte 2 diseño PCB con Proteus",
"d": "",
"c": []
},
{
"id": "5WiGqkNAXUM",
"n": null,
"t": "Workshop, charla parte 1 diseño PCB con Proteus",
"d": "",
"c": [
"https://github.com/alcidesramos/DISE-O-PCB-PROTEUS"
]
},
{
"id": "WmFDIb1asrU",
"n": null,
"t": "Creación básica de paquetes en proteus",
"d": "Muesrra como crear algunos paquetes sencillos en proteus.",
"c": []
},
{
"id": "m5qByj0JrYE",
"n": null,
"t": "Clase en vivo, TIPS para personalizaciones en tu PCB usando proteus parte 2",
"d": "TIPS de Personalización 3D en Proteus, WEB.",
"c": [
"https://grabcad.com/"
]
},
{
"id": "fZr-6wPxA2c",
"n": null,
"t": "Clase en vivo, TIPS para personalizaciones en tu PCB usando proteus parte 1",
"d": "Tips pesonalización pcb proteus.",
"c": []
},
{
"id": "fI7Py08q0bY",
"n": null,
"t": "Clase en vivo, Diseño básico de PCB con Proteus",
"d": "Clase, básica del Diseño de PCB en Proteus.",
"c": []
},
{
"id": "-DGxE2qVUL8",
"n": null,
"t": "Diseño esquemático y PCB en Proteus (parte ii) simulacion",
"d": "Muestra nuevas técnicas de diseño del PCB y la simulación de los juegos de luces en proteus.",
"c": [
"https://github.com/alcidesramos/CODIGOS_LIBSTOCK/tree/main/2664-design-of-pcb-and-effects-of-light-with-arduino"
]
},
{
"id": "og2V82RGX6g",
"n": null,
"t": "Diseño esquemático y PCB en Proteus (parte i)",
"d": "Muestra basado en una shield para Arduino como diseñar una pcb desde cero es la primera parte.",
"c": []
}
]
}
}
};
