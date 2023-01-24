$(document).ready(function(){
    console.log("script is running");
    $("a").click(function(){
        console.log("link clicked");
        $("body").fadeOut(1000);
    });
});
