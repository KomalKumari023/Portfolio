const roleText = "Software Developer";
const roleSpeed = 150;
const deleteSpeed = 100;
const waitTime = 1500; // wait before deleting

let k = 0;
let isDeleting = false;

function typeRole() {
  const element = document.getElementById("typing-role");
  
  if (!isDeleting) {
    element.innerHTML = roleText.substring(0, k + 1);
    k++;
    
    if (k === roleText.length) {
      isDeleting = true;
      setTimeout(typeRole, waitTime);
      return;
    }
  } else {
    element.innerHTML = roleText.substring(0, k - 1);
    k--;
    
    if (k === 0) {
      isDeleting = false;
    }
  }
  
  setTimeout(typeRole, isDeleting ? deleteSpeed : roleSpeed);
}

typeRole();
