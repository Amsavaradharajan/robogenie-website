# RoboGenie Website

A clean, outcome-focused website for RoboGenie, emphasizing engineering thinking, problem-solving, and independence over tools and instructions.

## Project Structure

```
robogenie-website/
├── index.html          # Main homepage
├── css/
│   └── styles.css      # All website styles
├── js/
│   └── script.js       # Lightbox and interactivity
├── assets/
│   ├── images/         # Gallery images (8 placeholders)
│   └── logo/           # RoboGenie logo (SVG/PNG)
├── CREDITS.md          # Image attributions
└── README.md           # This file
```

## Getting Started

### Opening the Website

1. Open `index.html` in any modern web browser
2. No build process or server required—this is a static HTML/CSS/JS website

### Viewing Locally

- **Double-click** `index.html` to open in your default browser
- Or use a local server:
  - Python: `python -m http.server 8000`
  - Node.js: `npx http-server`
  - VS Code: Install "Live Server" extension and right-click `index.html` → "Open with Live Server"

## Editing Content

### Logo

1. Place your RoboGenie logo file in `assets/logo/`
2. Name it `robogenie-logo.svg` (SVG preferred) or `robogenie-logo.png`
3. Logo automatically appears in the header and links to top of page

### Contact Information

Edit contact details in `index.html` (search for "TODO"):

```html
<p><strong>Email:</strong> <a href="mailto:TODO@robogenie.com">TODO@robogenie.com</a></p>
<p><strong>Phone:</strong> <a href="tel:TODO">TODO</a></p>
```

Replace `TODO` placeholders with actual email, phone number, and social media links.

### Gallery Images

1. Add 8 images to `assets/images/` folder
2. Name them: `gallery-1.jpg` through `gallery-8.jpg`
3. Use natural lighting, hands-on learning scenes
4. Update `CREDITS.md` with proper attribution

**Image Requirements:**
- Format: JPG or PNG
- Recommended size: 800×600px or similar aspect ratio
- License: Must be openly licensed (Unsplash, Pexels, Pixabay, or RoboGenie-owned)

### Text Content

All content is in `index.html`. Key sections:

- **Hero headline:** Line 23
- **Why RoboGenie:** Lines 36-65
- **Before vs After:** Lines 70-97
- **Programs:** Lines 102-205
- **Differentiation statement:** Lines 250-257
- **Contact:** Lines 263-280

Simply edit the HTML text directly—no special tools needed.

### Styling

All styles are in `css/styles.css`. Key customization points:

- **Accent color:** Search for `#2c5f8d` (navy blue) and replace throughout
- **Font:** Line 13 defines the font stack
- **Spacing:** Adjust padding in section rules (Lines 38-40)

## Design Principles

- **White background** throughout for clean, professional look
- **Minimal styling** with subtle borders and shadows
- **Typography hierarchy** does the visual work
- **Outcomes emphasized** over tools and equipment
- **No VEX/iD Tech patterns** in layout or styling

## Browser Compatibility

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile responsive design included

## License & Credits

- Code: © 2025 RoboGenie
- Images: See `CREDITS.md` for attribution
- All gallery images must be openly licensed

## Need Help?

For questions about editing this website, contact your web developer or refer to basic HTML/CSS tutorials online.

---

**Last Updated:** December 12, 2025
