// var o = {
//   a:10,
//   b:{
//       a:12,
//       fn:function(){
//           console.log(this.a); //undefined
//           console.log(this); //window
//       }
//   }
// }
// var j = o.b.fn;
// j();


var o = {
  a:10,
  b:{
      a:12,
      fn:function(){
          console.log(this.a); //12
      }
  }
}
o.b.fn();
