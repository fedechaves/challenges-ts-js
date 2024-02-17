import { useState, useEffect } from "react"

export const useCatImage = ({ fact }) => {
    const [url, setUrl] = useState('')

    useEffect(()=>{
        if(!fact) return
    
        let firstWord = fact.split(' ')[0]
         
        if(firstWord){
          fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
          .then(data => data.json())
          .then(url => setUrl(url._id))  
          .catch(err => console.error(err))
        }
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [fact])
    
    return { url }

}