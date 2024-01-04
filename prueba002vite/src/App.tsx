import { useState } from "react";
import "./App.css";

type ItemId = `${string}-${string}-${string}-${string}-${string}`
interface Item {
  id:  ItemId
  timestamp: number
  text: string
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
  //trampa TSX
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{

  //e.target.value => para escuchar el onchange de un inputt
  event.preventDefault ()

//const { elements } = event.currentTarget.elements
const elements = event.currentTarget.elements
const input = elements.namedItem('item')
const isInput = input instanceof HTMLInputElement
if (!isInput || input == null) return



/*const getControl = control => {
  const isControl = control instanceof HTMLElement
  if (!isControl || control == null) return
  const { name, value } = control
  return { name, value }
}*/

const newItem: Item = {
  id: crypto.randomUUID(),
  text: input.value,
  timestamp: Date.now()
}

SetItems((prevItems) => {
 return [...prevItems, newItem]
})
input.value = ''
}

const createHandleRemoveItem =  (id: ItemId)=> () => {
  // SetItems((prevItems) => {
  //   return prevItems.filter((currentItem => currentItem.id !== Item.id))
  //   })
  removeItem(id)
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


          items.length === 0 ? (
          <p>
            <strong>No hay elementos en la lista</strong>
          </p>
          ) :(
           <ul>{
          items.map(item => {
            return(
              <li  key={item.id}>
              {item.text}
              <button onClick={createHandleRemoveItem (item.id)}>

              </button>
              </li>
            )
          })

         }</ul>


      </section>
    </main>
  );
}

export default App;
