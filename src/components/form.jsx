import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
//jIH5cM3FlxoKbzvzJ
//template_4f47rjf
//service_1st77zn
    emailjs
      .send(
        'service_1st77zn','template_4f47rjf',
        {
          from_name: form.name,
          to_name: "aretex",
          from_email: form.email,
          to_email: "gerome.blanco@aretex.com.au",
          message: form.message,
        },
        'jIH5cM3FlxoKbzvzJ'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`} id="forms"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-white p-8 rounded-2xl'
      >
        <h3 className={`${styles.heroHeadText5} max-w-[450px]`}>
                Let's do great things, <span className={styles.heroHeadText6}>together</span>.
        </h3>


        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
              className='bg-white py-4 px-6 placeholder-gray-400 text-gray-800 rounded-lg outline-none border border-gray-400 font-medium'
            />
          </label>
          <label className='flex flex-col '>
            <input
                type='tel'
                name='phone'
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className='bg-white py-4 px-6 placeholder-gray-400 text-gray-800 rounded-lg outline-none border border-gray-400 font-medium'
                 />
        </label>

          <label className='flex flex-col'>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className='bg-white py-4 px-6 placeholder-gray-400 text-gray-800 rounded-lg outline-none border border-gray-400 font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Message'
              className='bg-white py-4 px-6 placeholder-gray-400 text-gray-800 rounded-lg outline-none border border-gray-400 font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-orange-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");