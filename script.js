// Official Midway University CSE Courses (with prerequisites + credit hours)

const courses = [
    {
        title: "CSE 150 – Introduction to Computer Science",
        desc: "This course provides a broad overview of the computing field and helps students explore the vast array of professional paths that the Computer Science major prepares them for.",
        credits: "3.0",
        prereq: "None"
    },
    {
        title: "CSE 200 – Computer Programming I",
        desc: "This is an introduction to object-oriented programming languages. Students will be exposed to programming concepts, data structure and algorithmic processes.",
        credits: "3.0",
        prereq: "None"
    },
    {
        title: "CSE 210 – Computer Programming II",
        desc: "This course introduces advanced programming concepts, efficient problem solving, and further develops algorithmic design.",
        credits: "3.0",
        prereq: "CSE 200"
    },
    {
        title: "CSE 250 – Database Systems",
        desc: "This course examines the theory and architecture of databases. Students will learn to model data, design databases, and write and execute queries.",
        credits: "3.0",
        prereq: "None"
    },
    {
        title: "CSE 300 – Human Computer Interaction",
        desc: "This course addresses the design of interactive applications by applying a user-centered design cycle, focusing on usability and user experience.",
        credits: "3.0",
        prereq: "None"
    },
    {
        title: "CSE 310 – Platform Technologies",
        desc: "Students will focus on hardware and operating systems for computing platforms, studying how hardware and software integrate to form essential IT systems.",
        credits: "3.0",
        prereq: "None"
    },
    {
        title: "CSE 320 – Networking",
        desc: "Students will focus on network standards, components, and requirements of network protocols within a distributed computing setting.",
        credits: "3.0",
        prereq: "None"
    },
    {
        title: "CSE 400 – Cybersecurity",
        desc: "This course explores concepts related to implementation, operation, analysis, and testing of the security of computer technologies.",
        credits: "3.0",
        prereq: "None"
    },
    {
        title: "CSE 410 – Mobile Computing",
        desc: "This course helps students gain the skills needed to create web-based and mobile applications in a world where technology is increasingly mobile.",
        credits: "3.0",
        prereq: "CSE 210"
    },
    {
        title: "CSE 420 – Emerging Technologies",
        desc: "This course presents students with new technologies that are gaining importance. Topics vary and the course may be repeated with different content.",
        credits: "3.0",
        prereq: "None"
    },
    {
        title: "CSE 430 – AI in Advanced Data Analytics",
        desc: "This course explores applying existing AI methods to analyze, interact with, and interpret numerical, text, image, voice, and video data using state-of-the-art AI models.",
        credits: "3.0",
        prereq: "None"
    },
    {
        title: "CSE 490 – Capstone",
        desc: "An integrative project where students model a challenging problem, propose solutions, and build a final solution individually and in teams.",
        credits: "3.0",
        prereq: "Senior Standing"
    }
];

const container = document.getElementById("course-container");
const sidebar = document.getElementById("sidebar-links");

function displayCourses(list) {
    container.innerHTML = "";
    sidebar.innerHTML = "";

    list.forEach((course, index) => {
        const id = `course-${index}`;

        // Sidebar link
        sidebar.innerHTML += `<li><a href="#${id}">${course.title}</a></li>`;

        // Course card
        container.innerHTML += `
            <section class="course-card" id="${id}">
                <h2>${course.title}</h2>
                <p><strong>Credits:</strong> ${course.credits}</p>
                <p><strong>Prerequisite:</strong> ${course.prereq}</p>
                <p>${course.desc}</p>
            </section>
        `;
    });
}

// Initial load
displayCourses(courses);

// Search bar functionality
document.getElementById("searchBar").addEventListener("input", function () {
    const query = this.value.toLowerCase();

    const filtered = courses.filter(course =>
        course.title.toLowerCase().includes(query) ||
        course.desc.toLowerCase().includes(query) ||
        course.prereq.toLowerCase().includes(query)
    );

    displayCourses(filtered);
});
