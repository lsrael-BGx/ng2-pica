/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './ng2-pica.module';
import * as import2 from './ng2-pica.service';
import * as import3 from '@angular/core/src/di/injector';
class Ng2PicaModuleInjector extends import0.NgModuleInjector<import1.Ng2PicaModule> {
  _Ng2PicaModule_0:import1.Ng2PicaModule;
  __Ng2PicaService_1:import2.Ng2PicaService;
  constructor(parent:import3.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _Ng2PicaService_1():import2.Ng2PicaService {
    if ((this.__Ng2PicaService_1 == null)) { (this.__Ng2PicaService_1 = new import2.Ng2PicaService()); }
    return this.__Ng2PicaService_1;
  }
  createInternal():import1.Ng2PicaModule {
    this._Ng2PicaModule_0 = new import1.Ng2PicaModule();
    return this._Ng2PicaModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.Ng2PicaModule)) { return this._Ng2PicaModule_0; }
    if ((token === import2.Ng2PicaService)) { return this._Ng2PicaService_1; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const Ng2PicaModuleNgFactory:import0.NgModuleFactory<import1.Ng2PicaModule> = new import0.NgModuleFactory(Ng2PicaModuleInjector,import1.Ng2PicaModule);