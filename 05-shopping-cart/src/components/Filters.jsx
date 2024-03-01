import { useState } from "react"

export function Filters () {
    const [minPrice, setPrice] = useState(0)

    const handleChange = ( event )=> {
        setPrice(event.target.value)
    }

    return(
        <section style={{ display: "flex", alignItems:"center", justifyContent:"space-between", gap: '2px'}}>

            <div style={{ display:"flex", gap:"0.5rem"}} >
                <label htmlFor="price">Precio</label>
                <input type="range"
                       id="price"
                       min="0"
                       max="10000"
                       onChange={handleChange} 
                />
                <span>{minPrice}</span>
            </div>

            <div style={{ display:"flex", gap:"0.5rem"}}>
                <label htmlFor="category">Category</label>
                <select id="category">
                    <option value="all">todas</option>
                    <option value="laptops">Notebooks</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>

        </section>
    )
}