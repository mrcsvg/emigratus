import React from "react";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

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
                    Pesquisa Genealógica
                  </h2>
                  <p className="gr-text-7 mb-0 mb-lg-13">Entenda mais sobre pesquisa genealógica</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="main-block pb-6 pb-lg-17 bg-default-6">
          <Container>
            <Row className="justify-content-center">
              <Col xl="8" lg="9">
                <div className="single-block mb-12 mb-lg-15">
                  <p className="gr-text-9 mb-9">
                    Muitas vezes temos uma certidão de um antepassado e logo nos acende uma esperança, mas esta certidão não é suficiente. 
                  </p>
                  <p className="gr-text-9 mb-9">
                    O mapeamento é um estudo de linhagem, uma pesquisa genealógica que é realizada por profissionais habilitados a compreender e analisar documentos, sejam cartorários ou não, a fim de identificar padrões e pistas que levam a outros documentos comprobatórios para recriar sua árvore genealógica para fins de cidadania, sendo possível identificar se há elegibilidade em solicitar o reconhecimento de sua cidadania. 
                  </p>
                  <p className="gr-text-9 mb-9">
                    Composta por 2 fases, uma no Brasil e outra no Comune.  Nós temos profissionais qualificados para fazer sua árvore genealógica, conte conosco e solicite um orçamento!
                  </p>
                </div>

                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 font-weight-bold mb-9">
                    Tem dúvidas?
                  </h3>
                  <p className="gr-text-9 mb-9">
                    Tem dúvidas sobre este processo o processo mais indicado para você? Entre em contato conosco!  
                  </p>
                  <Link href="/">
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
