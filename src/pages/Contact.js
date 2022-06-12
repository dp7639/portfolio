import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
export default function Contact() {

  function sendEmail(e) {

    e.preventDefault()

    emailjs.sendForm("service_tbeci8p", "template_ishbfgv", e.target, "DkoWRTIme4khkx0lw")
      .then((res) => {
        console.log(res)
        Swal.fire("Thank you!", "Your message has been successfully sent", "success");
        window.location.href = '/contact'
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <Layout>
      <div className='md:mb-20'>
        <div className='h-screen mt-10'>
          <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_kdx6cani.json" background="transparent" speed="1" loop autoplay></lottie-player>

        </div>
        <div className='w-screen flex justify-center'>
          <div className='md:w-full w-1/2 p-10 shadow-2xl bg-gray-50'>
            <h1 className='text-2xl font-semibold'>Contact me to know more</h1>
            <form onSubmit={sendEmail}>
              <input type="text" placeholder='Name' name="name" className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5' required />
              <input type="text" placeholder='Email' name="user_email" className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5' required />
              <textarea type="text" name="message" placeholder='Message' className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5' required />
              <button type="submit" className='bg-red-500 rounded text-white px-5 py-1 mt-3'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>

  );
}
