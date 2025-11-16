import { Button } from "@/components/ui/button";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "Gel de Limpeza Equilibrante",
    category: "Limpeza",
    price: 79.90,
    image: "/product-gel-limpeza.png",
    description: "Limpeza suave com Extrato de Lírio e Niacinamida. Pele calma e fresca.",
    ingredients: "Extrato de Lírio, Niacinamida",
  },
  {
    id: 2,
    name: "Sérum Lumina",
    category: "Tratamento",
    price: 129.90,
    image: "/product-serum-lumina.png",
    description: "Vitamina C 15% + Ácido Ferúlico. Pele radiante e tom uniforme.",
    ingredients: "Vitamina C 15%, Ácido Ferúlico",
  },
  {
    id: 3,
    name: "Sérum Equilíbrio Ativo",
    category: "Tratamento",
    price: 99.90,
    image: "/product-serum-equilibrio.png",
    description: "10% Niacinamida + 1% Zinco PCA. Pele equilibrada e poros refinados.",
    ingredients: "Niacinamida 10%, Zinco PCA 1%, Ácido Salicílico",
  },
  {
    id: 4,
    name: "Sérum Renovador",
    category: "Tratamento",
    price: 139.90,
    image: "/product-serum-renovador.png",
    description: "Peptídeos Matrixyl + Ácido Hialurônico. Pele firme e hidratada.",
    ingredients: "Peptídeos Matrixyl, Ácido Hialurônico",
  },
  {
    id: 5,
    name: "Hidratante Essencial",
    category: "Hidratação",
    price: 89.90,
    image: "/product-hidratante.png",
    description: "Ceramidas + Esqualano. Hidratação profunda e barreira protegida.",
    ingredients: "Ceramidas, Esqualano",
  },
  {
    id: 6,
    name: "Protetor Solar Fluido FPS 50",
    category: "Proteção",
    price: 84.90,
    image: "/product-protetor-solar.png",
    description: "Proteção invisível com Vitamina E. Toque seco e confortável.",
    ingredients: "Proteção Invisível, Vitamina E",
  },
  {
    id: 7,
    name: "Tônico Equilibrante",
    category: "Limpeza",
    price: 69.90,
    image: "/product-tonico.png",
    description: "Ácido Lático suave para esfoliação delicada. Pele macia e renovada.",
    ingredients: "Ácido Lático, Extrato de Lírio",
  },
  {
    id: 8,
    name: "Máscara Purificante",
    category: "Tratamento",
    price: 94.90,
    image: "/product-mascara.png",
    description: "Argila + Niacinamida para limpeza profunda. Poros refinados em 15 minutos.",
    ingredients: "Argila, Niacinamida, Carvão Ativado",
  },
  {
    id: 9,
    name: "Contorno de Olhos Revitalizante",
    category: "Tratamento",
    price: 109.90,
    image: "/product-contorno-olhos.png",
    description: "Cafeína + Peptídeos para olheiras e rugas. Olhar descansado.",
    ingredients: "Cafeína, Peptídeos, Vitamina K",
  },
];

const CATEGORIES = ["Todos", "Limpeza", "Tratamento", "Hidratação", "Proteção"];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = selectedCategory === "Todos"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 header-bg/95 backdrop-blur supports-[backdrop-filter]:header-bg/60 border-b border-muted" style={{backgroundColor: '#c8d6c9'}}>
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <a href="/">
              <img src="/logo-main.png" alt="Lyrium" className="h-20 w-auto" />
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/catalog" className="text-sm text-foreground hover:text-accent transition-colors font-semibold">Catálogo</a>
            <a href="/#serum" className="text-sm text-foreground hover:text-accent transition-colors">Sobre o Sérum</a>
            <a href="/#kits" className="text-sm text-foreground hover:text-accent transition-colors">Kits Rituais</a>
            <a href="/#testimonials" className="text-sm text-foreground hover:text-accent transition-colors">Depoimentos</a>
          </nav>
          <Button className="btn-primary">Comprar Agora</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Catálogo Header */}
        <section className="section-padding bg-muted/20">
          <div className="container">
            <h1 className="text-serif text-5xl md:text-6xl mb-4 text-foreground">
              Catálogo Completo
            </h1>
            <p className="text-xl text-foreground/80">
              Descubra toda a coleção essencial da Lyrium Skincare. Fórmulas curadas para cada necessidade.
            </p>
          </div>
        </section>

        {/* Filtros e Ordenação */}
        <section className="section-padding bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Filtro por Categoria */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Categoria</h3>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-md text-sm transition-all ${
                        selectedCategory === cat
                          ? "bg-foreground text-background"
                          : "bg-muted text-foreground hover:bg-accent"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ordenação */}
              <div className="md:col-span-2 flex items-end justify-end">
                <div className="flex items-center gap-2">
                  <label className="text-sm text-foreground/70">Ordenar por:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-muted text-foreground rounded-md border border-border text-sm"
                  >
                    <option value="featured">Destaque</option>
                    <option value="price-low">Menor Preço</option>
                    <option value="price-high">Maior Preço</option>
                    <option value="name">Nome (A-Z)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Grid de Produtos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-background border border-border rounded-lg overflow-hidden hover:border-accent transition-colors group"
                >
                  {/* Imagem do Produto */}
                  <div className="relative overflow-hidden bg-muted/20 h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </div>
                  </div>

                  {/* Informações do Produto */}
                  <div className="p-6">
                    <h3 className="text-serif text-lg mb-2 text-foreground line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Ingredientes */}
                    <div className="mb-4">
                      <p className="text-xs text-foreground/60 mb-1">Ingredientes principais:</p>
                      <p className="text-xs text-foreground/80">{product.ingredients}</p>
                    </div>

                    {/* Preço e CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-semibold text-foreground">
                        R$ {product.price.toFixed(2)}
                      </span>
                      <Button className="btn-secondary flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        <span className="hidden sm:inline">Adicionar</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resultado da Filtragem */}
            <div className="mt-12 text-center text-foreground/70">
              <p className="text-sm">
                Mostrando {sortedProducts.length} de {PRODUCTS.length} produtos
              </p>
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
            <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg">
              Explorar Catálogo Completo
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
                <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
                <li><a href="/catalog" className="hover:text-foreground transition-colors">Catálogo</a></li>
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
