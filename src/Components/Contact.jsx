import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { socialPlatforms } from "./Work";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSend, setIsSend] = useState(false);

  const sendForm = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_50rl1eo",
        "template_74gggjp",
        form.current,
        "PhY0YooqufdSsXgjd"
      )
      .then(
        () => {
          setIsSend(true);
          setIsSending(false);
          form.current.reset();
          toast.success("Sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setIsSending(false);
          toast.error("Error Sending Message", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        }
      );
  };

  const contactInfo = [
    {
      icon: <MdEmail className="w-6 h-6" />,
      title: "Email",
      value: "720akshaykumar@gmail.com",
    },
    {
      icon: <MdPhone className="w-6 h-6" />,
      title: "Phone",
      value: "8252608790",
    },
    {
      icon: <MdLocationOn className="w-6 h-6" />,
      title: "Location",
      value: "Mohali, Punjab",
    },
  ];

  return (
    <section className="py-16 md:py-20 relative z-10">
  
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: false }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 glass dark:glass rounded-full text-sm font-semibold">
            GET IN TOUCH
          </span>

          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-5 mt-5 gradient-text">
            Let's Work Together
          </h2>

          <p className="lg:text-lg md:text-md sm:text-xl font-medium max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and learning
            experiences. Feel free to reach out.
          </p>
        </motion.div>

        <div>
          <div className="max-w-4xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden glass dark:glass border border-amber-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column: Contact Info */}
              <motion.div className="p-6 md:p-8 lg:p-12 glass dark:glass">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
                  Contact Information
                </h3>

                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-start"
                    >
                      <div className="mt-1 shrink-0 text-yellow-500">
                        {item.icon}
                      </div>
                      <div className="ml-3 md:ml-4">
                        <h4 className="text-base md:text-lg font-medium">
                          {item.title}
                        </h4>
                        <p className="text-sm md:text-base opacity-80">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 md:mt-12">
                  <h4 className="text-md font-bold mb-3 md:mb-4 tracking-wider">
                    FOLLOW ME
                  </h4>

                  <div className="flex items-center gap-4">
                    {socialPlatforms.map((platform, index) => (
                      <motion.a
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full glass dark:glass flex items-center justify-center transition-colors"
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <platform.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Contact Form */}
              <motion.div
                className="p-6 md:p-8 lg:p-12"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8 },
                }}
                viewport={{ once: false }}
              >
                <form
                  ref={form}
                  onSubmit={sendForm}
                  className="flex flex-col space-y-5"
                >
                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Enter your Name"
                      required
                      className="w-full p-4 border border-amber-200/50 rounded-2xl outline-none bg-transparent focus:border-amber-400 transition-colors"
                    />

                    <input
                      type="email"
                      name="user_email"
                      placeholder="Enter your Email"
                      required
                      className="w-full p-4 border border-amber-200/50 rounded-2xl outline-none bg-transparent focus:border-amber-400 transition-colors"
                    />

                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter your Subject"
                      required
                      className="w-full p-4 border border-amber-200/50 rounded-2xl outline-none bg-transparent focus:border-amber-400 transition-colors"
                    />

                    <textarea
                      name="message"
                      placeholder="Enter your Message"
                      rows="4"
                      required
                      className="w-full p-4 border border-amber-200/50 rounded-2xl outline-none bg-transparent focus:border-amber-400 transition-colors"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: isSending ? 1 : 1.02 }}
                    whileTap={{ scale: isSending ? 1 : 0.98 }}
                    type="submit"
                    disabled={isSending}
                    className="w-full px-6 py-4 rounded-full font-bold bg-gradient-to-r from-[#ff8a00] via-[#ffb300] to-[#ffd54f] text-black disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
                  >
                    {isSending ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;