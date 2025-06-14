  // src/App.tsx
  import PageContainer from "./components/PageContainer"
  import FormField from "./components/FormField"
  import NavBar from "./components/NavBar"
  import Button from "./components/LinkButton"
  import FormButton from "./components/FormButton"
  import CategoryCard from "./components/CategoryCard"
  import VerticalCard from "./components/VerticalCard"
  import MobileWhatsAppFloating from "./components/MobileWhatsAppFloating"
  import Footer from "./components/Footer"
  import familyBg from "/familia_sofa.avif"

  const PRODUCT_CARDS = [
  {
    title: "Efetivo",
    content: (
      <span className="text-gray-700">
        Abrangência nacional com prestadores locais e nacionais. A partir de 3 vidas. Melhor custo-benefício.
        <ul>
          Cobertura:
          <li>- Hospital Leforte</li>
          <li>- Hospital AC Camargo</li>
          <li>- Hospital São Camilo</li>
          <li>- Hospital Vitória</li>
        </ul>
      </span>

    ),
  },
  {
    title: "Flex",
    content: (
      <span className="text-gray-700">
        Abrangência nacional e reembolso específico para consultas e honorários. A partir de 3 vidas.
        
      </span>
    ),
  },
  {
    title: "Ideal",
    content: (
      <span className="text-gray-700">
        Abrangência nacional com foco em RJ, SP e DF. Diversas opções de prestadores. A partir de 3 vidas.
        <ul>
          Cobertura:
          <li>- Hospital Santa Catarina</li>
          <li>- Hospital Samaritano</li>
          <li>- HCor </li>
          <li>- Hospital Edmundo Vasconcélos</li>
        </ul>
      </span>
    ),
  },
  {
    title: "Nacional",
    content: (
      <span className="text-gray-700">
        Rede ampla em todo o Brasil. Liberdade de escolha com cobertura nacional. A partir de 3 vidas.
        <ul>
          Cobertura:
          <li>- Hospital Pro Matre</li>
          <li>- Hospital Santa Joana</li>
          <li>- Rede Dor </li>
          <li>- Hospital Nove de julho</li>
          <li>- Hospital Infantil Sabará</li>
        </ul>
      </span>
    ),
  },
  {
    title: "Nacional Plus",
    content: (
      <span className="text-gray-700">
        Hospitais de excelência e Bradesco Saúde Concierge em SP, RJ, BH e Salvador. Reembolso elevado. A partir de 3 vidas.
        <ul>
          Cobertura:
          <li>- Hospital Sírio Libanês</li>
          <li>- Hospital Albert Einstein</li>
          <li>- Laboratórios Alta e Fleury</li>
        </ul>
      </span>
    ),
  },
  {
    title: "Premium",
    content: (
      <p className="text-gray-700">
        Cobertura nacional completa para empresas a partir de 3 vidas. Serviços exclusivos e reembolso ainda maior que o Nacional Plus.
      </p>
    ),
  },
];



  function App() {
    return (
      <div className="flex flex-col bg-gray-200 min-h-screen">
        <NavBar />

        {/* ─── MOBILE: header over background, form below ─── */}
        <section className="block lg:hidden">
          <div
            className="w-full py-16 px-4 flex items-center min-h-[450px] relative justify-center"
            style={{
              backgroundImage: `url(${familyBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="
                text-[#cf1c32]
                text-3xl md:text-4xl
                font-bold
                text-center
                leading-tight
              "
            >
              Bradesco, <br />
              Sempre ao seu lado
              <p
                className="
                  mt-4
                  text-base md:text-lg
                  font-normal
                  opacity-80
                  text-white
                "
              >
                Seu caminho para proteção completa
              </p>
            </div>
          </div>

        </section>

        {/* ─── DESKTOP: one container, background + side-by-side ─── */}
        <PageContainer
          id="home"
          className="
            hidden lg:flex
            py-16 px-4
            flex-row
            justify-center items-center
            gap-x-20
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
            Bradesco, <br />
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
            Não é Cliente?<br/>
            Quer saber mais sobre nossos planos?
          </div>
          <div className=" text-white text-base md:text-lg lg:text-xl lg:text-right">
            <FormButton 
                className="mt-4 lg:mt-0 cursor-pointer bg-gray-200 text-[#cf1c32] hover:text-white hover:border-gray-200 hover:bg-[#cf1c32]"
                mobileScrollTargetId="home2"
                desktopScrollTargetId="home">

                Receba uma Cotação
              </FormButton>
          </div>
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
            <div>Quer marcar consultas ou tirar dúvidas sobre seu plano atual? </div>
            <div>Já é Cliente?</div>
            <Button
              id="submit"
              type="submit"
              className="mt-4 lg:mt-0 cursor-pointer bg-[#cf1c32] text-white hover:text-[#cf1c32] hover:border-[#cf1c32] hover:bg-gray-200"
              link="https://www.bradescoseguros.com.br/clientes"
            >
              Visite a Central de Clientes
          </Button>
          </div>
          

        </PageContainer>
        <div className="w-4/5 h-px bg-red-500 mx-auto"/>

        <PageContainer
          id="categories"
          className="bg-gray-200 pt-16 pb-28 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            Segmentos de Empresa
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <CategoryCard id="spg3" title="SPG 3" imageUrl="/corporate.avif" mobileScrollTargetId="home2"
    desktopScrollTargetId="home">
              <p>- Grupos de 3 a 29 pessoas;</p>
              <p>- Abrangência nacional;</p>
              <p>- Melhor custo-benefício.</p>
            </CategoryCard>
            <CategoryCard id="spg30" title="SPG 30" imageUrl="/micro_empresa.avif" mobileScrollTargetId="home2"
    desktopScrollTargetId="home">
              <p>- Grupos de 30 a 99 pessoas;</p>
              <p>- Abrangência nacional (Flex);</p>
              <p>- Reembolso específico.</p>
            </CategoryCard>
            <CategoryCard id="spg100" title="SPG 100" imageUrl="/construction.avif" mobileScrollTargetId="home2"
    desktopScrollTargetId="home">
              <p>- Grupos de 100 a 199 pessoas;</p>
              <p>- Rede nacional ampla (Ideal/Nacional);</p>
              <p>- Reembolso completo.</p>
            </CategoryCard>
            <CategoryCard id="empresarial" title="Empresarial" imageUrl="/big_company.avif" mobileScrollTargetId="home2"
    desktopScrollTargetId="home">
              <p>- A partir de 200 pessoas;</p>
              <p>- Serviços Concierge e cobertura total.</p>
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
                  src="/familia3.avif"
                  alt="Detalhes dos produtos"
                  className="h-full w-auto object-cover shadow-lg rounded"
                />
              </div>
            </div>
          </div>
        </PageContainer>
        <PageContainer
          id="home2"
          className="block lg:hidden"
        >
          <div className="px-4 pb-16">
            <FormField
              id="name"
              name="name"
              value=""
              className="
                w-full
                sm:w-3/4
                md:w-1/2
                mx-auto
              "
            />
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
