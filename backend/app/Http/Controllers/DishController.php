<?php

namespace App\Http\Controllers;

use App\Models\Dish;
use Illuminate\Http\Request;

class DishController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Dish::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required|max:255',
            'price' => 'required|numeric',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048', // Example validation rules
        ]);
    
        $dish = Dish::create($validatedData);
    
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('public/dishes');
            $dish->image = $imagePath;
            $dish->save();
        }
    
        return response()->json([
            'message' => 'Dish created successfully',
            'dish' => $dish,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Dish $dish)
    {
        return response()->json(['dish' => $dish]) ;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Dish $dish)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required|max:255',
            'price' => 'required|numeric',
            'image' => 'required',
        ]);

        $dish->update($validated);

        return response()->json([
            'message' => 'minden fasza',
            'dish' =>$dish
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Dish $dish)
    {
        $dish->delete();

        return response()->json([
            'message' => 'Az étel sikeresen törölve az adatbázisból'
        ]);
    }
}
