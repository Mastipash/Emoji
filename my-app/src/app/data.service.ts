import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getEmojis() {
    return this.http.get('http://localhost:3000/api/emojis')
  }

  getLikedEmojis() {
    return this.http.get('http://localhost:3000/api/emojis/liked')
  }

  getDeletedEmojis() {
    return this.http.get('http://localhost:3000/api/emojis/deleted')
  }
  likeEmoji(emojis: any, isLike: boolean) {
    emojis.isLike = isLike;
    return this.http.put(`http://localhost:3000/api/emojis/${emojis._id}/like`, emojis)
  }

  deleteEmoji(emojis: any, isDelete: boolean) {
    emojis.isDelete = isDelete;
    return this.http.put(`http://localhost:3000/api/emojis/${emojis._id}/delete`, emojis)
  }

  unlikeEmoji(emojis: any, isLike: boolean) {
    emojis.isLike = isLike;
    return this.http.put(`http://localhost:3000/api/emojis/${emojis._id}/unlike`, emojis)
  }

  restoreEmoji(emojis: any, isDelete: boolean) {
    emojis.isDelete = isDelete;
    return this.http.put(`http://localhost:3000/api/emojis/${emojis._id}/restore`, emojis)
  }
}
