// import React from "react";
// import "./profile.css";
// import AboutUs from "./images/co-workers-sharing-jokes-office.jpg"; // Ensure correct path

// const VisionSection = () => {
//   const scrollToAbout = () => {
//     const aboutSection = document.getElementById("about-section");
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="vision-section">
//       <div className="vision-content-1">
//         <h1>Welcome to Our Vision</h1>
//         <p>
//           Redefining the possibilities of technology and creativity with
//           innovative solutions. Join us as we shape a brighter digital future.
//         </p>
//         <button onClick={scrollToAbout} className="learn-more-btn-1">
//           Learn More
//         </button>
//       </div>
//     </section>
//   );
// };

// const AboutUsSection = () => {
//   return (
//     <section id="about-section" className="about-section">
//       <div className="about-content">
//         <h2>About ErnestWell</h2>
//         <p>
//           At ErnestWell, we are committed to delivering high-quality web
//           solutions that combine creativity and technology. Our mission is to
//           create impactful digital experiences for businesses and individuals
//           alike.
//         </p>
//       </div>
//       <div className="about-image">
//         <img src={AboutUs} alt="About Us" />
//       </div>
//     </section>
//   );
// };

// const ProjectsSection = () => {
//   const projects = [
//     { id: 1, name: "Project Alpha", desc: "Web application designed to optimize workflows" },
//     { id: 2, name: "Project Beta", desc: "An AI-driven platform to automate processes and boost productivity" },
//     { id: 3, name: "Project Gamma", desc: "A collaborative tool designed for seamless project management" },
//   ];

//   return (
//     <section className="projects-section">
//       <h2>Our Projects</h2>
//       <div className="projects-container">
//         {projects.map((project) => (
//           <div key={project.id} className="project-card">
//             <h3>{project.name}</h3>
//             <p>{project.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       id: 1,
//       quote:
//         "ErnestWell transformed our business with their innovative solutions. Their team is professional, creative, and always delivers on time.",
//       name: "Alex Johnson, CEO of InnovateTech",
//     },
//     {
//       id: 2,
//       quote:
//         "We've seen a 200% increase in efficiency after implementing their platform. I highly recommend their services!",
//       name: "Priya Sharma, CTO of Bright Solutions",
//     },
//     {
//       id: 3,
//       quote:
//         "Their creativity and technical expertise are unmatched. The team truly understands our vision and makes it a reality.",
//       name: "Mark Wilson, Founder of Visionary Brands",
//     },
//   ];

//   return (
//     <section className="testimonials-section">
//       <h2>What Our Clients Say</h2>
//       <div className="testimonials-container">
//         {testimonials.map((testimonial) => (
//           <div key={testimonial.id} className="testimonial-card">
//             <p>"{testimonial.quote}"</p>
//             <strong>- {testimonial.name}</strong>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const ProfilePage = () => {
//   return (
//     <>
//       <VisionSection />
//       <AboutUsSection />
//       <ProjectsSection />
//       <TestimonialsSection />
//     </>
//   );
// };

// export default ProfilePage;
import React from "react";
import "./profile.css";
import AboutUs from "./images/co-workers-sharing-jokes-office.jpg";
import Client1 from "./images/portrait-expressive-young-woman.jpg";
import Client2 from "./images/portrait-expressive-young-woman.jpg"; // Use different images if needed
import Client3 from "./images/portrait-expressive-young-woman.jpg"; // Use different images if needed

const VisionSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="vision-section">
      <div className="vision-content-1">
        <h1>Welcome to Our Vision</h1>
        <p>
          Redefining the possibilities of technology and creativity with
          innovative solutions. Join us as we shape a brighter digital future.
        </p>
        <button onClick={scrollToAbout} className="learn-more-btn-1">
          Learn More
        </button>
      </div>
    </section>
  );
};

const AboutUsSection = () => {
  return (
    <section id="about-section" className="about-section">
      <div className="about-content">
        <h2>About ErnestWell</h2>
        <p>
          At ErnestWell, we are committed to delivering high-quality web
          solutions that combine creativity and technology. Our mission is to
          create impactful digital experiences for businesses and individuals
          alike.
        </p>
      </div>
      <div className="about-image">
        <img src={AboutUs} alt="About Us" />
      </div>
    </section>
  );
};
import c from "./logos/Brown and White Illustration Coffee Shop Logo.png"
import u from "./logos/uni.png"
// const ProjectsSection = () => {
//   const projects = [
//     { 
//       id: 1, 
//       name: "CAFE APP", 
//       desc: "Web application designed to optimize workflows.", 
//       logo: c
//     },
//     { 
//       id: 2, 
//       name: "UNIBRITIND", 
//       desc: "An AI-driven platform to automate processes and boost productivity.", 
//       logo: u
//     },
//     { 
//       id: 3, 
//       name: "Project Gamma", 
//       desc: "A collaborative tool designed for seamless project management.", 
//       logo: c
//     },
//   ];

//   return (
//     <section className="projects-section">
//       <h2>Our Projects</h2>
//       <div className="projects-container">
//         {projects.map((project) => (
//           <div key={project.id} className="project-card">
//             <img src={project.logo} alt={`${project.name} logo`} className="project-logo" />
//             <h3>{project.name}</h3>
//             <p>{project.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
         "We crafted a sleek and engaging website for AuraCafe, designed to elevate its digital presence and customer experience.",   
      name: "Alex Johnson, CEO of AURA CAFE",
      image:c,
    },
    {
      id: 2,
      quote:
        "We built a user-centric website for Unibritind Global, streamlining the study abroad experience for aspiring international students.",
      name: "Maxwell Gerald Baldrey, CEO of UNIBRITIND GLOBAL",
      image: u,
    },
    {
      id: 3,
      quote:
        "Their creativity and technical expertise are unmatched. The team truly understands our vision and makes it a reality.",
      name: "Mark Wilson, Founder of Visionary Brands",
      image: Client3,
    },
  ];

  return (
    <section className="testimonials-section">
      <h2>OUR PROJECTS</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="client-image" />
            <p>"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProfilePage = () => {
  return (
    <>
      <VisionSection />
      <AboutUsSection />
      <TestimonialsSection />
    </>
  );
};

export default ProfilePage;
