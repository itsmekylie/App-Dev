document.addEventListener("DOMContentLoaded", function () {
    const subjectsData = {
        "First Year": [
            "Introduction to Computing",
            "Programming 1",
            "Discrete Mathematics",
            "Fundamentals of Information Systems"
        ],
        "Second Year": [
            "Data Structures and Algorithms",
            "Operating Systems",
            "Database Management Systems",
            "Networking Fundamentals"
        ],
        "Third Year": [
            "Web Development",
            "Software Engineering",
            "Mobile App Development",
            "Cybersecurity Fundamentals"
        ]
    };

    const subjectsContainer = document.getElementById("subjects-container");

    Object.keys(subjectsData).forEach(year => {
        let box = document.createElement("div");
        box.classList.add("subject-box");


        let yearButton = document.createElement("div");
        yearButton.classList.add("subject-year");
        yearButton.textContent = year;


        let arrow = document.createElement("span");
        arrow.classList.add("arrow");
        arrow.textContent = "▼";
        yearButton.appendChild(arrow);


        let list = document.createElement("ul");
        list.classList.add("subject-list");

        subjectsData[year].forEach(subject => {
            let li = document.createElement("li");
            li.textContent = subject;
            list.appendChild(li);
        });


        yearButton.addEventListener("click", function () {
            let isVisible = list.style.display === "block";
            list.style.display = isVisible ? "none" : "block";
            arrow.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
        });

        box.appendChild(yearButton);
        box.appendChild(list);
        subjectsContainer.appendChild(box);
    });
});
