let job_submit_button = document.querySelector('#job-submit-button')
job_submit_button.addEventListener('click', (event)=>{
    console.log('button clicked')
    //job input values need to collect
    //job title
    let job_title_element = document.querySelector('#job-title')
    let job_title = job_title_element.value;
    //job description
    let job_description_element = document.querySelector('#job-description')
    let job_description = job_description_element.value;
    //job location
    let job_location_element = document.querySelector('#job-location')
    let job_location  = job_location_element.value;

    //conditon
    if(job_title === '' || job_description === ''){
        alert('Job Title & Job Description are mandatory!')
    }
    else{
        let new_title_div = document.createElement('div')
        new_title_div.classList.add('card-title')
        new_title_div.textContent = job_title;

        let new_description_div = document.createElement('div')
        new_description_div.classList.add('card-text')
        new_description_div.textContent = job_description;

        let new_location_div = document.createElement('div')
        new_location_div.classList.add('job-location')
        new_location_div.textContent = job_location;

        let body_div = document.createElement('div')
        body_div.classList.add('card-body')

        body_div.appendChild(new_title_div)
        body_div.appendChild(new_description_div)
        body_div.appendChild(new_location_div)

        //job item new div
        let job_item_new_div = document.createElement('div')
        job_item_new_div.classList.add('card','job-item')
        job_item_new_div.appendChild(body_div)

        //selecting job container 
        let job_list_container = document.querySelector('#job-list-container')
        job_list_container.appendChild(job_item_new_div)
    }
})