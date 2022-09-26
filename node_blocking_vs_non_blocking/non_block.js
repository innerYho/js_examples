console.log('Inicio de programa')  //Line 0

setTimeout(() => {
console.log('Primer Timeout')
}, 3000) //Line4
setTimeout(() => {
    console.log('Segundo Timeout')
    }, 0) //Line 2

    setTimeout(() => {
        console.log('Tercer Timeout')
        }, 0) //Line 3

console.log('Fin de programa') //Line 1

//In terminal: node 