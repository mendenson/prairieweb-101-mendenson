# CA4 - Deployment Guide

**Course:** SODV1401  
**Assessment:** Part 4 - Deployment and Maintenance  
**Project:** Explore Alberta Trails  
**Date:** November 26, 2026

## 1. Hosting Service

I selected GitHub Pages to host my website.

GitHub Pages is suitable because my project uses HTML, CSS, and JavaScript without a backend or database.

The website uses the public Open-Meteo API to display weather information.

The API does not require an API key.

Repository:
https://github.com/mendenson/prairieweb-101-mendenson

Expected CA4 website URL:
https://mendenson.github.io/prairieweb-101-mendenson/CA4/

The final URL must be verified after deployment.

**Repository note:** The existing repository is public. I need to confirm whether this is acceptable for the assessment instructions.

## 2. Project Files

The CA4 project contains:

- `index.html` - Main HTML page
- `css/style.css` - Website styles
- `js/script.js` - Weather and contact form functions
- `images/` - Local image files
- `original/` - Original code before corrections
- `evidence/` - Troubleshooting screenshots
- `troubleshoot_log.md` - Issues and fixes
- `deployment.md` - Deployment instructions
- `maintenance_plan.md` - Maintenance instructions

I removed unnecessary libraries and scripts before deployment.

I also checked that the project does not require API keys or secret credentials.

## 3. GitHub Deployment Steps

1. Open the repository in GitHub Desktop.
2. Select the existing local branch `feature/ca4-deployment`.
3. Review the changes in the CA4 folder.
4. Test the website locally before committing.
5. Create a commit with the corrected files.
6. Click **Publish branch** to upload the branch to GitHub.
7. Open GitHub and create a Pull Request into `main`.
8. Review the changes and merge the Pull Request.
9. Open the repository settings.
10. Navigate to **Settings > Pages**.
11. Verify that GitHub Pages is publishing from `main` and `/(root)`.
12. Open the CA4 website URL and verify that it works.

I will keep the main website unchanged because the CA4 project is located in a separate folder.

## 4. Website Testing

After publishing, I will check the website using Chrome or Microsoft Edge.

### Functionality

- [ ] The website opens correctly.
- [ ] The hero image loads.
- [ ] The weather information appears.
- [ ] The contact form validates the required fields.
- [ ] The form displays its demonstration message.
- [ ] There are no JavaScript errors in the Console.
- [ ] No local CSS, JavaScript, or image requests return 404 errors.

### Mobile Responsiveness

I will test:

- 360 x 640 pixels
- 414 x 896 pixels

I will check that:

- Text is readable.
- The form fits the screen.
- Buttons and inputs are easy to use.
- Content is not cut off.
- There is no unwanted horizontal scrolling.

### Security

- [ ] The published website uses HTTPS.
- [ ] The Weather API uses HTTPS.
- [ ] There are no mixed-content errors.
- [ ] The contact form does not create cookies.
- [ ] Form information is not sent to a server.
- [ ] There are no passwords or API keys in the code.

## 5. Browser Caching

The original website included an outdated cache-control meta tag.

I removed this tag.

The website uses version numbers in the CSS and JavaScript references.

Example:

```html
<link rel="stylesheet" href="css/style.css?v=20261126-3">
<script src="js/script.js?v=20261126-3" defer></script>
```

When these files change, I can update the version number.

I will also use DevTools to inspect the actual HTTP response headers and test normal and hard reloads.

GitHub Pages manages its own HTTP cache headers, so I cannot disable all browser caching through HTML.

## 6. Monitoring

After deployment, I will check:

- GitHub Pages deployment status
- Console errors
- Failed Network requests
- Weather API errors
- Missing files
- Mobile layout
- Lighthouse performance results

I will record any new problems in the troubleshooting log.

## 7. Rollback Plan

If an update breaks the website:

1. Identify the problem and the affected commit.
2. Review the previous working version.
3. Revert the problematic commit.
4. Publish the correction through GitHub.
5. Test the website again.

This allows me to restore a working version if a deployment fails.

## 8. Deployment Record

Complete after publishing:

**Deployment date:** [PENDING]

**Commit SHA:** [PENDING]

**Published website URL:** [PENDING]

**GitHub repository link:**  
https://github.com/mendenson/prairieweb-101-mendenson

**HTTPS verification:** [PENDING]

**Mobile testing:** [PENDING]

**Lighthouse results:** [PENDING]

**Final deployment status:** [PENDING]