import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  rowsDetail=[];
  mcontact = {overview:''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    this.mcontact = this.navParams.data;
    console.log(this.mcontact);
  }

 
  // loadDetail() {
  //   let url = 'http://10.0.2.192/servicewa/get_detail.php?id='+this.dataload;
  //   this.http.get(url).subscribe((data: any) => {
  //     this.rowsDetail = data.rowsDetail;
  //     console.log(this.rowsDetail);
  //     console.log(data);
  //   }, (error) => { console.log(error) });
  // } 



}// end class
