import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

export class AppReuseStrategy extends RouteReuseStrategy {
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null { return null; }

  shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }

  shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    if (future.routeConfig === curr.routeConfig) {
        return !future.data['alwaysRefresh'];
    } else {
        return false;
    }
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void { }
}