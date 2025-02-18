const user = {

    Nikita: {
        age: 35,

        sayHello(name) {

            console.log(`Hello ${name}`)

        }
    }
}

console.log(user.name)

user.Nikita.sayHello("Nik")



const users = [
    {
        name: 'Nik',
        age: 35,
        isAdmin: false
    },
    {
        name: 'Alex',
        age: 30,
        isAdmin: true
    }
]

for (let i = 0; i < users.length; i++) {
    console.log (users[i])
}