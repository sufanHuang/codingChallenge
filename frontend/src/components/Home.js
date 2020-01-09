import React from 'react'
import axios from 'axios'


class Home extends React.Component {
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
    return(
        <div className= "app">
            <h3> All </h3>
            <div className= 'items'>
                { this.state.data.map(item =>(
                    <div key={item.id} className='item'>
                        <h5>{ item.type }</h5>
                        <h6>{ item.description }</h6>
                        <h6>{ item.company}</h6>
                    </div>
                ))}
            </div>
        </div>
    )

}


}

export default Home
