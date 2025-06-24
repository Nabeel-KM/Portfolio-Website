import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Ali Raza (CTO, Kryptomind)",
    review:
      "Nabeel is a highly skilled DevOps engineer who transformed our cloud infrastructure and CI/CD pipelines. His expertise in automation and monitoring has greatly improved our deployment speed and reliability.",
  },
  {
    avatar: AVTR2,
    name: "Sarah Khan (Project Manager, Freelance Client)",
    review:
      "Working with Nabeel was a fantastic experience. He automated our AWS deployments and set up centralized logging, making our operations seamless and transparent. Highly recommended!",
  },
  {
    avatar: AVTR3,
    name: "Michael Lee (Lead Developer, Startup)",
    review:
      "Nabeel's deep knowledge of cloud automation and monitoring tools helped us scale our infrastructure quickly and securely. His proactive approach and clear communication made a huge difference.",
  },
  {
    avatar: AVTR4,
    name: "Fatima Zahra (DevOps Team Lead, Kryptomind)",
    review:
      "I was impressed by Nabeel's ability to automate complex deployments and implement robust monitoring solutions. He is a reliable team player and a true DevOps expert.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="test" />
              </div>

              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
