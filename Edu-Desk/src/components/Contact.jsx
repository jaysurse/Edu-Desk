import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs;
    emailjs
      .sendForm(
        "service_ib77l4f", // ✅ Your actual Service ID
        "template_iztqbw5", // ✅ Your actual Template ID
        form.current,
        "ZWCbX9-oH2IR18HRb" // ✅ Your new Public Key
      )

      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Contact Me
        </h2>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            required
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            name="message"
            required
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          ></textarea>

          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {done && (
            <p className="text-green-600 text-center mt-2">
              Thanks! Message sent ✅
            </p>
          )}
        </form>

        {/* Connect With Me */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Connect With Me
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-lg">
            <a
              href="https://github.com/jaysurse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-blue-600"
            >
              🔗 GitHub
            </a>
            <a
              href="https://linkedin.com/in/jay-surse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-blue-500"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://www.instagram.com/jayy..007?igsh=d2w1eHRhemU0ejd5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-pink-500"
            >
              📸 Instagram
            </a>
            <a
              href="mailto:jaysurse07@gmail.com"
              className="text-gray-800 dark:text-white hover:text-green-600"
            >
              📧 Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
