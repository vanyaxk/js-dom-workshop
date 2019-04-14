document.addEventListener("DOMContentLoaded", function() {
    console.log("działa");

    var gallery = document.querySelector("#gallery");
    var images = document.querySelectorAll("img");
    var show = document.querySelector("#showButton");
    var hide = document.querySelector("#hideButton");
    var input = document.querySelector('#tagInput');

    var imgArr = Array.from(images);
    console.log(imgArr);

    show.addEventListener("click", function() {
        

        for (var i = 0; i < imgArr.length; i++) {
            var tagArr = (Array.from(imgArr[i].dataset.tag)).join("").split(",");
            console.log(tagArr);
            
            for (var j = 0; j < tagArr.length; j++) {
                if (tagArr[j] == input.value) {
                    imgArr[i].classList.remove("invisible");
                    input.value = '';
                }
            }


        }
    })

    hide.addEventListener("click", function() {

        for (var i = 0; i < imgArr.length; i++) {
            var tagArr = (Array.from(imgArr[i].dataset.tag)).join("").split(",");
            console.log(tagArr);
            
            for (var j = 0; j < tagArr.length; j++) {
                    if (tagArr[j] == input.value) {
                        imgArr[i].classList.add("invisible");
                    }

                input.value = '';
            }


        }
    });
});