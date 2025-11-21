"use client";

import { useEffect, useState } from "react";

const BULLETS = [
  "Creating New Things",
  "Updating user experience",
  "Adding new features",
];

const ACHIEVEMENTS = [
  {
    number: "10,000+",
    label: "Active Members",
    icon: "👥"
  },
  {
    number: "75",
    label: "Districts Covered",
    icon: "📍"
  },
  {
    number: "403",
    label: "Assembly Constituencies",
    icon: "🏛️"
  },
  {
    number: "50+",
    label: "Training Programs",
    icon: "🎓"
  }
];

const INITIATIVES = [
  {
    title: "Digital Training Programs",
    description: "Comprehensive training in social media management, video editing, poster design, and live streaming for party workers.",
    icon: "💻",
    color: "from-red-500 to-red-600"
  },
  {
    title: "Ground Level Network",
    description: "Building a strong digital network across every district, village, and constituency in Uttar Pradesh.",
    icon: "🌐",
    color: "from-red-600 to-red-700"
  },
  {
    title: "Youth Empowerment",
    description: "Engaging 100+ active youth members from each assembly constituency to strengthen our digital presence.",
    icon: "⚡",
    color: "from-red-700 to-red-800"
  }
];

const TESTIMONIALS = [
  {
    name: "Rahul Kumar",
    location: "Lucknow",
    text: "Samajwadi Tech Force has given us the platform to contribute meaningfully to our party's digital campaigns. The training programs are excellent!",
    image: "👨‍💼"
  },
  {
    name: "Priya Singh",
    location: "Kanpur",
    text: "As a young party worker, I've learned so much about digital media and how to effectively communicate our party's vision to the masses.",
    image: "👩‍💼"
  },
  {
    name: "Amit Yadav",
    location: "Varanasi",
    text: "The digital empowerment initiative has transformed how we connect with voters. It's a game-changer for grassroots politics.",
    image: "👨‍🎓"
  }
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
];

type ThemeMode = "light" | "dark";

export default function MaintenancePage() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryImage((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleTheme = () => {
    const nextTheme: ThemeMode = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-red-50 text-gray-900'}`}>
      <style>{`
        @keyframes pulse-red {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-pulse-red { animation: pulse-red 2s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-slide-in { animation: slideIn 0.6s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
      `}</style>

      <header className={`sticky top-0 z-50 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-red-200'} border-b backdrop-blur-sm bg-opacity-95 shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dssmutzly/image/upload/v1763543757/928c21d2-4d75-46a6-9265-0531d5433c29_txhwun.png"
              alt="Samajwaditechforce logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold text-red-600">Samajwadi Tech Force</span>
          </div>
          <button 
            type="button" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-100 hover:bg-red-200'} transition-colors`}
            onClick={handleToggleTheme}
          >
            <span className="text-xl">{isDark ? "🌙" : "☀️"}</span>
            <span className="text-sm font-medium">{isDark ? "Dark" : "Light"}</span>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className={`${isDark ? 'bg-gray-800' : 'bg-white'} py-12 lg:py-0`}>
          <div className="grid lg:grid-cols-2 gap-0  items-center">
            {/* Left Content */}
            <div className="px-6 sm:px-12 lg:px-16 py-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white mb-6 shadow-lg">
                <span className="h-2 w-2 bg-white rounded-full animate-pulse-red"></span>
                <span className="text-sm font-semibold">Maintenance in Progress</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                We're Making Things Better!
              </h1>
              
              <p className={`text-lg sm:text-xl mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Hold tight! We're currently performing scheduled maintenance to improve your experience. 
                We'll be back shortly. Thank you for your patience.
              </p>
              
              <p className={`text-base mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                We're working behind the scenes to boost performance, polish the UI, and roll out fresh capabilities.
              </p>

              <ul className={`space-y-3 mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {BULLETS.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 bg-red-600 rounded-full flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg font-medium text-red-600">Thanks for your support and patience 🙌</p>
            </div>

            {/* Right Image */}
            <div className={`relative h-full min-h-[400px] lg:min-h-[700px] flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-gray-700 to-gray-900' : 'bg-gradient-to-br from-red-50 to-red-100'}`}>
              <div className="absolute inset-0 bg-red-600 opacity-5"></div>
              <div className="relative animate-float">
                <div className="absolute"></div>
                <img
                  src="https://res.cloudinary.com/dssmutzly/image/upload/v1763543281/akhilesh-yadav-hd-png-images-thumbnail-1688183026_sdzrpc.png"
                  alt="Akhilesh Yadav"
                  className="relative h-full w-full sm:h-80 sm:w-80 lg:h-[40rem] lg:w-[40rem] object-cover "
                />
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-red-600'}`}>
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {ACHIEVEMENTS.map((achievement, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-sm sm:text-base text-red-100">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Three Pillars Section */}
        <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-4">
              Our Three Pillars
            </h2>
            <p className={`text-center mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Akhilesh Yadav's vision for Uttar Pradesh is built on three fundamental pillars that drive progress and development
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`${isDark ? 'bg-gray-700' : 'bg-red-50'} p-8 rounded-2xl border-l-4 border-red-600 hover:shadow-xl transition-shadow`}>
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Youth Leadership</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  Akhilesh Yadav inspires youth with progressive vision, modern ideas, and dynamic leadership. Empowering the next generation to lead with innovation and courage.
                </p>
              </div>
              
              <div className={`${isDark ? 'bg-gray-700' : 'bg-red-50'} p-8 rounded-2xl border-l-4 border-red-600 hover:shadow-xl transition-shadow`}>
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Digital Empowerment</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  He promotes technology, digital growth, and opportunities for young aspiring individuals. Building a digitally connected and empowered Uttar Pradesh.
                </p>
              </div>
              
              <div className={`${isDark ? 'bg-gray-700' : 'bg-red-50'} p-8 rounded-2xl border-l-4 border-red-600 hover:shadow-xl transition-shadow`}>
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Social Development</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  Focused on equality, innovation, and uplifting communities through impactful development initiatives. Creating a more inclusive and prosperous society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Initiatives Carousel */}
        <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-red-50 to-white'}`}>
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-4">
              Our Key Initiatives
            </h2>
            <p className={`text-center mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Transforming Uttar Pradesh through technology, training, and grassroots engagement
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {INITIATIVES.map((initiative, idx) => (
                <div 
                  key={idx}
                  className={`bg-gradient-to-br ${initiative.color} p-8 rounded-2xl text-white hover:scale-105 transition-transform shadow-xl`}
                >
                  <div className="text-5xl mb-4">{initiative.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{initiative.title}</h3>
                  <p className="text-red-50 leading-relaxed">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Carousel */}
        <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-12">
              Our Movement in Action
            </h2>
            
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              {GALLERY_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    idx === currentGalleryImage ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              ))}
              
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                {GALLERY_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentGalleryImage(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentGalleryImage ? 'w-8 bg-red-600' : 'w-2 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-red-50'}`}>
          <div className="max-w-4xl mx-auto px-6 sm:px-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-12">
              Voices from the Ground
            </h2>
            
            <div className="relative">
              {TESTIMONIALS.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`transition-opacity duration-500 ${
                    idx === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-8 sm:p-12 rounded-2xl shadow-xl`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-5xl">{testimonial.image}</div>
                      <div>
                        <h4 className="text-xl font-bold text-red-600">{testimonial.name}</h4>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.location}</p>
                      </div>
                    </div>
                    <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed italic`}>
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-center gap-2 mt-8">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentTestimonial ? 'w-8 bg-red-600' : 'w-2 bg-red-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className={`${isDark ? 'bg-gray-700' : 'bg-gradient-to-r from-red-50 to-red-100'} p-8 sm:p-12 rounded-2xl border-l-8 border-red-600`}>
              <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6">
                लेक्टोकनी टेक फोर्स का मिशन
              </h2>
              <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                उत्तर प्रदेश के प्रत्येक जिले तथा विधान सभा से समाजवादी विचारधारा से जुड़े युवाओं को
                प्रशिक्षण देकर, उन्हें संगठन से जोड़ना और डिजिटल रूप से प्रशिक्षित कर समाजवादी पार्टी
                की ऑनलाइन एवं ग्राउंड उपस्थिति को मजबूत बनाना।
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "प्रत्येक विधानसभा से कम से कम 100 सक्रिय युवाओं को टेक फोर्स से जोड़ना।",
                  "पूरे प्रदेश में एक सक्रिय डिजिटल नेटवर्क तैयार करना, जो आने वाले चुनावों में ग्राउंड लेवल पर महत्वपूर्ण भूमिका निभाए।",
                  "सभी सदस्यों को डिजिटल स्किल ट्रेनिंग प्रदान करना जिसमें शामिल हैं— सोशल मीडिया हैंडलिंग, वीडियो एडिटिंग, पोस्टर डिजाइन, लाइव स्ट्रीमिंग आदि।",
                  "पार्टी की नीतियों, कार्यक्रमों और नेताओं की बात को डिजिटल माध्यमों से जनता तक पहुँचाना।",
                  "ऐसा समाजवादी डिजिटल नेटवर्क बनाना जो हर जिले, हर गांव और हर कार्यकर्ता से जुड़ा हो।",
                  "युवाओं की ऊर्जा और तकनीकी क्षमता के माध्यम से समाजवादी पार्टी की डिजिटल उपस्थिति को प्रभावशाली बनाना।"
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-start gap-3 ${isDark ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg`}>
                    <span className="flex-shrink-0 mt-1 h-6 w-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-16 ${isDark ? 'bg-gradient-to-r from-red-900 to-red-700' : 'bg-gradient-to-r from-red-600 to-red-700'}`}>
          <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Join the Digital Revolution
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Be part of the movement that's transforming Uttar Pradesh through technology and youth power
            </p>
            
          </div>
        </section>
      </main>

      <footer className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-900 border-gray-800'} border-t`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
         
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Samajwaditechforce. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}