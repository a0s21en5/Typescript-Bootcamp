const user: object = {
    name: "Ash",
    age: 23,
}

console.warn(user);

type Users = {
    name: string,
    age: number
}

const users: Users = {
    name: "Ash",
    age: 23,
}

console.warn(users);
console.warn(users.name, users.age);
