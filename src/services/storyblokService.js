import StoryblokClient from 'storyblok-js-client';
import parse from 'html-react-parser';

let Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_TOKEN,
});

const normalizeText = (text) =>
  typeof text === 'string' ? text : parse(Storyblok.richTextResolver.render(text));

export { normalizeText };
