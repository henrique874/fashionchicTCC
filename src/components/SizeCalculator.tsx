import { useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SizeCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [recommendedSize, setRecommendedSize] = useState("");
  const [error, setError] = useState("");

  const calculateSize = () => {
    setError("");
    setRecommendedSize("");

    // Validação
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (!heightNum || heightNum < 140 || heightNum > 220) {
      setError("Por favor, insira uma altura válida entre 140 e 220 cm");
      return;
    }

    if (!weightNum || weightNum < 40 || weightNum > 150) {
      setError("Por favor, insira um peso válido entre 40 e 150 kg");
      return;
    }

    // Cálculo do IMC
    const heightInMeters = heightNum / 100;
    const imc = weightNum / (heightInMeters * heightInMeters);

    // Determinação do tamanho base
    let size = "";

    if (heightNum < 160 && imc < 20) {
      size = "PP";
    } else if (imc < 20) {
      size = "PP";
    } else if (imc >= 20 && imc < 23) {
      size = "P";
    } else if (imc >= 23 && imc < 26) {
      size = "M";
    } else if (imc >= 26 && imc < 29) {
      size = "G";
    } else {
      size = "GG";
    }

    // Ajuste por altura
    if (heightNum > 175) {
      if (size === "PP") size = "P";
      else if (size === "P") size = "M";
      else if (size === "M") size = "G";
      else if (size === "G") size = "GG";
      else if (size === "GG") size = "XG";
    }

    setRecommendedSize(size);
  };

  return (
    <div className="bg-beige-light rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-5 h-5 text-primary" />
        <h3 className="font-heading text-lg font-semibold">
          Descubra seu Tamanho
        </h3>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Insira sua altura e peso para receber uma recomendação personalizada
      </p>

      <div className="space-y-4">
        <div>
          <Label htmlFor="height">Altura (cm)</Label>
          <Input
            id="height"
            type="number"
            min="140"
            max="220"
            placeholder="Ex: 170"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="weight">Peso (kg)</Label>
          <Input
            id="weight"
            type="number"
            min="40"
            max="150"
            placeholder="Ex: 65"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1"
          />
        </div>

        <Button
          onClick={calculateSize}
          className="w-full bg-primary text-primary-foreground hover:bg-gold-hover"
        >
          Calcular Tamanho
        </Button>

        {error && (
          <div className="p-3 bg-destructive/10 text-destructive rounded-lg text-sm">
            {error}
          </div>
        )}

        {recommendedSize && (
          <div
            className="p-4 bg-primary/10 rounded-lg"
            role="status"
            aria-live="polite"
          >
            <p className="text-sm font-medium mb-2">Tamanho Recomendado:</p>
            <p className="text-2xl font-bold text-primary">{recommendedSize}</p>
            <p className="text-xs text-muted-foreground mt-2">
              Esta é uma recomendação estimada. Consulte a tabela de medidas
              abaixo para confirmação.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SizeCalculator;