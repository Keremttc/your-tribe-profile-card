document.getElementById('contactButton').onclick = function() {
  var details = document.getElementById('contactDetails');
  if (details.style.display === "none") {
      details.style.display = "block";
      this.textContent = "Verberg Contactgegevens";
  } else {
      details.style.display = "none";
      this.textContent = "Bekijk Contactgegevens";
  }
}
