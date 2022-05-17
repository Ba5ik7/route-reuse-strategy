import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shared-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public routeId!: any;
  public appName!: any;
  public randomVal!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.routeId = p['detailId'];
      this.appName = p['appName'];
    });
    this.randomVal = Math.floor(Math.random() * 100);
    console.log(`Init detail: ${this.routeId}`);
  }

  ngOnDestroy(): void {
    console.log(`Destroy detail: ${this.routeId}`);
  }
}