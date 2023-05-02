
let imagebox1=document.getElementById('imagebox');
let qrimage1=document.getElementById('qrimage');
let inputbox1=document.getElementById('inputbox');

const generate=()=>
{   console.log("check1");
console.log("value is "+inputbox1.value);
     if(inputbox1.value)
     {    console.log("check2");
          qrimage1.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputbox1.value;
     }
     
     else
     { alert("enter some text or url");}
}
