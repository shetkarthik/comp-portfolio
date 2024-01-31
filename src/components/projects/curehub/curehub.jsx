import React from 'react'
import * as images from "../../../assets/data/curehub/index.js";


export const CureHub = ()=>{
    const data = require("../../../assets/data/curehub/curehubdata.json"); // Replace with your actual file path
    const { curehub, features } = data;
return (<>
 <div className='container mt-5 pt-5'>
      <h1 className='text-center fw-bold'>{curehub.pname}</h1>
      <div className='d-flex justify-content-center'>
      <a href='https://github.com/shetkarthik/Pharmacy-Management-System.git' className='fw-bold' target='_blank'>
      <i class="fa-brands fa-github fs-3"></i>Github</a>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <div class="badge text-bg-primary me-2 fs-6">C#</div>
        <div class="badge text-bg-success me-2 fs-6">.NET-CORE</div>
        <div class="badge text-bg-danger me-2 fs-6">SQL</div>
        <div class="badge text-bg-info me-2 fs-6">HTML</div>
        <div class="badge text-bg-secondary me-2 fs-6">CSS</div>
        <div class="badge text-bg-warning me-2 fs-6">MVC</div>
      </div>
      <hr/>
      <p className='text-center'>{curehub.pdesc}</p>
      <h5>Features : </h5>
      <ul>
        {features.keyfeature && <li>{features.keyfeature}</li>}
        {features.keyfeature2 && <li>{features.keyfeature2}</li>}
        {features.keyfeature3 && <li>{features.keyfeature3}</li>}
        {features.keyfeature4 && <li>{features.keyfeature4}</li>}
      </ul>
      <img src={images.image6} className='img-fluid'/>
      <div className='container'>
         <div className='row'>
            
            
            <div className='border p-2 border-dark col-lg-4 col-md-4 col-sm-12 col-12'>
            <img src={images.image7} className='img-fluid'/>
            </div>
            <div className='border p-2 border-dark col-lg-4 col-md-4 col-sm-12 col-12'>
            <img src={images.image8} className='img-fluid'/>
            </div>
            <div className='border p-2 border-dark col-lg-4 col-md-4 col-sm-12 col-12'>
            <img src={images.image9} className='img-fluid'/>
            </div>
            <div className='border p-2 border-dark col-lg-4 col-md-4 col-sm-12 col-12'>
            <img src={images.image10} className='img-fluid'/>
            </div>
            <div className='border p-2 border-dark col-lg-4 col-md-4 col-sm-12 col-12'>
            <img src={images.image11} className='img-fluid'/>
            </div>
        
        </div>
      </div>
    
    </div>
</>);
}





