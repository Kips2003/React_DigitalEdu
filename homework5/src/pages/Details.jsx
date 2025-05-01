import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { fetchDetails } from '../api/FetchDetails';


const Details = () => {

    const [data, setdata] = useState([])
    const [error, seterror] = useState("")
    const [isLoading, setisLoading] = useState(false)


    const id = useParams().itemId;

    useEffect(() => {
        fetchDetails(id).then((data) => setdata(data)).catch((error) => seterror(error.message)).finally(() => setisLoading(false))
    }, [])

    console.log(data)
    console.log(id)
  return (
    <div>Details</div>
  )
}

export default Details