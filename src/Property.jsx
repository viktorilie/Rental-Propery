function Property({ name, price, rating, id }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <h4>{rating}⭐️</h4>
    </div>
  );
}

export default Property;
