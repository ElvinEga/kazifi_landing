"use client";

const TeamSection = () => {
  return (
    <>
      <section className="py-10">
        <div className="mx-auto w-full">
          <div className="xl:p-12 gap-32 p-12  bg-gradient-to-r from-indigo-600 to-violet-600 flex  justify-between flex-col-reverse lg:flex-row">
            <div className="flex flex-col w-full items-center justify-center">
              <h2 className="font-manrope text-5xl text-white font-semibold mb-7 text-center lg:text-left">
                Transform Your Job Search with Kazifi
              </h2>
              <p className="text-lg text-white leading-8 mb-5 text-center lg:text-left">
                Begin a new chapter in your career journey with Kazifi. Sign up
                now for a 14-day free trial and experience a smarter, more
                effective job search process.
              </p>
              <div className="flex items-center flex-col justify-center">
                <div className="relative p-1.5 my-10  flex  items-center gap-y-4 h-auto md:h-16 flex-col md:flex-row justify-between rounded-full md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] md:bg-white">
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    className="text-base rounded-full text-gray-900 flex-1 py-4 px-6 shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] md:shadow-none bg-white md:bg-transparent shadow-none placeholder:text-gray-400 focus:outline-none md:w-fit w-full"
                  />
                  <button className="bg-indigo-600 rounded-full py-3 px-7 text-base font-semibold text-white hover:bg-indigo-700 cursor-pointer transition-all duration-500 md:w-fit w-full">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
