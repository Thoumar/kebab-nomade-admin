import * as React from "react";
import { Admin, Resource } from 'react-admin';

import {
  RestaurantList,
  RestaurantEdit,
  RestaurantCreate,
  RestaurantShow,
  RestaurantIcon
} from './data/restaurants';

import {
  ArticleList,
  ArticleEdit,
  ArticleCreate,
  ArticleShow,
  ArticleIcon
} from './data/articles';

import {
  FirebaseDataProvider
} from 'react-admin-firebase';

const config = {
    apiKey: "AIzaSyC7W-QmTBa85Z6Sm2mvNvja4V2fKwJv8Hw",
    authDomain: "kebab-nomade.firebaseapp.com",
    databaseURL: "https://kebab-nomade.firebaseio.com",
    projectId: "kebab-nomade",
    storageBucket: "kebab-nomade.appspot.com",
    messagingSenderId: "967372246568",
};

const options = {};
const dataProvider = FirebaseDataProvider(config, options);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="articles"
      icon={ArticleIcon}
      list={ArticleList}
      show={ArticleShow}
      create={ArticleCreate}
      edit={ArticleEdit} />
    <Resource
      name="restaurants"
      icon={RestaurantIcon}
      list={RestaurantList}
      show={RestaurantShow}
      create={RestaurantCreate}
      edit={RestaurantEdit} />
  </Admin>
);
export default App;