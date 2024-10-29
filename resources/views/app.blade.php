<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name', 'Moreira Peças Diesel') }}</title>
    <!-- Inclua aqui os links para os arquivos CSS, como Bootstrap ou estilos personalizados -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <!-- Cabeçalho -->
    <header>
        <h1>Moreira Peças Diesel</h1>
        <!-- Aqui você pode incluir um menu de navegação, por exemplo -->
    </header>

    <!-- Conteúdo principal -->
    <main>
        @yield('content') <!-- Esse é o espaço onde as views específicas serão injetadas -->
    </main>

    <!-- Rodapé -->
    <footer>
        <p>&copy; 2024 Moreira Peças Diesel. Todos os direitos reservados.</p>
    </footer>

    <!-- Scripts JS -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
