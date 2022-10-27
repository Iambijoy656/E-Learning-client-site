import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Category = () => {
    const category_Course = useLoaderData();
    // console.log(category_Course)
    return (
        <div className='w-9/12 mx-auto'>
            <h2 className='text-xl text-center my-3 mb-5 text-violet-700'>This is category has course: {category_Course.length} </h2>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    category_Course.map(course => <CourseCard
                        key={course.id}
                        course={course}

                    ></CourseCard>)
                }
            </div>


        </div>
    );
};

export default Category;