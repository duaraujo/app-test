"use strict";(self.webpackChunkhello_world_app=self.webpackChunkhello_world_app||[]).push([[787],{4787:(k,m,i)=>{i.r(m),i.d(m,{InventarioModule:()=>J});var g=i(6895),u=i(9299),I=i(1184),l=i(5412),t=i(4650),x=i(81),y=i(7009),p=i(4859);let C=(()=>{class e{constructor(n,o,r,s){this.dialogRef=n,this.data=o,this.deleteImageService=r,this.snackBar=s,this.currentIndex=0}ngOnInit(){}previousImage(){this.currentIndex>0&&this.currentIndex--}nextImage(){this.currentIndex<this.data.images.length-1&&this.currentIndex++}removeImage(){const o=this.data.directoryPath;console.log(this.data.images[this.currentIndex].name),console.log(o)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.so),t.Y36(l.WI),t.Y36(x.p),t.Y36(y.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-inventrario-dialog"]],decls:14,vars:4,consts:[["mat-dialog-title",""],[1,"image-container"],["mat-button","",3,"disabled","click"],[1,"image-preview",3,"src","alt"],[1,"actions"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","warn",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"h1",0),t._uU(1,"Imagens"),t.qZA(),t.TgZ(2,"mat-dialog-content")(3,"div",1)(4,"button",2),t.NdJ("click",function(){return o.previousImage()}),t._uU(5,"Anterior"),t.qZA(),t._UZ(6,"img",3),t.TgZ(7,"button",2),t.NdJ("click",function(){return o.nextImage()}),t._uU(8,"Pr\xf3xima"),t.qZA()()(),t.TgZ(9,"mat-dialog-actions",4)(10,"button",5),t._uU(11,"Fechar"),t.qZA(),t.TgZ(12,"button",6),t.NdJ("click",function(){return o.removeImage()}),t._uU(13,"Remover"),t.qZA()()),2&n&&(t.xp6(4),t.Q6J("disabled",0===o.currentIndex),t.xp6(2),t.s9C("alt",o.data.images[o.currentIndex].name),t.Q6J("src",o.data.images[o.currentIndex].base64,t.LSH),t.xp6(1),t.Q6J("disabled",o.currentIndex===o.data.images.length-1))},dependencies:[p.lW,l.ZT,l.uh,l.xY,l.H8],styles:[".image-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.image-preview[_ngcontent-%COMP%]{max-width:500px;max-height:500px;margin:0 10px}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}"]}),e})();var Z=i(1645),T=i(1481),v=i(3661),d=i(4006),c=i(1576),f=i(3546),h=i(9549),b=i(4144);function F(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"div",11),t.NdJ("click",function(){const s=t.CHM(n).$implicit,O=t.oxw();return t.KtG(O.openDialog(s))}),t.TgZ(1,"div",12),t._uU(2,"folder"),t.qZA(),t.TgZ(3,"div",13),t._uU(4),t.qZA()()}if(2&e){const n=a.$implicit;t.xp6(4),t.Oqu(n)}}const P=[{path:"",component:I.$,children:[{path:"",component:(()=>{class e{constructor(n,o,r,s){this.notificationService=n,this.titleService=o,this.dialog=r,this.getFoldersService=s,this.folders=[],this.directoryPath="datasets/analitos2"}ngOnInit(){this.titleService.setTitle("Inventario"),this.notificationService.openSnackBar("Inventario carregado")}getFolders(){this.directoryPath.trim()?this.getFoldersService.getFolders(this.directoryPath).subscribe(n=>{this.folders=n}):console.warn("Insira um caminha de diretorio valido")}clearFolders(){this.folders=[],this.directoryPath=""}openDialog(n){const o=`${this.directoryPath}/${n}`;this.getFoldersService.getImages(o).subscribe(r=>{this.dialog.open(C,{data:{images:r,directoryPath:o},width:"500px"})})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(Z.g),t.Y36(T.Dx),t.Y36(l.uw),t.Y36(v.N))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-inventario-list"]],decls:20,vars:2,consts:[["fxLayout","row","fxLayoutAlign","center none",1,"container"],["fxFlex","95%"],[1,"mat-typography"],[1,"mat-display-1"],["fxLayout","row","fxLayoutAlign","space-between center","fxLayoutGap","10px"],["fxFlex",""],["matInput","","placeholder","Digite o caminho do diret\xf3rio",3,"ngModel","ngModelChange","keyup.enter"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"],[1,"folder-container"],["class","folder",3,"click",4,"ngFor","ngForOf"],[1,"folder",3,"click"],[1,"material-icons","folder-icon"],[1,"folder-name"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-card")(3,"mat-card-content")(4,"h2"),t._uU(5,"Inventario"),t.qZA(),t.TgZ(6,"div",2)(7,"div",3),t._uU(8,"Explorador de Pastas"),t.qZA(),t.TgZ(9,"div",4)(10,"mat-form-field",5)(11,"mat-label"),t._uU(12,"Diret\xf3rio"),t.qZA(),t.TgZ(13,"input",6),t.NdJ("ngModelChange",function(s){return o.directoryPath=s})("keyup.enter",function(){return o.getFolders()}),t.qZA()(),t.TgZ(14,"button",7),t.NdJ("click",function(){return o.getFolders()}),t._uU(15,"Buscar"),t.qZA(),t.TgZ(16,"button",8),t.NdJ("click",function(){return o.clearFolders()}),t._uU(17,"Limpar"),t.qZA()(),t.TgZ(18,"div",9),t.YNc(19,F,5,1,"div",10),t.qZA()()()()()()),2&n&&(t.xp6(13),t.Q6J("ngModel",o.directoryPath),t.xp6(6),t.Q6J("ngForOf",o.folders))},dependencies:[g.sg,d.Fj,d.JJ,d.On,c.xw,c.SQ,c.Wh,c.yH,p.lW,f.a8,f.dn,h.KE,h.hX,b.Nt],styles:["table[_ngcontent-%COMP%]{width:100%}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}.folder-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px}.folder[_ngcontent-%COMP%]{width:calc(33.33% - 16px);padding:16px;box-sizing:border-box;background-color:#f0f0f0;border:1px solid #ccc;border-radius:4px;text-align:center;cursor:pointer;transition:background-color .3s ease}.folder[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}.folder-icon[_ngcontent-%COMP%]{font-size:48px;margin-bottom:8px}.folder-name[_ngcontent-%COMP%]{font-weight:700}"]}),e})()}]}];let A=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(P),u.Bz]}),e})();var L=i(3927);let J=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[v.N],imports:[g.ez,A,L.m]}),e})()}}]);