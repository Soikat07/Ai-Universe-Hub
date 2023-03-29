import React from 'react';

const Button = ({children}) => {
  
  return (
    <div className='text-center mt-0'>
      <button className="btn btn-info">{children}</button>
    </div>
  );
};

export default Button;