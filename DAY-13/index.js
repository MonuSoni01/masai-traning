var arrObj = [
  {
    name: "MOnu SONI",
    Salary: 12000,
  },
  {
    name: "Anks SONI",
    Salary: 14000,
  },
  {
    name: "Ram SONI",
    Salary: 11000,
  },
  {
    name: "Dosti SONI",
    Salary: 2000,
  },
  {
    name: "Pawan SONI",
    Salary: 3000,
  },
];

arrObj.sort(function(a,b)
{
    return b.Salary - a.Salary
})
console.log(arrObj)
