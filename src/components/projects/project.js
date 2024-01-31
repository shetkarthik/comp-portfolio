import React from 'react'
import "../projects/project.css";
import * as images from "../../assets/data/trendvibe/index.js";
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div>
      <div className='container mt-5'>

        <h1 className='text-center display-5 pt-5 border project_letter_spaced'>PROJECTS</h1>
        <div className='container'>
          <hr />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-12 col-sm-12 col-12'>
              <div class="card mb-3" styles="width: 18rem;">
              <i class="fa-brands fa-wolf-pack-battalion display-2 d-block mb-2 m-auto mt-5"></i>
                <div class="card-body">
                  <h5 class="project_card_title">Trend-Vibe</h5>
                  <p class="project_font text-center">A dynamic platform merging fashion blogging and social media, enabling users to share trends, insights, and engage in a vibrant community</p>
                    
                  <Link className='btn p-0 d-block m-auto bg-light text-dark w-50 text-uppercase project_font border project_letter_spaced' to="/trendvibe">Visit</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-12 col-sm-12 col-12'>
              <div class="card mb-3" styles="width: 18rem;">
            
              <i class="fa-solid fa-money-bill-transfer display-2 d-block mb-2 m-auto mt-5"></i>
                <div class="card-body">
                  <h5 class="project_card_title">Fund-ex</h5>
                  <p class="project_font text-center">Fund-ex is an all-in-one loan application platform with client and server-side rendering. Apply for 4 different kinds of loans seamlessly.</p>
                  <Link className='btn p-0 d-block m-auto bg-light text-dark w-50 text-uppercase project_font border project_letter_spaced' to="/fundex">Visit</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-12 col-sm-12 col-12'>
              <div class="card mb-3" styles="width: 18rem;">
           
              <i class="fa-solid fa-pills display-2 d-block mb-2 m-auto mt-5"></i>
                <div class="card-body">
                  <h5 class="project_card_title">Cure-Hub</h5>
                  <p class="project_font text-center">
                   Pharmacy management with server-side rendering.Effortlessely handle inventory, prescriptions, sales, and customer interactions</p>
                  <Link className='d-block m-auto bg-light text-dark w-50 text-uppercase btn project_font border project_letter_spaced p-0' to="/curehub">Visit</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-12 col-sm-12 col-12'>
              <div class="card mb-3" styles="width: 18rem;">
              <i class="fa-solid fa-bag-shopping display-2 d-block mb-2 m-auto mt-5"></i>
                <div class="card-body">
                  <h5 class="project_card_title">ECMA</h5>
                  <p class="project_font text-center">ECMA blends style and functionality, offering a seamless experience for managing and exploring exquisite luxury handbags.</p>
                  <Link className='d-block m-auto bg-light text-dark w-50 text-uppercase btn project_font border project_letter_spaced p-0' to="/ecma">Visit</Link>
                </div>
              </div>
            </div>
        
          </div>


        </div>



      </div>

    </div>
  );
}

export default Projects