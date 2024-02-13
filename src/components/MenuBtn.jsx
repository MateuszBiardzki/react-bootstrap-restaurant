import React from 'react';
import { Link } from 'react-router-dom';

const MenuBtn = () => {
  return (
    <div>
        <Link to="/menu">
            <button type='button' className=' my-5 btn btn-success btn-lg'>Our Menu</button>
        </Link>
    </div>
  );
};

export default MenuBtn;