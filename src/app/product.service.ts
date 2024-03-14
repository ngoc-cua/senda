import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected productsList: Product[] =[]
  constructor(private http: HttpClient) {
    this.getAllProductList().subscribe(res => {
      this.productsList = res
    })
  }
  AutoId(){
    var max=1
    this.productsList.forEach(item=>{
      if(item.id>max){
      max = item.id
      }
    })
    return max+1
  }
  private URL = `http://localhost:3000/products`
  
   getAllProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.URL}`)
  }
  getProductId(id: number){
    return this.productsList.find(item => item.id == id)
  }
  searchId(id: number) {
    return this.productsList.find(item => item.id == id)
  }
  AddProduct(frmProduct:any) :Observable <Product[]>{
    return this.http.post<Product[]>(`${this.URL}`,frmProduct)
  }
  EditProduct(index:number){
    return this.productsList[index]
  }
  UpdateProduct(id:number,frmProduct:any) :Observable<Product[]>{
    return this.http.put<Product[]>(`${this.URL}/${id}`,frmProduct)
  }
  DeleteProduct(id:number): Observable<Product[]> {
    return this.http.delete<Product[]>(`${this.URL}/${id}`)
  }
}
