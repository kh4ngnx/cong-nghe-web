import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  imports: [],
  templateUrl: './detail-page.html',
})
export class DetailPage {
  readonly activatedRoute = inject(ActivatedRoute);
  readonly productID = this.activatedRoute.snapshot.paramMap.get('id');
}
