let details = [];
let count= -1;
let valid = true;
let id=0;
document.querySelector(".add").addEventListener("click", function (event) {
  if (
    count=== -1 &&
    valid &&
    document.querySelector(".name").value !== "" &&
    document.querySelector(".mobileno").value !== "" &&
    document.querySelector(".address").value !== "" &&
    document.querySelector(".email").value !== "" &&
    document.querySelector(".dob").value !== ""
  ) {
    let data = {
      Id: (id =id+ 1),
      name: document.querySelector(".name").value,
      mobileno: document.querySelector(".mobileno").value,
      address: document.querySelector(".address").value,
      date: document.querySelector(".dob").value,
      email: document.querySelector(".email").value,
    };
    event.preventDefault();
    details.push(data);
    console.log(details);
    clear();
    Display();
  } 
  else if (count!== -1) {
    details[flip].name = document.querySelector(".name").value;
    details[flip].mobileno = document.querySelector(".mobileno").value;
    details[flip].address = document.querySelector(".address").value;
    details[flip].email = document.querySelector(".email").value;
    details[flip].date = document.querySelector(".dob").value;
    console.log(details);
    Display();
    clear();
    count= -1;
    event.preventDefault();
  } 
  else {
    alert("Textfields not correct check...");
    event.preventDefault();
  }
  console.log(details);
});
let Display = () => {
  let result= "";
  for (let i = 0; i < details.length; i++) {
    result+= "<tr>";
    result+= "<td>" + details[i].name + "</td>";
    result+= "<td>" + details[i].mobileno + "</td>";
    result+= "<td>" + details[i].email + "</td>";
    result+= "<td>" + details[i].date + "</td>";
    result+= "<td>" + details[i].address + "</td>";
    result+=
      '<td><button class="edit" onclick="Edit(' +
      i +
      ')">EDIT</button><button class="del" onclick="Delete(' +
      i +
      ')">DELETE</button></td>';
    result+= "</tr>";
  }
  document.getElementById("tbody").innerHTML = result;
};
let Edit = (edittext) => {

  document.getElementById("name").value = details[edittext].name;
  document.getElementById("mobileno").value = details[edittext].mobileno;
  document.getElementById("address").value = details[edittext].address;
  document.getElementById("date").value = details[edittext].date;
  document.getElementById("email").value = details[edittext].email;
  count= edittext;
};
let Delete = (item) => {

  details.splice(item, 1);
  Display();
};
let clear = () => {
  document.getElementsByTagName("input")[0].style.border = "2px solid black";
  document.getElementsByTagName("input")[1].style.border = "2px solid black";
  document.getElementsByTagName("input")[2].style.border = "2px solid black";
  document.getElementsByTagName("input")[3].style.border = "2px solid black";
  document.getElementsByTagName("input")[4].style.border = "2px solid black";
  document.getElementById("form").reset();
};
const check = (content) => {

  if (content.id == "name" && content.value.match(/^[a-zA-Z]+$/)) {
    document.getElementById("name").innerHTML="Correct";
  } else if (content.id == "mobileno") {
    if (content.value.length === 10) {
      document.getElementById("num").innerHTML="Correct";
    } else {
      alert("please enter only 10 digits");
    }
  } else if (content.id == "date" && content.value !== "") {
    document.getElementById("dob").innerHTML="Correct";
  } else if (content.id == "email" && content.value !== "") {
    document.getElementById("mail").innerHTML="Correct";
  } else if (content.id == "address" && content.value !== "") {

    document.getElementById("address").innerHTML="Correct";

  } else {
    valid = false;
    alert("Please enter the correct input to the fields");
  }
};
