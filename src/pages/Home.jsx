import { Link } from 'react-router-dom';
import { FiPhone, FiCheck, FiArrowRight, FiStar, FiAward, FiClock, FiUsers, FiTool, FiShield } from 'react-icons/fi';
import { FaSnowflake, FaThermometerHalf, FaWind, FaBuilding, FaBolt, FaQuoteLeft } from 'react-icons/fa';

const Home = () => {
  const services = [
    {
      icon: FaSnowflake,
      title: 'HVAC Installation',
      description: 'Professional installation of heating and cooling systems designed for your specific needs.',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
    },
    {
      icon: FiTool,
      title: 'Repair & Maintenance',
      description: 'Expert repairs and continuous preventive maintenance to keep your systems running smoothly.',
      iconBg: 'bg-orange-500/10',
      iconColor: 'text-orange-400',
    },
    {
      icon: FaBolt,
      title: 'Upgrades & Efficiency',
      description: 'Modernize your HVAC infrastructure with our energy-saving efficiency upgrades.',
      iconBg: 'bg-yellow-500/10',
      iconColor: 'text-yellow-400',
    },
    {
      icon: FaWind,
      title: 'Ventilation & Air Quality',
      description: 'Breathe easier with our advanced ventilation and air purification solutions.',
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-400',
    },
    {
      icon: FaBuilding,
      title: 'Commercial HVAC',
      description: 'Comprehensive cooling and heating solutions tailored for commercial businesses.',
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-400',
    },
    {
      icon: FiClock,
      title: 'Emergency Services',
      description: '24/7 rapid response team ready to handle any HVAC emergency when you need us.',
      iconBg: 'bg-red-500/10',
      iconColor: 'text-red-400',
    },
  ];

  const stats = [
    { value: '25+', label: 'Years Experience', icon: FiAward },
    { value: '10K+', label: 'Happy Customers', icon: FiUsers },
    { value: '24/7', label: 'Emergency Service', icon: FiClock },
    { value: '100%', label: 'Satisfaction', icon: FiStar },
  ];

  const whyChooseUs = [
    'Certified & Licensed Technicians',
    'Transparent Pricing - No Hidden Fees',
    '100% Satisfaction Guarantee',
    'Energy-Efficient Solutions',
    'Same-Day Service Available',
    'Comprehensive Warranty Coverage',
  ];

  const testimonials = [
    {
      name: 'Michael Johnson',
      role: 'Homeowner',
      text: 'BestHVACinUSA transformed our home comfort. Their team was professional, punctual, and the installation was flawless. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      role: 'Business Owner',
      text: 'Outstanding commercial HVAC service! They saved us thousands on energy bills with their efficiency upgrades. The best decision we made.',
      rating: 5,
    },
    {
      name: 'David Martinez',
      role: 'Property Manager',
      text: 'Their 24/7 emergency service is a lifesaver. Fast response, expert technicians, and fair pricing even during holidays.',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'What signs indicate my HVAC needs repair?',
      answer: 'Look for weak airflow, uneven temperatures, strange banging or rattling noises, unexpected spikes in energy bills, and unpleasant odors coming from vents.',
    },
    {
      question: 'How long does a typical installation take?',
      answer: 'Most residential installations are completed within 1-3 days. Complex commercial projects may take longer depending on system size and requirements.',
    },
    {
      question: 'What is included in routine maintenance?',
      answer: 'Our maintenance includes changing filters, cleaning coils, checking refrigerant levels, inspecting ductwork for leaks, and testing thermostat calibration.',
    },
    {
      question: 'How often should I schedule service?',
      answer: 'We highly recommend professional maintenance twice a year: once in the spring for your AC system and once in the fall for your heating system.',
    },
  ];

  return (
    <div className="bg-[#0a1628] font-sans text-slate-200">
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 lg:pt-52 lg:pb-40 overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-4">
          
          <div className="inline-flex items-center gap-4 px-4 py-2 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            24/7 Emergency Service Available
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Expert <span className="text-[#38bdf8]">HVAC Services</span> <br className="hidden lg:block"/> for Your Comfort
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed mx-auto text-center">
            Providing reliable, energy-efficient heating, ventilation, and air conditioning solutions for homes and businesses across the USA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 w-full">
            <Link
              to="/contact"
              className="w-full w-auto inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#f97316] text-white rounded-xl font-bold text-lg hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-orange-500/20"
            >
              Get Free Quote
              <FiArrowRight />
            </Link>
            <a
              href="tel:+13213860371"
              className="w-full inline-flex items-center justify-center gap-4 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              <FiPhone className="text-[#f97316]" />
              +1 (321) 386-0371
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 opacity-90">
            <div className="flex items-center gap-2 text-gray-300">
              <FiShield className="text-green-400 text-xl" />
              <span className="text-sm font-semibold">Licensed</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FiAward className="text-yellow-400 text-xl" />
              <span className="text-sm font-semibold">Certified</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FiStar className="text-orange-400 text-xl" />
              <span className="text-sm font-semibold">Rated 5/5</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Distinct Section with Darker BG */}
      <section className="py-20 bg-[#081221] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 mb-5 bg-[#1e3a5f]/40 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-blue-500/30 transition-colors">
                  <stat.icon className="text-3xl text-[#38bdf8]" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - More Spacing */}
      <section className="py-28 px-6">
        <div className="container mx-auto ">
          <div className="text-center mx-auto mb-20 flex flex-col items-center gap-4 ">
            <span className="text-[#38bdf8] text-sm font-bold uppercase tracking-wider mb-3 block">Our Services</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Complete <span className="text-[#38bdf8]">HVAC Solutions</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Tailored heating and cooling services designed to maximize your comfort and minimize energy costs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-[#0f2744] border border-white/5 rounded-3xl p-10 hover:border-[#38bdf8]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <service.icon className="text-9xl text-white transform rotate-12 -mr-8 -mt-8" />
                </div>
                
                <div className={`relative w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className={`text-2xl ${service.iconColor}`} />
                </div>
                <h3 className="relative text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="relative text-slate-400 leading-relaxed mb-6">{service.description}</p>
                <Link to="/contact" className="relative inline-flex items-center text-[#38bdf8] font-semibold group-hover:gap-2 transition-all">
                  Get details <FiArrowRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Generous Spacing */}
      <section className="py-28 bg-[#0f2744]/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                 {/* Visual Cards */}
                 <div className="space-y-6 mt-8">
                  <div className="bg-[#1e3a5f]/20 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center">
                     <FaSnowflake className="text-4xl text-blue-400 mx-auto mb-3" />
                     <h4 className="text-white font-bold">Cooling</h4>
                  </div>
                  <div className="bg-[#1e3a5f]/20 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center">
                     <FiShield className="text-4xl text-green-400 mx-auto mb-3" />
                     <h4 className="text-white font-bold">Reliable</h4>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-[#1e3a5f]/20 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center">
                     <FaThermometerHalf className="text-4xl text-orange-400 mx-auto mb-3" />
                     <h4 className="text-white font-bold">Heating</h4>
                  </div>
                  <div className="bg-[#1e3a5f]/20 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center">
                     <FaBolt className="text-4xl text-yellow-400 mx-auto mb-3" />
                     <h4 className="text-white font-bold">Efficient</h4>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[#f97316] text-sm font-bold uppercase tracking-wider mb-2 block">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                The Smart Choice for Home Comfort
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                We combine decades of experience with top-tier technology to deliver HVAC solutions you can trust. No hidden fees, just honest service.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <FiCheck className="text-green-500 text-xs" />
                    </div>
                    <span className="text-slate-300 font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#1e3a5f] text-white rounded-xl font-bold hover:bg-[#2a4a70] transition-colors"
              >
                Our Story
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Better Centering & Padding */}
      <section className="py-28 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#38bdf8] text-sm font-bold uppercase tracking-wider mb-3 block">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Client Stories
            </h2>
            <p className="text-slate-400">See what our community has to say about our service.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#0f2744] border border-white/5 rounded-3xl p-10 flex flex-col items-center text-center hover:border-[#38bdf8]/30 transition-all hover:-translate-y-1"
              >
                <div className="flex gap-1 justify-center mb-6 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="fill-current text-lg" />
                  ))}
                </div>
                <p className="text-slate-300 text-lg leading-relaxed italic mb-8 flex-grow">"{testimonial.text}"</p>
                
                <div className="flex flex-col items-center mt-auto">
                  <div className="w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#38bdf8] flex items-center justify-center text-white text-lg font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-[#38bdf8] text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Cleaner Layout */}
      <section className="py-28 bg-[#0d1b30] border-t border-white/5 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-[#f97316] text-sm font-bold uppercase tracking-wider mb-2 block">FAQ</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#0f2744] border border-white/5 rounded-2xl p-8 transition-all hover:bg-[#15273d]"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <span className="text-[#f97316] text-xl font-bold font-mono opacity-80">0{index + 1}</span>
                  <div>
                     <h3 className="text-white font-bold text-xl mb-3">{faq.question}</h3>
                     <p className="text-slate-400 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Final Push */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-[#1e40af] to-[#0891b2] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Better Comfort?
              </h2>
              <p className="text-blue-100 text-xl mb-10 leading-relaxed">
                Don't let HVAC issues disrupt your day. Contact our experts now for fast, reliable service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-[#1e40af] rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
                >
                  Book Service
                  <FiArrowRight />
                </Link>
                <a
                  href="tel:+13213860371"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#f97316] text-white rounded-xl font-bold text-lg hover:bg-[#ea580c] transition-all shadow-lg"
                >
                  <FiPhone />
                  +1 (321) 386-0371
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
