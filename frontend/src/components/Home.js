import React from 'react'
import axios from 'axios'
import _ from 'lodash'


class Home extends React.Component {
    state = {
        data: [],
        currentlySelectedType: ''
    }

    componentDidMount (){
        axios.get('express_backend')
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
    const  countAll = data.length

    return(
        <div className= "app">
            <h3> Total Count {countAll} </h3>
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

/*
    * onClick adds/removes item from state property currentlySelectedTypes
    * onClick should also force re-render of all items
    * Write your code below
    * */
