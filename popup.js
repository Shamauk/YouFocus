let toggleButton = document.getElementById("toggleButton");
let statusDiv = document.getElementById("status");

// This variable represents the state of the extension
// You should replace this with actual code to get and set the state
let extensionEnabled = false;

toggleButton.addEventListener("click", function () {
  extensionEnabled = !extensionEnabled;
  updateUI();
});

function updateUI() {
  if (extensionEnabled) {
    statusDiv.textContent = "Extension is enabled";
    toggleButton.textContent = "Disable";
  } else {
    statusDiv.textContent = "Extension is disabled";
    toggleButton.textContent = "Enable";
  }
}

// Update the UI to match the extension's state on popup load
updateUI();
