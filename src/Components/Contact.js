import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
   
    }


    

    return (
      <section id="contact">
{/* 
         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

            <a href="https://sanson-seo.com" className="button">
                        <i></i>S. Anson Developments</a>

         </div>

         <div className="row">
            <div className="eight columns">

           <div id="message-warning"> Error</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

				   </div>
            </aside>
      </div> */}
   </section>
    );
  }
}

export default Contact;
