// // Number of rows
// const numberOfRows = 10;

// // Container to hold all rows
// const rowsContainer = document.getElementById("rowsContainer");

// // Function to create each row with Edit and Copy buttons
// for (let i = 0; i < numberOfRows; i++) {
//     const row = document.createElement("div");
//     row.classList.add("row");

//     // Textarea for multi-line input
//     const textArea = document.createElement("textarea");
//     textArea.placeholder = `Row ${i + 1}`;
    
//     // Edit button (for consistency, though textarea is already editable)
//     const editButton = document.createElement("button");
//     editButton.textContent = "Edit";
    
//     // Copy button
//     const copyButton = document.createElement("button");
//     copyButton.textContent = "Copy";
//     copyButton.addEventListener("click", () => {
//         const text = textArea.value.trim();
        
//         if (text) {
//             navigator.clipboard.writeText(text).then(() => {
//                 alert("Text copied with custom formatting!");
//                 window.close();  // Close the popup after copying
//             }).catch(err => {
//                 console.error("Failed to copy text: ", err);
//             });
//         } else {
//             alert("Please enter text to copy.");
//         }
//     });
    
//     // Button container
//     const buttonGroup = document.createElement("div");
//     buttonGroup.classList.add("button-group");
//     buttonGroup.appendChild(editButton);
//     buttonGroup.appendChild(copyButton);
    
//     // Append elements to the row
//     row.appendChild(textArea);
//     row.appendChild(buttonGroup);

//     // Append row to the container
//     rowsContainer.appendChild(row);
// }
// Number of rows
const numberOfRows = 10;

// Container to hold all rows
const rowsContainer = document.getElementById("rowsContainer");

// Function to create each row with Copy and Clear buttons
for (let i = 0; i < numberOfRows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    // Textarea for multi-line input with sequential placeholder text
    const textArea = document.createElement("textarea");
    textArea.placeholder = `Enter text ${i + 1} here`; // Sequential placeholder

    // Load any saved text from localStorage
    const savedText = localStorage.getItem(`text${i + 1}`);
    if (savedText) {
        textArea.value = savedText; // Populate textarea with saved text
    }

    // Copy button
    const copyButton = document.createElement("button");
    copyButton.textContent = "Copy";
    copyButton.classList.add("copy-button"); // Apply light blue color
    copyButton.addEventListener("click", () => {
        const text = textArea.value.trim();

        if (text) {
            navigator.clipboard.writeText(text).then(() => {
                // Do nothing on success (alert removed)
            }).catch(err => {
                console.error("Failed to copy text: ", err);
            });
        }
    });

    // Clear button
    const clearButton = document.createElement("button");
    clearButton.textContent = "Clear";
    clearButton.classList.add("clear-button"); // Optional: Add a class for styling
    clearButton.addEventListener("click", () => {
        textArea.value = ""; // Clear the textarea
        localStorage.removeItem(`text${i + 1}`); // Remove from localStorage
    });

    // Save text to localStorage when typing
    textArea.addEventListener("input", () => {
        localStorage.setItem(`text${i + 1}`, textArea.value);
    });

    // Button container
    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("button-group");
    buttonGroup.appendChild(copyButton);
    buttonGroup.appendChild(clearButton); // Add Clear button to the group

    // Append elements to the row
    row.appendChild(textArea);
    row.appendChild(buttonGroup);

    // Append row to the container
    rowsContainer.appendChild(row);
}
