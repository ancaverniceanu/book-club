import { connectToDatabase } from 'utils/mongodb';
import Layout from 'components/Layout';
import React from 'react';
import PageIntro from 'components/PageIntro';

interface Book {
  title: string;
  author: string;
}

export default function ReadBooks({ books }) {
  const renderBookList = () => {
    return books.map(({ title, author }) => {
      return (
        <div key={title} className="w-full px-3 my-3 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <img alt={title} className="block w-full h-auto" src="/images/book_placeholder.jpg" />

            <header className="flex items-center justify-between p-2 leading-tight md:p-4">
              <h1 className="text-lg">{title}</h1>
              <p className="text-sm text-grey-darker">[add date???]</p>
            </header>

            <footer className="flex items-center justify-between p-2 leading-none md:p-4">
              <img
                alt={author}
                className="block rounded-full"
                src="/images/author_placeholder.jpg"
                width="32"
                height="32"
              />
              <p className="ml-2 text-sm">{author}</p>
            </footer>
          </article>
        </div>
      );
    });
  };

  return (
    <Layout>
      <PageIntro title="Read" description="Complete list with books that we read in the past." />
      <div className="flex flex-wrap -mx-3 lg:-mx-4">{renderBookList()}</div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const data = await db.collection('books').find().sort({ _id: 1 }).toArray();
  const books = data.map(({ title, author }) => {
    return {
      title,
      author,
    };
  });

  return {
    props: { books },
  };
}
