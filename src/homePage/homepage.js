import React from "react";
import { connect  } from "react-redux";
import { Box } from "./box";
import _ from "lodash";
import { choseNumber } from "./actions";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  header = () => {
    const chosenNumbers = _.get(this.props, "state" , []);
    const chosenNumToShow = chosenNumbers.map((n, index) => {
      return <div style={styles.chosenNum}>{n}</div>;
    });
    return (
      <div style={{ height: 300, display: "flex", flexDirection: "row" }}>
        <div>
          <div style={styles.btn} onClick={this.props.onClick}>
            {" "}
            click here
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {chosenNumToShow}
        </div>
      </div>
    );
  };


  renderBoxs = () => {
    const numOfBoxs = [1, 2, 3, 4, 5, 6];
    const bla = numOfBoxs.map((box, index) => {
      return <Box key={index} />;
    });
    return bla;
  };
  render() {
    console.log(this.props.state);
    return (
      <div>
        {this.header()}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.renderBoxs()}
        </div>
      </div>
    );
  }
}

const styles = {
  btn: {
    border: "solid",
    width: 50,
    height: 50,
    backgroundColor: "blue"
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
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(choseNumber())
})

export const HomePageWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
