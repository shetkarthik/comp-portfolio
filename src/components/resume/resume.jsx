import React from 'react'
import * as images from "../../assets/data/resume/index";


export const Resume = ()=>{

return (<>
 <div className='container mt-5 pt-5'>

 <h1 className='text-center display-5 border project_letter_spaced'>RESUME</h1>
      <div className='container'>
         <div className='row'>
            <div className='border p-2 border-dark col-lg-4 col-md-4 col-sm-12 col-12'>
            <img src={images.image1} className='img-fluid'/>
            </div>
            <div className='border p-2 border-dark col-lg-4 col-md-4 col-sm-12 col-12'>
            <img src={images.image2} className='img-fluid'/>
            </div>
            <div className='border p-2 border-dark col-lg-4 col-md-4 col-sm-12 col-12'>
            <img src={images.image3} className='img-fluid'/>
            </div>
          
        
        </div>
      </div>
    
    </div>
</>);
}





