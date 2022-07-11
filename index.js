let takeText = document.getElementById('take-text');
let takeDate = document.getElementById('take-date');
let diVs = document.getElementById('divs');
takeText.style = "width:300px; font-size:30px; height:60px;"
takeDate.style = "width:300px; font-size:30px; height:60px;"
document.getElementById("only").style ="width:200px; height: 60px; font-size:30px;"
let todos;
const savedTodos = JSON.parse(localStorage.getItem('todos'));
// model
if (Array.isArray(savedTodos)){
  todos = savedTodos;
} else{
  todos = [
    {
      title: 'make dinner',
      dueDate: '2019-12-21',
      id: 'id1'
    },{
      title: 'late night show',
      dueDate: '2020-03-12',
      id: 'id2'
    },{
      title: 'get groceries',
      dueDate: '2022-07-21',
      id: 'id3'
    }
  ];
}
function createTodos(x,y){
  let id = "" + new Date().getTime();
  todos.push({
    title: x,
    dueDate:y,
    id: id
  });
  saveTodos();
}
function removeTodos(deleteId){
  todos = todos.filter(function(todo){
    if (todo.id === deleteId){
      return false;
    } else{
      return true;
    }
  });
  saveTodos();
}
function saveTodos(){
  localStorage.setItem('todos',JSON.stringify(todos));
}
function clickMe(){
  let textValue = takeText.value;
  let dateValue = takeDate.value;
  createTodos(textValue,dateValue);
  render();
}


function deleteTodo(event){
  let deleteButton = event.target;
  let deteleId = deleteButton.id;
  removeTodos(deteleId);
  render();
}

function render(){
  document.getElementById("divs").innerHTML = "";
  document.getElementById("divs").style = " align-text:center;";
todos.forEach(function(todo){
  let newDiv = document.createElement('div');
  newDiv.innerText = todo.title + " "+ todo.dueDate;
  newDiv.style = "font-size: 40px; overflow:hidden; line-height:70px;"
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.style ="width:100px; height: 60px; font-size:30px; margin-left: 30px; float:right;"
  deleteButton.onclick = deleteTodo;
  deleteButton.id = todo.id;
  newDiv.appendChild(deleteButton);
  diVs.appendChild(newDiv);
});
}
render();