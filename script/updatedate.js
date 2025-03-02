function updateDate() {
    let now = new Date();
    let formattedDate = now.toLocaleDateString('en-US', {
      weekday: 'long', 
      year: 'numeric', 
      month: 'numeric', 
      day: 'numeric'
    });

    document.getElementById("dateDisplay").innerText = formattedDate;
  }

  updateDate(); 