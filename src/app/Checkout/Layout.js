export const metadata = {
  title: 'Vitality',
  description: 'Checkout page for Vitality',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon as PNG */}
        <link rel="icon" href="images/favicon.png" type="image/png" />
        {/* Optionally, you can add an Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" /> {/* Mobile browser theme color */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
