import './style.css'

const textInput = document.querySelector<HTMLInputElement>('#textBox');
const addButton = document.querySelector<HTMLButtonElement>('.add-btn');
const list = document.querySelector<HTMLUListElement>('#listContainer');



addButton.addEventListener("click", () => {
    const textContent = textInput.value.trim();  // Get the input value and trim extra spaces

    if (textContent !== "") {
        // Create a new list item (li element)
        const newItem = document.createElement("li");
        newItem.textContent = textContent;

        // Append the new item to the todo list
        list.appendChild(newItem);
    }
});

