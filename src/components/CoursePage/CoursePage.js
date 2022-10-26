import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';


const CoursePage = () => {
    const allCourse = useLoaderData()
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div>
            <section className="bg-white text-gray-900">
                <div className="container flex flex-col mx-auto lg:flex-row">
                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-gray-200 text-violet-900">
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug"> Course Category: {categories.length}</p>
                                <div>
                                    {
                                        categories.map(category => <p key={category.id} className='p-2' ><Link to={`/category/${category.id}`}>
                                            {category.name}
                                        </Link> </p>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-3/5 bg-white">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <div>
                                <h2 className='text-center text-2xl mb-3'>Total Course:{allCourse.length}</h2>
                                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
                                    {
                                        allCourse.map(course => <CourseCard key={course.id}
                                            course={course}

                                        ></CourseCard>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoursePage;