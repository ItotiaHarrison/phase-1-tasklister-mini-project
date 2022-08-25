document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset()

    // adding properties
    let li = document.createElement('li')
    let userInput = document.getElementById("new-task-description")
    li.textContent = userInput.value
    let ul = document.querySelector('#tasks')
    ul.appendChild(li)

    // creating a remove button
    let btn = document.createElement('button')
    btn.textContent = 'X'
    li.appendChild(btn)
    btn.addEventListener("click", () => {li.remove()}) 
  });

})
