/************************
 * PASS THE MESSAGE
 */

let message = document.getElementById("message");
const feedback = document.querySelector('.feedback');
const messageContent = document.querySelector('.message-content');
const form = document.querySelector('#message-form');


form.addEventListener("submit", function(event) {
        // prevent the form's default submission action
        event.preventDefault()

        if (message.value === ''){
            feedback.classList.add('show')
            setTimeout(function(){
                feedback.classList.remove('show')
            }, 2000) // Error message will disapear after 2 sec
        } else {
            //Change message content and clear the message input
            messageContent.textContent = message.value
            message.value = ''
        }
    });