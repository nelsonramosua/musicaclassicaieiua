// Configuração do gráfico de linha
Highcharts.chart('concertosChart', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Variação no Número de Atuações ao Longo do Ano'
    },
    subtitle: {
        text: 'União Filarmónica do Troviscal'
    },
    xAxis: {
        categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        title: {
            text: 'Meses'
        }
    },
    yAxis: {
        title: {
            text: 'Número de Atuações'
        },
        allowDecimals: false
    },
    tooltip: {
        valueSuffix: ' atuacoes'
    },
    series: [{
        name: 'Atuações',
        data: [2, 0, 1, 2, 2, 2, 6, 6, 3, 1, 1, 2] 
    }],
    credits: {
        enabled: true
    }
});