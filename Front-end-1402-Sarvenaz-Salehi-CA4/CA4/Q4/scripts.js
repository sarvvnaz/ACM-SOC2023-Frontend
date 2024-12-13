
// get task input and show with a checkbox
var task_str = document.getElementById("task_input");
var add_button = document.querySelector("BUTTON[type=add]");
const output_section = document.getElementById("output_box");

//create task with checkbox when add is clicked
add_button.addEventListener("click", function () {
  if(task_str.value !== ""){
  let task_li = document.createElement("li");
  task_li.setAttribute("class", "task-li");
  let task_checkbox = document.createElement("INPUT");
  let label = document.createElement("label");
  label.setAttribute("class", "task-label");
  task_checkbox.setAttribute("type", "checkbox");
  task_checkbox.setAttribute("class", "task-checkbox");
  let task_span = document.createElement("span");
  task_span.innerText = task_str.value;
  label.appendChild(task_checkbox);
  label.append(task_span);
  task_li.appendChild(label);
  output_section.appendChild(task_li);
  task_str.value = "";
  }
})

//adding a reset button
const main_body = document.getElementById("main-body");
const reset = document.createElement("button");
reset.setAttribute("class", "btn btn-outline-secondary");

reset.innerHTML = `<h6>Reset</h6>`;
reset.addEventListener("click", () => {
  let child = output_section.lastElementChild;
  while(child){
      output_section.removeChild(child);
      child = output_section.lastElementChild;
  }
}
)
main_body.appendChild(reset)


