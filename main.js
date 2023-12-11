$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const novoItem =$('<li></li>').text(novaTarefa);
        $('ul').append(novoItem);
        $('#nova-tarefa').val('')

    });

    const novoLink = $('<div class="layout-infos"><a href="#"></a></div>');
    $('body').append(novoLink);
});

$('ul').click(function() {
    $(this).addClass('concluido');
});
