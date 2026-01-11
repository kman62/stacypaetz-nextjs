'use client';

import { useState } from 'react';
import Image from 'next/image';
import AudioPlayer from '@/components/AudioPlayer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'question',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Audio Player */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <AudioPlayer src="/audio/Contact.mp3" title="Contact" />
        </div>
      </section>

      {/* Header */}
      <section className="py-8 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Contact</h1>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-green-600 text-5xl mb-4">✓</div>
              <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
              <p className="text-gray-600">Your message has been sent. We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eb092b] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eb092b] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eb092b] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eb092b] focus:border-transparent outline-none"
                >
                  <option value="question">Submit a Question</option>
                  <option value="appearance">Request an Appearance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eb092b] focus:border-transparent outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#eb092b] hover:bg-[#c9081f] text-white font-medium rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Photo */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-md mx-auto px-4">
          <Image
            src="https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/IMG_9332.jpg?fit=1200%2C1800&ssl=1"
            alt="Stacy Paetz"
            width={400}
            height={600}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
