const newCommitsByDaysData = [
  ['2022-8-17', 2], ['2022-8-20', 9],
  ['2022-8-21', 1], ['2022-8-22', 3],
  ['2022-8-23', 24], ['2022-8-24', 24],
  ['2022-8-25', 15], ['2022-8-26', 9],
  ['2022-8-27', 10], ['2022-8-28', 7],
  ['2022-8-29', 10], ['2022-8-30', 7],
  ['2022-8-31', 17], ['2022-9-1', 15],
  ['2022-9-2', 8], ['2022-9-3', 19],
  ['2022-9-4', 28], ['2022-9-5', 42],
  ['2022-9-6', 37], ['2022-9-7', 1],
  ['2022-9-8', 3]
];

const totalCommitsByDaysData = [
  ['2022-8-17', 2], ['2022-8-20', 11],
  ['2022-8-21', 12], ['2022-8-22', 15],
  ['2022-8-23', 39], ['2022-8-24', 63],
  ['2022-8-25', 78], ['2022-8-26', 87],
  ['2022-8-27', 97], ['2022-8-28', 104],
  ['2022-8-29', 114], ['2022-8-30', 121],
  ['2022-8-31', 138], ['2022-9-1', 153],
  ['2022-9-2', 161], ['2022-9-3', 180],
  ['2022-9-4', 208], ['2022-9-5', 250],
  ['2022-9-6', 287], ['2022-9-7', 288],
  ['2022-9-8', 291]
];
const newCommitsByDaysDataObjects = newCommitsByDaysData.map((elem) => {
  let x = elem[0];
  let y = elem[1];
  return { x, y };
});

const totalCommitsByDaysDataObjects = totalCommitsByDaysData.map((elem) => {
  let x = elem[0];
  let y = elem[1];
  return { x, y };
});

// let chart = new Chart(document.getElementById('myChart'), {
//   type: 'line',
//   data: {
//     datasets: [
//       {
//         // type: 'bar',
//         type: 'line',
//         label: 'New words',
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         order: 2,
//         data: newWordsByDayObjects
//       }
//       , {
//         type: 'line',
//         label: 'Total Learned Words',
//         fill: false,
//         borderColor: 'rgb(54, 162, 235)',
//         order: 1,
//         data: learnedTotalWordsByDaysData
//       }
//     ],
//   },
//   options: {
//     animations: {
//       tension: {
//         duration: 5000,
//         easing: 'linear',
//         from: 0.5,
//         to: 0,
//         loop: true
//       }
//     },
//     scales: {
//       x: {
//         min: `${newWordsByDayObjects[0].x}`,
//         // type: 'time',
//         // time: {
//         //   unit: 'day'
//         // }
//       }
//       // x: {
//       //   min: `${newWordsByDayObjects[0].x}`,
//       // }
//     }
//   },

// });


const chart = new Chart(document.getElementById('myChart'), {
  type: 'line',
  data: {
    datasets: [
      {
        type: 'line',
        yAxisID: 'y1',
        label: 'Новых комитов в день',
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        order: 2,
        data: newCommitsByDaysDataObjects,
      },
      {
        type: 'line',
        yAxisID: 'y2',
        label: 'Всего комитов',
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        order: 1,
        data: totalCommitsByDaysDataObjects,
      },
    ],
  },
  options: {
    animations: {
      tension: {
        duration: 3000,
        easing: 'linear',
        from: 0.7,
        to: 0,
        loop: true,
      },
    },
    scales: {
      x: {
        // type: 'timeseries',
        // time: {
        //   unit: 'day',
        // },
        min: `${newCommitsByDaysDataObjects[0].x}`,
      },
      y1: {
        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        position: 'left',
        scaleFontColor: 'rgba(151,137,200,0.8)',
      },
      y2: {
        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        position: 'right',
      },
    },
  },

});

console.log('newCommitsByDaysDataObjects:', totalCommitsByDaysDataObjects);
