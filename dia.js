google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawDonutChart);

function drawDonutChart() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1HB25yOvL6KdnlJC3LQqxNLabegorlH5h3wftZ4d51Ds/gviz/tq?tqx=out:csv&sheet=dia');
  
  query.send(function(response) {
    if (response.isError()) {
      console.error('Erro ao carregar dados da planilha: ' + response.getMessage());
      return;
    }

    var data = response.getDataTable();
    
    var linha0=0
    var coluna0=0

    var valor0=data.getValue(linha0,coluna0)


    var options = {
      pieHole: 0.4, // Define o tamanho do buraco no meio do gráfico (0 a 1)
      pieSize: 10,
      colors: ['#1e2d3b',''],
      pieSliceBorderColor: '', // Define a cor da borda do gráfico como preto
      pieSliceTextStyle: {
        fontSize: 12,
        color: 'white' // Define a cor do texto das porcentagens como preto
      },
      title: 'Gráfico - '+valor0,
      
      backgroundColor: 'transparent',
     fontSize: 15,

    };
    var chart = new google.visualization.PieChart(document.getElementById('dia-chart'));
    chart.draw(data, options);
  });
}
