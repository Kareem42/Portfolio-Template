import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white py-6 items-center justify-center">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Your Name. All rights reserved.
                </p>
                <p className="text-xs mt-2">
                    Built with ❤️ using React and Tailwind CSS
                </p>

                {/*Replace the placeholders with your social media links*/}
                <div className="flex justify-center mt-4">
                    <a href="https://github.com" className="text-white hover:text-gray-300 mx-2" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com" className="text-white hover:text-gray-300 mx-2" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com" className="text-white hover:text-gray-300 mx-2" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" className="text-white hover:text-gray-300 mx-2" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    </div>
            </div>
        </footer>
    );
}

export default Footer;