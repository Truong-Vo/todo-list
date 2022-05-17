const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');
const todoList = document.querySelector('.todoList');
const deleteAllBtn = document.querySelector('.footer button');

inputBox.onkeyup = () => {
  // lay value nguoi dung nhap vao
  let userEnteredValue = inputBox.value;

  // Kiem tra xem neu value khac rong thi cho active vao button

  if (userEnteredValue.trim() != '') {
    addBtn.classList.add('active');
  } else {
    // nguoc lai thi bo active
    addBtn.classList.remove('active');
  }
};

addBtn.onclick = () => {
  let userEnteredValue = inputBox.value; // Lấy giá trị người dùng nhập vào ở ô input

  const getLocalStorageData = localStorage.getItem('New todo'); //  Lấy localStorage
  if (getLocalStorageData == null) {
    // Nếu localStorage = null
    // Thì sẽ tạo ra 1 mảng rỗng
    listArr = [];
  } else {
    // Ngược lại thì sẽ chuyển JSON sang Object
    listArr = JSON.parse(getLocalStorageData);
  }
  // Đẩy giá trị mới vào mảng đã tạo
  listArr.push(userEnteredValue);
  localStorage.setItem('New todo', JSON.stringify(listArr));
  // Chuyển Json từ dạng Object sang string
  showTasks();
  addBtn.classList.remove('active');
};

function showTasks() {
  let getLocalStorageData = localStorage.getItem('New todo');
  if (getLocalStorageData == null) {
    // Nếu localStorage = null
    // Thì sẽ tạo ra 1 mảng rỗng
    listArr = [];
  } else {
    // Ngược lại thì sẽ chuyển JSON sang Object
    listArr = JSON.parse(getLocalStorageData);
  }
  // const pendingTaskNumber = document.querySelector('.pendingTasks')
  // pendingTaskNumber.textContent = listArr.length

  // if (listArr.length > 0) {
  //     deleteAllBtn.classList.add('active')
  // } else {
  //     deleteAllBtn.classList.remove('active')
  // }
  //

  let newLiTag = '';
  listArr.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag;
  inputBox.value = '';
}
showTasks();

// function deleteTask(index) {
//   let getLocalStorageData = localStorage.getItem('New todo');
//   listArr = JSON.parse(getLocalStorageData);
//   listArr.splice(index, 1);
//   localStorage.setItem('New todo', JSON.stringify(listArr));
//   showTasks();
// }

// deleteAllBtn.onclick = () => {
//   listArr = [];
//   localStorage.setItem('New todo', JSON.stringify(listArr));
//   showTasks();
// };
