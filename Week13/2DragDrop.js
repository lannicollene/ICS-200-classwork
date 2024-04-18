let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for(list of lists){
  list.addEventListener("dragstart", function(e){
    let selected = e.target;

    rightBox.addEventListener("dragover", function(e){
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function(e){
      rightBox.appendChild(selected);
      selected = null;
    });

    leftBoxBox.addEventListener("dragover", function(e){
      e.preventDefault();
    });
    leftBoxBox.addEventListener("drop", function(e){
      leftBoxBox.appendChild(selected);
      selected = null;
    });
  })
}
