import React from "react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow-md p-4 rounded-2xl mb-6">
        <h1 className="text-3xl font-bold text-center">Somnath Goswami</h1>
        <p className="text-center text-gray-600">Web Analytics & SEO Expert</p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-700">
            I am a Web Analytics and SEO expert with experience in GA4, Adobe
            Analytics, reporting, JavaScript, and digital strategy.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Google Analytics (GA4)</li>
            <li>Adobe Analytics</li>
            <li>SEO Planning & Strategy</li>
            <li>JavaScript, HTML, CSS</li>
            <li>React, DSA</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>GBP Profile Management</li>
            <li>SEO Strategy for Duct Dynasty</li>
            <li>Analytics Dashboard using GA4</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          <p className="text-gray-700">
            Working at Virtual Employee (GBP), previously a DAV school teacher.
            Experience in client-side SEO reporting and analytics.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <p className="text-gray-700">MCA, PGDCA, BCA</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-700">somnath@example.com</p>
        </div>
      </section>

      <footer className="text-center text-gray-600 mt-10">
        &copy; 2025 Somnath Goswami. All rights reserved.
      </footer>
    </main>
  );
}
