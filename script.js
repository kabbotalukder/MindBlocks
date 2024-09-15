let totalEstHour = 0;
let totalEstMinute = 0;
let totalTimerHour = 0;
let totalTimerMinute = 0;

let lastIdx = 0;
let editingIdx = null;
let taskCount = 0;

let categories = {
    "All": 0,
    "Personal": 0,
    "Programming": 0,
    "Study": 0,
    "Work": 0,
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
    closeAddCategoryModal();
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

let tasks = {}

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
//     // 6: {
//     //     timerTime: "0h 0m",
//     //     taskCategory: "Demo",
//     //     taskTitle: "Demo", 
//     //     estimatedTime: "0h 0h",
//     //     taskStatus: "Not Started"
//     // },
//     // 7: {
//     //     timerTime: "0h 0m",
//     //     taskCategory: "Demo",
//     //     taskTitle: "Demo", 
//     //     estimatedTime: "0h 0h",
//     //     taskStatus: "Not Started"
//     // },
//     // 8: {
//     //     timerTime: "0h 0m",
//     //     taskCategory: "Demo",
//     //     taskTitle: "Demo", 
//     //     estimatedTime: "0h 0h",
//     //     taskStatus: "Not Started"
//     // },
//     // 9: {
//     //     timerTime: "0h 0m",
//     //     taskCategory: "Demo",
//     //     taskTitle: "Demo", 
//     //     estimatedTime: "0h 0h",
//     //     taskStatus: "Not Started"
//     // },
//     // 10: {
//     //     timerTime: "0h 0m",
//     //     taskCategory: "Demo",
//     //     taskTitle: "Demo", 
//     //     estimatedTime: "0h 0h",
//     //     taskStatus: "Not Started"
//     // },
//     // 11: {
//     //     timerTime: "0h 0m",
//     //     taskCategory: "Demo",
//     //     taskTitle: "Demo", 
//     //     estimatedTime: "0h 0h",
//     //     taskStatus: "Not Started"
//     // },
//     // 12: {
//     //     timerTime: "0h 0m",
//     //     taskCategory: "Demo",
//     //     taskTitle: "Demo", 
//     //     estimatedTime: "0h 0h",
//     //     taskStatus: "Not Started"
//     // },
//     // 13: {
//     //     timerTime: "0h 0m",
//     //     taskCategory: "Demo",
//     //     taskTitle: "Demo", 
//     //     estimatedTime: "0h 0h",
//     //     taskStatus: "Not Started"
//     // },
//     // 14: {
//     //     timerTime: "0h 0m",
//     //     taskCategory: "Demo",
//     //     taskTitle: "Demo", 
//     //     estimatedTime: "0h 0h",
//     //     taskStatus: "Not Started"
//     // },
//     // 15: {
//     //     timerTime: "0h 0m",
//     //     taskCategory: "Demo",
//     //     taskTitle: "Demo", 
//     //     estimatedTime: "0h 0h",
//     //     taskStatus: "Not Started"
//     // }
// };

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

    console.log("it came");

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

    const newTask = {
        timerTime: [0, 0],
        taskTitle: enteredTitle,
        taskCategory: selectedCategory,
        estimatedTime: [estHour, estMinute],
        taskStatus: "Not Started"
    };

    lastIdx++;
    tasks[lastIdx] = newTask;

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
    delete tasks[editingIdx];
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

function editTask()
{
    editTaskTimerHour.value = tasks[editingIdx].timerTime[0];
    editTaskTimerMinute.value = tasks[editingIdx].timerTime[1];
    editTaskCategory.value = tasks[editingIdx].taskCategory;
    editTaskTitle.value = tasks[editingIdx].taskTitle;
    editTaskEstHour.value = tasks[editingIdx].estimatedTime[0];
    editTaskEstMinute.value = tasks[editingIdx].estimatedTime[1];
    showEditTaskModal();
}

editTaskSaveBtn.addEventListener("click", function() {
    if(editingIdx === null) return;
    tasks[editingIdx].timerTime[0] = editTaskTimerHour.value;
    tasks[editingIdx].timerTime[1] = editTaskTimerMinute.value;
    tasks[editingIdx].taskCategory = editTaskCategory.value;
    tasks[editingIdx].taskTitle = editTaskTitle.value.trim();
    tasks[editingIdx].estimatedTime[0] = editTaskEstHour.value;
    tasks[editingIdx].estimatedTime[1] = editTaskEstMinute.value;
    // console.log(tasks);
    closeEditTaskModal();
    editingIdx = null;
    renderTasks();
});

function renderTasks()
{
    // let i = 0;
    tasksList.innerHTML = "";
    Object.keys(categories).forEach(key => (categories[key] = 0));
    for (const idx in tasks) {
        // console.log("i  : " + i);
        // Number(idx) == Number(i);
        // console.log("idx: " + i);
        // i++;
        taskCount++;
        categories["All"]++;        

        totalEstHour += Number(tasks[idx].estimatedTime[0]);
        totalEstMinute += Number(tasks[idx].estimatedTime[1]);
        totalTimerHour += Number(tasks[idx].timerTime[0]);
        totalTimerMinute += Number(tasks[idx].timerTime[1]);

        lastIdx = idx;

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.classList.add("task-id-" + idx);

        const timerElement = document.createElement("div");
        timerElement.classList.add("timer");

        const playBtn = document.createElement("button");
        playBtn.classList.add("play-btn");
        playBtn.textContent = "▶";

        const timerDuration = document.createElement("p");
        timerDuration.classList.add("timer-duration");
        timerDuration.textContent = `${tasks[idx].timerTime[0]}h ${tasks[idx].timerTime[1]}m`;

        const taskCategory = document.createElement("p");
        taskCategory.classList.add("task-category");
        taskCategory.textContent = tasks[idx].taskCategory;

        categories[tasks[idx].taskCategory]++;

        const taskTitle = document.createElement("p");
        taskTitle.classList.add("task-name"); // !!!
        taskTitle.textContent = tasks[idx].taskTitle;

        taskTitle.addEventListener("click", function() {
            editingIdx = idx;
            editTask();
        });

        const estimatedTime = document.createElement("p");
        estimatedTime.classList.add("estimated-duration"); // !!!
        estimatedTime.textContent = `${tasks[idx].estimatedTime[0]}h ${tasks[idx].estimatedTime[1]}m`;

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
            tasks[idx].taskStatus = taskStatus.value;
            console.log(tasks[idx]);
            // renderTasks(taskElement, taskStatus);
            updateTaskStatusColor(taskElement, taskStatus);
        });

        taskStatus.value = tasks[idx].taskStatus;
        updateTaskStatusColor(taskElement, taskStatus);

        timerElement.appendChild(playBtn);
        timerElement.appendChild(timerDuration);
        
        taskElement.appendChild(timerElement);
        taskElement.appendChild(taskCategory);
        taskElement.appendChild(taskTitle);
        taskElement.appendChild(estimatedTime);
        taskElement.appendChild(taskStatus);
        
        tasksList.appendChild(taskElement);
    }
    loadTimeBlock();
    // updateTaskCount();
    // console.log(categories);
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

// function updateTaskCount()
// {
//     const allTaskCategory = document.getElementById("task-count");
//     allTaskCategory.textContent = taskCount;
//     taskCount = 0;
// }

const timeBlock = document.getElementById("show-time-block");

function loadTimeBlock()
{
    let tempTimerHour = totalTimerHour + (Math.floor(totalTimerMinute / 60));
    let tempTimerMinute = (totalTimerMinute % 60);
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
    totalTimerHour = 0;
    totalTimerMinute = 0;
}

window.onload = function() {
    renderTasks();
};