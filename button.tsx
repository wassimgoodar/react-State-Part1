import * as React from 'react';

function Button({Text,onClicked}) {

  const handleOnClick = () =>{
     onClicked();
  };
  
  return (
    <div>
      <button onClick={handleOnClick}> {Text}</button>
    </div>
  );
}
export default Button;
