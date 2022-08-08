//Logea un mensaje en consola de navegador o en otras palabras, se lee el texto en navegador
console.log('Hola mundo')


// VARIABLES
/* TIPO DINAMICO
JavaScript es de tipo dinamico lo que quiere decir que detecta las variables y en muchos casos en codigo no se vera el tipo de variable que es
  TIPO ESTATICO
Son los que necesitan que se le asigne el tipo de variable que es: string, int, float */

let nombre = 'Juan'
// LET es una forma de asignar variables que nos ayuda para poder reagsinar la variable
console.log(nombre)
nombre = 'Fran'
console.log(nombre)


const Edad = 5
// Const es una forma de asignar variables constantes o que solo pueden ser de lectura
console.log(Edad)
// Edad = 'Francis'
// console.log(Edad)

var No_Usar = true
//Esta forma de asignar variable requiere de un scope lo que nos hace utilizar mas lineas de codigo, No es recomendado

 // Podemos hacer un array que contenga variables con diferentes tipos de Datos
const persona = {
    name: 'Ale',
    twitter: '@ALE',
    Age: 26,
    Mujer: true,
    links: ['http://Apestosi', 'http://Frutis']
}

console.log(persona.Age)
console.log(persona.links[1])

// En react esta es la forma en la cual se llama una variable entonces significa que el objeto persona entra a la propiedad field para tener el resultado de la variable
const field = 'twitter'
console.log(persona[field])


// FUNCIONES
/* Una funncion tiene como objetivo devolver un resultado pero no hay que confundir las dos partes donde declaramaos argumentos y parametros, lo cual no es necesario que las variables argumentos se llamen igual que las variables de parametros */

const div = (num, den) /*Variables Parametro*/ => {
    console.log(num)
    console.log(den)
    return num/den
}

// Variables argumentos
const a = 8
const b = 2

console.log(div(a,b))

// LA MEJOR FUNCION CON ARRAY --> Asi evitamos uso de condicionales o el SWITCH CASE

const adversario = 'Thor' // Constante para elegir super heroe

const Loki_Disfraces = { // Vector para elegir disfraz villano 
    Iron_Man : 'Magneto',
    Thor : 'Odin',
    Hulk : 'Thanos',
    Spider_Man : 'Venom'
}

// Constante para llamar a loki por defecto si no hay adversario
const Loki_Por_Defecto = 'Loki'
// Esta constante es como un condicional que nos eligira el entre los adversarios o loki si no existiera uno
const loki = Loki_Disfraces [adversario] || Loki_Por_Defecto
console.log(loki) // imprimir