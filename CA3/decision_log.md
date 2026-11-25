# CA3 — Technical Decision Log

## Embed and API Selection

I selected OpenStreetMap to display an interactive map of Lake Louise, Alberta. The map loads only after the user clicks a button, reducing unnecessary third-party requests.

I used the Open-Meteo API with JavaScript Fetch to retrieve current temperature and wind speed. The API does not require an API key for this implementation.

## Privacy and Security

Before loading the map, the application informs visitors that third-party requests may expose their IP address and browser information.

The iframe uses `sandbox="allow-scripts allow-same-origin"` and `referrerPolicy="strict-origin-when-cross-origin"`. These restrictions do not eliminate all third-party tracking.

API responses are validated before display and rendered using `textContent`. Requests have an eight-second timeout, and errors produce a fallback message.

Weather information is cached in `sessionStorage` for ten minutes to reduce unnecessary requests.

## Performance Optimization

I converted the Plain of Six Glaciers photograph into 600px and 1000px WebP versions, retaining the original JPEG as a fallback.

I implemented responsive images using `<picture>` and `srcset`, lazy loading, and image dimensions to reduce layout shifts.

CSS and JavaScript were reviewed and minified using esbuild. System fonts with a generic fallback avoid external font requests.

## SEO and AIO

The page includes descriptive headings, image alternative text, and metadata.

The metadata includes `charset`, `viewport`, `description`, `author`, `theme-color`, `og:type`, `og:title`, `og:description`, `og:locale`, `og:url`, and `rel="canonical"`.

The canonical URL was configured using the published GitHub Pages address. I also added `og:url` for social sharing. No dedicated AI-specific metatag was added.

## Lighthouse Results

Lighthouse Mobile results:

- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

These scores were measured locally with cached weather information and before the external map was loaded.