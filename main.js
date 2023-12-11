$('form').on('submit', function(e) {
    e.preventDefault();


    const novaTarefa = $('#nova-tarefa').val();
    const novoItem =$('<li></li>');


    $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
    $(`<div class="tasks-list" />
        <a href="${novaTarefa}"></a>
    </div>`)


    $('#nova-tarefa').val('')
});
