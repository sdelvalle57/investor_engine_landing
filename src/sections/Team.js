import React from 'react'
import Anonymus from '../images/profile-tom.jpg';
import Tom from '../images/profile-tom.jpg';
import Santiago from '../images/profile-santiago.jpg';
import Eduardo from '../images/profile-eduardo.jpeg'

export default function Team() {
  return (
    <React.Fragment>
      <h3 className="font-weight-bold text-indigo-lighten-1 mb-5">Team</h3>
      <div className="row">

        <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img src={Tom} class="rounded-circle z-depth-1" alt="Sample avatar" />
          </div>
          <a href="https://www.linkedin.com/in/thomas-miller-3895833b/" target="_blank"><h5 class="font-weight-bold mt-4 mb-3">Thomas Miller</h5></a>
          
          <p class="">Founder</p>

          
        </div>

        <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img src={Santiago} class="rounded-circle z-depth-1" alt="Sample avatar" />
          </div>
          <a href="https://www.linkedin.com/in/santiago-del-valle-96654969/" target="_blank"><h5 class="font-weight-bold mt-4 mb-3">Santiago Del Valle</h5></a>
          
          <p class="">Co-Founder</p>
        </div>

        <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img src={Eduardo} class="rounded-circle z-depth-1" alt="Sample avatar" />
          </div>
          <a href="https://www.linkedin.com/in/itdirectoreduardomoreira/" target="_blank"><h5 class="font-weight-bold mt-4 mb-3">Eduardo Moreira</h5></a>
          <p class="">Co-Founder</p>
        </div>


      </div>

      <br />
      <br />
      <br />
      <br />
      <br />


      {/* <h3 className="font-weight-bold text-indigo-lighten-1 mb-5">Advisors</h3>

      <div className="row">

        

        <div className="col-lg-6 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img src={Anonymus} class="rounded-circle z-depth-1" alt="Sample avatar" />
          </div>
          <h5 class="font-weight-bold mt-4 mb-3">Sam Pospi</h5>
        </div>

        <div className="col-lg-6 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img src={Anonymus} class="rounded-circle z-depth-1" alt="Sample avatar" />
          </div>
          <h5 class="font-weight-bold mt-4 mb-3">Philip Beadle</h5>
        </div>

        

      </div> */}

      <br />
      <br />




      {/* <div className="row">

        <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img src={Anonymus} class="rounded-circle z-depth-1" alt="Sample avatar" />
          </div>
          <h5 class="font-weight-bold mt-4 mb-3">Thomas Miller</h5>
        </div>

        <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img src={Anonymus} class="rounded-circle z-depth-1" alt="Sample avatar" />
          </div>
          <h5 class="font-weight-bold mt-4 mb-3">Santiago Del Valle</h5>
        </div>

        <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img src={Anonymus} class="rounded-circle z-depth-1" alt="Sample avatar" />
          </div>
          <h5 class="font-weight-bold mt-4 mb-3">Eduardo Moreira</h5>
        </div>


      </div> */}
    </React.Fragment>
  )
}