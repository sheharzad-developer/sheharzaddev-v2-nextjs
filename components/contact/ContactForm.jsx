import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // EmailJS configuration (same as HireMeModal)
      const serviceId = 'service_f6m0myb';
      const templateId = 'template_2iz1ofn';
      const publicKey = 'cyhAdV4SulzwmwCXd';

      // Template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.subject,
        message: formData.message,
        to_email: 'sheharzad.salahuddin9000@outlook.com',
      };

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full lg:w-1/2"
    >
      <div className="leading-loose">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl m-4 p-6 sm:p-10 bg-white dark:bg-secondary-dark rounded-2xl shadow-xl"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Let&apos;s work together
          </p>
          
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
            >
              ✅ Message sent successfully! I&apos;ll get back to you within 24 hours.
            </motion.div>
          )}
          
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
            >
              ❌ Failed to send message. Please try again or contact me directly at sheharzad.salahuddin9000@outlook.com
            </motion.div>
          )}
          
          <div className="mb-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-5 py-3 border border-gray-300 dark:border-ternary-dark rounded-lg shadow-sm text-lg bg-primary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              aria-label="Name"
            />
          </div>
          
          <div className="mb-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-5 py-3 border border-gray-300 dark:border-ternary-dark rounded-lg shadow-sm text-lg bg-primary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              aria-label="Email"
            />
          </div>
          
          <div className="mb-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="w-full px-5 py-3 border border-gray-300 dark:border-ternary-dark rounded-lg shadow-sm text-lg bg-primary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project inquiry, collaboration, or general message"
              aria-label="Subject"
            />
          </div>
          
          <div className="mb-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-3 border border-gray-300 dark:border-ternary-dark rounded-lg shadow-sm text-lg bg-primary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, collaboration idea, or any questions you have..."
            ></textarea>
          </div>
          
          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 disabled:opacity-50 disabled:cursor-not-allowed duration-300 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition-all transform hover:scale-105">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactForm;
