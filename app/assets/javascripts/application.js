// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require dataTables/jquery.dataTables
//= require dataTables/jquery.dataTables.foundation
//= require foundation
//= require_tree .

$(function(){ $(document).foundation(); });

$(document).ready(function() {
  var oTable = $('#admin_order_table').dataTable( {
    "order": [[ 2, "desc" ]],
    "columnDefs": [
      {
        "targets": [ 1, 4 ],
        "bSortable": false
      }
    ]
  });

  $('#all').click(function(){
    oTable.fnFilter( '', 0);
    $('dd').removeClass('active');
    $('#all').addClass('active');
  });

  $('#ordered').click(function(){
    oTable.fnFilter( 'ordered', 0);
    $('dd').removeClass('active');
    $('#ordered').addClass('active');
  });

  $('#paid').click(function(){
    oTable.fnFilter( 'paid', 0);
    $('dd').removeClass('active');
    $('#paid').addClass('active');
  });

  $('#completed').click(function(){
    oTable.fnFilter( 'completed', 0);
    $('dd').removeClass('active');
    $('#completed').addClass('active');
  });

  $('#cancelled').click(function(){
    oTable.fnFilter( 'cancelled', 0);
    $('dd').removeClass('active');
    $('#cancelled').addClass('active');
  });
});

$(document).ready(function() {
  $('#order_table').dataTable( {
    "order": [[ 1, "desc" ]],
    "columnDefs": [
      {
        "targets": [ 3 ],
        "bSortable": false
      }
    ]
  });
});

$(document).ready(function() {
  $('#charge_window').dataTable( {
  });
});

