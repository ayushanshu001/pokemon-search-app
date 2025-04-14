import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-light font-sans text-gray-800">
        <div className="min-h-screen flex flex-col">
          <header className="bg-primary text-white p-4 shadow-md">
            <h1 className="text-2xl font-bold text-center">Pokémon Search App</h1>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="bg-white text-center p-4 text-sm border-t">© 2025 Pokémon Search</footer>
        </div>
      </body>
    </html>
  );
}
