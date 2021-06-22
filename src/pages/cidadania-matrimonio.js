import React from "react";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import imgBanner from "../assets/image/inner/banners/matrimonio.jpg";

const CidadaniaDescendencia = () => {
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
                    Cidadania por matrimônio
                  </h2>
                  <p className="gr-text-7 mb-0 mb-lg-13">Como obter sua cidadania por matrimônio</p>
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
                  A Cidadania Italiana pode ser concedida aos cônjuges de cidadãos italianos, sejam eles natos ou descendentes, seguindo as regras a seguir:
                  </p>
                  <h4 className="gr-text-8 font-weight-bold pb-5">
                      Mulheres casadas com cidadão italiano até 27 de abril de 1983
                  </h4>
                  <p className="gr-text-9 mb-9">
                    Mulheres que se casaram com cidadão italiano até a data de 27 de abril de 1983 tem direito à cidadania italiana automaticamente, após o reconhecimento da cidadania do marido. Isso significa que o processo é bem mais simples, rápido e feito diretamente no Consulado.
                  </p>
                  <h4 className="gr-text-8 font-weight-bold pb-5">
                      Demais casos
                  </h4>
                  <p className="gr-text-9 mb-0">
                    Todos os homens e as demais mulheres casados com cônjuge italiano devem requerer à Naturalização por Matrimônio e esse processo é feito pelo <i>Ministero dell’Interno</i>. Para requerer à Naturalização deve-se preencher um dos seguintes requisitos:
                      <ul className="list-unstyled">
                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Residir em território italiano por ao menos 2 anos após o casamento.
                      </li>

                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Caso o casal não resida em território italiano, deve-se esperar 3 anos a partir da data do casamento para dar entrada no processo.
                      </li>

                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        A cidadania por matrimônio para casais homossexuais segue as mesmas regras acima, com a diferença de que este casamento é chamado de <i>Unione Civile.</i>
                      </li>

                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        No caso de o casal ter filhos menores de idade, o tempo de casamento necessário para fazer o requerimento da naturalização em ambos os casos reduz à metade.
                      </li>

                      </ul>



                  </p>
                </div>

                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 font-weight-bold mb-9">
                    Tem dúvidas?
                  </h3>
                  <p className="gr-text-9 mb-9">
                    Após o requerimento, o processo pode demorar até quatro anos. Tem dúvidas sobre a Cidadania por Matrimônio? Entre em contato conosco!
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
export default CidadaniaDescendencia;
