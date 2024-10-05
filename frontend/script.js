let filesList = [];
let totalStorageUsed = 0;

function uploadFiles() {
    const input = document.getElementById("fileInput");
    const files = input.files;

    if (files.length === 0) {
        alert("Please select a file to upload.");
        return;
    }

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);

        // Create a file URL for download
        const fileUrl = URL.createObjectURL(file);

        const fileData = {
            name: file.name,
            size: fileSizeMB,
            dateUploaded: new Date().toLocaleString(),
            url: fileUrl // Store the file URL for download/view
        };
        filesList.push(fileData);

        totalStorageUsed += parseFloat(fileSizeMB);
        updateDashboard();
    }

    input.value = ""; // Clear the input after upload
}

function updateDashboard() {
    document.getElementById("totalStorage").textContent = `${totalStorageUsed.toFixed(2)} MB`;

    const tbody = document.querySelector("#fileTable tbody");
    tbody.innerHTML = ""; // Clear table before re-adding

    filesList.forEach((file, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${file.name}</td>
            <td>${file.size} MB</td>
            <td>${file.dateUploaded}</td>
            <td>
                <button onclick="viewFile(${index})">View</button>
                <a href="${file.url}" download="${file.name}">
                    <button>Download</button>
                </a>
                <button class="delete-btn" onclick="deleteFile(${index})">Delete</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function deleteFile(index) {
    const file = filesList[index];
    totalStorageUsed -= parseFloat(file.size);
    filesList.splice(index, 1); // Remove file from list
    updateDashboard();
}

function viewFile(index) {
    const file = filesList[index];
    const newWindow = window.open(file.url, '_blank'); // Open file in a new tab
    if (!newWindow) {
        alert("Please allow popups for this website."); // Handle popup blockers
    }
}
