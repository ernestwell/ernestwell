// import React from 'react';
// import './services.css';

// const Service = () => {
//   return (
//     <section id="services" className="services">
//       <div className="container">
//         <h2 className="section-title">Our Services</h2>
//         <div className="services-list">
//           {/* First Row of Services */}
//           <div className="service-item">
//             <i className="service-icon fa fa-laptop-code"></i>
//             <h3 className="service-title">Web Development</h3>
//             <p className="service-description">Build responsive, high-performing websites tailored to your needs.</p>
//           </div>
//           <div className="service-item">
//             <i className="service-icon fa fa-mobile-alt"></i>
//             <h3 className="service-title">Mobile Apps Development</h3>
//             <p className="service-description">Develop user-friendly mobile apps for iOS and Android platforms.</p>
//           </div>
//           <div className="service-item">
//             <i className="service-icon fa fa-cogs"></i>
//             <h3 className="service-title">ERP Solutions</h3>
//             <p className="service-description">Optimize business operations with our ERP system integrations.</p>
//           </div>
//           <div className="service-item">
//             <i className="service-icon fa fa-code"></i>
//             <h3 className="service-title">Custom Software</h3>
//             <p className="service-description">Create custom software solutions to meet specific business needs.</p>
//           </div>

//           {/* Second Row of Services */}
//           <div className="service-item">
//             <i className="service-icon fa fa-bullhorn"></i>
//             <h3 className="service-title">Digital Marketing</h3>
//             <p className="service-description">Reach your audience effectively through digital marketing strategies.</p>
//           </div>
//           <div className="service-item">
//             <i className="service-icon fa fa-cloud"></i>
//             <h3 className="service-title">Cloud Solutions</h3>
//             <p className="service-description">Secure and scalable cloud solutions to manage your data and applications.</p>
//           </div>
//           <div className="service-item">
//             <i className="service-icon fa fa-shield-alt"></i>
//             <h3 className="service-title">Cybersecurity</h3>
//             <p className="service-description">Protect your business from cyber threats with robust security measures.</p>
//           </div>
//           <div className="service-item">
//             <i className="service-icon fa fa-tools"></i>
//             <h3 className="service-title">IT Support</h3>
//             <p className="service-description">Reliable IT support to keep your systems up and running smoothly.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;

import React from 'react';
import './services.css';

const Service = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-list">
          {/* Service Item */}
          <div className="service-item">
            <i className="service-icon fa fa-laptop-code"></i>
            <h3 className="service-title">Web Development</h3>
            <p className="service-description">Build responsive, high-performing websites tailored to your needs.</p>
            <a href="#" className="btn-primary">Know More</a>
          </div>
          <div className="service-item">
            <i className="service-icon fa fa-mobile-alt"></i>
            <h3 className="service-title">Mobile Apps Development</h3>
            <p className="service-description">Develop user-friendly mobile apps for iOS and Android platforms.</p>
            <a href="#" className="btn-primary">Know More</a>
          </div>
          <div className="service-item">
            <i className="service-icon fa fa-cogs"></i>
            <h3 className="service-title">ERP Solutions</h3>
            <p className="service-description">Optimize business operations with our ERP system integrations.</p>
            <a href="#" className="btn-primary">Know More</a>
          </div>
          <div className="service-item">
            <i className="service-icon fa fa-code"></i>
            <h3 className="service-title">Custom Software</h3>
            <p className="service-description">Create custom software solutions to meet specific business needs.</p>
            <a href="#" className="btn-primary">Know More</a>
          </div>

          {/* Second Row of Services */}
          <div className="service-item">
            <i className="service-icon fa fa-bullhorn"></i>
            <h3 className="service-title">Digital Marketing</h3>
            <p className="service-description">Reach your audience effectively through digital marketing strategies.</p>
            <a href="#" className="btn-primary">Know More</a>
          </div>
          <div className="service-item">
            <i className="service-icon fa fa-cloud"></i>
            <h3 className="service-title">Cloud Solutions</h3>
            <p className="service-description">Secure and scalable cloud solutions to manage your data and applications.</p>
            <a href="#" className="btn-primary">Know More</a>
          </div>
          <div className="service-item">
            <i className="service-icon fa fa-shield-alt"></i>
            <h3 className="service-title">Cybersecurity</h3>
            <p className="service-description">Protect your business from cyber threats with robust security measures.</p>
            <a href="#" className="btn-primary">Know More</a>
          </div>
          <div className="service-item">
            <i className="service-icon fa fa-tools"></i>
            <h3 className="service-title">IT Support</h3>
            <p className="service-description">Reliable IT support to keep your systems up and running smoothly.</p>
            <a href="#" className="btn-primary">Know More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
