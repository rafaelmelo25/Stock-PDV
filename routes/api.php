<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;

Route::apiResource('users', UserController::class);
Route::apiResource('products', ProductController::class);
