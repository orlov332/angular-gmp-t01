import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {LoaderService} from './loader.service';

@Component({
  selector: 'app-vc-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
  }

}
