/**
 * Created by yannickbenchimol on 26/12/2016.
 */
export class DataModel{
  constructor(public name: string, public firstName: string, public pages: Page[]){}
}
export class Page{
  constructor(public name: string, public content: Content){}
}
export class Content{
  constructor(public description: Array<any>){}
}
