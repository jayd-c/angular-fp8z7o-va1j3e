import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-prdouct-alerts',
  templateUrl: './prdouct-alerts.component.html',
  styleUrls: ['./prdouct-alerts.component.css'],
})
export class PrdouctAlertsComponent implements OnInit {
  @Input() product!: Product;
  @Input() phone!: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit(): void {}
}
