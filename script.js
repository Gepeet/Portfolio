/////ON PAGE LOAD

const fadein = document.querySelector('.tagline');
// let opacity = 0;
window.onload = function(){
    setTimeout(function(){
        fadein.style.opacity=1;
        fadein.classList.add('slide');
    }, 1000);
}


// landing page

const toggle = document.getElementById('nav-btn');
const page = document.getElementById('page');

toggle.onclick = function(){
    // console.log("Active");
     toggle.classList.toggle('active');
     page.classList.toggle('active');
}



// navigation 

const ctainer = document.getElementsByClassName('container');
const bbtn = document.getElementsByClassName('btn');

const button = document.getElementsByClassName('btn');
    for (i = 0; i < button.length; i++) {
        button[i].addEventListener('click', toggleItem, false);
      
    }
    function toggleItem() {
        let itemId = this.id;
        

        for (i = 0 ; i < button.length; i++){
            if(button[i].id === itemId){
            button[i].classList.add("toggle");
        
        }else{
            button[i].classList.remove("toggle");
      
        }
        }
        
        renderContainer();
    
    function renderContainer() {
        const container = document.getElementsByClassName('container');

        for (i = 0; i < container.length; i++) {
            if(itemId === container[i].id){
                container[i].classList.add("show");
                // if (link.id === itemClass){
                //     link.classList.add("toggle");
                // }else{

                // }

            }else{
                container[i].classList.remove("show");
                // link.classList.remove("toggle");
            }
        }
    }
}

function back(){
    for (i=0; i<ctainer.length;i++){
        ctainer[i].classList.remove("show");
    }
    for (i=0; i<bbtn.length;i++){
        bbtn[i].classList.remove("toggle");
    }
}

      ///BACK OR REMOVE TOGGLE AND SHOW 


//     function removeB(){
//         const rbtn = document.getElementsByClassName('btn');
        
//         rbtn.classList.remove("toggle");
        
//     }
// }
// }