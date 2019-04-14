/*
 <div class='fullScreen'>
   <img src='./images/wrong.png'>
   <button class='close'>Close</button>
 </div>
 */


 document.addEventListener("DOMContentLoaded", function() {
   
  var gallery = document.querySelector('.gallery');
    var images = document.querySelectorAll(".gallery li img");
    var body = document.querySelector("body");

    var imgArr = Array.from(images);
    console.log(imgArr);

    for (var i = 0; i < imgArr.length; i++) {
      imgArr[i].addEventListener("click", function() {
        body.removeChild( gallery);
        body.innerHTML += '<div class="fullScreen"><img src="' + this.src + '"><button class="close">Close<button></div>';

        var button = document.querySelector(".close");
        var fullScreen = document.querySelector(".fullScreen");

        button.addEventListener("click", function() {
          body.removeChild(fullScreen);
          body.appendChild(gallery)
        })
      });
    }

    
      
      
 });