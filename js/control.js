/////////////           Nav Bar          /////////////


let nav_trigger = document.getElementById('nav_trigger');
let nav_close = document.getElementById('close');

nav_trigger.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('navbar1').classList.toggle('navbar_show');
    document.getElementById('navbar2').classList.remove('navbar_show2');
});

nav_close.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('navbar1').classList.remove('navbar_show');
});


let nav_trigger2 = document.getElementById('nav_trigger2');
let nav_close2 = document.getElementById('close2');

nav_trigger2.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('navbar2').classList.toggle('navbar_show2');
    document.getElementById('navbar1').classList.remove('navbar_show');
});

nav_close2.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('navbar2').classList.remove('navbar_show2');
});





///////////////       Result                      ////////////////////


function khoj(boi){
    
imgbody = ' ';

for (let index = 1; index < 10; index++) {
    imgbody+=
    `
    <div class="img_holder">
                                <img class= " img" src="./img/${boi}/img${index}.jpg">
                            </div>
    `;

}

document.getElementById('gallery').innerHTML=imgbody;
}


