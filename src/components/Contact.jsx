import "../styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="numbered-heading contact-heading">What’s Next?</h2>
      <h2 className="contact-title">Get In Touch</h2>
      <p>
        Although I’m currently open to new opportunities, my inbox is always open. Whether you have
        a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <a
        className="contact-email"
        href="mailto:kvndranasinghe@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
