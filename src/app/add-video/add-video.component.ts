import { Component, OnInit } from '@angular/core';
import { AddService } from '../services/add.service';
import { AdminService } from '../services/admin.service';
import { ModalService } from '../services/modal.service';
import { SatogaService } from '../services/satoga.service';
import { LoadService } from '../services/load.service';
import { Validators } from '@angular/forms';
import { UploadTypes } from '../services/models';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.less']
})
export class AddVideoComponent extends AddService implements OnInit {
  goods = [
    {
      Id:1,
      Photo: '../../assets/images/lozha.png',
      InStock: 0,
      Name: 'Ложа 1',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:2,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа 2',
      InStock: 1,
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:3,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа 3',
      InStock: 1,
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:4,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа 4',
      InStock: 1,
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:5,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа 5',
      InStock: 0,
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:6,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа 6',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 36000
    },
    {
      Id:7,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа 7',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:8,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа 8',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 18000
    },
    {
      Id:9,
      Photo: '../../assets/images/lozha.png',
      Name: 'Ложа для СКС | C-205 P',
      Description: 'Полупистолетная с щеткой. Орех',
      FullDescription: 'Классическая охотничья ложа для карабина СКС. Изготавливается из высококачественного ореха. Резиновый амортизатор.',
      Price: 70000
    }
  ];
  constructor(private as:AdminService, private ms:ModalService, private ss:SatogaService, private ls:LoadService) { 
    super();
  }

  ngOnInit() {
    // this.ss.getGoods().subscribe(x => {
    //   this.goods = x;
    // })
    
    this.addForm = this.fb.group({
      Name: ['', Validators.required],
      Path: ['', Validators.required],
      GoodId: [null]
    });
    if(this.item){
      this.addForm.patchValue(this.item);
    }
    
  }
  send(){
    
    this.submitted = true;
    if(this.addForm.invalid){
      return;
    }
    this.ls.showLoad = true;
    if(!this.item){
      
      this.as.addItem(this.v, UploadTypes.Video).subscribe(x => {
        let res = Object.assign({Id:x},this.v);
        res.Path = res.Path.replace('youtu.be/','www.youtube.com/embed/');
        this.items.push(res);
        this.ls.showLoad = false;
        this.submitted = false;
        this.ms.close();
      })
    }else{
      if(Object.keys(this.update).length){
        this.update['Id']=this.item.Id;
        this.as.updateItem(this.update, UploadTypes.Video).subscribe(x => {
          
          this.update['Path'] = this.update['Path'].replace('youtu.be/','www.youtube.com/embed/');
          this.item = Object.assign(this.item, this.update);
          console.log(this.update);
          this.update = {};
          this.ls.showLoad = false;
          this.submitted = false;
        })
      }
    }
  }

}
