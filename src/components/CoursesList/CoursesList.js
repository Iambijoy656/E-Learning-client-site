import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CoursesList = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div className="space-y-2">
            <p className="text-lg font-medium leading-snug">Total Courses : {courses.length} </p>
            {
                courses.map(course => <p className='font-xl text-lg ' key={course._id}><Link to={`/course/${course._id}`}>{course.name}</Link></p>)
            }

        </div>
    );
};

export default CoursesList;