import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

const DepartmentChart = () => {
  const [departmentData, setDepartmentData] = useState({});

  const getDepartmentWiseData = async() => {
    try{
      let res = await axios.get(`https://tech-prime-lab-9ov4.onrender.com/project/department-data`);
      setDepartmentData(res.data);
    }catch(err){
      console.log(err)
    }
  }

  const successPercentage =
    departmentData.departments &&
    departmentData.totalClosed &&
    departmentData.totalRegistered &&
    departmentData.departments.map((department, index) => ({
      name: department,
      y: (departmentData.totalClosed[index] / departmentData.totalRegistered[index]) * 100,
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
      categories: departmentData?.departments,
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
        data: departmentData?.totalRegistered,
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
        data: departmentData?.totalClosed,
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

  useEffect(()=>{
    getDepartmentWiseData();
  }, []);

  console.log(departmentData);

  return (
    <div style={{width: "600px"}}>
      <div style={{ width: '600px' }}>
      <div className="shadow p-3 mb-5 bg-white rounded-3">
        {successPercentage ? (
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
            containerProps={{ style: { height: '400px' } }}
          />
        ) : (
          <div>Loading chart...</div>
        )}
      </div>
    </div>
    </div>
  );
};

export default DepartmentChart