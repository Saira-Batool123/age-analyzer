Advance Age Analyzer
Overview
Advance Age Analyzer is a feature-rich web application designed to help users analyze their age, health, and life milestones through an intuitive and visually appealing interface. Built using HTML, CSS, JavaScript, and Chart.js, the application includes tabs for Age Calculator, Health Tracker (BMI), Life Milestone (Next Birthday), Life Expectancy, and Contact. With a sunset-themed background and circular (doughnut) charts for data visualization, it offers a user-friendly experience for users of all ages. Developed by Saira Batool, a student at UET Lahore (Narowal Campus), this project showcases front-end development skills with a focus on interactivity and responsive design.
Features

Age Calculator: Calculate precise age in years, months, days, and optionally seconds, based on date of birth, with support for Western and Chinese/Korean age systems.
Health Tracker (BMI): Compute Body Mass Index (BMI) using height and weight inputs, displaying health status (e.g., Underweight, Normal, Overweight).
Life Milestone (Next Birthday): Display days until the next birthday, age on the next birthday, and a progress bar or doughnut chart visualizing progress toward the milestone.
Life Expectancy: Estimate remaining years and death year based on an average life expectancy (e.g., 80 years), presented in a circular chart.
Contact Form: Allow users to send feedback via a form with name, email, and message fields, styled for simplicity and accessibility.
Responsive Design: Fully responsive layout with a glassmorphism effect, dark/light mode toggle, and a sunset background for aesthetic appeal.
Graphical Visualizations: Doughnut charts in Life Milestone and Life Expectancy tabs to display days to next birthday and remaining years, respectively, with an 80% cutout for a clock-like appearance.
Interactive Features: Includes a "Copy Result" button for Age, BMI, and Life Milestone outputs, and smooth animations using GSAP for tab transitions.

Technologies Used

HTML5: For structuring the website and tabbed interface.
CSS3: For styling, including Tailwind CSS for responsive design, glassmorphism, and dark/light mode support.
JavaScript: For dynamic calculations, form handling, and chart rendering.
Chart.js: For creating circular (doughnut) charts in Life Milestone and Life Expectancy tabs.
GSAP: For smooth animations during tab switches and page load.
Font Awesome: For icons to enhance the user interface.
Local Storage: To save user inputs and results for persistence across sessions.

<img width="1343" height="648" alt="image" src="https://github.com/user-attachments/assets/78302611-d8f0-47f9-aa5b-76447079cfc6" />

<img width="1347" height="614" alt="image" src="https://github.com/user-attachments/assets/82e7668c-fbbf-4172-b34f-3c883106e1cd" />

<img width="1332" height="616" alt="image" src="https://github.com/user-attachments/assets/d80725a0-65c1-4771-9fec-440d618d0865" />

<img width="1334" height="647" alt="image" src="https://github.com/user-attachments/assets/f5384d18-1761-4ef4-91b3-ffdbb7091311" />

<img width="1330" height="636" alt="image" src="https://github.com/user-attachments/assets/651cdc33-d0a6-4577-bb49-58781ad4bca5" />

<img width="1330" height="635" alt="image" src="https://github.com/user-attachments/assets/e7ff5b46-ed21-4c0d-ba2b-f4a0a75c6e22" />


Installation
To run the Advance Age Analyzer locally, follow these steps:

Clone or Download the Repository:
git clone https://github.com/Saira-Batool123/advance-age-analyzer.git

Alternatively, download the project as a ZIP file from GitHub and extract it.

Navigate to the Project Directory:
cd advance-age-analyzer


Run the Application:

Open index.html in a web browser (e.g., Chrome, Firefox) by double-clicking the file or using a local server.
To run with a local server (recommended for proper functionality):python -m http.server 8000

Then, access the website at http://localhost:8000 in your browser.


Dependencies:

Ensure an internet connection to load external libraries via CDN:
Chart.js: https://cdn.jsdelivr.net/npm/chart.js
GSAP: https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js
Font Awesome: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css
Tailwind CSS: https://cdn.tailwindcss.com


Alternatively, download chart.min.js from Chart.js GitHub releases and place it in the project folder if offline usage is needed.



Usage

Open the Website:

Launch the Advance Age Analyzer in a web browser to view the homepage with a sunset background and tabbed navigation.


Navigate Tabs:

Use the navigation bar or sidebar to switch between Age Calculator, Health Tracker, Life Milestone, Life Expectancy, and Contact tabs.


Age Calculator:

Enter your date of birth using the date input field.
Click "Calculate" to view age in years, months, days, and optionally seconds.
Toggle between Western and Chinese/Korean age systems for comparison.
Use the "Copy Result" button to copy the output.


Health Tracker (BMI):

Input height (in meters or feet) and weight (in kilograms or pounds).
Click "Calculate BMI" to view your BMI and health status.
Copy the result using the "Copy Result" button.


Life Milestone (Next Birthday):

Enter your date of birth to see days until your next birthday and your age on that birthday.
View a doughnut chart showing days to next birthday vs. days since last birthday, with central text displaying key values.
Copy the result for sharing.


Life Expectancy:

Input your current age or date of birth to estimate remaining years (based on an average life expectancy of 80 years).
View a doughnut chart showing years lived vs. years remaining, styled with a clock-like design.
Copy the result for reference.


Contact:

Fill out the form with your name, email, and message.
Click "Send Feedback" to submit (currently logs to console; requires backend for full functionality).


Dark/Light Mode:

Toggle between dark and light modes using the button in the top-right corner for a comfortable viewing experience.



Project Structure
advance-age-analyzer/
├── index.html        # Main HTML file for the application
├── styles.css        # CSS file for custom styling (supplements Tailwind CSS)
├── script.js         # JavaScript file for calculations, charts, and interactivity
├── images/           # Folder for assets (e.g., sunset.jpg)
└── README.md         # This file

Screenshots
(Add screenshots of the website interface here, e.g., images/sunset.jpg for the homepage or tab-specific screenshots)
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch: git checkout -b feature/your-feature-name.
Make your changes and commit: git commit -m "Add your feature description".
Push to your branch: git push origin feature/your-feature-name.
Submit a pull request on GitHub.

Please follow the contributing guidelines for more details.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For any queries or suggestions, reach out to:

Saira Batool
Email: batoolsaira957@gmail.com
GitHub: Saira-Batool123


Created by Saira Batool, UET Lahore (Narowal Campus), 2025
