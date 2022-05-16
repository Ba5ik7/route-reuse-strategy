import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shared-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public routeParam!: any;
  public randomVal!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => this.routeParam = p['detailId']);
    this.randomVal = Math.floor(Math.random() * 100);
    console.log(`Init detail: ${this.routeParam}`);
  }

  ngOnDestroy(): void {
    console.log(`Destroy detail: ${this.routeParam}`);
  }
}