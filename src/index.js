import React from 'react';
import Gauge from 'gauge-animated';

export default class ReactGauge extends React.Component {
  componentDidMount() {
    this.gauge = new Gauge(this.div, this.props);
    this.gauge.setTarget(this.props.value);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.value !== this.props.value) this.gauge.setTarget(nextProps.value);
    return false;
  }

  render() {
    return (
      <div ref={c => this.div = c}></div>
    );
  }
}
