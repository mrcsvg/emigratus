import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

import imgBanner from "../assets/image/inner/about-banner.png";
import imgC1 from "../assets/image/inner/about-content-1.png";
import imgC2 from "../assets/image/inner/about-content-2.png";
import imgC3 from "../assets/image/inner/about-content-3.png";
import imgC4 from "../assets/image/inner/about-content-4.png";
import imgT1 from "../assets/image/inner/team-image-1.png";
import imgT2 from "../assets/image/inner/team-image-2.png";
import imgT3 from "../assets/image/inner/team-image-3.png";
import imgT4 from "../assets/image/inner/team-image-4.png";
import imgT5 from "../assets/image/inner/team-image-5.png";
import imgT6 from "../assets/image/inner/team-image-6.png";
import imgT7 from "../assets/image/inner/team-image-7.png";

const AboutPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >
        <div className="inner-banner">
          <Container>
            <Row className="justify-content-center mt-md-6 pt-24 pt-lg-29">
              <Col lg="9" xl="8">
                <div className="px-md-12 text-center mb-11 mb-lg-14">
                  <h2 className="title gr-text-2 mb-9 mb-lg-12">Quem somos</h2>
                  <p className="gr-text-8 mb-0">
                    Com um time multidisciplinar e anos de experiência, somos a escolha certa para te dar segurança no processo de obtenção da cidadania
                  </p>
                </div>
              </Col>
              {/* <Col xs="12">
                <div className="banner-fluid-image pt-lg-9">
                  <img src={imgBanner} alt="" className="w-100" />
                </div>
              </Col> */}
            </Row>
          </Container>
        </div>
        <div className="about-content pt-lg-28 pt-13 pb-13 pb-lg-25">
          <Container>
            <Row>
              <Col lg="6" className="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-3 mb-0">
                    Conte com nossa experiência e transparência 
                  </h2>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <p className="gr-text-8 mb-7 mb-lg-10">                                    
                    A Emigratus nasce no intuito de organizar seu processo de cidadania. 
                    Composta por historiadores, advogados em Direito Migratório, professores de língua estrangeira para a fase de entrevistas B1 e B2 (Itália), formamos uma equipe especializada, capaz de descomplicar seu ingresso no reconhecimento de cidadania.
                    {" "}
                  </p>
                  <p className="gr-text-8 mb-0">
                    Prepare-se, nós da Emigratus temos o compromisso da transparência e, por isso, navegando em nosso site, você encontrará o melhor conteúdo explicativo para vencer a burocracia e realizar o sonho de reconhecer sua cidadania italiana. Nós faremos isso por você!
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <div className="content-section pt-14 pt-lg-27 pb-13 pb-lg-27 bg-default-2">
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col sm="8" lg="5" xl="6" className="mb-9 mb-lg-0">
                <div className="content-grid-image-group d-flex  mx-sm-n3">
                  <div className="single-image d-flex flex-column px-3 px-sm-6">
                    <img
                      src={imgC1}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      className="w-100 pb-6 pb-sm-9 rounded-10"
                    />

                    <img
                      src={imgC2}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="800"
                      className="w-100 pb-6 pb-sm-9 rounded-10"
                    />
                  </div>
                  <div className="single-image d-flex flex-column pt-11 px-3 px-sm-6">
                    <img
                      src={imgC3}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="400"
                      className="w-100 pb-6 pb-sm-9 rounded-10"
                    />

                    <img
                      src={imgC4}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="1200"
                      className="w-100 rounded-10"
                    />
                  </div>
                </div>
              </Col>
              <Col
                sm="8"
                lg="6"
                xl="5"
                className="offset-lg-1 offset-lg-1 offset-xl-0"
              >
                <div className="content-text">
                  <h2 className="gr-text-3 mb-7 mb-lg-11">
                    High skilled coders <br className="d-none d-lg-block" />{" "}
                    from worldwide.
                  </h2>
                  <p className="gr-text-8 mb-7 mb-lg-10">
                    We share common trends and strategies for improving your
                    rental income and making sure you stay in high demand of
                    service.{" "}
                  </p>
                  <p className="gr-text-8 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page. With lots of
                    unique blocks, you can easily build a page without coding
                    any other page.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div> */}
        <div className="pt-13 pt-lg-24 pb-lg-24 ">
          <Container>
            <Row className="justify-content-center">
              <Col lg="9" xl="8">
                <div className="section-title text-center px-md-12 mb-lg-17 mb-10">
                  <h2 className="gr-text-3 mb-7 mb-lg-8">Conheça nosso time</h2>
                  <p className="gr-text-8 mb-0">
                    Experiência faz a diferença em um processo que certamente mudará sua vida. Conheça nossos especialistas:
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-left mb-lg-n15 mb-0">

              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    {/* <img src={imgT2} alt="" className="w-100" /> */}
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 mb-2">Katya Nolasco</h3>
                    <p className="gr-text-9 mb-0 line-height-1">
                      Advogada especializada em Direito Migratório
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    {/* <img src={imgT3} alt="" className="w-100" /> */}
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 mb-2">Marcela Gomes Batista</h3>
                    <p className="gr-text-9 mb-0 line-height-1">
                      Professora de Italiano e especialista em Cidadania Italiana
                    </p>
                  </div>
                </div>
              </Col>
 
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    {/* <img src={imgT5} alt="" className="w-100" /> */}
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 mb-2">Daniella Talarico</h3>
                    <p className="gr-text-9 mb-0 line-height-1">
                      Historiadora especializada em pesquisa genealógica
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    {/* <img src={imgT6} alt="" className="w-100" /> */}
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 mb-2">Jéssica</h3>
                    <p className="gr-text-9 mb-0 line-height-1">
                      Advogada especializada em Direito Migratório
                    </p>
                  </div>
                </div>
              </Col>

              {/* <Col
                lg="3"
                md="4"
                xs="6"
                className="mb-13 d-flex align-items-center"
              >
                <div className="mt-xs-n25">
                  <h3 className="gr-text-6">
                    Interested to join <br />
                    our team ?
                  </h3>
                  <a
                    href="/"
                    className="btn-link with-icon gr-text-blue gr-text-7 font-weight-bold mt-5"
                  >
                    Apply now{" "}
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </a>
                </div>
              </Col> */}
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default AboutPage;
