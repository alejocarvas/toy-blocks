import { Component, Input, OnInit } from "@angular/core";
import { Block } from "src/models/block.model";

@Component({
  selector: "node-block",
  templateUrl: "./block.component.html",
  styleUrls: ["./block.component.css"],
})
export class BlockComponent implements OnInit {
  constructor() {}
  @Input() block: Block;
  ngOnInit() {
    console.log(this.block);
  }
}
