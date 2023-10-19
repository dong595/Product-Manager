import { Component } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {
  faShoppingBag,
  faBox,
  faBarcode,
  faShoppingCart,
  faUserPlus,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent {
  faHome = faHome;
  faShoppingBagIcon = faShoppingBag;
  faBoxIcon = faBox;
  faBarcodeIcon = faBarcode;
  faUserPlus = faUserPlus;
  faCog = faCog;
  faShoppingCart = faShoppingCart;
}
