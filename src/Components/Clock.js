import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  componentDidMount = () => {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  };

  render() {
    const { date } = this.state;
    return (
      <div>
        <p>
          {`${date.toLocaleString("en-GB", {
            timeZone: this.props.timeZone,
          })}`}
        </p>
      </div>
    );
  }
}

export default Clock;
