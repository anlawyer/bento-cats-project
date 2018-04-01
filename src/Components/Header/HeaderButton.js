import React from 'react';

const HeaderButton = props => (
  <div className='level-item has-text-centered'>
    <div>
      <button className='button is-large' {...props}>{props.children}</button>
    </div>
  </div>
);

export default HeaderButton;