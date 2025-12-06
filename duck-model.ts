interface Singable {
    sing(): void;
}

class duck {
    sing() {
        console.log("Quack Quack");
    }
}


class chicken {
    sing() {
        console.log("Cluck Cluck");
    }
}

function makeSound(animal: Singable) {
    animal.sing();
}

const choir: Singable[] = [new duck(), new chicken()];

for (const singer of choir) {
    makeSound(singer);
}

