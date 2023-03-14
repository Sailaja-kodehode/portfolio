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
          <div className="info_bg">
            <Info />
          </div>

          <hr className="about_lineBreak" />
          <article className="about_--Hobbies">
            <h2 className="about_title">Fritid</h2>
            <p className="about_description">
              Fritid jeg lærer norsk for å forbedre min kommunikasjon med
              kolleger og naboer. Jeg liker å spille badminton, å lese bøker og
              går på tur til liten nærest fjell som ta ca. 1 time. Jeg elsker å
              være sammen med familie og barna mine. Vi leker sammen og synger.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
export default About;
