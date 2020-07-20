let notas=[12,8,11,10,12,20,15,16,18,11,12,4,19,13,1];

let suma=0;
for (let i = 0; i < notas.length; i++) {
    suma=suma+notas[i];
}
let promedio=suma/notas.length;
console.log(`el promedio del salon es: ${promedio}`);
let cont=0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i]>promedio){
        cont++;
    }
}
console.log(`la cantidad de alumnos por encima del promedio es: ${cont}`);
