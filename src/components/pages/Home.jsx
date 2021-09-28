import { valueData  } from "./../../data";
import { Badge } from "react-bootstrap";
import { SiSitepoint } from "react-icons/si";


export default function Home() {
  return (
    <section className="home">
      <div className="home_video">
        <video autoPlay muted loop>
          <source
            src={process.env.PUBLIC_URL + "assets/homeVideo.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="home_text">
        <div className="home_title">
          <h1>TOARU </h1>
          <h2>IT & JAPAN</h2>
          <br/>
        </div>

        <div className="home_value">
          {valueData.map((item) => {
            return (
              <span>
                <SiSitepoint />
                <Badge >{item.text}</Badge>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
