import {
  Component,
  EventEmitter,
  Input,
  Output
  } from '@angular/core';
import { SelectableItem } from '../models/selectable-item';
import { SelectService } from '../services/select.service';

@Component({
  selector: 'tree-select-item',
  templateUrl: './tree-select-item.component.html',
  styleUrls: ['./tree-select-item.component.scss']
})
export class TreeSelectItemComponent {
  public get isOpen() {
    return this.item.isOpen;
  }

  @Input() public onTouchedCallBack: () => void;

  @Input()
  public item: SelectableItem;

  @Output()
  onExpand: EventEmitter<SelectableItem> = new EventEmitter();

  public constructor(
    private svc: SelectService
  ) { }

  public toggleOpen($event: any) {
    $event.stopPropagation();
    if (this.haveChildren) {
      this.item.isOpen = !this.item.isOpen;
      if (this.item.isOpen){
        this.onExpand.emit(this.item)
      }
    } else {
      this.select($event);
    }
  }

  get allowParentSelection(): boolean {
    return this.svc.Configuration.allowParentSelection;
  }

  get needCheckBox(): boolean {
    return this.svc.Configuration.isHierarchy() && this.svc.Configuration.allowMultiple;
  }

  public get haveChildren(): boolean {
    return this.item && this.item.children && this.item.children.length > 0;
  }

  public select($event: any): void {
    $event.stopPropagation();
    if (this.svc.Configuration.allowMultiple ||
        !this.haveChildren ||
        this.svc.Configuration.allowParentSelection) {
      this.svc.toggleItemSelection(this.item);
    }
    this.onTouchedCallBack();
  }

  public get filter(): string {
    return this.svc.Configuration.filter;
  }
}
