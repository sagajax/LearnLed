import Logo from "/Logo.svg";
export default function Footer() {
  const navigationLinks = [
    { name: "Pricing", href: "#" },
    { name: "About us", href: "#" },
    { name: "Features", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Contact us", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Careers", href: "#" },
  ];

  const socialIcons = [
    { name: "Twitter", icon: "twitter", href: "#" },
    { name: "Facebook", icon: "facebook", href: "#" },
    { name: "LinkedIn", icon: "linkedin", href: "#" },
    { name: "YouTube", icon: "youtube", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top section with logo and info */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo and description */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="flex items-center mb-2">
              <img src={Logo} alt="Learn Ledger Logo" className="h-10 w-10 mr-2" />
              <div>
                <h2 className="text-xl font-bold">Learn</h2>
                <h2 className="text-xl font-bold text-purple-500">Ledger</h2>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Ledge Learnner is a cutting-edge platform where users can learn industry-relevant courses and earn crypto rewards 
              upon completion. Gain valuable skills, earn certifications, and get rewarded while advancing your career!
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row md:space-x-10 md:items-start">
            <div className="flex items-center mb-4 md:mb-0">
              <svg className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-gray-400">Location</span>
            </div>
            
            <div className="flex items-center mb-4 md:mb-0">
              <svg className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="ml-2 text-gray-400">mail@gmail.com</span>
            </div>
            
            <div className="flex items-center">
              <svg className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="ml-2 text-gray-400">+91 1234567890</span>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-lg font-semibold mb-4 md:mb-0">Subscribe to our newsletter</h3>
          <div className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Input your email" 
              className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full md:w-64 focus:outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-12">
          <nav className="flex flex-wrap justify-center gap-6">
            {navigationLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section with Copyright and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Learn Leadger Limited. All Rights Reserved.
          </p>
          
          <div className="flex space-x-4">
            {socialIcons.map((social) => (
              <a 
                key={social.name} 
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                {social.icon === "twitter" && (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                )}
                {social.icon === "facebook" && (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                )}
                {social.icon === "linkedin" && (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                )}
                {social.icon === "youtube" && (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Language Selector */}
      <div className="bg-gray-900 border-t border-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <select className="bg-gray-800 text-white border border-gray-700 rounded px-2 py-1 text-sm">
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}