import React from 'react'
import axios from 'axios'


class TypeG extends React.Component {
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
        const TypeG = this.state.data.filter((item)=> item.type === 'typeG')
        const  countTypeG = TypeG.length
        return(
            <div className= "app">
                <h3> TypeG Count {countTypeG} </h3>
                <div className= 'container'>
                    { TypeG.map(item =>(
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

export default TypeG
