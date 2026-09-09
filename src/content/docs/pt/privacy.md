---
title: Política de Privacidade
sidebar:
    label: Política de Privacidade
    order: 8
---

Última atualização: 9 de setembro de 2026

## Escopo e resumo

Esta Política de Privacidade abrange o aplicativo NAHPU em suas plataformas
compatíveis e o site do NAHPU em [nahpu.app](https://nahpu.app/). Ela não
abrange sites, aplicativos ou serviços de terceiros que você opte por abrir ou
usar a partir do NAHPU.

O NAHPU funciona sem uma conta. O projeto NAHPU não opera um serviço que receba
ou armazene seus registros de catálogo, e o aplicativo não inclui publicidade.
A equipe do NAHPU não usa seus registros para análise, publicidade,
rastreamento entre aplicativos ou marketing.

Seus registros e arquivos são armazenados localmente, a menos que você opte por
exportá-los, fazer backup ou compartilhá-los. Alguns recursos opcionais entram
em contato com serviços de terceiros. Essas conexões estão descritas abaixo.

## Informações que você fornece ou gera

O NAHPU pode armazenar informações que você insere, importa ou cria, incluindo:

- informações de projetos, pessoal e táxons, que podem incluir nomes, dados de
  contato, afiliações, identificadores ORCID, observações e fotografias do
  pessoal;
- locais, localidades precisas, coordenadas, eventos de coleta, notas de campo,
  observações ambientais e registros de espécimes ou amostras;
- fotografias, vídeos, gravações de áudio, arquivos associados e seus
  metadados; e
- configurações do aplicativo, campos personalizados, modelos, fontes,
  predefinições de exportação e camadas de mapas locais.

Você decide quais informações registrar. Registros de história natural podem
conter informações sensíveis, inclusive dados pessoais de contato e
localizações exatas de espécies vulneráveis. Revise os registros antes de
exportá-los ou compartilhá-los.

## Permissões do dispositivo e processamento local

O NAHPU solicita acesso ao dispositivo somente quando um recurso precisa dele:

- **Localização:** o NAHPU pode ler sua localização atual quando você solicita
  a adição de coordenadas. Os serviços de localização do dispositivo determinam
  a posição conforme as configurações do sistema operacional e da conta, e o
  NAHPU armazena localmente a coordenada retornada. Ele não rastreia
  continuamente sua localização nem cria um histórico de localização em
  segundo plano.
- **Câmera e fotos:** o NAHPU pode capturar fotografias ou vídeos, importar
  mídia e escanear códigos QR ou de barras. O acesso à câmera começa quando você
  abre um desses recursos.
- **Microfone:** o NAHPU pode gravar áudio e a faixa de áudio de vídeos quando
  você inicia uma gravação.
- **Arquivos e armazenamento:** o NAHPU pode importar arquivos e salvar
  exportações ou backups em um local que você selecionar.

A mídia importada é copiada para o armazenamento local do NAHPU. Os arquivos
originais podem conter metadados incorporados, incluindo data, câmera,
dispositivo ou localização. O NAHPU lê metadados selecionados de imagens, como
data de captura, câmera e lente, e informações de exposição; a cópia do
original pode manter outros metadados incorporados.

Você pode negar ou revogar permissões nas configurações do dispositivo. O
recurso relacionado pode não funcionar sem a permissão correspondente.

## Armazenamento local, backups e retenção

O NAHPU armazena banco de dados, mídia, arquivos associados, configurações,
modelos, fontes e mapas locais em um armazenamento gerenciado pelo aplicativo
no seu dispositivo. O sistema operacional protege esse armazenamento por meio
do isolamento de aplicativos e dos controles de segurança do dispositivo.

Seu sistema operacional ou um provedor de arquivos pode incluir dados ou
arquivos do aplicativo em um backup do dispositivo ou da nuvem, dependendo das
configurações do dispositivo e da conta. O NAHPU não controla esses serviços de
backup.

Os dados permanecem até que você os exclua no NAHPU, remova os arquivos
correspondentes ou desinstale o aplicativo, sujeito ao comportamento de backup
e restauração do sistema operacional. Exportações, backups, códigos QR e
arquivos compartilhados ou salvos fora do NAHPU permanecem onde você os colocou
e não são removidos quando você exclui o registro original ou o aplicativo.

## Mapas on-line

O NAHPU oferece um mapa-base off-line do Natural Earth e uma opção para não
mostrar mapa-base. Nenhuma das duas opções solicita estilos ou blocos a um
provedor de mapas on-line. No macOS e no Windows, o software que desenha o mapa
ainda é baixado de uma rede de distribuição de conteúdo, como descreve a seção
seguinte.

Se você selecionar um mapa-base on-line, o NAHPU solicita estilos e blocos de
mapa ao [OpenFreeMap](https://openfreemap.org/). O NAHPU não envia seus registros
de catálogo nem sua camada local de pontos ao OpenFreeMap. As solicitações de
mapa revelam a área e o nível de zoom dos blocos solicitados, e informações
normais de rede podem ficar visíveis para o OpenFreeMap, seus provedores de
hospedagem e intermediários de rede.

O OpenFreeMap declara que coleta informações anônimas de servidor, como tipo de
navegador ou cliente, páginas de referência, data e hora e sistema operacional.
Ele não registra endereços IP por padrão, mas pode registrá-los temporariamente
por até 30 dias durante um incidente de segurança. O OpenFreeMap pode usar a
Cloudflare como rede de distribuição de conteúdo. Consulte a [Política de
Privacidade do OpenFreeMap](https://openfreemap.org/privacy/) para conhecer suas
práticas atuais.

Para evitar solicitações a um provedor de mapas on-line, escolha `Natural Earth
(Offline)` ou `None` como mapa-base.

## Como os mapas são desenhados no macOS e no Windows

No Android e no iOS, o NAHPU desenha os mapas com um renderizador embutido no
aplicativo. No macOS e no Windows, ele os desenha dentro de uma visualização
web do sistema, e essa visualização baixa a biblioteca de renderização MapLibre
GL, sua folha de estilos e uma biblioteca auxiliar de leitura de blocos da rede
de distribuição de conteúdo [unpkg](https://unpkg.com/).

**Essa solicitação ocorre sempre que um mapa é desenhado nessas plataformas,
inclusive quando o mapa-base está definido como `Natural Earth (Offline)` ou
`None`**, porque a biblioteca de renderização precisa carregar antes que
qualquer mapa possa aparecer. A visualização web do seu sistema operacional
pode armazenar esses arquivos em cache, de modo que a solicitação não
necessariamente se repete a cada mapa.

A solicitação revela informações normais de rede, incluindo seu endereço IP,
ao unpkg e a seus provedores de hospedagem. Ela não inclui seus registros de
catálogo, suas coordenadas, suas camadas de mapa nem qualquer outra coisa sobre
o que o mapa mostra. O unpkg distribui arquivos do registro público do npm e
pode usar a Cloudflare como rede de distribuição de conteúdo.

Se a biblioteca de renderização não puder ser carregada, o NAHPU recorre ao
mapa embutido do Natural Earth, desenhado inteiramente no seu dispositivo.
Trabalhar off-line no macOS ou no Windows produz, portanto, um mapa sem
nenhuma solicitação de rede, após uma breve espera enquanto o NAHPU verifica
que a biblioteca está inacessível. No Linux, o mapa embutido é o único
renderizador e nenhuma biblioteca de renderização é solicitada.

Enquanto um mapa está na tela no macOS ou no Windows, o NAHPU também abre uma
conexão na interface de loopback do seu dispositivo (`127.0.0.1`), em uma porta
atribuída pelo sistema operacional, para que o aplicativo e a visualização web
troquem dados de mapa. Essa conexão permanece no seu dispositivo, não é
acessível a partir de outros dispositivos e não é usada para enviar nada para
fora dele.

## Escaneamento de códigos QR e de barras no Android

No Android, o NAHPU usa o Google ML Kit para reconhecer códigos QR e de barras.
As imagens da câmera, o conteúdo dos códigos e os resultados do reconhecimento
são processados no dispositivo e não são enviados ao Google pelo ML Kit.

O Google declara que o ML Kit pode entrar em contato com seus servidores para
obter correções, atualizações de modelos e informações de compatibilidade de
hardware. Ele também coleta informações limitadas do dispositivo e do
aplicativo, identificadores por instalação, configuração da API, métricas de
desempenho e métricas de uso da API para diagnóstico e análise de uso. O Google
declara que essas informações são criptografadas em trânsito e não são
compartilhadas com terceiros. Consulte os [Termos e privacidade do ML
Kit](https://developers.google.com/ml-kit/terms), a [divulgação de dados do ML
Kit para Android](https://developers.google.com/ml-kit/android-data-disclosure)
e a [Política de Privacidade do Google](https://policies.google.com/privacy?hl=pt-BR).

## Exportações, compartilhamento e links externos

O NAHPU exporta ou compartilha dados somente quando você inicia a ação. Quando
você usa a folha de compartilhamento do sistema, um seletor de arquivos, uma
unidade na nuvem, e-mail, aplicativo de mensagens ou outro destino, esse
provedor recebe as informações selecionadas e as trata de acordo com seus
próprios termos de privacidade.

O NAHPU também contém links iniciados pelo usuário para recursos como o site do
NAHPU, perfis ORCID e Google Fonts. Ao abrir um link, você é transferido para o
navegador ou outro aplicativo, cujas práticas de privacidade se aplicam. O
NAHPU não envia seus registros de catálogo ao abrir esses links.

## O site do NAHPU

O site do NAHPU em [nahpu.app](https://nahpu.app/), incluindo esta página e a
documentação, é um site estático publicado pelo GitHub Pages. Ele não instala
cookies de rastreamento, não contém publicidade, não incorpora conteúdo de
terceiros e não executa nenhum script de análise. Não recebemos registro de
quem o visita.

Como provedor de hospedagem, o GitHub recebe informações normais de rede em
cada solicitação, incluindo seu endereço IP, tipo de navegador e as páginas
solicitadas, e as usa para servir e proteger o site. Consulte a [Declaração de
Privacidade do
GitHub](https://docs.github.com/pt/site-policy/privacy-policies/github-privacy-statement)
para conhecer suas práticas. Seguir um link do site para outro site leva você
até ele, e as práticas de privacidade desse site passam a valer.

## Segurança

O NAHPU depende do isolamento de aplicativos, do sistema de permissões e da
segurança do dispositivo fornecidos pelo sistema operacional. Mantenha seguros
seu dispositivo, backups e arquivos exportados, especialmente quando contiverem
informações pessoais ou dados sensíveis de localidades. Nenhum método de
armazenamento ou transmissão pode ser garantido como completamente seguro.

## Suas escolhas e controle dos dados

Como o projeto NAHPU não mantém seus registros de catálogo em seus servidores,
você controla esses registros no seu dispositivo. Você pode:

- revisar, editar, exportar ou excluir registros no aplicativo;
- remover arquivos gerenciados pelo aplicativo ou desinstalar o NAHPU;
- revogar permissões de câmera, microfone, fotos, arquivos ou localização nas
  configurações do dispositivo;
- usar um mapa-base off-line ou nenhum mapa-base; e
- escolher se, onde e com quem compartilhar exportações e backups.

Para informações mantidas por um serviço de terceiros, entre em contato com o
provedor ou use os controles descritos na política de privacidade dele.

## Crianças

O NAHPU é uma ferramenta de campo e de coleções destinada ao trabalho de
pesquisa, ensino e curadoria, e não é dirigida a crianças. Destina-se a
usuários com 13 anos ou mais, ou à idade superior que seu país estabelecer para
o consentimento.

Não coletamos intencionalmente informações pessoais de crianças. O aplicativo
não tem conta, nem cadastro, nem serviço que pudesse receber essas informações.
Quando um estudante ou menor de idade usa o NAHPU em uma aula, um curso de
campo ou um projeto supervisionado, o adulto ou a instituição responsável pela
supervisão responde pelos registros inseridos e por qualquer permissão ou
consentimento que o projeto exija.

## Alterações nesta política

Podemos atualizar esta Política de Privacidade quando os recursos do NAHPU ou
os serviços de terceiros mudarem. A política atualizada será publicada nesta
página com uma data revisada.

## Fale conosco

Para perguntas ou sugestões sobre esta Política de Privacidade, entre em
contato pelo e-mail [support@nahpu.app](mailto:support@nahpu.app).
