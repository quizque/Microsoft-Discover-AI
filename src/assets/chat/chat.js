var messages = document.getElementById("messages");
var textMessage = document.getElementById("text-message");

// Q&A bot endpoint
const API_ENDPOINT =
    "https://aitherapist.azurewebsites.net/qnamaker/knowledgebases/f0025575-f2a8-422c-bf55-8bfe9dda9747/generateAnswer";

// Call the API with a given question and callback with the responce
async function askBot(ask, callback) {
    fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
            // This needs to be removed but it can stay for testing
            Authorization: "EndpointKey 60a86122-8ddc-4d69-88c4-b1e90148cd62",
            "Content-type": "application/json",
        },
        body: JSON.stringify({ question: ask }),
    })
        .then(function (resp) {
            // Decode the promise
            return resp.json();
        })
        .then(function (jresp) {
            // Call the callback function
            callback(jresp);
        });
}

// Trigger every time the user submits
document
    .getElementById("text-bar")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        if (document.querySelector("#text-message").value.length == 0) {
            return;
        }

        var message = document.createElement("div");
        message.className = "message-right";
        message.appendChild(
            document.createTextNode(
                document.querySelector("#text-message").value
            )
        );

        messages.appendChild(message);

        askBot(document.querySelector("#text-message").value, function (resp) {
            console.log("FIRED");
            var answer = document.createElement("div");
            answer.className = "message-left";
            answer.appendChild(document.createTextNode(resp.answers[0].answer));
            messages.appendChild(answer);
            window.scrollTo(0, document.body.scrollHeight);
        });

        textMessage.value = "";
        window.scrollTo(0, document.body.scrollHeight);
    });
