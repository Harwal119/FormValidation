

// if(isNaN("13")){
//     alert("not a number");
// }






// document.getElementById("p1").innerHTML = "how're you?"

// document.write("welcome to CLH")

// alert("hi, how was your day")

// console.log("hello")

// function changeColor(){
//     document.getElementById("p1").style.color = "blue"
// }


// function add(){
//     let Num1 = Number(document.getElementById("num1").value);
//     let Num2 = Number(document.getElementById("num2").value);
//     let result = Num1 + Num2;
//     document.getElementById("result").value = result.toString();
// }

// function subtract(){
//     let Num1 = Number(document.getElementById("num1").value);
//     let Num2 = Number(document.getElementById("num2").value);
//     let result = Num1 - Num2;
//     document.getElementById("result").value = result.toString();
// }

function validateFirstName(){
    const fName = document.querySelector("#fname").value;
    const fNameErr = document.querySelector("#fnameError");
   const submitBtn = document.querySelector("#submitbtn");

    if(fName === ""){
      fNameErr.innerHTML = "FirstName is Required!"
       submitBtn.disabled = true;
    }
    else{
        submitBtn.disabled = false;
    }
}


function validateLastName(){
    const lName = document.querySelector("#lname").value;
    const lNameErr = document.querySelector("#lnameError");
   const submitBtn = document.querySelector("#submitbtn");

    if(lName === ""){
      lNameErr.innerHTML = "LastName is Required!"
       submitBtn.disabled = true;
    }
    else{
        submitBtn.disabled = false;
    }
}


function validateEmail(){
    const email = document.querySelector("#email").value;
    const emailErr = document.querySelector("#emailError");
   const submitBtn = document.querySelector("#submitbtn");

   let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   let isValid = email.match(regex);
   
    if(!isValid){
      emailErr.innerHTML = "Email is Invalid!"
       submitBtn.disabled = true;
    }
    else{
        submitBtn.disabled = false;
    }
}


function validatePassword(){
    const pass1 = document.querySelector("#password").value;
    const pass2 = document.querySelector("#cpassword").value;
    const passwordErr = document.querySelector("#passwordError");
    const cpasswordErr = document.querySelector("#cpasswordError");
   const submitBtn = document.querySelector("#submitbtn");
   
    if(pass1 !== pass2){
        passwordErr.innerHTML = "Passwords do not match!"
        cpasswordErr.innerHTML = "Passwords do not match!"
       submitBtn.disabled = true;
    //    80949540621
    }
    else{
        passwordErr.innerHTML = ""
        cpasswordErr.innerHTML = ""
        submitBtn.disabled = false;
    }
}


function validatePhone(){
    const phone = document.querySelector("#phone").value;
    const phoneErr = document.querySelector("#phoneError");
   const submitBtn = document.querySelector("#submitbtn");
   
    if(phone.length !== 11  ){
        phoneErr.innerHTML = "Phone Number is invalid"
       submitBtn.disabled = true;
    }
    else{
        phoneErr.innerHTML = ""
        submitBtn.disabled = false;
    }
}



// async function getData(){
//     // const data = fetch("https://cat-fact.herokuapp.com/facts/")
//     //              .then((response) => response.json())
//     //              .then((data) => data)

//     const data = await axios.get("https://cat-fact.herokuapp.com/facts/")
//   return data;
// }



//  async function populateTable(){
//     const cats = await getData();

//     if(cats.status === 200){
//         const catTable = document.getElementById('cattable');

//         for(let i =0; i< cats.data.length; i++){
        
//             const row = document.createElement('tr')
//             // const catvalues = Object.values(cats.data[i]);
           
//           for(let item in cats.data[i]){
//             if(typeof cats.data[i][item] === 'object'){
//                 continue;
//             }
//             const cell = document.createElement('td')
//             cell.innerHTML = cats.data[i][item];
//             row.appendChild(cell);
//           }
//           catTable.appendChild(row);
//         }
//     }
//     else{
//         const para = document.createElement('p');
//         para.innerText = "No records found"
//         document.body.appendChild(para);
//     }

    // console.log(cats.data)
    //  console.log(cats.length)
    // console.log(cats)
   
// }


// populateTable();