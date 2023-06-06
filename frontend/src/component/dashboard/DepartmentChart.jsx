import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DepartmentChart = () => {
  const departments = ['Strategy', 'Finance', 'Marketing', 'Operations', 'Strategy', 'Finance'];
  const totalRegistered = [19, 7, 9, 15, 5, 10];
  const totalClosed = [14, 6, 8, 15, 5, 9];

  const successPercentage = departments.map((department, index) => ({
    name: department,
    y: (totalClosed[index] / totalRegistered[index]) * 100,
  }));

  const chartOptions = {
    chart: {
      type: 'column',
      spacing: [30, 30, 30, 30]
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: departments,
      labels: {
        formatter: function () {
          const index = this.pos;
          const successPercent = successPercentage[index].y;
          const departmentName = this.value;
          return `<span style="font-weight: bold; fontSize: 16px">${successPercent.toFixed(0)}%</span><br/><span style="fontSize: 15px">${departmentName}</span>`;
        },
      },
      lineColor: 'gray',
      lineWidth: 2,
    },
    yAxis: [
      {
        gridLineWidth: 0,
        tickLength: 0,
        lineColor: 'gray',
        lineWidth: 2,
      },
      {
        title: {
          text: '',
        },
        labels: {
          format: '{value}',
        },
      },
      {
        title: {
          text: '',
        },
        opposite: true,
      },
    ],
    series: [
      {
        name: 'Total',
        data: totalRegistered,
        color: 'blue',
        dataLabels: {
          enabled: true,
          format: '{point.y}',
          style: {
            color: 'black',
          },
        },
      },
      {
        name: 'Closed',
        data: totalClosed,
        color: 'green',
        dataLabels: {
          enabled: true,
          format: '{point.y}',
          style: {
            color: 'black',
          },
        },
      },
    ],
  };

  return (
    <div style={{width: "730px"}}>
      <div class="shadow p-3 mb-5 bg-white rounded-3">
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
};

export default DepartmentChart