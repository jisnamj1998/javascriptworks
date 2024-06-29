fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>displayPosts(data))
displayPosts(posts)
function displayPosts(posts){
    let htmlData=``
    for (p of posts){
        htmlData+=`
          <div class="col-4">
          <div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">${p.title}</h5>
    <p class="card-text">${p.body}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

            </div>
        `
    }
    document.querySelector("#root").innerHTML=htmlData

}