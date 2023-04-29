import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div>
      <h2>Our Terms and Conditions</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum consequatur nulla officia ipsa sed reiciendis possimus est repudiandae nihil laudantium.</p>
      <p>Go back to <Link to='/register'>Register</Link></p>
    </div>
  );
};

export default Terms;