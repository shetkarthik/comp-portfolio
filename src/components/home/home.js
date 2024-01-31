import React, { useState, useEffect } from 'react';
import "./home.css"
import Projects from '../projects/project';
import homeimage from "../../assets/images/home_image.jpg"


const Home = () => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 1500);

    return () => clearInterval(intervalId); // Cleanup on component unmount

  }, []);

  return (
    <div>
      <div className='container-fluid mt-5 home_width  h-75'>

        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12 col-12 border-right-1 mt-5'>
            <div className='profile_text m-auto text-center mt-5 d-flex justify-content-center flex-column h-75'>
              <div className='container'>
                <h1 className='display-4'>Hi,</h1>
                <h1 className='display-5'>I am Karthik Shet</h1>
                <div className=''>
                  <span class="badge m-2 fs-6 text-bg-primary">MER (A) N</span>
                  <span class="badge m-2 fs-6 text-bg-success">Andriod</span>
                  <span class="badge m-2 fs-6 text-bg-danger">IOS</span>
             
                  <span class="badge m-2 fs-6 text-bg-warning">Web</span>
                </div>

                <p className='mt-4'>
                  I am a skilled developer with expertise in various technologies and programming languages.

                </p>



              </div>

            </div>

          </div>
          <div className='col-lg-6 col-md-12 col-sm-12 col-12 d-block m-auto'>
            <img src={homeimage} className='img-fluid' />
          </div>

        </div>

        <div className='container'>
          <div className='row mt-5'>
            <h1 className='text-center profile_spaced fw-bold m-3'>TECH-STACK</h1>
            <div className='col-lg-12 col-md-12 col-sm-12 col-12 h-50'>

              <div className='display-3'>
                <div className='container d-flex justify-content-around text-center icon_margin'>
                  <i class="fa-brands fa-angular text-danger">
                    <div className='tech_stack_name fs-6 font_poppin fw-bold'>
                      Angular
                    </div>
                  </i>
                  <i class="fa-brands fa-react text-primary">
                    <div className='tech_stack_name fs-6 font_poppin fw-bold'>
                      React
                    </div>
                  </i>
                  <i class="fa-brands fa-html5 text-info">
                    <div className='tech_stack_name fs-6 font_poppin fw-bold'>
                      HTML
                    </div>
                  </i>
                  <i class="fa-brands fa-css3 text-primary">
                    <div className='tech_stack_name fs-6 font_poppin fw-bold'>
                      CSS
                    </div>
                  </i>
                  <i class="fa-brands fa-square-js text-success">
                    <div className='tech_stack_name fs-6 font_poppin fw-bold'>
                      Javascript
                    </div>
                  </i>
                  <div>
                    <img src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/3269889/flutter-icon-md.png' className='icon_width'>
                    </img>
                    <div className='tech_stack_name fs-6 font_poppin fw-bold'>
                      Flutter
                    </div>
                  </div>
                </div>
              </div>

            </div>


            <div className='col-lg-12 col-md-12 col-sm-12 col-12 h-50'>

              <div className='display-3'>
                <div className='container d-flex justify-content-evenly text-center icon_margin'>
                  <i class="fa-brands fa-node-js text-success">
                    <div className='tech_stack_name fs-6 font_poppin fw-bold'>
                      Node-JS
                    </div>
                  </i>
                  <i class="fa-solid fa-database text-warning">
                    <div className='tech_stack_name fs-6 font_poppin fw-bold'>
                      Sql server
                    </div>
                  </i>
                  <i class="fa fa-table text-muted">
                    <div className='tech_stack_name fs-6 font_poppin fw-bold'>
                      Mongo-DB
                    </div>
                  </i>
                  <i class="fa-solid fa-server text-primary">
                    <div className='tech_stack_name fs-6 font_poppin fw-bold'>
                      .NET CORE
                    </div>
                  </i>
                </div>
              </div>

            </div>
          </div>
        </div>


        <section id='skills'>

          <div className='container'>
            <div className='row mt-5'>
              <h1 className='text-center profile_spaced fw-bold m-3'>SKILLS</h1>
              <div className='col-lg-12 col-md-12 col-sm-12 col-12 skill_height'>

             
<ol className='list-group text-center skills_container_width '>
    <li className='list-group-item'>Proficient in Front-End Development, with expertise in crafting engaging and accessible user interfaces using HTML, CSS, and JavaScript.</li>
    <li className='list-group-item'>Experienced in Back-End Development utilizing Node.js,.NET MVC and Express, ensuring seamless server-side functionality and robust web applications.</li>
    <li className='list-group-item'>Skilled in Database Management, proficiently working with MongoDB and MySQL to organize and optimize data storage and retrieval processes.</li>
    <li className='list-group-item'>Familiar with React.js and other modern frameworks, employing cutting-edge technologies to build dynamic and interactive web applications.</li>
    <li className='list-group-item'>Adept at Responsive Web Design, ensuring a smooth and consistent user experience across various devices and screen sizes.</li>
</ol>

              </div>



            </div>
          </div>

        </section>




      </div>
    </div>

  );
}

export default Home;


