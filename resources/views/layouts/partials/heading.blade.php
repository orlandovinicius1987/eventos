<div class="container-fluid">
    <div class="row mb-5">
        <div class="col-12 p-0">
            <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">Entrar</a>
                            </li>
                        @else
                            <li class="nav-item">
                                <router-link id="dashboard-menu" to="/dashboard" tag="li" class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="vl_dashboard"></i>
                                        <span class="nav-link-text">Painel de Controle</span>
                                    </a>
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link id="events-menu" to="/events" tag="li" class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="vl_events"></i>
                                        <span class="nav-link-text">Eventos</span>
                                    </a>
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link id="events-menu" to="/people" tag="li" class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="vl_events"></i>
                                        <span class="nav-link-text">Pessoas</span>
                                    </a>
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link id="events-menu" to="/phone-book" tag="li" class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="vl_events"></i>
                                        <span class="nav-link-text">Lista telefônica</span>
                                    </a>
                                </router-link>
                            </li>

                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="tables-menu"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Tabelas
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdown01">
                                    <router-link id="events-menu" to="/events" tag="li" class="dropdown-item">
                                        Eventos
                                    </router-link>

                                    <router-link id="people-menu" to="/people" tag="a" class="dropdown-item">
                                        Pessoas
                                    </router-link>

                                    <router-link id="people-menu" to="/phone-book" tag="a" class="dropdown-item">
                                        Lista telefônica
                                    </router-link>

                                    <router-link id="people-menu" to="/categories" tag="a" class="dropdown-item">
                                        Categorias
                                    </router-link>

                                    <router-link id="people-menu" to="/roles" tag="a" class="dropdown-item">
                                        Funções
                                    </router-link>

                                    <router-link id="people-menu" to="/institutions" tag="a" class="dropdown-item">
                                        Instituições
                                    </router-link>

                                    <router-link id="people-menu" to="/contact-types" tag="a" class="dropdown-item">
                                        Tipos de Contatos
                                    </router-link>

                                    <router-link id="people-menu" to="/import" tag="a" class="dropdown-item">
                                        Importar dados
                                    </router-link>
                                </div>
                            </li>

                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                        onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                        Sair
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>
