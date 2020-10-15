import React, { Component } from 'react'
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
export class ChartJS extends Component{
    constructor(props) {
        super(props);
        this.state = { Data: {} };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/budget')
            .then(res => {
                
                const res2 = JSON.stringify(res);
                //console.log(res2);
                const object = JSON.parse(res2);
                //console.log(object);
                const array = Object.keys(object).map(function(k) {
                        return object[k];
                            });
                const array2 = Object.keys(array[0]).map(function(k){
                        return array[0][k];
                });
                let title = [];
                let value = [];
                //console.log(array2[0][2].budget);
                for(var i = 0; i < array2[0].length; i++){
                    title.push(array2[0][i].title);
                    value.push(array2[0][i].budget);
                }

                this.setState({
                    Data: {
                        labels: title,
                        datasets: [
                            {
                                label: 'My Budget Chart',
                                data: value,
                                backgroundColor: [
                                    '#ffcd56',
                                    '#ff6384',
                                    '#36a2eb',
                                    '#fd6b19',
                                    '#ff0000',
                                    '#0000ff',
                                    '#00ff00'
                                    
                                ]
                            }
                        ]
                    }
                });
            })
    }
    render() {
        //console.log(this.state.Data);
        return (
            <div> 
            <Pie
                data={this.state.Data}
                options={{ maintainAspectRatio: true }} />
            </div>
            
        )
    }
}

export default ChartJS;