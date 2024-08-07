import { useState } from 'react';

const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-gray-200 py-2 px-4 hover:bg-gray-700 rounded-lg flex justify-between items-center"
            >
                {title}
                <svg
                    className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="mt-2 pl-4 space-y-2">
                    {items.map((item, index) => (
                        <a href={item.href} key={index} className="block py-2 px-4 text-gray-200 hover:bg-gray-700 rounded-lg">
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
