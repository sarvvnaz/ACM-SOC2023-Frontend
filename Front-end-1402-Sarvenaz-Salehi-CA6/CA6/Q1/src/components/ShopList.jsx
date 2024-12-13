import React, { useReducer, useState } from 'react';

function myReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
        const existingIndex = state.findIndex(item => item.name === action.payload.name);
        console.log(existingIndex);
        if (existingIndex !== -1) {
          const updatedItem = {
            ...state[existingIndex],
            price: parseFloat(parseFloat(state[existingIndex].price) + parseFloat(action.payload.price)),
            count: parseInt(parseInt(state[existingIndex].count) + parseInt(action.payload.count))
          };
          return [
            ...state.slice(0, existingIndex),
            updatedItem,
            ...state.slice(existingIndex + 1)
          ];
        } else {
          return [...state, action.payload];
        }
      default:
        return state;
    }
  


}

function ShopList() {
  const [items, dispatch] = useReducer(myReducer, []);
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [count, setcount] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = { name, price, count };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
    name('');
    price('');
    count('');
  }

  return (
    <>
    <p>I want..</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name' value={name} onChange={(event) => setname(event.target.value)} />
        <input type="text" placeholder='price' value={price} onChange={(event) => setprice(event.target.value)} />
        <input type="text" placeholder='count' value={count} onChange={(event) => setcount(event.target.value)} />
        <button type="submit">Add Item</button>
      </form>
      <div className="shopList">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}: price:{item.price}, count:{item.count}
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}


export default ShopList