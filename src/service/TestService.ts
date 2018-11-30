import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'


/*
Servicio de prueba funcional
*/

const httpOptions =  new HttpHeaders().append('Content-Type','application/json');

@Injectable()
export class TestService {


    constructor(
        private _http: HttpClient
    ) { }


    testService(): Promise<any> {
        return this._http.get("http://webapisampleperiferia.azurewebsites.net/api/Products").toPromise()
    }

    insertService(id, name, description): Promise<any> {
       
        let result =  {
            id: id,
            name: name,
            description: description
        }
        let apiHeader = new HttpHeaders();
        return this._http.post("http://webapisampleperiferia.azurewebsites.net/api/Products",
        result,{ headers: httpOptions  }).toPromise()
    }

   
}