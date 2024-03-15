import {Injectable} from "@angular/core";
import {TokenService} from "./token.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheckLogOutGuard {
  constructor(private tokenService: TokenService,
              private router: Router) {
  }
  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tokenService.getToken()){
      return true;
    } else {
      this.router.navigate([''])
    }
  }

}
