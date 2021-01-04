const Navigation = ({ language }) => (
  <header className="w-full bg-white">
    <nav className="" role="navigation">
      <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
        <div className="mr-4 md:mr-8">
          <a href="/">
            {/* Image by http://www.freepik.com/ */}
            <img src="/images/logo.png" />
          </a>
        </div>
        <div className="text-black">
          <p className="text-lg">Book Club</p>
        </div>
        <div className="ml-auto md:hidden"/>
        <div className="md:w-auto md:flex-grow md:flex md:items-center">
          <ul className="flex lg:flex-row list-none ml-auto">
            <li>
              <a href="/" className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 
              ${language === "en" ? "bg-black text-white" : ""}`}>EN</a>
            </li>
            <li>
              <a href="/de-ch" className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 
              ${language === "de-ch" ? "bg-black text-white" : ""}`}>DE</a>
            </li>
            <li>
              <a href="/it-ch" className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 
              ${language === "it-ch" ? "bg-black text-white" : ""}`}>IT</a>
            </li>
            <li>
              <a href="/fr-ch" className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 
              ${language === "fr-ch" ? "bg-black text-white" : ""}`}>FR</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default Navigation