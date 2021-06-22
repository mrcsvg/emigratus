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
                    Exigências legais
                  </h2>
                  <p className="gr-text-7 mb-0 mb-lg-13">Entenda quais são as exigências legais para obtenção de sua cidadania</p>
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
                    Tradução juramentada
                  </h3>
                  <p className="gr-text-9 mb-9">
                  Para ingressar com documentos em instituições estrangeiras, os documentos precisam ser traduzidos, mas essa tradução não pode ser feita por qualquer um.                  
                  </p>
                  <p className="gr-text-9 mb-9">
                  O tradutor juramentado é um profissional com fé pública, concursado, reconhecido e credenciado pela Junta Comercial para traduzir e interpretar documentos.
                  </p>
                </div>

                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 font-weight-bold mb-9">
                    Apostilamento
                  </h3>
                  <p className="gr-text-9 mb-9">
                  Quando recebemos um determinado documento na nossa língua, precisamos ir até um cartório para autenticar não é mesmo?! 
                  </p>
                  <p className="gr-text-9 mb-9">
                  O Apostilamento de Haia tem o mesmo propósito, é um certificado de autenticidade de um documento público, porém esse é válido em vários países.
                  </p>
                  <p className="gr-text-9 mb-9">
                  Com o apostilamento, o cartório reconhece a autenticidade das assinaturas, selos, carimbos de instituições, etc. O exemplo mais frequente é quando nos inscrevemos num curso ou faculdade no exterior e uma das exigências no ato da inscrição é a cópia do Diploma, Curriculum ou histórico escolar traduzido e apostilado.
                  </p>                  
                </div>


                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 font-weight-bold mb-9">
                    Certidão negativa/positiva de naturalização
                  </h3>
                  <p className="gr-text-9 mb-9">
                  Um dos documentos necessários para o requerimento de cidadania é a Certidão Negativa ou Positiva de Naturalização, emitida junto ao Ministério da Justiça Brasileiro. Essa certidão comprova ao Estado se o antepassado italiano se naturalizou brasileiro ou não.
                  </p>
                  <p className="gr-text-9 mb-9">
                  Mas, calma! Essa possível naturalização do antepassado italiano em brasileiro, não é um impedimento para a cidadania dos descendentes, desde que seus filhos tenham nascido antes da naturalização, ou seja, quando ele ainda era um cidadão italiano. 
                  </p>             
                </div>



                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 font-weight-bold mb-9">
                    Retificações civis
                  </h3>
                  <p className="gr-text-9 mb-9">
                  As Retificações de Registro Civil são comuns no processo de reconhecimento de cidadania, tendo como propósito retificar, ou seja, corrigir incoerências nominativas, datas, gênero ou omissões nas certidões de nascimento, casamento ou óbito. Sabemos o quanto os consulados são exigentes quanto às informações, estas devem estar condizentes com a história da família.
                  </p>
                  <p className="gr-text-9 mb-9">
                  Quando nossos antepassados emigraram para o Brasil, muitos não declaravam ou declaravam tardiamente o nascimento dos filhos, por motivos diversos, isso causa um lapso temporal que compromete a veracidade dos documentos. Outro fato comum é que os italianos registravam os filhos com um nome em cartório ou outro no batismo religioso, e este filho ora usava um nome para se identificar oficialmente e ora o outro, causando dificuldades em confirmar sua identidade.
                  </p>   
                  <p className="gr-text-9 mb-9">
                  Não é incomum os cartórios negarem a retificação administrativa das certidões, nesses casos, se faz necessário o ingresso por via judicial e a reconstrução da certidão. 
                  </p>                  

                </div>



                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 font-weight-bold mb-9">
                    Tem dúvidas?
                  </h3>
                  <p className="gr-text-9 mb-9">
                    Para ajuda com a emissão deste documento, entre em contato conosco! 
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
