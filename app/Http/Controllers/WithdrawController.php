<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WithdrawController extends Controller
{
    public function show()
    {
        return inertia('Withdraw'); // Adjust based on your structure
    }
}
