import React from 'react'
import axios from 'axios'


class TypeC extends React.Component {
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
        const TypeC = this.state.data.filter((item)=> item.type === 'typeC')
        const  countTypeC = TypeC.length
        return(
            <div className= "app">
                <h3> TypeC Count {countTypeC} </h3>
                <div className= 'container'>
                    { TypeC.map(item =>(
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

export default TypeC
