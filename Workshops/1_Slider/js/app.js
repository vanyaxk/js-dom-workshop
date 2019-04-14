document.addEventListener("DOMContentLoaded", function() {
    console.log("działa");

    var prev = document.querySelector("#prevPicture");
    var next = document.querySelector("#nextPicture");
    var images = document.querySelectorAll('li');

    var imgArr = Array.from(images);


    console.log(imgArr);

    var imgCount = 0;

    imgArr[imgCount].classList.add("visible");

    prev.addEventListener("click", function() {
        console.log("click prev");
        console.log(imgCount);


        imgArr[imgCount].classList.remove("visible");
        imgCount--;
        if (imgCount < 0) {
            imgCount = imgArr.length - 1;
        }
        imgArr[imgCount].classList.add("visible");

    })

    next.addEventListener("click", function() {
        console.log("click next");

        imgArr[imgCount].classList.remove("visible");
        imgCount++;
        if (imgCount > imgArr.length - 1) {
            imgCount = 0;
        }
        imgArr[imgCount].classList.add("visible");

    })
});