'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { User, Mail, MessageSquare, Send, MapPin, Phone, Clock } from 'lucide-react';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().min(10, 'Message too short').required('Message is required')
});

const Contact = () => {
  const contactForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: ContactSchema,
    onSubmit: (values) => {
      console.log('Contact Form Data:', values);
      alert('Message sent successfully!');
    }
  });

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Smart Canvas Street<br />
                Tech City, TC 12345<br />
                India
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">
                +91 1234567890<br />
                Mon-Fri 9am-6pm IST
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">
                support@smartcanvas.com<br />
                sales@smartcanvas.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              <form onSubmit={contactForm.handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      id="name"
                      type="text"
                      onChange={contactForm.handleChange}
                      value={contactForm.values.name}
                      placeholder="John Doe"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                  {contactForm.touched.name && contactForm.errors.name && (
                    <p className="text-xs text-red-600 mt-1">{contactForm.errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      id="email"
                      type="email"
                      onChange={contactForm.handleChange}
                      value={contactForm.values.email}
                      placeholder="you@example.com"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                  {contactForm.touched.email && contactForm.errors.email && (
                    <p className="text-xs text-red-600 mt-1">{contactForm.errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      id="subject"
                      type="text"
                      onChange={contactForm.handleChange}
                      value={contactForm.values.subject}
                      placeholder="How can we help?"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                  {contactForm.touched.subject && contactForm.errors.subject && (
                    <p className="text-xs text-red-600 mt-1">{contactForm.errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.message}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  />
                  {contactForm.touched.message && contactForm.errors.message && (
                    <p className="text-xs text-red-600 mt-1">{contactForm.errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
