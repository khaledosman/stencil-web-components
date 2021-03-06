/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  PointOfInterest,
} from './utils/PointOfInterest';
import {
  ViewMode,
} from './utils/view-mode.enum';

export namespace Components {
  interface MyComponent {
    /**
    * Input name prop
    * @type {string}
    * @memberof MyComponent
    */
    'name': string;
    /**
    * Sets list of visited PointsOfInterest
    * @param pointsOfInterest
    * @memberof MyComponent
    */
    'setPointsOfInterest': (pointsOfInterest: PointOfInterest[]) => Promise<void>;
    /**
    * Sets the view mode of the map
    * @param viewMode
    * @memberof MyComponent
    */
    'setViewMode': (viewMode: ViewMode) => Promise<void>;
  }
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent {
    /**
    * Input name prop
    * @type {string}
    * @memberof MyComponent
    */
    'name'?: string;
  }

  interface IntrinsicElements {
    'my-component': MyComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
    }
  }
}


