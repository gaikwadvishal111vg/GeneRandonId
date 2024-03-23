let details = document.querySelector(".details");
let imgContainer = document.querySelector(".img_container");
let cardgeneratebtn = document.getElementById("get_User_btn");
let url = "https://random-data-api.com/api/v2/users?response_type=json";

let getUser = () => {
  fetch(url)
    .then((responses) => responses.json())
    .then((data) => {
    //   console.log(data);
    //   console.log(data.first_name);
    //   console.log(data.last_name);
    //   console.log(data.date_of_birth);
    //   console.log(data.gender);
    //   console.log(data.avatar);
    //   console.log(data.employment.title);
    //   console.log(data.address.city);

      imgContainer.innerHTML = `<img src = ${data.avatar}>`;
      details.innerHTML = `<h2>${data.first_name} ${data.last_name}</h2>
      <h3>${data.date_of_birth}</h3>  
      <h3>${data.employment.title}</h3>
        <h4><i class="fa-solid fa-location-dot"></i>${data.address.city}</h4>`;

        let randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6,"0");
    console.log(randomColor);
    document.documentElement.style.setProperty("--theme-color",randomColor);
    });
};
window.addEventListener("load", getUser);
cardgeneratebtn.addEventListener("click", getUser);


let count = localStorage.getItem("cardLike")?
localStorage.getItem("cardLike"):0;

document.getElementById("likebtn").addEventListener("click", ()=>{
  count++;
  document.querySelector("#likes").innerText = count;
  localStorage.setItem("cardLike", count);
})
document.querySelector("#likes").innerText = count;