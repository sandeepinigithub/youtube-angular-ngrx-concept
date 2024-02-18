import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateCountry } from '../store/countryAction';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements OnInit {
  countryId = 0;

  countryList: any = [
    {
      id: 1,
      name: 'India',
      states: [
        {
          id: 101,
          name: 'India A'
        },
        {
          id: 102,
          name: 'India B'
        },
      ]
    },
    {
      id: 2,
      name: 'China',
      states: [
        {
          id: 201,
          name: 'China A'
        },
        {
          id: 202,
          name: 'China B'
        },
      ]
    },
  ]

  constructor(private _store: Store<any>) { }
  ngOnInit(): void {
    this._store.select('country').subscribe((data: any) => {
      this.countryId = data?.id
    })

  }

  countryChange() {
    let country = this.countryList?.find((country: any) => country.id == this.countryId);
    this._store.dispatch(updateCountry({country}))

  }

}
