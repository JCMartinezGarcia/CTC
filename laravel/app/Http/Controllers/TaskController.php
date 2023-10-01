<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $tasks = DB::table('tasks')
            ->join('republic_states', 'tasks.state_id', '=', 'republic_states.state_id')
            ->select('tasks.*', 'republic_states.state_name')
            ->where('tasks.deleted_at', "=", null)
            ->get();
        return response()->json($tasks);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request...
        $validated = $request->validate([
            'title' => 'required|max:50|string',
            'description' => 'required|string',
            'state_id' => 'required|numeric',
            'task_creator' => 'required|string|max:50',
            'likes' => 'nullable|numeric',
        ]);

        $task = new Task;
        $task->title = $request->title;
        $task->description = $request->description;
        $task->state_id = $request->state_id;
        $task->task_creator = $request->task_creator;
        $task->likes = 0;
        $task->save();
        return response()->json($task);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        // Validate the request...
        $validated = $request->validate([
            'id' => 'numeric',
        ]);
        // Retrieve a model by its primary key...
        $task = Task::find($id);
        return response()->json($task);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Validate the request...
        $validated = $request->validate([
            'likes' => 'nullable|numeric',
        ]);

        $task = Task::find($id);
        $task->likes = $request->likes;
        $task->save();
        return response()->json($task);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        // Validate the request...
        $validated = $request->validate([
            'id' => 'numeric',
        ]);

        $task = Task::find($id);
        $task->delete();
        return response()->json($task);
    }
}
