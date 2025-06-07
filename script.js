 let add_todo_button = document.querySelector('#add-todo-button')


 //when user clicked on button
 add_todo_button.addEventListener('click',(event)=>{
    let task_input = document.querySelector('#task-input')
    if(task_input.value == ''){
        alert('Task cannot be empty!')
    }
    else{
        console.log(task_input.value)
    }

 })

