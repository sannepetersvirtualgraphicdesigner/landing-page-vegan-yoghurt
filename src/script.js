function buyYoghurt() {
  // alert("test");
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  name = name.trim();
  alert(`Thank you ${name}. We'll be in contact soon.`);
}
let btnBuyyoghurt = document.querySelector(".btn-buyyoghurt");
btnBuyyoghurt.addEventListener("click", buyYoghurt);
