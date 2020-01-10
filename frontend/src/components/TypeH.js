import React from 'react'
import axios from 'axios'


class TypeH extends React.Component {
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
        const TypeH = this.state.data.filter((item)=> item.type === 'typeH')
        const  countTypeH = TypeH.length
        return(
            <div className= "app">
                <h3> TypeH Count {countTypeH} </h3>
                <div className= 'container'>
                    { TypeH.map(item =>(
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

export default TypeH
