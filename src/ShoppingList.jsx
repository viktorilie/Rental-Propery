import ShoppingItem from "./ShppingItem";

function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <ShoppingItem
          key={i.id}
          item={i.item}
          quantity={i.quantity}
          completed={i.completed}
        />
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
