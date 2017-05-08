$(document).ready(function() {


    //Switching players
    var currentPlayer = "playerOne";
    var firstPlayer = "playerOne";
    var secondPlayer = "playerTwo";
    var totalMoves = 0;

    var bx1 = $('#1');
    var bx2 = $('#2');
    var bx3 = $('#3');
    var bx4 = $('#4');
    var bx5 = $('#5');
    var bx6 = $('#6');
    var bx7 = $('#7');
    var bx8 = $('#8');
    var bx9 = $('#9');

    function winConditions() {
      if((bx1.hasClass('playerOne') && bx2.hasClass('playerOne')) && bx3.hasClass('playerOne')){
        alert('Player One wins!');
      } else if((bx1.hasClass('playerTwo') && bx2.hasClass('playerTwo')) && bx3.hasClass('playerTwo')){
        alert('Player Two wins!');
      } else if((bx4.hasClass('playerOne') && bx5.hasClass('playerOne')) && bx6.hasClass('playerOne')){
        alert('Player One wins!');
      } else if((bx4.hasClass('playerTwo') && bx5.hasClass('playerTwo')) && bx6.hasClass('playerTwo')){
        alert('Player Two wins!');
      } else if((bx7.hasClass('playerOne') && bx8.hasClass('playerOne')) && bx9.hasClass('playerOne')){
        alert('Player One wins!');
      } else if((bx7.hasClass('playerTwo') && bx8.hasClass('playerTwo')) && bx9.hasClass('playerTwo')){
        alert('Player Two wins!');
      } else if((bx1.hasClass('playerOne') && bx4.hasClass('playerOne')) && bx7.hasClass('playerOne')){
        alert('Player One wins!');
      } else if((bx1.hasClass('playerTwo') && bx4.hasClass('playerTwo')) && bx7.hasClass('playerTwo')){
        alert('Player Two wins!');
      } else if((bx2.hasClass('playerOne') && bx5.hasClass('playerOne')) && bx8.hasClass('playerOne')){
        alert('Player One wins!');
      } else if((bx2.hasClass('playerTwo') && bx5.hasClass('playerTwo')) && bx8.hasClass('playerTwo')){
        alert('Player Two wins!');
      } else if((bx3.hasClass('playerOne') && bx6.hasClass('playerOne')) && bx9.hasClass('playerOne')){
        alert('Player One wins!');
      } else if((bx3.hasClass('playerTwo') && bx6.hasClass('playerTwo')) && bx9.hasClass('playerTwo')){
        alert('Player Two wins!');
      } else if((bx1.hasClass('playerOne') && bx5.hasClass('playerOne')) && bx9.hasClass('playerOne')){
        alert('Player One wins!');
      } else if((bx1.hasClass('playerTwo') && bx5.hasClass('playerTwo')) && bx9.hasClass('playerTwo')){
        alert('Player Two wins!');
      } else if((bx3.hasClass('playerOne') && bx5.hasClass('playerOne')) && bx7.hasClass('playerOne')){
        alert('Player One wins!');
      } else if((bx3.hasClass('playerTwo') && bx5.hasClass('playerTwo')) && bx7.hasClass('playerTwo')){
        alert('Player Two wins!');
      } else if(totalMoves === 9){
        alert('draw');
      }
      
    }

    function switchPlayer() {
      if (currentPlayer === "playerOne"){
        currentPlayer = secondPlayer;
      } else {
        currentPlayer = firstPlayer;
      }
      totalMoves++;
    }

    // click function
    $('.col-xs-4').click(function() {
      console.log(currentPlayer);
      //box is claimed
      if ( $(this).hasClass('playerOne') || $(this).hasClass('playerTwo') ){
        alert("Already clicked!");
      } else {
        $(this).addClass(currentPlayer);
        switchPlayer();
        winConditions();
      }

});




    //reset
  $('#reset').click(function() {
    $('.col-xs-4').removeClass('playerOne');
    $('.col-xs-4').removeClass('playerTwo');
    totalMoves = 0;
  });



});
