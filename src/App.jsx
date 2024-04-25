import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useGetData from './Hooks/useGetData'
import Card from './Components/Card'

function App() {
  const { books } = useGetData(["books"])
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {books?.map(data => (
        <Card
          key={data.id}
          data={data}
        >
        <>
          <h2 className='font-semibold my-4 text-xl'>
            {data.name}
          </h2>
          <p className=' font-extralight my-2'>
            {data.description}
          </p>
          <span className=' text-xs font text-gray-400 '>
            {data.author}
          </span>
          <span className=' text-xs font text-gray-400 '>
            {data.numPages}
          </span>
          <span className=' text-xs font text-gray-400 '>
            {data.availability}
          </span>
        </>
        </Card>
      ))}
    </>
  )
}

export default App
