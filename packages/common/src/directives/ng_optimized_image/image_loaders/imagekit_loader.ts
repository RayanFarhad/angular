/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {createImageLoader, ImageLoaderConfig} from './image_loader';

/**
 * Function that generates an ImageLoader for ImageKit and turns it into an Angular provider.
 *
 * @param path Base URL of your ImageKit images
 * This URL should match one of the following formats:
 * https://ik.imagekit.io/myaccount
 * https://subdomain.mysite.com
 * @returns Set of providers to configure the ImageKit loader.
 *
 * @publicApi
 * @developerPreview
 */
export const provideImageKitLoader = createImageLoader(
    createImagekitUrl,
    ngDevMode ? ['https://ik.imagekit.io/mysite', 'https://subdomain.mysite.com'] : undefined);

export function createImagekitUrl(path: string, config: ImageLoaderConfig) {
  // Example of an ImageKit image URL:
  // https://ik.imagekit.io/demo/tr:w-300,h-300/medium_cafe_B1iTdD0C.jpg
  let params = `tr:q-auto`;  // applies the "auto quality" transformation
  if (config.width) {
    params += `,w-${config.width}`;
  }
  return `${path}/${params}/${config.src}`;
}
