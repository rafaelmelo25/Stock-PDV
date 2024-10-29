<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name', 'Moreira Peças Diesel') }}</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <header>
        <h1>Moreira Peças Diesel</h1>
    </header>

    <main>
        @yield('content')
    </main>

    <footer>
        <p>&copy; 2024 Moreira Peças Diesel. Todos os direitos reservados.</p>
    </footer>

    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
