
let choferes=[
    {
        nombre:"Oscar",
        hTrabajadasPorDia:8,
        sueldoPorHora:5
    },

    {
        nombre:"Javier",
        hTrabajadasPorDia:7,
        sueldoPorHora:6
    },

    {
        nombre:"Yeni",
        hTrabajadasPorDia:8,
        sueldoPorHora:8
    },

    {
        nombre:"Susy",
        hTrabajadasPorDia:6,
        sueldoPorHora:9
    },

    {
        nombre:"Carmen",
        hTrabajadasPorDia:9,
        sueldoPorHora:9
    },
];
let total=0;
let a=0;
let b=0;
for (let i = 0; i < choferes.length; i++) {
    console.log(`----------------`);
    console.log(`el numero de horas trabajadas por ${choferes[i].nombre} esta semana es: ${choferes[i].hTrabajadasPorDia*6} `);
    console.log(`su sueldo semanal es de: ${choferes[i].sueldoPorHora*choferes[i].hTrabajadasPorDia*6}`);
    total=total+choferes[i].sueldoPorHora*choferes[i].hTrabajadasPorDia*6;
    if(a<choferes[i].hTrabajadasPorDia){
        b=choferes[i];
    }
}
console.log(`----------------`);
console.log(`----------------`);
console.log(`el total a pagar por la empresa es de: ${total}`);
console.log(`----------------`);
console.log(`${b.nombre} fue el que trabajó mas horas esta semana`);
console.log(`----------------`);




