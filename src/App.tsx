// src/App.tsx
import PageContainer from "./components/PageContainer"
import FormField from "./components/FormField"
import NavBar from "./components/NavBar"
import Button from "./components/LinkButton"
import CategoryCard from "./components/CategoryCard"
import VerticalCard from "./components/VerticalCard"
import MobileWhatsAppFloating from "./components/MobileWhatsAppFloating"
import Footer from "./components/Footer"
import familyBg from "/familia_sofa.avif"

const PRODUCT_CARDS = [
  {
    title: "Linha Pro",
    content: (
      <p className="text-gray-700">
        A Linha Pro oferece cobertura básica, ideal para quem quer segurança
        a um preço acessível. Rede credenciada em todo o país com serviços
        essenciais de ambulatório e internação.
      </p>
    ),
  },
  {
    title: "Linha Porto Saúde",
    content: (
      <p className="text-gray-700">
        Com a Linha Porto Saúde você tem um plus em atendimento — coberturas
        ampliadas, exames especiais e reembolso parcial. Rede com hospitais
        e clínicas premium.
      </p>
    ),
  },
  {
    title: "Linha Tradicional",
    content: (
      <p className="text-gray-700">
        A Linha Tradicional abrange planos com atendimento altamente qualificado,
        reembolso no Brasil e exterior, e escolhas ilimitadas de prestadores.
      </p>
    ),
  },
  {
    title: "Linha Porto Bairros",
    content: (
      <p className="text-gray-700">
        A Linha Porto Bairros traz planos com abrangência municipal, preço que
        cabe no bolso e hospital/laboratório perto de você.
      </p>
    ),
  },
]

function App() {
  return (
    <div className="flex flex-col bg-gray-200 min-h-screen">
      <NavBar />

      {/* HOME */}
      <PageContainer
        id="home"
        className="
          bg-[#009fe5]
          py-16 px-4
          flex flex-col lg:flex-row
          justify-center items-center
          gap-y-8 lg:gap-x-20
        "
        style={{
          backgroundImage: `url(${familyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="
            text-[#cf1c32]
            text-3xl md:text-4xl lg:text-6xl
            font-bold
            text-center lg:text-right
            leading-tight
          "
        >
          Bradesco, 
          <br />
          Sempre ao seu lado
          <p
            className="
              mt-4
              text-base md:text-lg lg:text-2xl
              font-normal
              opacity-80
              text-white
              text-center lg:text-right
            "
          >
            Seu caminho para proteção completa
          </p>
        </div>

        <FormField
          id="name"
          className="
            w-full
            sm:w-3/4
            md:w-1/2
            lg:w-1/4
          "
          name="name"
          value=""
        />
      </PageContainer>

      {/* BENEFITS */}
      <PageContainer
        id="benefits"
        className="
          bg-[#cf1c32]
          py-16 px-4 sm:px-6 lg:px-8
          flex flex-col lg:flex-row
          items-center justify-center
          text-center lg:text-left
          gap-y-4 lg:gap-x-40
        "
      >
        <div className=" text-white text-base md:text-lg lg:text-xl lg:text-right">
          Quer Marcar Consultas ou dúvidas sobre seu plano atual? <br className="hidden lg:block" />
          Já é Cliente?
        </div>
        <Button
          id="submit"
          type="submit"
          className="mt-4 lg:mt-0 cursor-pointer bg-gray-200 text-[#cf1c32]"
          link="https://www.portoseguro.com.br/porto-seguro-saude"
        >
          Visite a Central de Clientes
        </Button>
      </PageContainer>

      {/* ADVERTISING */}
      <PageContainer
        id="advertising"
        className="
          bg-gray-200
          py-16 px-4 sm:px-6 lg:px-8
          flex flex-col lg:flex-row
          items-center justify-center
          text-center lg:text-left
          gap-y-8 lg:gap-x-40
        "
      >
        <img
          src="/health.avif"
          alt="consulta"
          className="h-56 sm:h-64 lg:h-80 mx-auto lg:mx-0 rounded"
        />
        <div className="text-black space-y-2 text-base md:text-lg lg:text-xl">
          <div>Não é Cliente?</div>
          <div>Quer saber mais sobre nossos planos?</div>
        </div>
      </PageContainer>
      <div className="w-4/5 h-px bg-red-500 mx-auto"/>

      {/* CATEGORIES */}
      <PageContainer
        id="categories"
        className="
          bg-gray-200
          pt-16 pb-28 px-4 sm:px-6 lg:px-8
          flex flex-col
          items-center
        "
      >
        {/* Section title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          Nossas Categorias de Planos
        </h2>

        {/* Cards grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <CategoryCard id="category1" title="Linha Pro" imageUrl="/familia1.avif">
            <p>- Empresas de 3 a 499 vidas;</p>
            <p>- Abrangência regional;</p>
            <p>- Custo-benefício.</p>
          </CategoryCard>
          <CategoryCard id="category2" title="Linha Porto Saúde" imageUrl="/corporate.avif">
            <p>- Pequenas, médias e grandes empresas;</p>
            <p>- Abrangência nacional;</p>
            <p>- Rede otimizada;</p>
            <p>- Reembolso.</p>
          </CategoryCard>
          <CategoryCard id="category3" title="Linha Tradicional" imageUrl="/health1.avif">
            <p>- Para pequenas e médias empresas;</p>
            <p>- Abrangência nacional;</p>
            <p>- Ampla rede referenciada;</p>
            <p>- Reembolso.</p>
          </CategoryCard>
          <CategoryCard id="category4" title="Linha Porto Bairros" imageUrl="/health2.avif">
            <p>- Empresas de 3 a 99 vidas;</p>
            <p>- Abrangência municipal;</p>
            <p>- Hospital e laboratório no seu bairro;</p>
            <p>- Preço que cabe no bolso.</p>
          </CategoryCard>
        </div>
      </PageContainer>
      <div className="w-4/5 h-px bg-red-500 mx-auto"/>

      {/* PRODUCTS ACCORDION + IMAGE */}
      <PageContainer
        id="products"
        className="
          bg-gray-200
          py-16 px-4 sm:px-6 lg:px-8
          /* remove flex here so children stack by default */
        "
      >
        {/* constrain width & center */}
        <div className="max-w-7xl mx-auto flex flex-col gap-y-8">
          {/* 1) Title always on top */}
          <h2
            className="
              text-center lg:text-left
              text-2xl md:text-3xl lg:text-4xl
              text-[#cf1c32] font-bold
            "
          >
            Conheça os Nossos Produtos
          </h2>

          {/* 2) Now your two columns: accordion + image */}
          <div
            className="
              flex flex-col lg:flex-row
              items-stretch justify-center
              gap-y-8 lg:gap-x-40
            "
          >
            {/* Accordion cards */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 gap-6">
              {PRODUCT_CARDS.map(({ title, content }) => (
                <VerticalCard key={title} title={title}>
                  {content}
                </VerticalCard>
              ))}
            </div>

            {/* Full‑height image */}
            {/* inside your existing flex */}
            <div className="w-full lg:w-1/2 h-[350px] flex justify-center">
              <img
                src="/running.avif"
                alt="Detalhes dos produtos"
                className="h-full w-auto object-cover shadow-lg rounded"
              />
            </div>
          </div>
        </div>
      </PageContainer>
      <div className="flex flex-col">
      {/* only shows on mobile */}
      <MobileWhatsAppFloating />
    </div>

      <Footer />
    </div>
  )
}

export default App
