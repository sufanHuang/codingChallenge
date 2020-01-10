import React from 'react'
import axios from 'axios'


class TypeJ extends React.Component {
    state = {
        data: []
    }

    componentDidMount (){
        axios.get('express_backend')
            .then(res=>{
                let data = res.data
                this.setState({data})
            })
    }

    render(){
        const TypeJ = this.state.data.filter((item)=> item.type === 'typeJ')
        const  countTypeJ = TypeJ.length
        return(
            <div className= "app">
                <h3> TypeJ Count {countTypeJ} </h3>
                <div className= 'container'>
                    { TypeJ.map(item =>(
                        <div key={item.id} className='item'>
                            <h5>{ item.type }</h5>
                            <h6>{ item.id }</h6>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}

export default TypeJ
