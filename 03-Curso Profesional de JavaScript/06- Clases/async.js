// PETICIONES ASINCRONAS

// (async function(){
//     let resultado = await new Promise((resolve,reject) =>{
//         setTimeout (resolve, 400, 5)
//     });

//     let valorDos = await new Promise((resolve,reject)=>{
//         setTimeout(resolve, 400, 10)
//     });

//     console.log(resultado + valorDos);
// })();

async function showGitHubInfo(){
    let response = await fetch ('https://api.github.com/users/urielhdz/repos');
    let repos = await response.json();
    console.log(repos);
}

showGitHubInfo();

// MANEJO DE ERRORES

(async function(){
    try{
        let promesa = await Promise.reject("error");
    }catch(err){
        console.log(err);
    }
})()