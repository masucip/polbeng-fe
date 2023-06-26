import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() data : any
  form : FormGroup
  constructor(
    private http : HttpService,
    public activeModal : NgbActiveModal
  ){
    this.form = new FormGroup({
      id_mahasiswa : new FormControl(null),
      nim : new FormControl('',Validators.required),
      nama : new FormControl('',Validators.required),
      tahun_angkatan : new FormControl('',Validators.required),
    })
  }
  ngOnInit(): void {
    if(this.data){
      this.form.patchValue(this.data)
    }
  }
  save(){
    this.http.post('mahasiswa',this.form.value).subscribe(rs=>{
      this.activeModal.close(rs)
    },err=>{
      if(err.error.message){
        alert(err.error.message.join('\n'))
      }
    })
  }
  update(){
    this.http.patch('mahasiswa/'+this.form.get('id_mahasiswa')?.value,this.form.value).subscribe(rs=>{
      this.activeModal.close(rs)
    },err=>{
      if(err.error.message){
        alert(err.error.message.join('\n'))
      }
    })
  }
}
