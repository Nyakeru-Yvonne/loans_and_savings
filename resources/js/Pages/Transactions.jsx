import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";

export default function Transactions({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="recent transactions" />
            <div className="p-6 bg-white">
                <h1 className="text-3xl font-bold">Transactions</h1>
                {/* Your content for the Savings Deposit page */}
                <div title="Recent Transactions" className='m-4 bg-gray-200'>
                        <Table>
                            <TableHeader className='bg-gray-400'>
                                <TableRow>
                                    <TableHead className="text-2xl text-purple-900">Recent Transaction</TableHead>
                                    <TableHead className="text-2xl text-purple-900">Amount</TableHead>
                                    <TableHead className="text-2xl text-purple-900">Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-light text-lg">Loan Payment</TableCell>
                                    <TableCell className="font-light text-lg">Ksh 2000</TableCell>
                                    <TableCell className="font-light text-lg">23/07/2024</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-light text-lg">Loan Disbursement</TableCell>
                                    <TableCell className="font-light text-lg">Ksh 2000</TableCell>
                                    <TableCell className="font-light text-lg">22/07/2024</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-light text-lg">Loan Payment</TableCell>
                                    <TableCell className="font-light text-lg">Ksh 2000</TableCell>
                                    <TableCell className="font-light text-lg">24/07/2024</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-light text-lg">Savings Deposit</TableCell>
                                    <TableCell className="font-light text-lg">Ksh 2000</TableCell>
                                    <TableCell className="font-light text-lg">25/07/2024</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-light text-lg">Loan Payment</TableCell>
                                    <TableCell className="font-light text-lg">Ksh 2000</TableCell>
                                    <TableCell className="font-light text-lg">26/07/2024</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-light text-lg">Interest Earned</TableCell>
                                    <TableCell className="font-light text-lg">Ksh 2000</TableCell>
                                    <TableCell className="font-light text-lg">27/07/2024</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-light text-lg">Loan Payment</TableCell>
                                    <TableCell className="font-light text-lg">Ksh 2000</TableCell>
                                    <TableCell className="font-light text-lg">28/07/2024</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-light text-lg">Interest Earned</TableCell>
                                    <TableCell className="font-light text-lg">Ksh 2000</TableCell>
                                    <TableCell className="font-light text-lg">30/07/2024</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
            </div>
        </AuthenticatedLayout>
    );
}