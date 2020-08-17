function openPowerPlant(powerPlantName) {
	// Hide all elements with class="tabcontent" by default */
	let i, description;
	description = document.getElementsByClassName("description__item");
	for (i = 0; i < description.length; i++) {
	  description[i].style.display = "none";
	}
  
	// Show the specific tab content
	document.getElementById(powerPlantName).style.display = "grid";
}
  
// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();