(function () {
  var words = [
    "გილოცავ ახალ წელს!",
    "ბედნიერებასა და წარმატებას გისურვებ!",
    "დასახული მიზნების მიღწევისა და ოცნებების ასრულების წელი ყოფილიყოს!",
    "მადლობა უსაზღვრო ბედნიერებისათვის!",
    "მიყვარხარ! <br> 🤍" ],

  i = 0;
  setInterval (function() { $('#paragraph').fadeOut(function() {
      $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
    }); }, 5000)
})();