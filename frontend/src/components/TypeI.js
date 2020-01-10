import React from 'react'
import axios from 'axios'


class TypeI extends React.Component {
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
        const TypeI = this.state.data.filter((item)=> item.type === 'typeI')
        const  countTypeI = TypeI.length
        return(
            <div className= "app">
                <h3> TypeI Count {countTypeI} </h3>
                <div className= 'container'>
                    { TypeI.map(item =>(
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

export default TypeI