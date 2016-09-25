console.log('Loaded!');

// change the text of maintext div
var element=document.getElementById('main-text');

element.innerText='new value';

/*
// move the image

var img=document.getElementById('madi');
img.onclick = function() {
    
    img.style.marginLeft ='100px';
};

*/


// move the image

var img=document.getElementById('madi');
var marginLeft=0;
function moveRight() {
    marginLeft=marginLeft+10;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,100)
};