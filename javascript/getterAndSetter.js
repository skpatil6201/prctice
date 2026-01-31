class getter {

    constructor(name) {
        this._name = name;

    }
    fly() {
        console.log("fly ")
    }

    // getter is use to get value from constructor
    get name() {
        return this._name
    }

    //setter is used to set value to constrctor
    set setname(newname){
        this._name=newname
    }

}



let obj = new getter("tejas bhau ")
// obj.fly()
console.log(obj.name)

obj.setname="sk"
console.log(obj._name)
// ist  check obj crated by same class...its return true of false
console.log(obj instanceof getter)