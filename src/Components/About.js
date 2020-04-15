import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Shav Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2></h2>

            <p>I have experience working with HTML, SASS/CSS, Javascript/React.JS(which
            this website was created with), php, mySQL, Laravel/Composer. I am also familiar with Git tools, 
            and package managers such as NPM and Yarn. I have experience building responsive websites using modern design practices.
            </p>
            <div className="row">
               <div className="columns contact-details">
                 
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button">
                        <i className="fa fa-download"></i>View Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
