import "./Bio.css";

const Bio = () => {
  return (
    <div className="bio">
      <p>
        3rd year undergrad at MIT double majoring in computer science and
        comparative media studies.
      </p>
      <p>
        Currently working on{" "}
        <a href="https://www.media.mit.edu/projects/tools-to-synthesize-with/overview/">
          Computer-Aided Synthesis
        </a>{" "}
        at the MIT Media Lab with the{" "}
        <a href="https://www.media.mit.edu/groups/viral-communications/overview/">
          Viral Communications Group.
        </a>
      </p>
      <p>
        Interested in building online systems from scratch and how humans use
        technology. Also likes phone photography, running+biking,
        magazines+zines, clothes, and music.
      </p>
      <p>
        📬 <a href="mailto:tpainter@mit.edu">tpainter@mit.edu</a>
      </p>
    </div>
  );
};

export default Bio;
