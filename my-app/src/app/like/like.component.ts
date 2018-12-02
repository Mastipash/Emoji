import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  displayedColumns: string[] = ['title', 'url', 'image', 'action'];
  emojis: Object;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private data: DataService) {
    // filterPredicate: ((data: "emojis", filter: "isLike") => true)
   }
  // data = new MatTableDataSource(DataService);

  ngOnInit() {
    // this.data.paginator = this.paginator;
    this.data.getLikedEmojis().subscribe(data => {
      this.emojis = data;
      console.log(this.emojis);
    }
  );
}

unlikeEmoji(emojis) {
  this.data.likeEmoji(emojis, emojis.isLike).subscribe(data => {
   console.log(data);
     }
   );
 }
}
