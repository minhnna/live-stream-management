import { NgModule } from '@angular/core';

import { LivestreammanagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [LivestreammanagementSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [LivestreammanagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class LivestreammanagementSharedCommonModule {}
