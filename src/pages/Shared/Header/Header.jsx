import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {

  return (
    <Container className="mt-4">
      <div className="text-center mt-4">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p className="text-secondary">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
      <div className="d-flex bg-light p-3">
        <Button variant="danger">Latest</Button>
        <Marquee className="font-bold" speed={60} pauseOnHover={true}>
          Germany ends nuclear energy era as last reactors power down
          Germany’s... nuclear exit was delayed to this year after Moscow’s
          invasion of Ukraine wreaked havoc in energy markets.
        </Marquee>
      </div>

      
    </Container>
  );
};

export default Header;
