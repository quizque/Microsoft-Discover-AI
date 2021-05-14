const Home = () => {
    return (
        <div className="home-divider">
            <div className="home-left">
                <h1>
                    The Worlds First{" "}
                    <span className="home-highlight">AI Powered</span> Therapist
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse vel rutrum massa, sit amet dictum mi. Fusce eros
                    mi, vulputate eu tortor vitae, condimentum bibendum nunc.
                    Etiam erat ex, dictum tempus augue dignissim, porttitor
                    consequat diam.
                </p>
            </div>
            <div>
                <img
                    src={require("/assets/app_placeholder.png")}
                    alt="iphone placeholder"
                ></img>
            </div>
        </div>
    );
};

export default Home;
