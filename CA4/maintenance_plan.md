# CA4 - Maintenance Plan

**Course:** SODV1401  
**Project:** Explore Alberta Trails  
**Owner:** Mendenson Azevedo Barros Mota  
**Review Schedule:** After each update and every three months

## 1. Website Monitoring

After publishing my website on GitHub Pages, I will check that the main features are working correctly.

I will use browser DevTools to check:

- JavaScript errors in the Console
- Failed requests in the Network tab
- Weather API availability
- Missing images and files
- Mobile responsiveness

I will also use Lighthouse to check performance, accessibility, and website loading.

If I find a problem, I will record it in the troubleshooting log.

The website does not currently have automatic server-side monitoring.

## 2. Regular Maintenance

Every three months, I will review the website.

My maintenance tasks will include:

- Checking that the Weather API still works
- Testing the contact form
- Checking for broken links
- Reviewing HTML, CSS, and JavaScript
- Removing unused code
- Testing the website in updated browsers
- Testing mobile screen sizes

I will also check whether any external libraries or APIs need updating.

The website currently does not use Bootstrap or jQuery.

## 3. Security and Privacy

The contact form is only a demonstration.

It does not send, save, or log personal information.

I will continue checking that the website does not create unnecessary cookies.

If cookies are needed in the future, I will review the appropriate security settings, including Secure, SameSite, and HttpOnly where applicable.

I will also:

- Use HTTPS for external requests
- Avoid storing API keys in JavaScript
- Check for mixed-content warnings
- Review browser cache behavior

## 4. Code Updates

Before updating the website, I will:

1. Create or select a development branch.
2. Make the required changes.
3. Test the website locally.
4. Check the Console and Network tabs.
5. Commit the changes.
6. Review and merge the changes into `main`.
7. Verify the published website.

I will update the CSS and JavaScript version numbers when necessary to help browsers load newer files.

## 5. Problem Recovery

If the website stops working after an update, I will identify the problem using DevTools.

I will review the GitHub commit history and revert the problematic change if necessary.

After restoring the working version, I will test the website again and document the issue.

## 6. Future Improvements

Possible future improvements include:

- Adding more Alberta trails
- Improving accessibility
- Adding more weather information
- Creating automated website tests
- Adding secure server-side contact form processing

My priority is to keep the website functional, secure, and easy to maintain.
