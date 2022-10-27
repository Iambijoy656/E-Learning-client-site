
import { Link, useLoaderData } from 'react-router-dom';



const Course = () => {

    const course = useLoaderData();
    // console.log(course);

    const { course_name, details, modules, picture, tutor, price } = course




    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-white text-gray-900 min-w-full ">
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
                    <Link to='/checkout'>
                        <button aria-label="Share this post" type="button" className="p-2  text-center bg-orange-500 rounded-lg">
                            Get Premium Access
                        </button>
                    </Link>

                </div>
                <div className="flex space-x-2 text-sm text-violet-900">
                    <button type="button" className="flex items-center p-2 px-4 space-x-1.5  bg-orange-500 rounded-lg">
                        Download pdf
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Course;