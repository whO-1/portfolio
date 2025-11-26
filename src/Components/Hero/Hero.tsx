import Hexagon from "../Layout/Hexagon";
import NeonButton from "../CTA/NeonButton";

interface HeroProps {
  navLinks: { name: string; href: string }[];
  name?: string;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center p-0 m-0"
        style={{ minHeight: "inherit", width: "100%" }}
      >
        <div
          className="col-12 d-flex justify-content-between w-lg-50 p-0"
          style={{ minHeight: "inherit", maxWidth: "1200px" }}
        >
          <div
            className="col-12 col-md-6 h-100 m-0 d-flex align-items-end justify-content-start"
            style={{ minHeight: "inherit" }}
          >
            <div>
              <h4>Design is the thing you truly enjoy.</h4>
              <p
                className="mt-4"
                style={{ color: "var(--color-text-secondary)", width: "80%" }}
              >
                Your style speaks louder than a thousand words. Share your story
                through different colors.
              </p>
            </div>
          </div>

          <div
            className="d-none col-md-6 h-100 d-md-flex align-items-end justify-content-center p-0 m-0"
            style={{ minHeight: "inherit" }}
          >
            <Hexagon
              stylesParent={{
                width: "650px",
                height: "500px",
                borderRadius: "20px",
                marginBottom: "20%",
              }}
              stylesHex={{
                width: "100%",
                height: "100%",
              }}
            >
              <div>
                I am always open for a great idea or offer. Let's transform an
                idea in reality, don't hesitate to bring it to live.
              </div>
              <NeonButton />
            </Hexagon>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
