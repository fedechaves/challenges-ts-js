import { useState } from "react"
import { products as  initialProducts } from "./mocks/products.json"
import { Products } from "./components/Products"
import { Header } from "./components/Header"

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all', 
    minPrice: 0
  })

 const filterProducts = (products) => {
  return products.filter(product => {
    return (
      product.price >= filters.minPrice && 
      (
        filters.category === 'all' ||
        product.category === filters.category
      )
    )
  })
 }

 const filteredProducts =filterProducts(products)

  return (
    <>
      <h1>hola</h1>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts}/>
    </>
  )
}

export default App
