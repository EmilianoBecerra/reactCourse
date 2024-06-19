import "./HocRP.css";
import {
  Notice as NoticeBase1,
  NoticeWrapper1,
  NoticeWrapper2,
} from "./hoc/Notice";
import { Hover, Notice as NoticeBase2 } from "./render-props/Notice";
export default function HocRP() {
  return (
    <div className="HocRP">
      <div className="jumbotron">
        <h2> HOC - Component </h2>
        <br />

        <h3>Coponente Base(Sin wrapper)</h3>
        <NoticeBase1 title={"Noticia 1"} />
        <h3>Componente Base (Con wrapper1) </h3>
        <NoticeWrapper1 title={"Noticia 2"} />
        <br />
        <br />

        <h3> Componente Base (Con wrapper2) </h3>
        <NoticeWrapper2 title={"Noticia 3"} />
        <br />
        <br />

        <h2> RENDER PROPS - Component </h2>

        <hr />
        <h3> Sin render props </h3>
        <br />

        <NoticeBase2 title={"Noticia 1 "} hovering={false} />
        <NoticeBase2 title={"Noticia 2 "} hovering={true} />
        <hr />
        <h3> Con render props </h3>
        <br />
        {
          <Hover
            render={(hovering) => (
              <NoticeBase2 title={"Noticia 4"} hovering={hovering} />
            )}
          />
        }
        <Hover>
          {(hovering) => (
            <NoticeBase2 title={"Noticia 5"} hovering={hovering} />
          )}
        </Hover>
      </div>
    </div>
  );
}
