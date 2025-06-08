 let add_todo_button = document.querySelector('#add-todo-button')


 //when user clicked on button
 add_todo_button.addEventListener('click', (event)=>{
    //input element
    let input_element = document.querySelector('.my-input')
    let task_value = input_element.value;
    if(task_value === '')
    {
        alert('Task name cannot be empty!')
    }
    else{
        //creating new div element 
        let new_div = document.createElement('div')
        new_div.classList.add('task-item')
        new_div.textContent = task_value;

        //accessing container 
        let task_container = document.querySelector('#task-container')
        task_container.appendChild(new_div)
        input_element.value = ''
    }
 })


