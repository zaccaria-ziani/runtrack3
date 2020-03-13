

$("#button").click(function()
{
    $("body").append("<p>“le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément. ”.</p>")
    $("body").append('<button id="remove">remove</button>')

    $("#remove").click(function()
    {
        $("p").remove();
        $("#remove").remove();
    })
});