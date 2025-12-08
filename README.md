# Trees By Tony - Landing Page

A mobile-optimized landing page for Top Tier Tree Care service business in Lodi, CA.

## Files Created

- `index.html` - Main HTML structure
- `styles.css` - Mobile-first responsive CSS styling
- `script.js` - JavaScript for modal popup and form submission

## Images

All required images are now added:

1. **toptier.png** - Hero image with tree service professional (✅ Added!)
2. **logo.png** - Top Tier Tree Care company logo for About section and favicon (✅ Added!)
3. **Service Icons:**
   - **trimming.png** - Tree Trimming/Pruning icon (✅ Added!)
   - **deforestation.png** - Tree Removal & Lot/Land Clearing icon (✅ Added!)
   - **stump.png** - Stump Grinding icon (✅ Added!)
   - **tree.png** - Tree Planting icon (✅ Added!)
   - **emergency.png** - 24/7 Emergency Relief icon (✅ Added!)

## Features

### Mobile Optimized
- Fully responsive design that works on all devices
- Mobile-first approach with breakpoints at 768px and 1024px
- Touch-friendly buttons and form elements

### Popup Modal
- "Get FREE Estimate" button opens a modal popup
- Form includes: Name, Phone, Email, and Service Selection
- Close button (X) and click-outside-to-close functionality
- Escape key to close

### Form Submission
- Form data is sent to the webhook: `https://hook.us2.make.com/stouoa5csd7vv83sfk28o98llgdwukki`
- Field names: `name`, `phone`, `email`, `select`
- Client-side validation for all fields
- Phone number auto-formatting
- Success/error messages

### Sections Included
1. **Hero Section** - Main call-to-action with service image
2. **Testimonials** - Two Google reviews from satisfied customers
3. **Services** - Six tree services offered
4. **Call Banner** - Emergency contact number
5. **About** - Company information and owner bio
6. **Footer CTA** - Final call-to-action

## How to Use

1. Add the three required images to the project folder
2. Open `index.html` in a web browser
3. Test the "Get FREE Estimate" button to open the popup
4. Test form submission (it will send to the webhook)
5. Test on mobile devices or use browser dev tools to check responsiveness

## Customization

### Colors
The main green color used throughout is `#5a8f3c`. You can change this in `styles.css` by searching for this color code.

### Phone Number
The phone number (209) 371-9419 appears in multiple places. Update as needed in `index.html`.

### Service Options
To modify the dropdown options in the form, edit the `<select>` element in `index.html` around line 127.

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Testing the Form

The form sends data to your Make.com webhook. You can test it by:
1. Filling out all fields
2. Clicking Submit
3. Checking your Make.com scenario to verify the data was received

## Notes

- No external dependencies required (no jQuery, Bootstrap, etc.)
- Pure vanilla JavaScript for optimal performance
- Semantic HTML5 structure
- Accessible form elements with proper labels and placeholders
