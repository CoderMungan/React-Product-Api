import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import LinkNav from './LinkNav'



export default function ApiFetch() {

    const [data, setData] = useState([])

    useEffect(() => {
        const ApiFetchGet = async () => {
            const request = await fetch("https://fakestoreapi.com/products")
            const jsonRequest = await request.json()
            setData(jsonRequest)
        }
        ApiFetchGet();
    }, [])



    return (


        <>

            <div className="container mb-4">
                <LinkNav veri={data} setveri={setData} />
            </div>

            <div className="container">
                <div className="row">
                        {data.map((veri) => {
                            return <Cards key={veri.id}
                                data = {data}
                                id={veri.id}
                                title={veri.title}
                                description={veri.description}
                                img={veri.image}
                                setlemeYap={setData}
                            />
                        })}
                </div>
            </div>



        </>
    )
}
