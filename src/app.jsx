
/*
 * Boilerplate JSX
 * Will be transformed to JS using Babel
 * Webpack helps us with this by allowing us to write loaders
 */

import React from 'react';

// set the style for the entire app
import styles from './styles.scss';

// webpack uses this to find a file called main.js and imports it
import Main from './component/main/main.js';

React.render(
  <Main />,
  document.body
);
