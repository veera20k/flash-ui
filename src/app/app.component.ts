import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  template: `
    <spark-header />
    <div class="mt-[50px] lg:px-12 px-6 pt-7 pb-4 grid grid-cols-5 gap-4">
      <div class="col-span-1 hidden lg:block">
        <spark-sidebar class="w-max fixed" />
      </div>
      <div class="col-span-5 lg:col-span-4">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'falsh-ui';
}
