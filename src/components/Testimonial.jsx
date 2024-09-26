import React from 'react';
import './Testimonial.css';
import assets from "../assets/profile.js";

const testimonials = [
  { name: 'Marvin Mackinley', text: 'As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth.', role: 'CEO', image: `${assets.jacob}` },
  { name: 'Jacob Jones', text: 'Reliable banking solutions for your financial operations Reliable banking solutions for your financial operations Reliable banking solutions for your financial.', role: 'Founder', image: `${assets.Michle}` },
  { name: 'Theresa Webb', text: 'Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure Im always tax compliant.', role: 'CFO', image: `${assets.theresa}` },
  { name: 'Sarah Williams', text: 'We needed a payment gateway that could handle our diverse customer base. Swift Revel offers a wide range of payment options, making it easy for our clients to pay.', role: 'Manager', image: `${assets.Kinney}` },
  { name: 'Michael Scott', text: "Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my data's protection completely.", role: 'Owner', image: `${assets.Marvin}` },
  { name: 'Pam Beesly', text: 'As a Freelancer, managing invoices and chasing payments was a constant headache. Now, with automated and secure payment I am getting paid on time, every time.', role: 'Admin', image: `${assets.pam}` },
  { name: 'Jim Halpert', text: 'Reliable banking solutions for your financial operations Reliable banking solutions for your financial operations Reliable banking solutions for your financial', role: 'Sales', image: `${assets.jim}` },
];

const Testimonial = () => {
  return (
    <div className="container">
      <div className="heading">
        <h1>What User Says</h1>
        <p className="sub-text">Testimonials that speak louder than words! Customer stories that light up our day</p>
      </div>
      <div className="carousel">
        <div className="carousel-track">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div key={index} className={`carousel-card`}>
              <img src={testimonial.image} alt={`Profile of ${testimonial.name}`} className="profile-img" />
              <p className="name">{testimonial.name}</p>
              <p className="comment">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
