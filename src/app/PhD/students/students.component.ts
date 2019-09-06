import { Component} from '@angular/core';
import { NgbModal, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'phd-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  providers: [NgbCarouselConfig]
})
export class StudentsComponent {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  closeResult: string;

  constructor(private modalService: NgbModal, config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }


  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

}
