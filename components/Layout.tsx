import React from 'react';
import Head from './Head';
import Navigation from './Navigation';
import Footer from './Footer';
import StoryblokService from '../utils/storyblok-service';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className="container p-4 mx-auto">
    <Head title="" description="" />
    <Navigation />
    {children}
    <Footer />
    {StoryblokService.bridge()}
  </div>
);

export default Layout;
