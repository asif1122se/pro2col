'use client'
import React from 'react';

import ChartHeader from "./ChartHeader";
import dynamic from 'next/dynamic';

// Dynamically import the Chart component to ensure it's loaded on the client side
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function WeightChart() {
  const series = [
    {
      name: "Step",
      data: [800, 950, 1245, 900, 1100, 700, 950],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      position: "bottom",
      labels: {
        offsetY: -5,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (val) => `${val}`,
        offsetX: -10,
      },
    },
    title: {
      text: "",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}`,
      },
    },
    fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.25,
          gradientToColors: ['#B6EA9E'],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
    }
},
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  return (
    <div className="shadow-lg rounded p-4">
      <ChartHeader

title={"Steps"} img={'/img/steps-green.png'} stats={"34,456"} value={"-4"} timespan={"steps in last week"}
        
      />
      <div className="chart-container">
          <div id="barchart" className='w-full'>
            <Chart options={options}
              series={series}
              width={"100%"}
              height={"380px"} 
              type="bar"
                />
          </div>
      </div>
    </div>
  );
}

export default WeightChart;
