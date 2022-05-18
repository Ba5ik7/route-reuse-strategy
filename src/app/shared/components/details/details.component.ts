import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shared-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public routeId!: any;
  public displayName!: any;
  public randomVal!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.routeId = p['detailId'];
      this.displayName = p['displayName'];
    });
    this.randomVal = Math.floor(Math.random() * 100);
    console.log(`OnInit ${this.displayName} Detail: ${this.routeId}`);
  }

  ngOnDestroy(): void {
    console.log(`OnDestroy ${this.displayName} Detail: ${this.routeId}`);
  }
}