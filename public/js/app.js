

var socket = io();
        var $msgSubmitBtn = $('#msg-submit');
var $msgContainer = $('#msg-container');


        socket.on('connect', function () {
            console.log('Connected to the server');
        });

        socket.on('message', function (message) {
            console.log('New message');
            console.log(message.text);
            
            $msgContainer.append('<li class="list-group-item">' + message.text + '</li>')
            
        });




        $msgSubmitBtn.on('click', function (event) {
            var $msgText = $('#msg-text');

            socket.emit('message', {
                text: $msgText.val()
            });

            // Reset the input field
            $msgText.val('');
        });