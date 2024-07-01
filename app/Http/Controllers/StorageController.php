<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StorageController extends Controller
{
    public function storage(){
        return Inertia::render('Frontend/Storage');
    }
    public function withoutlog(){
        return Inertia::render('Frontend/WithoutLogin');
    }
}
