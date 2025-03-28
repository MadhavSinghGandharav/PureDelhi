const DEFAULT_LOCATION = "New Delhi";
const DATE_FORMAT_OPTIONS = {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
};

// DOM Elements
const searchBar = document.querySelector(".search-bar");
const currLocationElement = document.querySelector(".current-location");
const timeElement = document.querySelector(".time");

// Helper Functions
function formatDate(date) {
  return date.toLocaleString("en-US", DATE_FORMAT_OPTIONS);
}

function updateLocation(location) {
  const displayLocation = location?.trim() || DEFAULT_LOCATION;
  currLocationElement.innerText = `Current Location: ${displayLocation}`;
}

function updateTime() {
  const now = new Date();
  timeElement.innerText = formatDate(now);
}

// Event Handlers
function handleLocationUpdate(event) {
  if (event.key === "Enter" || event.type === "click") {
    updateLocation(searchBar.value);
    // Clear search bar after submission
    searchBar.value = "";
  }
}

// Initialize
function initialize() {
  // Set initial location
  updateLocation(DEFAULT_LOCATION);

  // Set initial time
  updateTime();

  // Update time every minute
  setInterval(updateTime, 60000);

  // Event Listeners
  searchBar.addEventListener("keydown", handleLocationUpdate);
  document
    .querySelector(".search-btn")
    .addEventListener("click", handleLocationUpdate);
}

// Start the app
document.addEventListener("DOMContentLoaded", initialize);
