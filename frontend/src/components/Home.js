import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import ShowTypes from './ShowTypes'


class Home extends React.Component {
    state = {
        data: [],
        currentlySelectedType: ''
    }

    componentDidMount (){
        this.getData()

    }
    getData = ()=>{
        axios.get('/elements.json')
            .then(res=>{
                let data = res.data
                this.setState({data})
            })
    }

    handleClick = (currentItem)=> {
        let currentlySelectedType = currentItem.type
        this.setState({currentlySelectedType})
    }

render(){
    let { data, currentlySelectedType } = this.state
    let shuffledData = _.shuffle(data)
    return(
        <div className= "app">
            <ShowTypes data ={data}/>

            <div className= 'container'>
                { shuffledData.map(item =>(
                    <div key={item.id} className={`item ${ currentlySelectedType===(item.type)? 'type-selected' : ''}`} onClick={() =>this.handleClick(item)}>
                        <h5>{ item.type }</h5>
                        <h6>{ item.id }</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}


}

export default Home

