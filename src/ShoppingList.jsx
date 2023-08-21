function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <li
          style={{
            color: i.completed ? "grey" : "red",
            textDecoration: i.completed ? "line-through" : "none",
          }}>
          {i.item} - {i.quantity}
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;

// const data = [
//   { id: 1, item: "eggs", quantity: 12, completed: false },
//   { id: 2, item: "milk", quantity: 1, completed: true },
//   { id: 3, item: "chicken breast", quantity: 4, completed: false },
//   { id: 4, item: "carrots", quantity: 6, completed: true },
// ];
