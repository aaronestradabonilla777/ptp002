import { useState } from "react";
import "./App.css";

interface Item { 
  id: `${string}-${string}-${string}-${string}-${string}`
}

const INITIAL_ITEMS =[ 
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Videojuegos🎮'
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Libros📚',
  }
]
function App() {
  const [items, SetItems] =  useState(INITIAL_ITEMS)
const.handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
  event.preventDefault ()

const { elements } = event.currentTarget.elements
const input = elements.namedItem('item')


}

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
         {
          items.map(item => {
            return(
              <li  key={item.id}>
              {item.text}
              </li>
            )
          })
         }

        </ul>
      </section>
    </main>
  );
}

export default App;
