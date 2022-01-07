import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private route: ActivatedRoute,
    private router: Router) { }
    employee: Employee =new Employee();
    id!: number;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
this.employee=data;
},
error =>console.log(error));
  }

  detailsEmployee(id:number){

    this.employeeService.detailsEmployee(id).subscribe(data=>{
      this.employee=data;
    })
  }

}
