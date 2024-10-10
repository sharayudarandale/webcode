let age=24; //numeric datatype
let name="sharayu"; //string
let isFollow=true; //boolean
let x=null; //object
let y=BigInt("123"); //bigint

const student={
    fullName:"Sharayu",
    age:20,
    cgpa:8.93,
    isPass:true,
};
student["age"]=student["age"]+1;
console.log(student["age"]);

// we can update let bt cant upate const but we can update const key of object