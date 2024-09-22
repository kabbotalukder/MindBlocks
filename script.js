let totalEstHour = 0;
let totalEstMinute = 0;
let totalTimer = 0;

let editingIdx = null;

let categories = {
    "All": 0,
    "Personal": 0,
    "Programming": 0,
    "Study": 0,
    "Work": 0,
    "Demo": 0,
    // "b": 0,
    // "c": 0,
    // "d": 0,
    // "e": 0,
}

const addCategoryModal = document.getElementById("add-category-modal");
const addCategoryBtn = document.getElementById("add-category-btn");
const addCategoryModalSave = document.getElementById("add-category-save-btn");
const addCategoryModalClose = document.getElementById("add-category-modal-close");
const enteredNewCategory = document.getElementById("add-category-title");

function showAddCategoryModal()
{
    addCategoryModal.style.display = "block";
}

function closeAddCategoryModal()
{
    addCategoryModal.style.display = "none";
}

function saveNewCategory()
{
    const newCategory = enteredNewCategory.value.trim();
    if(newCategory === "")
    {
        alert("Category name can't be empty!");
        enteredNewCategory.value = "";
        return;
    }
    categories[newCategory] = 0;
    enteredNewCategory.value = "";
    // closeAddCategoryModal();
    clearCategories();
    loadCategories();
    renderTasks();
}

addCategoryBtn.addEventListener("click", () => showAddCategoryModal());
addCategoryModalSave.addEventListener("click", () => saveNewCategory());
addCategoryModalClose.addEventListener("click", () => closeAddCategoryModal());

const availableCategories = document.getElementById("available-categories");
const availableCategoriesEdit = document.getElementById("available-categories-edit");

function loadCategories()
{
    for (const category in categories){

        if(category === "All") continue;
    
        const categoryOption = document.createElement("option");
        categoryOption.textContent = category;
        availableCategories.appendChild(categoryOption);
    
        const categoryOptionEdit = document.createElement("option");
        categoryOptionEdit.textContent = category;
        availableCategoriesEdit.appendChild(categoryOptionEdit);
    }
}
function clearCategories()
{   
    availableCategories.innerHTML = "";

    var defOption = document.createElement("option");
    defOption.value = "0";
    defOption.disabled = true;
    defOption.selected = true;
    defOption.hidden = true;
    defOption.textContent = "Select category";

    availableCategories.appendChild(defOption);

    availableCategoriesEdit.innerHTML = "";
}

clearCategories();
loadCategories();

// let tasks = {}

let tasks = {
    "19-09-2024": [
        {
            timerTime: 3600,
            taskCategory: "Study",
            taskTitle: "finish the DLD BCD chapter", 
            estimatedTime: [2, 30],
            taskStatus: "Not Started"
        },
        {
            timerTime: 1800,
            taskCategory: "Programming",
            taskTitle: "implement stack and queue with custom linkedlist in c++", 
            estimatedTime: [3, 30],
            taskStatus: "Not Started"
        },
    ], 
    "11-09-2024": [
        {
            timerTime: 5400,
            taskCategory: "Work",
            taskTitle: "demo task (in progress)", 
            estimatedTime: [0, 0],
            taskStatus: "In Progress"
        }, 
        {
            timerTime: 0,
            taskCategory: "Work",
            taskTitle: "demo task (done)", 
            estimatedTime: [0, 0],
            taskStatus: "Done"
        }, 
        {
            timerTime: 0,
            taskCategory: "Work",
            taskTitle: "demo task (delayed)", 
            estimatedTime: [0, 0],
            taskStatus: "Delayed"
        }, 
        {
            timerTime: 0,
            taskCategory: "Work",
            taskTitle: "demo task (dropped)", 
            estimatedTime: [0, 0],
            taskStatus: "Dropped"
        },
    ], 
    "22-09-2024": [
        {
            timerTime: 0,
            taskCategory: "Demo",
            taskTitle: "Demo", 
            estimatedTime: [0, 0],
            taskStatus: "Not Started"
        },
        {
            timerTime: 0,
            taskCategory: "Demo",
            taskTitle: "Demo", 
            estimatedTime: [0, 0],
            taskStatus: "Not Started"
        },
    ],
    "04-09-2024": [
        {
            timerTime: 0,
            taskCategory: "Demo",
            taskTitle: "Demo", 
            estimatedTime: [0, 0],
            taskStatus: "Not Started"
        },
        {
            timerTime: 0,
            taskCategory: "Demo",
            taskTitle: "Demo", 
            estimatedTime: [0, 0],
            taskStatus: "Not Started"
        },
    ]
};



// let tasks = {
//     0: {
//         timerTime: [0, 0, 0],
//         taskCategory: "Study",
//         taskTitle: "finish the DLD BCD chapter", 
//         estimatedTime: [2, 30],
//         taskStatus: "Not Started"
//     }, 
//     1: {
//         timerTime: [0, 0],
//         taskCategory: "Programming",
//         taskTitle: "implement stack and queue with custom linkedlist in c++", 
//         estimatedTime: [3, 30],
//         taskStatus: "Not Started"
//     }, 
//     2: {
//         timerTime: [0, 10],
//         taskCategory: "Work",
//         taskTitle: "demo task (in progress)", 
//         estimatedTime: [0, 0],
//         taskStatus: "In Progress"
//     }, 
//     3: {
//         timerTime: [0, 20],
//         taskCategory: "Work",
//         taskTitle: "demo task (done)", 
//         estimatedTime: [0, 0],
//         taskStatus: "Done"
//     }, 
//     4: {
//         timerTime: [0, 30],
//         taskCategory: "Work",
//         taskTitle: "demo task (delayed)", 
//         estimatedTime: [0, 0],
//         taskStatus: "Delayed"
//     }, 
//     5: {
//         timerTime: [0, 40],
//         taskCategory: "Work",
//         taskTitle: "demo task (dropped)", 
//         estimatedTime: [0, 0],
//         taskStatus: "Dropped"
//     },
//     6: {
//         timerTime: "0h 0m",
//         taskCategory: "Demo",
//         taskTitle: "Demo", 
//         estimatedTime: "0h 0h",
//         taskStatus: "Not Started"
//     },
//     7: {
//         timerTime: "0h 0m",
//         taskCategory: "Demo",
//         taskTitle: "Demo", 
//         estimatedTime: "0h 0h",
//         taskStatus: "Not Started"
//     },
//     8: {
//         timerTime: "0h 0m",
//         taskCategory: "Demo",
//         taskTitle: "Demo", 
//         estimatedTime: "0h 0h",
//         taskStatus: "Not Started"
//     },
//     9: {
//         timerTime: "0h 0m",
//         taskCategory: "Demo",
//         taskTitle: "Demo", 
//         estimatedTime: "0h 0h",
//         taskStatus: "Not Started"
//     },
//     10: {
//         timerTime: "0h 0m",
//         taskCategory: "Demo",
//         taskTitle: "Demo", 
//         estimatedTime: "0h 0h",
//         taskStatus: "Not Started"
//     },
//     11: {
//         timerTime: "0h 0m",
//         taskCategory: "Demo",
//         taskTitle: "Demo", 
//         estimatedTime: "0h 0h",
//         taskStatus: "Not Started"
//     },
//     12: {
//         timerTime: "0h 0m",
//         taskCategory: "Demo",
//         taskTitle: "Demo", 
//         estimatedTime: "0h 0h",
//         taskStatus: "Not Started"
//     },
//     13: {
//         timerTime: "0h 0m",
//         taskCategory: "Demo",
//         taskTitle: "Demo", 
//         estimatedTime: "0h 0h",
//         taskStatus: "Not Started"
//     },
//     14: {
//         timerTime: "0h 0m",
//         taskCategory: "Demo",
//         taskTitle: "Demo", 
//         estimatedTime: "0h 0h",
//         taskStatus: "Not Started"
//     },
//     15: {
//         timerTime: "0h 0m",
//         taskCategory: "Demo",
//         taskTitle: "Demo", 
//         estimatedTime: "0h 0h",
//         taskStatus: "Not Started"
//     }
// };

// ------------------------------------------------------------------------
// Calendar
// ------------------------------------------------------------------------

let todayDD;
let todayMM;
let todayYYYY;

let selectedDD;
let selectedMM;
let selectedYYYY;

let formattedSelectedDate;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let selectedDay = null; // Track the selected day

const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"
];

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Set the default date to today and set up the page
function setDefaultDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const dd = String(today.getDate()).padStart(2, '0');
    const selectedDefaultDay = `${dd}-${mm}-${yyyy}`;
    selectedDay = selectedDefaultDay;
    formattedSelectedDate = selectedDefaultDay;

    todayDD = dd;
    todayMM = mm;
    todayYYYY = yyyy;

    // Load tasks for today (if any)
    // console.log(selectedDay);
    loadTasksForDate(selectedDay);
}

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
        dayCell.classList.add("date");
        dayCell.classList.add("day-cell");
        dayCell.textContent = day;

        const dotMark = document.createElement("div");
        dotMark.classList.add("dot-mark");
        dotMark.style.display = "none";

        for(const date in tasks) {
            const dateNumber = Number(date[0] + date[1]);
            // console.log(dateNumber);
            if(dateNumber === day)
            {
                dotMark.style.display = "block";
            }
        }

        dayCell.appendChild(dotMark);

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
    for (let year = 2024; year <= 2100; year++) {
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
    const dayCells = document.querySelectorAll("#calendar-grid div:not(.dot-mark)"); // Exclude empty cells
    const selectedIndex = day - 1; // Adjust to 0-based index

    // Set the selected class on the clicked date
    if (dayCells[selectedIndex + 7]) { // Offset by 7 to exclude day names
        dayCells[selectedIndex + 7].classList.add("selected");
    }

    // Log the selected date in dd-mm-yyyy format with day name
    const selectedDate = new Date(year, month, day);

    

    formattedSelectedDate = `${String(day).padStart(2, '0')}-${String(month + 1).padStart(2, '0')}-${year}`;
    const dayName = dayNames[selectedDate.getDay()];
    console.log(`${dayName}, ${formattedSelectedDate}`);

    const yyyy = selectedDate.getFullYear();
    const mm = String(selectedDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const dd = String(selectedDate.getDate()).padStart(2, '0');

    selectedDD = dd;
    selectedMM = mm;
    selectedYYYY = yyyy;

    selectedDay = formattedSelectedDate;
    loadTasksForDate(selectedDay);
}

// Function to go back to today's date
function goToToday() {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const goToTodayDate = `${String(todayDD).padStart(2, '0')}-${String(todayMM).padStart(2, '0')}-${todayYYYY}`;
    selectedDay = goToTodayDate;
    selectedDD = todayDD;
    selectedMM = todayMM;
    selectedYYYY = todayYYYY;
    generateCalendar(currentMonth, currentYear);
    document.getElementById("month-selector").value = currentMonth;
    document.getElementById("year-selector").value = currentYear;
    loadTasksForDate(goToTodayDate);
}

// Event listener for the Today button
document.getElementById("today-btn").addEventListener("click", function() {
    goToToday();
});

// Event listeners for month and year changes
document.getElementById("month-selector").addEventListener("change", function() {
    currentMonth = parseInt(this.value);
    generateCalendar(currentMonth, currentYear);
});

document.getElementById("year-selector").addEventListener("change", function() {
    currentYear = parseInt(this.value);
    generateCalendar(currentMonth, currentYear);
});

// Function to get time-based greeting
function getGreeting() {
    const hours = new Date().getHours();
    const greetingContainer = document.getElementById("greeting");
    const userName = "Kabbo";
    if (hours > 4 && hours < 12) {
        // return "Good Morning";
        greetingContainer.textContent = "Good Morning, " + userName;
    } else if (hours >= 12 && hours < 18) {
        // return "Good Afternoon";
        greetingContainer.textContent = "Good Afternoon, " + userName;
    } else {
        // return "Good Evening";
        greetingContainer.textContent = "Good Evening, " + userName;
    }
}

// Initialize the calendar for the current month and year
populateSelectors();
getGreeting();
generateCalendar(currentMonth, currentYear);

// --------------------------------------------------------------------

const tasksList = document.getElementById("tasks-list");
const addTaskModal = document.getElementById("add-task-modal");
const addTaskSaveBtn = document.getElementById("add-task-save-btn");
const addTaskBtn = document.getElementById("add-task-btn");
const closeAddTaskBtn = document.getElementById("add-task-modal-close");

const addTaskTitle = document.getElementById("add-task-title");
const addTaskCategory = document.getElementById("available-categories");
const addTaskEstHour = document.getElementById("add-task-est-hour");
const addTaskEstMinute = document.getElementById("add-task-est-minute");

const editTaskModal = document.getElementById("edit-task-modal");
const editTaskSaveBtn = document.getElementById("edit-task-save-btn");
const deleteTaskBtn = document.getElementById("delete-task-btn");

function saveAddTask()
{
    console.log(addTaskCategory);
    addTaskModal.style.display = "none";
    const enteredTitle = addTaskTitle.value.trim();
    const selectedCategory = addTaskCategory.value;
    const estHour = addTaskEstHour.value;
    const estMinute = addTaskEstMinute.value;

    if (enteredTitle === "") {
        alert("Task name cannot be empty!");
        addTaskTitle.value = "";
        addTaskCategory.value = "0";
        return;
    }

    if (selectedCategory === "0") {
        alert("Category cannot be empty!");
        addTaskTitle.value = "";
        addTaskCategory.value = "0";
        return;
    }

    if (!tasks[selectedDay]) {
        tasks[selectedDay] = [];
    }

    tasks[selectedDay].push({
        timerTime: 0,
        taskTitle: enteredTitle,
        taskCategory: selectedCategory,
        estimatedTime: [estHour, estMinute],
        taskStatus: "Not Started"
    });

    addTaskTitle.value = "";
    addTaskCategory.value = "0";
    addTaskEstHour.value = "0";
    addTaskEstMinute.value = "0";

    renderTasks();
}

function showAddTaskModal()
{
    addTaskModal.style.display = "block";
}

function closeAddTaskModal()
{
    addTaskModal.style.display = "none";
}

addTaskBtn.addEventListener("click", () => showAddTaskModal());
addTaskSaveBtn.addEventListener("click", () => saveAddTask());
closeAddTaskBtn.addEventListener("click", () => closeAddTaskModal());

function updateTaskStatusColor(taskElement, taskStatus)
{
    // taskStatus.style.background = "none";
    if(taskStatus.value === "In Progress") {
        taskElement.style.backgroundColor = "rgba(66, 148, 255, 0.4)";
    }
    else if(taskStatus.value === "Done") {
        taskElement.style.backgroundColor = "rgba(11, 206, 131, 0.4)";
    }
    else if(taskStatus.value === "Delayed") {
        taskElement.style.backgroundColor = "rgba(233, 186, 111, 0.4)";
    }
    else if(taskStatus.value === "Dropped") {
        taskElement.style.backgroundColor = "rgba(226, 12, 12, 0.4)";
    }
    else {
        taskElement.style.backgroundColor = "";
    }
}

function showEditTaskModal()
{
    editTaskModal.style.display = "block";
}

function closeEditTaskModal()
{
    editTaskModal.style.display = "none";
}

deleteTaskBtn.addEventListener("click", function() {
    if(editingIdx === null) return;
    // console.log("eIdx: " + editingIdx);
    // console.log(tasks);
    tasks[selectedDay].splice(editingIdx, 1)[0];
    // console.log("deleted idx: " + editingIdx);
    // editingIdx = null;
    closeEditTaskModal();
    renderTasks();
    // console.log(tasks);
});

const editTaskTitle = document.getElementById("edit-task-title");
const editTaskCategory = document.getElementById("available-categories-edit");
const editTaskEstHour = document.getElementById("edit-task-est-hour");
const editTaskEstMinute = document.getElementById("edit-task-est-minute");
const editTaskTimerHour = document.getElementById("edit-task-timer-hour");
const editTaskTimerMinute = document.getElementById("edit-task-timer-minute");

function editTask(task)
{
    let taskTimerHour = Math.floor(task.timerTime / 3600);
    let taskTimerMinute = Math.floor((task.timerTime % 3600) / 60);
    editTaskTimerHour.value = taskTimerHour;
    editTaskTimerMinute.value = taskTimerMinute;
    editTaskCategory.value = task.taskCategory;
    editTaskTitle.value = task.taskTitle;
    editTaskEstHour.value = task.estimatedTime[0];
    editTaskEstMinute.value = task.estimatedTime[1];
    showEditTaskModal();
}

editTaskSaveBtn.addEventListener("click", function() {
    if(editingIdx === null) return;
    const selectedTimerTime = (editTaskTimerHour.value * 3600) + (editTaskTimerMinute.value * 60);
    tasks[selectedDay][editingIdx].timerTime = selectedTimerTime;
    tasks[selectedDay][editingIdx].taskCategory = editTaskCategory.value;
    tasks[selectedDay][editingIdx].taskTitle = editTaskTitle.value.trim();
    tasks[selectedDay][editingIdx].estimatedTime[0] = editTaskEstHour.value;
    tasks[selectedDay][editingIdx].estimatedTime[1] = editTaskEstMinute.value;
    // console.log(tasks);
    closeEditTaskModal();
    editingIdx = null;
    renderTasks();
});

function renderTasks()
{

    // let i = 0;
    tasksList.innerHTML = "";

    if (!tasks[selectedDay] || tasks[selectedDay].length === 0) {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.classList.add("no-task");
        taskElement.textContent = "No tasks added for this date";
        tasksList.appendChild(taskElement);
        return;
    }
    Object.keys(categories).forEach(key => (categories[key] = 0));
    tasks[selectedDay].forEach((task, idx) => {
        // console.log("i  : " + i);
        // Number(idx) == Number(i);
        // console.log("idx: " + i);
        // i++;
        
        categories["All"]++;        

        totalEstHour += Number(task.estimatedTime[0]);
        totalEstMinute += Number(task.estimatedTime[1]);
        totalTimer += Number(task.timerTime);

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const timerElement = document.createElement("div");
        timerElement.classList.add("timer");

        const playBtn = document.createElement("button");
        playBtn.classList.add("play-btn");
        playBtn.textContent = "▶";

        let tempTimerHour = (Math.floor(task.timerTime / 3600));
        let tempTimerMinute = (Math.floor(task.timerTime % 3600) / 60);

        const timerDuration = document.createElement("p");
        timerDuration.classList.add("timer-duration");
        timerDuration.textContent = `${tempTimerHour}h ${tempTimerMinute}m`;

        const taskCategory = document.createElement("p");
        taskCategory.classList.add("task-category");
        taskCategory.textContent = task.taskCategory;

        categories[task.taskCategory]++;

        const taskTitle = document.createElement("p");
        taskTitle.classList.add("task-name"); // !!!
        taskTitle.textContent = task.taskTitle;

        taskTitle.addEventListener("click", function() {
            editingIdx = idx;
            editTask(tasks[selectedDay][idx]);
        });

        const estimatedTime = document.createElement("p");
        estimatedTime.classList.add("estimated-duration"); // !!!
        estimatedTime.textContent = `${task.estimatedTime[0]}h ${task.estimatedTime[1]}m`;

        const taskStatus = document.createElement("select");
        taskStatus.classList.add("task-status");
        const taskStatuses = ["Not Started", "In Progress", "Done", "Delayed", "Dropped"];
        taskStatuses.forEach(status => {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status;
            taskStatus.appendChild(option);
        });

        taskStatus.addEventListener("change", function() {
            task.taskStatus = taskStatus.value;
            // console.log(tasks[idx]);
            // renderTasks(taskElement, taskStatus);
            updateTaskStatusColor(taskElement, taskStatus);
        });

        taskStatus.value = task.taskStatus;
        updateTaskStatusColor(taskElement, taskStatus);

        timerElement.appendChild(playBtn);
        timerElement.appendChild(timerDuration);
        
        taskElement.appendChild(timerElement);
        taskElement.appendChild(taskCategory);
        taskElement.appendChild(taskTitle);
        taskElement.appendChild(estimatedTime);
        taskElement.appendChild(taskStatus);
        
        tasksList.appendChild(taskElement);
    });
    loadTimeBlock();
    loadCategoriesOnCategoryContainer();
    // updateTaskCount();
    // console.log(categories);
    
    loadCategoriesInAddCategoryModal();
}

function loadCategoriesOnCategoryContainer()
{
    const categoriesContainer = document.getElementById("category-container");
    categoriesContainer.innerHTML = "";
    for (const category in categories){
        const categoryBtn = document.createElement("button");  
        categoryBtn.classList.add("category-btn");

        const categoryTitle = document.createElement("p");
        categoryTitle.textContent = category;
        const categoryQuan = document.createElement("p");
        categoryQuan.classList.add("category-quantity");
        categoryQuan.textContent = categories[category];

        categoryBtn.appendChild(categoryTitle);
        categoryBtn.appendChild(categoryQuan);
        categoriesContainer.appendChild(categoryBtn);
    }
}

function loadCategoriesInAddCategoryModal()
{
    const existingCategoryContainer = document.getElementById("existing-category-container");
    existingCategoryContainer.innerHTML = "";
    for (const category in categories){
        if(category === "All") continue;
        const categoryBtn = document.createElement("button");  
        categoryBtn.classList.add("existing-category-btn-in-modal");

        const categoryTitle = document.createElement("p");
        categoryTitle.textContent = category;

        const quanDelContainer = document.createElement("div");
        quanDelContainer.classList.add("existing-category-quandelete-container");

        const categoryQuan = document.createElement("p");
        categoryQuan.classList.add("category-quantity");
        categoryQuan.textContent = categories[category];

        const categoryDeleteBtn = document.createElement("button");
        categoryDeleteBtn.classList.add("delete-category-btn");
        categoryDeleteBtn.textContent = "Remove";
        categoryDeleteBtn.addEventListener("click", () => removeCategory(category));

        quanDelContainer.appendChild(categoryQuan);
        quanDelContainer.appendChild(categoryDeleteBtn);
        categoryBtn.appendChild(categoryTitle);
        categoryBtn.appendChild(quanDelContainer);
        existingCategoryContainer.appendChild(categoryBtn);
    }
}

function removeCategory(category)
{
    for(const task in tasks)
    {
        if(tasks[task].taskCategory === category)
        {
            delete tasks[task];
            // console.log(tasks);
        }
    }
    delete categories[category];
    // console.log(categories);
    loadCategoriesInAddCategoryModal();
    loadCategoriesOnCategoryContainer();
    clearCategories();
    loadCategories();
    renderTasks();
}

// function updateTaskCount()
// {
//     const allTaskCategory = document.getElementById("task-count");
//     allTaskCategory.textContent = taskCount;
//     taskCount = 0;
// }

const timeBlock = document.getElementById("show-time-block");

function loadTimeBlock()
{
    let tempTimerHour = (Math.floor(totalTimer / 3600));
    let tempTimerMinute = (Math.floor(totalTimer % 3600) / 60);
    let tempEstHour = totalEstHour + (Math.floor(totalEstMinute / 60));
    let tempEstMinute = (totalEstMinute % 60);

    timeBlock.textContent = `${tempTimerHour}h ${tempTimerMinute}m / ${tempEstHour}h ${tempEstMinute}m`;

    // console.log("\nTemp");
    // console.log(tempTimerHour + " " + tempTimerMinute);
    // console.log(tempEstHour + " " + tempEstMinute);
    // console.log("\nTotal");
    // console.log(totalTimerHour + " " + totalTimerMinute);
    // console.log(totalEstHour + " " + totalEstMinute);
    
    totalEstHour = 0;
    totalEstMinute = 0;
    totalTimer = 0;
}

function loadTasksForDate(date) {
    if (!tasks[date]) {
        tasks[date] = [];
    }

    if(selectedDD < todayDD && selectedMM <= todayMM && selectedYYYY <= todayYYYY) {
        addTaskBtn.style.display = "none";
    }
    else {
        addTaskBtn.style.display = "block";
    }
    
    // console.log("loadTasksForDate: " + date);
    renderTasks();
}

window.onload = function() {
    setDefaultDate();
    console.log(tasks);
    // renderTasks();
};