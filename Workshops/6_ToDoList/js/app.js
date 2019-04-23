
document.addEventListener("DOMContentLoaded", function() {

    var input = document.querySelector('#taskInput');
    var add = document.querySelector('#addTaskButton');
    var counter = document.querySelector("#counter");
    var list = document.querySelector('#taskList');
    

    //span

    var counter = document.createElement('span');
    counter.className = "counter";
    var count = 0;
    


    //removeall Button
    var removeAll = document.querySelector("#removeFinishedTasksButton");

    var tasks = [];

    //Event Listeners
        add.addEventListener("click", function() {
            var remove = document.createElement('button');
            remove.innerText = "Delete";
            var complete = document.createElement('button');
            complete.innerText = "Complete";
                var task = document.createElement('li');
                var header = document.createElement('h2');
                header.innerText = input.value;
        
                
                task.appendChild(header);
                task.appendChild(remove);
                task.appendChild(complete);


                

                // var savedTask = localStorage.getitem('task');
                var length = input.value.length;

                //check input

                
                

                if (length < 5 || length > 100) {
                    alert("Too few symbols!");
                } else {
                    list.append(task);
                    count++;

                    tasks.push(task.innerText);
                    console.log(tasks);
                }            
                
                //localStorage
                localStorage.setItem('tasks', tasks);
                
                
                input.value = '';
                console.log(count);
                //add span
                if (count > 0) {
                    list.parentNode.insertBefore(counter, list);
                    counter.innerText = "Tasks to complete: " + count;
                }

                //Event Listeners
    
                remove.addEventListener("click", function() {
                    this.parentElement.parentElement.removeChild(this.parentElement);
                    count--;
                    counter.innerText = "Tasks to complete: " + count;
                });
            
                complete.addEventListener("click", function() {
                    this.parentElement.style.backgroundColor = //nie zdiała w zmiennej (???) 
                    this.parentElement.style.backgroundColor === 'red' ? 'transparent': 'red';
                    
                    if (this.parentElement.style.backgroundColor == 'red') {
                        count--;
                    } else {
                        count++;
                    }
                    counter.innerText = "Tasks to complete: " + count;
                });            


            });     
    removeAll.addEventListener("click", function() {
        var tasks = document.querySelectorAll("li");
        for(var i=0; i < tasks.length; i++) {
            if (tasks[i].style.backgroundColor === "red") {
                tasks[i].parentElement.removeChild(tasks[i]);
            }
        } 
    });
});