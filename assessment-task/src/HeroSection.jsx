import Logo2 from "./assets/logo2.png"
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import profile from "./assets/profile.png"

export default function HeroSection() {
  return (
    <main>
      <section className="hero">
        <div className="outerHeading">
          <h1 className="heading">Grow Your Business, No Matter The Size.</h1>
        </div>
        <div className="services">
          <img src={Logo2} alt="Logo" />
          <div>
            <span>Websites</span>
            <span>Social Media</span>
            <span>Newsletters</span>
          </div>
          <div>
            <span>Marketing API</span>
            <span>Release Notes</span>
          </div>
        </div>
        <div className="hero-content">
          <div className="illustration">
            <img src={img1} alt="Illustration" />
          </div>
          <div className="profile">
            <img src={img2} alt="Profile" />
          </div>
        </div>
        <h2 className="heading2">
          Try Our Flexible Plans — Grew Mail~Plan Will Launch
        </h2>
        <div className="plans">
          <div className="avatars">
            <img src={profile} alt="Avatar 1" />
            <img src={profile} alt="Avatar 2" />
            <img src={profile} alt="Avatar 3" />
          </div>
          <div className="separator">~</div>
          <div className="testimonial">
            <p>
              “We received a great amount of leads in just 2 weeks timeline!”
            </p>
            <p>
              <strong>Roger, Design Lead @Agency</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
