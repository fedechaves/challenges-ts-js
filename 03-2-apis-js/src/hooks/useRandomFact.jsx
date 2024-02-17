import { useState, useEffect } from "react"
import { getRandomFact } from "../services/getFact"


export const useRandomFact = () => {
    const [fact, setFact] = useState('')

    const handleRandomFact = () => {
        getRandomFact().then(setFact)
    }

    useEffect(handleRandomFact, [])

    return { fact, handleRandomFact }
}