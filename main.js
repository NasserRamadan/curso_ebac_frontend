$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const novoItem =$('<li></li>').text(novaTarefa);

        $(`${novaTarefa}`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('')

    })

        $(`<div class="layout-infos" />
            <a href="${novaTarefa}"></a>
        </div>`)

});
