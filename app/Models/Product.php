<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'code', 'manufacturer', 'price', 'stock', 'description'];

    public function stockMovements() {
        return $this->hasMany(StockMovement::class);
    }
}
