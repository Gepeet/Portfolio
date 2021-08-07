const toggle = document.getElementById('nav-btn');
const page = document.getElementById('page');

toggle.onclick = function(){
    // console.log("Active");
     toggle.classList.toggle('active');
     page.classList.toggle('active');
}
