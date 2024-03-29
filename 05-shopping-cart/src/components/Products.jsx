/* eslint-disable react/prop-types */
import './Products.css'
import { AddToCartIcon } from './Icons.jsx'


export function Products ({ products }) {

  return (
  <main className='products'>
    <ul>
        {products.map(product => {
            return(
                <li key={product.id}>
                    <img src={product.thumbnail} alt={product.title} />
                    <div>
                        <strong>{product.title}</strong>
                    </div>
                    <div>
                        <button>
                            <AddToCartIcon />
                        </button>
                    </div>
                </li>
            )
        })}
    </ul>
  </main>
  )
}