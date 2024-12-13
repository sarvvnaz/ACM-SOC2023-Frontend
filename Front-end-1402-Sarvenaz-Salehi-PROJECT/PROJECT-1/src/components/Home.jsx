import React from "react";
import axios from "axios";
import "../assets/styles/Home.css";
import starLogo from "../assets/images/star.png";
import SliderData from '../assets/slider-data/slider-items.json'
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Form, Button, Pagination } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { page } = useParams();
//fetch movie data by page
  useEffect(() => {
    const fetchData = async (page) => {
      await axios
        .get(`https://moviesapi.ir/api/v1/movies?page=${page}`)
        .then((res) => {
          setMovies(res.data.data);
          setTotalPages(res.data.metadata.page_count);
        });
    };

    fetchData(currPage);
  }, [currPage]);

  const handlePageChange = (page) => {
    setCurrPage(page);
  };
  const handleNextPage = () => {
    if (currPage < totalPages) {
      setCurrPage(currPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };


  return (
    <>
    <div className="main">
      <Carousel className="main-carousel">
      {SliderData.map((sliderItem) => (
        <Carousel.Item>
          <img src={sliderItem.poster}></img>
          <Carousel.Caption>
            <h1>{sliderItem.title}</h1>
            <p>{sliderItem.year}</p>
            <h3>{sliderItem.descreption}</h3>


          </Carousel.Caption>
        </Carousel.Item>

      
      ))}
      </Carousel>
      <div className="page-single">
        <div className="movies-filter uppercase container-fluid">
          <div>
            <h1>movies filter</h1>
          </div>
          <div className="container-fluid">
            <div className="row">
              <Form action="submit" className="filter-dropdowns">
                <Col className="filter-drowdown">
                  <DropdownButton
                    as={ButtonGroup}
                    id={`dropdown-variants-secondary`}
                    variant="secondary"
                    title="Select Genres"
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col className="filter-drowdown">
                  <DropdownButton
                    as={ButtonGroup}
                    id={`dropdown-variants-secondary`}
                    variant="secondary"
                    title="Select Year"
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col className="filter-drowdown">
                  <DropdownButton
                    as={ButtonGroup}
                    id={`dropdown-variants-secondary`}
                    variant="secondary"
                    title="Select Rating"
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col className="filter-drowdown">
                  <DropdownButton
                    as={ButtonGroup}
                    id={`dropdown-variants-secondary`}
                    variant="secondary"
                    title="Newest First"
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col>
                  <Button className="filters-submit" variant="danger">
                    SUBMIT
                  </Button>{" "}
                </Col>
              </Form>
            </div>
          </div>
        </div>

        <div className="movies-list container-fluid">
          <div className="row ">
            {movies.map((movie) => (
              <div class="movie-section">
                <Link to={`/movie/${movie.id}#top`}>

                <button
               
                  type="button"
                  className="btn btn-danger watchnow-button"
                >
                  watch now
                </button>
              </Link>
                <div key={movie.id} className="movie-item ">
                  <div className="image__placeholder">
                    <a href>
                      <img
                        className="img-fluid"
                        src={movie.poster}
                        alt="poster"
                      />
                      <p className="rate">
                        <img src={starLogo} alt="star" />
                        <span>{movie.imdb_rating}</span> /10
                      </p>
                      <p className="year">{movie.year}</p>
                      <div className="fhd-quality quality-tag">FHD</div>
                    </a>
                  </div>
                  <div className="title uppercase">
                    <h6>{movie.title}</h6>
                  </div>
                </div>
              </div>
            ))}
            <Pagination id="movies-pagination">
              <Pagination.First  
              onClick={() => {handlePageChange(1)}}
              key={1}
              
              />
              <Pagination.Prev
              key={page - 1}
                onClick={handlePrevPage}
                disabled={page === 1}
              />

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page,index) => (
                  <Pagination.Item className="pg-item"
                    key={page}
                    onClick={() => {
                      handlePageChange(page);
                    }}
                    active={page === currPage}
                  >
                    {page}
                  </Pagination.Item>
                )
              )}
              <Pagination.Next
              key={page + 1}
                onClick={() => {
                  handleNextPage();
                }}
                disabled={page === currPage}
              />
              <Pagination.Last
                key={totalPages}
                onClick={() => {
                  handlePageChange(totalPages);
                }}
                active={page === totalPages}
              />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  
    </>
  );
}

export default Home;
