let id = null;
let naming=null;
let num=null;
let date=null;
let place=null;
function namecheck()
{
    
    let names=document.getElementById("fullName").value
    if(names.match(/[0-9-,-@-$]/))
    {
        document.getElementById("fullName").style.borderColor="red"
        naming=0;
    }
    else{
        document.getElementById("fullName").style.borderColor="green";
        naming=1;

    }
}
function numbercheck()
{
    
    let numbers=document.getElementById("empnum").value;
    if((numbers.length<10))
    {
        document.getElementById("empnum").style.borderColor="red";
        num=0;

    }
    else if((numbers.length>10))
    {
        document.getElementById("empnum").style.borderColor="red";
        num=0;

    }
    else if((numbers.length==10))
    {
        document.getElementById("empnum").style.borderColor="green";
        num=1;

        
    }
    else if(numbers.match(/[a-zA-Z-,-.@$]/))
    {
        document.getElementById("empnum").style.borderColor="red";
        num=0;


    }
}
function dobcheck()
{
    let dob=document.getElementById("dob").value;
    let result=dob.split('/');
    let d=new Date();
    if(dob.match(/[a-zA-Z-,-.@$]/))
    {
        document.getElementById("dob").style.borderColor="red";
        date=0;

    }
    else if((Number(result[0])>31 )||( Number(result[1])>12) || (result[2].length>4))
    {
        document.getElementById("dob").style.borderColor="red";
        date=0;


    }
    else if(result[2]>d.getFullYear())
    {
        document.getElementById("dob").style.borderColor="red";
        date=0;

    }
    
    else if(result[2]==d.getFullYear() && result[1]>d.getMonth()+1)
    {
        document.getElementById("dob").style.borderColor="red";
        date=0;


    }

    else if(result[2]==d.getFullYear() && result[1]==d.getMonth()+1 && result[0]>d.getDate())
    {
        document.getElementById("dob").style.borderColor="red";
        date=0;


    }

    else{
        document.getElementById("dob").style.borderColor="green";
        date=1;


    }
    
}

function citycheck()
{
    let city=document.getElementById("city").value
    if(city.match(/[0-9-,.@$]/))
    {
        document.getElementById("city").style.borderColor="red";
        place=0;

    }
    else
    {
        document.getElementById("city").style.borderColor="green";
        place=1;

    }
}


function onFormSubmit() {
     if(document.getElementById("fullName").value==""||document.getElementById("empnum").value==""||document.getElementById("dob").value==""||document.getElementById("city").value=="")
    {
        alert("Please fill the all the input fields");
    }
    else if(naming==0|| num==0 || date==0 || place==0)
    {
        alert("Please fill the correct value in the fields");

    }
    else
    {
        document.getElementById("fullName").style.borderColor="black";
        document.getElementById("empnum").style.borderColor="black";
        document.getElementById("dob").style.borderColor="black";
        document.getElementById("city").style.borderColor="black";


        let data = read();
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
    data["empnum"] = document.getElementById("empnum").value;
    data["dob"] = document.getElementById("dob").value;
    data["city"] = document.getElementById("city").value;
    return data;
}
function insert(data) {
    let table = document.getElementById("employee").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empnum;
     let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dob;
     let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button style="background-color:yellow;color:black" onClick="onEdit(this)">Edit</button>
                       <button style="background-color:red;color:white" onClick="onDelete(this)">Delete</button>`;
            
}
function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empnum").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("city").value = "";
   id = null;
}

function onEdit(td) {
    id= td.parentElement.parentElement;
    document.getElementById("fullName").value =id.cells[0].innerHTML;
    document.getElementById("empnum").value =id.cells[1].innerHTML;
    document.getElementById("dob").value =id.cells[2].innerHTML;
    document.getElementById("city").value =id.cells[3].innerHTML;
}
function update(data) {
   id.cells[0].innerHTML = data.fullName;
   id.cells[1].innerHTML = data.empnum;
   id.cells[2].innerHTML = data.dob;
   id.cells[3].innerHTML = data.city;
}

function onDelete(td) {
        let row = td.parentElement.parentElement;
        document.getElementById("employee").deleteRow(row.rowIndex);
}
