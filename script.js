document.addEventListener("DOMContentLoaded", function() {

    // WEATHER API
    const weather = document.getElementById("weather");
    if (weather) {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=53.35&longitude=-6.26&current_weather=true")
        .then(res => res.json())
        .then(data => {
            weather.innerHTML =
                `Temperature: ${data.current_weather.temperature}°C`;
        })
        .catch(() => {
            weather.innerHTML = "Weather unavailable";
        });
    }

    // FORM
    const form = document.getElementById("tripForm");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Trip submitted successfully!");
        });
    }

    // ACCORDION
    const acc = document.querySelectorAll(".accordion");
    if (acc.length > 0) {
        acc.forEach(btn => {
            btn.addEventListener("click", () => {
                const panel = btn.nextElementSibling;
                panel.style.display =
                    panel.style.display === "block" ? "none" : "block";
            });
        });
    }

});