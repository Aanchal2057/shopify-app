@extends('shopify-app::layouts.default')

@section('content')
    <div>
        <h1>Dashboard</h1>
       
        @if (!$settings->activated)
            @include('activate-modal') 
        @endif
        @include('partials.activate-modal') 
    </div>

<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <!-- This is an example component -->
 <div id="wrapper" class="container px-4 py-4 mx-auto">

    {{-- @if (!$settings->activated)
        @include('partials.activate-modal')
    @endif --}}
     <div class="sm:grid sm:h-32 sm:grid-flow-row sm:gap-4 sm:grid-cols-3">

        <x-status type="positive" title="Today's wishists" number="32" growth="9"/>
        <x-status type="negative" title="Yesterday's wislists" number="20" growth="20"/>
        <x-status type="normal" title="Total wislists" number="430" growth="0"/>

     </div>
</div>


@endsection

@section('scripts')
    @parent

    <script>
        actions.TitleBar.create(app, {
            title: 'Dashboard'
        });

        function setupTheme() {
            axios.get('/settings')
                .then(function(response) {
                    alert(response);
                })
                .catch(function(error) {
                    alert(error);
                })
        }
    </script>
@endsection
