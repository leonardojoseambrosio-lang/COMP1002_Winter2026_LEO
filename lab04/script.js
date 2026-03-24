//Submit button
let submitBtn = document.querySelector('button[type="submit"]'); //select button - type="submit"
let nameInput = document.getElementById("nameInput");//select ID nameInput (input id="nameInput")
let welcomeMessage = document.getElementById("welcomeMessage"); // get element "welcomeMessage"(<p id="welcomeMessage">).

submitBtn.addEventListener("click", function(event){//function to submit button

event.preventDefault(); //prevents the page from refresh

if(nameInput.value.trim() == ""){//if to prevent blank input

    console.log("nameInput is empty");
}
else{//display Welcome Message
// update the <p> element with a welcome message using the user's input
welcomeMessage.textContent = "Welcome, " + nameInput.value + "!";//get the text entered by the user in the input and concatenate with "Welcome" and "!"
nameInput.value = ""; // clears the text inside the input box

}


}
);

//DarkMode
let themeBtn = document.getElementById("themeButton");//get the Id "themeButton" (button id = "themeButton")
let bodyTheme = document.body //select the <body> element

themeBtn.addEventListener("click", function(){// Add click event listener to the dark mode button

bodyTheme.classList.toggle("dark-mode");// Toggle the 'dark-mode' class on the <body> element (CSS changes background/colors).

    if(bodyTheme.classList.contains("dark-mode")){// Check if <body> currently has the 'dark-mode' class

        themeBtn.textContent = "Toggle Light Mode";// Update button text when in dark mode
    }
    else
    {
        themeBtn.textContent = "Toggle Dark Mode";// Update button text when back to light mode
    }

});