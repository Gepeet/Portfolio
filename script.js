// landing page

const toggle = document.getElementById('nav-btn');
const page = document.getElementById('page');

toggle.onclick = function(){
    // console.log("Active");
     toggle.classList.toggle('active');
     page.classList.toggle('active');
}


// navigation 

const about = document.getElementById('about');
const project = document.getElementById('project');
const skills = document.getElementById('skills');

const aboutC = document.getElementById('about-c');

about.onclick = function(){
    aboutC.classList.add('show');
    project.classList.remove('show');
    skills.classList.remove('show');
    about.classList.add('toggle');

}
project.onclick = function(){
    aboutC.classList.remove('show');
    project.classList.add('show');
    skills.classList.remove('show');

}
skills.onclick = function(){
    aboutC.classList.remove('show');
    project.classList.remove('show');
    skills.classList.add('show');

}