import React from 'react';

class ResortStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: "hidden" };
    this.toggleStats = this.toggleStats.bind(this);
  }

  toggleStats() {
    let css = (this.state.display === "hidden" ? "stats-row" : "hidden");
    this.setState({ display: css });
  }

  renderStat(title, value, unit) {
    return (
      <ul className="stat-col">
        <li className="stat-title">{title}</li>
        <li>{value} {unit}</li>
      </ul>
    );
  }

  render() {
    const resort = this.props.resort;
    return(
      <div>
        <a className="toggle-stats" onClick={this.toggleStats}>
          Click here to show/hide additional stats</a>
        <div className={this.state.display}>
          {this.renderStat('Skiable Terrain', resort.skiable_acres, 'acres')}
          {this.renderStat('Peak Elevation', resort.peak_elevation, 'feet')}
          {this.renderStat('Vertical Drop', resort.vertical_drop, 'feet')}
          {this.renderStat('Average Snowfall (annual)',
            resort.avg_snowfall, 'feet')}
          {this.renderStat('Longest Run', resort.longest_run, 'miles')}
          {this.renderStat('Number of Lifts', resort.num_lifts)}
        </div>
      </div>
    );
  }
}

export default ResortStats;
