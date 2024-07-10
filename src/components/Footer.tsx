import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="text-black bg-white body-font w-full">
      <div className="container px-5 py-8 mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
          <span className="text-xl font-medium text-black">Healthcare One-stop</span>
          <p className="text-sm text-black mt-2 sm:mt-0 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-300">
            © 2024 —
            <a href="http://healthcareonestop.co" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">
              HealthcareOnestop.co
            </a>
          </p>
        </div>
        <div className="flex justify-center sm:justify-start mt-4 sm:mt-0">
          <SocialIcon href="#" aria-label="Facebook">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </SocialIcon>
          <SocialIcon href="#" aria-label="Twitter">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </SocialIcon>
          <SocialIcon href="#" aria-label="Instagram">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </SocialIcon>
          <SocialIcon href="#" aria-label="LinkedIn">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </SocialIcon>
        </div>
      </div>
    </footer>
  )
}

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
  'aria-label': string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, children, 'aria-label': ariaLabel }) => (
  <Link href={href} className="ml-3 text-gray-500 hover:text-gray-700 transition-colors" aria-label={ariaLabel}>
    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
      {children}
    </svg>
  </Link>
)

export default Footer