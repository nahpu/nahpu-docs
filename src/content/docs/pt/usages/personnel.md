---
sidebar_position: 3
title: Pessoal
---

## Adicionando novo pessoal

Use o botão `Adicionar novo pessoal` para adicionar novo pessoal. Você será solicitado a inserir as informações abaixo. O aplicativo, por padrão, mostra apenas informações críticas. Clique no botão `Mostrar mais` para mostrar todos os campos.

- **Nome (obrigatório)** - O nome do pessoal.
- **E-mail** - O e-mail do pessoal.
- **Telefone** - O número de telefone do pessoal.
- **Afiliação** - A instituição do pessoal.
- **Função de cuidado de espécimes (obrigatório)** - A função do pessoal no cuidado dos espécimes. Consulte [Terminologia](./personnel#terminology) para obter mais informações.
- **Iniciais de campo (obrigatório se a função de cuidado de espécimes for `Catalogador`)** - As iniciais do pessoal.
- **Número de campo (obrigatório se a função de cuidado de espécimes for `Catalogador`)** - O número de campo do pessoal. A inicial e o número serão usados para o ID de campo. O aplicativo incrementa automaticamente o número cada vez que você cria um novo espécime. Por exemplo, se a inicial de campo for `ABC` e o número de campo for `1`, o primeiro espécime terá o ID de campo `ABC1`. O segundo espécime terá o ID de campo `ABC2` e assim por diante.
- **Notas** - Quaisquer notas sobre o pessoal.

> **Importante:** Algumas instituições podem usar uma combinação de ID de projeto e número para o ID de campo. Use este ID como a inicial, em vez de colocar a inicial real da pessoa. Por exemplo, `ABC-1`. Neste caso, você pode inserir `ABC-` como a inicial de campo e `1` como o número de campo.

## Editando informações da pessoa

No painel, clique/toque no botão de menu (ícone de três pontos) para o nome da pessoa para a qual você deseja editar as informações e selecione editar. Você será levado para a página de pessoal, onde poderá editar as informações.

## Terminologia

### Catalogador

Uma pessoa que cria e edita registros no catálogo. Isso inclui a criação de novos registros, a edição de registros existentes e a exclusão de registros. Uma função de `catalogador` requer sua inicial de campo e seu número de campo.

### Apenas preparador

Uma pessoa que ajuda a preparar os espécimes, mas não cria ou edita registros no catálogo.

### Nenhum

No campo de função de cuidado de espécimes, isso significa que a pessoa não tem uma função no cuidado do espécime. Isso pode ser um guia de campo, um motorista ou qualquer outra pessoa que apoie a coleta de dados, mas não tenha uma função no cuidado dos espécimes.
