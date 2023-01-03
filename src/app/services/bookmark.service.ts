import { Bookmark } from '../models/bookmark.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  bookmarks: Bookmark[] = [
    new Bookmark('Wikipedia', 'http://wikipedia.org'),
    new Bookmark('YouTube', 'http://youtube.com'),
    new Bookmark('Google', 'http://google.com')
  ]
  constructor() { }

  getBookmarks() {
    return this.bookmarks
  }

  getBookmark(id: string) {
    return this.bookmarks.find(b => b.id === id)
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark)
  }

  updateBookmark(id: string, updateFields: Partial<Bookmark>) {
    const bookmark = this.getBookmark(id) as any
    Object.assign(bookmark, updateFields)
  }

  deleteBookmark(id: string) {
    const bookmarkIndex = this.bookmarks.findIndex(b => b.id === id)
    if (bookmarkIndex == -1) return
    this.bookmarks.splice(bookmarkIndex, 1)
  }
}
