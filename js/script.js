$(document).ready(function() {
    $('.header_burger, .header_list').click(function(event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
