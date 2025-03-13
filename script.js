const courses = [
  {
    title: "Master Java Programming - Complete Beginner to Advanced",
    description:
      "Become a master in JAVA programming to start a rewarding career. This course will help you master basic JAVA concepts such as Variables, Data Types, I/O to Advanced Java Collections concepts and Algorithms. Join the learning wave today!",
    link: "java.html",
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305131111/Java-programming.png",
  },
  {
    title: "Master C++ Programming - Complete Beginner to Advanced",
    description:
      "Become an ace in C++ Programming Language and master the C++ programming skills from basics to advanced. This course is a complete package of videos, notes & contests from basics to STL libraries & algorithms. The perfect C++ course for beginners.",
    link: "c++.html",
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230703144619/CPP-Language.png",
  },
  {
    title: "Master JavaScript - Complete Beginner to Advanced",
    description:
      "Looking to become a proficient JavaScript Developer? Well, look no further!!! We have brought to you the most sought-after course to master the JavaScript language and build your own dynamic website from scratch. Enrol Now!!!",
    link: "javascript.html",
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305183140/Javascript.jpg",
  },
];
function renderCourses() {
  const coursesSection = document.getElementById("courses");
  coursesSection.innerHTML = "";

  courses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("p-4", "bg-white", "shadow", "rounded-lg");
    const courseLink = document.createElement("a");
    courseLink.href = course.link;
    courseLink.target = "_blank"; // Open link in new tab
    courseLink.innerHTML = `
			<img src="${course.image}" alt="${course.title}"
				class="w-full h-40 object-cover mb-4 rounded-lg">
			<h2 class="text-xl font-semibold">${course.title}</h2>
			<p class="text-gray-600 mb-2">${course.description}</p>
			<button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
				Enroll Now
			</button>
		`;
    courseCard.appendChild(courseLink);
    coursesSection.appendChild(courseCard);
  });
}
renderCourses();
function filterCourses() {
  const searchInput = document.getElementById("searchInput");
  const searchText = searchInput.value.toLowerCase();
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchText)
  );
  renderFilteredCourses(filteredCourses);
}
function renderFilteredCourses(filteredCourses) {
  const coursesSection = document.getElementById("courses");
  coursesSection.innerHTML = "";

  filteredCourses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("p-4", "bg-white", "shadow", "rounded-lg");
    const courseLink = document.createElement("a");
    courseLink.href = course.link;
    courseLink.target = "_blank"; // Open link in new tab
    courseLink.innerHTML = `
			<img src="${course.image}" alt="${course.title}"
			class="w-full h-40 object-cover mb-4 rounded-lg">
			<h2 class="text-xl font-semibold">${course.title}</h2>
			<p class="text-gray-600 mb-2">${course.description}</p>
			<button class="bg-blue-500 text-white py-2 px-4 
				rounded hover:bg-blue-600">Enroll Now
			</button>
		`;
    courseCard.appendChild(courseLink);
    coursesSection.appendChild(courseCard);
  });
}
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", filterCourses);
