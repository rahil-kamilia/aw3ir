import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoDetailComponent } from './meteo-detail.component';

describe('MeteoDetailComponent', () => {
  let component: MeteoDetailComponent;
  let fixture: ComponentFixture<MeteoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {MeteoService} from '../services/meteo.service'
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-meteo-detail',
  templateUrl: './meteo-detail.component.html',
  styleUrls: ['./meteo-detail.component.css']
})
export class MeteoDetailComponent implements OnInit {

  meteo : any;

  constructor(
    private route: ActivatedRoute,
    private meteoService: MeteoService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getMeteo();
  }

  getMeteo(): void {
    const name = this.route.snapshot.paramMap.get('name');
    console.log('getmeteo',name);
    this.meteoService.getMeteo(name)
      .then(meteo => this.meteo = meteo)
      .catch(fail => this.meteo = fail);
  }

}