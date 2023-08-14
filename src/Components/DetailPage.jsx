import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';


export default function DetailPage() {

  const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {

    const makeAPIRequest = async () => {

      const request = await fetch(`https://fakestoreapi.com/products/${id}`)
      const response = await request.json()

      console.log("detail page:", response)
      setData([response])

    }

    makeAPIRequest()
  }, [])


  return (
    <>


      {data.map(veri => {

        return <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={veri.image} />
          <Card.Body>
              <Card.Title>{veri.title}</Card.Title>
            <Card.Text>
              {veri.description}
            </Card.Text>
          </Card.Body>
        </Card>

      })}

    </>
  )
}
