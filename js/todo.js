const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector('input');//= document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//toDos array -> database (local-storage는 toDos array를 복사해두는 곳, database 아님)
let toDos = []; //update가능한 let

//save todos
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos) );
    //JSON.stringify는 array를 string으로 변환 & JSON.parse는 string을 array로 변환
    //*정리:local-storage에 array로 저장이 안되기 때문에, JSON.stringify로 array처럼 생긴 string으로 저장한뒤,
         //다시 JSON.parse를 이용해 array로 꺼내는(load) 방식.
}

//delete todos
function deleteToDo(event){
    //어떤 button을 화면에서 삭제해야하는지 click event로 부터 힌트 얻어내기
    const li = event.target.parentElement;//<--유저가 삭제하고픈 li
    //target은 클릭된 HTML요소 /parentElement는 클릭된 요소의 부모
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id) )
    //=>클릭했던 li의 id를 갖고있는 toDo를 지우기(유저가 클릭한 li.id와 다른 toDo들을 담은 새 array 받기)
    //li.id는 string(document.createElement("li")하면서 id에 number을 넣어도 string화된다.)이고, 
    //toDo.id는 number여서 type이 다름
    saveToDos(); //삭제하고픈 li를 제외한 item들이 담긴 todos로 로컬에 새로 저장됨
    
}

//paint todos
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;//html의 li태그에 id추가
    const span = document.createElement("span"); 
    span.innerText = `🤍 ${newTodo.text}`;
    const button = document.createElement("button");
    button.innerText="❌"; 
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);//span이 li의 자식요소가 됨
    li.appendChild(button);
    toDoList.appendChild(li);
}

//submit 
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;//input의 현재 value를 새로운 변수에 복사하는 것!!
    //console.log(newTodo, toDoInput.value);//hi hi
    toDoInput.value =""; //엔터할때마다,입력창 비워지기
    //console.log(newTodo, toDoInput.value);//hi <- toDoInput.value만 사라지고, newTodo에 저장된 값은 유지됨
    const newTodoObj = {
        text: newTodo,
        id:Date.now(),//Date.now()는 밀리초(1000분의 1초)를 주는 함수 => 랜덤id숫자 생성용으로 사용
    }
    toDos.push(newTodoObj);//모아서 로컬에 보내 저장하기위해 빈 배열에 저장 
    paintToDo(newTodoObj);//todo 그리기
    saveToDos();//로컬 저장(근데,local-storage는 text만 저장가능. array 저장 불가)
}
toDoForm.addEventListener("submit", handleToDoSubmit);


//local에 저장된 todos
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){//localStorage에 todos가 있는 경우,
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //전에 있던 toDo들 복원 (새로고침해도 이전에 입력한것들이 남아있게 해줌)
    //덮어씌어지는게 아니라, 기존 item들에 추가가 된다!
    parsedToDos.forEach(paintToDo);
    //forEach:array의 갹item에 대해 function을 실행하게 해줌
}


//지우고 싶은 item을 제외(exclude)하고, 새 array를 생성하기 =>filter사용
//filter: 주어진 콜백함수의 조건을 만족하는 요소들을 포함한 새로운 배열을 생성하는 메서드
