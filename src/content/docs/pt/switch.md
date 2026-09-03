---
title: Transição para o NAHPU
sidebar:
  label: Transição para o NAHPU
  order: 4
---

O NAHPU é um catálogo de campo digital feito para coleções de história natural.
Ele substitui os catálogos de campo em papel, com ou sem formatação prévia, e os
aplicativos de formulários customizados sem código, como
[Claris FileMaker](https://www.claris.com/). Esta página os compara e descreve
como fazer a mudança.

## NAHPU comparado a um catálogo de campo em papel

| | Catálogo de campo em papel | NAHPU |
|---|---|---|
| Custo | Gasto contínuo com papel, tinta, fichários e armazenamento | Gratuito; funciona em um celular que você já tem. Um tablet dedicado custa cerca de 200 a 500 USD e dura uns cinco anos. Os catálogos ainda podem ser impressos quando uma cópia física é exigida. |
| Acesso | Levar o caderno de volta, digitalizar páginas ou redigitar em uma planilha | Abre em qualquer dispositivo e entrega aos colaboradores uma cópia exata. Instale o NAHPU no seu celular e importe os dados; o catálogo acompanha você o tempo todo. |
| Qualidade dos dados | Erros de entrada secundária na digitalização | Listas controladas e verificação de campos obrigatórios antes de sair do campo |
| Associações | O mesmo local reescrito em cada página | Registre um local uma vez e vincule-o a muitos registros, além de coordenadas GPS, imagens, vídeos e áudio |
| Backup | Fotografar ou redigitar cada página | Nuvem, pendrive ou outro dispositivo. Muitos pendrives são à prova d'água e de impacto |
| Localização dos dados | Leitura manual, sem filtros | Busca e filtragem, seguindo o [Darwin Core](https://dwc.tdwg.org/) e os [princípios FAIR](https://www.go-fair.org/) |
| Estatísticas | Contagem manual | Uma lista crescente de estatísticas resumidas, incluindo resumos de espécies, famílias e preservação por projeto e local, exportáveis para uma planilha. Métodos avançados de aprendizado de máquina estão sendo desenvolvidos para análises morfológicas no próprio dispositivo. |

## NAHPU comparado a um aplicativo de formulários customizado

Sair de um aplicativo de formulários é a transição mais fácil: os seus hábitos
de entrada de dados, backup e exportação continuam praticamente iguais.

| | Aplicativo de formulários customizado | NAHPU |
|---|---|---|
| Custo | Desenvolvimento e manutenção, muitas vezes com assinatura paga; veja a [página de preços](https://www.claris.com/pricing/) do FileMaker | Gratuito |
| Padrões | Varia conforme a implementação | A conformidade com o Darwin Core e os princípios FAIR é um objetivo do projeto |
| Abertura | Pode ser proprietário, com formatos proprietários | Código aberto, bibliotecas abertas, exportação para CSV e JSON e um banco de dados SQLite comum que você mesmo pode abrir |
| Dispositivos | O suporte a dispositivos depende da implementação | Celulares, tablets, notebooks e computadores de mesa, com a acessibilidade do Flutter e do Material Design |
| Estatísticas | Os relatórios de resumo precisam ser desenhados e mantidos como parte da implementação | Já incluídas: resumos de espécies, famílias e preservação por projeto e local, exportáveis para uma planilha |

## Planejar a transição

Escolha uma abordagem:

- **Gradual.** Use o NAHPU junto com o seu catálogo de campo em papel.
- **Direta.** Use o NAHPU como único catálogo, levando o papel como reserva.

Depois resolva três questões práticas:

| Pergunta | O que considerar |
|---|---|
| Qual dispositivo? | Celulares, tablets, notebooks e computadores de mesa funcionam. Comece pelo celular; um tablet com teclado Bluetooth oferece uma experiência melhor se o orçamento permitir. Consulte [Requisitos de Dispositivos](../usages/devices). |
| Como são as condições de campo? | O NAHPU é feito para locais remotos sem internet. Avalie durabilidade e energia: celulares recentes costumam ser resistentes à água e ao pó, tablets e notebooks geralmente precisam de uma capa robusta, e um power bank de 20.000 a 25.000 mAh cobre cerca de uma semana em um celular ou tablet. |
| Como você vai fazer backup? | Um pendrive, USB-C ou com adaptador, é o básico. Um backup cruzado no dispositivo de um colega de equipe acrescenta redundância. Serviços de nuvem como Google Drive ou Dropbox funcionam onde há conexão, mas exigem o próprio aplicativo e conta no dispositivo. |
