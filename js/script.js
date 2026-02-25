function closeModal() {
    document.getElementById("simulationModal").style.display = "none";
    document.body.style.overflow = "auto"; // enable scrolling
}

function fakeBooking() {
    alert("This booking system is part of a university simulation project.");
}


function openBooking() {
    document.getElementById("bookingModal").style.display = "flex";
}

function closeBooking() {
    document.getElementById("bookingModal").style.display = "none";
}

function confirmBooking() {
    const overnightVisible = document.getElementById("overnightFields").style.display !== "none";

    if (overnightVisible) {
        let checkin = document.getElementById("checkin").value;
        let checkout = document.getElementById("checkout").value;

        if (!checkin || !checkout) {
            alert("Please select check-in and check-out dates.");
            return;
        }
    } else {
        let date = document.getElementById("hourDate").value;
        let start = document.getElementById("startTime").value;

        if (!date || !start) {
            alert("Please select date and start time.");
            return;
        }
    }

    document.getElementById("bookingModal").style.display = "none";
    document.getElementById("successModal").style.display = "flex";
}

function closeSuccess() {
    document.getElementById("successModal").style.display = "none";
}



const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});

function setBookingType(type) {
    const overnight = document.getElementById("overnightFields");
    const hourly = document.getElementById("hourlyFields");

    const overnightBtn = document.getElementById("overnightBtn");
    const hourlyBtn = document.getElementById("hourlyBtn");

    if (type === "overnight") {
        overnight.style.display = "block";
        hourly.style.display = "none";
        overnightBtn.classList.add("active");
        hourlyBtn.classList.remove("active");
    } else {
        overnight.style.display = "none";
        hourly.style.display = "block";
        hourlyBtn.classList.add("active");
        overnightBtn.classList.remove("active");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("simulationModal").style.display = "flex";
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
