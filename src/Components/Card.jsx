import React from 'react';

export default function Card({ id, cash, credit, isActive }) {

  return (
    <div className="ui card">
      <div className="content">
        <span className="header" href="#">ID</span>
        <div className="meta">
          <span>{id}</span>
        </div>
        <span className="header" href="#">Details</span>
        <div className="meta">
          <span><strong>cash: </strong> {cash}</span>
          <span><strong>credit: </strong>{credit}</span>
          <span><strong>active: </strong>{isActive}</span>
        </div>
      </div>
    </div>
  )
}