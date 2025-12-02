# Portfolio Enhancement Usage Guide

## 🎨 How to Use the New Features

### Dark Mode Toggle
The dark mode toggle is located in the top navigation bar (sun/moon icon).

**To customize colors:**
```css
/* Edit src/index.css */
[data-theme="dark"] {
  --bg-primary: #0F172A;      /* Change main background */
  --text-primary: #F7F7F7;    /* Change text color */
  /* Add more customizations */
}
```

### CSS Custom Properties
All design tokens are centralized in `src/index.css`.

**Usage in your components:**
```css
.myComponent {
  color: var(--text-primary);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
}
```

### Lazy Loading Images
Use the `LazyImage` component instead of regular `<img>` tags:

```jsx
import LazyImage from '../components/LazyImage';

<LazyImage
  src="/path/to/image.jpg"
  alt="Description"
  aspectRatio="16/9"
  className="myCustomClass"
/>
```

### SEO Meta Tags
Add SEO to any page:

```jsx
import SEO from '../components/SEO';

function MyPage() {
  return (
    <>
      <SEO 
        title="Page Title"
        description="Page description for search engines"
        keywords="keyword1, keyword2, keyword3"
      />
      {/* Your page content */}
    </>
  );
}
```

### Breadcrumb Navigation
Add breadcrumbs to any page:

```jsx
import Breadcrumb from '../components/Breadcrumb';

<Breadcrumb items={[
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Current Page', path: '#' }
]} />
```

### Loading Skeletons
Show loading states while content is fetching:

```jsx
import { Skeleton, SkeletonCard, SkeletonText } from '../components/Skeleton';

// Single skeleton
<Skeleton width="200px" height="20px" />

// Card skeleton (for project cards)
<SkeletonCard />

// Text skeleton with multiple lines
<SkeletonText lines={3} />
```

### Form Validation
The Contact form includes validation. To add validation to other forms:

```jsx
const [formErrors, setFormErrors] = useState({});
const [touched, setTouched] = useState({});

const validateField = (name, value) => {
  // Add your validation logic
  if (!value.trim()) return 'This field is required';
  return '';
};

const handleBlur = (e) => {
  const { name, value } = e.target;
  setTouched({ ...touched, [name]: true });
  const error = validateField(name, value);
  setFormErrors({ ...formErrors, [name]: error });
};

<input
  name="fieldName"
  onBlur={handleBlur}
  onChange={handleChange}
  className={formErrors.fieldName && touched.fieldName ? styles.inputError : ''}
  aria-invalid={formErrors.fieldName && touched.fieldName ? 'true' : 'false'}
/>
{formErrors.fieldName && touched.fieldName && (
  <span className={styles.errorText}>{formErrors.fieldName}</span>
)}
```

### Back to Top Button
Already included in `Layout.jsx` - automatically appears after scrolling 300px.

To customize:
```jsx
// Edit src/components/BackToTop.jsx
const toggleVisibility = () => {
  if (window.pageYOffset > 300) {  // Change this value
    setIsVisible(true);
  }
};
```

### Mobile Menu
Automatically appears on screens below 768px. To customize breakpoint:

```css
/* Edit src/components/Navigation.module.css */
@media (max-width: 768px) {  /* Change this value */
  .navLinks {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}
```

### Theme Context
Access theme anywhere in your app:

```jsx
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, isDark } = useTheme();
  
  return (
    <div>
      Current theme: {theme}
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
```

---

## 🎯 Design Token Reference

### Colors
```css
--color-primary: #85918B;
--color-secondary: #bfa97a;
--color-accent: #3B82F6;
--color-success: #22C55E;
--color-error: #EF4444;
--color-warning: #F59E0B;
```

### Typography
```css
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 2rem;       /* 32px */
--text-4xl: 2.5rem;     /* 40px */
--text-5xl: 3rem;       /* 48px */
```

### Spacing
```css
--space-1: 0.25rem;     /* 4px */
--space-2: 0.5rem;      /* 8px */
--space-3: 0.75rem;     /* 12px */
--space-4: 1rem;        /* 16px */
--space-6: 1.5rem;      /* 24px */
--space-8: 2rem;        /* 32px */
--space-12: 3rem;       /* 48px */
--space-16: 4rem;       /* 64px */
```

### Shadows
```css
--shadow-sm: 0 2px 8px rgba(0,0,0,0.04);
--shadow-md: 0 4px 16px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 32px rgba(0,0,0,0.12);
--shadow-xl: 0 20px 40px rgba(0,0,0,0.16);
```

### Border Radius
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 16px;
--radius-xl: 32px;
--radius-full: 9999px;
```

### Transitions
```css
--transition-fast: 150ms;
--transition-base: 200ms;
--transition-slow: 300ms;
--transition-slower: 500ms;
```

---

## 🔧 Customization Tips

### Changing Primary Color
1. Edit `src/index.css`:
```css
:root {
  --color-primary: #YOUR_COLOR;
}

[data-theme="dark"] {
  --color-primary: #YOUR_DARK_COLOR;
}
```

### Adding New Routes with SEO
```jsx
// In App.jsx
import NewPage from './pages/NewPage';

<Route path="/new-page" element={
  <RouteWrapper>
    <NewPage />
  </RouteWrapper>
} />

// In NewPage.jsx
import SEO from '../components/SEO';

function NewPage() {
  return (
    <>
      <SEO title="New Page" description="..." />
      {/* Content */}
    </>
  );
}
```

### Customizing the 404 Page
Edit `src/pages/NotFound.jsx` to change text, illustration, or suggestions.

### Adding More Resume Formats
```jsx
// In About.jsx
<div style={{ display: 'flex', gap: 'var(--space-4)' }}>
  <a href="/assets/resume.pdf" download className={styles.resumeButton}>
    <FaDownload /> PDF
  </a>
  <a href="/assets/resume.docx" download className={styles.resumeButton}>
    <FaDownload /> DOCX
  </a>
</div>
```

---

## ♿ Accessibility Best Practices

When adding new content:

1. **Always add alt text to images**
   ```jsx
   <img src="..." alt="Descriptive text" />
   ```

2. **Use semantic HTML**
   ```jsx
   <header>, <nav>, <main>, <section>, <article>, <footer>
   ```

3. **Add ARIA labels to icon buttons**
   ```jsx
   <button aria-label="Close menu" title="Close menu">
     <CloseIcon />
   </button>
   ```

4. **Ensure proper heading hierarchy**
   ```jsx
   <h1> → <h2> → <h3> (don't skip levels)
   ```

5. **Make interactive elements keyboard accessible**
   ```jsx
   <div 
     role="button" 
     tabIndex={0} 
     onKeyPress={handleKeyPress}
     onClick={handleClick}
   >
   ```

---

## 📱 Mobile Testing Checklist

- [ ] Navigation menu opens/closes smoothly
- [ ] Touch targets are at least 44x44px
- [ ] Text is readable without zooming
- [ ] Forms work with mobile keyboards
- [ ] Images load properly
- [ ] Animations perform well
- [ ] No horizontal scrolling
- [ ] Dark mode toggle works

---

## 🐛 Common Issues & Solutions

### Issue: Dark mode colors not applying
**Solution**: Make sure you're using CSS custom properties (var(--color-name)) instead of hardcoded colors.

### Issue: Mobile menu not showing
**Solution**: Check that Navigation.jsx imports MobileMenu and ThemeToggle properly.

### Issue: Images not lazy loading
**Solution**: Ensure IntersectionObserver is supported (it is in all modern browsers).

### Issue: Form validation not working
**Solution**: Make sure field names match the validation function keys.

### Issue: SEO meta tags not appearing
**Solution**: Check that HelmetProvider wraps your app in main.jsx.

---

## 📚 Further Reading

- [React Helmet Async Docs](https://github.com/staylor/react-helmet-async)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

**Need help?** Check the code comments in each component for more details!

