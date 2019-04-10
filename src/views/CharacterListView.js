import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import { CharacterList } from "../components";
import Loader from "react-loader-spinner";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props);
    if (this.props.fetching) {
      <Loader type="Bars" color="green" height={80} width={80} />;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
        {this.props.error && <p className="error"> {this.props.error} </p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.isFetching,
  error: state.charsReducer.error
});
export default connect(
  mapStateToProps,
  {
    getData
  }
)(CharacterListView);
