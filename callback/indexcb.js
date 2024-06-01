const btn =document.querySelector("button");
const para= document.querySelector("p");


const img = document.querySelector("img");
const info = document.querySelector(".info");


function doginfo() {
    const url = fetch("https://dog.ceo/api/breeds/image/random");
    url.then((response) => {
        return response.json()
    }).then((value2) => {
        console.log(value2);
        let newsrc = value2.message;
        img.src = newsrc;
    });
      if(Response){
        return Response.json()}
        if(Response.json){
            console.log(value2);
            let newsrc = value2.message;
             img.src = newsrc;
        }else{
            console.log(error);
        }
    }

function dog(Callback){
            img.src = "123";             // so that when the button is clicked second time the picture cant be seen 
            info.style.visibility = "visible";
            para.innerText="this message will be printed after 5 sec";
            setTimeout(()=>{
                para.innerText="this is printed after 5 sec"
                Callback();
            },5000);}

btn.addEventListener("click",() => {dog(doginfo)});
