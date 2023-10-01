<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RepublicState;

class RepublicStatesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $states = RepublicState::all();
        return response()->json($states);
    }

}
