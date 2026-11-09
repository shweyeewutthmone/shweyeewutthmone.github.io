// string
//let name = "Shwe Yee Wutt Hmone";
//let name = 'Shwe Yee Wutt Hmone';
let name = `Shwe Yee Wutt Hmone`;

console.log(name);
console.log(typeof(name));


// numberic data type

let age = 17;
console.log(age);
console.log(typeof(age));


// boolean data type (true / false)
let isStudent = true;
console.log(isStudent);
console.log(typeof(isStudent));


// undefined data type
let undefinedVar;
console.log(undefinedVar);
console.log(typeof(undefinedVar));


// null data type
let nullVar = null;
console.log(nullVar);
console.log(typeof(nullVar));


// array data type Array() / [] => index start from 0
// let studentLists = new Array('Aung Aung','Aye Aye','Tun Tun','Hla Hla');
let studentLists = ['Aung Aung','Aye Aye','Tun Tun','Hla Hla'];
console.log(studentLists);
console.log(typeof(studentLists));
console.log(studentLists.length);
console.log(studentLists[2]);


// object data type key : value;
let student = {
    name : "Shwe Yee Wutt Hmone",
    age : 17,
    address : "Yangon",
    education : "GED"
}
console.log(student);
console.log(typeof(student));
console.log(student.address);
