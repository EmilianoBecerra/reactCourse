import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to={"/"}>
        {" "}
        Inicio - {counter}{" "}
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to={"/binding"}>
              {" "}
              Binding{" "}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to={"/estructura"}>
              {" "}
              Estructura{" "}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to={"/atributos"}>
              {" "}
              Atributos{" "}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to={"/formulario"}>
              {" "}
              Formularios{" "}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to={"/hooks"}>
              {" "}
              Hooks{" "}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to={"/api"}>
              {" "}
              Api{" "}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to={"/context"}>
              {" "}
              Context{" "}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to={"/hocrp"}>
              {" "}
              HOC-RP{" "}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to={"/redux"}>
              {" "}
              Redux{" "}
            </NavLink>
          </li>

          {/* < li className="nav-item" >
                    <NavLink className="nav-link" to={'/no-valida'} > No válida </NavLink>
                </li> */}
        </ul>
      </div>
    </nav>
  );
};
