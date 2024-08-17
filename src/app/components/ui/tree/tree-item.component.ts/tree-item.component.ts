import { NgClass } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeComponent } from '../../badge/badge.component';

@Component({
  selector: 'spark-tree-item',
  standalone: true,
  template: `
    <div class="flex pb-2">
      <ng-content select="[slot=label]" />
      <span
        (click)="toggle()"
        class="mx-2"
        [ngClass]="{ '-rotate-90': isOpen(), 'rotate-90': !isOpen(), 'opacity-50': disabled() }"
        role="button"
      >
         &#x276F;
        </span>
      <ng-content select="[slot=info]" />
    </div>
    <div class="accordion-body" [ngClass]="{ 'accordion-open': isOpen() }">
      <section class="overflow-hidden">
        <div class="m-1">
          <ng-content select="[slot=content]" />
        </div>
      </section>
    </div>
  `,
  imports: [NgClass, BadgeComponent],
})
export class TreeItemComponent {
  setOpen = input(false);
  isOpen = signal(false);
  toggleEvent = output<boolean>();
  alwaysOpen = input(false);
  disabled = input(false);

  ngOnInit(): void {
    this.isOpen.set(this.setOpen() || this.alwaysOpen());
  }

  toggle() {
    if (!this.alwaysOpen() && !this.disabled()) {
      this.isOpen.set(!this.isOpen());
      this.toggleEvent.emit(this.isOpen());
    }
  }
}
