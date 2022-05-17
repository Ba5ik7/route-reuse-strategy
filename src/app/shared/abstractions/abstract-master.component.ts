import { Component, OnDestroy, OnInit } from "@angular/core";

interface RamdomObject {
	number: number,
	appName: string
}

@Component({
  template:''
})
export abstract class AbstractMasterComponent implements OnInit, OnDestroy {
	public randoms!: number[];
	public abstract displayName: string;

	ngOnInit(): void {
		this.randoms = [];
		const numberOfLinks = 5;
		for (let i = 0; i < numberOfLinks; i++) {
			this.randoms.push(this.getRandom(100));
		}
	}

	getRandom(max: number): number {
		return Math.floor(Math.random() * max);
	}

	ngOnDestroy(): void {
		console.log(`Destroy ${this.displayName}`);
	}
}