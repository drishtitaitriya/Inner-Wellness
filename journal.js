
document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        alert("You need to log in first!");
        window.location.href = "index.html";
        return;
    }


    loadEntries();

    document.getElementById("saveEntry").addEventListener("click", saveEntry);
});

function saveEntry() {
    let loggedInUser = localStorage.getItem("loggedInUser");
    let entryContent = document.getElementById("journalEntry").innerHTML.trim();

    if (!loggedInUser) {
        alert("You must be logged in to save your journal!");
        return;
    }

    if (entryContent === "" || entryContent === "<br>") {
        alert("Cannot save an empty entry!");
        return;
    }

    let userEntries = JSON.parse(localStorage.getItem(`journal_${loggedInUser}`)) || [];
    userEntries.push(entryContent);
    localStorage.setItem(`journal_${loggedInUser}`, JSON.stringify(userEntries));

    document.getElementById("journalEntry").innerHTML = ""; // Clear input after saving
    loadEntries();
}

function loadEntries() {
    let loggedInUser = localStorage.getItem("loggedInUser");
    let entriesList = document.getElementById("entriesList");

    entriesList.innerHTML = "";

    let userEntries = JSON.parse(localStorage.getItem(`journal_${loggedInUser}`)) || [];

    userEntries.forEach((entry, index) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${entry}</span>
            <div>
                <button onclick="editEntry(${index})">✏ Edit</button>
                <button onclick="deleteEntry(${index})">❌ Delete</button>
            </div>
        `;
        entriesList.appendChild(listItem);
    });
}

function deleteEntry(index) {
    let loggedInUser = localStorage.getItem("loggedInUser");
    let userEntries = JSON.parse(localStorage.getItem(`journal_${loggedInUser}`)) || [];

    userEntries.splice(index, 1);
    localStorage.setItem(`journal_${loggedInUser}`, JSON.stringify(userEntries));

    loadEntries();
}

function editEntry(index) {
    let loggedInUser = localStorage.getItem("loggedInUser");
    let userEntries = JSON.parse(localStorage.getItem(`journal_${loggedInUser}`)) || [];
    let editedText = userEntries[index];

    document.getElementById("journalEntry").innerHTML = editedText;

    userEntries.splice(index, 1);
    localStorage.setItem(`journal_${loggedInUser}`, JSON.stringify(userEntries));

    loadEntries();
}

function formatText(command) {
    document.execCommand(command, false, null);
}
