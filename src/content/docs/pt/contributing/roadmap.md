---
sidebar_position: 2
title: "Roteiro de Desenvolvimento"
---

## Visão Geral

O desenvolvimento do NAHPU está centrado em três áreas principais: **eficiência**, **reprodutibilidade** e **inclusividade**. Inspirando-se no [Roteiro do Flutter](https://github.com/flutter/flutter/wiki/Roadmap), elaboramos um roteiro para orientar o desenvolvimento do NAHPU. Este roteiro delineia os principais recursos e aprimoramentos que pretendemos incorporar nos próximos lançamentos. Ele serve como um meio de manter a transparência com a comunidade e de coletar feedback sobre a trajetória do projeto. Como é o caso da maioria dos projetos de desenvolvimento de software, nosso roteiro é flexível e pode ser modificado com base no feedback e nos requisitos emergentes. Acolhemos de todo o coração as contribuições da comunidade para nos ajudar a realizar nossos objetivos.

## Foco do Desenvolvimento para o Ano de 2024

### Eficiência

Estamos no processo de incorporar mais código Rust na base de código do NAHPU. A integração do Rust com o Flutter não apenas aprimora o desempenho, mas também fornece uma experiência de usuário mais robusta. Além disso, o Rust possui uma biblioteca GIS de alta qualidade, que nos ajudará a aumentar as capacidades de processamento de dados espaciais do NAHPU.

Além disso, nos esforçaremos para aprimorar a qualidade e o desempenho do código, refatorando a base de código existente e otimizando o aplicativo para velocidade e uso de memória. Uma parte significativa do código do NAHPU requer documentação, e nos concentraremos em melhorar essa documentação para torná-la mais amigável ao desenvolvedor.

### Reprodutibilidade

Nosso objetivo principal é a implementação completa do padrão [Darwin Core](https://dwc.tdwg.org/) e dos [princípios FAIR](https://www.go-fair.org/fair-principles/). Isso aumentará a interoperabilidade e a reutilização dos dados do NAHPU. Também pretendemos aprimorar as capacidades de importação e exportação de dados do NAHPU, facilitando o compartilhamento e a colaboração dos usuários nos dados do aplicativo. A digitalização de QR/código de barras foi implementada no NAHPU, e planejamos aprimorar essas capacidades de digitalização. Um objetivo principal é simplificar o processo de inventário de espécimes, permitindo que os usuários digitalizem espécimes e preencham automaticamente o inventário após o trabalho de campo. Essa abordagem será integrada ao desenvolvimento de capacidades de impressão para etiquetas de espécimes.

### Inclusividade

O objetivo principal é expandir a localização do aplicativo, incorporando mais idiomas, tornando-o assim mais amigável para falantes não nativos de inglês. Além disso, estamos aprimorando a experiência para usuários com deficiência para tornar o NAHPU mais acessível e inclusivo. A versão atual permite que os usuários utilizem a entrada de voz por meio dos recursos de acessibilidade do sistema operacional. Planejamos implementar recursos adicionais, incluindo leitores de tela.
