
# emailinput

  HTML5 form email input

  Provides basic, but correct validation. Which is to say that it checks that
  there is text before and after the at character. Includes default styling.

## Installation

  Install with [component(1)](http://component.io):

    $ component install jasonmorganson/emailinput

## API

```

/**
 * Initialize a new email input with the given element.
 *
 * @param {Element} element
 * @api public
 */
function EmailInput(element)

```

Listen for `email`, `invalid`, `valid` events

## Example

```

<!DOCTYPE html>
<html>
  <head>
    <title>Email Input</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="stylesheet" href="build/build.css">
    <script src="build/build.js"></script>
  </head>
  <body>
    <form id="form">
      <input id="email" class="email" name="email" type="email" placeholder="Email" />
    </form>
    <script>
      var emailElement = document.forms['form'].email
      var EmailInput = require('emailinput')
      var emailinput = new EmailInput(emailElement);

      emailinput.on('valid', function(email) {
          console.log(email)
      })
    </script>
  </body>
</html>

```

## License

  MIT
