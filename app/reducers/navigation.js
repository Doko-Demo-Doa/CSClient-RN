/**
 * @flow
 */
"use strict";
import { Types } from "../actions/types-navigation";
import Immutable from "seamless-immutable";
import {
  NavigationActions,
  addNavigationHelpers,
  StackNavigator
} from "react-navigation";
import AppNavigator from "../navigations/app-navigator";

const initialNavState = Immutable({
  index: 0,
  routes: [{ key: "Init", routeName: "HomeDrawer" }]
});

export const nav = (state, action) => {
  switch (action.type) {
    case "Home":
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "HomeDrawer" }),
        state
      );
    case "Authentication":
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Authentication" }),
        state
      );
    case "Profile":
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Profile" }),
        state
      );
    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
};