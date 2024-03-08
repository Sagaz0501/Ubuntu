const obj1 = {
    name: 'Santiago',
    age: 18,
    fechaDeNacimiento: {
        año: 2006,
        dia : 14,
        mes: 'Marzo'
    },
    NuevoAño(nuevaEdad){
        this.age = nuevaEdad
    }
}
console.log(obj1)
const stringObj1 = JSON.stringify(obj1)
const obj2 = JSON.parse(stringObj1)
console.log(stringObj1)
console.log(obj2)

obj1.NuevoAño(19)
console.log(obj1)