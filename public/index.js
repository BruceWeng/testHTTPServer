$(document).ready(() => {
  let count = 0;
  $('button').on('click', () => {
    $.post( "http://localhost:3000", (data) => {
      if (count === 0) {
        $('.content').append(data.message);
        count += 1;
      }
    });
  });
});
