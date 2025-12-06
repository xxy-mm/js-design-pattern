interface Singable {
    sing(): void;
}

class Duck {
    sing() {
        console.log("Quack Quack");
    }
}


class Chicken {
    sing() {
        console.log("Cluck Cluck");
    }
}

function makeSound(animal: Singable) {
    animal.sing();
}

const choir: Singable[] = [new Duck(), new Chicken()];

for (const singer of choir) {
    makeSound(singer);
}

