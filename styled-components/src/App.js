import React from 'react';

import SearchSelect from './SearchSelect';
import SearchSelectBasic from './SearchSelectBasic';

const App = () => (
  <div>
    <h1>A Styled Component <strong>Show</strong> and <strong>Tell</strong></h1>

    <p>"Normal" HTML with "normal" CSS</p>

    <SearchSelectBasic />

    <p>Styled Components!</p>

    <SearchSelect />
  </div>
);

export default App;
