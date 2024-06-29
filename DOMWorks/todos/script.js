fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>displayTodos(data))

function displayTodos(todos){
    let htmlData=``
    for (t of todos){
        htmlData+=`
        <div class="col-4">
         <div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">${t.title}</h5>
    <p class="card-text">${t.completed}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                
            </div>
        `
    }
    document.querySelector("#root").innerHTML=htmlData
}