document.addEventListener('DOMContentLoaded', function() {
   
    var generateButton = document.getElementById("generateButton");
    var qrImage = document.getElementById("qrImage");
    var qrText = document.getElementById("qrText");

    
    generateButton.addEventListener("click", function() {
        if (qrText.value.trim() === "") {
            
            message.style.display = "block"; // Display the error message
            qrImage.src = ""; // Clear the image

        } else {
           
            message.style.display = "none"; // Hide the error message
            qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value; 
        }
    });

});
