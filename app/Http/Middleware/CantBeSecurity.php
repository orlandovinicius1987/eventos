<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Gate;

class CantBeSecurity
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     * @param string|null              $guard
     *
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (!Gate::allows('canSecurity')) {
            abort(403, 'A segurança não está autorizada a fazer essa operação');
        }

        return $next($request);
    }
}
