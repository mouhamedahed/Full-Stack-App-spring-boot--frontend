import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private baseURL="http://localhost:8085/addixo/employee/getall";
private baseURLd="http://localhost:8085/addixo/employee/delete";
private baseUrl="http://localhost:8085/addixo/employee/add";
private baseUrlu="http://localhost:8085/addixo/employee/update";
private baseUrlug="http://localhost:8085/addixo/employee/getOneByID";
  constructor(private httpClient : HttpClient) { }
getEmployeesList():Observable<Employee[]>{
  return this.httpClient.get<Employee[]>(`${this.baseURL}`);
}
createEmployee(employee :Employee):Observable<Object>{
  return this.httpClient.post(`${this.baseUrl}`,employee)
}

getEmployeeById(id:number):Observable<Employee>{
  return this.httpClient.get<Employee>(`${this.baseUrlug}/${id}`);
}
updateEmployee(id: number, employee: Employee): Observable<Object>{
  return this.httpClient.put(`${this.baseUrlu}/${id}`, employee);
}
deleteEmployee(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURLd}/${id}`);
}
detailsEmployee(id:number):Observable<Employee>{
  return this.httpClient.get<Employee>(`${this.baseUrlug}/${id}`);
}

}
