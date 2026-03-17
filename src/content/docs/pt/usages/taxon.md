---
sidebar_position: 3
title: Registro de Táxon
---

## Visão geral

Você pode registrar um novo táxon manualmente ou importando um arquivo.

## Registrar um novo táxon

### Campos obrigatórios

- **Classe**: A classe do táxon.
- **Ordem**: A ordem do táxon.
- **Família**: A família do táxon.
- **Gênero**: O gênero do táxon.
- **Epíteto específico**: O epíteto específico do táxon.

### Campos opcionais

- **Autor**: O autor do táxon e o ano da publicação.
- **Nome comum**: O nome comum do táxon.
- **Categoria da Lista Vermelha da IUCN**: O status do táxon na Lista Vermelha da IUCN.
- **Status CITES**: O status CITES do táxon.
- **Status de conservação do país**: O status de conservação do táxon em um país específico.
- **Ordem de classificação**: Ordem arbitrária para classificar o táxon. É usado principalmente quando você exporta o registro. Por exemplo, você pode usar a ordem filogenética.
- **Notas**: Qualquer informação adicional sobre o táxon.

### Registro manual

1. Vá para o painel do projeto.
2. No painel de táxons, clique no botão `+ Adicionar táxon`.
3. Preencha as informações do táxon.

### Importar de arquivo

1. Prepare seu arquivo de importação. Os formatos preferidos são `.xlsx`, `.csv` e `.tsv`.
2. Vá para o painel do projeto.
3. No painel de táxons, clique no botão `Importar de arquivo`.
4. Use o botão `Selecionar arquivo` para adicionar o arquivo. O aplicativo mapeará automaticamente as colunas para os campos corretos.

Comportamento do delimitador:

- `.csv` usa vírgula.
- `.tsv` usa tabulação.
- Os arquivos do Excel são analisados como planilhas.
- Para outros tipos de arquivo, o NAHPU faz uma tentativa de análise de melhor esforço.
- Se uma extensão de arquivo não for reconhecida, a detecção automática tenta primeiro Excel, vírgula, tabulação e ponto e vírgula.
- Se a detecção automática ainda falhar, insira um delimitador bruto personalizado na substituição do analisador avançado.

Colunas de modelo de importação recomendadas:

- `class`, `Order`, `family`, `genus`, `epithet`, `scientific name`, `common name`
- Os campos de importação obrigatórios são `class`, `Order`, `family`, `genus` e `epithet`.
- A correspondência de cabeçalho é flexível, portanto, aliases como `taxonClass`, `taxonOrder`, `taxonFamily` e `specificEpithet` também são aceitos.

:::note
O melhor suporte é para `.xlsx`. Formatos mais antigos/outros do Excel podem falhar. Se necessário, salve novamente como `.xlsx`, `.csv` ou `.tsv`.
:::

## Editar um táxon

1. Vá para o painel do projeto.
2. No painel de táxons dentro do táxon registrado, clique no botão `Ver tudo`.
3. Clique no ícone de lápis para editar o táxon.