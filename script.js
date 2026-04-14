function openModal() {
    document.getElementById("modal").classList.add("active");
}

// LOGIN
const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        window.location.href = "dashboard.html";
    });
}
// SIGNUP
const signupForm = document.getElementById("signup-form");

if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();
        window.location.href = "login.html";
    });
}
// JOBS DATA
// const jobs = [
//     { title: "Frontend Developer", company: "Tech Corp", location: "Remote" },
//     { title: "Backend Developer", company: "AI Solutions", location: "Bangalore" },
//     { title: "Data Scientist", company: "Data Wizards", location: "Mumbai" },
//     { title: "Full Stack Developer", company: "CodeCraft", location: "Hyderabad" },
//     { title: "Machine Learning Engineer", company: "DeepAI", location: "Delhi" },
//     { title: "Software Engineer", company: "Infosys", location: "Pune" },
//     { title: "React Developer", company: "StartupX", location: "Remote" },
//     { title: "Python Developer", company: "TechNova", location: "Chennai" },
//     { title: "DevOps Engineer", company: "CloudNet", location: "Bangalore" },
//     { title: "AI Engineer", company: "FutureTech", location: "Remote" }
// ];

const jobs = [
    {
        title: "Frontend Developer",
        company: "Tech Corp",
        location: "Remote",
        image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
    },
    {
        title: "Backend Developer",
        company: "AI Solutions",
        location: "Bangalore",
        image: "https://cdn-icons-png.flaticon.com/512/2721/2721265.png"
    },
    {
        title: "Data Scientist",
        company: "Data Wizards",
        location: "Mumbai",
        image: "https://cdn-icons-png.flaticon.com/512/4149/4149658.png"
    },
    {
        title: "Full Stack Developer",
        company: "CodeCraft",
        location: "Hyderabad",
        image: "https://cdn-icons-png.flaticon.com/512/919/919825.png"
    },
    {
        title: "Machine Learning Engineer",
        company: "DeepAI",
        location: "Delhi",
        image: "https://cdn-icons-png.flaticon.com/512/4149/4149688.png"
    },
    {
        title: "Software Engineer",
        company: "Infosys",
        location: "Pune",
        image: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png"
    },
    {
        title: "React Developer",
        company: "StartupX",
        location: "Remote",
        image: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
    },
    {
        title: "Python Developer",
        company: "TechNova",
        location: "Chennai",
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
    },
    {
        title: "DevOps Engineer",
        company: "CloudNet",
        location: "Bangalore",
        image: "https://cdn-icons-png.flaticon.com/512/919/919836.png"
    },
    {
        title: "AI Engineer",
        company: "FutureTech",
        location: "Remote",
        image: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
    }
];




const container = document.getElementById("job-cards");

if (container) {
    jobs.forEach(job => {
        const card = document.createElement("div");
        card.className = "job-card";

//         card.innerHTML = `
//     <h3>${job.title}</h3>
//     <p><strong>${job.company}</strong></p>
//     <p>${job.location}</p>
//     <p style="color: green; font-size: 12px;">AI Recommended</p>
//     <button onclick="location.href='job-details.html'">View Details</button>
// `; 

card.innerHTML = `
    <img src="${job.image}" class="job-img">

    <h3>${job.title}</h3>
    <p><strong>${job.company}</strong></p>
    <p>${job.location}</p>

    <p class="ai-tag">AI Recommended</p>

    <button onclick="location.href='job-details.html'">View Details</button>
`;


        container.appendChild(card);
    });
}
// APPLY BUTTON
function applyJob() {
    alert("Application submitted successfully!");
}

// SAVE PROFILE (LOCAL STORAGE)
const profileForm = document.getElementById("profile-form");

if (profileForm) {
    profileForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const inputs = profileForm.querySelectorAll("input");

        const profileData = {
            skills: inputs[0].value,
            experience: inputs[1].value,
            location: inputs[2].value
        };

        localStorage.setItem("profile", JSON.stringify(profileData));

        alert("Profile saved!");
    });
}

// LOAD PROFILE INTO JOBS PAGE (AI FEEL)
const profile = JSON.parse(localStorage.getItem("profile"));

if (profile && container) {
    const note = document.createElement("p");
    note.innerHTML = `<strong>AI matched jobs based on your skills:</strong> ${profile.skills}`;
    container.before(note);
}