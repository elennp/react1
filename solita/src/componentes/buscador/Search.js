import React from 'react';
import '../buscador/search.css';


export default function Search() {
  return (
    <div>
     <div className="box">
  <div className="con">
      <span className="icon"><i class="fa fa-search"></i></span>
      <input type="search" id="search" placeholder="Search..." />
  </div>
</div>
    </div>
  )
}
