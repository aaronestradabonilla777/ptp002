import "./App.css";

function App() {
  return (
    <main>
      <aside>
        <h1>Prueba Tecnica</h1>
        <h2>Anadir y eliminar elemento de una lista</h2>
        <form>
          <label>
            Elemento a introducir:
            <input name="item" required type="text" placeholder="Videojuegos" />
          </label>
          <button> Anadir Elemento a la lista</button>
        </form>
      </aside>

      <section>
        <h2>Lista de Elementos</h2>
        <ul>
          <li>Videojuegos🎮</li>
          <li>libros 📕</li>
          <li>Series📺</li>
          <li>Peliculas🎥</li>
        </ul>
      </section>
    </main>
  );
}

export default App;
