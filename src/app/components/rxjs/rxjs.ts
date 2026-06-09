import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css',
})
export class Rxjs {
  dataList$ = of([4, 2, 1, 4, 5, 8, 99, 43, 32, 1, 32, 4, 43])

  searchControl = new FormControl('', {
    nonNullable: true
  });


  constructor() {
    this.searchControl.valueChanges.pipe(
      filter(input => input.length >= 3)
    ).subscribe(value => {
      console.log(value);
    })

    this.dataList$.pipe(
      map((data: number[]) => {
        return data.filter((item: number) => {
          return item > 10
        })
      })
    ).subscribe((data) => {
      console.log(data)
    })
  }

  onSearch() {

  }



  // ngOnInit() {
  // this.searchControl.valueChanges
  //   .subscribe(value => {
  //     console.log(value);
  //   });
  // }
}
