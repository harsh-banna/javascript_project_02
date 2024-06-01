const btn =document.querySelector("button");
const para = document.querySelector("p");
const img = document.querySelector("img");
const info = document.querySelector(".info");
info.style.visibility = "hidden";

const url = 'https://dummyjson.com/posts';

const fetchData = (url) => { return new Promise((resolve, reject) => { fetch(url) .then(response => response.json()) .then(data => { resolve(data); }) .catch(error => { reject(error); }); }); };

const displayData = () => {
    info.style.visibility = "visible";
    para.innerHTML = "The data will be printed after 5 sec...........";  // loading part
    fetchData(url)
        .then(data => {
            setTimeout(() => {
                para.textContent = JSON.stringify(data);
            }, 5000); 
        })
        .catch(error => {
            console.error(error);
            para.innerHTML= `operation timed out ${error}`
        });
    };
        
btn.addEventListener('click', displayData);