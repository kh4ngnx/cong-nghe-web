import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const adminGuard: CanActivateFn = () => {
  const route = inject(Router);
  return route.createUrlTree(['/']);
};
