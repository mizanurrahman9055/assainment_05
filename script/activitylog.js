
document.getElementById('btn-1').addEventListener('click', function() {
    alert('Board updated Successfully');

    let taskEle = document.getElementById('task-as');
    let taskEleValue = parseInt(taskEle.innerText);
    let taskEleValueMinus = taskEleValue - 1;
    taskEle.innerText = taskEleValueMinus;

    let navValue = document.getElementById('nav-increase');
    let navValueInt = parseInt(navValue.innerText);
    let navValuePlus = navValueInt + 1;
    navValue.innerText = navValuePlus;

    let btn = document.getElementById('btn-1');
    btn.style.opacity = "0.3";
    btn.classList.add('bg-indigo-600'); 
    btn.style.pointerEvents = "none";

    if (navValuePlus > 28) {
        alert("Congrats!! You have completed all the current tasks");
    }

    
    let now = new Date();
    let formattedTime = now.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
    });

    
    let task = document.getElementById('fix-mobile');
    let taskName = task.innerText;
    let activityLog = document.getElementById('activity-logs');
    let newParagraph = document.createElement('p');

    newParagraph.classList.add(
        'p-4',
        'bg-[#f4f7ff]', 
        'rounded-lg',
        'shadow-md',
        'text-gray-700',
        'font-medium',
        'mt-2'
    );

    newParagraph.innerText = `You have completed the task "${taskName}" at ${formattedTime}`;
    activityLog.appendChild(newParagraph);
});



document.getElementById('btn-2').addEventListener('click', function() {
    alert('Board updated Successfully');

    let taskEle = document.getElementById('task-as');
    let taskEleValue = parseInt(taskEle.innerText);
    let taskEleValueMinus = taskEleValue - 1;
    taskEle.innerText = taskEleValueMinus;

    let navValue = document.getElementById('nav-increase');
    let navValueInt = parseInt(navValue.innerText);
    let navValuePlus = navValueInt + 1;
    navValue.innerText = navValuePlus;

    let btn = document.getElementById('btn-2');
    btn.style.opacity = "0.3";
    btn.classList.add('bg-indigo-600'); 
    btn.style.pointerEvents = "none";

    if (navValuePlus > 28) {
        alert("Congrats!! You have completed all the current tasks");
    }

    
    let now = new Date();
    let formattedTime = now.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
    });

    
    let task = document.getElementById('dark-mode');
    let taskName = task.innerText;
    let activityLog = document.getElementById('activity-logs');
    let newParagraph = document.createElement('p');

    newParagraph.classList.add(
        'p-4',
        'bg-[#f4f7ff]', 
        'rounded-lg',
        'shadow-md',
        'text-gray-700',
        'font-medium',
        'mt-2'
    );

    newParagraph.innerText = `You have completed the task "${taskName}" at ${formattedTime}`;
    activityLog.appendChild(newParagraph);
});


document.getElementById('btn-3').addEventListener('click', function() {
    alert('Board updated Successfully');

    let taskEle = document.getElementById('task-as');
    let taskEleValue = parseInt(taskEle.innerText);
    let taskEleValueMinus = taskEleValue - 1;
    taskEle.innerText = taskEleValueMinus;

    let navValue = document.getElementById('nav-increase');
    let navValueInt = parseInt(navValue.innerText);
    let navValuePlus = navValueInt + 1;
    navValue.innerText = navValuePlus;

    let btn = document.getElementById('btn-3');
    btn.style.opacity = "0.3";
    btn.classList.add('bg-indigo-600'); 
    btn.style.pointerEvents = "none";

    if (navValuePlus > 28) {
        alert("Congrats!! You have completed all the current tasks");
    }

    
    let now = new Date();
    let formattedTime = now.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
    });

    
    let task = document.getElementById('optimize');
    let taskName = task.innerText;
    let activityLog = document.getElementById('activity-logs');
    let newParagraph = document.createElement('p');

    newParagraph.classList.add(
        'p-4',
        'bg-[#f4f7ff]', 
        'rounded-lg',
        'shadow-md',
        'text-gray-700',
        'font-medium',
        'mt-2'
    );

    newParagraph.innerText = `You have completed the task "${taskName}" at ${formattedTime}`;
    activityLog.appendChild(newParagraph);
});



document.getElementById('btn-4').addEventListener('click', function() {
    alert('Board updated Successfully');

    let taskEle = document.getElementById('task-as');
    let taskEleValue = parseInt(taskEle.innerText);
    let taskEleValueMinus = taskEleValue - 1;
    taskEle.innerText = taskEleValueMinus;

    let navValue = document.getElementById('nav-increase');
    let navValueInt = parseInt(navValue.innerText);
    let navValuePlus = navValueInt + 1;
    navValue.innerText = navValuePlus;

    let btn = document.getElementById('btn-4');
    btn.style.opacity = "0.3";
    btn.classList.add('bg-indigo-600'); 
    btn.style.pointerEvents = "none";

    if (navValuePlus > 28) {
        alert("Congrats!! You have completed all the current tasks");
    }

    
    let now = new Date();
    let formattedTime = now.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
    });

    
    let task = document.getElementById('emoji');
    let taskName = task.innerText;
    let activityLog = document.getElementById('activity-logs');
    let newParagraph = document.createElement('p');

    newParagraph.classList.add(
        'p-4',
        'bg-[#f4f7ff]', 
        'rounded-lg',
        'shadow-md',
        'text-gray-700',
        'font-medium',
        'mt-2'
    );

    newParagraph.innerText = `You have completed the task "${taskName}" at ${formattedTime}`;
    activityLog.appendChild(newParagraph);
});


document.getElementById('btn-5').addEventListener('click', function() {
    alert('Board updated Successfully');

    let taskEle = document.getElementById('task-as');
    let taskEleValue = parseInt(taskEle.innerText);
    let taskEleValueMinus = taskEleValue - 1;
    taskEle.innerText = taskEleValueMinus;

    let navValue = document.getElementById('nav-increase');
    let navValueInt = parseInt(navValue.innerText);
    let navValuePlus = navValueInt + 1;
    navValue.innerText = navValuePlus;

    let btn = document.getElementById('btn-5');
    btn.style.opacity = "0.3";
    btn.classList.add('bg-indigo-600'); 
    btn.style.pointerEvents = "none";

    if (navValuePlus > 28) {
        alert("Congrats!! You have completed all the current tasks");
    }

    
    let now = new Date();
    let formattedTime = now.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
    });

    
    let task = document.getElementById('integrate');
    let taskName = task.innerText;
    let activityLog = document.getElementById('activity-logs');
    let newParagraph = document.createElement('p');

    newParagraph.classList.add(
        'p-4',
        'bg-[#f4f7ff]', 
        'rounded-lg',
        'shadow-md',
        'text-gray-700',
        'font-medium',
        'mt-2'
    );

    newParagraph.innerText = `You have completed the task "${taskName}" at ${formattedTime}`;
    activityLog.appendChild(newParagraph);
});


document.getElementById('btn-6').addEventListener('click', function() {
    alert('Board updated Successfully');

    let taskEle = document.getElementById('task-as');
    let taskEleValue = parseInt(taskEle.innerText);
    let taskEleValueMinus = taskEleValue - 1;
    taskEle.innerText = taskEleValueMinus;

    let navValue = document.getElementById('nav-increase');
    let navValueInt = parseInt(navValue.innerText);
    let navValuePlus = navValueInt + 1;
    navValue.innerText = navValuePlus;

    let btn = document.getElementById('btn-6');
    btn.style.opacity = "0.3";
    btn.classList.add('bg-indigo-600'); 
    btn.style.pointerEvents = "none";

    if (navValuePlus > 28) {
        alert("Congrats!! You have completed all the current tasks");
    }

    
    let now = new Date();
    let formattedTime = now.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
    });

    
    let task = document.getElementById('improve');
    let taskName = task.innerText;
    let activityLog = document.getElementById('activity-logs');
    let newParagraph = document.createElement('p');

    newParagraph.classList.add(
        'p-4',
        'bg-[#f4f7ff]', 
        'rounded-lg',
        'shadow-md',
        'text-gray-700',
        'font-medium',
        'mt-2'
    );

    newParagraph.innerText = `You have completed the task "${taskName}" at ${formattedTime}`;
    activityLog.appendChild(newParagraph);
});