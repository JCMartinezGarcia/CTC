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

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request...
        $validated = $request->validate([
            'state_name' => 'required|max:50|string',
        ]);

        $state = new RepublicState;
        $state->state_name = $request->state_name;
        $state->save();
        return response()->json($state);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Retrieve a model by its primary key...
        $state = RepublicState::find($id);
        return response()->json($state);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Validate the request...
        $validated = $request->validate([
            'state_name' => 'required|max:50|string',
        ]);
        
        $state = RepublicState::find($id);
        $state->state_name = $request->state_name;
        $state->save();
        return response()->json($state);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $state = RepublicState::find($id);
        $state->delete();
        return response()->json($state);
    }
}
