$(document).ready(function(){
    $('.fa-code').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function(){
        $('.fa-code').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });
    $('.content').find('button').hover(
        function() {
          $( this ).addClass( "hover" );
        }, function() {
          $( this ).removeClass( "hover" );
        });
    $('.dot1').click(function(){
      $('.vid1').css('display','block');
      $('.vid2').css('display','none');
      $('.vid3').css('display','none');
    }) ; 
    $('.dot2').click(function(){
      $('.vid1').css('display','none');
      $('.vid2').css('display','block');
      $('.vid3').css('display','none');
    }) ; 
    $('.dot3').click(function(){
      $('.vid1').css('display','none');
      $('.vid2').css('display','none');
      $('.vid3').css('display','block');
    }) ; 
   
});


  
function convertToRoman(r){
  //Documentation of roman number conversion [1,5,10][10,50,100][100,500,1000]....
let expo=[['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M'], ['M', 'V$', 'X$']];
//function of systematic conversion of one single number (n*10^i) as i=0:3 ie: 3 or 300 or 3000 etc
function toRoman(n,arr){
  let m=0;
  for(let i=0;i<4;i++){
    if(n/Math.pow(10,i)>10){
      m++;
    }
  }
  n=n/Math.pow(10,m);
  let a = arr[m][0];
  let b = arr[m][1];
  let c = arr[m][2];
  let Rom={
    1: a, 2: a + a, 3: a + a + a, 4: a + b, 5: b, 6: b + a, 7: b + a + a, 8: b + a + a + a, 9: a + c, 10: c};
  let x=Rom[n];
  return x;
  };

//  function devides the given number into ones ,tens and hundreds ie:1234 -> [1000,200,30,4]
function tenSort(n){
  let arr = [];
  e = 3;
  for(let i=0;i<4;i++){
    let m=n-(n % (Math.pow(10,e)));
    if(m!=0){
      arr.push(m);
    };
    n=n-m;
    e=e-1;
  };
  return arr;
}
//our program --------------------------------------------->
//let r=999;
if(r>9999){
  console.log('not valid number');
  return 'not valid number';
}else{
  let rArr=tenSort(r);
  let rRoman='';
  for(let i=0;i<rArr.length;i++){
    let v=toRoman(rArr[i],expo);
    rRoman+=v;
  };
  console.log(rRoman);
  return rRoman;
};
};

//console.log(x);

$("#submit").click(function(event) {
  let x=$('#fnumber').val();
  let y=convertToRoman(x);
  $('#output').text(y).show();
});
