import React from 'react'
import axios from 'axios'


class TypeD extends React.Component {
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
        const TypeD = this.state.data.filter((item)=> item.type === 'typeD')
        const  countTypeD = TypeD.length
        return(
            <div className= "app">
                <h3> TypeD Count {countTypeD} </h3>
                <div className= 'container'>
                    { TypeD.map(item =>(
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

export default TypeD
