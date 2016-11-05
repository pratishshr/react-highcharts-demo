/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/2/16.
 */

import React, {Component} from 'react';

import ReactHighcharts from 'react-highcharts';

import Drilldown from 'highcharts-drilldown';

// Drilldown needs extra plugin
Drilldown(ReactHighcharts.Highcharts);

class App extends Component {
  constructor() {
    super();
    this.state = {
      config: null,
      isInDrillDown: false  // Disable Buttons When Inside Drilldown
    };
    this.updateChart = this.updateChart.bind(this);
    this.showFirstData = this.showFirstData.bind(this);
    this.showSecondData = this.showSecondData.bind(this);
    this.showThirdData = this.showThirdData.bind(this);
  }

  componentDidMount() {
    // Api Simulation
    setTimeout(() => {
      this.setState({
        config: {
          chart: {
            type: 'column',
            events: {
              drilldown: (e) => {
                this.setState({isInDrillDown: true});
              },
              drillup: (e) => {
                this.setState({isInDrillDown: false});
              }
            }
          },
          title: {
            text: 'Browser market shares. January, 2015 to May, 2015'
          },
          subtitle: {
            text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
          },
          xAxis: {
            type: 'category'
          },
          yAxis: {
            title: {
              text: 'Total percent market share'
            }

          },
          legend: {
            enabled: false
          },
          plotOptions: {
            series: {
              borderWidth: 0,
              dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
              }
            }
          },
          tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
          },
          series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
              name: 'Microsoft Internet Explorer',
              y: 56.33,
              drilldown: 'Microsoft Internet Explorer'
            }, {
              name: 'Chrome',
              y: 24.03,
              drilldown: 'Chrome'
            }, {
              name: 'Firefox',
              y: 10.38,
              drilldown: 'Firefox'
            }, {
              name: 'Safari',
              y: 4.77,
              drilldown: 'Safari'
            }, {
              name: 'Opera',
              y: 0.91,
              drilldown: 'Opera'
            }, {
              name: 'Proprietary or Undetectable',
              y: 0.2,
              drilldown: null
            }]
          }],
          drilldown: {
            series: [{
              name: 'Microsoft Internet Explorer',
              id: 'Microsoft Internet Explorer',
              data: [
                [
                  'v11.0',
                  24.13
                ],
                [
                  'v8.0',
                  17.2
                ],
                [
                  'v9.0',
                  8.11
                ],
                [
                  'v10.0',
                  5.33
                ],
                [
                  'v6.0',
                  1.06
                ],
                [
                  'v7.0',
                  0.5
                ]
              ]
            }, {
              name: 'Chrome',
              id: 'Chrome',
              data: [
                [
                  'v40.0',
                  5
                ],
                [
                  'v41.0',
                  4.32
                ],
                [
                  'v42.0',
                  3.68
                ],
                [
                  'v39.0',
                  2.96
                ],
                [
                  'v36.0',
                  2.53
                ],
                [
                  'v43.0',
                  1.45
                ],
                [
                  'v31.0',
                  1.24
                ],
                [
                  'v35.0',
                  0.85
                ],
                [
                  'v38.0',
                  0.6
                ],
                [
                  'v32.0',
                  0.55
                ],
                [
                  'v37.0',
                  0.38
                ],
                [
                  'v33.0',
                  0.19
                ],
                [
                  'v34.0',
                  0.14
                ],
                [
                  'v30.0',
                  0.14
                ]
              ]
            }, {
              name: 'Firefox',
              id: 'Firefox',
              data: [
                [
                  'v35',
                  2.76
                ],
                [
                  'v36',
                  2.32
                ],
                [
                  'v37',
                  2.31
                ],
                [
                  'v34',
                  1.27
                ],
                [
                  'v38',
                  1.02
                ],
                [
                  'v31',
                  0.33
                ],
                [
                  'v33',
                  0.22
                ],
                [
                  'v32',
                  0.15
                ]
              ]
            }, {
              name: 'Safari',
              id: 'Safari',
              data: [
                [
                  'v8.0',
                  2.56
                ],
                [
                  'v7.1',
                  0.77
                ],
                [
                  'v5.1',
                  0.42
                ],
                [
                  'v5.0',
                  0.3
                ],
                [
                  'v6.1',
                  0.29
                ],
                [
                  'v7.0',
                  0.26
                ],
                [
                  'v6.2',
                  0.17
                ]
              ]
            }, {
              name: 'Opera',
              id: 'Opera',
              data: [
                [
                  'v12.x',
                  0.34
                ],
                [
                  'v28',
                  0.24
                ],
                [
                  'v27',
                  0.17
                ],
                [
                  'v29',
                  0.16
                ]
              ]
            }]
          }
        }
      })
    }, 2000);
  }

  updateChart(config) {
    let chart = this.refs.chart.getChart();

    // Update Any of the Keys Similarly
    chart.update({title: config.title});

    // Update Data with setData for Animation
    chart.series[0].setData(config.data);
  }

  showFirstData() {
    let config = {
      title: {
        text: 'FIRST DATA'
      },
      data: [{
        name: 'Microsoft Internet Explorer',
        y: 10,
        drilldown: 'Microsoft Internet Explorer'
      }, {
        name: 'Chrome',
        y: 100,
        drilldown: 'Chrome'
      }, {
        name: 'Firefox',
        y: 122,
        drilldown: 'Firefox'
      }, {
        name: 'Safari',
        y: 20,
        drilldown: 'Safari'
      }, {
        name: 'Opera',
        y: 31,
        drilldown: 'Opera'
      }, {
        name: 'Proprietary or Undetectable',
        y: 1,
        drilldown: null
      }]
    };
    this.updateChart(config);
  }

  showSecondData() {
    let config = {
      title: {
        text: 'SECOND DATA'
      },
      data: [{
        name: 'Microsoft Internet Explorer',
        y: 102,
        drilldown: 'Microsoft Internet Explorer'
      }, {
        name: 'Chrome',
        y: 40,
        drilldown: 'Chrome'
      }, {
        name: 'Firefox',
        y: 22,
        drilldown: 'Firefox'
      }, {
        name: 'Safari',
        y: 203,
        drilldown: 'Safari'
      }, {
        name: 'Opera',
        y: 321,
        drilldown: 'Opera'
      }, {
        name: 'Proprietary or Undetectable',
        y: 21,
        drilldown: null
      }]
    };
    this.updateChart(config);
  }

  showThirdData() {
    let config = {
      title: {
        text: 'THIRD DATA'
      },
      data: [{
        name: 'Microsoft Internet Explorer',
        y: 102,
        drilldown: 'Microsoft Internet Explorer'
      }, {
        name: 'Chrome',
        y: 400,
        drilldown: 'Chrome'
      }, {
        name: 'Firefox',
        y: 22,
        drilldown: 'Firefox'
      }, {
        name: 'Safari',
        y: 202,
        drilldown: 'Safari'
      }, {
        name: 'Opera',
        y: 321,
        drilldown: 'Opera'
      }, {
        name: 'Proprietary or Undetectable',
        y: 221,
        drilldown: null
      }]
    };
    this.updateChart(config);
  }

  render() {
    let btnStyle = {height: '25px', margin: '10px'};
    return (
      <div style={{textAlign: 'center'}}>
        {this.state.config ?
          <div>
            <ReactHighcharts config={this.state.config} neverReflow={true} ref="chart"/>
            <button style={btnStyle} type="button" onClick={this.showFirstData} disabled={this.state.isInDrillDown}>
              First Data
            </button>
            <button style={btnStyle} type="button" onClick={this.showSecondData} disabled={this.state.isInDrillDown}>
              Second Data
            </button>
            <button style={btnStyle} type="button" onClick={this.showThirdData} disabled={this.state.isInDrillDown}>
              Third Data
            </button>
          </div>
          :
          <span>Loading...</span>
        }
      </div>
    )
  }
}

export default App;