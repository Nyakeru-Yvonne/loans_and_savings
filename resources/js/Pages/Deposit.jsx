import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Button } from '@/Components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/Components/ui/dialog";
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Deposit({ auth }) {
    const [amount, setAmount] = useState(0);
    const [interest, setInterest] = useState(0);
    const [fundingAccount, setFundingAccount] = useState("Mpesa");
    const [mpesaNumber, setMpesaNumber] = useState('');
    const [bankAccount, setBankAccount] = useState('');
    const [creditCard, setCreditCard] = useState('');

    const handleAmountChange = (event) => {
        const value = event.target.value;
        setAmount(value);
        setInterest(value * 0.05);
    };
// php
    const handleFundingAccountChange = (event) => {
        setFundingAccount(event.target.value);
        // Clear out any previously entered details when funding account changes
        setMpesaNumber('');
        setBankAccount('');
        setCreditCard('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Deposit" />
            <div className="p-6 bg-white">
                <h1 className="text-3xl font-bold">Deposit</h1>
            </div>
            <div className='flex col gap-4 justify-center'>
                {/* Total Savings Card */}
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
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="bg-blue-600 justify-center">Deposit</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Savings Deposit Form</DialogTitle>
                                        <DialogDescription>
                                            Please fill in the details below to make a deposit.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                                                Deposit Amount
                                            </label>
                                            <input
                                                id="amount"
                                                type="number"
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                placeholder="Enter amount"
                                                required
                                            />
                                        </div>
                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <Button className="bg-gray-500 mr-2">Cancel</Button>
                                            </DialogClose>
                                            <Button type="submit" className="bg-blue-600">Submit</Button>
                                        </DialogFooter>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </CardFooter>
                    </Card>
                </div>

                {/* Interest Rates Card */}
                <div>
                    <Card className="bg-white m-4 bg-blue-400 w-96">
                        <CardHeader>
                            <CardTitle className='text-4xl'>Interest Rates</CardTitle>
                            <CardDescription>Earn yearly returns up to</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className='font-semibold text-xl italic'>10%</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-blue-600 justify-center">Check Rates</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            <div className='m-12'>
                {/* Flexible Savings Card */}
                <div>
                    <Card className="bg-white m-4 bg-green-100 w-1/2">
                        <Dialog>
                            <DialogTrigger asChild>
                                <CardHeader className="cursor-pointer">
                                    <CardTitle className='text-3xl'>
                                        Flexible Savings <ChevronRightIcon className='w-8 h-8 flex ml-[42rem]' />
                                    </CardTitle>
                                    <CardDescription className='text-xl'>
                                        5% interest Rates. Withdraw anytime
                                    </CardDescription>
                                </CardHeader>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Flexible Savings Deposit Form</DialogTitle>
                                    <DialogDescription>
                                        Enter the amount you want to save and select your funding account.
                                    </DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="flexible-amount">
                                            Deposit Amount
                                        </label>
                                        <input
                                            id="flexible-amount"
                                            type="number"
                                            value={amount}
                                            onChange={handleAmountChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            placeholder="Enter amount"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interest">
                                            Interest Earned (5%)
                                        </label>
                                        <input
                                            id="interest"
                                            type="text"
                                            value={interest.toFixed(2)}
                                            readOnly
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="funding-account">
                                            Select Funding Account
                                        </label>
                                        <select
                                            id="funding-account"
                                            value={fundingAccount}
                                            onChange={(e) => setFundingAccount(e.target.value)}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            <option value="Mpesa">Mpesa</option>
                                            <option value="Bank Account">Bank Account</option>
                                            <option value="Credit Card">Credit Card</option>
                                        </select>
                                    </div>
                                    {fundingAccount === "Mpesa" && (
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mpesa-number">
                                                Mpesa Number
                                            </label>
                                            <input
                                                id="mpesa-number"
                                                type="text"
                                                value={mpesaNumber}
                                                onChange={(e) => setMpesaNumber(e.target.value)}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                placeholder="Enter Mpesa Number"
                                                required
                                            />
                                        </div>
                                    )}

                                    {fundingAccount === "Bank Account" && (
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bank-account">
                                                Bank Account Number
                                            </label>
                                            <input
                                                id="bank-account"
                                                type="text"
                                                value={bankAccount}
                                                onChange={(e) => setBankAccount(e.target.value)}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                placeholder="Enter Bank Account Number"
                                                required
                                            />
                                        </div>
                                    )}

                                    {fundingAccount === "Credit Card" && (
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="credit-card">
                                                Credit Card Number
                                            </label>
                                            <input
                                                id="credit-card"
                                                type="text"
                                                value={creditCard}
                                                onChange={(e) => setCreditCard(e.target.value)}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                placeholder="Enter Credit Card Number"
                                                required
                                            />
                                        </div>
                                    )}
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button className="bg-gray-500 mr-2">Cancel</Button>
                                        </DialogClose>
                                        <Button type="submit" className="bg-blue-600">Submit</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </Card>
                </div>

                {/* Other Savings Cards */}
                <div>
                <Card className="bg-white m-4 bg-green-100 w-1/2">
                        <Dialog>
                            <DialogTrigger asChild>
                                <CardHeader className="cursor-pointer">
                                    <CardTitle className='text-3xl'>
                                        Fixed  Savings <ChevronRightIcon className='w-8 h-8 flex ml-[42rem]' />
                                    </CardTitle>
                                    <CardDescription className='text-xl'>
                                        5% interest Rates. Withdraw anytime
                                    </CardDescription>
                                </CardHeader>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Fixed Savings Deposit Form</DialogTitle>
                                    <DialogDescription>
                                        Enter the amount you want to save and select your funding account.
                                    </DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="flexible-amount">
                                            Enter Amount
                                        </label>
                                        <input
                                            id="flexible-amount"
                                            type="number"
                                            value={amount}
                                            onChange={handleAmountChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            placeholder="Enter amount"
                                            required
                                        />
                                    </div>
                                  
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="funding-account">
                                            Select how often you would like to save
                                        </label>
                                        <select
                                            id="funding-account"
                                            // value={fundingAccount}
                                            // onChange={(e) => setFundingAccount(e.target.value)}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            <option value="Mpesa">3 months(14%)</option>
                                            <option value="Bank Account">6 months(15%)</option>
                                            <option value="Credit Card">12 months(16%)</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="funding-account">
                                            Select Funding Account
                                        </label>
                                        <select
                                            id="funding-account"
                                            value={fundingAccount}
                                            onChange={(e) => setFundingAccount(e.target.value)}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            <option value="Mpesa">Mpesa</option>
                                            <option value="Bank Account">Bank Account</option>
                                            <option value="Credit Card">Credit Card</option>
                                        </select>
                                    </div>
                                    {fundingAccount === "Mpesa" && (
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mpesa-number">
                                                Mpesa Number
                                            </label>
                                            <input
                                                id="mpesa-number"
                                                type="text"
                                                value={mpesaNumber}
                                                onChange={(e) => setMpesaNumber(e.target.value)}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                placeholder="Enter Mpesa Number"
                                                required
                                            />
                                        </div>
                                    )}

                                    {fundingAccount === "Bank Account" && (
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bank-account">
                                                Bank Account Number
                                            </label>
                                            <input
                                                id="bank-account"
                                                type="text"
                                                value={bankAccount}
                                                onChange={(e) => setBankAccount(e.target.value)}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                placeholder="Enter Bank Account Number"
                                                required
                                            />
                                        </div>
                                    )}

                                    {fundingAccount === "Credit Card" && (
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="credit-card">
                                                Credit Card Number
                                            </label>
                                            <input
                                                id="credit-card"
                                                type="text"
                                                value={creditCard}
                                                onChange={(e) => setCreditCard(e.target.value)}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                placeholder="Enter Credit Card Number"
                                                required
                                            />
                                        </div>
                                    )}
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button className="bg-gray-500 mr-2">Cancel</Button>
                                        </DialogClose>
                                        <Button type="submit" className="bg-blue-600">Submit</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </Card>
                </div>
                <div>
                <Card className="bg-white m-4 bg-green-100 w-1/2">
                        <Dialog>
                            <DialogTrigger asChild>
                                <CardHeader className="cursor-pointer">
                                    <CardTitle className='text-3xl'>
                                        Target Savings <ChevronRightIcon className='w-8 h-8 flex ml-[42rem]' />
                                    </CardTitle>
                                    <CardDescription className='text-xl'>
                                        5% interest Rates. Withdraw anytime
                                    </CardDescription>
                                </CardHeader>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Target Savings Deposit Form</DialogTitle>
                                    <DialogDescription>
                                        Enter the amount you want to save and select your funding account.
                                    </DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="flexible-amount">
                                            Target Amount
                                        </label>
                                        <input
                                            id="flexible-amount"
                                            type="number"
                                            value={amount}
                                            onChange={handleAmountChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            placeholder="Enter amount"
                                            required
                                        />
                                    </div>
                                  
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="funding-account">
                                            Select how often you would like to save
                                        </label>
                                        <select
                                            id="funding-account"
                                            // value={fundingAccount}
                                            // onChange={(e) => setFundingAccount(e.target.value)}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            <option value="Mpesa">Daily</option>
                                            <option value="Bank Account">Weekly</option>
                                            <option value="Credit Card">Monthly</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="funding-account">
                                            Select Funding Account
                                        </label>
                                        <select
                                            id="funding-account"
                                            value={fundingAccount}
                                            onChange={(e) => setFundingAccount(e.target.value)}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            <option value="Mpesa">Mpesa</option>
                                            <option value="Bank Account">Bank Account</option>
                                            <option value="Credit Card">Credit Card</option>
                                        </select>
                                    </div>
                                    {fundingAccount === "Mpesa" && (
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mpesa-number">
                                                Mpesa Number
                                            </label>
                                            <input
                                                id="mpesa-number"
                                                type="text"
                                                value={mpesaNumber}
                                                onChange={(e) => setMpesaNumber(e.target.value)}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                placeholder="Enter Mpesa Number"
                                                required
                                            />
                                        </div>
                                    )}

                                    {fundingAccount === "Bank Account" && (
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bank-account">
                                                Bank Account Number
                                            </label>
                                            <input
                                                id="bank-account"
                                                type="text"
                                                value={bankAccount}
                                                onChange={(e) => setBankAccount(e.target.value)}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                placeholder="Enter Bank Account Number"
                                                required
                                            />
                                        </div>
                                    )}

                                    {fundingAccount === "Credit Card" && (
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="credit-card">
                                                Credit Card Number
                                            </label>
                                            <input
                                                id="credit-card"
                                                type="text"
                                                value={creditCard}
                                                onChange={(e) => setCreditCard(e.target.value)}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                placeholder="Enter Credit Card Number"
                                                required
                                            />
                                        </div>
                                    )}
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button className="bg-gray-500 mr-2">Cancel</Button>
                                        </DialogClose>
                                        <Button type="submit" className="bg-blue-600">Submit</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
