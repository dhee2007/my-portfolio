function Contact() {

  function handleSubmit(event) {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    event.target.reset();
  }

  return (
    <section className="contact-section" id="contact">

      <h2>Contact for more details</h2>

      <form id="form" onSubmit={handleSubmit}>

        <div className="Form">

          <label htmlFor="name">
            NAME
          </label>

          <input
            type="text"
            id="name"
            name="name"
            required
          />

        </div>

        <div className="Form">

          <label htmlFor="email">
            EMAIL
          </label>

          <input
            type="email"
            id="email"
            name="email"
            required
          />

        </div>

        <div className="Form">

          <label htmlFor="message">
            DROP A MESSAGE
          </label>

          <textarea
            name="message"
            id="message"
            required
            rows="5"
          ></textarea>

        </div>

        <button className="click" type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;
