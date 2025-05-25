'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
// import { Theme } from '@/styles/themes';
import { Landing } from '@/components/Pages/Landing/Landing';

const Page = () => {
  const { theme } = useTheme();
  // const [imgPath, setImgPath] = useState('');

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setImgPath(`${window.location.origin}/assets/img`);
  //   }
  // }, []);

  return (
    <Landing />
  );
};

export default Page;

// const Hero = ({ theme, imgPath }: { theme: Theme; imgPath: string }) => (
//   <section style={{ backgroundColor: theme.BACKGROUND, color: theme.TEXT }} className="text-center py-20 px-6">
//     <h1 className="text-4xl md:text-5xl font-bold mb-4">Turn Ideas into Reality</h1>
//     <p className="text-lg mb-6 max-w-2xl mx-auto">
//       Our tool helps you go from concept to launch 5x faster.
//     </p>
//     <button style={{ backgroundColor: theme.PRIMARY, color: '#fff' }} className="px-6 py-3 rounded-md hover:opacity-90 transition">
//       <a href="/dashboard">Dashboard</a>
//     </button>
//     <img src={`${imgPath}/img-placeholder-1920x1080-2.png`} alt="Mockup" className="mx-auto mt-10 max-w-xl" />
//   </section>
// );

// const SocialProof = ({ theme, imgPath }: { theme: Theme; imgPath: string }) => (
//   <section style={{ backgroundColor: theme.BACKGROUND, color: theme.TEXT }} className="py-12 text-center">
//     <p className="mb-6">Trusted by 10,000+ teams</p>
//     <div className="flex flex-wrap justify-center gap-6 opacity-70">
//       {[1, 2, 3, 4].map((num) => (
//         <img key={num} src={`${imgPath}/img-placeholder-500x500.png`} alt={`Logo ${num}`} className="h-8" />
//       ))}
//     </div>
//   </section>
// );

// const ProblemSolution = ({ theme, imgPath }: { theme: Theme; imgPath: string }) => (
//   <section style={{ backgroundColor: theme.BACKGROUND, color: theme.TEXT }} className="py-20 px-6 text-center">
//     <h2 className="text-3xl font-bold mb-4">Wasting hours managing repetitive work?</h2>
//     <p className="max-w-xl mx-auto">
//       We automate that so you can focus on what matters. Our tools save you time by handling the busywork.
//     </p>
//     <img src={`${imgPath}/img-placeholder-1920x1080.png`} alt="Automation" className="mx-auto mt-10 max-w-xl" />
//   </section>
// );

// const Features = ({ theme }: { theme: Theme }) => {
//   const features = [
//     { title: 'Fast Setup', desc: 'Get started in minutes.', icon: '⚡' },
//     { title: 'Secure by Default', desc: 'We take security seriously.', icon: '🔒' },
//     { title: '24/7 Support', desc: 'We’re always here to help.', icon: '💬' },
//   ];

//   return (
//     <section style={{ backgroundColor: theme.BACKGROUND, color: theme.TEXT }} className="py-20 px-6 text-center">
//       <h2 className="text-3xl font-bold mb-12">Features that Deliver</h2>
//       <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
//         {features.map((feature, i) => (
//           <div key={i} className="p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
//             <div className="text-4xl mb-4">{feature.icon}</div>
//             <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//             <p>{feature.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const HowItWorks = ({ theme }: { theme: Theme }) => {
//   const steps = ['Sign up', 'Connect your tools', 'Automate your workflow'];

//   return (
//     <section style={{ backgroundColor: theme.BACKGROUND, color: theme.TEXT }} className="py-20 px-6 text-center">
//       <h2 className="text-3xl font-bold mb-12">How It Works</h2>
//       <div className="flex flex-col md:flex-row justify-center gap-12">
//         {steps.map((step, i) => (
//           <div key={i} className="max-w-xs mx-auto">
//             <div style={{ color: theme.PRIMARY }} className="text-2xl font-bold mb-2">Step {i + 1}</div>
//             <p>{step}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const Testimonials = ({ theme }: { theme: Theme }) => (
//   <section style={{ backgroundColor: theme.BACKGROUND, color: theme.TEXT }} className="py-20 px-6 text-center">
//     <h2 className="text-3xl font-bold mb-12">What Customers Say</h2>
//     <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//       {[
//         { quote: '“This tool changed our workflow. It’s a must-have.”', author: '— Alex from DevCo' },
//         { quote: '“Easy to use and powerful under the hood.”', author: '— Jamie from Productive' },
//       ].map((testimonial, i) => (
//         <blockquote key={i} className="p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
//           <p className="mb-2">{testimonial.quote}</p>
//           <footer className="text-sm opacity-70">{testimonial.author}</footer>
//         </blockquote>
//       ))}
//     </div>
//   </section>
// );

// const Pricing = ({ theme }: { theme: Theme }) => (
//   <section style={{ backgroundColor: theme.BACKGROUND, color: theme.TEXT }} className="py-20 px-6 text-center">
//     <h2 className="text-3xl font-bold mb-12">Simple Pricing</h2>
//     <div className="flex flex-col md:flex-row justify-center gap-8">
//       <div className="p-8 rounded-lg shadow-md w-full max-w-xs border border-gray-200 dark:border-gray-700">
//         <h3 className="text-xl font-bold mb-4">Free</h3>
//         <p className="text-3xl font-bold mb-6">$0/mo</p>
//         <ul className="mb-6 text-sm">
//           <li>Basic automation</li>
//           <li>Community support</li>
//         </ul>
//         <button style={{ backgroundColor: theme.PRIMARY, color: '#fff' }} className="px-4 py-2 rounded hover:opacity-90">
//           Get Started
//         </button>
//       </div>
//       <div style={{ backgroundColor: theme.PRIMARY, color: '#fff' }} className="p-8 rounded-lg shadow-md w-full max-w-xs">
//         <h3 className="text-xl font-bold mb-4">Pro</h3>
//         <p className="text-3xl font-bold mb-6">$29/mo</p>
//         <ul className="mb-6 text-sm">
//           <li>Everything in Free</li>
//           <li>Priority support</li>
//           <li>Advanced integrations</li>
//         </ul>
//         <button style={{ backgroundColor: '#fff', color: theme.PRIMARY }} className="px-4 py-2 rounded hover:opacity-90">
//           Choose Pro
//         </button>
//       </div>
//     </div>
//   </section>
// );

// const FAQ = ({ theme }: { theme: Theme }) => (
//   <section style={{ backgroundColor: theme.BACKGROUND, color: theme.TEXT }} className="py-20 px-6">
//     <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
//     <div className="max-w-2xl mx-auto space-y-6">
//       {[
//         { q: 'Is there a free trial?', a: 'Yes, you can start with our free tier and upgrade anytime.' },
//         { q: 'Can I cancel anytime?', a: 'Absolutely. There are no lock-ins or contracts.' },
//       ].map((faq, i) => (
//         <details key={i} className="p-4 rounded shadow border border-gray-200 dark:border-gray-700">
//           <summary className="cursor-pointer font-medium">{faq.q}</summary>
//           <p className="mt-2">{faq.a}</p>
//         </details>
//       ))}
//     </div>
//   </section>
// );

// const FooterCTA = ({ theme }: { theme: Theme }) => (
//   <footer style={{ backgroundColor: theme.BACKGROUND, color: theme.TEXT }} className="py-20 px-6 text-center">
//     <h2 className="text-3xl font-bold mb-4">Ready to build faster?</h2>
//     <p className="mb-6">Join thousands of teams already building with us.</p>
//     <button style={{ backgroundColor: theme.PRIMARY, color: '#fff' }} className="px-6 py-3 rounded-md hover:opacity-90 transition">
//       Join Free Today
//     </button>
//   </footer>
// );
