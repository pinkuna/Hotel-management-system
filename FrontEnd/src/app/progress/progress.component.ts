import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit, AfterViewInit {

  constructor(private _viewContainerRef: ViewContainerRef,
    private loadingService: LoadingService) { }

  @Input() color: ThemePalette;
  @Input() strokeWidth: number;
  @Input() diameter: number = 100;
  @Input() mode: ProgressSpinnerMode;
  @Input() value: number;

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;



  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loadingService.attach(
      this.templatePortalContent,
      this._viewContainerRef
    );
  }

}
