import { Component } from '@angular/core';
import { NavController, LoadingController,AlertController } from 'ionic-angular';

//service 
import { TestService } from '../../service/Testservice'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


/* Componente principal donde se ejecuta el servico*/
export class HomePage {

  id;
  name;
  description;
  titleContent:any=[]
  responseService: any= []
  serviceData:any = "Consume el servicio"
  
  
  constructor(public navCtrl: NavController,
    public testSrv: TestService,
    public loadingCtrl: LoadingController,
    public alertCtrl:AlertController) {
   
  }

    insertItem(){
      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: 'Consumiendo servicio',
      })
     loading.present()
this.testSrv.insertService(this.id,this.name,this.description).then(response =>{
this.ejecutarServicio();
 
let toast = this.alertCtrl.create ({
  title:"se agrego un valor con el nombre",
  message:'se agrego un valor con el nombre '+response.name ,
  buttons: [
    {
      text: 'Continuar',
      handler: () => {
      }
    }
  ]
})
 toast.present(toast)
}).catch(err =>{
  let toast = this.alertCtrl.create ({
    title:"Cambia el id ya se encuentra registrado",
    message:'se agrego un valor con el nombre ' ,
    buttons: [
      {
        text: 'Continuar',
        handler: () => {
        }
      }
    ]
  })
  toast.present(toast)
})

loading.dismiss()
    }



  ejecutarServicio() {
   let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Consumiendo servicio',
    })
   loading.present()
    this.testSrv.testService().then(response => {
      this.titleContent = ['id','name','description']
      this.serviceData = "Información del servicio"
      this.responseService = response
    })
      .catch(err => {
        this.serviceData = "Error en el servicio"
      })
    loading.dismiss()
  }

}
