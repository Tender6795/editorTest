import { makeAutoObservable } from 'mobx'

export default class PagesStore {
  constructor() {
    this._pages = []
    makeAutoObservable(this)
  }

  setPages(pages) {
    this._pages = pages
  }

  get pages() {
    return this.pages
  }
}
