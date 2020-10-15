import * as React from "react";
import * as d3 from "d3";

const PieComponent = ({data}) => {
  const height = 400
  const width = 400 

  let pie = d3.pie()(data)

  const slices = ()=> {
    let arc = d3.arc().innerRadius(0).outerRadius(100);
    let interpolate = d3.interpolateRgb("#eaaf79","#bc3358");

    return pie.map((slice,index)=> {
      let color = interpolate(index/( pie.length - 1))

      return <path key={`slice-${index}`} d={arc(slice)} fill={color} />
    })
  }

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${width/2},${height/2})`}>
      {slices()}
      </g>
    </svg> 
  )
} 

export default PieComponent