import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";

const Alert = () => {
  return (
    <>
      {/* <!-- Alert Area --> */}
      <div className="alert-section py-9 bg-primary dark-mode-texts ">
        <Container>
          <Row className="justify-content-center">
            <Col xl="12" lg="12" md="12">
              <div className="alert-content d-flex flex-column flex-lg-row align-items-center text-center justify-content-lg-center">
                <span className="btn-badge rounded-pill bg-white gr-text-12 text-uppercase font-weight-bold text-blue py-1 px-6 mr-5 mb-6 mb-lg-0 d-inline-flex align-items-center">
                  Atenção
                </span>
                <span className="alert-text gr-text-9 text-white">
                Os processos de cidadania podem demorar alguns anos para serem concluídos e, ano após ano, mais Brasileiros embarcam nessa jornada. Quanto antes você iniciar, mais rápido vai obter sua cidadania. Venha conosco!{" "}
                  {/* <Link href="/#">
                    <a className="action-link text-white gr-text-underline">
                      .
                    </a>
                  </Link> */}
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Alert;
