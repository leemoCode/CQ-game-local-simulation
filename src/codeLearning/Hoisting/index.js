function a1() {
  console.log(num);
  var num = 6;
}

// a1(); // undefined

function a2() {
  // console.log(num);
  console.log(num2);
  // let num = 6;
  const num2 = 6;
}

// a2();

var A3 = 3;
function a3() {
  var A3 = A3 || 5;
  console.log(A3); // 5
}
// a3();

function a4() {
  function a() { }
  var a = 11;
  console.log(typeof a);
}

// a4();

function a5() {
  var A5 = 'hello';
  (function (A5) {
    console.log(A5 + 1);
    var A5 = A5 || 'world';
    console.log(A5 + 2);
  })(A5);
  console.log(A5 + 3);
}

// a5();

function a6() {
  var a = 10;
  function test(a) {
    console.log(a);
    var a = 20;
    console.log(a);
    function a() {}
    console.log(a);
  }
  test(100);
}

a6();
