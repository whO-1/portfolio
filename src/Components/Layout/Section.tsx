interface SectionProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  name?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, ...rest }) => {
  return (
    <section
      className="py-3 px-4 m-0 d-block w-100 d-flex justify-content-center align-items-center"
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
