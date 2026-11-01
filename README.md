# Rea's Bakery Website

## Student Information

**Student Name:** Reabetswe Sepeng  
**Student Number:** ST10514318  
**Subject:** Web Development  
**Subject Code:** WEDE5020  
**Group:** Group 3  
**Project:** Website Project - Parts 1, 2 and 3

---

## 1. Project Overview

Rea's Bakery is a fictional local bakery created for the Website Project. The bakery provides freshly baked bread, pastries, cupcakes, cakes and customised celebration cakes.

The purpose of this project is to design and develop a functional, informative and visually appealing website for Rea's Bakery. The website provides customers with information about the bakery, its products, locations and services while allowing customers to submit enquiries and general messages.

The website is designed to provide a simple and user-friendly experience for customers accessing it from desktop, tablet and mobile devices.

---

## 2. Website Goals and Objectives

The main goals of the Rea's Bakery website are to:

- Establish an online presence for the bakery.
- Provide information about the organisation.
- Display the bakery's products and services.
- Generate customer enquiries.
- Provide contact and location information.
- Promote customised cakes and bulk orders.
- Create an easy-to-navigate user experience.
- Improve the website's visibility through SEO techniques.

### Key Performance Indicators

The website's success will be measured using the following KPIs:

- Number of website visitors.
- Number of product page visits.
- Number of enquiry submissions.
- Number of custom cake enquiries.
- Number of contact enquiries.
- User engagement with call-to-action buttons.

---

## 3. Target Audience

The target audience includes:

- Local residents.
- Families.
- Students.
- Working professionals.
- Businesses.
- Customers planning celebrations.
- Customers looking for birthday or wedding cakes.
- Customers purchasing bread and pastries.

---

## 4. Website Pages and Features

The website contains six main pages.

### Home

The homepage introduces Rea's Bakery and displays an introduction, popular products and calls to action. The popular product cards are clickable and direct users to the Products page.

### About Us

The About Us page provides information about the bakery's story, mission, vision and values.

### Products

The Products page displays 14 bakery products across four categories:

- Bread.
- Pastries.
- Cakes.
- Cupcakes.

The page includes a search feature, category filters and an image lightbox.

### Services

The Services page provides information about:

- Custom Cakes.
- Wedding Cakes.
- Event Catering.
- Bulk Orders.
- Special Occasion Orders.

### Enquiry

The Enquiry page contains a form allowing customers to enquire about product availability, customised cakes, wedding cakes, catering and bulk orders.

The form includes HTML validation and JavaScript functionality that displays a response based on the enquiry information submitted.

### Contact

The Contact page provides:

- Two fictional bakery locations.
- Telephone information.
- Email information.
- Opening hours.
- A general contact form.
- A link to the Enquiry page.

The contact form prepares an email using the visitor's default email application.

---

## 5. Website Technologies

The website uses the following technologies:

- **HTML5:** Used to create the structure and content of the website.
- **CSS3:** Used to control the appearance, layout, colours, typography and responsive design.
- **JavaScript:** Used to add interactive functionality, form validation, product searching, category filtering and image lightbox features.
- **Git and GitHub:** Used for version control and project submission.
- **GitHub Pages or Netlify:** Considered for free static website hosting.

---

## 6. Sitemap

```text
                         REA'S BAKERY
                              |
       +----------+-----------+-----------+----------+----------+
       |          |           |           |          |          |
      HOME      ABOUT      PRODUCTS    SERVICES   ENQUIRY    CONTACT
                  |           |
          +-------+-----+  +---+----+----+------+
          |       |     |  |        |    |      |
        Story  Mission Vision Bread Pastries Cakes Cupcakes
```

### Website Navigation

```text
Home
 |
 +-- About Us
 |
 +-- Products
 |
 +-- Services
 |
 +-- Enquiry
 |
 +-- Contact
```

All six pages contain a consistent navigation menu so that users can move between pages.

The project also includes:

- `sitemap.xml` - Provides a list of website pages for search engine discovery.
- `robots.txt` - Provides instructions for search engine crawlers.

The sitemap and robots file currently use placeholder website URLs. These must be updated with the actual published website address after deployment.

---

## 7. File and Folder Structure

```text
reas-bakery/
│
├── index.html
├── about.html
├── products.html
├── services.html
├── enquiry.html
├── contact.html
├── sitemap.xml
├── robots.txt
├── README.md
│
├── _css/
│   └── style.css
│
├── _js/
│   └── script.js
│
├── _images/
│   ├── Logo.jpg
│   ├── White Bread.jpeg
│   ├── Brown Bread.jpg
│   ├── Seeded Loaf.jpeg
│   ├── Croissants.jpg
│   ├── Cinnamon Rolls.jpg
│   ├── Chocolate Muffins.jpg
│   ├── Fruit Danishes.jpg
│   ├── Chocolate Cake.jpg
│   ├── Vanilla Celebration Cake.jpeg
│   ├── Red Velvet Cake.jpeg
│   ├── Custom Celebration Cake.jpg
│   ├── Vanilla Cupcakes.jpeg
│   ├── Chocolate Cupcakes.jpg
│   └── Red Velvet Cupcakes.jpg
│
└── _screenshots/
    ├── Desktop View.png
    ├── Tablet View.png
    └── Mobile View.png
```

---

## 8. Design Approach

The website uses a warm and welcoming bakery-inspired design.

### Colour Scheme

The design uses a cream, navy blue, black and gold colour scheme:

- Cream - Main background and neutral areas.
- Navy blue - Headings, navigation and buttons.
- Black - Main body text.
- Gold - Borders, highlights and decorative accents.
- White - Product cards, forms and content areas.

### Typography

Aptos is used as the primary font because it is clear and readable.

The typography hierarchy includes:

- H1 - Main page headings.
- H2 - Major sections.
- H3 - Product and subsection headings.
- Paragraph text - Supporting information.

### Layout

The website uses:

- Consistent navigation.
- A clickable Rea's Bakery logo.
- Clear page headings.
- Product cards.
- Service cards.
- Call-to-action buttons.
- Structured content sections.
- CSS Grid.
- Flexbox.
- Responsive layouts.
- Consistent footer information.

---

# Part 2: CSS Styling and Responsive Design

## 9. External CSS Stylesheet

An external CSS stylesheet named `style.css` was created and linked to all six HTML pages.

The stylesheet is stored in:

```text
_css/style.css
```

The stylesheet contains:

- CSS reset styles.
- Colour variables.
- Typography styles.
- Header and navigation styles.
- Product card styles.
- Service card styles.
- About Us section styles.
- Enquiry form styles.
- Contact and location styles.
- Button styles.
- Footer styles.
- Responsive styles.
- Lightbox styling.
- Search and filter styling.

## 10. CSS Selectors

Different CSS selectors are used throughout the stylesheet, including:

- Element selectors such as `body`, `h1`, `p` and `img`.
- Class selectors such as `.product-card`, `.service-card` and `.about-section`.
- Pseudo-class selectors such as `:hover`, `:focus` and `:active`.
- Media queries for responsive styling.

## 11. Responsive Design

The website was designed to work on desktop, tablet and mobile screen sizes.

Relative units such as `%`, `rem` and `em` are used where appropriate.

### Tablet Breakpoint

```css
@media (max-width: 900px)
```

At this breakpoint, navigation can wrap and grid layouts reduce the number of columns.

### Mobile Breakpoint

```css
@media (max-width: 600px)
```

At this breakpoint, navigation becomes vertical and product, service, values and contact layouts reduce to one column.

### Responsive Images

Images are made responsive using CSS:

```css
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```

Product images also use `object-fit: cover` to maintain consistent image dimensions within product cards.

## 12. Part 2 Testing and Screenshots

### Desktop View

![Desktop View](_screenshots/Desktop%20View.png)

### Tablet View

![Tablet View](_screenshots/Tablet%20View.png)

### Mobile View

![Mobile View](_screenshots/Mobile%20View.png)

### Desktop Testing

- Navigation displays correctly.
- Logo displays correctly.
- Product cards display in rows.
- Images display correctly.
- Text is readable.
- Buttons and links work.
- Colours and borders display correctly.

### Tablet Testing

- Grid layouts adjust to fewer columns.
- Navigation wraps correctly.
- Images resize correctly.
- Text remains readable.
- Content does not overflow the screen.

### Mobile Testing

- Navigation becomes vertical.
- Product cards display in one column.
- Service cards display in one column.
- About Us sections fit the screen.
- Images resize correctly.
- Buttons remain accessible.
- There is no unnecessary horizontal overflow.

### Part 1 Feedback and Changes

The feedback received for Part 1 was:

> "Create a logo instead of a phrase being a hyperlink."

The website was updated by creating and adding a Rea's Bakery logo. The logo is displayed in the website header and links to the Home page.

### Part 2 Improvements

- Added the Rea's Bakery logo.
- Replaced the text-based logo hyperlink with the actual bakery logo.
- Added an external CSS stylesheet.
- Added the cream, navy blue, black and gold colour scheme.
- Added product images and product cards.
- Added hover, focus and active states.
- Added CSS Grid and Flexbox layouts.
- Added responsive tablet and mobile styling.
- Added responsive image styling.
- Made Home page product cards clickable and linked them to the Products page.
- Separated the About Us content into individual sections.
- Added spacing and gold borders between major sections.
- Added the Services page.

---

# Part 3: JavaScript, SEO and Website Improvements

## 13. JavaScript Functionality

JavaScript was added through an external file:

```text
_js/script.js
```

The JavaScript file provides interactive functionality across the website.

### Enquiry Form Validation

The Enquiry form uses HTML5 and JavaScript validation.

Features include:

- Required field validation.
- Email address validation.
- South African telephone number validation.
- Minimum and maximum character limits.
- Date validation to prevent selecting a past date.
- A response message based on the selected enquiry type.
- A clear form function.

### Contact Form

The Contact form allows customers to prepare a general email.

Features include:

- Required field validation.
- Email address validation.
- Telephone number validation.
- Message type selection.
- Full message field.
- Email subject and message preparation.
- Clear form functionality.

The contact form uses a `mailto:` link to open the visitor's default email application. The visitor must send the email manually.

### Product Search

The Products page includes a search box that allows visitors to search for products by name.

### Product Category Filters

Visitors can filter products according to their category:

- All.
- Bread.
- Pastries.
- Cakes.
- Cupcakes.

A message is displayed when no products match the search.

### Product Image Lightbox

The Products page includes an image lightbox.

Visitors can:

- Click a product image to view a larger version.
- View the product name.
- Close the image using the close button.
- Close the lightbox by clicking outside the image.
- Press Escape to close the lightbox.

---

## 14. Search Engine Optimisation (SEO)

SEO improvements were added to the six HTML pages to help search engines understand the website's content.

### Page Titles

Each page has a unique title describing its content.

### Meta Descriptions

Each page contains a meta description summarising the information available on that page.

### Keywords

Relevant bakery-related keywords were included in the page metadata and content.

### Heading Structure

Heading elements such as H1, H2 and H3 are used to organise website content.

### Image Alt Text

Descriptive alternative text is included on images to explain their content and improve accessibility.

### Internal Linking

Internal links connect the six pages and help visitors navigate the website.

### Mobile-Friendly Design

Responsive CSS allows the website to adjust to different screen sizes.

### Sitemap and Robots File

The project includes `sitemap.xml` and `robots.txt` to support search engine crawling and page discovery.

---

## 15. Performance and Security Improvements

### Image Loading

Lazy loading was added to product images further down the Home and Products pages to help reduce unnecessary initial image loading.

The bakery logo loads normally because it appears in the page header.

A browser performance warning about lazy-loaded image dimensions was identified during testing. Explicit image dimensions or aspect-ratio styling can be added as a further improvement to reduce possible layout shifts.

### Responsive Images

CSS ensures that images resize according to the available screen space.

### Form Security and Validation

HTML5 and JavaScript validation are used to check information entered into the forms.

JavaScript uses `textContent` when displaying the enquiry response to avoid interpreting submitted text as HTML.

### HTTPS

HTTPS should be used when the website is published through a hosting provider that supports secure connections.

### Backups and Maintenance

The project files should be backed up regularly. Website links, images and forms should also be checked when changes are made.

---

## 16. Part 3 Testing

The website was tested locally using Visual Studio Code and Live Server.

### Navigation Testing

- All six HTML pages open correctly.
- Navigation links work between pages.
- The bakery logo links back to the Home page.

### Products Page Testing

- Product search works.
- Bread filter works.
- Pastries filter works.
- Cakes filter works.
- Cupcakes filter works.
- All filter displays all products.
- No-results message displays when there are no matching products.
- Product images open in the lightbox.
- Lightbox close button works.
- Escape key closes the lightbox.

### Enquiry Form Testing

- Required fields are validated.
- Invalid email addresses are rejected.
- Invalid telephone numbers are rejected.
- Valid form information displays a JavaScript response.
- Clear Form resets the fields and response.

### Contact Form Testing

- Required fields are validated.
- Invalid email addresses and telephone numbers are rejected.
- Valid information prepares an email.
- Clear Form resets the fields.

### Responsive Testing

The website was tested at the following screen sizes:

| Device | Screen Size |
|---|---|
| Desktop | 1920 × 1080 |
| Tablet | 820 × 1180 |
| Mobile | 390 × 844 |

The website displayed correctly at the tested screen sizes, with no reported horizontal overflow or overlapping content.

### Final Technical Checks

- Images were checked.
- Internal links were checked.
- Browser Console was checked.
- Sitemap and robots files were created.

A performance warning relating to lazy-loaded image dimensions was identified and remains a possible optimisation.

---

## 17. Content Research and Sourcing

Rea's Bakery is a fictional organisation created for this academic project.

The content created for the website includes:

- Organisation history.
- Mission statement.
- Vision statement.
- Organisation values.
- Product descriptions.
- Sample product prices.
- Bakery services.
- Contact information.
- Opening hours.
- Fictional bakery locations (Pretoria Central and Sunnyside).

Images used in the website should be sourced from appropriate public-domain, Creative Commons or royalty-free resources where applicable. Image sources should be documented in the project's reference list.

Any external information used during development should be referenced using the institution's required referencing style.

---

## 18. Technical Requirements

The website requires:

- A modern web browser.
- HTML5 support.
- CSS3 support.
- JavaScript support.
- A code editor such as Visual Studio Code.
- Git for version control.
- A GitHub repository.
- A hosting platform for deployment.

The website was tested locally using Live Server.

---

## 19. Timeline and Milestones

| Week | Activity | Status |
|---|---|---|
| Week 1 | Organisation research and project proposal | Completed |
| Week 2 | Content research and sitemap | Completed |
| Week 3 | Initial HTML development | Completed |
| Week 4 | CSS styling and layout | Completed |
| Week 5 | JavaScript functionality | Completed |
| Week 6 | Testing and debugging | Completed |
| Week 7 | Documentation and final preparation | In Progress |

GitHub submission and website deployment will be completed as part of the final preparation stage.

---

## 20. Budget

The estimated budget for the website project is:

| Item | Estimated Cost |
|---|---:|
| Domain registration | R150 - R300 per year |
| Basic hosting | R500 - R1,500 per year |
| Images/graphics | R0 - R500 |
| Maintenance | R500 - R1,000 per year |
| Development | Academic project |
| **Estimated Total** | **R1,150 - R3,300** |

The final costs may vary depending on the hosting provider, domain availability and resources selected. A free hosting platform may also be used for the academic project.

---

## 21. Changelog

### Version 0.1 - Initial Project Setup

**Date:** August 2026

Changes:

- Selected Rea's Bakery as the target organisation.
- Completed the website project proposal.
- Defined the website goals and objectives.
- Identified the target audience.
- Created the website sitemap.
- Created the initial folder structure.
- Created the initial HTML pages.
- Added navigation links between pages.
- Added initial website content.
- Created the README.md file.

### Version 0.2 - Part 1 Development

Changes:

- Added product information.
- Added bakery service information.
- Added enquiry form.
- Added contact information.
- Added two fictional bakery locations.
- Added initial product images.
- Expanded the website structure to include the Services page.

### Version 2.0 - Part 2 CSS and Responsive Design

Changes:

- Added an external `style.css` stylesheet.
- Linked the CSS stylesheet to all six HTML pages.
- Added the Rea's Bakery logo.
- Replaced the text-based logo hyperlink with the actual bakery logo.
- Added the cream, navy blue, black and gold colour scheme.
- Added typography styling.
- Added CSS Grid layouts.
- Added Flexbox layouts.
- Added product card styling.
- Added service card styling.
- Added About Us section styling.
- Added enquiry form styling.
- Added contact location styling.
- Added button styling.
- Added `:hover` states.
- Added `:focus` states.
- Added `:active` states.
- Added tablet responsive styling.
- Added mobile responsive styling.
- Added responsive image styling.
- Added clickable Home page product cards linking to the Products page.
- Separated the About Us content into individual sections.
- Added spacing and gold borders between major sections.
- Tested the website at desktop, tablet and mobile screen sizes.

### Version 3.0 - Part 3 JavaScript, SEO and Optimisation

**Date:** November 2026

Changes:

- Added JavaScript functionality through the external `script.js` file.
- Added enquiry form validation and response messages.
- Added contact form validation and email preparation.
- Added product search functionality.
- Added product category filters.
- Added a no-results message for product searches.
- Added a product image lightbox.
- Added lightbox close button functionality.
- Added Escape key functionality to close the lightbox.
- Added unique SEO page titles.
- Added meta descriptions to all six pages.
- Added relevant SEO keywords.
- Added descriptive image alt text.
- Created `sitemap.xml`.
- Created `robots.txt`.
- Added lazy loading to appropriate product images.
- Tested navigation across all six pages.
- Tested enquiry and contact forms.
- Tested product search, filters and lightbox.
- Tested the website on desktop, tablet and mobile.
- Completed the main local website functionality checks.

---

## 22. References

### Web Development

Mozilla Developer Network (MDN). 2026. *HTML forms and buttons*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms (Accessed: 14 August 2026).

Mozilla Developer Network (MDN). 2026. *HTML: A good basis for accessibility*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML (Accessed: 14 August 2026).

Mozilla Developer Network (MDN). 2026. *Semantic HTML*. Available at: https://developer.mozilla.org/en-US/curriculum/core/semantic-html/ (Accessed: 14 August 2026).

GitHub. 2026. *What is GitHub Pages?* Available at: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (Accessed: 14 August 2026).

### Organisation Content

Rea's Bakery. 2026. *Organisation information, mission, vision, products and services*. Fictional content created for the academic Website Project.

### Image Sources

Image sources should be added to this section after confirming the original websites or creators from which the images were obtained. Each image should be referenced according to the institution's required referencing style.

---

## 23. Academic Project Disclaimer

Rea's Bakery is a fictional organisation created specifically for this academic website project.

The addresses, telephone number, email address, product prices, locations and organisation history presented in the website are fictional and are intended for demonstration and educational purposes only.

The forms demonstrate client-side validation and email preparation. They are not connected to a live bakery database or server-side email processing system.

---

## 24. Project Completion Status

The six website pages have been developed and tested locally.

The main HTML, CSS and JavaScript features have been implemented. Responsive design, navigation, product search, category filters, image lightbox and form functionality have also been tested.

The remaining steps are to:

- Confirm the final screenshots.
- Update the sitemap and robots file with the published website URL.
- Upload the complete project to GitHub.
- Complete the final README review.
- Deploy the website using a suitable hosting platform.
