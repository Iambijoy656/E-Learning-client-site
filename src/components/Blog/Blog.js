import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-white text-gray-900">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Some Question</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">OUR BLOG</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">what is cors?</h3>
                            <p className="mt-1 text-gray-400">Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Why are you using firebase? What other options do you have to implement authentication?</h3>
                            <p className="mt-1 text-gray-400">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">How does the private route work?</h3>
                            <p className="mt-1 text-gray-400">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">What is Node? How does Node work?</h3>
                            <p className="mt-1 text-gray-400">Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;