var vid = document.getElementById("video")
vid.playbackRate = 2.0;

var inputElement = document.getElementById("getter")

inputElement.onchange = function(event) {
    var fileList = inputElement.files;
 }

let bt = document.getElementById("b1");
bt.onclick = function f1(){
    var media = URL.createObjectURL(inputElement.files[0]);
    vid.src = media;
}

let btn = document.getElementById("button");
btn.onclick = function f2(){
    var inputVal = document.getElementById("speed").value;
    vid.playbackRate = inputVal;
}