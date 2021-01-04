import Head from './Head'
import Navigation from './Navigation'
import Footer from './Footer'
import StoryblokService from '../utils/storyblok-service'

const Layout = ({ children, language }) => (
  <div className="bg-gray-300">
    <Head title="" description="" />
    <Navigation language={language} />
    {children}
    <Footer />
    {StoryblokService.bridge()}
  </div>
)

export default Layout