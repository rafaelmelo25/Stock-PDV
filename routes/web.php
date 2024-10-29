<?php

use Illuminate\Support\Facades\Route;

// Rota para a home
Route::get('/', function () {
    return view('home');  // Garante que 'home.blade.php' seja carregado
});
