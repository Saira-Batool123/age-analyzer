document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const sections = document.querySelectorAll(".content-section");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));

      tab.classList.add("active");
      const sectionId = tab.id.replace("-tab", "");
      document.getElementById(sectionId).classList.add("active");
    });
  });

  // Dark Mode Toggle
  const toggle = document.getElementById("darkToggle");
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", toggle.checked);
  });

  // Age Calculator
  document.getElementById("age-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const dob = new Date(document.getElementById("dob").value);
    const mode = document.getElementById("age-mode").value;
    const result = document.getElementById("age-result");

    if (!name || !dob || isNaN(dob)) {
      result.innerText = "Please fill the form correctly.";
      result.classList.add("error");
      return;
    }

    const now = new Date();
    const ageInMilliseconds = now - dob;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    const age = mode === "exact" ? ageInYears.toFixed(8) : Math.floor(ageInYears);

result.innerHTML = `${name}, your age is ${age} years.<br>That is approximately ${ageInSeconds.toLocaleString()} seconds.`;

  });
});
