import ContactDetails from '../components/contact/ContactDetails';
import PagesMetaHead from '../components/PagesMetaHead';

function Contact() {
  return (
    <div>
      <PagesMetaHead title="Contact" />

      <div
        data-aos="fade-up-right"
        data-aos-duration="700"
        data-aos-delay="100"
        className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5"
      >
        <ContactDetails />
      </div>
    </div>
  );
}

export default Contact;
