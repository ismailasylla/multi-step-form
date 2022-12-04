import "./navbar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <section className="top-nav">
        <div>User</div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        {/* <ul className="menu">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </ul> */}
      </section>
    </div>
  );
};

export default NavBar;
