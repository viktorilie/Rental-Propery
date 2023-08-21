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
