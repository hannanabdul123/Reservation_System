import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <h2>
      <Link to={"/"} className="text-blue-500">
        OBRS...
      </Link>
    </h2>
  );
};

export default Logo;
