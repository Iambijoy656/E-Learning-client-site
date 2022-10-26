import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            <h2>{course.course_name}</h2>
        </div>
    );
};

export default Course;