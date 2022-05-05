import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavDropdown, DropdownButton, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();

  const logOutHandler = (e) => {
    localStorage.setItem("loggedIn", "");
    console.log("clicked LogOut");
    history.push("/");
    // e.preventDefault();
  };
  const [filterVal, setFilterVal] = useState({
    category: "general",
    country: "in",
    pageSize: 9,
    pageNo: 1,
    searchText: "",
    api: "addfc84c662c49ac8c356eee82f21d55",
  });
  const searchHandler = (e) => {
    const name = "searchText";
    const value = e.target.value;

    setFilterVal({ ...filterVal, [name]: value });
  };
  const changeHandler = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    // console.log(name, value);
    setFilterVal({ ...filterVal, [name]: value });
    // console.log();
  };
  const countryHandler = (e) => {
    // console.log(e);
    const name = "country";
    const value = e;

    setFilterVal({ ...filterVal, [name]: value });
  };
  const categoryHandler = (e) => {
    // console.log(e);
    const name = "category";
    const value = e;

    setFilterVal({ ...filterVal, [name]: value });
  };
  const submitHandler = (e) => {
    // e.preventDefault();
    // console.log(filterVal);
    props.setFilterData(filterVal);
  };

  return (
    <React.Fragment>
      <div>
        <nav
          className="navbar navbar-expand-lg  navbar-light "
          style={{ backgroundColor: "lightgray" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/news">
              New App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/news"
                  >
                    Home
                  </Link>
                </li>
                <button
                  type="button"
                  className="btn btn-outline-primary ms-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#FilterModal"
                >
                  <span className="fa fa-sign-in me-1"></span>
                  Filter
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="FilterModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Filter
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>

                      <div className="modal-body">
                        <Form>
                          {" "}
                          <div className="d-flex justify-content-between mb-3">
                            <div className="me-1 ">
                              <label htmlFor="pageSize" className="form-label">
                                Page Size
                              </label>
                              <input
                                type="text"
                                name="pageSize"
                                className="form-control"
                                id="pageSize"
                                onChange={changeHandler}
                              />
                            </div>
                            <div className="ms-1">
                              <label htmlFor="pageNo" className="form-label">
                                Page No
                              </label>
                              <input
                                type="text"
                                name="pageNo"
                                className="form-control"
                                id="pageNo"
                                onChange={changeHandler}
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            {" "}
                            <div className="me-2">
                              <DropdownButton
                                alignRight
                                title="News Category"
                                id="category"
                                name="category"
                                onSelect={categoryHandler}
                              >
                                <NavDropdown.Item eventKey="general">
                                  General
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="business">
                                  Business
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="entertainment">
                                  Entertainment
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="health">
                                  Health
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="science">
                                  Science
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="sports">
                                  Sports
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="technology">
                                  Technology
                                </NavDropdown.Item>
                              </DropdownButton>
                            </div>
                            <div className="">
                              <DropdownButton
                                alignRight
                                title="Country"
                                id="country"
                                name="country"
                                onSelect={countryHandler}
                              >
                                <NavDropdown.Item eventKey="ae">
                                  United Arab Emirates
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="in">
                                  India
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="ar">
                                  Argentina
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="at">
                                  Austria
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="au">
                                  Australia
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="be">
                                  Belgium
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="bg">
                                  Bulgaria
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="br">
                                  Brazil
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="ca">
                                  Canada
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="ch">
                                  Switzerland
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="cn">
                                  China
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="co">
                                  Colombia
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="cu">
                                  Cuba
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="cz">
                                  Czech rep.
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="gr">
                                  Grees
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="gb">
                                  United Kingdom
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="us">
                                  United State
                                </NavDropdown.Item>
                              </DropdownButton>
                            </div>
                          </div>
                          <div className="mt-3 d-flex justify-content-center">
                            <div>
                              <label htmlFor="search" className="form-label  ">
                                Search
                              </label>{" "}
                              <input
                                className="form-control me-2"
                                type="search"
                                // id="searchText"
                                // name="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={searchHandler}
                              />
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={submitHandler}
                            // className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            className="btn btn-outline-primary w-100 mt-5"
                          >
                            Submit
                          </button>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>

              <div className="d-flex ms-4">
                {/* className="form-control me-2" */}
                <button
                  className="btn btn-outline-success"
                  onClick={logOutHandler}
                  type="submit"
                >
                  LogOut
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
