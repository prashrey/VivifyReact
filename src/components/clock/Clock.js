import React from 'react';

class Clock extends React.Component {
  
  constructor(props) {
    super(props);                           // Mandatory!!! similar to super constructor call in java
    this.state = {date: new Date()};        // state initialization
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000); // call update function(tick()) every n(ms) interval
  }

  componentWillUnmount() {
    clearInterval(this.timerID);            // clear timer on element removed
  }

  tick() {
    this.setState({date: new Date()});      // update state variable
  }

  convMonth(mth) {
    switch(mth) {
      case 1:
        return "January";
        break;
      case 2:
        return "Feburary";
        break;
      case 3:
        return "March";
        break;
      case 4:
        return "April";
        break;
      case 5:
        return "May";
        break;
      case 6:
        return "June";
        break;
      case 7:
        return "July";
        break;
      case 8:
        return "August";
        break;
      case 9:
        return "September";
        break;
      case 10:
        return "October";
        break;
      case 11:
        return "November";
        break;
      case 12:
        return "December";
        break;
      default:
        return "";
    }
  }

  render() {
    let month;
    month = this.convMonth(this.state.date.getMonth()+1);
    return (
      <div className="time">
        <span>{this.state.date.getDate()} {month} {this.state.date.getFullYear()}</span>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;