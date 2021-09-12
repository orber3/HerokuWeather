import React, { FC } from 'react';
import { Chart } from 'primereact/chart';
import { makeStyles } from '@material-ui/core';
import { primary, secondary } from '../../Colors';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '300px',
    width: '500px',
    paddingTop: '4rem',

    [theme.breakpoints.down(490)]: {
      height: '350px',
      width: '200px',
      overflowX: 'none',
    },
  },
}));

const BarChart = ({ data, color }) => {
  const classes = useStyles();
  console.log(color);
  let dataColor = color ? primary.BlueColor : secondary.backGroundColor;
  let labelColor = color ? primary.BlueColor : 'white';
  let basicData;
  if (data.length > 0) {
    let cityLabels = [];
    data.map((item) => {
      cityLabels.push(item.keyword);
    });
    let daytemp = [];
    data.map((item) => {
      daytemp.push(item.data[0].Temperature.Metric.Value);
    });

    basicData = {
      labels: cityLabels,
      datasets: [
        {
          label: 'Temperature',
          backgroundColor: dataColor,
          data: daytemp,
          borderColor: 'white',
        },
      ],
    };
  } else {
    basicData = [];
  }
  let BarOptions = {
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
          color: labelColor,
        },
        grid: {
          // color: 'black',
        },
      },
      y: {
        stacked: false,
        ticks: {
          color: labelColor,
        },
        grid: {
          display: false,
          color: '#ebedef',
        },
      },
    },
  };

  return (
    <Chart
      className={classes.root}
      type="bar"
      data={basicData}
      options={BarOptions}
    />
  );
};

export default BarChart;
