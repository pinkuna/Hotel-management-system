import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {


  constructor(private overlay: Overlay) {
    this.indeterminate.subscribe(
      show => {
        if (show && !this.overlayRef.hasAttached()) {
          this.showSpiner()
        } else if (!show && this.overlayRef.hasAttached()) {
          this.hideSpiner()
        }
      })
  }

  private overlayRef = this.createOverlay();
  private templatePortal: TemplatePortal<any>;

  indeterminate: Subject<boolean> = new Subject()

  private createOverlay(): OverlayRef {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'custom-backdrop',
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()

    })
  }
  private showSpiner() {
    this.overlayRef.attach(this.templatePortal)
  }

  private hideSpiner() {
    this.overlayRef.detach()
  }

  attach(templatePortalContent: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    this.templatePortal = new TemplatePortal(
      templatePortalContent,
      viewContainerRef
    )
  }

}
