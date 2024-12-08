import React from 'react';
import { Link } from 'react-router-dom';

const AnimatedFooter = () => {
    return (
        <footer className="relative w-full text-gray-400 py-16 px-6">
            {/* Left side content */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h2 className="text-white text-3xl font-medium">
                        Build your dream website<br />
                        for your business.
                    </h2>
                    <button className="px-6 py-2.5 bg-transparent text-white border border-gray-700 rounded-md hover:bg-gray-800 transition-colors">
                        Save your spot
                    </button>
                </div>

                {/* Right side navigation */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Resources Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-medium mb-4">Pages</h3>
                        <nav className="flex flex-col space-y-3">
                            <Link to={'/'} className="hover:text-white transition-colors">Home</Link>
                            <Link to={'/about'} className="hover:text-white transition-colors">About</Link>
                            <Link to={''} className="hover:text-white transition-colors">App Store</Link>
                            <Link to={'/pricing'} className="hover:text-white transition-colors">Pricings</Link>
                            <Link to={'/contact'} className="hover:text-white transition-colors">Contact</Link>
                        </nav>
                    </div>

                    {/* Company Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-medium mb-4">Company</h3>
                        <nav className="flex flex-col space-y-3">
                            <a href="#changelog" className="hover:text-white transition-colors">Changelog</a>
                            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                        </nav>
                    </div>

                    {/* Legal Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-medium mb-4">Legal</h3>
                        <nav className="flex flex-col space-y-3">
                            <a href="#terms" className="hover:text-white transition-colors">Terms and conditions</a>
                            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                        </nav>
                    </div>

                    {/* Community Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-medium mb-4">Community</h3>
                        <nav className="flex flex-col space-y-3">
                            <a href="#facebook" className="hover:text-white transition-colors">Facebook</a>
                            <a href="#instagram" className="hover:text-white transition-colors">Instagram</a>
                            <a href="#github" className="hover:text-white transition-colors">Github</a>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Optional: Logo at the bottom */}
            <div className="max-w-7xl mx-auto mt-16">
                <div className="text-white text-4xl font-medium tracking-wide">
                    AppOpen
                </div>
            </div>
        </footer>
    );
};

export default AnimatedFooter;
