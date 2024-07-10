document.addEventListener("DOMContentLoaded" , ()=>{
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));

    if(storedTasks){
        storedTasks.forEach((task)=> tasks.push(task));
        updateTasks();
    }
})


let tasks = [];

let btnTask = document.getElementById('btn_tasks');

const saveTask  = () =>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const addTasks = () => {
    const taskInput = document.getElementById('input_tasks');
    const text = taskInput.value.trim();

    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = '';
        updateTasks();
       
    }
};

const updateTasks = () => {
    const taskList = document.querySelector('.task_list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');

        listItem.innerHTML = `
        <div class="taskItem">
            <div class="task ${task.completed ? 'completed' : ''}">
                <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTaskComplete(${index})"/>
                <p>${task.text}</p>
            </div>
            <div class="icons">
                <i class='bx bx-pencil' onclick="editTask(${index})"></i>
                <i class='bx bx-trash' onclick="deleteTask(${index})"></i>
            </div>
        </div>`;

        taskList.append(listItem);
    });

    updateProgress();
    saveTask();
};

const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTasks();
  
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTasks();
   
};

const editTask = (index) => {
    const taskInput = document.getElementById('input_tasks');
    taskInput.value = tasks[index].text;
    
    tasks.splice(index, 1);
    updateTasks();
};

const updateProgress = () => {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progressBar = document.querySelector('.progress');
    const progress = (completedTasks / totalTasks) * 100;

    progressBar.style.width = `${progress}%`;

    document.getElementById('numbers').innerText = `${completedTasks} / ${totalTasks}`;

    if(tasks.length && completedTasks === totalTasks){
        backConfetti();
    }
};

btnTask.addEventListener('click', function (e) {
    e.preventDefault();
    addTasks();
});

const backConfetti = () =>{
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}