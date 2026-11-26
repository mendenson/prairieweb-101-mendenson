
# CA4 - Deployment and Maintenance

## SODV1401 - Apply Scripting Techniques for Web Application

**Student:** Mendenson Azevedo Barros Mota  
**Assessment:** Competency Assessment Part 4  
**Project:** Explore Alberta Trails  
**Date:** November 26, 2026

## 1. Project Description

This project is part of my SODV1401 Competency Assessment 4.

The main goal of this assessment was to identify and fix problems in an existing website, improve the code, and prepare the website for deployment and maintenance.

The website is called Explore Alberta Trails. It includes a background image, current weather information near Lake Louise, and a simple contact form.

## 2. Technologies Used

- HTML5
- CSS3
- JavaScript
- Open-Meteo Weather API
- Visual Studio Code
- Browser DevTools
- Git and GitHub
- GitHub Pages

## 3. Problems and Fixes

I used browser DevTools to identify problems in the original website.

The main improvements were:

- Corrected HTML structure and page information.
- Fixed missing images and incorrect file paths.
- Updated the Weather API to use HTTPS.
- Added error handling for the weather request.
- Removed outdated jQuery and Bootstrap dependencies.
- Removed unused JavaScript and unnecessary console messages.
- Removed the insecure cookie from the contact form.
- Improved the contact form using HTML5 validation.
- Added responsive CSS for smaller screens.
- Organized the JavaScript into simple functions.

I kept the original HTML file in the `original` folder for comparison.

## 4. Project Structure

CA4/
- index.html
- css/
  - style.css
- js/
  - script.js
- images/
  - Plain-of-Six-Glaciers-1000.webp
  - favicon.svg
- original/
  - index.html
- evidence/
  - Troubleshooting screenshots
- troubleshoot_log.md
- deployment.md
- maintenance_plan.md
- README.md

## 5. JavaScript Functions

I used one JavaScript file to keep the project simple.

The file contains two main functions:

**loadWeather()**

This function uses the Fetch API to get current weather information from Open-Meteo.

It displays the temperature and wind speed. If the request fails, the website shows an error message instead of stopping.

**setupForm()**

This function manages the contact form.

The form uses HTML5 validation and displays a confirmation message when valid information is entered.

This is a demonstration form. No information is sent or saved.

## 6. How to Run the Website

1. Download or clone the GitHub repository.
2. Open the project in Visual Studio Code.
3. Open the `CA4` folder.
4. Right-click `index.html`.
5. Select **Open with Live Server**.
6. Test the weather information and contact form.

The website requires an internet connection to retrieve live weather data.

## 7. Testing

I used browser DevTools to inspect the website.

I checked the HTML, CSS, JavaScript, Network requests, and browser cookies.

I also tested the website locally using Live Server.

Responsive testing includes the following screen sizes:

- 360 x 640 pixels
- 414 x 896 pixels

Final browser testing and performance results are recorded separately as they are completed.

Screenshots are stored in the `evidence` folder.

## 8. Deployment

I selected GitHub Pages because the project uses HTML, CSS, and JavaScript without a backend server.

**GitHub Repository:**  
https://github.com/mendenson/prairieweb-101-mendenson

**CA4 Website:**  
https://mendenson.github.io/prairieweb-101-mendenson/CA4/

Deployment steps and verification information are available in `deployment.md`.

## 9. Maintenance

I created a maintenance plan to explain how I will keep the website working after deployment.

My maintenance tasks include:

- Checking for JavaScript errors.
- Monitoring the Weather API.
- Checking for broken files or links.
- Testing the website on mobile devices.
- Reviewing the code after updates.
- Using GitHub history to recover a working version if needed.

More details are available in `maintenance_plan.md`.

## 10. Assessment Documentation

The following files support my assessment:

- `troubleshoot_log.md` - Problems, fixes, and evidence.
- `deployment.md` - Deployment process and testing.
- `maintenance_plan.md` - Website maintenance and updates.
- `evidence/` - Screenshots collected during troubleshooting.
- `original/` - Original code before corrections.

## Conclusion

In this assessment, I learned how to use browser DevTools to identify website problems and improve existing code.

I also practiced JavaScript error handling, responsive design, code cleanup, GitHub deployment, and website maintenance.

The project helped me understand how to troubleshoot and maintain a simple web application.
