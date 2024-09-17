let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let selectedDay = null; // Track the selected day

const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"
];

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Function to generate the calendar based on month and year
function generateCalendar(month, year) {
    const calendarGrid = document.getElementById("calendar-grid");

    // Clear previous calendar cells, except day labels (Sun-Sat)
    while (calendarGrid.children.length > 7) {
        calendarGrid.removeChild(calendarGrid.lastChild);
    }

    const firstDay = new Date(year, month, 1).getDay(); // Day of the week the month starts on
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in the month
    const today = new Date();

    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("empty-cell"); // Mark it as an empty cell
        calendarGrid.appendChild(emptyCell);
    }

    // Add day cells for the current month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement("div");
        dayCell.textContent = day;

        // Mark today's date
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayCell.classList.add("today");
        }

        // Add event listener to select the date
        dayCell.addEventListener("click", function() {
            selectDate(day, month, year);
        });

        calendarGrid.appendChild(dayCell);
    }
}

// Function to populate month and year selectors
function populateSelectors() {
    const monthSelector = document.getElementById("month-selector");
    const yearSelector = document.getElementById("year-selector");

    // Populate month selector
    monthNames.forEach((month, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = month;
        monthSelector.appendChild(option);
    });
    monthSelector.value = currentMonth; // Set the current month

    // Populate year selector (from 1900 to 2100)
    for (let year = 1900; year <= 2100; year++) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelector.appendChild(option);
    }
    yearSelector.value = currentYear; // Set the current year
}

// Function to handle selecting a date
function selectDate(day, month, year) {
    const previousSelected = document.querySelector(".selected");

    // Remove the previous selected class
    if (previousSelected) {
        previousSelected.classList.remove("selected");
    }

    // Find the newly selected day in the calendar grid
    const dayCells = document.querySelectorAll("#calendar-grid div:not(.empty-cell)"); // Exclude empty cells
    const selectedIndex = day - 1; // Adjust to 0-based index

    // Set the selected class on the clicked date
    if (dayCells[selectedIndex + 7]) { // Offset by 7 to exclude day names
        dayCells[selectedIndex + 7].classList.add("selected");
    }

    // Log the selected date in dd-mm-yyyy format
    const formattedDate = `${String(day).padStart(2, '0')}-${String(month + 1).padStart(2, '0')}-${year}`;
    console.log(formattedDate);
}

// Event listeners for month and year changes
document.getElementById("month-selector").addEventListener("change", function() {
    currentMonth = parseInt(this.value);
    generateCalendar(currentMonth, currentYear);
});

document.getElementById("year-selector").addEventListener("change", function() {
    currentYear = parseInt(this.value);
    generateCalendar(currentMonth, currentYear);
});

// Initialize the calendar for the current month and year
populateSelectors();
generateCalendar(currentMonth, currentYear);
