(this.webpackJsonptugas_4_react_js=this.webpackJsonptugas_4_react_js||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(8),r=t.n(i),s=(t(14),t(15),t(6)),u=t(2),c=t(3),o=t(1),m=t(5),h=t(4),p=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={datalist:n.props.gambar},n}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:this.state.datalist,alt:"Product Makanan",width:"150",height:"150"}))}}]),t}(n.Component),g=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={pesan:"",jumlah:0,tampil:!1},n.pilihPesanan=n.pilihPesanan.bind(Object(o.a)(n)),n.nasipadang=n.nasipadang.bind(Object(o.a)(n)),n.sate=n.sate.bind(Object(o.a)(n)),n.soto=n.soto.bind(Object(o.a)(n)),n.uduk=n.uduk.bind(Object(o.a)(n)),n.kuning=n.kuning.bind(Object(o.a)(n)),n.batal=n.batal.bind(Object(o.a)(n)),n}return Object(c.a)(t,[{key:"pilihPesanan",value:function(e,a){var t=a.target.value;this.setState((function(a,n){var l;return l={},Object(s.a)(l,e,t),Object(s.a)(l,"tampil",!0),l}))}},{key:"nasipadang",value:function(){this.setState((function(e,a){return{pesan:"Nasi Padang",jumlah:e.jumlah+1,tampil:!0}}))}},{key:"sate",value:function(){this.setState((function(e,a){return{pesan:"Sate",jumlah:e.jumlah+1,tampil:!0}}))}},{key:"soto",value:function(){this.setState((function(e,a){return{pesan:"Soto Ayam Lamongan",jumlah:e.jumlah+1,tampil:!0}}))}},{key:"uduk",value:function(){this.setState((function(e,a){return{pesan:"Nasi Uduk",jumlah:e.jumlah+1,tampil:!0}}))}},{key:"kuning",value:function(){this.setState((function(e,a){return{pesan:"Nasi Kuning",jumlah:e.jumlah+1,tampil:!0}}))}},{key:"batal",value:function(){this.setState({pesan:"",jumlah:0,tampil:!1})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Daftar Makanan Yang Kami Sediakan : "),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(p,{gambar:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"}),l.a.createElement("center",null,l.a.createElement("button",{onClick:this.nasipadang},"Pesan Sekarang"))),l.a.createElement("td",null,l.a.createElement(p,{gambar:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"}),l.a.createElement("center",null,l.a.createElement("button",{onClick:this.sate},"Pesan Sekarang"))),l.a.createElement("td",null,l.a.createElement(p,{gambar:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"}),l.a.createElement("center",null,l.a.createElement("button",{onClick:this.soto},"Pesan Sekarang"))),l.a.createElement("td",null,l.a.createElement(p,{gambar:"https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png "}),l.a.createElement("center",null,l.a.createElement("button",{onClick:this.uduk},"Pesan Sekarang"))),l.a.createElement("td",null,l.a.createElement(p,{gambar:"https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg  "}),l.a.createElement("center",null,l.a.createElement("button",{onClick:this.kuning},"Pesan Sekarang")))))),l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:"Masukan Pesanan Anda",onChange:function(a){return e.pilihPesanan("pesan",a)}}),"\xa0",l.a.createElement("input",{type:"number",placeholder:"Jumlah Pesanan",onChange:function(a){return e.pilihPesanan("jumlah",a)}}),"\xa0",l.a.createElement("button",{onClick:this.batal},"Batalkan Semua Pesanan"),!0===this.state.tampil?l.a.createElement("div",null,l.a.createElement("h3",null,"Pesanan Anda : ",this.state.pesan),l.a.createElement("h4",null,"Jumlah Pesanan : ",this.state.jumlah)):l.a.createElement("h2",null,l.a.createElement("center",null,"Anda Belum Memesan")))}}]),t}(n.Component);var b=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.019854fa.chunk.js.map