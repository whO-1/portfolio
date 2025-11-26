import Navigation from "./Components/Layout/Navigation";
import About from "./Components/About/About";
import ContactForm from "./Components/CTA/ContactForm";
import Experience from "./Components/Experience/Experience";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Layout/Footer";
import Section from "./Components/Layout/Section";
import Skills from "./Components/Skills/Skills";
import Stats from "./Components/Stats/Stats";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

const navigation = [
  { name: "Projects", href: "#" },
  { name: "About", href: "#" },
  { name: "Skills", href: "#" },
  { name: "Experience", href: "#" },
  { name: "Contacts", href: "#" },
];

function App() {
  return (
    <>
      <Navigation navLinks={navigation} />
      <Section style={{ minHeight: "90vh" }} name="HeroSection">
        <Hero navLinks={navigation} />
      </Section>
      <Section style={{ minHeight: "100vh" }} name="ProjectsSection">
        <Projects />
      </Section>
      <Section style={{ minHeight: "40vh" }} name="StatsSection">
        <Stats />
      </Section>
      <Section style={{ minHeight: "80vh" }} name="AboutSection">
        <About />
      </Section>
      <Section style={{ minHeight: "100vh" }} name="SkillsSection">
        <Skills />
      </Section>
      <Section style={{ minHeight: "80vh" }} name="CTASection">
        <ContactForm />
      </Section>
      <Section style={{ minHeight: "80vh" }} name="JobsSection">
        <Experience />
      </Section>
      <Section
        style={{
          backgroundColor: "var(--color-on-primary)",
          minHeight: "30vh",
        }}
        name="ContactSection"
      >
        <Contact />
      </Section>
      <Section style={{ minHeight: 10 }} name="FooterSection">
        <Footer />
      </Section>
    </>
  );
}

export default App;
