import React, { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import { useForm } from '@formspree/react';
import { checkSpam } from '../utils/checkSpam';
import { Toaster, toast } from 'react-hot-toast';

const Contact = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>((_props, ref) => {
  const [state, formspreeHandleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || 'test-invalidform-id');
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [spamError, setSpamError] = useState('');

  useEffect(() => {
    if (state.succeeded) {
      const form = document.getElementById('contact-form') as HTMLFormElement | null;
      if (form) {
        form.reset();
      }
    }
  }, [state.succeeded]);

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    if (!values.name.trim()) newErrors.name = 'Name is required.';
    if (!values.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(values.email)) newErrors.email = 'Enter a valid email.';
    if (!values.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        return value.trim() ? undefined : 'Name is required.';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? undefined
          : 'Enter a valid email.';
      case 'message':
        return value.trim() ? undefined : 'Message cannot be empty.';
      default:
        return undefined;
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
    const error = validateField(e.target.name, e.target.value); 
    if(error) setErrors({ ...errors, [e.target.name]: error });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setErrors({ ...errors, [name]: '' }); 
    setSpamError("");
    setValues({ ...values, [name]: value });
    if (name != "email") {
      const error = validateField(name, value);
      if(error) setErrors({ ...errors, [name]: error })
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("calling validate")
    const isValid = validate();
    if (!isValid) {
      setTouched({name: true, email: true, message: true})
      return;
    }
    
    const form= new FormData();
    form.append("name", values.name)
    form.append("email", values.email)
    form.append("message", values.message)
    const spamMsg = checkSpam(values);
    if (spamMsg) {
      setSpamError(spamMsg);
      return;
    }
    await formspreeHandleSubmit(form);
    if (state.succeeded) {
      toast.success('Thank you! Your message has been sent.');
      setValues({ name: '', email: '', message: '' })
    }
  };

  return (
    <section id="contact" ref={ref} className="scroll-mt-20 py-16 px-4 bg-[#EAF8FB] text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-[#0C2D48]">Let&apos;s Connect</h2>
        <p className="text-[#334E68] mb-6">Ready to launch your site or idea? Reach out and let&apos;s talk.</p>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={onSubmit} id="contact-form" method="POST" noValidate className="p-6 border border-[#53cdd5] border-2 rounded-lg space-y-6 shadow-lg">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:border-[#53cdd5] focus:ring-0 focus:outline-none"
                />
                {touched.name && errors.name && <p className="mt-1 text-sm text-left text-[#FF5722]">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:border-[#53cdd5] focus:ring-0 focus:outline-none"
                />
                {touched.email && errors.email && <p className="mt-1 text-sm text-left text-[#FF5722]">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Project Idea</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:border-[#53cdd5] focus:ring-0 focus:outline-none"
                />
                  {touched.message && errors.message && <p className="mt-1 text-sm text-left text-[#FF5722]">{errors.message}</p>}
                  {spamError && <p className="mt-1 text-sm text-left text-[#FF5722]">{spamError}</p>}
              </div>
              {!!state.errors && (
                <p className="text-center font-sans font-medium mb-4 text-gray-500">
                    An error occured with form submission. Please email me directly at{' '}
                  <a className="text-[#FF5722] hover:text-[#e64a19]"
                    href="mailto:ginabeth@tinysitelab.com?subject=Website%20Design%20Inquiry"
                  >
                    ginabeth@tinysitelab.com
                  </a>
                </p>
              )}
              <button type="submit" className="w-full sm:w-auto px-6 py-3 bg-[#FF5722] text-white rounded hover:bg-[#e64a19]">Send Message</button>
            </form>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-8 md:text-center">
            <h3 className="text-xl font-regular text-[#0C2D48] mb-4 font-sans text-left">
              <span role="img" aria-label="scientist" className="text-3xl align-middle mr-2">🧑‍🔬</span>
              Contact Us
            </h3>
            <div className="space-y-4 text-gray-700 font-sans">
              <p className="flex items-center gap-3 py-2 border-b last:border-b-0 border-gray-200">
                <svg className="h-5 w-5 text-[#4c89aa]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.62-2.58 6.54-5 9.88C9.58 15.54 7 11.62 7 9z"/>
                </svg>
                Lexington, KY 40515
              </p>
              <p className="flex items-center gap-3 py-2 border-b last:border-b-0 border-gray-200">
                <svg className="h-5 w-5 text-[#4c89aa]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a
                href="mailto:ginabeth@tinysitelab.com?subject=Website%20Design%20Inquiry"
                className="hover:underline text-[#0C2D48] hover:text-[#FF5722] transition-colors"
                >
                  ginabeth@tinysitelab.com
                </a>
              </p>
              <p className="flex items-center gap-3 py-2 border-b last:border-b-0 border-gray-200">
                <svg className="h-5 w-5 text-[#4c89aa]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.533 15.533 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.2 21 3 13.8 3 5a1 1 0 011-1H7.5a1 1 0 011 1c0 1.35.26 2.67.76 3.88a1 1 0 01-.27 1.11l-2.37 2.37z"/>
                </svg>
                <a href="tel:18593795650" className="hover:underline text-[#0C2D48] hover:text-[#FF5722] transition-colors">
                  (859) 379-5650
                </a>
              </p>
              <p className="flex items-center gap-3 py-2 border-b last:border-b-0 border-gray-200">
                <svg className="h-5 w-5 text-[#4c89aa]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" />
                </svg>
                <a href="https://www.tinysitelab.com" className="hover:underline text-[#0C2D48] hover:text-[#FF5722] transition-colors">
                  tinysite.lab.com
                </a>
              </p>
              <div className="flex justify-center">
                <Image
                  src="/beaker.png"
                  alt="Tiny Site Lab Logo"
                  width={100}
                  height={100}
                  className="w-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm italic text-gray-600 text-center max-w-xl mx-auto">
            <span role="img" aria-label="beaker" className="text-lg align-middle mr-2">🔬</span>
            Tiny Site Lab&apos;s science vibe is inspired by my science beginnings — because every great website starts with a little experiment!
        </p>
      </div>
      <Toaster
        toastOptions={{
          style: {
            background: '#FFFFFF',
            color: '#0C2D48',
            border: '1px solid #53cdd5',
            fontWeight: 'semibold',
          },
          success: {
            iconTheme: {
              primary: '#53cdd5',
              secondary: '#FF5722',
            },
          },
        }}
      />
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
