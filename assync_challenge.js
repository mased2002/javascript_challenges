let setStudentAgeApi = (student, age) => { //async code below
//     console.log("1. Starting ..")
//     setTimeout(() => { 
//  console.log("2. setting age for the student") 
//      student.age = age; 
//       }, 500);
//     console.log("3. Done ..")
 
return new Promise(function (resolve, reject) {
    setTimeout(() => {
        student.age = age;
        if(age < 0)
            reject ("Bad Age")
     else
            // student.age = age;
              resolve(student)
    }, 500);


});


}

 let student = { name: "denis" }
 setStudentAgeApi(student, -1)
    .then(newStudent => {
        console.log("age set:", newStudent)
    })
    .catch(error => {
        console.error("age must be higher than 0:", error)
    })
 