function validateForm() {
    var x = document.forms["myForm"]["answer"].value.toLowerCase().trim();   		
    if (x !== "sky") {
        alert("Try Again! Where do we fly?");
        return false;        
    }
}
