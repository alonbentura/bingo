import React from "react";
import { connect } from "react-redux";
import { BoxWithRedux } from "./box";
import _ from "lodash";
import { choseNumber } from "./actions";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  header = () => {
    const chosenNumbers = _.get(this.props, "state", []);
    const chosenNumToShow = chosenNumbers.map((n, index) => {
      return <div style={styles.chosenNum}>{n}</div>;
    });
    return (
      <div style={styles.headerContainer}>
        <div>
          <div style={styles.btn} onClick={this.onClick}>
            Click here
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {chosenNumToShow}
        </div>
      </div>
    );
  };

  onClick = () => {
    if (this.props.state.length < 100) {
      var r = Math.floor(Math.random() * 100) + 1;
      if (this.props.state.indexOf(r) === -1) {
        return this.props.onClick("choose", r);
      }
    }
  };

  renderBoxes = () => {
    const numOfBoxes = [1 , 2 , 3 ,4 ,5, 6];
    const mappedBoxes = numOfBoxes.map((box, index) => {
      return <BoxWithRedux key={index} />;
    });
    return mappedBoxes;
  };
  render() {
    console.log('redux', this.props.state);
    return (
      <div>
        {this.header()}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.renderBoxes()}
        </div>
      </div>
    );
  }
}

const styles = {
  btn: {
    border: "solid",
    width: 200,
    height: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    display: "flex"
  },
  chosenNum: {
    border: "solid",
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  headerContainer: {
    height: "100%",
    width: 500,
    display: "flex",
    flexWrap: "wrap"
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => ({
  onClick: (type, r) => dispatch(choseNumber(type, r))
});

export const HomePageWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
