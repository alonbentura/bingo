import React from "react";
import { connect  } from "react-redux";

export class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const numOfLoops = Math.floor(30);
    let numbers = [];
    for (let i = 0; i < numOfLoops; i++) {
      const number = Math.floor(Math.random() * Math.floor(100));
      numbers.push(number);
    }
    this.setState({
      data: numbers
    });
  }

  checkIfExist =() =>{
    
  }

  firstRow = () => {
    const row = this.state.data.slice(0, 10);
    const mappedTD = row.map((td, index) => {
      return (
        <td key={index} style={{ fontSize: 20 }}>
          {td}
        </td>
      );
    });
    return <tr>{mappedTD}</tr>;
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
    return <tr>{mappedTD}</tr>;
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
    return <tr>{mappedTD}</tr>;
  };

  renderTableData() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        {this.firstRow()}
        {this.secondRow()}
        {this.thirdRow()}
      </div>
    );
  }

  render() {
    return (
      <div style={styles.blockContainer}>
        <table style={{ width: 200, height: 200 }}>
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

export const BoxWithRedux = connect(
  mapStateToProps,
)(Box);


const styles = {
  blockContainer: {
    width: 300,
    height: 300,
    border: "solid",
    margin: 5
  }
};
