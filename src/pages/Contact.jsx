import { useState } from "react";
import {
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiUser,
  FiCheck,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaSnowflake,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", service: "", message: "" });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: "Phone",
      value: "+1 (323) 990-9291",
      link: "tel:+13239909291",
      iconColor: "text-orange-400",
      iconBg: "bg-orange-400/10",
    },
    {
      icon: FiMapPin,
      title: "Coverage",
      value: "Serving All Across the USA",
      link: null,
      iconColor: "text-green-400",
      iconBg: "bg-green-400/10",
    },
    {
      icon: FiClock,
      title: "Hours",
      value: "24/7 Service",
      link: null,
      iconColor: "text-purple-400",
      iconBg: "bg-purple-400/10",
    },
  ];

  const services = [
    "HVAC Installation",
    "Repair & Maintenance",
    "Emergency Services",
    "Commercial HVAC",
    "Air Quality Solutions",
    "Energy Efficiency Upgrades",
    "Other",
  ];

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url('/image1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]"></div>

        <div className="w-full max-w-6xl mx-auto relative z-10 pt-32 pb-12 md:pt-40 md:pb-16 lg:pt-48">
          <div className="text-center">
            <span className="text-[#38bdf8] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block drop-shadow-md">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 px-2 drop-shadow-lg">
              Get in <span className="text-[#38bdf8]">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto px-4 drop-shadow-md">
              Have questions or need HVAC services? We&apos;re here to help.
              Reach out anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-[#0f2744] border border-white/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 ${info.iconBg} rounded-xl flex items-center justify-center mb-4 sm:mb-5`}
                >
                  <info.icon
                    className={`text-xl sm:text-2xl ${info.iconColor}`}
                  />
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-400 text-sm sm:text-base hover:text-white transition-colors break-all"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-400 text-sm sm:text-base">
                    {info.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
            {/* Contact Form */}
            <div>
              <span className="text-[#f97316] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block text-center lg:text-left">
                Send Message
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5 text-center lg:text-left">
                Request a Free Quote
              </h2>
              <p className="text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base text-center lg:text-left">
                Fill out the form and our team will contact you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl sm:rounded-2xl p-8 sm:p-10 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 sm:mb-6 bg-green-500 rounded-full flex items-center justify-center">
                    <FiCheck className="text-3xl sm:text-4xl text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    Thank You!
                  </h3>
                  <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                    Your message has been sent. We&apos;ll contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors text-sm sm:text-base"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                >
                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3 block">
                      Your Name *
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-[#0f2744] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#38bdf8] transition-colors text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3 block">
                        Phone
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(323) 000-0000"
                          className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-[#0f2744] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#38bdf8] transition-colors text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3 block">
                        Service *
                      </label>
                      <div className="relative">
                        <FaSnowflake className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-[#0f2744] border border-white/10 rounded-xl text-white appearance-none focus:border-[#38bdf8] transition-colors cursor-pointer text-sm sm:text-base"
                        >
                          <option value="" className="bg-[#0f2744]">
                            Select service
                          </option>
                          {services.map((service) => (
                            <option
                              key={service}
                              value={service}
                              className="bg-[#0f2744]"
                            >
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3 block">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your HVAC needs..."
                      className="w-full px-4 py-3 sm:py-4 bg-[#0f2744] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#38bdf8] transition-colors resize-none text-sm sm:text-base"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 sm:gap-3 px-6 py-3.5 sm:py-4 bg-[#f97316] text-white rounded-xl font-semibold text-sm sm:text-base hover:bg-[#ea580c] transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Side */}
            <div>
              <span className="text-[#38bdf8] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block text-center lg:text-left">
                Our Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5 text-center lg:text-left">
                Available Nationwide Across the USA
              </h2>
              <p className="text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base text-center lg:text-left">
                We provide comprehensive HVAC services to homes and businesses
                all across the United States.
              </p>

              {/* Map */}
              <div className="bg-[#0f2744] border border-white/5 rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12614043.665942768!2d-104.65693848828124!3d37.27565368508697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1699900000000!5m2!1sen!2s"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="USA Coverage Map"
                  className="sm:h-[320px]"
                />
              </div>

              {/* Emergency CTA */}
              <div className="bg-[#1e3a5f]/50 border border-[#38bdf8]/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 text-center lg:text-left">
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-2 sm:mb-3">
                  Need Immediate Help?
                </h3>
                <p className="text-gray-400 mb-5 sm:mb-6 text-sm sm:text-base">
                  For emergency HVAC services, call us directly.
                </p>
                <a
                  href="tel:+13239909291"
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#f97316] text-white rounded-xl font-semibold hover:bg-[#ea580c] transition-colors text-sm sm:text-base"
                >
                  <FiPhone />
                  +1 (323) 990-9291
                </a>
              </div>

              {/* Social Links */}
              <div className="text-center lg:text-left">
                <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-5">
                  Follow Us
                </h3>
                <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                  {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                    (Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1e3a5f]/50 flex items-center justify-center text-gray-400 hover:bg-[#1e3a5f] hover:text-[#38bdf8] transition-colors"
                      >
                        <Icon className="text-base sm:text-lg" />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#0f2744]/50 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5 px-4">
            Have More Questions?
          </h2>
          <p className="text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base px-4">
            Check out our FAQ or contact us directly. We&apos;re always happy to
            help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-4">
            <a
              href="/#faq"
              className="px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/5 transition-colors text-sm sm:text-base"
            >
              View FAQ
            </a>
            <a
              href="tel:+13239909291"
              className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#f97316] text-white rounded-xl font-semibold hover:bg-[#ea580c] transition-colors text-sm sm:text-base"
            >
              <FiPhone />
              +1 (323) 990-9291
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
