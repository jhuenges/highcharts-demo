/*
 * Function to draw the pie chart
 */
function builtPie() {
    
    // 'external' data
    var data = new Array();

    data.push({
        name: 'Level 0',
        y: 10,
        color: '#55BF3B'
    });

    data.push({
        name: 'Level 1',
        y: 12,
        color: '#DDDF0D'
    });

    data.push({
        name: 'Level 2',
        y: 30,
        color: '#DF5353'
    });

    $('#container-pie').highcharts({
        
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        
        title: {
            text: ''
        },
        
        credits: {
            enabled: false
        },
        
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        
        series: [{
            type: 'pie',
            name: 'Anteil',
            data: data
        }]
    });
}

/*
 * Call the function to built the chart when the template is rendered
 */
Template.pieDemo.rendered = function() {    
    builtPie();
}