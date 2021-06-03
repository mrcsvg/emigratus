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
                    Visto
                  </h2>
                  <p className="gr-text-7 mb-0 mb-lg-13">Em breve</p>
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
