import { Injectable} from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
@Injectable()
    export class AuthGuardService implements CanActivate{
        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
            if(document.cookie===null){
                window.location.replace('/login')
                return false;

            }
              
                
            
        }

    }
