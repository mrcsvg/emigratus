import React from "react";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import imgBanner from "../assets/image/inner/banners/visa.jpg";

const PesquisaGenealogica = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >


<div className="inner-banner pt-29 pt-lg-30 pb-9 pb-lg-12 bg-default-6">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9">
                <div className="px-md-13 text-center">
                  <h2 className="title gr-text-2 mb-8 mb-lg-10">
                    Visto
                  </h2>
                  <p className="gr-text-7 mb-0 mb-lg-13">Como podemos te ajudar com o visto Europeu</p>
                </div>
              </Col>
            </Row>

            <Col xs="12">
                <div className="banner-fluid-image pt-lg-9">
                  <img src={imgBanner} alt="" className="w-100" />
                </div>
              </Col>

          </Container>
        </div>

        <div className="main-block pb-6 pb-lg-17 bg-default-6">
          <Container>
            <Row className="justify-content-center">
              <Col xl="8" lg="9">
              <div className="single-block mb-12 mb-lg-15">

                  <p className="gr-text-9 mb-9">
                    O visto Schengen é um visto de curto prazo que permite aos cidadãos estrangeiros a permanência nos países membros por um período de até 90 dias em um arco de 180 dias e não é necessário fazer o requerimento dessa modalidade de visto.</p>

                    <p className="gr-text-9 mb-9">
                    Para períodos de 91 a 365 dias é necessário fazer o requerimento do visto de longo prazo especificamente no Consulado do país de destino justificando a permanência. As tipologias de visto são:</p>

                  <ul className="list-unstyled">
                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Visto de estudos: válido por todo o período dos estudos, devendo ser renovado ao fim de cada ano.
                      </li>

                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Visto para reagrupamento familiar: válido por um ano a partir da emissão
                      </li>

                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Visto de trabalho subordinado: é necessário apresentar a documentação comprobatória por parte da empresa para ser emitido. 
                      </li>

                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Visto de trabalho autônomo: pode ser requerido para desenvolver atividades profissionais autônomas. É necessário comprovar a posse dos requisitos profissionais e morais para o exercício da atividade em questão. 
                      </li>

                   </ul>
 
 


                  <p className="gr-text-9 mb-9">
                    O requerimento pode ser bastante burocrático e frustrante. Evite maiores complicações e entre em contato conosco!</p>





                </div>
              </Col>
            </Row>
          </Container>
        </div>


      
      </PageWrapper>
    </>
  );
};
export default PesquisaGenealogica;
