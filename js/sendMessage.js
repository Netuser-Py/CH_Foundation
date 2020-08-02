// http://jsfiddle.net/228d4snb/
var message = "";

$("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "https://formspree.io/mnqglkeb", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the email, we\'ll be in touch soon.');
    window.open("https://chebibfoundation.org/", "_self");
    return false;
});	