var chart;
/*
 * Function to draw the gauge
 */
function builtGaugeReactive() {
    
    var data = new Array();
    
    data[0] = 80;
    
    if(Session.get('reactive') !== undefined)
        data[0] = Session.get('reactive');
    
    chart = $('#container-gauge-reactive').highcharts({
        
        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },
        
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -70
            },
            labels: {
                y: 16
            },
            min: 0,
            max: 200,
            title: {
                text: 'Speed'
            }
        },
        
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },
        
        credits: {
            enabled: false
        },

        series: [{
            name: 'Speed',
            data: data,
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:black">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">km/h</span></div>'
            },
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]
    });
}


/*
 * Call the function to built the chart when the template is rendered
 */
Template.gaugeReactiveDemo.rendered = function () {
    Tracker.autorun(function () {
       builtGaugeReactive();
    });
}

/*
 * Template events
 */
Template.gaugeReactiveDemo.events = {
    
    'change #reactive': function (event, template) {
        var newValue = $(event.target).val();
        Session.set('reactive', parseInt(newValue));
    },
}