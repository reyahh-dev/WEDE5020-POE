# Rea's Bakery Website

## Student Information

**Student Name:** Reabetswe Sepeng  
**Student Number:** ST10514318 
**Subject:** Web Development
**Subject Code:** WEDE5020 
**Group:** Group 3  
**Project:** Website Project - Part 2

---

## 1. Project Overview

Rea's Bakery is a fictional local bakery created for the Website Project. The bakery provides freshly baked bread, pastries, cupcakes, cakes and customised celebration cakes.

The purpose of this project is to design and develop a functional, informative and visually appealing website for Rea's Bakery. The website will provide customers with information about the bakery, its products, locations and services while allowing customers to submit enquiries.

The website is designed to provide a simple and user-friendly experience for customers accessing the website from desktop, tablet and mobile devices.

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

## 4. Key Features and Functionality

The website contains six main pages.

### Home

The homepage introduces Rea's Bakery and displays an introduction, popular products and calls to action. The popular product cards are clickable and direct users to the Products page.

### About Us

The About Us page provides information about the bakery's history, mission, vision and values.

### Products

The Products page displays the bakery's available products, including:

- Bread.
- Pastries.
- Cakes.
- Cupcakes.

### Services

The Services page provides information about:

- Custom Cakes.
- Wedding Cakes.
- Event Catering.
- Bulk Orders.
- Special Occasion Orders.

### Enquiry

The Enquiry page contains a form allowing customers to submit enquiries about products, customised cakes, wedding cakes, catering and bulk orders.

### Contact

The Contact page provides:

- Two bakery locations.
- Telephone information.
- Email information.
- Opening hours.
- A link to the enquiry page.

---

## 5. Website Technologies

The website will be developed using:

- HTML5
- CSS3
- JavaScript

HTML will be used to create the structure and content of the website.

CSS will be used to control the appearance, layout, colours, typography and responsive design.

JavaScript will be used to add interactive functionality to the website.

Git and GitHub will be used for version control and project submission.

GitHub Pages may be used to host the completed static website.

---

## 6. Sitemap

```text
                         REA'S BAKERY
                              |
       +----------+-----------+-----------+----------+----------+
       |          |           |           |          |          |
      HOME      ABOUT      PRODUCTS    SERVICES   ENQUIRY    CONTACT
                  |           |           |                     |
          +-------+-----+   +-+--+--+--+  +-----+          +----+----+
          |       |     |   |    |  |  |  |     |          |         |
        Story  Mission Vision Bread Pastries Cakes Cupcakes Pretoria Sunnyside
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
├── README.md
│
├── _css/
│   └── style.css
│
├── _js/
│   └── script.js
│
└── _images/
    ├── Logo.jpg
    ├── White Bread.jpeg
    ├── Brown Bread.jpg
    ├── Seeded Loaf.jpeg
    ├── Croissants.jpg
    ├── Cinnamon Rolls.jpg
    ├── Chocolate Muffins.jpg
    ├── Fruit Danishes.jpg
    ├── Chocolate Cake.jpg
    ├── Vanilla Celebration Cake.jpeg
    ├── Red Velvet Cake.jpeg
    ├── Custom Celebration Cake.jpg
    ├── Vanilla Cupcakes.jpeg
    ├── Chocolate Cupcakes.jpg
    └── Red Velvet Cupcakes.jpg
```

---

## 8. Design Approach

The website will use a warm and welcoming bakery-inspired design.

### Colour Scheme

The Part 2 design uses a cream, navy blue, black and gold colour scheme:

- Cream - main background and neutral areas.
- Navy blue - headings, navigation and buttons.
- Black - main body text.
- Gold - borders, highlights and decorative accents.
- White - product cards, forms and content areas.

The colour scheme was updated during Part 2 to create a consistent visual identity around the Rea's Bakery logo.

### Typography

Aptos will be used as the primary font because it is clear and readable.

The typography hierarchy will include:

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

## External CSS Stylesheet

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

## CSS Selectors

Different CSS selectors are used throughout the stylesheet, including:

- Element selectors such as `body`, `h1`, `p` and `img`.
- Class selectors such as `.product-card`, `.service-card` and `.about-section`.
- Pseudo-class selectors such as `:hover`, `:focus` and `:active`.
- Media queries for responsive styling.

## Desktop Layout

The desktop version uses CSS Grid and Flexbox to organise content.

The Home page displays popular products in a four-column layout.

The Products page displays products using structured product cards.

The Services page displays services in a grid layout.

The About Us page separates each major section using spacing and gold borders.

The Contact page uses separate location cards.

## Interactive Styling

Interactive CSS states were added to improve the user experience.

### Hover

Hover effects are applied to navigation links, buttons, product cards, service cards, value cards and Home page product cards.

### Focus

Focus styling is applied to links, buttons and form controls to make keyboard navigation more visible.

### Active

Active styling is included for interactive links and buttons.

## Responsive Design

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

## Responsive Images

Images are made responsive using CSS:

```css
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```

Product images also use `object-fit: cover` to maintain consistent image dimensions within product cards.

## Part 2 Testing

The website was tested at desktop, tablet and mobile screen sizes.

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

Screenshots of desktop, tablet and mobile testing should be added as evidence.

## Part 1 Feedback and Changes

The feedback received for Part 1 was:

> "Create a logo instead of a phrase being a hyperlink."

The website was updated by creating and adding a Rea's Bakery logo. The logo is displayed in the website header and links to the Home page.

## Part 2 Improvements

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

## 9. Content Research and Sourcing

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

Images used in the completed website will be sourced from appropriate public-domain, Creative Commons or royalty-free resources where applicable. Image sources will be documented in the project's reference list.

Any external information used during development will be referenced using the institution's required referencing style.

---

## 10. Technical Requirements

The website will require:

- A modern web browser.
- HTML5 support.
- CSS3 support.
- JavaScript support.
- A code editor such as Visual Studio Code.
- Git for version control.
- A GitHub repository.

The website will be tested using different browsers to identify compatibility problems.

---

## 11. Timeline and Milestones

| Week | Activity | Status |
|---|---|---|
| Week 1 | Organisation research and project proposal | Completed |
| Week 2 | Content research and sitemap | In Progress |
| Week 3 | Initial HTML development | Planned |
| Week 4 | CSS styling and layout | Planned |
| Week 5 | JavaScript functionality | Planned |
| Week 6 | Testing and debugging | Planned |
| Week 7 | Documentation and final preparation | Planned |

The exact dates will be adjusted according to the lecturer's official submission schedule.

---

## 12. Budget

The estimated budget for the website project is:

| Item | Estimated Cost |
|---|---:|
| Domain registration | R150 - R300 per year |
| Basic hosting | R500 - R1,500 per year |
| Images/graphics | R0 - R500 |
| Maintenance | R500 - R1,000 per year |
| Development | Academic project |
| **Estimated Total** | **R1,150 - R3,300** |

The final costs may vary depending on the hosting provider, domain availability and resources selected.

---

## 13. Part 1 Details

Part 1 focuses on planning and establishing the initial structure of the website.

The following components have been completed or planned:

- Website project proposal.
- Organisation selection.
- Content research.
- Content sourcing plan.
- Sitemap.
- Folder structure.
- Initial HTML pages.
- GitHub repository planning.
- README documentation.

Future parts of the project will expand the website with styling, JavaScript functionality, testing and additional improvements.

---

## 14. Changelog

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

## 15. References

### Web Development

Mozilla Developer Network (MDN). 2026. *HTML forms and buttons*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms (Accessed: 14 August 2026).

Mozilla Developer Network (MDN). 2026. *HTML: A good basis for accessibility*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML (Accessed: 14 August 2026).

Mozilla Developer Network (MDN). 2026. *Semantic HTML*. Available at: https://developer.mozilla.org/en-US/curriculum/core/semantic-html/ (Accessed: 14 August 2026).

GitHub. 2026. *What is GitHub Pages?* Available at: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (Accessed: 14 August 2026).

### Organisation Content

Rea's Bakery. 2026. *Organisation information, mission, vision, products and services*. Fictional content created for the academic Website Project.

### Image Sources

Image sources will be added to this section after the images have been selected and downloaded for the website. Each image will be referenced according to the institution's required referencing style.

---

## 16. Academic Project Disclaimer

Rea's Bakery is a fictional organisation created specifically for this academic website project.

The addresses, telephone number, email address, product prices, locations and organisation history presented in the website are fictional and are intended for demonstration and educational purposes only.
