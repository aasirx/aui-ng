/* SystemJS module definition */
declare var module: NodeModule;
declare var $:JQueryStatic;
interface NodeModule {
  id: string;
}
interface JQuery {
    chosen(options?:any):JQuery;
}    