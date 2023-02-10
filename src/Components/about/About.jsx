import "./about.css";

// import CV from"../../assets/CV";
import Info from "./Info";
function About() {
  return (
    <section className="about" id="about">
      {/* <h2 className="section_title">Om Meg</h2> */}
      <div className="about_container">
        <div className="about_data">
          <p className="about_description">
            Akkurat nå lærer jeg frontend-utviklig på kodehode. Jeg synes faget
            er veldig spennende,og ser frem til å lære. Jeg er en ambisiøs
            kvinne, frontend utvikling for meg er kreativite problemløsning og
            jeg lidenskapelig for ny teknologi. Jeg er interessert i HTML, CSS
            og design.Jeg har kunnskap om JavaScript,React også Backend .
            {/* I am an ambitious woman frontend development
            for me, creativity is problem solving and I am passionate about new technology.
 I am interested in HTML, CSS and design. I have knowledge of JavaScript,React , Backend as wel.*/}
          </p>
          <Info />
          <hr className="about_lineBreak" />
          <article className="about_--Hobbies">
            <h2 className="about_title">Fritid</h2>
            <p className="about_description">
              Fritid jeg elsker å være sammen med barna mine.Vi leker sammen og
              synger. Jeg liker å lese bøker også å spille badminton.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
export default About;
