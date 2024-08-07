<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DepositController extends Controller
{
    public function show()
    {
        return inertia('Deposit'); // Adjust based on your structure
    }
}
