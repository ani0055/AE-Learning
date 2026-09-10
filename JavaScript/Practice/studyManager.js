console.log("------------Study Task Manager------------")

const APP_NAME = "StudyHelper";
let sessionCount = 0;

console.log(APP_NAME);
console.log(sessionCount);

{
    const sessionType = "JavaScript";
    let sessionDuration = 60;

    console.log(sessionType);
    console.log(sessionDuration);

}

// reference error
// console.log(sessionType); 
// console.log(sessionDuration);

// Funxtions 
let id = 100;
function createTask(title, subject, duration){
    
    id = id+1;
    return{
        id: id,
        title: title,
        subject: subject,
        duration: duration,
        completed: false
    };
}

// const task1 = createTask(
//     "Learning Limits",
//     "Calculus",
//     60
// );

// console.log(task1);

const printTask = function(task){
    console.log(
        ` Title : ${task.title} \n Subject : ${task.subject} \n Time : ${task.duration} min`
    );
};

// printTask(task1);

// Closures
function createTaskManager() {
    let tasks = [];
    

    function addTask(task){
        tasks.push(task);
    }

    function removeTask(id){
        tasks = tasks.filter(task => task.id !== id);
    }

    function getTasks(){
        return tasks;
    }

    function markCompleted(id){
        const task = tasks.find(task => task.id == id);

        if(task){
            task.completed = true;
        }
    }

    return {
        addTask,
        removeTask,
        getTasks,
        markCompleted
    };
}

const manager = createTaskManager();

manager.addTask(
    createTask("Learn Current Electricity", "Physics", 75)
);

manager.addTask(
    createTask("Learn Ionic Equilibrium", "Chemistry", 60)
);
manager.addTask(
    createTask("Practice Functions", "Maths", 45)
);

console.log(manager.getTasks());


manager.markCompleted(101);

// Scope Chain
function createTaskReporter(manager){
    const reportType = "-------- Daily Report --------";

    function generateReport(){

        const tasksCompleted = manager.getTasks().filter(task => task.completed == true);
        const tasksIncomplete = manager.getTasks().filter(task => task.completed == false);
        
        function printSummary(){
            console.log(reportType);
            console.log(`Total Tasks Completed: ${tasksCompleted.length}`);
            console.log(`Total Tasks To Be Completed: ${tasksIncomplete.length}`);
        }

        printSummary();
    }

    return generateReport;
}

const report = createTaskReporter(manager);
report();

// callBack Functions and Higher Order Functions
function processTask(tasks, callback){
    for(const task of tasks){
        callback(task);
    }
}

processTask(
    manager.getTasks(),

    task => {
        console.log(`Studying: ${task.title}`);
    }
);


// Functional Programming

// Get completed Tasks
const completedTasks = 
        manager
            .getTasks()
            .filter(task => task.completed);
console.log(completedTasks);

// Calculate Total Studying Hours
const totalStudyTime = 
        manager
            .getTasks()
            .filter(task => task.completed == true)
            .reduce(
                (total, task) => total + task.duration,
                0
            );
console.log(`Total study time: ${totalStudyTime} minutes`);


// Tasks coming from servers
function fetchTasksFromServer(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tasks = [
                createTask("Learn Limits", "Maths", 60),
                createTask("Practice Ionic Equilibrium", "Chemistry", 45),
                createTask("Practice Current Electricity", "Physics", 60)
            ];

            resolve(tasks);
        }, 2000);
    });
}

console.log("Fetching Tasks .....");

// Promise Chaining
// fetchTasksFromServer()
//         .then(tasks => {
//             console.log("Tasks Recived: ");
//             console.log(tasks);
//         })
//         .catch(error => {
//             console.log("Somthing went wrong : ", error);
//         });

// Async and Await
async function loadTasks(){
    try{
        console.log("Loading Tasks ....");

        const tasks = await fetchTasksFromServer();

        console.log("Task loaded");
        console.log(tasks);
    } catch(error) {
        console.log("Error : ", error);
    }
}

loadTasks();

// Example of EventLoop

console.log("1. Start");

setTimeout(() => {
    console.log("2. setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("3. Promise");
});

console.log("4. End");
