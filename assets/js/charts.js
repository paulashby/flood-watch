// This is the script that 'gets' the EA API data for the charts

var queryURL = "https://environment.data.gov.uk/flood-monitoring/id/floods";

// //get JSON from EA Flood Monitoring for 'isTidal'
// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function (response) {
//   // console.log(response);
//   console.log(response.items[0].isTidal);
//   // //logs the temperature of the first array item
//   // console.log(response.list[0].main.temp);


// });

// var index = []



// return items;

//get JSON from EA Flood Monitoring for 'isTidal'
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  // console.log(response);
  console.log(response.items[0].isTidal);
  // //logs the temperature of the first array item
  console.log(response.items);
  // console.log(response.items[i].description);

  var numberOfFloods = response.items.length

  console.log(numberOfFloods);

  // var keys = Object.keys(response.items[0]);
  // console.log(keys);

  //Append 'Number of Floods' to #numberOfFloods

  var numberOfFloodsEl = document.getElementById('numberOfFloods');

  numberOfFloodsEl.innerHTML += ('There are ' + numberOfFloods + ' flood warnings in place today');

  // sets the colour of #numberOfFloods
  numberOfFloodsEl.setAttribute('style', 'color: rgb(16, 253, 28);')


  // jQuery loop over JSON result after AJAX Success (https://www.etutorialspoint.com/index.php/46-jquery-loop-over-json-result-after-ajax-success)



  // Then count all 'isTidal' key: values:

  // if 'false' count

  // if 'true' count




  // This is the script that renders each chart

  // Chart #1 - Number of Floods
  var options = {
    series: [numberOfFloods],
    chart: {
      // events: {
      //   animationEnd: onAnimationEnd
      // },
      type: 'donut',
    },
    colors: ['rgba(16, 253, 28, 0.25)'],
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: ['rgb(16, 253, 28)'],
      width: 2,
      dashArray: 0,
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: undefined,
      formatter: function (val, opts) {
        return val
      }
    },
    legend: {
      show: false,
    },

    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  var chart = new ApexCharts(document.querySelector("#chartOne"), options);

  chart.render()
    .then(function () {
      // Trigger event for map which needs to resize
      $(window).trigger("chartRendered");
    }).catch(function (e) {
      console.log(116);
  });

  // Chart #2
  var options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
      height: '40%'
    },

    grid: {
      show: true,
      borderColor: 'rgba(16, 253, 28, 0.25)',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      row: {
        colors: undefined,
        opacity: 0.5
      },
      column: {
        colors: undefined,
        opacity: 0.5
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
    },
    colors: ['rgba(16, 253, 28, 0.25)'],
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: ['rgb(16, 253, 28)'],
      width: 2,
      dashArray: 0,
    },
    series: [{
      name: 'isTidal',
      data: [numberOfFloods]
    }],
    xaxis: {
      categories: ['Number'],
      labels: {
        show: false,
      }
    },
    yaxis: {
      categories: ['Number'],
      labels: {
        show: true,
        style: {
          colors: ['rgba(16, 253, 28, 0.5)'],
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        },
        offsetX: -10,
        offsetY: 0,
      },
      axisBorder: {
        show: false,
        color: '#000000',
        height: 0,
        width: 0,
        offsetX: 0,
        offsetY: 0
      },
    }


  }

  var chart = new ApexCharts(document.querySelector("#chartTwo"), options);

  chart.render();

  // Chart #3
  var options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
      height: '40%'
    },

    grid: {
      show: true,
      borderColor: 'rgba(16, 253, 28, 0.25)',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      row: {
        colors: undefined,
        opacity: 0.5
      },
      column: {
        colors: undefined,
        opacity: 0.5
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
    },
    colors: ['rgba(16, 253, 28, 0.25)'],
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: ['rgb(16, 253, 28)'],
      width: 2,
      dashArray: 0,
    },
    series: [{
      name: 'isTidal',
      data: [numberOfFloods]
    }],
    xaxis: {
      categories: ['Number'],
      labels: {
        show: false,
      }
    },
    yaxis: {
      categories: ['Number'],
      labels: {
        show: true,
        style: {
          colors: ['rgba(16, 253, 28, 0.5)'],
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        },
        offsetX: -10,
        offsetY: 0,
      },
      axisBorder: {
        show: false,
        color: '#000000',
        height: 0,
        width: 0,
        offsetX: 0,
        offsetY: 0
      },
    }


  }

  var chart = new ApexCharts(document.querySelector("#chartThree"), options);

  chart.render();

    // Chart #4
  var options = {
    chart: {
      height: '40%',
      type: "area",
      toolbar: {
        show: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 19, 23, 2]
      }
    ],
    fill: {
      type: "solid",
      colors: ['rgba(16, 253, 28, 0.25)'],
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: ['rgb(16, 253, 28)'],
      width: 2,
      dashArray: 0,
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan"
      ]
    },
    grid: {
      show: true,
      borderColor: 'rgba(16, 253, 28, 0.25)',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      row: {
        colors: undefined,
        opacity: 0.5
      },
      column: {
        colors: undefined,
        opacity: 0.5
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      labels: {
        show: false,
      }
    },
    yaxis: {
      categories: ['Number'],
      labels: {
        show: true,
        style: {
          colors: ['rgba(16, 253, 28, 0.5)'],
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        },
        offsetX: -10,
        offsetY: 0,
      },
      axisBorder: {
        show: false,
        color: '#000000',
        height: 0,
        width: 0,
        offsetX: 0,
        offsetY: 0
      },
    }

  };

  var chart = new ApexCharts(document.querySelector("#chartFour"), options);


  chart.render();

  // // Chart #4

  // var options = {
  //   chart: {
  //     type: 'bar'
  //   },
  //   colors: ['rgb(16, 253, 28)'],
  //   series: [{
  //     name: 'sales',
  //     data: [30,40]
  //   }],
  //   xaxis: {
  //     categories: ['True','False']
  //   }
  // }

  // var chart = new ApexCharts(document.querySelector("#chartTwo"), options);

  // chart.render();


});