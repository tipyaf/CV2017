/**
 * Created by yannickbenchimol on 26/12/2016.
 */
export interface DataModel{
  // constructor(public name: string, public firstName: string, public pages: string[]){}
  name: string,
  firstName: string,
  pages: Array<Page>
}
export interface Page{
  name: string,
  target: string,
  content: Object
}

