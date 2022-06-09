import "./Bio.css";

const Bio = () => {
  return (
    <div className="bio">
      <p>
        Student at MIT double majoring in computer science and comparative media
        studies.
      </p>
      <p>
        Researcher at the MIT Media Lab with the{" "}
        <a
          target="_blank"
          href="https://www.media.mit.edu/groups/viral-communications/overview/"
        >
          Viral Communications Group.
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
