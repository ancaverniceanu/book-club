import React from 'react';

interface Props {
  title: string;
  description?: string;
}

const PageIntro = ({ title, description }: Props) => {
  return (
    <div className="pt-10 pb-10 mb-10 border-t border-b border-gray-200">
      <div className="flex items-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{title}</h1>
      </div>
      <p className="mt-1 text-lg text-gray-500">{description}</p>
    </div>
  );
};

export default PageIntro;
