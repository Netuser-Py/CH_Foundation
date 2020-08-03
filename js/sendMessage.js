// http://jsfiddle.net/228d4snb/
var message = "";
var ip1 = "";

/* Add "https://api.ipify.org?format=json" statement 
this will communicate with the ipify servers in 
order to retrieve the IP address $.getJSON will 
load JSON-encoded data from the server using a 
GET HTTP request */ 
$.getJSON("https://api.ipify.org?format=json", 
function myIPFunction(data) { 
//alert(data.ip);
ip1 = data.ip;
}) 

$("#sendMessage").on("click", function() { 
    message = $("#contactform").serialize() + '&senderIP=' + ip1; 
    // alert(message);
    $.ajax({
        url: "https://formspree.io/xnqgwzrg", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    
    alert('Thanks for the email, we\'ll be in touch soon.');
    window.open("https://chebibfoundation.org/", "_self");
    return false;
});	