import React, { useEffect, useState, useRef } from 'react';
import Btn from './Btn';

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  product: string;
  message: string;
};

const ContactModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });

  const overlayRef = useRef<HTMLDivElement | null>(null);

  const triggerModal = () => setIsOpen((s) => !s);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as keyof FormData;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: replace with API call
    setIsOpen(false);
  };

  return (
    <div>
      <Btn size="large" onClick={triggerModal}>Contact Form</Btn>
      {isOpen && (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            // close when clicking the overlay (but not the modal content)
            if (e.target === overlayRef.current) setIsOpen(false);
          }}
        >
          <div className="bg-white w-full max-w-lg rounded-4xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
            <button
              aria-label="Close"
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-9 font-extrabold text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
            <div className="contact-form-container ">
              <h2 className="text-2xl text-center text-[var(--button-red)] font-bold mb-1">Send Us a Message</h2>
              <p className="text-sm text-gray-600 text-center mb-4">We’d love to hear from you</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-black">First Name</label>
                    <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full border border-[var(--button-red)] rounded-md px-3 py-2" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-black">Last Name</label>
                    <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 block w-full border border-[var(--button-red)] rounded-md px-3 py-2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-black">Phone Number</label>
                    <input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full border border-[var(--button-red)] rounded-md px-3 py-2" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black">Email Address</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full border border-[var(--button-red)] rounded-md px-3 py-2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-black">Company Name</label>
                    <input id="company" name="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full border border-[var(--button-red)] rounded-md px-3 py-2" />
                  </div>
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-black">Product Interest</label>
                    <input id="product" name="product" value={formData.product} onChange={handleChange} className="mt-1 block w-full border border-[var(--button-red)] rounded-md px-3 py-2" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full border border-[var(--button-red)] rounded-md px-3 py-2" />
                </div>

                <div className="flex items-center justify-center gap-3">
                  <button type="submit" className="px-4 py-2 rounded-md bg-[var(--button-red)] text-white">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;
