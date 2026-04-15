import React, { useEffect, useState } from 'react'
import UserProfile from './components/UserProfile'
import { MyButton } from './components/MyButton'

const App = () => {
  const [hide, setHide] = useState(false)
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const json = await response.json()
        setData(json.slice(0, 5)) 
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const handleClick = () => {
    setHide(!hide)
  }

  const handleClickCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      {!hide ? <UserProfile /> : <h1>Walang laman...</h1>}

      <MyButton onClick={handleClick} />

      <button onClick={handleClickCount} style={{ padding: 20, fontSize: 16 }}>
        You pressed me {count} times
      </button>

      {data.length > 0 && (
        <div style={{ marginTop: 20, marginBottom: 100 }}>
          <h3>Fetched Data:</h3>

          {data.map((item) => (
            <div key={item.id} style={{ marginBottom: 10 }}>
              <p><strong>Title:</strong> {item.title}</p>
              <p>
                <strong>Body:</strong>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App