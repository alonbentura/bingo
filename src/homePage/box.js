import React from "react";
import { connect } from "react-redux";

export class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getRandomNumbers();
  }

  getRandomNumbers() {
    let numbers = []
    for (let i = 0 ;i <30; i++) {
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      if (numbers.indexOf(randomNumber) === -1) {
        numbers.push(randomNumber);
      }
    }

    this.setState({
      data: numbers
    });
  }

  checkIfExist = () => {
    for (let i = 0; i < this.state.data.length; i++) {
      let numbersToRemove = [...this.state.data];
      for (let i = 0; i < this.props.state.length; i++) {
        var index = numbersToRemove.indexOf(this.props.state[i]);
      }
      if (index > -1) {
        numbersToRemove.splice(index, 1);
        this.setState({ data: numbersToRemove });
      }
    }
  };

  firstRow = () => {
    const row = this.state.data.slice(0, 10);
    const mappedTD = row.map((td, index) => {
      return (
        <td key={index} style={{ fontSize: 20 }}>
          {td}
        </td>
      );
    });
    return <tr style={styles.row}>{mappedTD}</tr>;
  };
  secondRow = () => {
    const row = this.state.data.slice(10, 20);
    const mappedTD = row.map((td, index) => {
      return (
        <td key={index} style={{ fontSize: 20 }}>
          {td}
        </td>
      );
    });
    return <tr style={styles.row}>{mappedTD}</tr>;
  };

  thirdRow = () => {
    const row = this.state.data.slice(20, 30);
    const mappedTD = row.map((td, index) => {
      return (
        <td key={index} style={{ fontSize: 20 }}>
          {td}
        </td>
      );
    });
    return <tr style={styles.row}>{mappedTD}</tr>;
  };

  renderTableData() {
    return (
      <div>
        {this.firstRow()}
        {this.secondRow()}
        {this.thirdRow()}
      </div>
    );
  }

  render() {
    this.checkIfExist();
    return (

      <div style={styles.blockContainer}>
      {this.state.data.length === 0 ? <div>Bingo!!!</div> : null}
      
        <table style={{ width: "inherit" }}>
        <tbody>{this.renderTableData()}</tbody>
        </table>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  };
};

export const BoxWithRedux = connect(mapStateToProps)(Box);

const styles = {
  blockContainer: {
    width: 350,
    height: 300,
    border: "solid",
    display: "flex",
    alignItems: "center",
    margin: 5,
    justifyContent: "space-between"
  },
  row: {
    justifyContent: "space-between",
    display: "flex",
    width: "inherit"
  }
};
