$("#button").click(function()
{
    for(i=0;i<=25;i++)
    {
        var alea = Math.floor((Math.random() * 6) + 1);
        $("#id"+alea).appendTo($("#melangees"));
    console.log(i);
    
    }
   
});

$("img").click(function()
{
   $(this).appendTo("#rangees");
});


