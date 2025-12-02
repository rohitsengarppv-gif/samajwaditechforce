"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white border-b border-red-200 backdrop-blur-sm bg-opacity-95 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <img
                            src="https://res.cloudinary.com/dssmutzly/image/upload/v1763543757/928c21d2-4d75-46a6-9265-0531d5433c29_txhwun.png"
                            alt="Samajwadi Tech Force logo"
                            className="h-10 w-10 object-contain"
                        />
                        <span className="text-xl font-bold text-red-600">Samajwadi Tech Force</span>
                    </Link>
                    <div className="flex gap-4">
                        <Link
                            href="/"
                            className="px-4 py-2 rounded-lg text-gray-600 hover:text-red-600 font-medium transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="px-4 py-2 rounded-lg bg-red-50 text-red-700 font-medium transition-colors"
                        >
                            About Us
                        </Link>
                    </div>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative py-20 bg-gradient-to-br from-red-50 to-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-red-100 opacity-20 rounded-l-full transform translate-x-1/3"></div>
                    <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                                Empowering the Future of <span className="text-red-600">Uttar Pradesh</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Samajwadi Tech Force is a dedicated initiative to bridge the gap between technology and grassroots politics.
                                We are building a network of digitally empowered youth committed to the socialist ideology and the development of the state.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-6 sm:px-12">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://res.cloudinary.com/dssmutzly/image/upload/v1763543281/akhilesh-yadav-hd-png-images-thumbnail-1688183026_sdzrpc.png"
                                    alt="Visionary Leadership"
                                    className="w-full h-full object-cover bg-red-50"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                                    <p className="text-white font-bold text-xl">Guided by the vision of Shri Akhilesh Yadav</p>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-red-600 mb-6">Our Vision</h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    Our vision is to create a digitally literate and politically conscious youth force that can effectively communicate
                                    the party's message of development, equality, and social justice to every corner of Uttar Pradesh.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Digital Literacy for Political Workers",
                                        "Strengthening Democracy through Technology",
                                        "Connecting Grassroots to Leadership",
                                        "Empowering Youth with Modern Skills"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <span className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">✓</span>
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Do Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6 sm:px-12">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
                            <p className="text-gray-600">
                                We don't just talk about change; we equip our members with the tools to make it happen.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Training & Workshops",
                                    desc: "Regular workshops on social media management, content creation, and digital campaigning strategies.",
                                    icon: "🎓"
                                },
                                {
                                    title: "Network Building",
                                    desc: "Creating a robust network of volunteers across all 403 assembly constituencies of Uttar Pradesh.",
                                    icon: "🌐"
                                },
                                {
                                    title: "Content Strategy",
                                    desc: "Developing and distributing high-quality digital content to spread the party's achievements and vision.",
                                    icon: "📱"
                                }
                            ].map((card, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600">
                                    <div className="text-4xl mb-4">{card.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                                    <p className="text-gray-600">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Join Us CTA */}
                <section className="py-20 bg-red-600 text-white text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
                        <p className="text-xl text-red-100 mb-8">
                            Join the Samajwadi Tech Force today and become a part of the digital revolution in Uttar Pradesh politics.
                        </p>
                        <Link
                            href="/"
                            className="inline-block px-8 py-3 bg-white text-red-600 font-bold rounded-full hover:bg-red-50 transition-colors shadow-lg"
                        >
                            Join the Force
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-12">
                <div className="max-w-7xl mx-auto px-6 text-center sm:flex sm:justify-between sm:items-center">
                    <p>© {new Date().getFullYear()} Samajwadi Tech Force. All rights reserved.</p>
                    <div className="flex gap-6 justify-center mt-4 sm:mt-0">
                        <Link href="/privacy-policy" className="hover:text-red-400 transition-colors">Privacy Policy</Link>
                        <Link href="/about" className="text-red-500 hover:text-red-400">About Us</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
