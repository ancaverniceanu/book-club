import React from 'react';
import Page from 'components/Page';
import Layout from 'components/Layout';
import StoryblokService from 'utils/storyblok-service';
import EventsForm from 'components/EventsForm';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: props.res.data.story,
      language: props.language,
    };
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query);
    let language = query.language || 'en';
    let insertLanguage = language !== 'en' ? `/${language}` : '';
    let res = await StoryblokService.get(`cdn/stories${insertLanguage}/events`);

    return {
      res,
      language,
    };
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
  }

  render() {
    const contentOfStory = this.state.story.content;

    return (
      <Layout language={this.state.language}>
        <Page content={contentOfStory} />
        <EventsForm />
      </Layout>
    );
  }
}