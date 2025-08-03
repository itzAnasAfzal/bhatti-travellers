const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});














const tickets = [
  {
    date: "2025-08-07",
    time: "09:05-11:00",
    airline: "AirSial",
    route: "ISB-MCT-JED",
    bag: "20+7KG",
    meal: "YES",
    fare: "102000 PKR"
  },
  {
    date: "2025-08-04",
    time: "04:10-09:10",
    airline: "SalamAir",
    route: "ISB-MCT-JED",
    bag: "20+5KG",
    meal: "NO",
    fare: "85000 PKR"
  },
  {
    date: "2025-08-03",
    time: "03:10-05:40",
    airline: "SereneAir",
    route: "PEW-SHJ",
    bag: "20+7KG",
    meal: "YES",
    fare: "60000 PKR"
  }
];

function renderTickets(data) {
  const list = document.getElementById("ticket-list");
  list.innerHTML = data.map(ticket => `
    <div class="ticket-card">
      <h3>${ticket.airline} (${ticket.route})</h3>
      <p><strong>Date:</strong> ${ticket.date}</p>
      <p><strong>Time:</strong> ${ticket.time}</p>
      <p><strong>Bag:</strong> ${ticket.bag}</p>
      <p><strong>Meal:</strong> ${ticket.meal}</p>
      <p><strong>Fare:</strong> ${ticket.fare}</p>
      <button class="book-btn">Book Now</button>
    </div>
  `).join('');
}

document.getElementById("filter-date").addEventListener("change", filterTickets);
document.getElementById("filter-airline").addEventListener("change", filterTickets);

function filterTickets() {
  const date = document.getElementById("filter-date").value;
  const airline = document.getElementById("filter-airline").value;
  const filtered = tickets.filter(ticket =>
    (!date || ticket.date === date) &&
    (!airline || ticket.airline === airline)
  );
  renderTickets(filtered);
}

renderTickets(tickets);





