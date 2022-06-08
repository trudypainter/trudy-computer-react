import "./EmailPage.css";

const EmailPage = (props) => {
  return (
    <div className="emailPage">
      <div className="formContainer">
        <div className="intro">
          <br></br>i love getting emails out of the blue
          <br></br>
          <br></br>
          so, let me write you one 😻
          <br></br>
          <br></br>
        </div>

        <form action="/emailresponse">
          <br></br>
          <label for="name">Name</label>
          <br></br>
          <input
            type="text"
            enterkeyhint="next"
            id="email"
            name="name"
            placeholder="and title if you please"
            required
          ></input>
          <label>Email</label> <br></br>
          <input
            type="text"
            enterkeyhint="next"
            id="email"
            name="email"
            placeholder="or else it flies into oblivion 🌫😶‍🌫️📨"
            required
          ></input>
          <br></br>
          <label>What you ate for breakfast</label>
          <input
            type="text"
            name="breakfast"
            enterkeyhint="next"
            placeholder="this is important"
            required
          ></input>
          <br></br>
          <label>Top 3 emojis at the moment</label>
          <input
            type="text"
            enterkeyhint="next"
            name="emojis"
            placeholder="mine are 💿👒🍋"
            required
          ></input>
          <br></br>
          <label>What has been on your brain </label>
          <textarea
            name="topics"
            enterkeyhint="next"
            rows="5"
            required
            placeholder="some things for me... old people's walking outfits. web surfing. dogs. music listened to (i'm playing rosalia as i write this). favorite public parks. youtube rabbit holes. best childhood birthday party. "
          ></textarea>
          <br></br>
          <label>Anything else I should know about you</label>
          <input
            type="text"
            name="extra"
            required
            placeholder="website, instagram, spotify, type of water bottle you use, etc"
          ></input>
          <br></br>
          <div className="submitContainer">
            <input id="submit" type="submit" value="Submit"></input>
          </div>
        </form>
        <div className="footer">
          idea credits to{" "}
          <a href="https://shen.land/" target="_blank">
            shen
          </a>{" "}
          and her{" "}
          <a href="https://canisendyouan.email/index.html" target="_blank">
            email project 🧠
          </a>{" "}
          <br></br>
          <a className="backButton" href="/">
            ⬅ back
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmailPage;
