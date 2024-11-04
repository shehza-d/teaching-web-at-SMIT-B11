function App() {
  const products = [
    { title: "Cabbage", id: 1, isFruit: false },
    { title: "Garlic", id: 2, isFruit: false },
    { title: "Apple", id: 3, isFruit: true },
    { title: "orange", id: 4, isFruit: true },
    { title: "carrot", id: 5, isFruit: false },
    { title: "mango", id: 6, isFruit: true },
    { title: "watermelon", id: 7, isFruit: true },
    { title: "tomato", id: 8 },
    { title: "potato", id: 9, isFruit: false },
    { title: "spinach", id: 10, isFruit: false },
  ];

  const btnClickHandler = () => {
    console.log("hello world");
  };

  return (
    <>
      <ul>
        <button onClick={btnClickHandler}>hello </button>

        {products.map((product) => {
          return (
            <li
              key={product.id}
              style={{ color: product.isFruit ? "orange" : "green" }}
            >
              {product.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;


