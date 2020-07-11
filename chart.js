//developers.google.com/chart
google.charts.load('current', {'packages' : ['corechart','gauge']});

google.charts.setOnLoadCallback(grafico);

google.charts.setOnLoadCallback(gauge);

function grafico(){

  const data = new google.visualization.DataTable();

  data.addColumn('string', 'nome');
  data.addColumn('number', 'quantidade');

  data.addRows([
    ['teste', 5],
    ['teste2', 10],
    ['teste3', 15]
  ]);

  const options = {'title' : 'título', 'width' : 400, 'height' : 300 };

  const chart = new google.visualization.BarChart(document.getElementById('chart'));
  chart.draw(data, options);

}

function gauge(){

  const data = new google.visualization.arrayToDataTable([
    ['label', 'value'],
    ['Memory', 80],
    ['CPU', 50],
    ['Network', 68]
  ]);

  const options = { 'width' : 400, 'height' : 120, 'redFrom' : 90, 'redTo': 100, 'yellowFrom' : 75, 'yellowTo' : 90, 'minorTicks' : 5 };

  const chart = new google.visualization.Gauge(document.getElementById('gauge'));
  chart.draw(data, options);

}