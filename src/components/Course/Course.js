import ReactToPdf from 'react-to-pdf';
import { Link, useLoaderData } from 'react-router-dom';
import { createRef } from 'react';



const Course = () => {

    const ref = createRef();

    const course = useLoaderData();
    // console.log(course);

    const { id, course_name, details, modules, picture, tutor, price } = course




    return (
        <div ref={ref} className="flex flex-col max-w-lg p-6 space-y-6 lg:px-28 container mx-auto overflow-hidden rounded-lg shadow-md bg-white text-gray-900 min-w-full ">
            <div className="flex space-x-4">
                <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <Link rel="noopener noreferrer" href="#" className="text-sm font-semibold">Tutor : {tutor}</Link>
                    <span className="text-xs text-gray-400">Enroll fee: {price} Tk</span>
                </div>
            </div>
            <div>
                <img src={picture} alt="" className="object-cover w-full  mb-4 h-60 sm:h-96 bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold">{course_name}</h2>
                <p className="text-sm text-gray-900">{details}</p>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="space-x-2">
                    <Link to={`/checkout/${id}`}>
                        <button aria-label="Share this post" type="button" className="p-2  text-center bg-orange-500 rounded-lg">
                            Get Premium Access
                        </button>
                    </Link>

                </div>
                <div className="flex space-x-2 text-sm text-violet-900">
                    <ReactToPdf targetRef={ref} x={-22} y={.5} scale={0.8}>
                        {({ toPdf, targetRef }) => (
                            <div style={{ width: 100, height: 100, background: 'red' }} onClick={toPdf} ref={targetRef} />
                        )}
                    </ReactToPdf>
                </div>
            </div>
        </div>
    );
};

export default Course;