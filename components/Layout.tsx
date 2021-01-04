import Head from './Head'
import Navigation from './Navigation'
import Footer from './Footer'
import StoryblokService from '../utils/storyblok-service'

const Layout = ({ children, language }) => (
  <>
    <Head title="" description="" />
    <Navigation language={language} />
    {children}
    <Footer />
    {StoryblokService.bridge()}
  </>
)

export default Layout