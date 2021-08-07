burger = document.querySelector("#burger");
nav_li = document.getElementsByClassName("nav-li");

burger.addEventListener('click',()=>{
    for(var i=0;i<nav_li.length;i++)
    {
        nav_li[i].classList.toggle('v-res');
    }
    // nav_li.classList.toggle('v-res');
});