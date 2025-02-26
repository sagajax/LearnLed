import Logo from "/Logo.svg";
import Plane from "/plane.svg";

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

  // Mobile navigation links - exactly as shown in the screenshot
  const mobileNavLinks = [
    { name: "Home", href: "#" },
    { name: "Product", href: "#" },
    { name: "Docs", href: "#" },
    { name: "Whitepaper", href: "#" },
  ];

  // Mobile social icons - from the screenshot: Telegram, Twitter/X, Discord
  const mobileSocialIcons = [
    { name: "Telegram", icon: "telegram", href: "#" },
    { name: "Twitter", icon: "twitter", href: "#" },
    { name: "Discord", icon: "discord", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white ">
      {/* Desktop Footer - Hidden on mobile */}
      <div className="hidden md:block ">
        {/* Top section with logo, contact info, and newsletter */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Logo and description - Left side */}
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

            {/* Right side - Contact Info and Newsletter */}
            <div className="md:w-2/3 md:flex md:flex-col md:items-end">
              {/* Contact Info */}
              <div className="flex flex-col md:flex-row md:justify-end md:space-x-8 mb-8">
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

              {/* Newsletter Section */}
              <div className="md:flex md:items-center">
                <h3 className="text-base font-medium mr-4 mb-2 md:mb-0">Subscribe to our newsletter</h3>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Input your email" 
                    className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-64 focus:outline-none"
                  />
                  <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r-md transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="border-t border-gray-800 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-wrap justify-center space-x-6">
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
        </div>

        {/* Bottom Section with Copyright and Social */}
        <div className="border-t border-gray-800 py-4">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            {/* Language selector on left */}
            <div className="mb-4 md:mb-0 order-2 md:order-1">
              <select className="bg-gray-800 text-white border border-gray-700 rounded px-2 py-1 text-sm">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
            
            {/* Copyright centered */}
            <p className="text-gray-400 text-sm mb-4 md:mb-0 order-1 md:order-2">
              © 2025 Learn Leadger Limited. All Rights Reserved.
            </p>
            
            {/* Social icons on right */}
            <div className="flex space-x-4 order-3">
              {socialIcons.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  className="text-blue-400 hover:text-white transition-colors"
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
      </div>

      {/* Mobile Footer - Shown only on mobile */}
      <div className="md:hidden bg-gray-900 w-full px-4 py-6 overflow-x-hidden">
  {/* Logo and description section */}
  <div className="mb-6">
    <div className="flex items-start mb-2">
      <img 
        src={Logo}
        alt="Learn Ledger Logo" 
        className="h-16 w-16 mr-2 object-contain" 
      />
      <div className="flex flex-col mt-1">
        <span className="text-lg font-bold text-green-500">Learn</span>
        <span className="text-lg font-bold text-purple-500">Ledger</span>
      </div>
    </div>
    <div className="w-full">
      <p className="text-sm text-gray-300 mt-3 max-w-full break-words">
        Ledger Learner is a cutting-edge platform where users can learn industry-relevant courses and earn crypto rewards upon completion. Gain valuable skills, earn certifications, and get rewarded while advancing your career!
      </p>
    </div>
  </div>

  {/* Social Media Icons - in pill shape */}
  <div className="flex justify-center mb-8">
    <div className="bg-purple-600 rounded-full px-4 py-2 flex items-center space-x-8">
      {/* Telegram */}
      <a href="#" className="flex items-center justify-center">
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      </a>
      {/* Twitter/X */}
      <a href="#" className="flex items-center justify-center">
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      </a>
      {/* Discord */}
      <a href="#" className="flex items-center justify-center">
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
        </svg>
      </a>
    </div>
  </div>

  {/* Navigation Links - single line with even spacing */}
  <div className="flex justify-between border-t border-b border-gray-800 py-3">
    {mobileNavLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        className="text-gray-300 text-sm hover:text-white transition-colors"
      >
        {link.name}
      </a>
    ))}
  </div>

  {/* Copyright with plane */}
  <div className="relative mt-8 text-center pb-6">
    <div className="text-gray-400 text-xs">
      © 2025 Learn Ledger Limited. All Rights Reserved.
    </div>
    
    {/* Plane decoration */}
    <div className="absolute bottom-0 right-0">
      <img 
        src={Plane}
        alt="Plane decoration" 
        className="w-18 h-18 opacity-80" 
      />
    </div>
  </div>
</div>
    </footer>
  );
}