import { useState, useId } from "react"

export function Filters ({ onChange }) {
    const [minPrice, setPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChange = ( event )=> {
        setPrice(event.target.value)
    }

    return(
        <section style={{ display: "flex", alignItems:"center", justifyContent:"space-between", gap: '2px'}}>

            <div style={{ display:"flex", gap:"0.5rem"}} >
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input type="range"
                       id="price"
                       min={minPriceFilterId}
                       max="10000"
                       onChange={handleChange} 
                />
                <span>{minPrice}</span>
            </div>

            <div style={{ display:"flex", gap:"0.5rem"}}>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId}>
                    <option value="all">todas</option>
                    <option value="laptops">Notebooks</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>

        </section>
    )
}