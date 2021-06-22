import React from "react";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import imgBanner from "../assets/image/inner/banners/exigencias.jpg";

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
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-8 mb-lg-10">
                    AIRE e Fast-it
                  </h2>
                  <p className="gr-text-7 mb-0 mb-lg-13">Entenda o que é AIRE e o fast-it</p>
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
                  <h3 className="gr-text-6 font-weight-bold mb-9">
                    AIRE
                  </h3>
                  <p className="gr-text-9 mb-9">
                  <b>AIRE</b> significa “Anagrafe degli Italiani Residenti all’Estero” e é basicamente o setor onde são registrados os cidadãos italianos que residem no exterior. 
                  </p>
                  <p className="gr-text-9 mb-9">    
                    Para a obtenção de documentos, certificados emitidos pelo consulado e para o requerimento do seu passaporte é importante estar inscrito no AIRE. Por isso, quando o conacional transfere sua residência de uma jurisdição consular para outra, deve transferir também seu registro no AIRE.          
                  </p>
                  <p className="gr-text-9 mb-9">     
                  Aos nascidos no Brasil, como a maioria de nós (duplos cidadãos), devemos nos certificar do passo a passo para registro, assim podemos receber a prestação de serviços do consulado na circunscrição (região consular) atual.          
                  </p>
                  <p className="gr-text-9 mb-9">              
                  No decorrer da vida ocorrem vários eventos que mudam nossa realidade: estado civil, endereço, óbito, nascimento de filhos, composição familiar e, como cidadãos italianos, temos o dever em comunicar essas mudanças ao governo italiano. 
                  </p>
                </div>

                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 font-weight-bold mb-9">
                    Fast-it
                  </h3>
                  <p className="gr-text-9 mb-9">
                  O <b>Fast-it</b> é uma plataforma online de serviços institucionais, onde o conacional se inscreve para verificar e atualizar os dados já registrados no AIRE do Consulado de sua circunscrição. 
                  </p>               
                </div>






                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 font-weight-bold mb-9">
                  Achou complicado? 
                  </h3>
                  <p className="gr-text-9 mb-9">
                  Nós fazemos para você! Entre em contato conosco para um orçamento.
                  </p>
                  <Link href="/contact2">
                    <a className="btn btn-primary mt-3 mt-lg-10">
                      Entre em contato
                    </a>
                  </Link>
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
