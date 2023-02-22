import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Gests = () => {

  const [gests, setGests] = useState([])

  useEffect(() => {
    const fetchGests = async () =>{
      const {data} = await axios.get('/api/gests/')

      setGests(data)
    } 

    fetchGests()

  }, [])

  return (
    <div>
      {gests.map(gest =>(

        <div  key={gests._id}>
        <h2>{gest.name}</h2>
        <h2>{gest.surname}</h2>
        </div>
      ))}
    </div>
  )
}

export default Gests