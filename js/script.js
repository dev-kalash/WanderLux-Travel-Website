const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

const hiddenElements =
    document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));

const heroImages = [
    "images/nepal.jpg",
    "images/australia.jpg",
    "images/pakistan.jpg",
    "images/bali.jpg",
    "images/japan.jpg",
    "images/paris.jpg"
];

const destinations = [
    "Explore Nepal - Home of the Himalayas",
    "Discover Australia - Beaches and City Life",
    "Visit Pakistan - Stunning Mountain Landscapes",
    "Relax in Bali - Tropical Paradise",
    "Experience Japan - Tradition Meets Innovation",
    "Explore Paris - Culture and Romance"
];

let imageIndex = 0;

setInterval(() => {

    const hero =
        document.querySelector(".hero");

    const heroContent =
        document.querySelector(".hero-content");

    const heroText =
        document.getElementById("heroDestination");

    heroContent.classList.add("fade-out");

    setTimeout(() => {

        imageIndex++;

        if(imageIndex >= heroImages.length){
            imageIndex = 0;
        }

        hero.style.backgroundImage =
            `linear-gradient(
                rgba(0,0,0,0.5),
                rgba(0,0,0,0.5)
            ),
            url('${heroImages[imageIndex]}')`;

        heroText.textContent =
            destinations[imageIndex];

        heroContent.classList.remove("fade-out");

    }, 800);

}, 3500);