# Markly Storefront

Responsive React + JavaScript implementation of the supplied Markly Figma/PDF design.

## Run

```bash
npm install
npm run dev
```

## Structure

```text
src/
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   ├── Container.jsx
│   │   ├── Container.css
│   │   └── Reveal.jsx
│   └── layout/
│       ├── Navbar.jsx
│       ├── Navbar.css
│       ├── Footer.jsx
│       └── Footer.css
├── sections/
│   ├── HeroSection.jsx
│   ├── HeroSection.css
│   ├── SustainabilitySection.jsx
│   ├── SustainabilitySection.css
│   ├── AdventureSection.jsx
│   ├── AdventureSection.css
│   ├── FeatureBannerSection.jsx
│   ├── FeatureBannerSection.css
│   ├── WhyChooseSection.jsx
│   ├── WhyChooseSection.css
│   ├── CollectionsSection.jsx
│   ├── CollectionsSection.css
│   ├── BlogSection.jsx
│   ├── BlogSection.css
│   ├── NewsletterSection.jsx
│   └── NewsletterSection.css
├── styles/
│   └── global.css
├── App.jsx
├── index.css
└── main.jsx
```

## Styling approach

Each visual component owns its CSS file. `global.css` contains only design tokens, resets, typography defaults, shared utility classes, and reduced-motion handling. Desktop styling remains aligned with the supplied desktop reference, while mobile breakpoints are tuned independently to the mobile PDF layout instead of simply shrinking the desktop composition.

## Notes

- Visible page copy is hardcoded in the React components.
- Product imagery uses the supplied project assets.
- Framer Motion is used for reveal, hover, image, and collection transitions.
- Mobile navigation is accessible and locks page scrolling while open.
- `Read More` is a button until a real article route exists, preventing unwanted jumps to the top of the page.
