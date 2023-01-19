var slider = document.getElementById("myRange");
var output = document.getElementById("Output");
var value = document.getElementById("myRange").value;
var checkbox = document.getElementById("myCheck")
var checked = document.getElementById("myCheck").checked
output.innerHTML = slider.value; 

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  value = this.value;
}

checkbox.oninput = function(){
    checked = document.getElementById("myCheck").checked;
}



const theButton = document.getElementById("myBtn");

theButton.addEventListener("click", function (e) {
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const symbol = ",.?/'*%^"
let result = "";
if (checked == true){
    for (let i = 0; i < value; i++) {
        switch (Math.floor(Math.random() * 4)) {
        //Number
        case 0:
            result += Math.floor(Math.random() * 9);

            break;
        //lowercase
        case 1:
            result += alphabet[Math.floor(Math.random() * alphabet.length)];

            break;
        //uppercase
        case 2:
            result +=
            alphabet[
                Math.floor(Math.random() * alphabet.length)
            ].toUpperCase();

            break;
        case 3:
            result +=
            symbol[
                Math.floor(Math.random() * symbol.length)
            ]
        }
    }
}
else{
        for (let j = 0; j < value; j++) {
            switch (Math.floor(Math.random() * 3)) {
            //Number
            case 0:
                result += Math.floor(Math.random() * 9);

                break;
            //lowercase
            case 1:
                result += alphabet[Math.floor(Math.random() * alphabet.length)];

                break;
            //uppercase
            case 2:
                result +=
                alphabet[
                    Math.floor(Math.random() * alphabet.length)
                ].toUpperCase();

                break;
            }
        }
    }

document.getElementById("result").value = result;
console.log(checked)
console.log(result)
});

function copy2clip() {
    // Get the text field
    var copyText = document.getElementById("result");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }