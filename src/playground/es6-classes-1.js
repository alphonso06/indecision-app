class Person {
    constructor (name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }

    getGreeting () {
        return `Hi ${this.name}!`
    }

    getDescription () {
        return `${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person {
    
}

const me = new Person('Mikael Evangelista', 22)
console.log(me.getGreeting())

const anon = new Person()

const appRoot = document.querySelector('#app')
const greetingTemplate = (
    <div>
        <h2>{me.getDescription()}</h2>
        <h2>{anon.getDescription()}</h2>
    </div>
)
ReactDOM.render(greetingTemplate, appRoot)