import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {

  constructor(private SharedService:SharedService) {}

  ActorList:any=[];
 
  ngOnInit(): void{
    this.refreshDepList();
  }

  refreshDepList(){
    this.SharedService.getActorsList().subscribe((data)=>{
      this.ActorList=data;
    });
  }

}
