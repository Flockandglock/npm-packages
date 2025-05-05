import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Package, PackageService } from '../../services/package.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrl: './package-list.component.scss'
})
export class PackageListComponent {

  public package$?: Observable<Package[]>;
  public hoveredPackageId: string | undefined = undefined;
  public packageDependency: String[] = [];

  public findPackage = '';


  constructor(private packageService: PackageService) { }

  public ngOnInit(): void {
    this.package$ = this.packageService.getPackage();
  }

  public onMouseEnter(pkg: Package) {
    this.hoveredPackageId = pkg.id;
    this.packageService.getPackageDependencies(pkg.id).subscribe((res) => {
      this.packageDependency = res;
    });
  }

  public onMouseLeave() {
    this.hoveredPackageId = undefined;
    this.packageDependency = [];
  }

  public getPackagesOnClick () {
    this.package$ = this.packageService.getPackage();
  }

  public filterPackages () {
    

    
  }

}
