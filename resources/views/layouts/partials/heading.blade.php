<div class="container-fluid">
    <div class="row mb-5">
        <div class="col-12 p-0">
            <nav class="navbar navbar-expand-lg navbar-light navbar-laravel">

                {{--<a class="navbar-brand" href="{{ url('/') }}">
                   <img src="/svg/logo-eventos-alerj.svg" class="img-fluid"> <span class="brand-complement">cerimonial</span>
                </a>--}}

                {{-- <a class="navbar-brand d-flex" href="{{ url('/') }}">
                    <img src="/svg/logo-eventos-alerj.svg" class="img-fluid">
                    <div class="brand-name align-self-center"></div>
                </a> --}}
{{--

                <div class="d-flex bd-highlight mb-3">
                    <div class="align-self-center p-2 bd-highlight">
                        <img src="/svg/logo-eventos-alerj.svg" class="brand-logo align-self-center">
                    </div>
                </div>

--}}
{{--


                <a class="navbar-brand pb-2" href="#">
                    <img src="/svg/logo-eventos-alerj.svg"  class="svg-logo" alt="">
                </a>

--}}

                <a href="#" class="navbar-brand">
                    <img src="/svg/logo-eventos-alerj.svg" height="30" alt="" class="d-inline-block align-top">
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
                            <router-link id="dashboard-menu" to="/dashboard" tag="li" class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="vl_dashboard"></i>
                                    <span class="nav-link-text"><i class="fas fa-cogs"></i> Painel de Controle</span>
                                </a>
                            </router-link>

                            <router-link id="events-menu" to="/events" tag="li" class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="vl_events"></i>
                                    <span class="nav-link-text"> <i class="fas fa-calendar-alt"></i> Eventos</span>
                                </a>
                            </router-link>

                            <router-link id="events-menu" to="/people" tag="li" class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="vl_events"></i>
                                    <span class="nav-link-text"> <i class="fas fa-users"></i> Pessoas</span>
                                </a>
                            </router-link>



                            <router-link id="events-menu" to="/phone-book" tag="li" class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="vl_events"></i>
                                    <span class="nav-link-text"> <i class="fas fa-address-book"></i> Lista telefônica</span>
                                </a>
                            </router-link>



                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="tables-menu"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i class="fas fa-table"></i> Tabelas
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
                                    <i class="fas fa-user"></i> {{ Auth::user()->username }} <span class="caret"></span>
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
