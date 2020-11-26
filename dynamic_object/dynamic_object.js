let age = 30

let sampleObject = {
    f_name: 'Asanka',
    m_name: 'Lalith',
    l_name: 'Kahatapitiya',
    age
}
console.log(sampleObject)
console.log(sampleObject.f_name)
console.log(sampleObject.m_name + "  " + sampleObject.l_name)

let sampleObjectOne = {
    f_name: 'Asanka',
    m_name: 'Lalith',
    l_name: 'Kahatapitiya',
    age,
    fullNameAndAge() {
        console.log(this.l_name + " " + this.m_name + " age " + this.age)
    },
    name_age: () => this.l_name + " " + this.m_name + " age " + this.age
}
console.log(sampleObjectOne)
console.log(sampleObjectOne.f_name)
console.log(sampleObjectOne.m_name + "  " + sampleObjectOne.l_name)
sampleObjectOne.fullNameAndAge();
sampleObjectOne.name_age();


let testVariable = "test";

let sampleObjectwo = {
    f_name: 'Asanka',
    m_name: 'Lalith',
    l_name: 'Kahatapitiya',
    test : 99,
    age,
    fullNameAndAge() {
        console.log(this.l_name + " " + this.m_name + " age " + this.age)
    },
    name_age: () => this.l_name + " " + this.m_name + " age " + this.age
}

console.log(sampleObjectwo[testVariable])