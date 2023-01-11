// This is the script that 'gets' the EA API data for the charts

var queryURL = "https://environment.data.gov.uk/flood-monitoring/id/floods";

//get JSON from EA Flood Monitoring for 'isTidal'
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  // console.log(response);
  // console.log(response.items[0].isTidal);
  // //logs the temperature of the first array item
  // console.log(response.items);
  // console.log(response.items.length);
  // console.log(response.items[2].description);

  // var objectValues = Object.values(response.items[0])
  // console.log(objectValues);
  var numberOfFloods = response.items.length
  // console.log(numberOfFloods);


  // // go through the array (as Paul mentioned)
  // var description = "";
  // response.items.forEach(item => { 
  //  description += item.description;
  // });
  // console.log(description);

  // var keys = Object.keys(response.items[0]);
  // console.log(keys);

  //Append 'Number of Floods' to #numberOfFloods

  var numberOfFloodsEl = document.getElementById('numberOfFloods');

  // numberOfFloodsEl.innerHTML += ('There are ' + numberOfFloods + ' flood warnings in place today');
  numberOfFloodsEl.innerHTML += (numberOfFloods);

  // sets the colour of #numberOfFloods
  
  // numberOfFloodsEl.setAttribute('style', 'color: rgb(16, 253, 28);')

  numberOfFloodsEl.setAttribute('style', 'color: rgb(16, 253, 28); font-size: 50px;')

  // jQuery loop over JSON result after AJAX Success (https://www.etutorialspoint.com/index.php/46-jquery-loop-over-json-result-after-ajax-success)

  // Then count all 'isTidal' key: values:

  // if 'false' count

  // if 'true' count

  // All readings for all measures from across all the stations:
  // var queryURL2 = "https://environment.data.gov.uk/flood-monitoring/id/measures?_limit=50";

  // $.ajax({
  //   url: queryURL2,
  //   method: "GET"
  // }).then(function (response) {

  var numberofValues = response.items.length
  //     console.log(numberofValues);

  var queryURL2 = "https://environment.data.gov.uk/flood-monitoring/id/floods";

  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function (response) {


    // console.log(response.items[0].severityLevel);

    var severity = response.items.map((item) => item.severityLevel);


    var severity1 = 1;
    var severity2 = 2;
    var severity3 = 3;
    var severity4 = 4;

    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var counter4 = 0;

    for (var i = 0; i < severity.length; i++) {
      //  console.log(response.items[i].severityLevel)

      if (severity[i] == severity1) {
        counter1++;

      else if (severity[i] == severity2) {
        counter2++;
      }

      else if (severity[i] == severity3) {
        counter3++;
      }


      else if (severity[i] == severity4) {
        counter4++;
      }
        
          };
    console.log("Number of severity level 1 flood events " + counter1);
    console.log("Number of severity level 2 flood events " + counter2);
    console.log("Number of severity level 3 flood events " + counter3);
    console.log("Number of severity level 4 flood events " + counter4);
    console.log(counter1);
    console.log(counter2);
    console.log(counter3);
    console.log(counter4);

    // console.log(severity);
    // console.log(severity.length);

    //create an array from the results
        
  // This is the script that renders each chart

  // Chart #1 - Number of Floods
  var options = {
    series: [numberOfFloods],
    chart: {
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



  chart.render()
    .then(function () {
      // Trigger event for map which needs to resize
      $(window).trigger("chartRendered");
    }).catch(function (e) {
      console.log(116);
  });


    // This is the script that renders each chart

    // Chart #1 - Number of Floods
    var options = {
      series: [numberofValues],
      chart: {
        type: 'donut',
        redrawOnWindowResize: true
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

    chart.render();




    // Chart #2
    var options = {
      chart: {
        type: 'bar',
        redrawOnWindowResize: true,
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
        name: 'Severity',
        data: [counter1, counter2, counter3, counter4]
      }],
      xaxis: {
        categories: ['1', '2', '3', '4'],
        labels: {
          show: true,
          style: {
            colors: ['rgba(16, 253, 28, 0.5)', 'rgba(16, 253, 28, 0.5)', 'rgba(16, 253, 28, 0.5)', 'rgba(16, 253, 28, 0.5)'],
          },
        },
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
        redrawOnWindowResize: true,
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

    // console.log(response.items[0].latestReading.value);

    // var floodLevels = response.items.map( (item)=>item.latestReading)
    // // [0].latestReading.value
    // // var randomVar = response.items[0].latestReading.value

    // for (var i=0; i < floodLevels.length; i++) {
    //    console.log(response.items[i].latestReading.value)
    // };

    //create an array from the results

    // console.log(floodLevels);

    // Chart #4
    var options = {
      chart: {
        type: "area",
        redrawOnWindowResize: true,
        height: '40%',
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
          data: [1, 2, 3, 4, 5, 6, 7]
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


  });
});



// Reload window with every page/window resize (required to re-render the charts to the new screen size to prevent it them 'sticking' to their current size)
window.onresize = function () { location.reload(); }



