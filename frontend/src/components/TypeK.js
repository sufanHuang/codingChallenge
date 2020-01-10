import React from 'react'
import axios from 'axios'


class TypeK extends React.Component {
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
        const TypeK = this.state.data.filter((item)=> item.type === 'typeK')
        const  countTypeK = TypeK.length
        return(
            <div className= "app">
                <h3> TypeK Count {countTypeK} </h3>
                <div className= 'container'>
                    { TypeK.map(item =>(
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

export default TypeK
