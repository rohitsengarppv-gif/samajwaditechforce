"use client";

import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-red-50 text-gray-900 font-sans">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white border-b border-red-200 backdrop-blur-sm bg-opacity-95 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <img
                            src="https://res.cloudinary.com/dssmutzly/image/upload/v1763543757/928c21d2-4d75-46a6-9265-0531d5433c29_txhwun.png"
                            alt="Samajwaditechforce logo"
                            className="h-10 w-10 object-contain"
                        />
                        <span className="text-xl font-bold text-red-600">Samajwadi Tech Force</span>
                    </Link>
                    <Link
                        href="/"
                        className="px-4 py-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 font-medium transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border-t-4 border-red-600">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
                    <p className="text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-red-600 mb-4">1. Introduction</h2>
                            <p>
                                Welcome to Samajwadi Tech Force. We are committed to protecting your privacy and ensuring the security of your personal information.
                                This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or join our digital initiatives.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-red-600 mb-4">2. Information We Collect</h2>
                            <p className="mb-4">We may collect the following types of information:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Personal Information:</strong> Name, phone number, email address, and location details when you register as a volunteer or member.</li>
                                <li><strong>Usage Data:</strong> Information about how you interact with our website, such as pages visited and time spent.</li>
                                <li><strong>Device Information:</strong> Technical data including your IP address, browser type, and operating system.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-red-600 mb-4">3. How We Use Your Information</h2>
                            <p className="mb-4">We use the collected information for the following purposes:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To coordinate and manage the Samajwadi Tech Force volunteer network.</li>
                                <li>To provide access to digital training resources and workshops.</li>
                                <li>To communicate important updates, campaign information, and event details.</li>
                                <li>To improve our website functionality and user experience.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-red-600 mb-4">4. Data Sharing and Security</h2>
                            <p>
                                We do not sell or rent your personal information to third parties. Your data is shared only within the Samajwadi Party organization
                                for coordination purposes. We implement appropriate technical and organizational measures to protect your data against unauthorized access,
                                alteration, or destruction.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-red-600 mb-4">5. Your Rights</h2>
                            <p>
                                You have the right to access, correct, or request the deletion of your personal information. If you wish to exercise these rights
                                or have any questions about our data practices, please contact us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-red-600 mb-4">6. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                                <br />
                                <span className="font-medium text-gray-900">Email:</span> contact@samajwaditechforce.com
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-12">
                <div className="max-w-7xl mx-auto px-6 text-center sm:flex sm:justify-between sm:items-center">
                    <p>© {new Date().getFullYear()} Samajwadi Tech Force. All rights reserved.</p>
                    <div className="flex gap-6 justify-center mt-4 sm:mt-0">
                        <Link href="/privacy-policy" className="text-red-500 hover:text-red-400">Privacy Policy</Link>
                        <Link href="/about" className="hover:text-red-400 transition-colors">About Us</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
