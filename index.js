/**
 * Module dependencies.
 */

var events, classes

events = require('events')
classes = require('classes')
EventEmitter = require('emitter')

/**
 * Expose `EmailInput`.
 */

module.exports = EmailInput

/**
 * Initialize a new email input with the given element.
 *
 * @param {Element} element
 * @api public
 */
function EmailInput(element) {
    if (!(this instanceof EmailInput)) return new EmailInput(element)

    this.element = element;
    this.events = events(element, this)
    this.matcher = /^..*@.*.$/i

    this.events.bind('blur')
    this.events.bind('keyup')
    this.events.bind('keydown')

    classes(element).add('email-input')

    EventEmitter.call(this)
}

EmailInput.prototype = Object.create(EventEmitter.prototype);

EmailInput.prototype.onkeydown = function() {

    // Once the user starts typing, if we see the placeholder
    // text again its surely its in error
    if (! classes(this.element).has('placeheld')) {
        classes(this.element).add('placeheld')
        this.element.setAttribute('placeholder', "Enter an email address")
    }

    // Clear the error class if the user is trying
    classes(this.element).remove('error')
}

EmailInput.prototype.onkeyup = function() {

    // If the input matches (roughly) an email
    if (this.matcher.test(this.element.value)) {

        classes(this.element).remove('error')
        classes(this.element).add('valid')
        this.emit('valid', this.element.value)

    } else {

        this.emit('email', this.element.value)
        this.emit('invalid', this.element.value)
        classes(this.element).remove('valid')
    }
}

EmailInput.prototype.onblur = function() {

    // In case the user leaves the input without starting typing
    if (! classes(this.element).has('placeheld')) {
        classes(this.element).add('placeheld')
        this.element.setAttribute('placeholder', "Enter an email address")
    }

    if (!this.matcher.test(this.element.value)) {

        classes(this.element).remove('valid')
        classes(this.element).add('error')
    }
}

EmailInput.prototype.destroy = function() {

    this.events.unbind()
}
