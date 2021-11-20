function buyYoghurt() {
  // alert("test");
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  name = name.trim().toLowerCase();
  let sentence = `Thank you ${name}. We'll be in contact soon.`;

  if (name.length > 0) {
    alert(sentence);
  } else {
    alert(`Please fill in your name`);
  }
}
let btnBuyyoghurt = document.querySelector(".btn-buyyoghurt");
btnBuyyoghurt.addEventListener("click", buyYoghurt);
