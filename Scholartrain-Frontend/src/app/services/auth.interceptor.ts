import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  let dummy = req;
  const token = localStorage.getItem('authToken');
  if (token) {
    dummy = req.clone({
      setHeaders: {
        Authorization : `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
        
      }
    });
  }
  console.log('Modified Request:', dummy);
  return next(dummy);
};
