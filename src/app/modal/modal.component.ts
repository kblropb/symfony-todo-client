import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {faEye, faTrash, faPlus} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Create new Todo List</h4>
      <button class="btn close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form action="">
        <div class="form-group">
          <input autofocus type="text" name="name" class="form-control" placeholder="Enter list name">
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-success" (click)="save()">Save</button>&nbsp;
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name: string;

  constructor(public activeModal: NgbActiveModal) {
    this.name = '';
  }

  save() {
    // trigger event new.todo.submit
  }
}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
  faPlus = faPlus;
  private modalRef: any;

  constructor(private modalService: NgbModal) {
  }

  // on new.todo.submit send request.
  save() {
    this.modalRef.close()
  }

  open() {
    this.modalRef = this.modalService.open(NgbdModalContent);
  }
}
