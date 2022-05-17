const form = document.querySelector('#new-task-form')
const input = document.querySelector('#new-task-input')
const list_el = document.querySelector('#tasks')


form.addEventListener('submit', (e) => {
  // khong load lai trang khi submit
  e.preventDefault()
  const task = input.value

  // check o input co gia tri nhap vao hay khong ?
  if (!task) {
    alert('Please fill out the task')
    return
  }

  // tao Element task
  const task_el = document.createElement('div')
  task_el.classList.add('task')

  // console.log(task_el)

  // tao Element content append vao trong Element task

  const task_content_el = document.createElement('div')
  task_content_el.classList.add('content')

  task_el.appendChild(task_content_el)

  // tao Element input append vao trong Element Content

  const task_input_el = document.createElement('input')
  task_input_el.classList.add('text')
  task_input_el.type = 'text'
  task_input_el.value = task
  task_input_el.setAttribute('readonly', 'readonly')

  task_content_el.appendChild(task_input_el)

  // tao Element action append vao trong Element Content

  const task_action_el = document.createElement('div')
  task_action_el.classList.add('actions')

  task_el.appendChild(task_action_el)

  // tao Element edit append vao trong Element Actions

  const task_edit_el = document.createElement('button')
  task_edit_el.classList.add('edit')
  task_edit_el.innerText = 'Edit'

  task_action_el.appendChild(task_edit_el)

  // tao Element delete append vao trong Element Actions

  const task_delete_el = document.createElement('button')
  task_delete_el.classList.add('delete')
  task_delete_el.innerText = 'Delete'

  task_action_el.appendChild(task_delete_el)

  // append Element Task vao trong Tasks

  list_el.appendChild(task_el)

  // tra ve o input trong sau moi lan submit
  input.value = ''

  task_edit_el.addEventListener('click', () => {
    if (task_edit_el.innerText.toLowerCase() == 'edit') {
      task_input_el.removeAttribute('readonly')
      task_input_el.focus()
      task_edit_el.innerText = 'Save'
    } else {
      task_input_el.setAttribute('readonly', 'readonly')
      task_edit_el.innerText = 'Edit'
    }
  })

  task_delete_el.addEventListener('click', () => {
    task_el.remove()
  })

})
