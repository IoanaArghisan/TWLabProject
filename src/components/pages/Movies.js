import React from 'react';
import '../../App.css';
import Banner from './Banner';
import RowPost from './RowPost';
import {trending, horror, action, comedy, romance,documentaries} from '../../urls';

function Movies() {
  return (
    <div className="App">
      <Banner/>
      <RowPost url={trending} title='Netflix Originals' />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default Movies;
