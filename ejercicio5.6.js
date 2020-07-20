
let nombres=[];
let edades=[];
for (let i = 0; i < 10; i++) {
    nombres[i]=prompt("ingresa tu nombre");
    edades[i]=prompt("ingresa tu edad");
}

let a=edades[1];
for (let j = 0; j < nombres.length; j++) {
    if(a<edades[j]){
        a=edades[j];
    }
}
console.log(`el alumno con mayor edad es: ${nombres[a]}`);