import React from 'react';
import "./loader.scss";
const Loader = props => (
  <div className="d-flex" style={{height:props.height}}>
    <div className="loader default default-01">
      <div className='loader-container'>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball'></div>
      </div>
    </div>
  </div>
);

export default Loader;
