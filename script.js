// function volume_sphere() {
//     //Write your code here
  
// } 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
function volume_sphere() {
  const radius = parseFloat(document.getElementById("Radius").value);
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("volume").value = volume.toFixed(2);
  return false;  // Prevent form submission
}

window.onload = function() {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
