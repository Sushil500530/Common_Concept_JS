function greeting(greet,name){
    greet(name) ;
    // console.log(greetingHandler())
}

// const numbers =[3,5,6,8,9,12]
// const labtop = {brand:'lenevo', price:50000, memory:'8gb'}

function greetingHandler(name){
    console.log('Good Morning!',name)
}
function greedEvening(name){
    console.log('Good Evening',name)
}
function greetNight(name){
    console.log('Good Night',name)
}
greeting(greetingHandler,'Sushil') ;
greeting(greetingHandler,'Apurbo');
greeting(greedEvening,'Sushil');
greeting(greetNight,'Apurbo')