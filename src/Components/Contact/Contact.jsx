import "./contact.css";
// import { SiGmail } from "react-icons/si";
// import { BsGithub } from "react-icons/bs";
// import { BsLinkedin } from "react-icons/bs";
function Contact() {
  return (
    <section className="contact" id="contact">
      {/* <div className="contact_container">
        <section className="contact_section">
          <p>
            Hei, jeg ser etter en frontend-utviklings praksis eller jobber, hvis
            du har noen åpning, vennligst kontakt meg Takk.
          </p>
          <ul>
            <li className="contact_list">
              <a className="contact_link" href="#">
                <BsGithub /> github
              </a>
            </li>
            <li className="contact_list">
              <a className="contact_link" href="#">
                <SiGmail />
                gmail
              </a>
            </li>
            <li className="contact_list">
              <a className="contact_link" href="#">
                <BsLinkedin />
                linked in
              </a>
            </li>
          </ul>
        </section>
      </div> */}
      <form action="" className="contact_form">
        <h2>Kontakt</h2>
        <label htmlFor="name" className="contact_form_label">
          Navn
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="contact_form_input"
        />
        <label htmlFor="email" className="contact_form_label">
          E-post
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="contact_form_input"
        />
        <label htmlFor="message" className="contact_form_label">
          Beskjed
        </label>
        <textarea
          id="message"
          name="message"
          className="contact_form_text"
        ></textarea>
        <button className="contact_button">Send mail</button>
      </form>
    </section>
  );
}
export default Contact;
