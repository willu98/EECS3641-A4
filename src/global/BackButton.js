import React from 'react';

import './BackButton.css';

const BackButton = props => {
  return <button className={"back-button"} onClick={()=>{props.history.goBack();}}>Back</button>;
};

export default BackButton;
