// This is the script that 'gets' the EA API data for the charts

var queryURL = "https://environment.data.gov.uk/flood-monitoring/id/floods";

  //get JSON for searched/stored city
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    // console.log(response);
    console.log(response.items[0].isTidal);
    // //logs the temperature of the first array item
    // console.log(response.list[0].main.temp);


  });

// This is the script that renders each chart

// Chart #1
  var options = {
    chart: {
      type: 'bar'
    },
    colors: ['#00410D', '#66DA26',],
    series: [{
      name: 'isTidal',
      data: [30,40]
    }],
    xaxis: {
      categories: ['True','False']
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chartOne"), options);
  
  chart.render();

  // Chart #2

  var options = {
    chart: {
      type: 'bar'
    },
    colors: ['#00410D', '#66DA26',],
    series: [{
      name: 'sales',
      data: [30,40]
    }],
    xaxis: {
      categories: ['True','False']
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chartTwo"), options);
  
  chart.render();

  // Chart #3

  var options = {
    chart: {
      height: 280,
      type: "area"
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
      colors: ['#00410D'],
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
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#chartThree"), options);
  
  chart.render();