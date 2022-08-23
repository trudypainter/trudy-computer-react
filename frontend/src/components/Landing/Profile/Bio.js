import "./Bio.css";

const Bio = () => {
  return (
    <div className="bio">
      <p>
        I'm a senior at MIT double majoring in computer science and comparative
        media studies.
      </p>
      <p>
        I'm also a researcher at the MIT Media Lab with the{" "}
        <a
          target="_blank"
          href="https://www.media.mit.edu/groups/viral-communications/overview/"
        >
          Viral Communications Group
        </a>
        , developing tools to get humans closer to the feedback loop of machine
        learning and artificial intelligence. To learn more about my latest
        projects, take a look at{" "}
        <a target="_blank" href="/latent-lab">
          Latent Lab
        </a>{" "}
        and{" "}
        <a target="_blank" href="/meshup">
          Meshup.
        </a>
      </p>
      <p>
        I like building web systems from scratch, phone photography, archives,
        biking, and{" "}
        <a
          target="_blank"
          href="https://www.icloud.com/sharedalbum/#B0X5ejO17JIX8pl"
        >
          custom license plates.
        </a>
      </p>
      <p>
        📬 <a href="mailto:tpainter@mit.edu">tpainter@mit.edu</a>
      </p>
    </div>
  );
};

export default Bio;
