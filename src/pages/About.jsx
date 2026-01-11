import { Link } from 'react-router-dom';
import { FiPhone, FiCheck, FiArrowRight, FiAward, FiUsers, FiTarget, FiHeart, FiShield, FiStar } from 'react-icons/fi';
import { FaSnowflake, FaThermometerHalf, FaQuoteLeft, FaBolt } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FiTarget,
      title: 'Our Mission',
      description: 'To provide exceptional HVAC services that enhance comfort, improve air quality, and maximize energy efficiency.',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: FiHeart,
      title: 'Our Vision',
      description: 'To be the most trusted HVAC service provider in the USA, known for quality and customer satisfaction.',
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-400',
    },
    {
      icon: FiShield,
      title: 'Our Values',
      description: 'Integrity, excellence, and customer-first approach guide everything we do.',
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-400',
    },
  ];

  const milestones = [
    { year: '1999', title: 'Company Founded', description: 'Started with a vision to provide quality HVAC services.' },
    { year: '2005', title: 'Expanded Services', description: 'Added commercial HVAC solutions to our portfolio.' },
    { year: '2012', title: '10,000 Customers', description: 'Reached a significant milestone in customer satisfaction.' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as a top HVAC provider in the USA.' },
  ];

  const team = [
    { name: 'John Anderson', role: 'Founder & CEO', initials: 'JA' },
    { name: 'Sarah Mitchell', role: 'Operations Manager', initials: 'SM' },
    { name: 'Mike Thompson', role: 'Lead Technician', initials: 'MT' },
    { name: 'Emily Rodriguez', role: 'Customer Relations', initials: 'ER' },
  ];

  const certifications = [
    'EPA Certified',
    'NATE Certified',
    'BBB A+ Rating',
    'Energy Star Partner',
    'Licensed & Insured',
    'Manufacturer Authorized',
  ];

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center">
            <span className="text-[#38bdf8] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">About Us</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 px-2">
              Your Trusted <span className="text-[#38bdf8]">HVAC Partner</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
              For over 25 years, BestHVACinUSA has been delivering exceptional heating, ventilation, and air conditioning services.
            </p>
            
            <div className="flex flex-wrap gap-4 sm:gap-5 justify-center px-4">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-[#0f2744] rounded-xl">
                <FiAward className="text-yellow-400 text-lg sm:text-xl" />
                <span className="text-white font-medium text-sm sm:text-base">25+ Years Experience</span>
              </div>
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-[#0f2744] rounded-xl">
                <FiUsers className="text-[#38bdf8] text-lg sm:text-xl" />
                <span className="text-white font-medium text-sm sm:text-base">10,000+ Customers</span>
              </div>
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-[#0f2744] rounded-xl">
                <FiStar className="text-orange-400 text-lg sm:text-xl" />
                <span className="text-white font-medium text-sm sm:text-base">5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center">
            {/* Left - Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="text-[#f97316] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">Our Story</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
                Building Trust Through Excellence
              </h2>
              <p className="text-gray-400 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                BestHVACinUSA was founded in 1999 with a simple mission: to provide honest, reliable, and high-quality HVAC services to our community. What started as a small family business has grown into one of the most trusted HVAC service providers in the USA.
              </p>
              <p className="text-gray-400 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Our journey has been defined by our unwavering commitment to customer satisfaction, continuous learning, and adoption of the latest HVAC technologies.
              </p>
              <p className="text-gray-400 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
                Today, we continue to set the standard for HVAC excellence, offering comprehensive services from installation and maintenance to emergency repairs.
              </p>

              <a
                href="tel:+13213860371"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#f97316] text-white rounded-xl font-semibold hover:bg-[#ea580c] transition-colors text-sm sm:text-base"
              >
                <FiPhone />
                Speak With Us
              </a>
            </div>

            {/* Right - Image Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 sm:p-8 md:p-12 aspect-square flex items-center justify-center">
                  <FaSnowflake className="text-5xl sm:text-6xl md:text-8xl text-white/80" />
                </div>
                <div className="bg-[#0f2744] border border-white/5 rounded-2xl p-4 sm:p-5 md:p-6">
                  <FaBolt className="text-xl sm:text-2xl md:text-3xl text-yellow-400 mb-2 sm:mb-3" />
                  <p className="text-white font-medium text-sm sm:text-base mb-1">Energy Efficient</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Saving you money</p>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8 md:pt-10">
                <div className="bg-[#0f2744] border border-white/5 rounded-2xl p-4 sm:p-5 md:p-6">
                  <FiShield className="text-xl sm:text-2xl md:text-3xl text-green-400 mb-2 sm:mb-3" />
                  <p className="text-white font-medium text-sm sm:text-base mb-1">Fully Insured</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Your peace of mind</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 sm:p-8 md:p-12 aspect-square flex items-center justify-center">
                  <FaThermometerHalf className="text-5xl sm:text-6xl md:text-8xl text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#0f2744]/50 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="text-[#38bdf8] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">What Drives Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4">
              Our Core Principles
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#0a1628] border border-white/5 rounded-2xl p-6 sm:p-8 md:p-10 text-center"
              >
                <div className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-5 sm:mb-6 rounded-xl ${value.iconBg} flex items-center justify-center`}>
                  <value.icon className={`text-2xl sm:text-3xl md:text-4xl ${value.iconColor}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="text-[#f97316] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">Our Journey</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4">
              Milestones We&apos;re Proud Of
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 md:left-10 top-0 bottom-0 w-0.5 bg-[#1e3a5f]"></div>

            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-16 sm:pl-20 md:pl-24">
                  <div className="absolute left-4 sm:left-6 md:left-8 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#38bdf8] border-4 border-[#0a1628]"></div>
                  <div className="bg-[#0f2744] border border-white/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
                    <span className="text-[#f97316] font-bold text-base sm:text-lg">{milestone.year}</span>
                    <h3 className="text-white font-semibold text-base sm:text-lg mt-1 sm:mt-2 mb-2 sm:mb-3">{milestone.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#0f2744]/50 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="text-[#38bdf8] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">Our Team</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
              Meet the Experts
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base px-4">
              Our certified professionals are dedicated to providing the best HVAC service experience.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-[#0a1628] border border-white/5 rounded-2xl p-5 sm:p-6 md:p-8 text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2a4a70] flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold">
                  {member.initials}
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{member.name}</h3>
                <p className="text-[#f97316] text-xs sm:text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="text-green-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">Certifications</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4">
              Trusted & Certified
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-[#0f2744] border border-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center"
              >
                <FiCheck className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4 text-green-400" />
                <p className="text-white text-xs sm:text-sm font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#0f2744]/50 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-[#0a1628] border border-white/5 rounded-2xl p-8 sm:p-10 md:p-14 text-center">
            <FaQuoteLeft className="text-3xl sm:text-4xl text-[#38bdf8]/30 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 sm:mb-10 px-2">
              &quot;BestHVACinUSA has been our go-to HVAC provider for over 10 years. Their professionalism and commitment to customer satisfaction are unmatched.&quot;
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-base sm:text-lg font-bold">
                RJ
              </div>
              <div className="text-left">
                <h4 className="text-white font-semibold text-base sm:text-lg">Robert Johnson</h4>
                <p className="text-gray-500 text-sm">Loyal Customer Since 2014</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-r from-[#1e40af] to-[#0891b2] px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6 md:mb-8 px-4">
            Ready to Work With the Best?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg md:text-xl mb-10 sm:mb-12 px-4">
            Join thousands of satisfied customers who trust BestHVACinUSA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#1e40af] rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Contact Us Today
              <FiArrowRight />
            </Link>
            <a
              href="tel:+13213860371"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#f97316] text-white rounded-xl font-semibold hover:bg-[#ea580c] transition-colors text-sm sm:text-base"
            >
              <FiPhone />
              +1 (321) 386-0371
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
