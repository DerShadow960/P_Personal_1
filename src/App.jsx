
export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-bold mb-4">
          Bienvenido a tu Proyecto 🚀
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Aquí empezarás a construir tu aplicación profesional con React + Tailwind.
        </p>

        <button
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-lg font-semibold shadow-lg"
          onClick={() => alert("¡Tu proyecto está listo para crecer!")}
        >
          ¡Haz Click Aquí!
        </button>
      </div>

    </main>
  );
}
