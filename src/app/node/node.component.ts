import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { Node } from "../../models/node.model";
import { BlocksStore } from "../services/blocksStore.service";

@Component({
  selector: "node-item",
  templateUrl: "./node.component.html",
  styleUrls: ["./node.component.scss"],
})
export class NodeComponent {
  @Input() node: Node;
  @Output() onToogleExpand = new EventEmitter<Node>();
  @Input() expanded: boolean;

  blocks$: Observable<any>;

  constructor(public store: BlocksStore) {}

  ngOnInit() {
    this.blocks$ = this.store.getBlocks(this.node.url);
  }

  handleToogleExpand(node: Node): void {
    this.onToogleExpand.emit(node);
  }
}
