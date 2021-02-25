import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem } from 'ng-gallery';
import { GalleryService } from '../../gallery/gallery.service';

@Component({
  selector: 'app-porch-install',
  templateUrl: './porch-install.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PorchInstallComponent implements OnInit {

  images: GalleryItem[] = this.galleryService.makeImages(8, 'ystanovka-podezdnoi-dveri');

  constructor(
    private galleryService: GalleryService,
    public gallery: Gallery
  ) {
  }

  ngOnInit(): void {
    this.gallery.ref().load(this.images);
  }
}
