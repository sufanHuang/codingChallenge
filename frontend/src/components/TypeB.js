import React from 'react'
import axios from 'axios'


class TypeB extends React.Component {
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
        const TypeB = this.state.data.filter((item)=> item.type === 'typeB')
        const  countTypeB = TypeB.length
        return(
            <div className= "app">
                <h3> TypeB Count {countTypeB} </h3>
                <div className= 'container'>
                    { TypeB.map(item =>(
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

export default TypeB
