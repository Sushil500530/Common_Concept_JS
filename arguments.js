function sum(a,b,c){
    const args = [...arguments] ;
    // console.log(args)
    // for(let item of args){
    //     console.log(item.length)
    // }
    const result = a + b + c ;
    return result ;
}
const total = sum(45,75,23,46,21,47,33,77) ;
// console.log(total)
// console.log(sum.length)

// primitive type are pass by value
let a = 5 ;
let b = 7 ;
function multiply(num1,num2){
    num1 = 27
    const result = num1 * num2 ; 
    return result ;
}
const output = multiply(a,b) ;
console.log(output)
//object and array are pass by reference
let student1 = {name:'khalil',partner:'borsha'} ;
let student2 = {name:'molil',partner:'akhi'} 

function makeMovie(cupoule1,cupoule2){
    cupoule1.name = 'ononto' ;
    cupoule2.partner = 'mimi'
}
console.log(student1)
console.log(student2)
makeMovie(student1,student2)
console.log(student1,student2)

