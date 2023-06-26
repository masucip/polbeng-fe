import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit {
  listData : any = []
  constructor(
    private http : HttpService,
    private modal : NgbModal
  ){}
  getData(){
    this.http.get('mahasiswa').subscribe(rs=>{
      this.listData = rs
    })
  }
  ngOnInit(): void {
    this.getData()
  }
  openForm(data:any=null){
    let mdl = this.modal.open(FormComponent)
    mdl.componentInstance.data = data
    mdl.closed.subscribe(rs=>{
      if(rs){
        let cekData = this.listData.findIndex((mhs:any) => mhs.id_mahasiswa==rs.id_mahasiswa)
        if(cekData<0){
          this.listData.push(rs)
        }
        else{
          this.listData[cekData] = rs
        }
      }
    })
  }
  hapus(id:any){
    this.http.delete('mahasiswa/'+id).subscribe(rs=>{
      let idxData = this.listData.findIndex((mhs:any) => mhs.id_mahasiswa==id)
      if(idxData>=0){
        this.listData.splice(idxData,1)
      }
      alert('Data berhasil dihapus')
    })
  }
}
