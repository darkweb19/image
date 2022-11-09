var fullImgBox = document.getElementById("fullImgBox");;
var fullImg = document.getElementById('fullImg');

function  openFullImg(pic){
    fullImgBox.style.display ='flex';
    fullImg.src = pic ;
}

function closeFullImg(){
    fullImgBox.style.display ='none';
}


// -------------for dark theme -------------

var icon  = document.getElementById('icon');

icon.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun')
    }
    else{
        icon.classList.add('fa-moon');
    }
})