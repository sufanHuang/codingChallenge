import React from 'react'
import axios from 'axios'


class TypeF extends React.Component {
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
        const TypeF = this.state.data.filter((item)=> item.type === 'typeF')
        const  countTypeF = TypeF.length
        return(
            <div className= "app">
                <h3> TypeF Count {countTypeF} </h3>
                <div className= 'container'>
                    { TypeF.map(item =>(
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

export default TypeF
