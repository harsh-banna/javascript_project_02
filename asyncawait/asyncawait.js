const btn =document.querySelector("button");
const para1 = document.querySelector(".p1");
const para2 = document.querySelector(".p2");

btn.addEventListener("click",async ()=>{
    try{let url =("https://official-joke-api.appspot.com/random_joke")
    let response = await fetch(url);
    let data = await response.json();
    console.log(data["setup"],data["punchline"])
    para1.innerText = data["setup"]+"------";
    para2.innerText = "answer will be printed after 5 sec.";  // loading
    setTimeout(()=>{
        para2.innerText=data["punchline"]+"😂😂😂😂";
    },5000);}
    catch (e) {                                    // to catch the error
        console.log('Error occurred', e);
        alert(`error occured ${e}`);
        para1.innerHTML= `operation timed out ${error}`
    }
})