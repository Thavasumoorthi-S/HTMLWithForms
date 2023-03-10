let id = null;
function namecheck()
{
    console.log("pressing ")
    let names=document.getElementById("fullName").value
    if(names.match(/[0-9-,-@-$]/))
    {
        alert("please Enter only letter");
    }
}
function numbercheck()
{
    console.log("pressing ")
    let numbers=document.getElementById("empCode").value
    if(!(numbers.length<=10))
    {
        alert("please Enter 10 digits only");
    }
    if(numbers.match(/[a-zA-Z-,-.@$]/))
    {
        alert("please Enter only number digits");
    }
}
function dobcheck()
{
    let dob=document.getElementById("dob").value;
     if(dob.match(/[a-zA-Z-,-.@$]/))
    {
        alert("Please only Enter the numbers like 0-9 and use / for separate dd/mm/yyyy");
    }
    let result=dob.split('/')
    if((Number(result[0])>31 )||( Number(result[1])>12) || (result[2].length>4))
    {
        alert("Please enter the date and month and year like dd/mm/yyyy");
    }
}

function citycheck()
{
    let city=document.getElementById("city").value
    if(city.match(/[0-9-,.@$]/))
    {
        alert("please only enter letters");
    }
}


function onFormSubmit() {
     if(document.getElementById("fullName").value==""||document.getElementById("empCode").value==""||document.getElementById("dob").value==""||document.getElementById("city").value=="")
    {
        alert("Please fill the all the input fields")
    }
    else
    {
        var data = read();
        if (id == null)
            insert(data);
        else
            update(data)
        resetForm();
    }
}
function read() {
    const data = {};
    data["fullName"] = document.getElementById("fullName").value;
    data["empCode"] = document.getElementById("empCode").value;
    data["dob"] = document.getElementById("dob").value;
    data["city"] = document.getElementById("city").value;
    return data;
}
function insert(data) {
    let table = document.getElementById("employee").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
     let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dob;
     let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button style="background-color:maroon;color:white" onClick="onEdit(this)">Edit</button>
                       <button style="background-color:red;color:white" onClick="onDelete(this)">Delete</button>`;
}
function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("city").value = "";
   id = null;
}

function onEdit(td) {
    id= td.parentElement.parentElement;
    document.getElementById("fullName").value =id.cells[0].innerHTML;
    document.getElementById("empCode").value =id.cells[1].innerHTML;
    document.getElementById("dob").value =id.cells[2].innerHTML;
    document.getElementById("city").value =id.cells[3].innerHTML;
}
function update(data) {
   id.cells[0].innerHTML = data.fullName;
   id.cells[1].innerHTML = data.empCode;
   id.cells[2].innerHTML = data.dob;
   id.cells[3].innerHTML = data.city;
}

function onDelete(td) {
        let row = td.parentElement.parentElement;
        document.getElementById("employee").deleteRow(row.rowIndex);
}
