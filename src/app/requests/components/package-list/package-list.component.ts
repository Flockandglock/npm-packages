import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Package, PackageService } from '../../services/package.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrl: './package-list.component.scss'
})
export class PackageListComponent {

  public package$?: Observable<Package[]>;

  constructor(private packageService: PackageService) { }

  public ngOnInit(): void {
    this.package$ = this.packageService.getPackage();
  }
}
