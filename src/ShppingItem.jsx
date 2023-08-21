function ShoppingItem(item, quantity, completed) {
  const styles = {
    color: completed ? "grey" : "red",
    textDecoration: completed ? "line-through" : "none",
  };
  return (
    <li style={styles}>
      {item}-{quantity}
    </li>
  );
}

// {
//   /* <li
//   key={i.id}
//   style={{
//     color: i.completed ? "grey" : "red",
//     textDecoration: i.completed ? "line-through" : "none",
//   }}>
//   {i.item} - {i.quantity}
// </li>; */
// }

export default ShoppingItem;
