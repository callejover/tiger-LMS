
//Js code borrowed from Google Charts

// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(chart2);
      google.charts.setOnLoadCallback(chart3);
      google.charts.setOnLoadCallback(chart4);

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

      function chart2() {
        
                // Create the data table.
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Betyg');
                data.addColumn('number', 'Antal svar');
                data.addRows([
                  ['1', 1],
                  ['2', 1],
                  ['3', 5],
                  ['4', 10],
                  ['5', 8],
                  ['6', 4],
                  ['7', 1],
                ]);
                
        
                // Set chart options
                var options = {'title':'Hur upplever du just nu tempot i utbildningen?',
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
                               'width':800,
                               'height':300};
        
                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.ColumnChart(document.getElementById('chart2'));
                chart.draw(data, options);
              }

              function chart3() {
                
                        // Create the data table.
                        var data = new google.visualization.DataTable();
                        data.addColumn('string', 'Betyg');
                        data.addColumn('number', 'Antal svar');
                        data.addRows([
                          ['1', 1],
                          ['2', 4],
                          ['3', 5],
                          ['4', 4],
                          ['5', 8],
                          ['6', 2],
                          ['7', 6],
                        ]);
                        
                
                        // Set chart options
                        var options = {'title':'Hur engagerad anser du själv att du är i dina studier?',
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
                                       'width':800,
                                       'height':300};
                
                        // Instantiate and draw our chart, passing in some options.
                        var chart = new google.visualization.ColumnChart(document.getElementById('chart3'));
                        chart.draw(data, options);
                      }

                      function chart4() {
                        
                                // Create the data table.
                                var data = new google.visualization.DataTable();
                                data.addColumn('string', 'Betyg');
                                data.addColumn('number', 'Antal svar');
                                data.addRows([
                                  ['1', 0],
                                  ['2', 2],
                                  ['3', 5],
                                  ['4', 8],
                                  ['5', 8],
                                  ['6', 2],
                                  ['7', 5],
                                ]);
                                
                        
                                // Set chart options
                                var options = {'title':'Hur upplever du stämningen i klassen?',
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
                                               'width':800,
                                               'height':300};
                        
                                // Instantiate and draw our chart, passing in some options.
                                var chart = new google.visualization.ColumnChart(document.getElementById('chart4'));
                                chart.draw(data, options);
                              }