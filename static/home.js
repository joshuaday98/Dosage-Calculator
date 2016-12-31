(function main(){
  'use strict';


  function handleform(){
    console.log('lmao')
  }


  function cont(dosing_var){
    $('#time').timepicker();
    var dose_time_field = '</br><input type="number" name="dose" min="1" placeholder="Dose" required>mg</br><input class="time" type="text" name="time" placeholder="Time" required>'
    var $dose_div = $('#dosing-amounts')
    var $splits = $('select[name=doses_daily]').val()

    if(dosing_var[0] === 'no' & dosing_var[1] === 'yes'){
      $dose_div.html('</br><span>Days 1-'+ dosing_var[2] +'</span>');
      $dose_div.append(dose_time_field)

    } else if(dosing_var[0] === 'yes' & dosing_var[1] === 'yes'){
      $dose_div.html('</br><span>Days 1-' + dosing_var[2] +'</span></br>');

      while($splits != 0){
        $dose_div.append(dose_time_field);
        $splits--;
      };

    } else if(dosing_var[0] === 'no' & dosing_var[1] === 'no'){
      var day = 1;

      while(day <= dosing_var[2]){
        $dose_div.append('Day ' + day + ':' + dose_time_field+ '</br>')
        day++;
      };
    }

    $('.time').timepicker();
    $('#cont-btn').remove();
    $('#submit').append('<button type="submit" class="btn btn-primary">Submit</button>');
  };


  (function events(){
    $('#cont-btn').on('click', function(evt){
      evt.preventDefault();
      var dosing_var = [$('input[name=split-dose]:checked').val(),
                        $('input[name=samedose-time]:checked').val(),
                        $('input[name=cycle-length]').val()]

      if($.inArray("", dosing_var) == -1){
        console.log(dosing_var)
        cont(dosing_var);
      } else {
        console.log(dosing_var)
        $('#warning').text('The Split dosing, Same dose & Time of Dose, and the Cycle Length sections must be filled out.')
      }
    });
  })();

  (function menu_sizing(){
    $(document).ready(function(){
      $('#menu').css('height', window.innerHeight);
    });
    $(document).on('resize', function(evt){
      $('#menu').css('height', window.innerHeight);
    });
  })();
})();
