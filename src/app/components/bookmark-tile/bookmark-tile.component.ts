import { Component, Input, OnInit } from '@angular/core';

import { Bookmark } from '../../models/bookmark.model';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.scss']
})
export class BookmarkTileComponent implements OnInit {

  @Input() bookmark!: Bookmark;

  tileIconSrc!: string;
  constructor() { }

  ngOnInit(): void {
    this.tileIconSrc = this.bookmark.url.origin + '/favicon.ico'
  }

}
