import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Import Hero Icons
import { Button } from "@/components/ui/button";
import Dropdown from './copy';
 

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div>
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 ease-in-out duration-300 z-40`}>
                <div className="p-4 flex items-center justify-between">
                    <h1 className="text-lg font-bold">Dashboard</h1>
                    <Button onClick={onClose} className="text-white">
                        <XMarkIcon className="h-6 w-6 " />
                    </Button>
                </div>
                <nav className="mt-6">
                    <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700 rounded-lg">Home</a>

                     <Dropdown
                        title="Loans"
                        items={[
                            { label: 'Make a Payment', href: '#' },
                            { label: 'Take a Loan', href: '#' },
                        ]}
                    />

                  <Dropdown
                        title="Savings"
                        items={[
                            { label: 'Deposit', href: '/deposit' },
                            { label: 'Withdraw', href: '/withdraw'},
                        ]}
                    /> 

                    <a href="/transactions" className="block py-2 px-4 text-gray-200 hover:bg-gray-700 rounded-lg">Transactions</a>
                    <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700 rounded-lg">Reports</a>
                    <a href="/profile" className="block py-2 px-4 text-gray-200 hover:bg-gray-700 rounded-lg">Profile</a>
                </nav>
            </div>

            {/* Sidebar Toggle Button */}
            <button
                onClick={() => onClose()}
                className="fixed top-4 left-4 bg-gray-800 text-white p-2 rounded-full shadow-lg z-50"
            >
                <Bars3Icon className="h-6 w-6 hidden" />
            </button>
        </div>
    );
};

export default Sidebar;
