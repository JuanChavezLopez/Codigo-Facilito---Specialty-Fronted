let numeros = [2,3,5];

let otro_arreglo = ['hola', 'mundo'];

function sumar(n1,n2,n3){
    return n1+n2+n3;
}

let resultado = sumar (... numeros);
console.log(resultado);
console.log([...numeros, ...otro_arreglo]);

