import React from "react";
import { connect } from "react-redux";
import { boxChosenNumbers, deleteFromBoard } from "./actions";
import _ from "lodash";


export class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.getRandomNumbers();
  }

  getRandomNumbers() {
    let numbers = []
    while (numbers.length < 30) {
      let randomNumber = Math.floor(Math.random() * 90) + 1;
      if (numbers.indexOf(randomNumber) === -1) {
        numbers.push(randomNumber);

      }
    }
    this.props.choseBoxNumbers('boxNumbers', numbers)
  }

  checkIfExist = () => {
    let i = 0
    while (i < this.props.state.boxNumbers.length) {
      let numbersToRemove = [...this.props.state.boxNumbers];
      for (let i = 0; i < this.props.state.chosenNumbers.length; i++) {
        var index = numbersToRemove.indexOf(this.props.state.chosenNumbers[i]);
      }
      if (index > -1) {
        this.props.deleteFromBoard('deleteFromBoard', numbersToRemove)
        numbersToRemove.splice(index, 1);
        this.setState({ data: numbersToRemove });
      }
      i++
    }
  };

  firstRow = () => {
    const row = _.get(this.props, 'state.boxNumbers').slice(0, 10);
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
    const row = this.props.state.boxNumbers.slice(10, 20);
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
    const row = this.props.state.boxNumbers.slice(20, 30);
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
        {this.props.state.boxNumbers.length === 0 ? <div>Bingo!!!</div> : null}

        <table style={{ width: "inherit" }}>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => ({
  choseBoxNumbers: (type, numbers) => dispatch(boxChosenNumbers(type, numbers)),
  deleteFromBoard: (type, newBoard) => dispatch(deleteFromBoard(type, newBoard))
});

export const BoxWithRedux = connect(mapStateToProps, mapDispatchToProps)(Box);

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
