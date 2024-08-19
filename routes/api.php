<?php

use App\Http\Controllers\API\TodoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::resource('todos', TodoController::class)->withoutMiddleware('sanctum');
