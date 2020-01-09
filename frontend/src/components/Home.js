import React, from 'react'
import to from 'await-to-js'
import axios from 'axios'


let callServerData = async ()=> {
    let [error,result] = await to(axios.get('express_backend'))
    let data = result.data
    console.log(data)
    if (error) {
        console.log(error)
    }
        return data
}

let data = callServerData()
console.log(data)

function Home () {

    return(
        <div>
            <h3> All </h3>
            <div className= 'items'>
                {data.map(item =>(
                    <div key={item.id} className='item'>
                        <h3>{ item.type }</h3>
                        <p> { item.description }</p>
                        <h4>{ item.company }</h4>
                    </div>
                    ))}
            </div>


        </div>
    )
}

export default Home
