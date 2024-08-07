import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Withdraw({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Withdraw Savings" />
            <div className="p-6 bg-white">
                <h1 className="text-3xl font-bold">Withdraw Savings</h1>
               
            </div>
        </AuthenticatedLayout>
    );
}