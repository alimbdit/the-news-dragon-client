import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsight from "../EditorsInsight/EditorsInsight";

const News = () => {
  const news = useLoaderData();
  const {
    _id,
    title,
    details,
    image_url,
    author,
    rating,
    total_view,
    category_id,
  } = news;

  return (
    <>
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="danger">
            <FaArrowLeft></FaArrowLeft> All news in this category
          </Button>
        </Link>
      </Card.Body>
    </Card>
      <EditorsInsight></EditorsInsight>
      </>
  );
};

export default News;
