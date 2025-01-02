// MOTTO Animation
var myString = "RESTORING THE DIGNITY OF THE CHILD.";
var myArray = myString.split("");
var loopTimer;

function frameLooper() {
    if (myArray.length > 0) {
        document.getElementById("Fap").innerHTML += myArray.shift();
    } else {
        clearTimeout(loopTimer);
    }
    loopTimer = setTimeout(frameLooper, 70);
}
frameLooper();

// scripts.js for Dynamic Background and Text Change
const heroSection = document.querySelector('.hero-section');
const heroHeading = document.getElementById('hero-heading');
const heroSubtext = document.getElementById('hero-subtext');
const heroButtons = document.querySelector('.hero-buttons');

// Array of images and corresponding text
const slides = [
    {
        image: 'IMG_20241213_131152_768.jpg',
        heading: 'Learn Today, Excel Tomorrow',
        subtext: "We don't just school, we educate",
    },
    {
        image: 'IMG_20241213_130102_425.jpg',
        heading: 'Building the Leaders of Tomorrow',
        subtext: 'Education is the key to success.',
    },
    {
        image: 'IMG_20241213_124828_157.jpg',
        heading: 'Empowering the Next Generation',
        subtext: 'Where passion meets excellence.',
    },
    
    {
        image: 'award.jpg',
        heading: 'Unlocking Potential',
        subtext: 'Discover your greatness here.',
    },
    
];

// Current slide index
let currentSlide = 0;

// Function to change the slide
function changeSlide() {
    const slide = slides[currentSlide];
    heroSection.style.backgroundImage = `url(${slide.image})`;
    heroHeading.textContent = slide.heading;
    heroSubtext.textContent = slide.subtext;

    // Reset animation for text and buttons
    heroHeading.style.animation = 'none';  // Reset animation
    heroSubtext.style.animation = 'none';
    heroButtons.style.animation = 'none';

    // Trigger the animation again with a delay
    setTimeout(() => {
        heroHeading.style.animation = 'slideInLeft 3s ease-out forwards';
        heroSubtext.style.animation = 'slideInRight 3s ease-out forwards';
        heroButtons.style.animation = 'fadeInUp 2s ease-in-out forwards 1s';  // Delay for buttons
    }, 100); // Small delay to ensure content is visible

    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;
}

// Initial slide
changeSlide();

// Change slides every 5 seconds
setInterval(() => {
    changeSlide();
}, 5000);



    // Function to show the loader
    function showLoader() {
        document.getElementById('loader').style.display = 'block';
    }

    // Function to hide the loader
    function hideLoader() {
        document.getElementById('loader').style.display = 'none';
    }

    // Function to send an email using EmailJS
    function sendEmail(name, email, message) {
        const emailData = {
            service_id: "service_ylgud6k",
            template_id: "template_4wugo2s",
            user_id: "MMXAUEWWoPGpxYEtp", // Replace with your public API key
            template_params: {
                from_name: name,
                reply_to: email,
                message: message
            }
        };

        fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(emailData)
        })
        .then(response => {
            if (response.ok) {
                document.getElementById('success-message').style.display = 'block';
                document.getElementById('contact-form').reset();
            } else {
                throw new Error("Failed to send email");
            }
        })
        .catch(error => {
            console.error("EmailJS error:", error);
            document.getElementById('error-message').style.display = 'block';
        })
        .finally(() => {
            hideLoader();
        });
    }

    // Event listeners for buttons
    document.getElementById('emailButton').addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            showLoader();
            sendEmail(name, email, message);
        } else {
            alert("Please fill in all fields before sending.");
        }
    });

    document.getElementById('whatsappButton').addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        if (name && message) {
            const whatsappLink = `https://wa.me/2348168099351?text=Hello, my name is ${encodeURIComponent(name)}. ${encodeURIComponent(message)}`;
            window.open(whatsappLink, '_blank');
        } else {
            alert("Please fill in your name and message before contacting via WhatsApp.");
        }
    });

