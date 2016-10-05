$(document).ready(function() {
    var tabs = $('#tabs');
    $('div', tabs).each(function(i) {
        if ( i != 0 ) $(this).hide(0);
    });

    tabs.on('click', '.tabs-menu a', function(e) {

        /* Знаходимо значення ID div, який потрібно відобразити */
        var tabId = $(this).attr('href');

        /* Видаляємо всі класи у натиснутого  посилання і добавляємо клас active вибраній вкладці */
        $('.tabs-menu a', tabs).removeClass();
        $(this).addClass('active');

        /* Ховаємо вміст всіх вкладок і показуємо вміст натиснутої */
        $('div', tabs).hide(0);
        $(tabId).fadeIn(300);
    });

    $('.tabs-menu a').hover(function() {
        $(this).css("background-color", "rgba(131, 70, 93, 0.3").filter(".active").css("background-color", "");
        }, function() {
        $(this).css("background-color", "").filter(".active");
    });

    $("input").hover(function() {
        $(this).next(".help").animate({opacity: "show"}, "slow");}, 
        function() {
            $(this).next(".help").animate({opacity: "hide"}, "fast");
    });

});