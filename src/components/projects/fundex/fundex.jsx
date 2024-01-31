import React, { useEffect } from 'react'
import * as images from "../../../assets/data/fundex/index";


export const FundEx = ()=>{

const data = require("../../../assets/data/fundex/fundex.json"); // Replace with your actual file path
const { fundex, features } = data;

return (
    <div className='container mt-5 pt-5'>
      <h1 className='text-center fw-bold'>{fundex.pname}</h1>
      <div className='d-flex justify-content-center'>
      <a href='https://github.com/shetkarthik/Alpha_LoanApp.git' className='fw-bold' target='_blank'>
      <i class="fa-brands fa-github fs-3"></i>Github</a>
    
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <div className="badge text-bg-primary me-2 fs-6">C#</div>
        <div className="badge text-bg-danger me-2 fs-6">Angular</div>
        <div className="badge text-bg-success me-2 fs-6">.NET-CORE</div>
        <div className="badge text-bg-warning me-2 fs-6">.NET-WebApi</div>
        <div className="badge text-bg-info me-2 fs-6">SQL</div>
     
      </div>
      <div className='d-flex justify-content-center mt-3'>
 
      <a href='https://docs.google.com/document/d/1n1z8jesSdGOQtakM8ceI-oRC1Ucuc2qB/edit?usp=drive_link&ouid=117327760669061077999&rtpof=true&sd=true' className='fw-bold' target='_blank'>
      <i class="fa-regular fa-file fs-3"></i>Docs</a>
      </div>
      <hr/>
      <p className='text-center'>{fundex.pdesc}</p>
      <h5>Features : </h5>
      <ul>
        {features.keyfeature && <li>{features.keyfeature}</li>}
        {features.keyfeature2 && <li>{features.keyfeature2}</li>}
        {features.keyfeature3 && <li>{features.keyfeature3}</li>}
        {features.keyfeature4 && <li>{features.keyfeature4}</li>}
      </ul>
      <img src={images.image1} className='img-fluid'/>
      <div className='container'>
         <div className='row'>
            <div className='col-lg-6 col-md-4 col-sm-12 col-12'>
            <img src={images.image2} className='img-fluid'/>
            </div>
            <div className='col-lg-6 col-md-4 col-sm-12 col-12'>
            <img src={images.image3} className='img-fluid'/>
            </div>
            <div className='col-lg-6 col-md-4 col-sm-12 col-12'>
            <img src={images.image4} className='img-fluid'/>
            </div>
            <div className='col-lg-6 col-md-4 col-sm-12 col-12'>
            <img src={images.image5} className='img-fluid'/>
            </div>
            <div className='col-lg-6 col-md-4 col-sm-12 col-12'>
            <img src={images.image6} className='img-fluid'/>
            </div>
        </div>
      </div>    
    
    </div>
  );
}

