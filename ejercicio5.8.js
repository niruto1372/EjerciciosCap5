debugger;
let vector=[1,2,3,4,5,6,7,8,9,10];
console.log(vector);
vector2=vector;
console.log(vector2);
let a=vector.length;
for (let i = 0; i < vector.length-1; i++) {
    vector2[i+1]=vector[i];
}
vector2[0]=a;
console.log(vector2);