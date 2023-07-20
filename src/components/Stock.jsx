import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import data from "../provider/stockdata.json"
function stockprice() {
    const options = {
        title: {
          text: 'Nifty',
        },
        xAxis: {
          type: 'datetime',
        },
        yAxis: [
            {
              title: {
                text: 'India VIX Value',
              },
            },
            {
              title: {
                text: 'Nifty 50 Value',
              },
              opposite: true, // To display the yAxis on the right side
            },
          ],
        series: [
          {
            name: 'NiftyVix',
            data: data.indiaVIX.map((item) => [item.date, item.value]),
            yAxis:0
          },
          {
            name: 'Nifty50',
            data: data.nifty50.map((item) => [item.date, item.value]),
            yAxis:1
          },
        ],
        tooltip: {
            shared: true, // Enable the "shared" tooltip
          },
        
      };
  return (
    <div className='w-[70%] py-8 flex items-center justify-center'>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default stockprice