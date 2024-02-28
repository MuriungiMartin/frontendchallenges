const Main = () => {
  return (
    <div className="w-full h-screen bg-neutral-900">
      <div className="lg:p-16 p-8 pt-24">
        <div className="lg:w-1/5 sm:p-8 flex flex-col justify items-center space-y-2 bg-neutral-800 rounded-lg">
          <div className="py-2 px-8 pt-8">
            <img
              className="rounded-full"
              src="/avatar-jessica.jpeg"
              alt="pxaceholder"
            />
          </div>
          <div className="py-2 px-8">
            <p className="text-2xl font-bold text-neutral-100">
              Jessica Randall
            </p>
            <p className="pl-2 text-sm text-lime-400">London, United Kingdom</p>
          </div>
          <div className="py-2 px-8 text-sm">
            <p className="text-neutral-100">
              Front-end developer and avid reader.
            </p>
          </div>
          <div className="w-full px-8">
            <button className="w-full bg-primary-500 py-3 px-8 bg-neutral-700 text-sm font-bold text-neutral-100 rounded-lg hover:bg-lime-400 hover:text-black">
              GitHub
            </button>
          </div>
          <div className="w-full px-8">
            <button className="w-full bg-primary-500 py-3 px-8 bg-neutral-700 text-sm font-bold  text-neutral-100 rounded-lg hover:bg-lime-400 hover:text-black">
              Frontend Mentor
            </button>
          </div>
          <div className="w-full px-8">
            <button className="w-full bg-primary-500 py-3 px-8 bg-neutral-700 text-sm font-bold  text-neutral-100 rounded-lg hover:bg-lime-400 hover:text-black">
              LinkedIn
            </button>
          </div>
          <div className="w-full px-8">
            <button className="w-full bg-primary-500 py-3 px-8 bg-neutral-700 text-sm font-bold  text-neutral-100 rounded-lg hover:bg-lime-400 hover:text-black">
              Twitter
            </button>
          </div>
          <div className="w-full px-8 pb-16">
            <button className="w-full bg-primary-500 py-3 px-8 bg-neutral-700 text-sm font-bold  text-neutral-100 rounded-lg hover:bg-lime-400 hover:text-black">
              Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
