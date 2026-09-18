'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, MessageSquare, Send, CheckCircle2, ShieldCheck, HeartHandshake, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topicCategory: 'Oral Hygiene',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200/80 pt-12 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Editorial Desk & Question Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact Blueteeth Education
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have a question about an educational article, suggest a topic for our clinical review board, or provide feedback on our dental guides.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Info Side */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-slate-900">
                Editorial Inquiries
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We welcome feedback from readers, dental students, hygienists, and clinicians looking to suggest topics or reference citations.
              </p>

              <div className="pt-2 text-xs text-slate-700 space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-teal-600" />
                  <span className="font-medium">editorial@blueteetheducation.com</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 border border-teal-800/40 shadow-sm space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center">
                <HeartHandshake className="w-4 h-4 mr-1.5" />
                <span>Clinical Dental Partner</span>
              </div>
              <h3 className="text-base font-bold text-white">
                Blueteeth Dental Care
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                For in-person dental examinations, digital diagnostic scans, or clinical appointments, visit our partner dental center.
              </p>
              <a
                href="https://blueteeth.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-teal-300 hover:text-teal-200 underline pt-1"
              >
                <span>Visit blueteeth.in</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Received</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you for contacting Blueteeth Education. Our editorial team will review your topic suggestion or inquiry.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', topicCategory: 'Oral Hygiene', message: '' });
                  }}
                  className="px-5 py-2 rounded-xl bg-teal-700 text-white text-xs font-semibold hover:bg-teal-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  Submit a Topic or Question
                </h2>

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-xs font-semibold text-slate-700 mb-1">
                    Topic Category
                  </label>
                  <select
                    id="category"
                    value={formData.topicCategory}
                    onChange={(e) => setFormData({ ...formData, topicCategory: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option>Oral Hygiene</option>
                    <option>Dental Problems & Pain</option>
                    <option>Preventive Dentistry</option>
                    <option>Dental Treatments</option>
                    <option>Children&apos;s Dentistry</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Restorative Dentistry</option>
                    <option>Dental Emergencies</option>
                    <option>General Editorial Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message or Topic Suggestion
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe what dental topic or question you'd like our clinical educators to explain..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit to Editorial Desk</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  Note: We do not provide individual medical diagnoses over the internet.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
