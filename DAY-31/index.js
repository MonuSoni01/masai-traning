class Vehicle {
    constructor  (type,regNum,car)
    {
        this.type = type,
        this.regNum = regNum,
        this.car = car
    }
}

var v1 = new Vehicle ("car","DL-42","red")

class car extends Vehicle{
    constructor (type,regNum)
    {
        super("car",type,regNum)
    }
}
var v2 = new car ("D-90","yelow")

console.log(v2)

class truck extends Vehicle{
    constructor (type,regNum)
    {
        super("truck",type,regNum)
    }
}
var v3 = new truck ("D-20","pink")
console.log(v3)