import { Component, OnInit, Input, forwardRef, OnChanges, SimpleChanges, HostListener, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'prog-select',
  templateUrl: './prog-select.component.html',
  styleUrls: ['./prog-select.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=>ProgSelectComponent),
    multi: true
  }]
})
export class ProgSelectComponent implements ControlValueAccessor, OnInit, OnChanges {
  @Input() items = [];
  @Input() out:string = 'Id';
  @Input() id:string;
  @Input() view:string = 'Name';
  @Input() search:string = 'Name';
  @Input() errors:any = null;
  @Output('change') onValueChange = new EventEmitter<any>();

  value = 0;
  disabled = false;
  showItems = this.items.length?this.items:[]; 
  show = false;
  private onChange = (value: any)=> {};
  private onTouched = () => {};

  @HostListener('document:click', ['$event']) doSth($event){
    if(this.show){
      if($event.target.id!='field' && $event.target.id!='open'){
        this.show=false;
      }
    }
  }
  constructor() { }

  find(elem){
    console.log(elem);
    if(elem.value!=''){
      this.showItems = JSON.parse(JSON.stringify(this.items.filter(x => {
        return x[this.view].indexOf(elem.value)>-1
      })));
    }else{
      this.showItems=JSON.parse(JSON.stringify(this.items));
    }
  }


   
  ngOnInit() {
    
  }

  ngOnChanges(ch:SimpleChanges){
    if(ch.items){
      this.showItems = this.items;
    }
  }

  open(){
    this.show=true;
  }


  /*
    Value Accessor
  */
  registerOnChange(fn:any){
    this.onChange=fn;
  }

  registerOnTouched(fn:any){
    this.onTouched = fn;
  }

  writeValue(out: any){
    this.value = out;
  }

  setDisabledState(isDisabled: boolean){
    this.disabled = isDisabled;
  }

  updateValue(value){
    this.value = value;
    
    this.onChange(value);
    this.onTouched();
    this.onValueChange.emit(value);
  }

  get Value() { 
    let res = this.items.find(x => x[this.out]==this.value);
    return res?res[this.view]:''
  };

}
