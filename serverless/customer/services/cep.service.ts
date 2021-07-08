import { Injectable, HttpService } from '@nestjs/common'
import { map } from 'rxjs/operators'

@Injectable()
export class CepService {
  constructor(private http: HttpService){}

  // Fetches complete address data by CEP number
  fetchData(cep: string) {
    const number = cep.replace('-', '')
    const url = `https://viacep.com.br/ws/${number}/json/`
    return this.http.get(url).pipe(
      map(response => response.data)
    )
  }
}
