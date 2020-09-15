document.addEventListener("DOMContentLoaded", () => {
  
  
  const taskForm = document.querySelector('#create-task-form');
  const ulElement = document.querySelector('#tasks');
  
  taskForm.addEventListener('submit', function(e){ 
    e.preventDefault();


    
    const inputValue = document.querySelector('#new-task-description').value.trim();
    const priorityValue = document.querySelector('#priority-list').value;
    

    const taskItem = document.createElement('li');
    taskItem.innerText = inputValue


    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");


    const date = document.createElement("SPAN");
    const dateText = document.createTextNode(document.querySelector('#due-date').value);
    date.appendChild(dateText);
    date.className = "date";

    span.className = "close";
    span.appendChild(txt);

    taskItem.append(date, span)

    ulElement.append(taskItem)
    
    if (priorityValue == 'high') {
      taskItem.classList.add('red')
    } 
    if (priorityValue == 'moderate') {
      taskItem.classList.add('yellow')
    } 
    if (priorityValue == 'low') {
      taskItem.classList.add('green')
    } 

    taskForm.reset()

    const close = document.querySelectorAll('.close');
    close.forEach(element => element.addEventListener('click', function(e){
      e.target.closest('li').remove();
      
     
    }));

    

   });

 
 

  
});
