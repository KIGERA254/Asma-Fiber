/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Wifi, 
  Clock, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Star,
  Users,
  CreditCard,
  Headphones
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Packages', href: '#packages' },
    { name: 'Coverage', href: '#coverage' },
    { name: 'Support', href: '#support' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Wifi className="text-white w-6 h-6" />
              </div>
              <span className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
                ASMA<span className="text-amber-cta">FIBER</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium hover:text-accent transition-colors ${isScrolled ? 'text-text-dark' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#packages"
              className="bg-primary text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
              onClick={() => console.log('conversion event: get_connected_nav')}
            >
              Get Connected
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-dark-grey hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#packages"
                className="block w-full text-center bg-amber-cta text-white px-6 py-3 rounded-md font-bold mt-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  console.log('conversion event: get_connected_mobile_nav');
                }}
              >
                Get Connected
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero-section hero-pattern bg-white rounded-theme p-10 flex flex-col justify-center border border-primary/10 shadow-theme">
      <p className="text-accent font-bold uppercase tracking-widest text-xs mb-3">Karibu Asma Fiber • Tumesambaa Kenya</p>
      
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-4">
        Lightning-Fast Fibre Internet <br />for Kenya 🇰🇪
      </h1>
      
      <p className="text-lg text-text-muted mb-8 max-w-xl">
        From KES 2,999/month. Truly unlimited. Same-week installation in Nairobi, Mombasa, and beyond.
      </p>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
        <a 
          href="#packages" 
          className="bg-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-bold text-center transition-all transform hover:scale-105 shadow-lg"
          onClick={() => console.log('conversion event: hero_view_packages')}
        >
          View Packages
        </a>
        <a 
          href="#coverage" 
          className="bg-accent hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-bold text-center transition-all shadow-lg"
          onClick={() => console.log('conversion event: hero_check_coverage')}
        >
          Check Coverage
        </a>
      </div>

      <div className="flex items-center space-x-6 text-text-muted">
        <div className="flex items-center space-x-2">
          <CheckCircle2 size={16} className="text-accent" />
          <span className="text-xs font-bold">No Hidden Fees</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle2 size={16} className="text-accent" />
          <span className="text-xs font-bold">M-Pesa Ready</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle2 size={16} className="text-accent" />
          <span className="text-xs font-bold">24/7 Support</span>
        </div>
      </div>
    </section>
  );
};

const TrustIndicators = () => {
  const [count, setCount] = useState(412);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setCount(prev => prev + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#EBF2F3] p-4 rounded-lg text-center font-bold text-xs text-primary shadow-sm">
      Joining {count}+ Happy Kenyan Homes
    </div>
  );
};

const Packages = ({ onSelectPlan }: { onSelectPlan: (plan: string) => void }) => {
  const plans = [
    {
      name: 'BASIC',
      speed: '10 Mbps',
      price: '2,999',
      popular: false,
    },
    {
      name: 'PRO',
      speed: '50 Mbps',
      price: '5,499',
      popular: true,
    },
    {
      name: 'ULTRA',
      speed: '100 Mbps',
      price: '8,999',
      popular: false,
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4 mt-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative bg-white rounded-theme p-6 text-center border transition-all ${plan.popular ? 'border-accent shadow-[0_8px_25px_rgba(244,162,97,0.15)]' : 'border-gray-100'}`}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase">
              Most Popular
            </div>
          )}
          
          <div className="font-bold text-sm mb-1">{plan.name}</div>
          <div className="text-2xl font-black text-primary mb-2">{plan.speed}</div>
          <div className="text-xl font-bold mb-4">
            KES {plan.price}<span className="text-xs font-normal text-text-muted">/mo</span>
          </div>

          <button
            onClick={() => {
              onSelectPlan(plan.name);
              console.log(`conversion event: select_plan_${plan.name.toLowerCase()}`);
            }}
            className="w-full bg-primary text-white py-2 rounded-lg font-bold text-xs hover:bg-opacity-90 transition-all"
          >
            Sign Up Now
          </button>
        </div>
      ))}
    </div>
  );
};

const WhyChoose = () => {
  const features = [
    '24/7 Local Support (Swahili/English)',
    'No Fair Usage Policy (Unlimited)',
    'Pay via M-Pesa Lipa Na M-Pesa',
    'Free Router & Installation'
  ];

  return (
    <div className="bg-white rounded-theme p-6 shadow-theme">
      <h3 className="text-base font-bold text-primary mb-4 flex items-center gap-2">
        Why Choose Us?
      </h3>
      <div className="space-y-3">
        {features.map((f) => (
          <div key={f} className="flex items-center gap-3 text-xs">
            <span className="text-primary font-black">✓</span> {f}
          </div>
        ))}
      </div>
    </div>
  );
};

const CoverageCheck = () => {
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) return;
    
    setStatus('loading');
    console.log(`conversion event: check_coverage_start_${address}`);
    
    setTimeout(() => {
      setStatus('success');
      console.log('conversion event: check_coverage_success');
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-theme p-6 shadow-theme">
      <h3 className="text-base font-bold text-primary mb-4 flex items-center gap-2">
        Check Coverage
      </h3>
      <form onSubmit={handleCheck} className="space-y-3">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="e.g. Westlands, Nairobi"
          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-accent text-white py-2 rounded-lg font-bold text-sm hover:bg-opacity-90 transition-all disabled:opacity-50"
        >
          {status === 'loading' ? 'Checking...' : 'Check Availability'}
        </button>
      </form>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 bg-primary text-white rounded-lg text-xs font-medium"
          >
            Great! We serve {address}. Calling you soon!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};



const Testimonials = () => {
  return (
    <div className="bg-white rounded-theme p-6 shadow-theme">
      <p className="italic text-xs text-text-muted border-l-4 border-accent pl-4 mb-3">
        "Best provider in Eldoret! Installation took only 2 days and the 50Mbps is steady for my remote work."
      </p>
      <p className="text-[11px] font-bold text-text-dark">— Otieno J., Nakuru</p>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need to buy my own router?',
      a: 'No, we provide a high-performance dual-band Wi-Fi router for free with every new installation.'
    },
    {
      q: 'Is there a long-term contract?',
      a: 'We offer flexible month-to-month plans. There are no long-term binding contracts.'
    },
    {
      q: 'Can I pay with M-Pesa?',
      a: 'Yes! We support Lipa na M-Pesa. Your account is activated instantly.'
    }
  ];

  return (
    <div className="bg-white rounded-theme p-8 border border-gray-100 shadow-theme mt-10">
      <h3 className="text-xl font-bold text-primary mb-6">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-gray-50 pb-4">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center text-left hover:text-accent transition-colors"
            >
              <span className="font-bold text-sm text-primary">{faq.q}</span>
              <ChevronDown className={`text-gray-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} size={16} />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pt-3 text-xs text-text-muted leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

const LeadForm = ({ selectedPlan }: { selectedPlan: string }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plan: selectedPlan || 'BASIC',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('conversion event: lead_form_submit_start', formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log('conversion event: lead_form_submit_success');
      setFormData({ name: '', phone: '', email: '', plan: 'BASIC', location: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-theme p-8 md:p-10 border border-gray-100 shadow-theme">
      <h3 className="text-2xl font-black text-primary mb-6">Get Connected Today</h3>
      {isSuccess ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-600 w-10 h-10" />
          </div>
          <h4 className="text-2xl font-bold text-primary mb-2">Request Received!</h4>
          <p className="text-gray-600">Thank you for choosing Asma Fiber. Our team will call you shortly.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                placeholder="e.g. John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Phone Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                placeholder="07XX XXX XXX"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Select Package</label>
              <select
                value={formData.plan}
                onChange={(e) => setFormData({...formData, plan: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary bg-white text-sm"
              >
                <option>BASIC (10 Mbps)</option>
                <option>PRO (50 Mbps)</option>
                <option>ULTRA (100 Mbps)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Location</label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                placeholder="e.g. Kilimani, Nairobi"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-opacity-90 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-lg disabled:opacity-50"
          >
            {isSubmitting ? 'Processing...' : 'Request Installation'}
          </button>
        </form>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 px-10 flex flex-col md:flex-row justify-between items-center text-[12px] text-text-muted">
      <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all mb-4 md:mb-0">
        <span className="font-bold">Partners:</span>
        <strong className="text-text-dark">Safaricom Peering</strong>
        <strong className="text-text-dark">KIXP</strong>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/512px-M-PESA_LOGO-01.svg.png" 
          alt="M-Pesa" 
          className="h-6 opacity-80"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="text-center md:text-right">
        &copy; {new Date().getFullYear()} Asma Fiber Kenya. Nairobi Office: Pamoja Towers, 4th Floor. 
        <span className="ml-4 font-bold text-text-dark">Call: +254 700 123 456</span>
      </div>
    </footer>
  );
};

const ExitIntentModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('conversion event: exit_intent_signup', email);
    setIsSuccess(true);
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
          ></motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl overflow-hidden"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-primary">
              <X size={24} />
            </button>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-cta/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              {isSuccess ? (
                <div className="py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-green-600 w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-2">You're on the list!</h4>
                  <p className="text-gray-600">Check your email for your 10% discount code.</p>
                </div>
              ) : (
                <>
                  <div className="inline-block bg-amber-cta text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                    Wait! Don't Miss Out
                  </div>
                  <h4 className="text-3xl font-extrabold text-primary mb-4">Get 10% Off Your First 3 Months</h4>
                  <p className="text-gray-600 mb-8">
                    Join our newsletter and receive a special discount code for your new fibre connection.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-center"
                    />
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all"
                    >
                      Claim My Discount
                    </button>
                    <button 
                      type="button"
                      onClick={onClose}
                      className="text-gray-400 text-sm font-medium hover:text-primary transition-colors"
                    >
                      No thanks, I prefer paying full price
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const MobileStickyCTA = () => {
  return (
    <a
      href="https://wa.me/254700123456"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-10 z-40 bg-[#25D366] text-white px-6 py-3 rounded-full flex items-center gap-3 font-bold shadow-2xl transition-all transform hover:scale-105"
      onClick={() => console.log('conversion event: whatsapp_sticky_click')}
    >
      <MessageCircle size={20} />
      <span>WhatsApp Us</span>
    </a>
  );
};

// --- Main App ---

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [showExitModal, setShowExitModal] = useState(false);
  const [hasShownExitModal, setHasShownExitModal] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExitModal) {
        setShowExitModal(true);
        setHasShownExitModal(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShownExitModal]);

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow grid lg:grid-cols-[1fr_340px] gap-6 px-10 py-8 mt-20">
        <div className="space-y-6">
          <Hero />
          <Packages onSelectPlan={handleSelectPlan} />
          <div id="contact" className="mt-8">
            <LeadForm selectedPlan={selectedPlan} />
          </div>
          <FAQ />
        </div>

        <aside className="space-y-6">
          <CoverageCheck />
          <WhyChoose />
          <Testimonials />
          <TrustIndicators />
        </aside>
      </main>

      <Footer />
      
      <MobileStickyCTA />
      
      <ExitIntentModal 
        isOpen={showExitModal} 
        onClose={() => setShowExitModal(false)} 
      />
    </div>
  );
}

/**
 * HOW TO DEPLOY:
 * 1. This is a React application built with Tailwind CSS.
 * 2. To deploy, run `npm run build` to generate the static files in the `dist` folder.
 * 3. Upload the contents of the `dist` folder to any static hosting provider (Netlify, Vercel, GitHub Pages, etc.).
 * 4. For real form submissions, integrate a service like Formspree or Netlify Forms by updating the `handleSubmit` function in the `LeadForm` component.
 * 5. Update the phone numbers and WhatsApp links with your actual business details.
 */
