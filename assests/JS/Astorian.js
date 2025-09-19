const config = {
  type: "carousel",
  startAt: 0,
  perView: 4,
  autoplay: 2500, // Moves automatically every 2.5 seconds
  hoverpause: true, // Pauses when hovered
  focusAt: "center", // Always keeps a centered active slide
  gap: 32,
  breakpoints: {
    1280: {
      perView: 3,
    },
    1024: {
      perView: 2,
    },
    768: {
      perView: 1,
    },
  },
};

new Glide(".glide", config).mount();
//  join waitlist button hidden
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const joinButton = document.getElementById("joinButton");
const scheduleButton = document.getElementById("scheduleButton");

joinButton.addEventListener("click", () => {
  // Hide section 1 and show section 2
  section1.classList.add("hidden");
  section2.classList.remove("hidden");
});

scheduleButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  // Hide section 2 and show section 1
  section2.classList.add("hidden");
  section1.classList.remove("hidden");
});
