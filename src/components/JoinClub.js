import { Link } from "react-router-dom";
import Card from "../Utility/Card";
import "./JoinClub.css";

const JoinClub = () => {
  return (
    <aside>
      <div className="join">
        <h3>Join Our Club</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          blanditiis!
        </p>
        <Link to="/join">Join Now</Link>
      </div>
    </aside>
  );
};

export default JoinClub;
