let rooms ={
    person1 : 'MOnu',
    position :'beta1'
}
let rooms1 ={
    person1 : 'Ram',
    position :'beta2'
}
let rooms2 ={
    person1 : 'Partik',
    position :'beta3'
}
let rooms3 ={
    person1 : 'Sunil Kuamr',
    position :'Father'
}


function family (npn)
{
    console.log(`Make Proud ${npn} in ${this.person1}`)
}


family('Amzing')
family.call(rooms,'Baap')