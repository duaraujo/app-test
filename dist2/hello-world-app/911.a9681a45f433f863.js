"use strict";(self.webpackChunkhello_world_app=self.webpackChunkhello_world_app||[]).push([[911],{4911:(lt,C,l)=>{l.r(C),l.d(C,{InventoryModule:()=>it});var f=l(6895),g=l(9299),D=l(1184),v=l(5017),d=l(4006),I=l(8675),w=l(4004),Z=l(8739),r=l(7155),x=l(3518),t=l(4650),N=l(3661),u=l(1576),y=l(4859),h=l(3546),_=l(9549),T=l(4144);function A(a,o){1&a&&(t.TgZ(0,"th",19),t._uU(1," Nome do Arquivo "),t.qZA())}function b(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"td",20),t.NdJ("click",function(){const s=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.onRowClicked(s))}),t._uU(1),t.qZA()}if(2&a){const e=o.$implicit,n=t.oxw();t.ekj("selected",n.selection.isSelected(e)),t.xp6(1),t.hij(" ",e," ")}}function U(a,o){1&a&&t._UZ(0,"tr",21)}function F(a,o){if(1&a&&t._UZ(0,"tr",22),2&a){const e=o.$implicit,n=t.oxw();t.ekj("selected-row",n.selection.isSelected(e))}}const k=function(){return[5,10,20]};let L=(()=>{class a{constructor(e,n){this.getFoldersService=e,this.router=n,this.directoryPath=x.Q,this.displayedColumns=["folder"],this.selection=new v.Ov(!1,[]),this.filterControl=new d.NI,this.dataSource=new r.by([])}ngOnInit(){this.dataSource.filterPredicate=(e,n)=>e.toLowerCase().includes(n),this.filterControl.valueChanges.pipe((0,I.O)(""),(0,w.U)(e=>e.trim().toLowerCase())).subscribe(e=>{this.dataSource.filter=e})}getFolders(){this.directoryPath.trim()?this.getFoldersService.getFolders(this.directoryPath).subscribe(e=>{this.dataSource.data=e,this.dataSource.filter="",this.paginator&&(this.dataSource.paginator=this.paginator)}):console.warn("Insira um caminho de diret\xf3rio v\xe1lido")}onRowClicked(e){this.selection.toggle(e),this.router.navigate(["inventory/list-directory",e])}clearFolders(){this.directoryPath="",this.dataSource.data=[],this.dataSource.filter="",this.selection.clear()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(N.N),t.Y36(g.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-inventory"]],viewQuery:function(e,n){if(1&e&&t.Gf(Z.NW,5),2&e){let i;t.iGM(i=t.CRH())&&(n.paginator=i.first)}},decls:30,vars:7,consts:[["fxLayout","column","fxLayoutAlign","start stretch","fxLayoutGap","20px",1,"container"],["fxFlex","95%"],[1,"mat-typography"],[1,"mat-display-1"],["fxLayout","row","fxLayoutAlign","space-between center","fxLayoutGap","10px"],["fxFlex",""],["matInput","","placeholder","Digite o caminho do diret\xf3rio",3,"ngModel","ngModelChange","keyup.enter"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"],["fxLayout","row"],["type","text","matInput","","placeholder","Filtrar arquivos",3,"formControl"],["fxLayout","column","fxLayoutGap","10px","fxFlex","100%"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","folder"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","pointer",3,"selected","click",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"selected-row",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell","",1,"pointer",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-card")(3,"mat-card-content")(4,"div",2)(5,"div",3),t._uU(6,"Invent\xe1rio"),t.qZA(),t.TgZ(7,"div",4)(8,"mat-form-field",5)(9,"mat-label"),t._uU(10,"Selecionar arquivo"),t.qZA(),t.TgZ(11,"input",6),t.NdJ("ngModelChange",function(s){return n.directoryPath=s})("keyup.enter",function(){return n.getFolders()}),t.qZA()(),t.TgZ(12,"button",7),t.NdJ("click",function(){return n.getFolders()}),t._uU(13,"Buscar"),t.qZA(),t.TgZ(14,"button",8),t.NdJ("click",function(){return n.clearFolders()}),t._uU(15,"Limpar"),t.qZA()(),t.TgZ(16,"div",9)(17,"mat-form-field",5)(18,"mat-label"),t._uU(19,"Filtro"),t.qZA(),t._UZ(20,"input",10),t.qZA()(),t.TgZ(21,"div",9)(22,"div",11)(23,"table",12),t.ynx(24,13),t.YNc(25,A,2,0,"th",14),t.YNc(26,b,2,3,"td",15),t.BQk(),t.YNc(27,U,1,0,"tr",16),t.YNc(28,F,1,2,"tr",17),t.qZA(),t._UZ(29,"mat-paginator",18),t.qZA()()()()()()()),2&e&&(t.xp6(11),t.Q6J("ngModel",n.directoryPath),t.xp6(9),t.Q6J("formControl",n.filterControl),t.xp6(3),t.Q6J("dataSource",n.dataSource),t.xp6(4),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(6,k)))},dependencies:[d.Fj,d.JJ,d.On,d.oH,u.xw,u.SQ,u.Wh,u.yH,y.lW,h.a8,h.dn,_.KE,_.hX,T.Nt,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,Z.NW],styles:["table[_ngcontent-%COMP%]{width:100%}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}.selected[_ngcontent-%COMP%]{background-color:#f0f0f0}.selected-row[_ngcontent-%COMP%]{background-color:#e0e0e0!important}.pointer[_ngcontent-%COMP%]{cursor:pointer}"]}),a})();var p=l(5412),M=l(1713),q=l(81),J=l(7009),O=l(7392);function P(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.previous())}),t.TgZ(1,"mat-icon"),t._uU(2,"keyboard_double_arrow_left"),t.qZA()()}}function S(a,o){if(1&a&&(t.TgZ(0,"div")(1,"p")(2,"strong"),t._uU(3,"App Name:"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"p")(6,"strong"),t._uU(7,"Package Name:"),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"p")(10,"strong"),t._uU(11,"Version Name:"),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"p")(14,"strong"),t._uU(15,"Device alias:"),t.qZA(),t._uU(16),t.qZA(),t.TgZ(17,"p")(18,"strong"),t._uU(19,"Android version:"),t.qZA(),t._uU(20),t.qZA(),t.TgZ(21,"p")(22,"strong"),t._uU(23,"Manufacture:"),t.qZA(),t._uU(24),t.qZA(),t.TgZ(25,"p")(26,"strong"),t._uU(27,"Model:"),t.qZA(),t._uU(28),t.qZA(),t.TgZ(29,"p")(30,"strong"),t._uU(31,"Alkalinity Unit:"),t.qZA(),t._uU(32),t.qZA(),t.TgZ(33,"p")(34,"strong"),t._uU(35,"File Name:"),t.qZA(),t._uU(36),t.qZA(),t.TgZ(37,"p")(38,"strong"),t._uU(39,"Datetime:"),t.qZA(),t._uU(40),t.qZA(),t.TgZ(41,"p")(42,"strong"),t._uU(43,"Analyst Name:"),t.qZA(),t._uU(44),t.qZA(),t.TgZ(45,"p")(46,"strong"),t._uU(47,"Blank File Name:"),t.qZA(),t._uU(48),t.qZA()()),2&a){const e=t.oxw();t.xp6(4),t.hij(" ",e.data.images.app.appName,""),t.xp6(4),t.hij(" ",e.data.images.app.packageName,""),t.xp6(4),t.hij(" ",e.data.images.app.versionName,""),t.xp6(4),t.hij(" ",e.data.images.device.alias,""),t.xp6(4),t.hij(" ",e.data.images.device.androidVersion,""),t.xp6(4),t.hij(" ",e.data.images.device.manufacturer,""),t.xp6(4),t.hij(" ",e.data.images.device.model,""),t.xp6(4),t.hij(" ",e.data.images.sample.alkalinityUnit,""),t.xp6(4),t.hij(" ",e.data.images.sample.title,""),t.xp6(4),t.hij(" ",e.data.images.sample.datetime,""),t.xp6(4),t.hij(" ",e.data.images.sample.analystName,""),t.xp6(4),t.hij(" ",e.data.images.sample.blankFileName,"")}}function j(a,o){if(1&a&&(t.TgZ(0,"div",4)(1,"div",11),t._UZ(2,"img",12),t.TgZ(3,"strong"),t._uU(4),t.qZA()()()),2&a){const e=t.oxw();t.xp6(2),t.MGl("alt","Image ",e.currentIndex+1,""),t.Q6J("src","data:image/jpeg;base64,"+e.images[e.currentIndex],t.LSH),t.xp6(2),t.Oqu(e.data.images.sample.extraFileNames[e.currentIndex])}}function Y(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.next())}),t.TgZ(1,"mat-icon"),t._uU(2,"keyboard_double_arrow_right"),t.qZA()()}}let R=(()=>{class a{constructor(e,n,i,s,c,m){this.data=e,this.dialog=n,this.deleteImageService=i,this.snackBar=s,this.dialogRef=c,this.dialogRefConfirmDelete=m,this.currentIndex=0,this.images=[],this.isTextView=!0}ngOnInit(){this.data.images.sample.fileName&&this.images.push(this.data.images.sample.fileName),null!=this.data.images.sample.extraFileNamesBase64&&this.data.images.sample.extraFileNamesBase64.length>0&&(this.images.push(...this.data.images.sample.extraFileNamesBase64),this.data.images.sample.extraFileNames.unshift(this.data.images.sample.title))}previous(){this.isTextView||(this.currentIndex>0?this.currentIndex--:this.isTextView=!0)}next(){this.isTextView?this.isTextView=!1:this.currentIndex<this.images.length-1&&this.currentIndex++}removeImage(){this.dialog.open(M.n).afterClosed().subscribe(n=>{if(n){const i=this.data.images.sample.extraFileNames[this.currentIndex],s=`${this.data.directoryPath}`,m=this.data.images.sample.title.replace(/\.[^/.]+$/,".json");this.deleteImageService.deleteImage(s,i,m).subscribe({next:()=>{this.snackBar.open("Imagem removida com sucesso","Fechar",{duration:3e3}),this.images.splice(this.currentIndex,1),this.data.images.sample.extraFileNames.splice(this.currentIndex,1),this.currentIndex>=this.images.length&&(this.currentIndex=this.images.length-1),0===this.images.length&&this.dialogRef.close()},error:()=>{this.snackBar.open("Erro ao remover imagem","Fechar",{duration:3e3})}})}})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.WI),t.Y36(p.uw),t.Y36(q.p),t.Y36(J.ux),t.Y36(p.so),t.Y36(p.so))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-info-detail-dialog"]],decls:15,vars:4,consts:[["mat-dialog-title","",1,"dialog-title"],[1,"example-button-container"],["mat-mini-fab","","mat-dialog-close","",1,"btn-close"],[1,"mdc"],[1,"image-container"],["class","btn-next-previous","mat-fab","",3,"click",4,"ngIf"],[4,"ngIf"],["class","image-container",4,"ngIf"],[1,"actions"],["mat-raised-button","","color","warn",3,"click"],["mat-fab","",1,"btn-next-previous",3,"click"],[1,"ok"],[1,"image-preview",3,"src","alt"]],template:function(e,n){1&e&&(t.TgZ(0,"h1",0),t._uU(1," Dados Completos "),t.TgZ(2,"div",1)(3,"button",2)(4,"mat-icon"),t._uU(5,"close"),t.qZA()()()(),t.TgZ(6,"mat-dialog-content",3)(7,"div",4),t.YNc(8,P,3,0,"button",5),t.YNc(9,S,49,12,"div",6),t.YNc(10,j,5,3,"div",7),t.YNc(11,Y,3,0,"button",5),t.qZA()(),t.TgZ(12,"mat-dialog-actions",8)(13,"button",9),t.NdJ("click",function(){return n.removeImage()}),t._uU(14,"Remover"),t.qZA()()),2&e&&(t.xp6(8),t.Q6J("ngIf",!n.isTextView||n.currentIndex>0),t.xp6(1),t.Q6J("ngIf",n.isTextView),t.xp6(1),t.Q6J("ngIf",!n.isTextView),t.xp6(1),t.Q6J("ngIf",n.isTextView||n.currentIndex<n.images.length-1))},dependencies:[f.O5,O.Hw,y.lW,p.ZT,p.uh,p.xY,p.H8],styles:["dialog-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background-color:#428643;color:#fff;padding:16px;border-top-left-radius:4px;border-top-right-radius:4px}  .custom-dialog-container .mat-dialog-container{padding:10px;overflow:hidden}.mdc[_ngcontent-%COMP%]{padding:6%}.btn-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.ok[_ngcontent-%COMP%]{flex-direction:column;text-align:center}.image-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.image-preview[_ngcontent-%COMP%]{max-width:500px;max-height:500px;margin:0 10px}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.dialog-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.example-button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;color:red}.btn-next-previous[_ngcontent-%COMP%]{background-color:green}"]}),a})();var Q=l(529);let G=(()=>{class a{constructor(e){this.http=e}getFiles(e,n,i,s){let c=`${x._}/json-files/?directoryPath=${encodeURIComponent(e)}`;return n&&(c+=`&analystName=${encodeURIComponent(n)}`),i&&(c+=`&startDate=${encodeURIComponent(i)}`),s&&(c+=`&endDate=${encodeURIComponent(s)}`),this.http.get(c)}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(Q.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();function B(a,o){1&a&&(t.TgZ(0,"mat-header-cell",27),t._uU(1," Imagem "),t.qZA())}function H(a,o){if(1&a&&(t.TgZ(0,"mat-cell",27),t._UZ(1,"img",28),t.qZA()),2&a){const e=o.$implicit;t.xp6(1),t.Q6J("src","data:image/jpeg;base64,"+e.image,t.LSH)}}function $(a,o){1&a&&(t.TgZ(0,"mat-header-cell"),t._uU(1," Imagens Extras "),t.qZA())}function z(a,o){if(1&a&&(t.TgZ(0,"div",32),t._UZ(1,"img",33),t.qZA()),2&a){const e=o.$implicit;t.xp6(1),t.Q6J("src","data:image/jpeg;base64,"+e,t.LSH)}}function V(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"mat-cell",29),t.NdJ("click",function(){const s=t.CHM(e).$implicit,c=t.oxw(2);return t.KtG(c.onRowClicked(s))}),t.TgZ(1,"div",30),t.YNc(2,z,2,1,"div",31),t.qZA()()}if(2&a){const e=o.$implicit;t.xp6(2),t.Q6J("ngForOf",e.extraImages)}}function E(a,o){1&a&&(t.TgZ(0,"mat-header-cell",34),t._uU(1," Detalhes "),t.qZA())}function W(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"mat-cell",35),t.NdJ("click",function(){const s=t.CHM(e).$implicit,c=t.oxw(2);return t.KtG(c.onRowClicked(s))}),t.TgZ(1,"div",36)(2,"div")(3,"strong"),t._uU(4,"File name:"),t.qZA(),t._uU(5),t.qZA(),t.TgZ(6,"div")(7,"strong"),t._uU(8,"Data:"),t.qZA(),t._uU(9),t.qZA(),t.TgZ(10,"div")(11,"strong"),t._uU(12,"Analista:"),t.qZA(),t._uU(13),t.qZA(),t.TgZ(14,"div")(15,"strong"),t._uU(16,"Blank File Name:"),t.qZA(),t._uU(17),t.qZA()()()}if(2&a){const e=o.$implicit;t.xp6(5),t.hij(" ",e.details.fileName,""),t.xp6(4),t.hij(" ",e.details.datetime,""),t.xp6(4),t.hij(" ",e.details.analystName,""),t.xp6(4),t.hij(" ",e.details.blankFileName,"")}}function K(a,o){1&a&&t._UZ(0,"mat-header-row")}function X(a,o){1&a&&t._UZ(0,"mat-row",37)}function tt(a,o){if(1&a&&(t.TgZ(0,"mat-table",15),t.ynx(1,16),t.YNc(2,B,2,0,"mat-header-cell",17),t.YNc(3,H,2,1,"mat-cell",18),t.BQk(),t.ynx(4,19),t.YNc(5,$,2,0,"mat-header-cell",20),t.YNc(6,V,3,1,"mat-cell",21),t.BQk(),t.ynx(7,22),t.YNc(8,E,2,0,"mat-header-cell",23),t.YNc(9,W,18,4,"mat-cell",24),t.BQk(),t.YNc(10,K,1,0,"mat-header-row",25),t.YNc(11,X,1,0,"mat-row",26),t.qZA()),2&a){const e=t.oxw();t.Q6J("dataSource",e.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns)}}const at=[{path:"",component:D.$,children:[{path:"",component:L},{path:"list-directory/:folderName",component:(()=>{class a{constructor(e,n,i,s,c,m){this.route=e,this.fb=n,this.router=i,this.getJsonFiles=s,this.zone=c,this.dialog=m,this.directoryPath=x.Q,this.dataSource=[],this.displayedColumns=["image","extraImages","details"],this.selection=new v.Ov(!1,[]),this.form=this.fb.group({startDate:[""],endDate:[""],analyst:[""]})}ngOnInit(){this.folderName=this.route.snapshot.paramMap.get("folderName")||""}getFiles(){const e=this.form.get("analyst")?.value,n=this.form.get("startDate")?.value,i=this.form.get("endDate")?.value;this.getJsonFiles.getFiles(`${this.directoryPath}/${this.folderName}`,e,n,i).subscribe(c=>{this.zone.run(()=>{this.dataSource=c.map(m=>({fullData:m,image:m.sample.fileName,extraImages:m.sample.extraFileNamesBase64||[],details:{fileName:m.sample.title||"N/A",datetime:m.sample.datetime,analystName:m.sample.analystName,blankFileName:m.sample.blankFileName||"N/A"}}))})})}onRowClicked(e){this.selection.toggle(e);const c=e.fullData.sample.datetime.match(/^(\d{4}\.\d{2}\.\d{2})/)[1].replace(/\./g,"-");this.dialog.open(R,{panelClass:"custom-dialog-container",width:"600px",data:{images:e.fullData,directoryPath:`${this.directoryPath}/${this.folderName}/${c}`}}).afterClosed().subscribe(st=>{console.log("Dialog was closed"),this.getFiles()})}onBack(){this.zone.run(()=>{this.router.navigate(["/inventory"])})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(g.gz),t.Y36(d.qu),t.Y36(g.F0),t.Y36(G),t.Y36(t.R0b),t.Y36(p.uw))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-list-directory"]],decls:28,vars:3,consts:[["fxLayout","column","fxLayoutAlign","start stretch","fxLayoutGap","20px",1,"container"],["fxFlex","95%"],[1,"mat-typography"],[1,"mat-display-1"],["fxLayoutGap","5%",3,"formGroup"],["fxLayout","row","fxLayoutGap","5%","fxLayoutAlign","start stretch","fxFlex",""],["fxFlex",""],["matInput","","formControlName","startDate","type","date"],["matInput","","formControlName","endDate","type","date"],["fxLayout","row","fxLayoutAlign","start stretch","fxFlex","",1,"align"],["matInput","","formControlName","analyst","type","text"],["fxLayout","row","fxLayoutAlign","end center","fxLayoutGap","10px",1,"button-group"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",3,"click"],["class","mat-elevation-z8 small-table",3,"dataSource",4,"ngIf"],[1,"mat-elevation-z8","small-table",3,"dataSource"],["matColumnDef","image"],["style","width: 60%;",4,"matHeaderCellDef"],["style","width: 60%;",4,"matCellDef"],["matColumnDef","extraImages"],[4,"matHeaderCellDef"],[3,"click",4,"matCellDef"],["matColumnDef","details"],["style","width: 55%;",4,"matHeaderCellDef"],["style","width: 55%; padding: 4px;",3,"click",4,"matCellDef"],[4,"matHeaderRowDef"],["class","mat-row",4,"matRowDef","matRowDefColumns"],[2,"width","60%"],["alt","Sample Image",1,"images",2,"max-width","100%","height","auto",3,"src"],[3,"click"],[1,"extra-images-container"],["class","extra-image",4,"ngFor","ngForOf"],[1,"extra-image"],["alt","Extra Image",2,"max-width","70%","height","auto",3,"src"],[2,"width","55%"],[2,"width","55%","padding","4px",3,"click"],["fxLayout","column","fxLayoutGap","8px"],[1,"mat-row"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-card")(3,"mat-card-content")(4,"div",2)(5,"div",3),t._uU(6),t.qZA(),t.TgZ(7,"form",4)(8,"div",5)(9,"mat-form-field",6)(10,"mat-label"),t._uU(11,"Data Inicial"),t.qZA(),t._UZ(12,"input",7),t.qZA(),t.TgZ(13,"mat-form-field",6)(14,"mat-label"),t._uU(15,"Data Final"),t.qZA(),t._UZ(16,"input",8),t.qZA()(),t.TgZ(17,"div",9)(18,"mat-form-field",6)(19,"mat-label"),t._uU(20,"Analista"),t.qZA(),t._UZ(21,"input",10),t.qZA()(),t.TgZ(22,"div",11)(23,"button",12),t.NdJ("click",function(){return n.getFiles()}),t._uU(24,"Pesquisar"),t.qZA(),t.TgZ(25,"button",13),t.NdJ("click",function(){return n.onBack()}),t._uU(26,"Voltar"),t.qZA()()(),t.YNc(27,tt,12,3,"mat-table",14),t.qZA()()()()()),2&e&&(t.xp6(6),t.Oqu(n.folderName),t.xp6(1),t.Q6J("formGroup",n.form),t.xp6(20),t.Q6J("ngIf",n.dataSource.length>0))},dependencies:[f.sg,f.O5,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,u.xw,u.SQ,u.Wh,u.yH,y.lW,h.a8,h.dn,_.KE,_.hX,T.Nt,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk],styles:[".container[_ngcontent-%COMP%]{max-width:100%}.mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:15px}.button-group[_ngcontent-%COMP%]{margin-top:20px}.align[_ngcontent-%COMP%]{align-items:end!important}.images[_ngcontent-%COMP%]{width:inherit}.mat-row[_ngcontent-%COMP%]{margin-bottom:10px}.mat-cell[_ngcontent-%COMP%]{padding:4px}.mat-header-cell[_ngcontent-%COMP%]{padding:4px 8px}.extra-images-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.extra-image[_ngcontent-%COMP%]{flex:1 1 calc(50% - 8px);max-width:48%}"]}),a})()}]}];let nt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.Bz.forChild(at),g.Bz]}),a})();var ot=l(3927);let it=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[f.ez,nt,ot.m]}),a})()}}]);