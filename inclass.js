console.log('Hello world 2')


//Day 2: continue with control flow
//switch case statement
const day = new Date().getDay()
console.log(day, typeof day)

const literalDay = new Date().toString();
console.log(literalDay, typeof literalDay)

switch(day){
    case 0:
        console.log('Sunday')
        break; //once a case works every case after it will run as well unless you add a break, you can control what runs and what doesn't by adding breaks wherever you want
    case 1:
        console.log('Monday')
    case 2:
        console.log('Tuesday')
    case 3:
        console.log('Wednesday')
    default:
        console.log('Some other day')
}

switch(literalDay.split(' ')[0]){
    case 'Sun':
        console.log('Sunday')
    case 'Mon':
        console.log('Monday')
    case 'Tue':
        console.log('Tuesday')
    case 'Wed':
        console.log('Wednesday')
    default:
        console.log('Some other day')
}

//JS OBJECTS (aka Python Dictionaries)
const person = {
    name: 'Shoha',
    age: 45,
    teams: [
        'Dodgers',
        'Lakers',
        'Rams'
    ],
    wallet: {
        visa: 100,
        amex: 1000,
        bofa: 20
    }
};

//access data in obj
console.log(person['name']) //bracket notation
console.log(person.name) //dot notation


//get keys / values / pairs
//person.keys() - this does not work, .keys() is a static method
//person = new Object()
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

//loop through the keys
for (let item in person){
    console.log(item)
};

for (let item of Object.keys(person)){
    console.log(item, 2)
};


//OOP
//PROTOTYPES VS CLASSES
//create a prototype
//old way
function Car(make, model=1000, year){
    this.make = make; // this = self
    this.model = model,
    this.year = year;
    this.mileage = 0

    this.drive = function (miles){
        this.mileage += miles
        console.log(`Your odometer reading: ${this.mileage}`)//this is js equivialnt to a f string
    }


    this.park = () => {
        console.log(`parking..`)
        console.log(`Your odometer reading: ${this.mileage}`)
    }
};

const c1 = new Car("Honda", "Accord", 2021) //you cannot use keyword arguments, it will just go in order
console.log(c1.make)
console.log(c1.model)
console.log(c1.year)
c1.drive(100)
c1.drive(2000)
c1.park()


//Class (introduced during ES6 update)
class Sentient {
   // lifespan = 100 (moved to constuctor)

    constructor(lifespan=100){ //just like __init__ method
        this.lifespan = lifespan
    }

    func1 = function(){
        console.log(1)
    }

    func2 = () => {console.log(2)}

}

being1 = new Sentient()
console.log(being1.lifespan)


//inheritence
//can have multiple children but not multiple parents
class Human extends Sentient { //can only inherite from one thing
    constructor(lifespan, name, age=0, color, hobbies=[]){ //order super matters- cant change it later when calling
        super(lifespan)
        this.name = name
        this.age = age
        this.favoriteColor = color
        this.hobbies = hobbies
    }

    func2 = () => {
        console.log(`this is Humans function #2`)
    } //overridding parent function

    talk () {
        console.log(`Hi, my name is ${this.name}`)
    } //new function special to child
}

const h1 = new Human(101, 'Shoha', 89, "blue", ['biking', 'sailing'])
h1.func1()
h1.func2()
h1.talk()
console.log(h1.lifespan)


//destructring an array
const person1 = ['Pearl', 'Duncan', 24]
const [first_name, last_name, age] = person1 

//destructuring an object
//you variable name will be the key name
const pokemon = {
    pokemonName: "Pikachu",
    imgurl: 'google.com',
    abilities: ['thunderbolt', 'shockwaves'],
    hp: 14
}
const {imgurl, abilities} = pokemon 
console.log(imgurl)
console.log(abilities)


//Asynchornous Section of JS

//callback function- a function to be run at a later time
function snooze5(action){
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
    action()
}
snooze5(c1.park)


//Promises- gives you a response instantly but not a finished response because the task takes a while
//can keep promises or break promises (resolved or rejected)
const cook = dish => {
    return new Promise((resolve, reject)=>{
        if (dish == 'pasta'){
            setTimeout(()=>{
                resolve('pasta is done!')
            }, 15000)
           
        }
        else if (dish == 'rice'){
            setTimeout(()=>{
                resolve('rice is done!')
            }, 10000)
        }
        else if (dish == 'fried rice'){
            setTimeout(()=>{
                resolve('fried rice is done!')
            },2000)
        }
        else {
            reject('i dont know how to cook that')
        }

    
    })
}

res1 = cook('pasta')
res2 = cook('rice')
res3 = cook('pb&j sandwich')
console.log(res1)
console.log(res2)
console.log(res3)


//setTimeout(()=>{console.log(res2)}, 10000) - not a good idea to guess how long its gonna take


//Handling response of a promise
//2 ways
//old way: .then() / .catch()
cook('rice').then((res)=>{
    console.log(res)
})
.catch((err)=>{ //will run if you run into an error
    console.log("Error", err)
})


//ES6 way async / await
// these keywords must be used within a function
const kitchen = async () => {
    cook('pasta')
    const res = await cook('rice')
    console.log(res)
    const res2 = await cook('fried rice')
    console.log(res2)
}
kitchen()


//these are the two places the keywords ASYNC will go
async function function1  (){}
const function2 = async () => {}





