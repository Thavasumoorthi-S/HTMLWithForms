function resultsubmit()
{

    event.preventDefault();
    let count=1;
    var name=document.getElementById("Name").value;
    var age=document.getElementById("Age").value;
    var number=document.getElementById("Number").value;
    var dob=document.getElementById("Dob").value;

    var result=dob.split("/");
    console.log(result)

    if(name==''||age==''||number==''||dob=='')
    {
        alert("please Enter all the details")
    }
    else{
        if(name.match(/[0-9-,-.-@]/))
        {
            count=0;
            document.getElementById("name").innerHTML="Please only enter the letter ignore numbers";
        }
        if(age.match(/[A-Za-z]/))
        {
            count=0;
            document.getElementById("age").innerHTML="Please only enter the numbers";

        }
        
        if(number.match(/[A-Za-z]/))
        {
            count=0;
            document.getElementById("number").innerHTML="Please only enter the numbers";
           
        }
        if(number.length!=10)
        {
                count=0;
                document.getElementById("number").innerHTML="you must enter 10 digits numbers";

         }

        if((Number(result[0])>31 )||( Number(result[1])>12) || (result[2].length>4))
        {
            count=0;
            document.getElementById("dob").innerHTML="Please enter the date and month and year like dd/mm/yyyy";
        }
        else if(count==1){
            document.getElementById("name").innerHTML="";
            document.getElementById("age").innerHTML="";
            
            document.getElementById("number").innerHTML="";
            document.getElementById("number").innerHTML="";
            
            document.getElementById("dob").innerHTML="";


            document.getElementById("na").innerHTML="Your name is "+name;
            document.getElementById("ag").innerHTML="Your age is "+age
            document.getElementById("num").innerHTML="your mobile number is "+number;
            document.getElementById("do").innerHTML="your Date-of-Birth is "+dob;
        }
        
    }
}
function reseting()
{
    document.getElementById("form").reset();
}
