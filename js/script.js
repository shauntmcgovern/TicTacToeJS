$(document).ready(function () 
{
    var x = "x";
    var o = "o";
    var turns = 0;
    var x0y2 = $('#x0y2'); 
    var x1y2 = $('#x1y2'); 
    var x2y2 = $('#x2y2'); 
    var x0y1 = $('#x0y1'); 
    var x1y1 = $('#x1y1'); 
    var x2y1 = $('#x2y1'); 
    var x0y0 = $('#x0y0'); 
    var x1y0 = $('#x1y0'); 
    var x2y0 = $('#x2y0'); 
    
    $('#board li').on('click', function() 
    {
        if  (x0y2.hasClass('o') && x1y2.hasClass('o') && x2y2.hasClass('o') ||
             x0y1.hasClass('o') && x1y1.hasClass('o') && x2y1.hasClass('o') ||
             x0y0.hasClass('o') && x1y0.hasClass('o') && x2y0.hasClass('o') || 
             x0y2.hasClass('o') && x0y1.hasClass('o') && x0y0.hasClass('o') || 
             x1y2.hasClass('o') && x1y1.hasClass('o') && x1y0.hasClass('o') || 
             x2y2.hasClass('o') && x2y1.hasClass('o') && x2y0.hasClass('o') ||
             x0y2.hasClass('o') && x1y1.hasClass('o') && x2y0.hasClass('o') ||
             x2y2.hasClass('o') && x1y1.hasClass('o') && x0y0.hasClass('o')) 
        {
            alert('The WINNER IS "O"');
            $('#board li').text('+');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
        }
        else if(x0y2.hasClass('x') && x1y2.hasClass('x') && x2y2.hasClass('x') ||
                x0y1.hasClass('x') && x1y1.hasClass('x') && x2y1.hasClass('x') ||
                x0y0.hasClass('x') && x1y0.hasClass('x') && x2y0.hasClass('x') || 
                x0y2.hasClass('x') && x0y1.hasClass('x') && x0y0.hasClass('x') || 
                x1y2.hasClass('x') && x1y1.hasClass('x') && x1y0.hasClass('x') || 
                x2y2.hasClass('x') && x2y1.hasClass('x') && x2y0.hasClass('x') ||
                x0y2.hasClass('x') && x1y1.hasClass('x') && x2y0.hasClass('x') ||
                x2y2.hasClass('x') && x1y1.hasClass('x') && x0y0.hasClass('x')) 
       {
            alert('The WINNER IS "X"');
            $('#board li').text('+');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
        }
        else if (turns == 9) 
        {
            alert('TIE GAME');
            $('#board li').text('+');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
            turns = 0;
        }
        else if ($(this).hasClass('disable')) 
        {
            alert('This spot is already filled');
        }
        else if (turns % 2 == 0)
        {
            turns++;
            $(this).text(o);
            $(this).addClass('disable o');
            if  (x0y2.hasClass('o') && x1y2.hasClass('o') && x2y2.hasClass('o') ||
                 x0y1.hasClass('o') && x1y1.hasClass('o') && x2y1.hasClass('o') ||
                 x0y0.hasClass('o') && x1y0.hasClass('o') && x2y0.hasClass('o') || 
                 x0y2.hasClass('o') && x0y1.hasClass('o') && x0y0.hasClass('o') || 
                 x1y2.hasClass('o') && x1y1.hasClass('o') && x1y0.hasClass('o') || 
                 x2y2.hasClass('o') && x2y1.hasClass('o') && x2y0.hasClass('o') ||
                 x0y2.hasClass('o') && x1y1.hasClass('o') && x2y0.hasClass('o') ||
                 x2y2.hasClass('o') && x1y1.hasClass('o') && x0y0.hasClass('o')) 
            {
                alert('The WINNER IS "O"');
                turns = 0;
            }
         }
         else 
         {
                turns++;
                $(this).text(x);
                $(this).addClass('disable x');
                if (x0y2.hasClass('x') && x1y2.hasClass('x') && x2y2.hasClass('x') ||
                    x0y1.hasClass('x') && x1y1.hasClass('x') && x2y1.hasClass('x') ||
                    x0y0.hasClass('x') && x1y0.hasClass('x') && x2y0.hasClass('x') || 
                    x0y2.hasClass('x') && x0y1.hasClass('x') && x0y0.hasClass('x') || 
                    x1y2.hasClass('x') && x1y1.hasClass('x') && x1y0.hasClass('x') || 
                    x2y2.hasClass('x') && x2y1.hasClass('x') && x2y0.hasClass('x') ||
                    x0y2.hasClass('x') && x1y1.hasClass('x') && x2y0.hasClass('x') ||
                    x2y2.hasClass('x') && x1y1.hasClass('x') && x0y0.hasClass('x')) 
                {
                    alert('The WINNER IS "X"');
                    turns = 0;
                }
        }
        $('#reset').on('click', function () 
        {
            $('#board li').text('+');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
            turns = 0;
        });
    });
 });
