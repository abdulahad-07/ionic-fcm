import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  from: string = ''

  constructor(
    private route: ActivatedRoute
  ) {
    this.from = this.route.snapshot.params['from']
  }

}
