
//Js code borrowed from Google Charts

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(chart2);
google.charts.setOnLoadCallback(chart3);
google.charts.setOnLoadCallback(chart4);
google.charts.setOnLoadCallback(chart5);
google.charts.setOnLoadCallback(chart6);
google.charts.setOnLoadCallback(chart7);
google.charts.setOnLoadCallback(chart8);
      
// Callback that creates and populates a data table
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

    function chart5() {                               
                                        
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Betyg');
      data.addColumn('number', 'Antal svar');
      data.addRows([
      ['1', 1],
      ['2', 6],
      ['3', 6],
      ['4', 7],
      ['5', 3],
      ['6', 4],
      ['7', 4],
      ]);
                                        
                                
                                        
      var options = {'title':'Har vi gjort det vi ska?',
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
                                
                                        
      var chart = new google.visualization.ColumnChart(document.getElementById('chart5'));
      chart.draw(data, options);
    }

function chart6() {
                                        
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Betyg');
  data.addColumn('number', 'Antal svar');
  data.addRows([
  ['1', 4],
  ['2', 6],
  ['3', 1],
  ['4', 5],
  ['5', 11],
  ['6', 2],
  ['7', 1],
  ]);
                                                                                    
  // Set chart options
  var options = {'title':'Hur var kursen?',
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
                                        
  var chart = new google.visualization.ColumnChart(document.getElementById('chart6'));
  chart.draw(data, options);
}

function chart7() {
                                        
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Betyg');
  data.addColumn('number', 'Antal svar');
  data.addRows([
  ['1', 5],
  ['2', 4],
  ['3', 6],
  ['4', 7],
  ['5', 4],
  ['6', 3],
  ['7', 1],
  ]);
                                                                                    
  // Set chart options
  var options = {'title':'Vad tyckte du om läraren?',
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
                                        
  var chart = new google.visualization.ColumnChart(document.getElementById('chart7'));
  chart.draw(data, options);
}

function chart8() {
                                        
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Betyg');
  data.addColumn('number', 'Antal svar');
  data.addRows([
  ['1', 1],
  ['2', 1],
  ['3', 5],
  ['4', 7],
  ['5', 6],
  ['6', 6],
  ['7', 4],
  ]);
                                                                                    
  // Set chart options
  var options = {'title':'Hur var kursen som helhet?',
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
                                        
  var chart = new google.visualization.ColumnChart(document.getElementById('chart8'));
  chart.draw(data, options);
}
                

                                      

