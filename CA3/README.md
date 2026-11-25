# CA3 — Interactive Trail Map & Live Weather

**Course:** SODV1401 — Apply Scripting Techniques for Web Application  
**Assessment:** Competency Assessment — Part 3  
**Project:** Explore Alberta Trails

## Project Overview

This project demonstrates the integration of third-party content and external APIs into a responsive web page.

The application displays an interactive map of Lake Louise, Alberta, and current weather information. It also includes an optimized photograph of the Plain of Six Glaciers trail.

## Technologies Used

- HTML5 — Page structure and semantic elements
- CSS3 — Responsive layout and styling
- JavaScript — Fetch API, error handling and DOM manipulation
- OpenStreetMap — Interactive map
- Open-Meteo — Current weather information
- WebP — Optimized images
- esbuild — CSS and JavaScript minification
- Git and GitHub — Version control
- Lighthouse — Performance, accessibility, best practices and SEO testing

## Main Features

- Interactive map loaded after user interaction
- Privacy notice before loading third-party map content
- Responsive map and image layout
- Current temperature and wind speed
- API error handling and eight-second timeout
- Ten-minute weather cache using `sessionStorage`
- Alternative link when the embedded map is unavailable
- Responsive WebP images with JPEG fallback
- Minified CSS and JavaScript
- SEO and social-sharing metadata

## How to Run

1. Download or clone the repository.
2. Open the project in Visual Studio Code.
3. Open `CA3/index.html` using Live Server.
4. View the current weather information.
5. Click **Load Interactive Map** to display the map.

An internet connection is required to retrieve weather data and load the external map.

## Project Files

- `index.html` — Main assessment page
- `style.css` — Original stylesheet
- `style.min.css` — Minified stylesheet
- `script.js` — Original JavaScript
- `script.min.js` — Minified JavaScript
- `images/` — Optimized images and JPEG fallback
- `decision_log.md` — Technical decisions and Lighthouse results
- `evidence/` — Saved assessment evidence
- `package.json` — Development dependencies

## Lighthouse Mobile Results

| Category | Score |
|---|---:|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

The scores were obtained during local testing with cached weather data and before loading the external map. Results may vary between runs.

## Privacy Considerations

The embedded map is loaded only after user interaction. Third-party services may receive technical information, including the visitor's IP address.

Weather data is obtained from Open-Meteo. Recent weather values are cached for ten minutes in the browser session.

Additional technical decisions are documented in `decision_log.md`.

## Version Control

Development is performed on the `feature/ca3-interactive-map` branch. Changes are committed and pushed to GitHub before review and squash merging into `main`.