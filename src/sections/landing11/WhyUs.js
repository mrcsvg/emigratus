import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import icon1 from "../../assets/image/svg/l5-feature-icon1.svg";
import icon2 from "../../assets/image/svg/l5-feature-icon2.svg";
import icon3 from "../../assets/image/svg/l5-feature-icon3.svg";
import icon4 from "../../assets/image/svg/l5-feature-icon4.svg";

const WhyUs = () => (
  <>
    {/* <!-- Feature section --> */}
    <div className="feature-section pt-14 pt-lg-25 pb-7 pb-lg-11 bg-default-2">
      <Container>
        <Row className="justify-content-center">
          <Col xl="6" lg="7" md="8">
            <div className="section-title text-center mb-13 mb-lg-23">
              <h4 className="pre-title gr-text-12 text-red text-uppercase mb-7">
                Por que nos escolher
              </h4>
              <h2 className="title gr-text-4">
                Cidadania é coisa séria. Experiência faz toda a diferença!
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="10">
            <Row className="align-items-center justify-content-center">
              <Col
                lg="6"
                md="10"
                className="mb-11 mb-lg-19"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="feature-widget media">
                  <div className="widget-icon p-7 rounded-15 mr-9 gr-bg-blue-opacity-1">
                    <img src={icon1} alt="" />
                  </div>
                  <div className="widget-text">
                    <h3 className="title gr-text-7 mb-6">
                      Time dedicado e multidisciplinar
                    </h3>
                    <p className="gr-text-9 mb-0 pr-11">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="6"
                md="10"
                className="mb-11 mb-lg-19"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <div className="feature-widget media">
                  <div className="widget-icon p-7 rounded-15 mr-9 gr-bg-red-opacity-1">
                    <img src={icon2} alt="" />
                  </div>
                  <div className="widget-text">
                    <h3 className="title gr-text-7 mb-6">Tudo em um só lugar</h3>
                    <p className="gr-text-9 mb-0 pr-11">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="6"
                md="10"
                className="mb-11 mb-lg-19"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <div className="feature-widget media">
                  <div className="widget-icon p-7 rounded-15 mr-9 gr-bg-green-opacity-1">
                    <img src={icon3} alt="" />
                  </div>
                  <div className="widget-text">
                    <h3 className="title gr-text-7 mb-6">
                      Comunicação fácil, rápida e transparente
                    </h3>
                    <p className="gr-text-9 mb-0 pr-11">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="6"
                md="10"
                className="mb-11 mb-lg-19"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                <div className="feature-widget media">
                  <div className="widget-icon p-7 rounded-15 mr-9 gr-bg-blackish-blue-opacity-1">
                    <img src={icon4} alt="" />
                  </div>
                  <div className="widget-text">
                    <h3 className="title gr-text-7 mb-6">
                      Fazemos você econimizar muito tempo!
                    </h3>
                    <p className="gr-text-9 mb-0 pr-11">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default WhyUs;









