// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, desccription) {
  const task = {
    title: title,
    desccription: desccription,
    complete: false,
    logState: function (task) {
      console.log(
        `${task.title} has${task.complete ? " " : " not "}been completed`
      );
    },
    markCompleted: function (task) {
      task.complete = true;
    },
  };

  return task;
}

// Print the state of a task to the console in a nice readable way
// prints out the provided task's details
// function logTaskState(task) {
//   console.log(
//     `${task.title} has${task.complete ? " " : " not "}been completed`
//   );
// }

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// marks the provided task as completed
// function completeTask(task) {
//   task.complete = true;
// }

// DRIVER CODE BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

// for now, let's just make sure we see our tasks
console.log(tasks);
