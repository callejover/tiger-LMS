
//Js code borrowed from Google Charts

// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Betyg');
        data.addColumn('number', 'Antal svar');
        data.addRows([
          ['Väldigt nöjd', 10],
          ['Nöjd', 15],
          ['Inte nöjd', 5],
        ]);
        

        // Set chart options
        var options = {'title':'Hur upplever du dagen?',
                        colors: ['#DD46E8'],
                        backgroundColor: { fill:'transparent' },
                        legendTextStyle: { color: '#FFF' },
                        titleTextStyle: { color: '#FFF', fontSize: '18' },
                        hAxis: {
                        textStyle:{color: '#FFF'}
                        },
                        vAxis: {
                        textStyle:{color: '#FFF'}, baseline: {color: '#FFF'}
                        },
                       'width':500,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }