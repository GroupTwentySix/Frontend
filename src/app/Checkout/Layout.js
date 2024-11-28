export default function CheckoutLayout({ children }) {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700">Vitality</h1>
          <div className="relative">
            <button className="text-gray-600 hover:text-gray-800">🛒</button>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
