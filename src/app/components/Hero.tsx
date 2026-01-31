import React from 'react';
import { Github, Linkedin, Mail, Code2, Sparkles, Calendar, Coffee } from 'lucide-react';
import { Link } from 'react-router';

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-white pt-[150px] pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-5 items-start">
          {/* Left side - Main intro */}
          <div className="space-y-6">
            <div className="bg-[#f7f7f9] rounded-3xl p-6 sm:p-8 lg:p-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
                <span className="text-gray-400">홍길동</span> is building{' '}
                <span className="underline decoration-4 decoration-blue-500">amazing things</span>
              </h1>
              
              <div className="space-y-4 text-gray-600">
                <p>i design things.</p>
                <p>i think design can change things.</p>
                <p>i think the things we design are just as important as the things we choose not to.</p>
                <p>i think we should design things that do the things we don't enjoy, and make the things we do enjoy, even better.</p>
                <p>i think there are too many things.</p>
                <p>
                  i think there should be fewer, but better things<span className="text-red-500">*</span>.
                </p>
                <p className="text-sm text-gray-400">
                  *less, but better.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Code card */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-4 sm:p-6 flex items-center justify-center aspect-square">
              <Code2 size={48} className="text-white" />
            </div>

            {/* Status card */}
            <div className="bg-[#f7f7f9] rounded-3xl p-4 sm:p-6 flex flex-col justify-between aspect-square">
              <Sparkles size={32} className="text-yellow-500" />
              <div>
                <p className="text-sm text-gray-500">Currently</p>
                <p className="font-semibold text-gray-900">Available</p>
              </div>
            </div>

            {/* Projects count */}
            <div className="bg-[#f7f7f9] rounded-3xl p-4 sm:p-6 flex flex-col justify-between aspect-square">
              <Calendar size={32} className="text-blue-500" />
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-500">Projects</p>
              </div>
            </div>

            {/* Experience card */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-4 sm:p-6 flex items-center justify-center aspect-square">
              <div className="text-center text-white">
                <p className="text-3xl sm:text-4xl font-bold">5+</p>
                <p className="text-sm mt-1">Years</p>
              </div>
            </div>

            {/* Quote card */}
            <div className="bg-[#f7f7f9] rounded-3xl p-4 sm:p-6 col-span-1 sm:col-span-2 flex items-center gap-4">
              <Coffee size={32} className="text-amber-600 flex-shrink-0" />
              <p className="text-gray-600 italic">
                "Coffee-fueled code, pixel-perfect designs"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}