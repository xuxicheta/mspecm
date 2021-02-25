import { Injectable } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  makeImages(length: number, path: string, extension = 'jpg'): GalleryItem[] {
    return Array.from({ length }, (_, i) => {
      return new ImageItem({
        src: `/assets/img/${path}/${i + 1}.${extension}`,
        thumb: `/assets/img/${path}/thumbs/${i + 1}.${extension}`
      });
    });
  }
}
