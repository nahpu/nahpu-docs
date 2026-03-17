---
title: NAHPU Dia 1
sidebar:
    label: NAHPU Dia 1
    order: 2
---
NAHPU é um aplicativo de catalogação baseado em projetos. Os dados são gerenciados e organizados com base em um projeto. Cada projeto pode ter várias pessoas, locais, narrativas, eventos de coleta e registros de espécimes. O aplicativo foi projetado para uso em campo, mas também pode ser usado no laboratório.

## Fluxo de Trabalho Típico

### 1. Crie um novo projeto

Use o botão `+` no canto inferior direito da tela inicial. O nome do projeto deve ter de 3 a 25 caracteres.

Você pode adicionar uma descrição do projeto. Isso é opcional, mas é útil para lembrar o propósito e o escopo do projeto.

Em seguida, selecione o formato principal do catálogo. O aplicativo atualmente suporta os formatos de catálogo de mamíferos e aves. Nós separamos os morcegos de outros mamíferos. O formato de morcego terá um campo de antebraço no formulário de medição. Você pode alterar o formato do catálogo posteriormente nas configurações do projeto. O NAHPU permite a catalogação de todos os grupos de táxons suportados no mesmo projeto.

Depois de criar um projeto, o aplicativo gera automaticamente um UUID de projeto. Este identificador exclusivo é usado em todo o banco de dados para distinguir registros de diferentes projetos. Usamos a [versão 4 do UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). É quase impossível que dois UUIDs colidam.

### 2. Adicione um novo pessoal

Você pode simplesmente navegar até o projeto e adicionar novo pessoal. Você precisa de pelo menos uma pessoa para assumir o papel de catalogador de cuidados com espécimes. Você pode adicionar mais pessoas com funções diferentes.

[Catalogador](./usages/personnel#cataloger) é responsável por catalogar o espécime. Em algumas instituições, isso pode ser chamado de coletor. No aplicativo, chamamos de coletor qualquer pessoa que colete o espécime, esteja ela envolvida na catalogação do aplicativo ou não. Sua inicial e número de campo serão usados para gerar o ID de campo na página do catálogo de espécimes. O nome deles também aparecerá sempre que o campo solicitar um nome de pessoal, como pessoal de coleta e preparador. O aplicativo não permite alterar a função de catalogador depois de criada.

[Apenas preparador](./usages/personnel#preparator-only) é uma pessoa que ajuda a preparar o espécime, mas não está envolvida no gerenciamento dos dados. Seus nomes não aparecerão no campo de catalogador da página de espécimes, mas em outro lugar, como nos campos `Preparador` e `Pessoal de coleta` na página de espécimes.

Para o outro pessoal não envolvido diretamente no cuidado com os espécimes, selecione [Nenhum](./usages/personnel#none) como sua função. Seus nomes aparecerão apenas no campo `Pessoal de coleta`.

### 3. Adicione um novo táxon

Você pode adicionar um táxon manualmente usando o botão adicionar táxon ou importar de um arquivo.

Os formatos preferidos são `.xlsx`, `.csv` e `.tsv`. O NAHPU fará uma tentativa de melhor esforço para analisar outros tipos de arquivo.

Para arquivos delimitados reconhecidos, o aplicativo seleciona delimitadores por extensão (`.csv` = vírgula, `.tsv` = tabulação). Para extensões não reconhecidas, a detecção automática tenta primeiro Excel, vírgula, tabulação e ponto e vírgula. Se isso falhar, use a substituição do analisador avançado e insira um delimitador bruto personalizado.

O melhor suporte é para `.xlsx`; formatos mais antigos/outros do Excel могут falhar.

Seu arquivo de importação requer todas estas colunas: `class`, `Order`, `family`, `genus`, `epithet`. Você também pode incluir `scientific name`, `common name` e `notes`. O aplicativo detectará automaticamente aliases de cabeçalho suportados (por exemplo, `taxonClass`, `taxonOrder`, `taxonFamily`, `specificEpithet`). Você pode selecionar manualmente o tipo de coluna usando o menu suspenso se o aplicativo não atribuir automaticamente a coluna certa para cada dado. Outras colunas serão ignoradas.

Tabela de importação de táxons de exemplo:

| class | Order | family | genus | epithet | scientific name | common name | notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mammalia | Rodentia | Muridae | Bunomys | coelestis | Bunomys coelestis | Rato-do-monte-celestial | |
| Mammalia | Rodentia | Muridae | Bunomys | penitus | Bunomys penitus | Rato-do-monte-do-interior | |

### 4. Crie um local

Para criar um novo local, use o botão `+` no canto superior direito do local. Preencha pelo menos o `ID do local`. O aplicativo limita o ID do local a 20 caracteres. Você se referirá a este ID em todo o campo de registro sempre que ele solicitar um local. Você pode torná-lo curto, mas descritivo. Muitas vezes rotulamos a cidade, vila ou aldeia do ID como ela é. Por exemplo, a cidade de Bogor será BOGOR. Por outro lado, a linha de armadilha geralmente usa um ID com a abreviação da localidade e `L` para indicar uma linha. Por exemplo, a linha 1 no Monte Gede-Pangrango será `GP-L1`.

### 5. Adicione uma narrativa

Para criar uma narrativa, use o botão `+` no canto superior direito da narrativa. Selecione a data e o ID do local. Em seguida, escreva a narrativa.

### 6. Adicione eventos de coleta

Os eventos de coleta ajudam você a acompanhar os esforços de coleta, o pessoal e os dados meteorológicos de cada evento. Os registros de espécimes se vinculam ao evento em vez do local. Dessa forma, você pode ter vários eventos de coleta em um único local.

Para criar um evento de coleta, use o botão `+` no canto superior direito do evento de coleta. Selecione `ID do local`, `data de início`, `hora de início`, `data de término` e `hora de término`. Em seguida, preencha o resto do formulário.

Ao contrário do local que você só criará cada vez que se mudar para um novo local, os eventos de coleta são criados para cada esforço de coleta. Por exemplo, ao estudar roedores noturnos, costumamos armar armadilhas na noite anterior e verificá-las no dia seguinte. Criaremos um evento de coleta depois de coletarmos o espécime. A data de início será um dia antes e a data de término será hoje.

O aplicativo combina o ID do local e a data de início para criar um ID exclusivo para cada evento de coleta. Por exemplo, `GP-L1-23 de março de 2023`. Você usará este ID para se referir ao evento de coleta no registro do espécime. Em alguns casos extremos em que você tem vários eventos de coleta em um único dia no mesmo local, você pode adicionar um sufixo ao ID. Por exemplo, `Linha1-26 de março de 2023-1` e `Linha1-26 de março de 2023-2`.

### 7. Adicione registros de espécimes

Para criar um registro de espécime, use o botão `+` no canto superior direito do registro de espécime. O ícone de registro de espécime na barra de navegação informa sobre o formato ativo atual. Ele gerará o formato correspondente para o catálogo atualmente ativo. A única diferença entre os diferentes formatos de catálogo são os campos de medição. Depois de criar um novo registro de espécime, preencha as informações relevantes. Repita o processo para os próximos espécimes.

:::tip
O NAHPU foi projetado para permitir que os coletores coletem diferentes táxons. Para a versão atual, você pode ter aves, morcegos e outros mamíferos no mesmo projeto. Altere o formato do catálogo na configuração ao adicionar um grupo de táxons diferente que difere do formato de catálogo atualmente ativo. O NAHPU gerará um formulário para esse grupo de táxons quando você criar um novo registro de espécime. Ao percorrer diferentes registros de espécimes. Você pode verificar qual formato de catálogo está na página atual olhando o ícone nas partes do espécime. O catálogo de mamíferos será uma `pata` e o de aves uma `cabeça de pássaro`.
:::

### 8. Exportando registros

Para exportar registros, vá para o menu do painel (indicado pelo ícone de hambúrguer/três linhas horizontais no canto superior esquerdo). Temos várias opções de exportação:

- Crie um relatório. Gere lista de espécies, mídia e coordenadas do local em formato delimitado (.csv ou .tsv).

- Agrupe projetos. Gere relatórios disponíveis (por exemplo, contagem de espécies), narrativas, locais, eventos de coleta e registros de espécimes. Todos eles estão em formato delimitado por vírgula (.csv). O aplicativo gerará um arquivo zip que contém todos os arquivos e mídia. Você pode usar esta opção para fazer backup de seus dados.

- Exporte registros. Você pode escolher quais registros exportar. Ele suporta a exportação em formato delimitado (.csv ou .tsv).

### 9. Fazendo backup do banco de dados

Para fazer backup do banco de dados, vá para o menu no painel e selecione o banco de dados de backup. Por padrão, o banco de dados será exportado como um arquivo sqlite3. Use o botão de alternância `incluir dados do projeto` para adicionar os dados do projeto ao backup. O aplicativo gerará um arquivo zip que contém o banco de dados e a mídia.

:::info
Fazer backup do banco de dados fará backup de todos os dados de todos os projetos nos aplicativos. Para versões futuras, o NAHPU aprimorará o pacote como um método de backup de dados.
:::
