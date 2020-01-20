class Person {
    constructor (name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }

    getGreeting () {
        return `Hi. I am ${this.name}!`
    }

    getDescription () {
        return `${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person {
    constructor (name, age, major) {
        super(name, age) //--> Get the parent class' constructor values
        this.major = major
    }

    hasMajor () {
        return !!this.major //--> Check if object has major
    }

    getDescription () {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += `. Their major is ${this.major}`
        }

        return description
    }
}

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    hasHomeLocation () {
        return !!this.homeLocation
    }

    getGreeting () {
        let greeting = super.getGreeting()

        if (this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }

        return greeting
    }
}

const me = new Traveler('Mikael Evangelista', 22, 'Metro Manila')
console.log(me.getGreeting())

const anon = new Traveler()
console.log(anon.getGreeting())

// const appRoot = document.querySelector('#app')
// const greetingTemplate = (
//     <div>
//         <h2>{me.getDescription()}</h2>
//         <h2>{anon.getDescription()}</h2>
//     </div>
// )
// ReactDOM.render(greetingTemplate, appRoot)