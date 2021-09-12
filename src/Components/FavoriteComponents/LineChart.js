import React, { FC } from 'react';
import { Chart } from 'primereact/chart';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
  },
});

const DEFAULT_DATASET_CONFIGURATION = {
  borderWidth: 0,
};
let lineOptions = {
  maintainAspectRatio: false,
  aspectRatio: 1,
  plugins: {
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    legend: {
      labels: {
        fontColor: 'white',
        fontSize: '14',
        usePointStyle: true,
        boxWidth: 10,
        padding: 10,
      },
    },
  },
  scales: {
    x: {
      stacked: false,
      ticks: {
        color: '#495057',
      },
      // grid: {
      //   color: '#ebedef'
      // }
    },
    y: {
      stacked: false,
      ticks: {
        color: '#495057',
      },
      // grid: {
      //   color: '#ebedef'
      // }
    },
  },
};

const LineChart = ({ data }) => {
  console.log(data);
  const classes = useStyles();
  let basicOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: '#495057',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#495057',
        },
        grid: {
          color: '#ebedef',
        },
      },
      y: {
        ticks: {
          color: '#495057',
        },
        grid: {
          color: '#ebedef',
        },
      },
    },
  };
  let basicData;
  if (data.length > 0) {
    let cityLabels = [];
    data.forEach((item) => {
      cityLabels.push(item);
    });
    let daytemp = [];
    data.foreach((item) => {
      daytemp.push(item.data[0].Temprature.Metric.Value);
    });

    basicData = {
      labels: cityLabels,
      datasets: [
        {
          label: 'day temp',
          backgroundColor: '#42A5F5',
          data: daytemp,
        },
      ],
    };
  } else {
    basicData = [];
  }

  return (
    <Chart
      className={classes.root}
      type="bar"
      data={basicData}
      options={basicOptions}
    />
  );
};

export default LineChart;
