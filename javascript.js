let i = 0
let n = 16;

container.innerHTML = `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`.repeat(n);

let item = document.getElementById("container");
item.addEventListener("mouseover", function(event) {
    event.target.style.background = "red";
})

// item.addEventListener("mouseout", function(event) {

//     event.target.style.background = "";
// })