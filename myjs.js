document.getElementById("add-button").addEventListener("click", addToList);

const li = document.querySelector("li");

function addToList() {
    const inputField = document.querySelector("input");
    const inputValue = inputField.value.trim(); 
    // li.textContent = "Test123";

    if(inputValue !== ""){
        const ul = document.querySelector("ul");
        const li = document.createElement("li"); // Create new list item
        li.textContent = inputValue;
        ul.appendChild(li); // Append to the list
    
        inputField.value = " ";
    } else{
        alert("Please enter a text in the field.");
    }


}       