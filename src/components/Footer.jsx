import Logo from "/Logo.svg";
import Plane from "/plane.svg";

export default function Footer() {
  const navigationLinks = [
    { name: "Home", href: "#" },
    { name: "Product", href: "#" },
    { name: "Docs", href: "#" },
    { name: "WhiteBoard", href: "#" },
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
      <div className="bg-gray-900 text-white hidden md:block">
        <div className="container mx-auto px-4 py-6">
          {/* Top section with logo and description */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            {/* Logo and description - Left side */}
            <div className="mb-8 md:mb-0 md:w-1/2">
              <div className="flex items-center mb-2">
                <div className="mr-2">
                  {/* Logo placeholder - styled like your purple/green logo */}
                  <img
                    src={Logo}
                    alt="Learn Ledger Logo"
                    className="h-16 w-16 mr-2 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Learn</h2>
                  <h2 className="text-xl font-bold text-purple-500">Ledger</h2>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2 max-w-md">
                Ledge Learner is a cutting-edge platform where users can learn
                industry-relevant courses and earn crypto rewards upon
                completion. Gain valuable skills, earn certifications, and get
                rewarded while advancing your career!
              </p>
            </div>

            {/* Social icons in purple circle on right */}
            <div className="bg-indigo-900 rounded-full p-4 flex items-center space-x-4">
              {/* Telegram icon */}
              <a
                href="#"
                className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="h-5 w-5 text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>

              {/* Twitter/X icon */}
              <a
                href="#"
                className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="h-5 w-5 text-gray-900"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>

              {/* Discord icon */}
              <a
                href="#"
                className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="h-5 w-5 text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Main navigation */}
          <div className="border-t border-gray-800 py-4">
            <div className="container mx-auto">
              <nav className="flex justify-center space-x-32">
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

          {/* Bottom Section with Copyright */}
          <div className="border-t border-gray-800 py-4 mt-4">
            <div className="container mx-auto text-center">
              {/* Copyright */}
              <p className="text-gray-400 text-sm">
                © 2025 Learn Ledger Limited. All Rights Reserved.
              </p>
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
              Ledger Learner is a cutting-edge platform where users can learn
              industry-relevant courses and earn crypto rewards upon completion.
              Gain valuable skills, earn certifications, and get rewarded while
              advancing your career!
            </p>
          </div>
        </div>

        {/* Social Media Icons - in pill shape */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#7241c3] rounded-full px-4 py-2 flex items-center space-x-8">
            {/* Telegram */}
            <a href="#" className="flex items-center justify-center bg-white p-2 rounded-full">
              <svg className="h-5 w-5 text-[#7241c3]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" className="flex items-center justify-center bg-white p-2 rounded-full">
              <svg className="h-5 w-5 text-[#7241c3]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
            {/* Discord */}
            <a href="#" className="flex items-center justify-center bg-white p-2 rounded-full">
            <svg
                  className="h-5 w-5 text-[#7241c3]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
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
