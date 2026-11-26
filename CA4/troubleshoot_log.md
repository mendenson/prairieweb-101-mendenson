
# CA4 — Troubleshooting Log

**Course:** SODV1401 - Apply Scripting Techniques for Web Application  
**Assessment:** Part 4 - Deployment and Maintenance  
**Project:** Explore Alberta Trails  
**Date:** November 26, 2026

## 1. Initial Assessment

Application: Explore Alberta Trails
Course: SODV1401
Assessment: Part 4

The original scaffold was executed unchanged
using Visual Studio Code and Live Server.

The initial browser Console revealed missing
resources, an API response parsing error,
and continuous logging.

## 2. Troubleshooting Record

| Issue | Fix &Evidence Link |
|---|---|
| Missing logo image (404) | Pending correction. Initial evidence: [Original Console](evidence/01-original-console.png) |
| Missing hero image (404) | Pending correction. Initial evidence: [Original Console](evidence/01-original-console.png) |
| JSON parsing error in weather API | Pending investigation. Initial evidence: [Original Console](evidence/01-original-console.png) |
| Continuous console logging | Pending correction. Initial evidence: [Original Console](evidence/01-original-console.png) |
| Invalid HTML structure and broken layout | Pending HTML validation and correction. |
| Unavailable embedded video | Pending investigation of external resource and embedding. |

## 3. Status

Initial diagnostic completed.
Corrective actions and verification evidence pending.


| Invalid and insecure weather API request | The original HTTP request returned status 200 with a reported Content-Length of 8 bytes. The response body could not be reliably inspected, and the application previously reported a JSON parsing error. The URL uses incorrect geographical parameters and a positive longitude. Correction pending. Evidence: [Headers](evidence/02-api-original-headers.png), [Response](evidence/03-api-original-response.png). |


| Issue | Fix &Evidence Link |
|---|---|
| Weather API returned a JSON parsing error. The original request used HTTP, incorrect geographical parameters, and lacked error handling. | Replaced HTTP with HTTPS, corrected latitude/longitude parameters, used async/await with response validation and try/catch, and updated DOM content safely using textContent. Verified successful API response (HTTP 200) and displayed temperature and wind speed. Evidence: [Weather Display](evidence/04-weather-api-fixed.png), [HTTPS Request](evidence/05-weather-api-https.png). |
| Invalid HTML structure and malformed closing tags | Corrected the header, form, iframe, main and document closing tags. Added language metadata and accessible labels. Verified the corrected DOM hierarchy using Chrome DevTools Elements. Evidence: [HTML Structure](evidence/06-html-structure-fixed.png). |
| Continuous console logging and unused JavaScript function | Removed the unnecessary setInterval logging and the unused oldHelper function. Verified that the Console no longer displays repeated "still running" messages. Evidence: [Console After Refactoring](evidence/07-console-logging-fixed.png). |
| Outdated jQuery 2.0.0 dependency and unused slider plugin creating an insecure cookie. | Removed the obsolete jQuery library and slider plugin. Verified through Chrome DevTools Network that no jQuery requests were made after reloading the page. Weather functionality remained operational. Evidence: [jquery removed](evidence/08-jquery-removed.png). |
| Contact form created an unnecessary cookie without explicitly setting Secure, HttpOnly, or SameSite attributes. Form data was also logged to the browser Console. | Removed the contact cookie assignment and personal-data logging. Implemented HTML5 form validation and a demonstration-only status message. Verified that submitting the form no longer creates the cookie. Evidence: [Before](evidence/09-insecure-contact-cookie-before.png), [After](evidence/10-contact-cookie-removed.png). |
| Misleading Cache-Control meta tag specifying a one-year cache lifetime, potentially causing stale-file concerns. | Removed the ineffective HTML Cache-Control directive and inspected the actual HTTP response headers using Chrome DevTools. The local server returned `Cache-Control: public, max-age=0`, ETag, Last-Modified, and HTTP 304 Not Modified, confirming cache revalidation. Production cache behaviour and asset versioning will be verified during deployment. Evidence: [Cache Headers](evidence/11-cache-headers.png). |
| Missing logo and hero images caused HTTP 404 errors. | Replaced the missing logo with an accessible text heading and updated the hero background to use a locally stored, optimized WebP image. Verified that the hero image displays correctly and both 404 errors no longer appear in the Console. Evidence: [Logo Fix](evidence/12-logo-404-fixed.png), [Hero Fix](evidence/13-hero-image-fixed.png). |
| Unavailable YouTube video and unnecessary third-party tracking requests. | Removed the unused YouTube iframe to reduce external dependencies and avoid loading third-party content without user interaction. Verified that the page no longer requests YouTube resources during a fresh load. Evidence: [YouTube Removal](evidence/14-youtube-embed-removed.png), [YouTube Removal 2](evidence/15-youtube-embed-removed2.png). |
| Outdated Bootstrap 3.3.7 dependency and conflicting CSS margin declarations. | Removed the unused Bootstrap CSS import and consolidated duplicate body margin rules. Verified through Chrome DevTools Network, with browser cache disabled, that no Bootstrap resources were requested. The hero image, weather information, and contact form remained operational. Evidence: [Bootstrap Removal](evidence/15-bootstrap-css-removed.png). |
| Original page lacked a responsive layout suitable for mobile devices. | Added responsive CSS using a media query for screens up to 600px. Adjusted header typography, hero dimensions, form width, and spacing. Visually verified the layout at 360x640 and 414x896. Evidence: [360x640](evidence/17-mobile-360x640.png), [414x896](evidence/18-mobile-414x896.png). |

## 4. JavaScript Improvements

I organized the JavaScript in one file called `script.js`.

The file has two main functions:

- `loadWeather()` gets the weather information.
- `setupForm()` manages the contact form.

I used `fetch()`, `async/await`, and `try/catch` to handle the weather request.

The weather information is displayed using `textContent`.

The form uses HTML5 validation and does not create cookies or send user data to a server.

This keeps the code simple and avoids unnecessary repetition.

## 5. Browser DevTools

I used DevTools to investigate the problems:

- **Console:** Checked JavaScript errors and unnecessary messages.
- **Network:** Checked failed requests, missing files, and the Weather API.
- **Elements:** Inspected HTML structure and CSS styles.
- **Application:** Checked browser cookies and caching.
- **Sources:** A final breakpoint and step-through test is still required.

## 6. Mobile Testing

Earlier testing included:

- 360 x 640 pixels
- 414 x 896 pixels

The original mobile screenshots are available in the `evidence` folder.

During a later test, Opera DevTools incorrectly reported a viewport width of 1868 pixels.

I will repeat the final responsive tests using Edge or Chrome before submitting the assessment.

Historical screenshots:

- [360 x 640](evidence/17-mobile-360x640.png)
- [414 x 896](evidence/18-mobile-414x896.png)

## 7. Final Verification

The following checks must be completed after the final code is saved:

- [ ] Open the updated website with Live Server.
- [ ] Check the Console for JavaScript errors.
- [ ] Confirm CSS, JavaScript, and images load without 404 errors.
- [ ] Test the Weather API and its error message.
- [ ] Test the contact form.
- [ ] Confirm no contact cookie is created.
- [ ] Test the two mobile screen sizes.
- [ ] Demonstrate a breakpoint in DevTools.
- [ ] Verify the published HTTPS website.
- [ ] Run Lighthouse and record the results.

## 8. Conclusion

The website has been improved by correcting HTML errors, removing outdated libraries, improving JavaScript error handling, and updating the page design.

The code is now organized using functions and separate HTML, CSS, and JavaScript files.

Final browser testing and GitHub Pages deployment will confirm that the updated version works correctly.