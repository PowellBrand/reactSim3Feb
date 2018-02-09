import React, { Component } from 'react';


class Dashboard extends Component {
  render() {
    return (
      <div className="mainApp">
       <div className="topContainer">
           <div className="profile">
               <div className="imageCont"></div>
               <p>Brandon Powell</p>
               <button className="editBtn">Edit Profile</button>
           </div>
           <div className="welcomeMsg">
               <p className="welcomeP">Welome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make. ThisIsAReallyLongWordThatHasNoSpacingtoTestTheWord-BreakCapabilitiesOddilyEnoughTheFirstLineSplitOnThe-OfWordBreakSoIWontPutAnyMore. </p>
           </div>

       </div>
      </div>
    );
  }
}

export default Dashboard;