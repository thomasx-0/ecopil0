import React from 'react';

export const Navbar: React.FC = () => {
    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <a href="/" className="text-xl font-bold text-gray-900">
                                MyWebsite
                            </a>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <a
                                href="/blog"
                                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                            >
                                Blog
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => window.location.href = '/path/to/your/file.pdf'}
                        >
                            File Download
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};