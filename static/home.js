(function main(){
  'use strict';
  /*
  Table of contents:
    1.
    2.
    3. Dosage time/amount section -- cont()
    4. Creating events needed on page load -- events()
    5. Sizing of the users input menu so it stays reactive and does not change page flow -- menu_sizing()
  */

  //////////////////////////////////////// 1 ///////////////////////////////////

  //////////////////////////////////////// 2 ///////////////////////////////////

  //////////////////////////////////////// 3 ///////////////////////////////////
  function cont(dosing_var){
    $('#time').timepicker();
    var dose_time_field = '</br><input type="number" name="dose" min="1" placeholder="Dose" class="dose"required>mg</br><input data-toggle="popover" data-content="We only use 24 hour format. With a different format the data will be drastically changed. " class="time" type="text" name="time" placeholder="Time" pattern="^([0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]" required>';
    var $dose_div = $('#dosing-amounts');
    var $splits = $('select[name=doses-daily]').val();

    if(dosing_var[0] === 'no' & dosing_var[1] === 'yes'){
      $('#dose_form').attr('name', 'form-ny');
      $dose_div.html('</br><span>Days 1-'+ dosing_var[2] +'</span>');
      $dose_div.append(dose_time_field);

    } else if(dosing_var[0] === 'yes' & dosing_var[1] === 'yes'){
      $('#dose_form').attr('name', 'form-yy');
      $dose_div.html('</br><span>Days 1-' + dosing_var[2] +'</span></br>');

      while($splits !== 0) {
        $dose_div.append(dose_time_field);
        $splits--;
      }

    } else if(dosing_var[0] === 'no' & dosing_var[1] === 'no'){
      $('#dose_form').attr('name', 'form-nn');
      var day = 1;

      while(day <= dosing_var[2]) {
        $dose_div.append('Day ' + day + ':' + dose_time_field+ '</br>');
        day++;
      }
    }

    $('#cont-btn').remove();
    $('#submit').append('<button type="submit" class="btn btn-primary" id="submit">Submit</button>');
  }

  //////////////////////////////////////// 4 ///////////////////////////////////
  (function events(){
    $('#cont-btn').on('click', function(evt){
      evt.preventDefault();
      var dosing_var = [$('input[name=split-dose]:checked').val(),
                        $('input[name=samedose-time]:checked').val(),
                        $('input[name=cycle-length]').val()];

      if($.inArray("", dosing_var) == -1){
        console.log(dosing_var);
        cont(dosing_var);
      } else {
        console.log(dosing_var);
        alert('The Split dosing, Same dose & Time of Dose, and the Cycle Length sections must be filled out.')
      }
    });
    $('[data-toggle="popover"]').popover({trigger:'focus'});
  })();
  //////////////////////////////////////// 5 ///////////////////////////////////
  (function menu_sizing(){
    $(document).ready(function(){
      $('#menu').css('height', window.innerHeight);
    });
    $(document).on('resize', function(evt){
      $('#menu').css('height', window.innerHeight);
    });
  })();
})();
