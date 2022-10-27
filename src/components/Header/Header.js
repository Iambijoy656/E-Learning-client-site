import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/download.png';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import avatarImg from '../../assets/avatar.jpeg'




const Header = () => {

    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.warning('User Logout')
            })
            .catch(error => {
                console.error(error)
            })
    }


    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-white'>
            <div className='relative flex items-center justify-between'>

                <img src={img} alt="" />

                <ul className='flex items-center hidden space-x-8 lg:flex'>
                    <li>
                        <Link
                            to='/home'
                            aria-label='Home'
                            title='Home'
                            className='font-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/coursePage'
                            aria-label='courses'
                            title='coursePage'
                            className='font-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/faq'
                            aria-label='faq'
                            title='faq'
                            className='font-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                            <p> FAQ</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/blog'
                            aria-label='Blog'
                            title='Blog'
                            className='font-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                            Blog
                        </Link>
                    </li>


                    {

                        user?.uid ?

                            <>



                                <li>
                                    <Link
                                        to='/about'
                                        aria-label='About Us'
                                        title={user?.displayName}
                                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                    >
                                        {user?.displayName}
                                    </Link>
                                </li>


                                <li>
                                    <Link to='/profile'>
                                        <img
                                            src={user?.photoURL ? user.photoURL : avatarImg}
                                            referrerPolicy='no-referrer'
                                            alt=''
                                            className=' border w-8 h-8 rounded-full bg-gray-500 border-gray-700'
                                            title={user?.displayName}
                                        />
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        onClick={handleLogOut}
                                        to='/'
                                        title='Logout'
                                        className='font-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 border border-orange-300 p-2 rounded-md hover:border-orange-700 hover:bg-orange-500'
                                    >
                                        Logout
                                    </Link>
                                </li>

                            </>

                            :
                            <>
                                <li>
                                    <Link
                                        to='/register'
                                        aria-label=' Register'
                                        title='Register'
                                        className='font-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                    >
                                        Register
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/login'
                                        aria-label='Login'
                                        title='Login'
                                        className='font-xs tracking-wide text-gray-500 transition-colors duration-200 hover:text-deep-purple-accent-400 border border-orange-300 p-2 rounded-md hover:border-orange-500'
                                    >
                                        Login
                                    </Link>
                                </li>
                            </>

                    }
                    <li>
                        <label for="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer text-gray-800">
                            <input id="Toggle3" type="checkbox" className="hidden peer" />
                            <span className="px-2 py-1 rounded-l-md bg-gray-800 peer-checked:bg-gray-300 text-orange-400">Dark</span>
                            <span className="px-2 py-1 rounded-r-md bg-gray-300 peer-checked:bg-gray-400">Light</span>
                        </label>
                    </li>
                </ul>
                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                            <path
                                fill='currentColor'
                                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <img src={img} alt="" />
                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                <path
                                                    fill='currentColor'
                                                    d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link
                                                to='/home'
                                                aria-label='Home'
                                                title='Home'
                                                className='font-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/coursePage'
                                                aria-label='coursePage'
                                                title='coursePage'
                                                className='font-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                Courses
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/faq'
                                                aria-label='faq'
                                                title='faq'
                                                className='font-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                <p> FAQ</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/blog'
                                                aria-label='Blog'
                                                title='Blog'
                                                className='font-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                Blog
                                            </Link>
                                        </li>


                                        {

                                            user?.uid ?

                                                <>



                                                    <li>
                                                        <Link
                                                            to='/about'
                                                            aria-label='About Us'
                                                            title={user?.displayName}
                                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                        >
                                                            {user?.displayName}
                                                        </Link>
                                                    </li>


                                                    <li>
                                                        <img
                                                            src={user?.photoURL ? user.photoURL : avatarImg}
                                                            referrerPolicy='no-referrer'
                                                            alt=''
                                                            className=' border w-8 h-8 rounded-full bg-gray-500 border-gray-700'
                                                            title={user?.displayName}
                                                        />
                                                    </li>

                                                    <li>
                                                        <Link
                                                            onClick={handleLogOut}
                                                            to='/'
                                                            title='Logout'
                                                            className='font-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 border border-orange-300 p-2 rounded-md hover:border-orange-700 hover:bg-orange-500'
                                                        >
                                                            Logout
                                                        </Link>
                                                    </li>

                                                </>

                                                :
                                                <>
                                                    <li>
                                                        <Link
                                                            to='/register'
                                                            aria-label=' Register'
                                                            title='Register'
                                                            className='font-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                        >
                                                            Register
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to='/login'
                                                            aria-label='Login'
                                                            title='Login'
                                                            className='font-xs tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 border border-orange-300 p-2 rounded-md hover:border-orange-500'
                                                        >
                                                            Login
                                                        </Link>
                                                    </li>
                                                </>
                                        }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
