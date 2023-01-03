import { Component, OnInit } from '@angular/core';

import { Bookmark } from './../../models/bookmark.model';
import { BookmarkService } from './../../services/bookmark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarks!: Bookmark[];
  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {

    this.bookmarks = this.bookmarkService.getBookmarks()

  }

}
