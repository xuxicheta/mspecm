import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Gallery, GalleryItem } from 'ng-gallery';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex mx-auto' },
})
export class GalleryComponent implements OnInit {
  @Input() length: number;
  @Input() path: string;

  images: GalleryItem[];

  constructor(
    private galleryService: GalleryService,
    public gallery: Gallery
  ) {
  }

  ngOnInit(): void {
    this.images = this.galleryService.makeImages(this.length, this.path);
    this.gallery.ref().load(this.images);
  }

}
