import React, { Component } from "react";

import { withPosts } from "../providers";
import { PostList, PostForm } from "../components";

import { Container, Row, Col } from "reactstrap";
import "../styles/styles.css";

/**
 * Wrap a component using the withPosts provider
 * to get data retrieved with GraphQL.
 */
@withPosts
export default class PostRoot extends Component {
  render() {
    const { posts, postsLoading } = this.props;

    return (
      <Container>
        <h2 className="posts-title">Tomer's Posts Module</h2>
        <h4 descrpitionClass="posts-desc">
          This a MERN project I created, I am looking to become a fullstack
          software engineer in the future.
        </h4>
        <hr />
        <Row>
          <Col>
            <PostList postsLoading={postsLoading} posts={posts} />
          </Col>
          <Col>
            <PostForm />
          </Col>
        </Row>
      </Container>
    );
  }
}
