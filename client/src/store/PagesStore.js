import { makeAutoObservable } from 'mobx'

export default class PagesStore {
  constructor() {
    this._pages = []
    makeAutoObservable(this)
  }

  setPages(pages) {
    this._pages = pages
  }

  addPage(page) {
    this._pages.push(page) 
  }

  get pages() {
    return this._pages
  }
}
