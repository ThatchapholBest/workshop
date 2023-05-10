import { Component,Injectable,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Ws } from '../ws';
import { WsService } from '../ws.service';
 
@Component({  
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  searchText!: string;
  movies!: any;

  constructor(
    private WsService: WsService,
    private formBuilder: FormBuilder,
    ) {}

  ngOnInit() {
    this.movies = this.formBuilder.group({
      NameMovie: [{value: '',type: String, disabled: false}],
      TypeMovie: [{value: '',type: String, disabled: false}],
      MoviePrice: [{value: '',type: Number, disabled: false}],
      Movieid: [{value: '',type: String,disabled: false}]
    }); 
  }

  searchMovie(): void {
    this.WsService.getMovieId(Number(this.searchText)).subscribe(res => {
        console.log(res);
        this.movies = res;
      },
      err => console.error(err)
      );
  }
} 
