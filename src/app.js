import { Bar, Foo } from 'subpath/module'

class FooChild extends Foo {

  /**
   * @param {IBar} bar
   * @returns {IBar}
   */
  doFooStuff(bar) {

    //
    // Returned expression type is not assignable...
    //
    // Doesn't work for concrete class either (@returns Bar)
    // Go to declaration leads to the correct type, though.
    //
    return new Bar() // Returned expression type "subpath/module".Bar is not assignable to type IBar
  }
}

class BarChild extends Bar {

}

let fooInstance = new Foo()
let barInstance = new Bar()
fooInstance.doFooStuff(new Bar())

let fooChild = new FooChild()

// Argument type "subpath/module".Bar is not assignable to parameter type IBar
// - Apparently, WS doesn't know that the IBar in FooChild.doFooStuff's @param comment is
//   the same IBar as the one in Foo.doFooStuff's declaration in the .d.ts.
fooChild.doFooStuff(barInstance)

// works
fooInstance.doFooStuff(barInstance)

// Doesn't work
fooInstance.doFooStuff(new BarChild())


const /** @type IBar */anIBar = new BarChild() // initializer type BarChild is not assignable to type IBar
const /** @type IBar */anotherIBar = barInstance // initializer type "subpath/module".BarChild is not assignable to type IBar