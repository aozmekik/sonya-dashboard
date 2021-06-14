import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';


export class GeneralService {
    protected apiBaseUrl = 'http://localhost:8080/api';

    constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) {
        if (environment.production)
            this.apiBaseUrl = 'https://sonyadev.herokuapp.com/api';
    }

    protected getHeaders() {
        return {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${this.authenticationService.getToken()}`
            })
        };
    }

    protected handleError(error: any): Promise<any> {
        console.error('handleError', error);
        return Promise.reject(error.message || error);
    }
}