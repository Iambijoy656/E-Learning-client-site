import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section>
            <div className="hero h-96 min-w-screen" style={{ backgroundImage: `url("https://cdn.britannica.com/69/141169-050-CD5892EB/Baker-Library-Harvard-Business-School-Boston-University.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-orange-400 font-bold">Educate!</h1>
                        <p className="mb-5 text-5xl font-bold">Smart Is Great.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="p-6 py-12 bg-violet-900 text-white">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-2xl tracking-tighter font-bold m-2">100 Online Courses
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Instant Expert instruction
                                Find the right instructor for you</span>

                        </div>
                        <Link to='' rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">
                            Lifetime course access
                            Learn on your schedule anytime</Link>
                    </div>
                </div>
            </div>

            <section className="py-6 bg-white text-gray-900">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                    <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our team</h1>
                    <p className="max-w-2xl text-center text-gray-400">Our easy-to-use, comprehensive, and secure supplemental digital learning program empowers administrators and teachers to help PreK-8 students build essential skills and excel in math and reading.</p>
                    <div className="flex flex-row flex-wrap-reverse justify-center">
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
                            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                            <p className="text-gray-400">Visual Designer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
                            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                            <p className="text-gray-400">java Expert</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
                            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                            <p className="text-gray-400">Python Expert</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
                            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                            <p className="text-gray-400">Visual Designer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
                            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                            <p className="text-gray-400">Programmer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
                            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                            <p className="text-gray-400"> Designer</p>
                        </div>
                    </div>
                </div>
            </section>


        </section>
    );
};

export default Home;