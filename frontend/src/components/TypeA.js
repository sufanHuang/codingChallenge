import React from 'react'
import axios from 'axios'


class TypeA extends React.Component {
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
        const TypeA = this.state.data.filter((item)=> item.type === 'typeA')
        const  countTypeA = TypeA.length
        return(
            <div className= "app">
                <h3> TypeA Count {countTypeA} </h3>
                <div className= 'container'>
                    { TypeA.map(item =>(
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

export default TypeA
