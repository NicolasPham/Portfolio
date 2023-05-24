import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { contact } from "../constants";
import { slideLeft, slideRight } from "../utils/motion";

const Contact = () => {
  //===================================
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  //===================================
  //change function
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  //submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_r3h4wbg";
    const templateID = "template_x0sbwgx";
    const publicKey = "pDUZw5A1msv5LDoq7";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: form.name,
          to_name: "Nicolas",
          from_emai: form.email,
          to_email: "phd.ngoc163@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(() => {
        setLoading(false);
        alert("Thank you, I will get back to you as soon as possible");
        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong");
          }
        );
      });
  };
  //===================================
  return (
    <section
      id="contact"
      className={`${styles.paddingX} w-full flex justify-center py-3 darkBlue-gradient`}
    >
      <div className="w-full max-w-7xl py-5">
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h1 className={`${styles.sectionHeadText}`}>Contact</h1>

        <div className="lg:grid grid-cols-2 gap-[50px]">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
            initial="hidden"
            whileInView="show"
            variants={slideLeft(0, 1)}
            viewport={{ once: true }}
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="What is your name"
                onChange={handleChange}
                className="bg-tertiary py-2 px-6 border-none text-white outline-none font-medium rounded-lg"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="What is your email"
                onChange={handleChange}
                className="bg-tertiary py-2 px-6 border-none text-white outline-none font-medium rounded-lg"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Messagge</span>
              <textarea
                row="7"
                name="message"
                value={form.message}
                placeholder="What do you want to send..."
                onChange={handleChange}
                className="bg-tertiary py-2 px-6 border-none text-white outline-none font-medium rounded-lg"
              />
            </label>

            <button className="py-3 px-8 w-fit bg-tertiary text-white outline-none font-bold shadow-primary shadow-md rounded-xl">
              {loading ? "Sending..." : "Send"}
            </button>
          </motion.form>

          <motion.div
            className="mt-[50px] lg:pl-[40px]"
            initial="hidden"
            whileInView="show"
            variants={slideRight(0, 1)}
            viewport={{ once: true }}
          >
            <h2 className="text-[30px] text-secondary">Personal Information</h2>
            {contact.map((item, index) => (
              <p
                key={`contact-${index}`}
                className="text-[18px] leading-1 my-2"
              >
                <span className="text-primary font-bold">{item.title}: </span>
                {item.info}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
