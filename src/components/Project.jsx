const images = require.context('./../assets/images/', true);
const github = require('./../assets/images/github.svg');

function Project(props) {
  return (
    <div className='mb-4 w-64 h-72 px-8 py-6 rounded-xl card'>
      <a className='float-right -mr-7 -mt-5' href={props.sourceCodeUrl}>
        <img className='w-6' id='git' src={github} alt='github icon' />
      </a>
      <h3 className='text-center mb-5 text-sm font-bold'>{props.title}</h3>
      {console.log(images(`./${props.img}`).default)}
      <img
        className='w-48 h-28 rounded-lg mb-4 mx-auto'
        src={images(`./${props.img}`)}
        alt={props.title.toLowerCase()}
      />
      <div className='flex gap-2 flex-wrap text-1.5xs mb-4'>
        {props.tags.map((tag) => (
          <span className='bg-my-black py-0.75 px-1.5 rounded-md'>{tag}</span>
        ))}
      </div>
      <button
        className='bg-my-dark-blue px-3 py-1 rounded-md text-sm'
        type='button'
        onClick={() => open(props.demoUrl, '_self')}
      >
        Demo
      </button>
    </div>
  );
}

export default Project;
