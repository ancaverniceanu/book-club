import React from 'react';

interface Props {
  language: string;
}

const Navigation = ({ language }: Props) => (
  <header className="w-full bg-white">
    <nav className="" role="navigation">
      <div className="flex flex-wrap items-center pt-4 pb-4 mx-auto md:flex-no-wrap">
        <div className="mr-4 md:mr-8">
          <a href="/">
            {/* Image by http://www.freepik.com/ */}
            <img src="/images/logo.png" />
          </a>
        </div>
        <div className="text-black">
          <p className="text-lg">Read'n'Roll</p>
        </div>
        <div className="ml-auto md:hidden" />
        <div className="md:w-auto md:flex-grow md:flex md:items-center">
          <ul className="flex ml-auto list-none lg:flex-row">
            <li>
              <a
                href="/"
                className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 
              ${language === 'en' ? 'bg-black text-white' : ''}`}
              >
                EN
              </a>
            </li>
            <li>
              <a
                href="/de-ch"
                className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 
              ${language === 'de-ch' ? 'bg-black text-white' : ''}`}
              >
                DE
              </a>
            </li>
            <li>
              <a
                href="/it-ch"
                className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 
              ${language === 'it-ch' ? 'bg-black text-white' : ''}`}
              >
                IT
              </a>
            </li>
            <li>
              <a
                href="/fr-ch"
                className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 
              ${language === 'fr-ch' ? 'bg-black text-white' : ''}`}
              >
                FR
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Navigation;
