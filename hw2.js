//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(`my favorite pizza is `, person3.pizza)
console.log(`my favorite tacos are `, person3.tacos)
console.log(`my favorite burgers are`, person3.burgers)
console.log(`my favorite ice cream is `, person3.ice_cream)
console.log(`my favorite shakes depend on the resturant: `, person3.shakes)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person4(name, age){
    this.name = name,
    this.age = age,
    this.newAge = age

    this.printInfo = () => {
        console.log(`my name is ${this.name}, my age is  ${this.age}`)
    }

    this.birthday = (age) => {
        this.newAge += 1
        console.log(`ITS MY BIRTHDAY!!! My new age is ${this.newAge}`)
    }
};

const p1  = new Person4('Pearl', 24)
const p2 = new Person4('Sean', 30)
console.log(p1)
console.log(p2)
p1.printInfo()
p2.printInfo()
p1.birthday()
p2.birthday()
p2.birthday()
p2.birthday()


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const func = string => {
    return new Promise((resolve, reject)=>{
        if (string >= 10){
            setTimeout(()=>{
                resolve('big word')
            },3000)
        }
        else if (string < 10){
            setTimeout(()=>{
                resolve('small word')
            },1000)
        }
        else{
            reject('not valid')
        }
    })
}


res1 = func("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
res2 = func('wow')
console.log(res1)
console.log(res2)

const something = async () => {
    func('wow')
    const res = await func('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    console.log(res)
    
}
something()