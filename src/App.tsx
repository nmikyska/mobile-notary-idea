import React from 'react';
import { 
  Menu, 
  CheckCircle, 
  History, 
  Building2, 
  FileText, 
  MapPin, 
  Gauge, 
  EyeOff, 
  CheckCircle2, 
  Star, 
  Phone 
} from 'lucide-react';
import ImageGenerator from './components/ImageGenerator';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-mcm-beige selection:bg-burnt-orange/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-mcm-beige/95 border-b-2 border-mcm-dark">
        <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
          <div className="text-3xl font-headline italic font-bold text-deep-teal tracking-tight">Desert Notary</div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-mcm-dark font-bold hover:text-burnt-orange transition-colors duration-300 font-label text-sm uppercase tracking-widest" href="#services">Services</a>
            <a className="text-mcm-dark/70 hover:text-burnt-orange transition-colors duration-300 font-label text-sm uppercase tracking-widest" href="#about">About</a>
            <a className="text-mcm-dark/70 hover:text-burnt-orange transition-colors duration-300 font-label text-sm uppercase tracking-widest" href="#contact">Contact</a>
            <button className="bg-mcm-dark text-white px-8 py-3 font-label text-sm font-bold uppercase tracking-widest btn-mcm border-2 border-mcm-dark">
              Book Now
            </button>
          </div>
          <button className="md:hidden text-mcm-dark">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[800px] flex items-center overflow-hidden px-8 py-20 bg-mcm-beige">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 z-10"
            >
              <div className="w-20 h-2 bg-burnt-orange mb-8"></div>
              <h1 className="font-headline text-6xl md:text-8xl leading-tight text-mcm-dark mb-8">
                Palm Springs <br />
                <span className="italic text-warm-ochre">Premier</span> <br />
                Mobile Notary.
              </h1>
              <p className="font-body text-xl text-mcm-dark/80 max-w-lg mb-12 leading-relaxed border-l-4 border-avocado-green pl-6">
                Reliable. Professional. Bespoke. Experience seamless legal authentication delivered to your doorstep in the heart of the Coachella Valley.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-burnt-orange text-white px-10 py-5 font-label text-lg font-bold uppercase tracking-widest btn-mcm">
                  Schedule Your Visit
                </button>
                <button className="bg-transparent border-2 border-mcm-dark text-mcm-dark px-10 py-5 font-label text-lg font-bold uppercase tracking-widest btn-mcm">
                  View Services
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative"
            >
              <div className="relative z-10 border-8 border-mcm-dark mcm-shadow">
                <img 
                  alt="Luxury Palm Springs architecture" 
                  className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1920"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-avocado-green z-0 hidden lg:block"></div>
              <div className="absolute -bottom-12 -left-12 w-72 bg-deep-teal text-white p-10 z-20 hidden md:block border-t-8 border-burnt-orange">
                <CheckCircle className="text-warm-ochre w-12 h-12 mb-4" />
                <p className="font-headline italic text-2xl mb-2">Certified & Bonded</p>
                <p className="text-[10px] font-body uppercase tracking-[0.3em] opacity-70">State of California</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Specialized Expertise */}
        <section className="py-32 px-8 bg-mcm-dark text-white overflow-hidden" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <div className="max-w-xl">
                <h2 className="font-headline text-5xl md:text-6xl mb-8">Specialized Expertise</h2>
                <p className="font-body text-mcm-beige/70 text-lg leading-relaxed">Bespoke legal documentation services tailored for high-stakes transactions and private matters.</p>
              </div>
              <div className="h-24 w-24 bg-burnt-orange hidden md:block"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
              <div className="md:col-span-7 bg-deep-teal p-12 flex flex-col justify-between min-h-[500px] border-r-2 border-mcm-dark">
                <div>
                  <span className="text-xs font-label uppercase tracking-[0.4em] text-warm-ochre mb-10 block font-bold">Elite Service</span>
                  <h3 className="font-headline text-4xl md:text-5xl mb-8">Estate Planning & Trusts</h3>
                  <p className="font-body text-white/80 max-w-md text-xl leading-relaxed">Comprehensive notarization for living trusts, wills, and power of attorney documents with absolute discretion and care.</p>
                </div>
                <div className="flex items-center gap-6 mt-12 border-t border-white/20 pt-8">
                  <History className="text-burnt-orange w-10 h-10" />
                  <span className="font-label text-xs uppercase tracking-widest font-bold">Precision Guaranteed</span>
                </div>
              </div>
              <div className="md:col-span-5 grid grid-rows-2 gap-1">
                <div className="bg-warm-ochre p-12 flex flex-col justify-between">
                  <div className="w-12 h-12 bg-mcm-dark/20 flex items-center justify-center">
                    <Building2 className="text-mcm-dark w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-headline text-3xl text-mcm-dark mb-4">Loan Signing</h3>
                    <p className="font-body text-mcm-dark/80 text-base">Escrow-ready mobile signing agent for luxury residential and commercial real estate closings.</p>
                  </div>
                </div>
                <div className="bg-avocado-green p-12 flex flex-col justify-between">
                  <div className="w-12 h-12 bg-mcm-dark/20 flex items-center justify-center">
                    <FileText className="text-mcm-dark w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-headline text-3xl text-mcm-dark mb-4">General Acts</h3>
                    <p className="font-body text-mcm-dark/80 text-base">Affidavits, acknowledgments, and oaths handled with professional punctuality at your location.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Standard of Excellence */}
        <section className="py-32 px-8 bg-mcm-beige relative overflow-hidden" id="about">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6 relative">
                <div className="bg-deep-teal absolute -top-12 -left-12 w-64 h-64 -z-10"></div>
                <div className="space-y-6">
                  <img 
                    className="w-full aspect-[3/4] object-cover border-4 border-mcm-dark grayscale" 
                    src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&q=80&w=800"
                    referrerPolicy="no-referrer"
                  />
                  <div className="bg-burnt-orange p-10 text-white">
                    <p className="font-headline italic text-5xl mb-2">15+</p>
                    <p className="text-xs font-label uppercase tracking-widest font-bold">Years Experience</p>
                  </div>
                </div>
                <div className="space-y-6 pt-16">
                  <div className="bg-avocado-green p-10 aspect-square flex flex-col justify-end text-white border-b-8 border-mcm-dark">
                    <MapPin className="w-12 h-12 mb-6" />
                    <p className="font-label font-bold uppercase tracking-widest text-sm">Hyper-Local Expertise</p>
                  </div>
                  <img 
                    className="w-full aspect-[4/5] object-cover border-4 border-mcm-dark" 
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-headline text-5xl md:text-7xl text-mcm-dark mb-12">The Standard of Excellence</h2>
              <div className="space-y-12">
                {[
                  { icon: Gauge, title: "Fast Response Guarantee", text: "We understand that time is of the essence. Our mobile units are strategically positioned throughout Palm Springs for rapid deployment." },
                  { icon: CheckCircle, title: "Certified Professionalism", text: "NNA Certified, Bonded, and Insured. Every appointment is handled with the highest level of legal compliance and etiquette." },
                  { icon: EyeOff, title: "Absolute Discretion", text: "Specializing in high-profile client needs, ensuring privacy and confidentiality for every signature captured." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 bg-mcm-dark text-white flex items-center justify-center flex-shrink-0 group-hover:bg-burnt-orange transition-colors">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div className="border-b-2 border-mcm-dark/10 pb-8 flex-grow">
                      <h4 className="font-headline text-2xl mb-3">{item.title}</h4>
                      <p className="font-body text-mcm-dark/60 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 px-8 bg-burnt-orange text-white">
          <div className="max-w-7xl mx-auto text-center mb-24">
            <span className="text-xs font-label uppercase tracking-[0.5em] text-mcm-dark mb-6 block font-bold">The Process</span>
            <h2 className="font-headline text-5xl md:text-7xl">Three Steps to Done</h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Request", text: "Fill out our brief online booking form or call us directly to schedule your location and time.", color: "border-warm-ochre" },
              { num: "02", title: "Verification", text: "Our notary arrives at your location, verifies your identification, and reviews the documentation.", color: "border-avocado-green" },
              { num: "03", title: "Completion", text: "Documents are signed, sealed, and finalized on the spot. You're ready to proceed with confidence.", color: "border-deep-teal", isWhite: true }
            ].map((step, i) => (
              <div key={i} className={`relative p-12 ${step.isWhite ? 'bg-white text-mcm-dark' : 'bg-mcm-dark text-white'} border-t-8 ${step.color} mcm-shadow`}>
                <div className={`absolute -top-6 -right-6 w-16 h-16 ${step.isWhite ? 'bg-deep-teal text-white' : 'bg-mcm-beige text-mcm-dark'} flex items-center justify-center font-headline italic text-4xl`}>
                  {step.isWhite ? <CheckCircle2 className="w-8 h-8" /> : step.num}
                </div>
                <h3 className="font-headline text-3xl mb-6">{step.title}</h3>
                <p className={`font-body ${step.isWhite ? 'text-mcm-dark/60' : 'text-mcm-beige/70'} text-lg`}>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 px-8 bg-mcm-beige">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 border-b-2 border-mcm-dark pb-10">
              <div>
                <h2 className="font-headline text-5xl text-mcm-dark mb-4">Trusted in the Valley</h2>
                <p className="font-body text-mcm-dark/60 text-xl">Exceptional service reflected in our client experiences.</p>
              </div>
              <div className="flex gap-4">
                <span className="px-6 py-3 bg-deep-teal text-white text-xs font-bold uppercase tracking-widest border border-mcm-dark">NNA Certified</span>
                <span className="px-6 py-3 bg-avocado-green text-white text-xs font-bold uppercase tracking-widest border border-mcm-dark">Bonded $15k</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { name: "Julian H.", role: "The Movie Colony Resident", color: "bg-warm-ochre", text: "The most professional notary service I've used in Palm Springs. Arrived at my estate exactly on time and handled our sensitive trust documents with total care." },
                { name: "Sarah M.", role: "Signature Properties PS", color: "bg-avocado-green", text: "Essential for our real estate firm. They are our go-to for all luxury home closings. Impeccable attention to detail and always perfectly presented." },
                { name: "Thomas L.", role: "Client", color: "bg-deep-teal", text: "Fast response for a hospital visit during a difficult family time. We are so grateful for their kindness and efficiency in handling our POA." }
              ].map((t, i) => (
                <div key={i} className="bg-white p-12 border-2 border-mcm-dark relative">
                  <div className={`absolute top-0 right-0 w-12 h-12 ${t.color}`}></div>
                  <div className="flex text-burnt-orange mb-8">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="font-body text-mcm-dark italic mb-10 text-lg leading-relaxed border-l-4 border-deep-teal pl-6">"{t.text}"</p>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-mcm-dark text-white flex items-center justify-center font-bold text-xl">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-label text-sm font-bold uppercase tracking-widest">{t.name}</p>
                      <p className="text-[10px] text-mcm-dark/50 uppercase tracking-[0.2em]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8 mb-20">
          <div className="max-w-7xl mx-auto bg-deep-teal p-16 md:p-32 text-center relative border-8 border-mcm-dark">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '30px 30px' }}></div>
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-burnt-orange z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-avocado-green z-0"></div>
            <h2 className="font-headline text-5xl md:text-8xl text-white mb-10 relative z-10 leading-tight">Ready to secure your <br /><span className="italic text-warm-ochre">legal future?</span></h2>
            <p className="font-body text-mcm-beige/80 text-xl mb-16 max-w-2xl mx-auto relative z-10">Our mobile units are standing by to assist you anywhere in Palm Springs, Rancho Mirage, and Palm Desert.</p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center relative z-10">
              <button className="bg-white text-mcm-dark px-12 py-6 font-label text-lg font-bold uppercase tracking-widest btn-mcm border-2 border-mcm-dark">
                Book Your Notary Now
              </button>
              <a className="flex items-center justify-center gap-4 text-white font-bold text-2xl hover:text-warm-ochre transition-colors" href="tel:7605550123">
                <Phone className="w-8 h-8" />
                (760) 555-0123
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-mcm-dark text-white pt-24 pb-12 px-8">
        <div className="max-w-7xl mx-auto border-t-2 border-white/10 pt-16 grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-8">
            <div className="font-headline text-4xl italic font-bold text-warm-ochre">Desert Notary</div>
            <p className="font-body text-sm text-mcm-beige/50 max-w-xs leading-relaxed uppercase tracking-tighter">© 2024 Desert Notary Palm Springs. Bespoke Legal Authentication. California Commission #0000000</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-deep-teal border border-white/20 hover:bg-burnt-orange transition-colors"></div>
              <div className="w-10 h-10 bg-avocado-green border border-white/20 hover:bg-burnt-orange transition-colors"></div>
            </div>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-warm-ochre">Information</p>
              <ul className="space-y-4">
                <li><a className="text-sm text-mcm-beige/60 hover:text-white transition-all uppercase tracking-widest" href="#">Terms of Service</a></li>
                <li><a className="text-sm text-mcm-beige/60 hover:text-white transition-all uppercase tracking-widest" href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-avocado-green">Compliance</p>
              <ul className="space-y-4">
                <li><a className="text-sm text-mcm-beige/60 hover:text-white transition-all uppercase tracking-widest" href="#">Accessibility</a></li>
                <li><a className="text-sm text-mcm-beige/60 hover:text-white transition-all uppercase tracking-widest" href="#">Notary Public Disclosures</a></li>
              </ul>
            </div>
            <div className="hidden md:block">
              <div className="w-full aspect-square bg-deep-teal/20 border-2 border-white/10 flex items-center justify-center">
                <div className="w-1/2 h-1/2 border-2 border-warm-ochre rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Components */}
      <ImageGenerator />
    </div>
  );
}
