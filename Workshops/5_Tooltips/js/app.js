/*
 <span class="tooltipText">Text tooltipa</span>
 */

 document.addEventListener("DOMContentLoaded", function() {
    console.log("działa");

    var tooltips = Array.from(document.querySelectorAll(".tooltip"));

    console.log(tooltips);

    for (var i = 0; i < tooltips.length; i++) {
        var addTooltip = "<span class='tooltipText'>Text tooltipa</span>";
        tooltips[i].addEventListener("mouseover", function() {
            this.insertAdjacentHTML('beforeend', addTooltip);
        });

        tooltips[i].addEventListener("mouseout", function() {
            this.removeChild(this.firstElementChild);
        })
    }
 });