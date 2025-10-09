import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SizeCalculator from "@/components/SizeCalculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Pants = () => {
  const pantsProducts = products.filter(
    (product) => product.type === "Calça" || product.type === "Bermuda" || product.type === "Shorts"
  );

  const femininePants = pantsProducts.filter((p) => p.category === "feminino");
  const masculinePants = pantsProducts.filter((p) => p.category === "masculino");

  return (
    <main className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Calças e Bermudas
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encontre o tamanho perfeito para você
          </p>
        </div>

        {/* Size Calculator */}
        <div className="max-w-2xl mx-auto mb-16">
          <SizeCalculator mode="pants" />
        </div>

        {/* Products */}
        <Tabs defaultValue="feminino" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="feminino">Feminino</TabsTrigger>
            <TabsTrigger value="masculino">Masculino</TabsTrigger>
          </TabsList>

          <TabsContent value="feminino">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {femininePants.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="masculino">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {masculinePants.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Pants;
