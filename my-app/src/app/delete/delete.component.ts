import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
 
  displayedColumns: string[] = ['title', 'url', 'image', 'action'];
  emojis: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getDeletedEmojis().subscribe(data => {
      this.emojis = data;
      console.log(this.emojis);
    }
  );
}

restoreEmoji(emojis) {
  this.data.deleteEmoji(emojis, emojis.isDelete).subscribe(data => {
    console.log(data);
    }
  );
}
}
