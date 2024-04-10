let element=""
let update=""
function upload() {
    let chat=document.getElementById("search1").value
    if (chat=="") {
        console.log(chat)
    } else {
         document.getElementById("chat-write").innerHTML+=  `<div style=" float: right; align-content: center; padding: 20px; margin: 10px;border-radius: 10px; background-color:rgb(194, 251, 203);"> ${chat}</div>`; 
    }
}
const userdata =[
     {
        nameid:'prajwal',
       discription:'i am aways online',
       photo:'<img style="height: 40px; width: 40px; border-radius: 50px;" src="assets/3092.jpg" alt="">',

     },
     {
        nameid:'nikhil',
        discription:'like me bro',
        photo:'<img style="height: 40px; width: 40px; border-radius: 50px;" src="assets/614315.jpg" alt="">'
     }
]
function person(name){
         
    switch (name) {
        case 'avdhut':{
          document.getElementById("name").innerHTML=userdata[0].nameid
          document.getElementById("about").innerHTML=userdata[0].discription
          document.getElementById("photo").innerHTML=userdata[0].photo
          document.getElementById("chat-write").style.backgroundImage="assets/3092.jpg"
          
          break;
        }
        case 'nikhil':{
            document.getElementById("name").innerHTML=userdata[1].nameid
            document.getElementById("about").innerHTML=userdata[1].discription
            document.getElementById("photo").innerHTML=userdata[1].photo
            
            break;
        }
        default:
            break;
    }
}