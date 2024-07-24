
// Use the delete id on the favourited heart to send an AJAX request to the server to delete the favorite item from the database
$('#delete').on('click', function() {
  const itemId = $(this).data('itemId');
  $.ajax({
    method: 'DELETE',
    url: `/favorites/${itemId}`
  })
  .done(function(response) {
    console.log('response', response)
  })
  .fail(function(error) {
    console.error(error);
  });
});
