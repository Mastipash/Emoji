import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  displayedColumns: string[] = ['title', 'url', 'image', 'action'];
  emojis: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEmojis().subscribe(data => {
      this.emojis = data;
      
    }
  );
}

likeEmoji(emojis) {
 this.data.likeEmoji(emojis, emojis.isLike).subscribe(data => {
  console.log(data);
    }
  );
}


deleteEmoji(emojis) {
  this.data.deleteEmoji(emojis, emojis.isDelete).subscribe(data => {
    console.log(data);
    }
  );
}
}
