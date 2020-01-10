import React from 'react'
import axios from 'axios'


class TypeL extends React.Component {
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
        const TypeL = this.state.data.filter((item)=> item.type === 'typeL')
        const  countTypeL = TypeL.length
        return(
            <div className= "app">
                <h3> TypeL Count {countTypeL} </h3>
                <div className= 'container'>
                    { TypeL.map(item =>(
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

export default TypeL
