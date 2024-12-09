export function themeScript() {
  return `
    (function() {
      function getTheme() {
        if (typeof window !== 'undefined') {
          const stored = window.localStorage.getItem('vitality-theme');
          if (stored) return stored;
          
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          return prefersDark ? 'dark' : 'light';
        }
        return 'light';
      }

      const theme = getTheme();
      document.documentElement.classList.add(theme);
      document.documentElement.style.colorScheme = theme;
    })()
  `;
} 