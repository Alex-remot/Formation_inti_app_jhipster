import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TstAppJhipsterSharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [TstAppJhipsterSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent]
})
export class DocsModule {}
