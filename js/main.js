// Smooth scroll animation from navigation menu
// Click on perfo button
$('#perfo-section').on('click', function() {
  const perfo = $('#perfo').position().top;

  $('html, body').animate(
    {
      scrollTop: perfo
    },
    900
  );
});

// Click on about button
$('#about-section').on('click', function() {
  const about = $('#about').position().top;

  $('html, body').animate(
    {
      scrollTop: about
    },
    900
  );
});

// Click on prices button
$('#prices-section').on('click', function() {
  const prices = $('#prices').position().top;

  $('html, body').animate(
    {
      scrollTop: prices
    },
    900
  );
});

// Click on contact button
$('#contact-section').on('click', function() {
  const contact = $('#contact').position().top;

  $('html, body').animate(
    {
      scrollTop: contact
    },
    900
  );
});
