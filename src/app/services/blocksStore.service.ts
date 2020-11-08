import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { forkJoin, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Store } from "./store";
import { Block } from "src/models/block.model";

@Injectable({
  providedIn: "root",
})
export class BlocksStore extends Store<Block[]> {
  constructor(private api: ApiService) {
    super([]);
  }

  public getBlocks(url) {
    return this.api.get(`${url}/api/v1/blocks`).pipe(
      catchError((error) =>
        of({
          block: false,
        })
      ),
      map((block) => {
        return block.data;
      })
    );
  }
}
