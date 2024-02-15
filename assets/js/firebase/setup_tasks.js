import {createTask, deleteTask, onGetTask} from './firebase.js'; 

const taskForm = document.getElementById("create-form")
const taskContainer = document.getElementById("tasks-container")

window.addEventListener("DOMContentLoaded", () => {
    onGetTask((querySnapshot) => {
        let html = ''; 


        querySnapshot.forEach(doc => {
            const data = doc.data();

            html += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${data.title}</h4>
                        <p class="card-text">${data.description}</p>
                        <div class="row">
                            <button class='btn btn-danger btn-delete-custom mx-auto col-5' data-id='${doc.id}'>Delete</button>
                            <button class='btn btn-info btn-edit-custom mx-auto col-5' data-id='${doc.id}'>Edit</button>
                        </div>
                    </div>
                </div>
            `;
        });

        taskContainer.innerHTML = html;

        // delete

        const btnsDelete = document.querySelectorAll(".btn-delete-custom");

        btnsDelete.forEach(btn => {
            btn.addEventListener("click", ({target: { dataset }}) => deleteTask(dataset.id));
        })

    });
    
});

// create

taskForm.addEventListener("submit", (e) => {
 e.preventDefault();

 const title = taskForm["task-title"].value;
 const description = taskForm["task-content"].value;

 createTask(title, description); 

 taskForm.reset();

})