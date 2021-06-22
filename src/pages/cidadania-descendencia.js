import React from "react";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import imgBanner from "../assets/image/inner/banners/descendencia.jpg";

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
                    Cidadania por descendência
                  </h2>
                  <p className="gr-text-7 mb-0 mb-lg-13">Como obter sua cidadania por descendência</p>
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
                    A Cidadania de determinado país é o que dá à pessoa direitos e deveres cívicos e políticos para com a nação, além de representar parte da identidade de cada indivíduo.    
                  </p>
                  <p className="gr-text-9 mb-9">
                    O direito à Cidadania Italiana é iure sanguinis, ou seja, é concedido por descendência e, apesar de existirem várias regras a serem seguidas, não há limite de gerações. 
                  </p>
                  <p className="gr-text-9 mb-0">
                    Para obtê-la, é necessário reconstruir a história da família, por meio de certidões e documentos, desde o antepassado italiano que chegou ao Brasil até os descendentes que a almejam. Existem 3 modos de fazer o requerimento da Cidadania: 
                  </p>
                </div>

                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 font-weight-bold mb-9">
                    Requerimento Administrativo 
                  </h3>
                  <p className="gr-text-9 mb-0">
                  É feito por meio do Consulado Italiano responsável pela jurisdição da residência do requerente.
                  Todos os documentos necessários devem ser apresentados para análise conforme as normas do Ministério e mediante agendamento no Consulado. 
                  Se já possui a documentação completa, entre em contato conosco para uma análise documental prévia! Assim você evita surpresas desagradáveis no Consulado.
                  </p>
                </div>
                <div className="single-block mb-12 mb-lg-14">
                  <h3 className="gr-text-6 font-weight-bold pb-3">
                    Requerimento Judicial
                  </h3>
                  <p className="gr-text-9 mb-0">
                  O poder de transmissão da cidadania italiana por mulheres apenas foi concedido com a Constituição de 1948. Até então, a cidadania do filho era unicamente conferida de acordo com a cidadania do pai. 
                  Por isso, ainda hoje, quando, em uma árvore genealógica, se encontra uma mulher detentora da cidadania italiana, mas casada com cidadão estrangeiro e cujo filho nasceu antes de 1º de janeiro de 1948, a única possibilidade de requerer a cidadania é judicialmente no Tribunal de Roma.
                  Requerentes cuja árvore genealógica não possui essa particularidade também podem dar entrada no processo judicial de cidadania no Tribunal romano. A vantagem desse processo é o deferimento possivelmente mais rápido e a possibilidade de, em um mesmo processo, requerer a cidadania de vários descendentes do mesmo antepassado. 
                  </p> 
                </div>
                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 font-weight-bold mb-9">
                    Tem dúvidas?
                  </h3>
                  <p className="gr-text-9 mb-9">
                    Tem dúvidas sobre qual o processo mais indicado para você? Entre em contato conosco!  
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
