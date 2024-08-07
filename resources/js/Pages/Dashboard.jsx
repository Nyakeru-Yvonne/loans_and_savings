import { useState } from 'react'; // Import useState
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Sidebar from '@/Components/Sidebar'; // Import Sidebar
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Import Hero Icons

export default function Dashboard({ user, auth }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    console.log(user);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/* Main Content */}
            <div className={`flex transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'} relative`}>
                {/* Sidebar Toggle Button */}
                <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                    className="fixed top-4 left-4 bg-gray-800 text-white p-2 rounded-full shadow-lg z-50"
                >
                    {isSidebarOpen ? (
                        <XMarkIcon className="h-6 w-6 hidden" />
                    ) : (
                        <Bars3Icon className="h-6 w-6 " />
                    )}
                </button>

                <div className="flex-1 p-6">
                    <div className='m-4'>
                        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {auth.user.name}!</h1>
                    </div>

                    <div className='flex col gap-4 justify-center'>
                        <div>
                            <Card className="bg-white m-4 bg-blue-400 w-96">
                                <CardHeader>
                                    <CardTitle className='text-4xl'>Total Loans</CardTitle>
                                    <CardDescription>10% interest rate</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className='font-semibold text-xl italic'>KSH 10,000</p>
                                </CardContent>
                                <CardFooter>
                                    <Button className="bg-blue-600 justify-center">Make a Repayment</Button>
                                </CardFooter>
                            </Card>
                        </div>
                        <div>
                            <Card className="bg-white m-4 bg-blue-400 w-96">
                                <CardHeader>
                                    <CardTitle className='text-4xl'>Total Savings</CardTitle>
                                    <CardDescription>10% interest rate</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className='font-semibold text-xl italic'>KSH 10,000</p>
                                </CardContent>
                                <CardFooter>
                                    <Button className="bg-blue-600 justify-center">Withdraw Savings</Button>
                                </CardFooter>
                            </Card>
                        </div>
                        <div>
                            <Card className="bg-white m-4 bg-blue-400 w-96">
                                <CardHeader>
                                    <CardTitle className='text-4xl'>Total Interest</CardTitle>
                                    <CardDescription>10% interest rate</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className='font-semibold text-xl italic'>KSH 10,000</p>
                                </CardContent>
                                <CardFooter>
                                    <Button className="bg-blue-600 justify-center">Check Rates</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    <div title="Recent Transactions" className='m-4 bg-gray-200'>
                        <Table>
                            <TableHeader className='bg-gray-400'>
                                <TableRow>
                                    <TableHead className="text-2xl text-purple-900">Recent Transaction</TableHead>
                                    <TableHead className="text-2xl text-purple-900">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-light text-lg">Loan Payment</TableCell>
                                    <TableCell className="font-light text-lg">Ksh 2000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-light text-lg">Loan Disbursement</TableCell>
                                    <TableCell className="font-light text-lg">Ksh 2000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-light text-lg">Savings Deposit</TableCell>
                                    <TableCell className="font-light text-lg">Ksh 2000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-light text-lg">Interest Earned</TableCell>
                                    <TableCell className="font-light text-lg">Ksh 2000</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
