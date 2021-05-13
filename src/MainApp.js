const MainApp = () => {
    return (
        <div className="chat-app-container">
            <h1 className="center-temp">Coming soon! (App Page)</h1>
            <iframe
                className="chat-app"
                srcDoc={require("./assets/chat/chat.html")}
                title="chat app"
            ></iframe>
        </div>
    );
};

export default MainApp;
