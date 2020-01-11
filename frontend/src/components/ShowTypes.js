import React from 'react'
import { Pie } from 'react-chartjs-2'
import _ from 'lodash'


function ShowTypes (props) {


    let getTypes = ()=>{
        let types = []
        let  data  = props.data
        data.forEach(item => {
            if(!types.includes(item.type)){
                types.push(item.type)
            }
        })
        return types
    }

    let getTypeCount = () =>{
        let data = props.data
        let counts = _.reduce(data, (totals, currentItem) => {
            let { type } = currentItem
            totals[type] = _.get(totals, type, 0) + 1
            return totals
        }, {})

        return  _.map(types, currentType => counts[currentType])
    }

    let getChartData = ()=>{
        return  {
            labels: types,
            datasets:[
                {
                    label: 'Count',
                    data: typeCount,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 62, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(5, 59, 64, 0.6)',
                        'rgba(55, 99, 132, 0.6)',
                        'rgba(255, 29, 32, 0.6)',
                        'rgba(54, 162, 35, 0.6)',
                        'rgba(15, 250, 16, 0.6)',
                        'rgba(75, 92, 92, 0.6)',
                        'rgba(153, 02, 55, 0.6)'
                    ]
                }
            ]
        }
    }

    let types = getTypes()
    let typeCount = getTypeCount()
    let chartData = getChartData()


    return(
        <div>
            <nav className= 'header'>
                <ul>
                    { types.map( (type,index)=>(
                        <li key = {index}><button className='typeBtn'>{type}</button></li>
                    ))}
                </ul>
            </nav>


            <div className='chart'>
                <Pie
                    data={chartData}
                    options={{
                        title:{
                            display:true,
                            fontSize:25
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
            </div>
        </div>
    )

}

export default ShowTypes
