import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import { CharacterList } from "../components";
import Loader from "react-loader-spinner";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props);

    return (
      <div className="CharactersList_wrapper">
        {this.props.isFetching && (
          <div className="loader">
            <Loader s type="Grid" color="black" height={200} width={200} />
          </div>
        )}
        <h1> Star Wars Characters</h1>
        <CharacterList characters={this.props.characters} />
        {this.props.error && <p className="error"> {this.props.error} </p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.chars.characters,
  isFetching: state.chars.isFetching,
  error: state.chars.error
});
export default connect(
  mapStateToProps,
  {
    getData
  }
)(CharacterListView);
