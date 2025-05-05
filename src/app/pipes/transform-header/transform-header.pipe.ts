import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'transformHeader'
})
export class TransformHeaderPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) return value;
    const parts = value.split('/');
    if (parts.length < 2) return value;

    const html = `<span style="color: orange">${parts[0]}</span>/${parts.slice(1).join('/')}`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}