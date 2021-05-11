var messages = document.getElementById("messages");
var textMessage = document.getElementById("text-message");

document
    .getElementById("text-bar")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        console.log(document.querySelector("#text-message").value);

        var message = document.createElement("div");
        message.className = "message-right";
        message.appendChild(
            document.createTextNode(
                document.querySelector("#text-message").value
            )
        );

        messages.appendChild(message);

        textMessage.value = "";
    });
