import { useState } from 'react';

function App() {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(['eu', 'voce', 'ele']);

  function addToList() {
    setTimeout(() => {
      setList([...list, newItem]);
    }, 500);
  }

  function removeFromList() {
    setTimeout(() => {
      setList(state => state.filter(item => item !== item));
    }, 500);
  }

  return (
    <div>
      <input value={newItem} placeholder='Novo item' onChange={e => setNewItem(e.target.value)} />
      <button onClick={addToList}>add</button>
      <ul>
        {list.map(item => (
          <li key={item}>{item}
            <button onClick={removeFromList}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
