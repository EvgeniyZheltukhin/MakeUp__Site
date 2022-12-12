(function() {
    var buttons = document.querySelectorAll("#control a"),
        x;


    // Каждой кнопке присвоим номер
    for (x = 0; x < buttons.length; x++) {
        buttons[x].windNum = x;
    }

    document.getElementById("control").onclick = function(e) { // Назначаем событие блоку кнопок
        e = e || window.event;
        if (!e.target) e.target = e.Event.target;
        if (!e.target.type === "button" || !e.target.windNum) return false;

        document.querySelector(".wind-expand").className = "wind";
        document.querySelectorAll(".wind")[e.target.windNum].className = "wind-expand";
    }

})()
$(function() {
    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
});