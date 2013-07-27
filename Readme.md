
# emailinput

  HTML5 form email input

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
    <input type="email" name="email" placeholder="Email">
    <script>
      var emailinput = require('emailinput')
      var el = document.querySelector('[name=email]')
      emailinput(el)
    </script>
  </body>
</html>

```

## License

  MIT
