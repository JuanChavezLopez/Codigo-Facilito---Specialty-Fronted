
// ARROW FUNCTIONS (uso de la flecha)
let usuario ={
    nombre: "Uriel",
    apellido: 'Hernandez',
    nombreCompleto: function(){
        setTimeout(() => {
            console.log(this.nombre + "" + this.apellido)
        },1000);

    }
}

usuario.nombreCompleto();

// arreglos

let arreglo = [1,3,4,5,7,8];

for (let i =0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}