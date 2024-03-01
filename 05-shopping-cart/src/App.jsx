import products from "./mocks/products.json"

function App() {

  const listProducts = products.products
  console.log(listProducts)

  return (
    <>
    <header>
      <h1>filter is here</h1>
    </header>
    <main>
    {listProducts ?  listProducts.map((product) => {
      return(
        <article key={product.id}>
          <img src={product.image} alt="Product image" />
          <div>
            <title>{product.title}</title>
            <span>{product.price}</span>
          </div>
          <button>Shopping list</button>
        </article>
      )}) : <h1>404</h1>}
    </main>
    </>
  )
}

export default App
