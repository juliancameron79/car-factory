import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .w {
    padding-top: 5rem;
  }
`;

export const About = () => {
  return (
    <Styles>
      <div className="w">
        <h2>What's about page up!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione natus, laboriosam officiis porro necessitatibus quo.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, porro. Obcaecati, dolor tempore quos excepturi, iste nostrum quibusdam mollitia aperiam, non repudiandae magnam.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
    </Styles>
  );
};
