const URL_FACT = "https://catfact.ninja/fact"

export const getRandomFact = () => {
    return fetch(URL_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        return fact 
      })
  } 