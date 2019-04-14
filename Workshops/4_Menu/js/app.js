document.addEventListener("DOMContentLoaded", function() {

    var nav = Array.from(document.querySelectorAll(".nav>ul>li"));

    for (var i = 0; i < nav.length; i++) {
        

        nav[i].addEventListener("mouseover", function() {
            var dropdown = this.firstElementChild;
            if (dropdown !== null) {
                dropdown.style.display = "block";
            }
        });

        nav[i].addEventListener("mouseout", function() {
            var dropdown = this.firstElementChild;
            if (dropdown !== null) {
                dropdown.style.display = "none";
            }
        });

    }

});