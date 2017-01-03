(function(){
  'use strict';


  function handleIt(){
    var values = {'type':$('input[name=type]:checked').val(),
                  'weight':{'amount':$('input[name=weight]').val(),
                            'unit':$('input[name=weight-unit]:checked').val()},
                  'calories':{'ci':$('input[name=cal-intake]').val(),
                              'ce':$('input[name=cal-export]').val()},
                  'cycle-len':$('input[name=cycle-length]').val()}

    var doses = $("input[name='dose']").map(function(){return $(this).val();}).get();
    var dose_time = $("input[name='time']").map(function(){return $(this).val();}).get();

    var dose_info_array = doses.map(function (e, i){
      if($('#dose_form').attr('name') === 'form-nn'){
        var day = 0;
        day++;
        return [day, e, dose_time[i]];
      }else{
        return [e, dose_time[i]]
      }
    });
    $.extend(values, {'dose-info':dose_info_array});
    calculations(values)
  }
})();
