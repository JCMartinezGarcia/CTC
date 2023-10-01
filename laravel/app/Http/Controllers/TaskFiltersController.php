<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Support\Facades\DB;

class TaskFiltersController extends Controller
{
    /**
     * 
     */
    public function findTaskByName(Request $request)
    {
        // Validate the request...
        $validated = $request->validate([
            'name' => 'numeric',
        ]);
        $tasks = DB::table('tasks')
            ->join('republic_states', 'tasks.state_id', '=', 'republic_states.state_id')
            ->select('tasks.*', 'republic_states.state_name')
            ->where('tasks.deleted_at', "=", null)
            ->where('title', 'like', '' . $request->name . '%')
            ->get();
        return response()->json($tasks);
    }

    /**
     * 
     */
    public function findTaskByState(Request $request)
    {
        // Validate the request...
        $validated = $request->validate([
            'state_id' => 'numeric',
        ]);
        
        $tasks = DB::table('tasks')
            ->join('republic_states', 'tasks.state_id', '=', 'republic_states.state_id')
            ->select('tasks.*', 'republic_states.state_name')
            ->where('tasks.deleted_at', "=", null)
            ->where('tasks.state_id', $request->state_id)
            ->get();
        return response()->json($tasks);
    }
}
