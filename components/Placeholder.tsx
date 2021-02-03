import React from 'react';

const Placeholder = ({ componentName }) => (
  <div className="py-4 bg-red-100 border border-red-200">
    <p className="italic text-center text-red-700">
      The component <strong>{componentName}</strong> has not been created yet.
    </p>
  </div>
);

export default Placeholder;
