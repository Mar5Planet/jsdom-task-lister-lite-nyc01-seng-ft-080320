document.addEventListener("DOMContentLoaded", () => {
  
  
  const taskForm = document.querySelector('#create-task-form');
  const ulElement = document.querySelector('#tasks');
 
  taskForm.addEventListener('submit', function(e){ 
    e.preventDefault();

    const inputValue = document.querySelector('#new-task-description').value.trim();

    const taskItem = document.createElement('li')
    taskItem.innerText = inputValue

    ulElement.append(taskItem)

    taskForm.reset()


   });

 

  
});
