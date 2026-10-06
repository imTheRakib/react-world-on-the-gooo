import { Suspense } from 'react'
import Countries from './components/Countries/Countries'

// const testPromise = fetch("https://openapi.programming-hero.com/api/all").then(res => res.json())

const fetchCountries = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all")
  const data = await res.json()
  return data
}

function App() {

  const countriesPromise = fetchCountries()

  return (
    <>
      <h1 className='text-center text-4xl'>React World On The Go......</h1>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
