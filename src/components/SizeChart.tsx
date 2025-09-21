const SizeChart = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <caption className="text-left font-heading text-lg font-semibold mb-4">
          Tabela de Medidas
        </caption>
        
        {/* Feminino */}
        <thead>
          <tr className="bg-muted">
            <th colSpan={5} className="text-left p-3 font-semibold">
              Feminino - Medidas em cm
            </th>
          </tr>
          <tr className="border-b">
            <th className="text-left p-3 font-medium">Tamanho</th>
            <th className="text-center p-3 font-medium">Busto</th>
            <th className="text-center p-3 font-medium">Cintura</th>
            <th className="text-center p-3 font-medium">Quadril</th>
            <th className="text-center p-3 font-medium">Comprimento</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-muted/50">
            <td className="p-3 font-medium">PP (34-36)</td>
            <td className="text-center p-3">82-86</td>
            <td className="text-center p-3">62-66</td>
            <td className="text-center p-3">88-92</td>
            <td className="text-center p-3">85</td>
          </tr>
          <tr className="border-b hover:bg-muted/50">
            <td className="p-3 font-medium">P (38)</td>
            <td className="text-center p-3">86-90</td>
            <td className="text-center p-3">66-70</td>
            <td className="text-center p-3">92-96</td>
            <td className="text-center p-3">87</td>
          </tr>
          <tr className="border-b hover:bg-muted/50">
            <td className="p-3 font-medium">M (40)</td>
            <td className="text-center p-3">90-94</td>
            <td className="text-center p-3">70-74</td>
            <td className="text-center p-3">96-100</td>
            <td className="text-center p-3">89</td>
          </tr>
          <tr className="border-b hover:bg-muted/50">
            <td className="p-3 font-medium">G (42)</td>
            <td className="text-center p-3">94-98</td>
            <td className="text-center p-3">74-78</td>
            <td className="text-center p-3">100-104</td>
            <td className="text-center p-3">91</td>
          </tr>
          <tr className="border-b hover:bg-muted/50">
            <td className="p-3 font-medium">GG (44)</td>
            <td className="text-center p-3">98-102</td>
            <td className="text-center p-3">78-82</td>
            <td className="text-center p-3">104-108</td>
            <td className="text-center p-3">93</td>
          </tr>
        </tbody>

        {/* Masculino */}
        <thead>
          <tr className="bg-muted">
            <th colSpan={5} className="text-left p-3 font-semibold">
              Masculino - Medidas em cm
            </th>
          </tr>
          <tr className="border-b">
            <th className="text-left p-3 font-medium">Tamanho</th>
            <th className="text-center p-3 font-medium">Tórax</th>
            <th className="text-center p-3 font-medium">Cintura</th>
            <th className="text-center p-3 font-medium">Quadril</th>
            <th className="text-center p-3 font-medium">Comprimento</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-muted/50">
            <td className="p-3 font-medium">P</td>
            <td className="text-center p-3">92-96</td>
            <td className="text-center p-3">76-80</td>
            <td className="text-center p-3">92-96</td>
            <td className="text-center p-3">70</td>
          </tr>
          <tr className="border-b hover:bg-muted/50">
            <td className="p-3 font-medium">M</td>
            <td className="text-center p-3">96-100</td>
            <td className="text-center p-3">80-84</td>
            <td className="text-center p-3">96-100</td>
            <td className="text-center p-3">72</td>
          </tr>
          <tr className="border-b hover:bg-muted/50">
            <td className="p-3 font-medium">G</td>
            <td className="text-center p-3">100-104</td>
            <td className="text-center p-3">84-88</td>
            <td className="text-center p-3">100-104</td>
            <td className="text-center p-3">74</td>
          </tr>
          <tr className="border-b hover:bg-muted/50">
            <td className="p-3 font-medium">GG</td>
            <td className="text-center p-3">104-108</td>
            <td className="text-center p-3">88-92</td>
            <td className="text-center p-3">104-108</td>
            <td className="text-center p-3">76</td>
          </tr>
          <tr className="border-b hover:bg-muted/50">
            <td className="p-3 font-medium">XG</td>
            <td className="text-center p-3">108-112</td>
            <td className="text-center p-3">92-96</td>
            <td className="text-center p-3">108-112</td>
            <td className="text-center p-3">78</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4 p-4 bg-beige-light rounded-lg">
        <h4 className="font-semibold text-sm mb-2">Como tirar suas medidas:</h4>
        <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
          <li><strong>Busto/Tórax:</strong> Meça ao redor da parte mais larga do peito</li>
          <li><strong>Cintura:</strong> Meça na parte mais estreita da cintura</li>
          <li><strong>Quadril:</strong> Meça ao redor da parte mais larga dos quadris</li>
          <li><strong>Comprimento:</strong> Meça do ombro até a barra desejada</li>
        </ul>
      </div>
    </div>
  );
};

export default SizeChart;