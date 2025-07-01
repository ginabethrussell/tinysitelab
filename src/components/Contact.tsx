import { useEffect } from 'react';
import { useForm } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || 'test-invalidform-id');

  useEffect(() => {
    if (state.succeeded) {
      const form = document.getElementById('contact-form') as HTMLFormElement | null;
      if (form) {
        form.reset();
      }
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="scroll-mt-20 py-16 px-4 bg-[#EAF8FB] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-[#0C2D48]">Let&apos;s Connect</h2>
        <p className="text-[#334E68] mb-6">Ready to launch your site or idea? Reach out and let&apos;s talk.</p>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} id="contact-form" method="POST" className="space-y-4">
            {/* Success message */}
            {state.succeeded && (
              <p className="text-center font-medium mb-4 text-[#334E68]">
                Thank you! Your message has been sent.
              </p>
            )}
            <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 border border-gray-300 rounded focus:border-gray-400 focus:ring-0 focus:outline-none" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 border border-gray-300 rounded focus:border-gray-400 focus:ring-0 focus:outline-none" />
            <textarea name="message" placeholder="Tell me about your project..." rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded focus:border-gray-400 focus:ring-0 focus:outline-none"></textarea>
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
            <button type="submit" className="px-6 py-3 bg-[#FF5722] text-white rounded hover:bg-[#e64a19]">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
