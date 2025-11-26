import React from "react";
import { Container, Carousel } from "react-bootstrap";
import styles from "./Experience.module.css";

type WorkExperience = {
  id: string;
  name: string;
  role?: string;
  quote: string;
  avatar?: string;
};

const testimonials: WorkExperience[] = [
  {
    id: "t1",
    name: "Company1",
    role: "Product Manager",
    quote:
      "Dignissim rhoncus mi a ultricies sit mauris elementum eu. Vitae viverra molestie commodo consectetuer netus sit donec in morbi.",
    avatar: "/assets/clients/client-1.jpg",
  },
  {
    id: "t2",
    name: "Company2",
    role: "Founder",
    quote:
      "Excellent collaboration — delivery was fast and the result exceeded expectations. Communication and clarity were outstanding.",
    avatar: "/assets/clients/client-2.jpg",
  },
  {
    id: "t3",
    name: "Company3",
    role: "Designer",
    quote:
      "Highly recommended for design & front-end work. Attention to detail and UX thinking made a real difference in the product.",
    avatar: "/assets/clients/client-3.jpg",
  },
  {
    id: "t4",
    name: "Company4",
    role: "Designer",
    quote:
      "Highly recommended for design & front-end work. Attention to detail and UX thinking made a real difference in the product.",
    avatar: "/assets/clients/client-3.jpg",
  },
];

const Experience: React.FC = () => {
  return (
    <Container
      fluid="lg"
      className={`py-5 px-5 d-flex flex-column`}
      style={{ height: "65vh", width: "100%", maxWidth: "900px" }}
    >
      <h3 className="text-center mb-5" style={{ flex: "0 0 auto" }}>
        Comercial companies I've worked with
      </h3>
      <Carousel
        indicators={true}
        controls={true}
        interval={6000}
        pause={false}
        prevIcon={<span className="" />}
        nextIcon={<span className="" />}
        className={"p-4"}
        style={{
          flex: "1 1 auto",
          boxShadow: "0px 0px 316px var(--color-secondary)",
          borderRadius: "15px",
        }}
      >
        {testimonials.map((t) => (
          <Carousel.Item key={t.id} className={`h-100 ${styles.carouselItem}`}>
            <div>
              <div>
                <div className={styles.itemImage}>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className={styles.itemImage}
                  />
                </div>
                <div>
                  <div className={styles.companyName}>{t.name}</div>
                  {t.role && (
                    <div className={`${styles.companyRole} px-2`}>{t.role}</div>
                  )}
                </div>
              </div>
              <p className={styles.jobSummary}>{t.quote}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Experience;
