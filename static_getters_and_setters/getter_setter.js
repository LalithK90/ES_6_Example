class Student {

    constructor(name) {
        this._name = name;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        if (5 < value.length)
            this._name = value;
    }

}

let saman = new Student('Saman');

console.log(saman);

console.log(saman.name);

saman.name = 'Jhon Jonny';

console.log(saman.name)
