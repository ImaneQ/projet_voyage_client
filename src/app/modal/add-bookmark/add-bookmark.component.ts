import { Component, OnInit } from '@angular/core';

import { Bookmark } from './../../models/bookmark.model';
import { BookmarkService } from './../../services/bookmark.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  constructor(private _bookmarkService: BookmarkService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    const { name, URL } = form.value
    const bookmark = new Bookmark(name, URL)
    this._bookmarkService.addBookmark(bookmark)
    this._router.navigateByUrl("/bookmarks")
  }
}
