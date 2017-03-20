'use strict';

import React, {Component} from "react";
import {View, Text} from "react-native";
import {Container, Header} from "native-base";
import {connect} from "react-redux";
import Home from "../components/home";

class HomeContainer extends Component {
  render() {
    return(
      <Container>
        <Header/>
        <View {...this.props}>
          <Text>sadasd</Text>
          <Text>sadasd</Text>
          <Text>sadasd</Text>
          <Text>sadasd</Text>
          <Text>sadasd</Text>
        </View>
      </Container>
    );
  }
}

/**
 * If ownProps is specified as a second argument, its value will be the props passed to your component,
 * and mapStateToProps will be additionally re-invoked whenever the component receives new props.
 *
 * The result of mapStateToProps must be a plain object, which will be merged into component's props.
 */
function mapStateToProps(state /*, [ownProps] */) {
  const {activeTab, showSearchBar, searchKeyword} = state;

  return {
    activeTab,
    showSearchBar,
    searchKeyword
  }
}

export default connect(mapStateToProps)(HomeContainer);