import React, { Component } from 'react'
import axios from 'axios';
import PieChart from "./PieComponent";
export class D3JS extends Component{
    constructor(props) {
        super(props);
        this.state = { Data: {} };
    }
    componentDidMount() {
        this._isMounted = true;
        axios.get('http://localhost:4000/budget')
            .then(res => {
              if (this._isMounted){   
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
                        label: title,
                        data: value
                    }
                });
              }
            })
    }
    componentWillUnmount() {
        this._isMounted = false;
      }
    
    render() {
        console.log(this.state.Data);
        return (
            <div>
              <div>
                <PieChart data={this.state.Data} />
              </div>
            </div>
          );
    }
}
export default D3JS;