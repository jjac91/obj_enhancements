function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

const favoriteNumber = 42

const instructor = {
    firstName : "Colt",
    [favoriteNumber] : "That is my favorite!"
}

let instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hello"
    },
    sayBye(){
        return this.firstName + "says bye!"
    }
}
function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise
        }
    }
}