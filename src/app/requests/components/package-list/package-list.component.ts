import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
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


  public filteredPackages$?: Observable<Package[]>;
  private filterSubject = new BehaviorSubject<string>('');


  constructor(private packageService: PackageService) { }

  public ngOnInit(): void {
    this.package$ = this.packageService.getPackage();

    this.filteredPackages$ = combineLatest([this.package$, this.filterSubject]).pipe(
      map(([packages, filter]) => {
        if (!filter.trim()) {
          return packages;
        }
        const lowerFilter = filter.toLowerCase();
        return packages.filter(pkg => pkg.id.toLowerCase().includes(lowerFilter));
      })
    );
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

  public onFilterChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
      this.filterSubject.next(value);
    
  }

}
