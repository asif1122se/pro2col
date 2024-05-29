'use client'
import React from 'react'
import ChartHeader from './ChartHeader'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
function StepsChart() {
 
      const seriesData = [0, 50, 100, 150, 200]

      const options = {
        chart: {
          type: 'line',
          height: 350,
          toolbar: {
            show: false
          }
        },
        series: [{
          name: 'Weight',
          data: seriesData,
        }],
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul"],
          labels: {
            style: {
              colors: '#4A5568'
            }
          }
        },
        yaxis: {
            labels: {
              style: {
                colors: '#4A5568',
              },
              formatter: function (val) {
                // Format the y-axis labels here if needed
                return val + 'lb'; // Append 'lb' to each label
              },
            },
          },
        colors: ['#FF4500'],
        stroke: {
          curve: 'smooth',
          width: 2
        },
        markers: {
          size: 4,
          colors: ['#FF4500'],
          strokeColors: '#FF4500'
        },
        grid: {
          borderColor: '#E2E8F0'
        }
      };
  return (
    <div className='shadow-lg rounded p-4'>
      <ChartHeader title={"Weight"}
        img={"/img/weight.png"}
        stats={"200IB"}
        value={"-4"}
        timespan={"6 months"} />
      <div className="chart-container">
          <div id="barchart" className='w-full'>
            <Chart options={options}
              series={options.series}
              width={"100%"}
              height={"380px"} 
              type="line"
                />
          </div>
      </div>

    </div>
  )
}

export default StepsChart