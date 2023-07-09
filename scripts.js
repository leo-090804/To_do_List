const taskBox = document.getElementById("task_box");
const listTask = document.getElementById("list_of_tasks");

function add_task()
{
    if (taskBox.value === '')
    {
        alert("Please add your task first");
    }
    else 
    {
        let list = document.createElement("li");
        list.innerHTML = taskBox.value;
        listTask.appendChild(list);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        list.appendChild(span);
    }
    taskBox.value = '';
    dataSaved();
}

function work(onList)
{
    if (onList.target.tagName === "LI")
    {
        onList.target.classList.toggle("checked");
        dataSaved();
    }
    else if (onList.target.tagName === "SPAN")
    {
        onList.target.parentElement.remove();
        dataSaved();
    }
}

listTask.addEventListener("click", work, false);

function dataSaved()
{
    localStorage.setItem("data", listTask.innerHTML);
}

function show()
{
    listTask.innerHTML = localStorage.getItem("data");
}

show();