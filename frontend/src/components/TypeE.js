import React from 'react'
import axios from 'axios'


class TypeE extends React.Component {
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
        const TypeE = this.state.data.filter((item)=> item.type === 'typeE')
        const  countTypeE = TypeE.length
        return(
            <div className= "app">
                <h3> TypeE Count {countTypeE} </h3>
                <div className= 'container'>
                    { TypeE.map(item =>(
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

export default TypeE
