# HTML Structure:

1. Usal HTML boilerplate.
2. Inside the body tag, there’s a div element with the ID “countdown.” This is where the countdown numbers will be displayed.

# JavaScript Countdown Function:

1. The JavaScript code defines a countdown function that takes two parameters: number (initial countdown value) and callback (a function to execute when the countdown reaches zero).
2. If number is greater than 0, it updates the content of the div with the current countdown value and schedules a callback after 1 second.
3. When the countdown reaches 0, it executes the provided callback function.

# Countdown Execution:

1. The countdown function is called initially with number = 10 and a callback function.
2. The callback function sets the content of the div to “Happy Independence Day!” when the countdown completes.
