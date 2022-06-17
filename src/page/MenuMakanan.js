import React, {Component} from 'react';
import ListMakanan from '../List Data/ListMakanan';

class MenuMakanan extends Component{
    constructor(props){
        super(props);
        this.state={
           pesan:'',
           jumlah:0,
           tampil:false
        }
        this.pilihPesanan=this.pilihPesanan.bind(this)
        this.nasi_padang=this.nasi_padang.bind(this)
        this.sate=this.sate.bind(this)
        this.soto_lamongan=this.soto_lamongan.bind(this)
        this.nasi_uduk=this.nasi_uduk.bind(this)
        this.nasi_kuning=this.nasi_kuning.bind(this)
        this.batal=this.batal.bind(this)

    }

    pilihPesanan(value,e){
        this.setState({[value]:e.target.value,tampil:true})
    }
    nasi_padang(){
        this.setState({
            pesan:'Nasi Padang',
            jumlah:this.state.jumlah+1,
            tampil:true
        })
    }

    sate(){
      this.setState({
        pesan:'sate',
        jumlah:this.state.jumlah+1,
        tampil:true
      })
    }

    soto_lamongan(){
      this.setState({
        pesan:'Soto Ayam Lamongan',
        jumlah:this.state.jumlah+1,
        tampil:true
      })
    }

    nasi_uduk(){
      this.setState({
        pesan:'Nasi uduk',
        jumlah:this.state.jumlah+1,
        tampil:true
      })
    }

    nasi_kuning(){
      this.setState({
        pesan:'Nasi Kuning',
        jumlah:this.state.jumlah+1,
        tampil:true
      })
    }

    batal(){
      this.setState({
        pesan:'',
        jumlah:0,
        tampil:false
      })
    }

  render(){
    return(
      <div>
      <h3>Daftar Makanan Yang Kami Sediakan :</h3>
      <table>
         <tbody>
             <tr>
                 <td>
                     <ListMakanan Gambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg'/>
                     <center>
                         <button onClick={this.nasi_padang}>Pesan Sekarang</button>
                     </center>
                 </td>
                 <td>
                     <ListMakanan Gambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png'/>
                     <center>
                         <button onClick={this.sate}>Pesan Sekarang</button>
                     </center>
                 </td>
                 <td>
                     <ListMakanan Gambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png'/>
                     <center>
                         <button onClick={this.soto_lamongan}>Pesan Sekarang</button>
                     </center>
                 </td>
                 <td>
                     <ListMakanan Gambar='https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png'/>
                     <center>
                         <button onClick={this.nasi_uduk}>Pesan Sekarang</button>
                     </center>
                 </td>
 
                 <td>
                     <ListMakanan Gambar='https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg'/>
                     <center>
                         <button onClick={this.nasi_kuning}>Pesan Sekarang</button>
                     </center>
                 </td>
                 
             </tr>
         </tbody>
      </table>
      <br>
      </br>
 
      <input type='text' placeHolder='Masukkan Pesanan Anda'onChange={e => this.pilihPesanan('pesan',e)}
      />
      <input type='number' placeHolder='jumlah pesanan' onChange={e => this.pilihPesanan('jumlah',e)}
      />
     
      <button onClick={this.batal}>Btalkan Semua Pesanan</button>

      {this.state.tampil===true ?(
        <div>
          <h3>Pesanan Anda : {this.state.pesan}</h3>
          <h3>Jumlah Pesanan: {this.state.jumlah}</h3>
          </div>
      ):(
        <h1>
          <center>
            Anda belum memesan
          </center>
        </h1>
      )

      }
      </div>
    )
  }
}

export default MenuMakanan;
