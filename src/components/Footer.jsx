import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-600 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-gray-500 text-sm">
          © —
          <a
            href="https://github.com/thechiragkaushik"
            rel="noopener noreferrer"
            className="text-gray-600 ml-1"
            target="_blank"
            aria-label="GitHub Profile"
          >
            @TheChiragKaushik
          </a>
        </p>
        <div className="flex space-x-3">
          <a
            href="https://www.instagram.com/thechiragkaushik/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500"
            aria-label="Instagram Profile"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/thechiragkaushik/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500"
            aria-label="LinkedIn Profile"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
