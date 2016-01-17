        var socket = io();
        socket.on('connect', function () {
            console.log('Connected to the server');
        });

        socket.on('message', function (message) {
            console.log('New message');
            console.log(message.text);
        });

        var $msgSubmitBtn = $('#msg-submit');

        $msgSubmitBtn.on('click', function (event) {
            var $msgText = $('#msg-text');

            socket.emit('message', {
                text: $msgText.val()
            });


            $msgText.val('');
        });