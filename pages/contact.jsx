import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import PagesMetaHead from '../components/PagesMetaHead';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div>
      <PagesMetaHead title="Contact" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto py-8 lg:py-12"
      >
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-dark dark:text-primary-light mb-4">
            Let&apos;s Connect
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Choose your preferred way to get in touch. 
            I&apos;m here to help you create something amazing.
          </p>
        </div>

        {/* Contact Options */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12">
          <ContactDetails />
          <ContactForm />
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
