import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

it('shows a comment box',()=>{
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  //Looks inside the div
  // and checks to see if the CommentBos is in there
  //console.log('[App.test.js] -- =', div.innerHTML);
  expect(div.innerHTML).toContain('Comment Box');

  ReactDOM.unmountComponentAtNode(div);
});