import React from 'react';

const skills = () => {
  return (
    <section id="skills" className="bg-gray-200 p-16">
      <h2 className="text-3xl font-bold text-center">Skills</h2>
      <div className="mt-4 grid grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="font-semibold">Unity</h3>
        </div>
        <div className="text-center">
          <h3 className="font-semibold">React</h3>
        </div>
        <div className="text-center">
          <h3 className="font-semibold">JavaScript</h3>
        </div>
        <div className="text-center">
          <h3 className="font-semibold">C++</h3>
        </div>
        <div className="text-center">
          <h3 className="font-semibold">Python</h3>
        </div>
      </div>
    </section>
  );
};

export default skills;
