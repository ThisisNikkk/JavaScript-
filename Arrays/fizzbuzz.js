function fizzBuzz(num){
    console.log(num);
    for(var i =0; i<=100; i++){
        if(i%5===0 && i%3===0){
            console.log("FizzBuzz")
        }
        else if (i%5 === 0){
            console.log("Buzz")
        }
        else if (i%3 === 0){
            console.log("Fizz")
        }
        else{
            console.log(i)
        }
    }
}

console.log(fizzBuzz(100))