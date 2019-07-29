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

                <div class="d-flex bd-highlight mb-3" style="height: 100px">
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

                <form id="change-client-form" action="{{ route('change.client') }}" method="post" >
                    @csrf

                    @if (isset($clients) && count($clients) > 1)
                        <select name="clientId" class="select2 form-control" id="clientId" onchange="submit()">
                            <option value="">SELECIONE</option>

                            @foreach ($clients as $key => $client)
                                @if(get_current_client_id() == $client->id)
                                    <option value="{{ $client->id }}" selected="selected">{{ $client->name }}</option>
                                @else
                                    <option value="{{ $client->id }}">{{ $client->name }}</option>
                                @endif
                            @endforeach
                        </select>
                    @endif
                </form>


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
                            @if(Gate::check('events:read') || Gate::check('events:modify'))
                                <router-link id="dashboard-menu" to="/dashboard" tag="li" class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="vl_dashboard"></i>
                                        <span class="nav-link-text"><i class="fas fa-cogs"></i> Painel de Controle</span>
                                    </a>
                                </router-link>
                            @else
                                @can('receptive')
                                    <router-link id="receptive-menu" to="/recept" tag="li" class="nav-item">
                                        <a href="#" class="nav-link">
                                            <i class="vl_receptive"></i>
                                            <span class="nav-link-text"><i class="fas fa-cogs"></i> Receptivo</span>
                                        </a>
                                    </router-link>
                                @endcan
                            @endif

                            @if(Gate::check('events:read') || Gate::check('events:modify'))
                                <router-link id="events-menu" to="/events" tag="li" class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="vl_events"></i>
                                        <span class="nav-link-text"> <i class="fas fa-calendar-alt"></i> Eventos</span>
                                    </a>
                                </router-link>
                            @endif
                            @if(Gate::check('people:read') || Gate::check('people:modify'))
                                <router-link id="events-menu" to="/people" tag="li" class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="vl_events"></i>
                                        <span class="nav-link-text"> <i class="fas fa-users"></i> Pessoas</span>
                                    </a>
                                </router-link>
                            @endif
                            @if(Gate::check('phonebook:read') || Gate::check('phonebook:modify'))
                                <router-link id="events-menu" to="/phone-book" tag="li" class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="vl_events"></i>
                                        <span class="nav-link-text"> <i class="fas fa-address-book"></i> Lista telefônica</span>
                                    </a>
                                </router-link>
                            @endif
                            @if(
                            Gate::check('events:read') || Gate::check('events:modify')
                            || Gate::check('people:read') || Gate::check('people:modify')
                            || Gate::check('phonebook:read') || Gate::check('phonebook:modify')
                            || Gate::check('institutions:read') || Gate::check('institutions:modify')
                            || Gate::check('categories:read') || Gate::check('categories:modify')
                            || Gate::check('roles:read') || Gate::check('roles:modify')
                            || Gate::check('sectors:read') || Gate::check('sectors:modify')
                            || Gate::check('costumes:read') || Gate::check('costumes:modify')
                            || Gate::check('contacttypes:read') || Gate::check('contacttypes:modify')
                            || Gate::check('import:read') || Gate::check('import:modify')
                            || Gate::check('topics:read') || Gate::check('topics:modify')
                            )
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
                                        @if(Gate::check('events:read') || Gate::check('events:modify'))
                                            <router-link id="events-menu" to="/events" tag="li" class="dropdown-item">
                                                Eventos
                                            </router-link>
                                        @endif

                                        @if(Gate::check('people:read') || Gate::check('people:modify'))
                                            <router-link id="people-menu" to="/people" tag="a" class="dropdown-item">
                                                Pessoas
                                            </router-link>
                                        @endif

                                        @if(Gate::check('phonebook:read') || Gate::check('phonebook:modify'))
                                            <router-link id="people-menu" to="/phone-book" tag="a" class="dropdown-item">
                                                Lista telefônica
                                            </router-link>
                                        @endif

                                        @if(Gate::check('institutions:read') || Gate::check('institutions:modify'))
                                            <router-link id="people-menu" to="/institutions" tag="a" class="dropdown-item">
                                                Instituições
                                            </router-link>
                                        @endif

                                        @if(Gate::check('categories:read') || Gate::check('categories:modify'))
                                            <router-link id="people-menu" to="/categories" tag="a" class="dropdown-item">
                                                Categorias
                                            </router-link>
                                        @endif

                                        @if(Gate::check('roles:read') || Gate::check('roles:modify'))
                                            <router-link id="people-menu" to="/roles" tag="a" class="dropdown-item">
                                                Funções
                                            </router-link>
                                        @endif

                                        @if(Gate::check('sectors:read') || Gate::check('sectors:modify'))
                                            <router-link id="people-menu" to="/sectors" tag="a" class="dropdown-item">
                                                Setores
                                            </router-link>
                                        @endif

                                        @if(Gate::check('costumes:read') || Gate::check('costumes:modify'))
                                            <router-link id="people-menu" to="/costumes" tag="a" class="dropdown-item">
                                                Trajes
                                            </router-link>
                                        @endif

                                        @if(Gate::check('contacttypes:read') || Gate::check('contacttypes:modify'))
                                            <router-link id="people-menu" to="/contact-types" tag="a" class="dropdown-item">
                                                Tipos de Contatos
                                            </router-link>
                                        @endif

                                        @if(Gate::check('topics:read') || Gate::check('topics:modify'))
                                            <router-link id="people-menu" to="/topics" tag="a" class="dropdown-item">
                                                Interesses
                                            </router-link>
                                        @endif

                                        @if(Gate::check('events:modify'))
                                            <router-link id="client-settings-menu" to="/client-settings" tag="a" class="dropdown-item">
                                                Configurações
                                            </router-link>
                                        @endif

                                        @if(Gate::check('events:modify'))
                                            <router-link id="uploaded-files-menu" to="/uploaded-files" tag="a" class="dropdown-item">
                                                Imagens
                                            </router-link>
                                        @endif

                                        @if(Gate::check('import:read') || Gate::check('import:modify'))
                                            <router-link id="import-menu" to="/import" tag="a" class="dropdown-item">
                                                Importar dados
                                            </router-link>
                                        @endif
                                    </div>
                                </li>
                            @endif

                            @include('layouts.partials.usermenu')
                        @endguest
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>
