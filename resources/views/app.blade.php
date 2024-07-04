<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
    <title inertia>{{ config('app.name', 'Luggage Store') }}</title>
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/Frontend/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
