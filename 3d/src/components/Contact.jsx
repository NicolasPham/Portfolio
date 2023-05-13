import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// TemplateID: template_x0sbwgx
// Service ID: service_r3h4wbg
// public key: pDUZw5A1msv5LDoq7

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  //define variables =================

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  //define function ==================

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

  return (
    <div className="flex flex-col-reverse xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
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
        </form>
      </motion.div>

      {/* EarthCanvas ===================================== */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 h-[350px] md:h-[550px] xl:auto"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
