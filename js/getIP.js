// https://www.geeksforgeeks.org/how-to-get-client-ip-address-using-javascript/


<script src= 
"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> 
</script> 

<script> 
    /* Add "https://api.ipify.org?format=json" statement 
    this will communicate with the ipify servers in 
    order to retrieve the IP address $.getJSON will 
    load JSON-encoded data from the server using a 
    GET HTTP request */ 

    $.getJSON("https://api.ipify.org?format=json", 
                                    function myFunction(data) { 

        // Setting text of element P with id gfg 
        $("#gfg").html(data.ip); 
        return gfg;
    }) 
    
    document.getElementById("gfg").innerHTML = myFunction(); 
</script> 