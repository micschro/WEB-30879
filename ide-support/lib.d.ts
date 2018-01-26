declare module 'subpath/module' {
  /**
   * This is the Foo class
   */
  export class Foo {
    /**
     * Does foo stuff
     * @param {IBar} the input bar
     * @returns {IBar} the returned bar
     */
    doFooStuff(bar:IBar):IBar
  }

  /**
   * This is an IBar
   */
  export interface IBar {
    /**
     * Does bar stuff
     */
    doBarStuff():void
  }

  /**
   * This is the default IBar implementation
   */
  export class Bar implements IBar {
    /**
     * @inheritDoc
     */
    doBarStuff(): void;
  }
}