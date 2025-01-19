document.getElementById("search-btn").addEventListener("click", async () => {
    const location = document.getElementById("location-input").value;
    if (location) {
      const response = await fetch(`http://localhost:5000/weather?location=${location}`);
      const data = await response.json();
      document.getElementById("weather-info").innerHTML = `
        <p>Location: ${data.location}</p>
        <p>Temperature: ${data.temp}°C</p>
        <p>Condition: ${data.condition}</p>
      `;
    } else {
      alert("Please enter a location.");
    }
  });
  