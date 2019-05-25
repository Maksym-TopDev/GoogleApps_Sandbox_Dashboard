function myclick(info){
  // alert(info);
  // location.reload();
  $.ajax({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${info},us?units=imperial&appid=f4c6128ee2a67e688c5cd949ac8acb41`,
    method: 'GET',
    success: function(data){
      // alert(data.);
      putData(data);

    }
  })
}
