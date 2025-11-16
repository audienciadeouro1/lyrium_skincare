import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { APP_LOGO } from "@/const";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 header-bg/95 backdrop-blur supports-[backdrop-filter]:header-bg/60 border-b border-muted" style={{backgroundColor: '#c8d6c9'}}>
        <div className="container flex items-center justify-between h-20" style={{paddingRight: '165px'}}>
          <div className="flex items-center gap-2">
            <img src="/logo-main.png" alt="Lyrium" className="w-auto" style={{marginLeft: '40px', height: '119px'}} />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/catalog" className="text-sm text-foreground hover:text-accent transition-colors">Catálogo</a>
            <a href="#serum" className="text-sm text-foreground hover:text-accent transition-colors">Sobre o Sérum</a>
            <a href="#kits" className="text-sm text-foreground hover:text-accent transition-colors">Kits Rituais</a>
            <a href="#testimonials" className="text-sm text-foreground hover:text-accent transition-colors">Depoimentos</a>
          </nav>
          <Button className="btn-primary" style={{backgroundColor: '#668f7a'}}>Comprar Agora</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6">
                <h1 className="text-serif text-5xl md:text-6xl leading-tight text-foreground">
                  Sérum Equilíbrio Ativo
                </h1>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  A clareza do essencial para sua pele. Formulado com 10% Niacinamida e 1% Zinco PCA, ele entrega a harmonia perfeita para uma pele calma e com toque aveludado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-primary text-lg py-4 px-8 flex items-center gap-2">
                    Comprar Agora <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button className="btn-secondary text-lg py-4 px-8">Saiba Mais</Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-foreground/70">
                  <Check className="w-5 h-5 text-accent" />
                  <span>Fórmula Curada • Eficácia Comprovada • Experiência Sensorial</span>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="/product-hero.png" alt="Sérum Equilíbrio Ativo" className="w-full max-w-md h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* O Antídoto à Complexidade */}
        <section id="serum" className="section-padding bg-muted/20">
          <div className="container">
            <h2 className="text-serif text-4xl md:text-5xl text-center mb-12 text-foreground">
              O Antídoto à Complexidade
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background p-8 rounded-lg border border-border">
                <h3 className="text-serif text-2xl mb-4 text-foreground">Ingredientes Isolados</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Você precisa "montar" sua própria rotina</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Ansiedade sobre o que combinar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Visual frio e clínico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Foco no preço, não na experiência</span>
                  </li>
                </ul>
              </div>
              <div className="bg-accent/20 p-8 rounded-lg border border-accent">
                <h3 className="text-serif text-2xl mb-4 text-foreground">Fórmula Curada (Lyrium)</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5" />
                    <span>Fórmula completa e sinergética</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5" />
                    <span>Simplicidade e clareza</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5" />
                    <span>Sofisticação sutil e atemporal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5" />
                    <span>Experiência sensorial elevada</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* A Ciência da Harmonia */}
        <section className="section-padding bg-background">
          <div className="container">
            <h2 className="text-serif text-4xl md:text-5xl text-center mb-12 text-foreground">
              A Ciência da Harmonia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-accent">10%</span>
                </div>
                <h3 className="text-serif text-xl mb-2 text-foreground">Niacinamida</h3>
                <p className="text-foreground/70 text-sm">
                  Acalma a pele, reduz a oleosidade e refina os poros. A base da nossa fórmula.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-accent">1%</span>
                </div>
                <h3 className="text-serif text-xl mb-2 text-foreground">Zinco PCA</h3>
                <p className="text-foreground/70 text-sm">
                  Potencializa a ação da Niacinamida, oferecendo controle de oleosidade extra.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-accent">+</span>
                </div>
                <h3 className="text-serif text-xl mb-2 text-foreground">Ácido Salicílico</h3>
                <p className="text-foreground/70 text-sm">
                  Esfoliação suave que complementa a ação dos ativos, sem agressividade.
                </p>
              </div>
            </div>
            <div className="mt-12 p-8 bg-muted/20 rounded-lg border border-border">
              <p className="text-center text-foreground/80 text-lg">
                <span className="font-semibold text-foreground">A Sinergia:</span> Esses três ativos trabalham em harmonia, resolvendo a oleosidade e os poros em um único passo. Não é uma "aula de química", é a solução perfeita, já curada.
              </p>
            </div>
          </div>
        </section>

        {/* O Ritual Sensorial */}
        <section className="section-padding bg-accent/10">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-serif text-4xl md:text-5xl mb-6 text-foreground">
                  O Ritual Sensorial
                </h2>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  O Sérum Equilíbrio Ativo é mais do que um produto. É um momento de autocuidado. A textura leve e aveludada se funde à pele, acalmando e refinando os poros para um toque de seda.
                </p>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  O vidro fosco (jateado) oferece um toque premium que convida à calma. Cada aplicação é um ritual de clareza e bem-estar.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground/80">
                    <Check className="w-5 h-5 text-accent" />
                    <span>Textura leve e aveludada</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/80">
                    <Check className="w-5 h-5 text-accent" />
                    <span>Vidro fosco para toque premium</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/80">
                    <Check className="w-5 h-5 text-accent" />
                    <span>Absorção rápida, sem resíduos</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/80">
                    <Check className="w-5 h-5 text-accent" />
                    <span>Pele calma e equilibrada</span>
                  </li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-8 text-center">
                <p className="text-serif text-3xl text-foreground mb-4">"Pele calma, toque aveludado."</p>
                <p className="text-foreground/70">A essência do Sérum Equilíbrio Ativo em uma frase.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kits Rituais */}
        <section id="kits" className="section-padding bg-background">
          <div className="container">
            <h2 className="text-serif text-4xl md:text-5xl text-center mb-12 text-foreground">
              Complete seu Ritual
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Kit Ritual Equilíbrio", desc: "Para peles oleosas", price: "R$ 189,90" },
                { name: "Kit Ritual Lumina", desc: "Para manchas e viço", price: "R$ 249,90" },
                { name: "Kit Ritual Renovador", desc: "Para peles secas/sinais", price: "R$ 249,90" },
                { name: "Kit Essencial Lyrium", desc: "Para iniciantes", price: "R$ 149,90" },
              ].map((kit, idx) => (
                <div key={idx} className="bg-muted/20 border border-border rounded-lg p-6 hover:border-accent transition-colors">
                  <h3 className="text-serif text-lg mb-2 text-foreground">{kit.name}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{kit.desc}</p>
                  <p className="text-2xl font-semibold text-foreground mb-4">{kit.price}</p>
                  <Button className="btn-secondary w-full">Saiba Mais</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="section-padding bg-accent/5">
          <div className="container">
            <h2 className="text-serif text-4xl md:text-5xl text-center mb-12 text-foreground">
              Histórias de Transformação
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Marina S.", text: "Finalmente encontrei um produto que resolve minha oleosidade sem a complexidade. O Sérum Equilíbrio é perfeito." },
                { name: "Lucas M.", text: "Estava cansado de montar minha própria rotina. Agora confio na Lyrium para fazer isso por mim." },
                { name: "Ana P.", text: "A experiência de usar é incrível. O vidro fosco, a textura... é realmente um ritual." },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-background border border-border rounded-lg p-6">
                  <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground">— {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-foreground text-background">
          <div className="container text-center">
            <h2 className="text-serif text-4xl md:text-5xl mb-6">
              Comece seu Ritual Lyrium Hoje
            </h2>
            <p className="text-xl mb-8 opacity-90">
              A clareza do essencial. A aliança sutil entre ciência e essência.
            </p>
            <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg flex items-center gap-2 mx-auto">
              Comprar Agora <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.png" alt="Lyrium" className="h-8 w-auto mb-4" />
              <p className="text-sm text-foreground/70">A clareza do essencial para sua pele.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Produtos</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">TikTok</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">YouTube</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Termos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/70">
            <p>&copy; 2025 Lyrium Skincare. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
