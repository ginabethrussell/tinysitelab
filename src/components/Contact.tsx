import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from '@formspree/react';
import { checkSpam } from '../utils/checkSpam';

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
    if (validate()) {
      // Only call Formspree's handleSubmit if validation passes
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
    }
  };

  return (
    <section id="contact" ref={ref} className="scroll-mt-20 py-16 px-4 bg-[#EAF8FB] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-[#0C2D48]">Let&apos;s Connect</h2>
        <p className="text-[#334E68] mb-6">Ready to launch your site or idea? Reach out and let&apos;s talk.</p>
        <div className="flex flex-col">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={onSubmit} id="contact-form" method="POST" className="p-6 border border-[#53cdd5] border-2 rounded-lg space-y-6 shadow-lg">
            {/* Success message */}
            {state.succeeded && (
              <p className="text-center font-medium mb-4 text-[#334E68]">
                Thank you! Your message has been sent.
              </p>
            )}
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
                  href="mailto:ginabeth@tinysitelab.com?subject=TinySiteLab%20Information%20Request"
                >
                  ginabeth@tinysitelab.com
                </a>
              </p>
            )}
            <button type="submit" className="w-full sm:w-auto px-6 py-3 bg-[#FF5722] text-white rounded hover:bg-[#e64a19]">Send Message</button>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
