import React from 'react';

const projects = () => {
  return (
    <section id="projects" className="p-16">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="mt-8 grid grid-cols-2 gap-8">
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h3 className="font-semibold">Game Project 1</h3>
          <p>A short description of your project.</p>
        </div>
        {/* Add more projects */}
      </div>
    </section>
  );
};

export default projects;
