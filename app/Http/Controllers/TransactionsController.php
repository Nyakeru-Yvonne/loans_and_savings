<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TransactionsController extends Controller
{
    public function show()
    {
        return inertia('Transactions'); // Adjust based on your structure
    }
}
