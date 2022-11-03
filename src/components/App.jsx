import Project from './Project';
import Attribution from './Attribution';
import data from './../data';

const projectElements = [...data].reverse().map((project) => {
  return <Project key={project.id} {...project} />;
});

function App() {
  return (
    <>
      <h1 className='text-center tracking-wider text-4xl m-20'>
        Simple Web Projects
      </h1>
      <h2 className='text-2xl mb-10 w-3/6'>2022</h2>
      <main className='grid grid-cols-fill-15 max-w-5xl gap-20 w-3/5'>
        {projectElements}
      </main>
      <Attribution />
    </>
  );
}

export default App;
