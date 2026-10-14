# Hot Bites — Offline Front-End

This copy is prepared to run without external CSS/JavaScript/font/image CDNs.

## Run
1. Extract the ZIP.
2. Open `hot-bites-offline/index.html` in your browser or use VS Code Live Server.
3. Turn off Wi-Fi and test the menu filters, navigation collapse, product details modal, and images.

## Offline changes
- Bootstrap CDN CSS was replaced with `css/offline-framework.css`, a small local utility layer for the classes used by this page.
- Bootstrap's collapse and modal interactions are handled by `js/offline-framework.js`.
- Google Fonts and Bootstrap Icons CDN references were removed. The page uses local system fonts and local text-based icon substitutes.
- Image URLs were replaced with local image paths using files already supplied in `img/`.

Note: telephone links, maps, and external messaging services naturally need network/cellular connectivity for their external action. The site itself should render locally.
