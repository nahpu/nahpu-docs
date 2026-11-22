export type Locale = "en" | "pt" | "es" | "id";

export type DiagramKind =
  | "lifecycle"
  | "setup"
  | "merge"
  | "georef"
  | "specimen"
  | "backup"
  | "export"
  | "power";

export interface LifecycleStrings {
  label: string;
  caption: string;
  phases: {
    step: string;
    title: string;
    pages: { name: string; href: string; note: string }[];
  }[];
}

export interface SetupStrings {
  label: string;
  caption: string;
  leadBadge: string;
  leadTitle: string;
  leadSteps: string[];
  transferTitle: string;
  transferItems: string[];
  separateNote: string;
  teamBadge: string;
  teamTitle: string;
  teamSteps: string[];
}

export interface MergeStrings {
  label: string;
  caption: string;
  hubBadge: string;
  hubTitle: string;
  hubItems: string[];
  spokeBadge: string;
  spokeTitle: string;
  spokeItems: string[];
  outArrow: string;
  inArrow: string;
  mergeTitle: string;
  mergeSteps: string[];
}

export interface GeorefStrings {
  label: string;
  caption: string;
  leftTitle: string;
  leftSub: string;
  decimals: { places: string; example: string; distance: string; note: string }[];
  rightTitle: string;
  rightSub: string;
  pointLabel: string;
  uncertaintyLabel: string;
  uncertaintySub: string;
  extentLabel: string;
  extentSub: string;
  combinedLabel: string;
  combinedWarning: string;
}

export interface SpecimenStrings {
  label: string;
  caption: string;
  centerBadge: string;
  centerTitle: string;
  centerSub: string;
  branches: {
    tone: "forest" | "moss" | "mist" | "gold";
    title: string;
    rule: string;
    chips: string[];
  }[];
}

export interface BackupStrings {
  label: string;
  caption: string;
  cadenceTitle: string;
  tiers: {
    tone: "forest" | "moss" | "mist";
    when: string;
    action: string;
    format: string;
    scope: string;
  }[];
  ruleTitle: string;
  ruleSub: string;
  copies: { badge: string; title: string; detail: string }[];
}

export interface ExportStrings {
  label: string;
  caption: string;
  headers: [string, string, string, string];
  rows: {
    need: string;
    action: string;
    format: string;
    reimport: string;
    reimportYes: boolean;
  }[];
}

export interface PowerStrings {
  label: string;
  caption: string;
  powerTitle: string;
  powerSub: string;
  ratedLabel: string;
  usableLabel: string;
  lossLabel: string;
  tabletLabel: string;
  resultLabel: string;
  tempTitle: string;
  tempSub: string;
  zones: { range: string; label: string; tone: "cold" | "safe" | "warm" | "danger" }[];
  tempNote: string;
}

export interface BestPracticeStrings {
  lifecycle: LifecycleStrings;
  setup: SetupStrings;
  merge: MergeStrings;
  georef: GeorefStrings;
  specimen: SpecimenStrings;
  backup: BackupStrings;
  export: ExportStrings;
  power: PowerStrings;
}

const en: BestPracticeStrings = {
  lifecycle: {
    label: "Field season lifecycle mapped to the seven NAHPU best practice guides",
    caption: "Each guide focuses on one stage of a field season, from pre-departure setup to museum curation.",
    phases: [
      {
        step: "1 · Before departure",
        title: "Prepare & align",
        pages: [
          { name: "App Setup", href: "/en/best-practices/app-setup/", note: "One config, shared resources, offline rehearsal" },
          { name: "Device Choice & Care", href: "/en/best-practices/device-care/", note: "Hardware, power budget, thermal care" },
          { name: "Project Management", href: "/en/best-practices/project-management/", note: "Workflow, Field IDs, source of truth" },
        ],
      },
      {
        step: "2 · In the field",
        title: "Record with context",
        pages: [
          { name: "Data Collection", href: "/en/best-practices/data-collection/", note: "Sites, georeferencing, events, narratives" },
          { name: "Specimens, Parts & Media", href: "/en/best-practices/specimen-records/", note: "IDs, measurements, tissues, symbionts, photos" },
        ],
      },
      {
        step: "3 · Every day & handoff",
        title: "Protect & combine",
        pages: [
          { name: "Backups & Recovery", href: "/en/best-practices/backups-and-recovery/", note: "Daily project exports, weekly DB backups, 3-2-1" },
          { name: "Project Management", href: "/en/best-practices/project-management/#manage-contributions", note: "Handoffs and reviewed merges" },
        ],
      },
      {
        step: "4 · Back at the museum",
        title: "Curate & share",
        pages: [
          { name: "Data Management & Curation", href: "/en/best-practices/data-management/", note: "Record review, tissue boxes, exports, labels" },
        ],
      },
    ],
  },
  setup: {
    label: "How one maintainer configures NAHPU and distributes settings and project identity to the team",
    caption: "Configure once on a lead device, share the user-config file and project identity, then rehearse offline on every device.",
    leadBadge: "1 · One maintainer",
    leadTitle: "Configure once",
    leadSteps: [
      "Run Setup NAHPU (format, IDs, vocabularies, presets)",
      "Add custom fields, print templates, and offline maps",
      "Create the project and add core personnel & taxa",
    ],
    transferTitle: "2 · Share before departure",
    transferItems: [
      "user_configs.json (via Export user configs)",
      "Project QR or project-info JSON (shared UUID)",
      "Site / Event / Taxon QR or JSON (if shared)",
    ],
    separateNote: "Transfer custom fonts and template images separately",
    teamBadge: "3 · Every team device",
    teamTitle: "Import & rehearse",
    teamSteps: [
      "Select Import user configs on Setup NAHPU Welcome",
      "Scan project QR or import project-info JSON",
      "Run an offline practice record, export, and restore check",
    ],
  },
  merge: {
    label: "Hub-and-spoke workflow with one authoritative device and reviewed project merges",
    caption: "One authoritative device owns shared definitions and runs Merge project; NAHPU never syncs silently in the background.",
    hubBadge: "Authoritative device",
    hubTitle: "Single source of truth",
    hubItems: [
      "Master taxa, personnel, and custom fields",
      "Shared sites & events (Workflow A)",
      "Reviews and runs every Merge project",
    ],
    spokeBadge: "Team devices",
    spokeTitle: "Parallel field entry",
    spokeItems: [
      "Import shared project UUID + configs",
      "Catalog on own Field ID series",
      "Own sites & events if separate lines (Workflow B)",
    ],
    outArrow: "Configs, Project UUID & shared records",
    inArrow: "Export project (TAR.GZ / ZIP)",
    mergeTitle: "Reviewed merge on authoritative device",
    mergeSteps: [
      "1. Back up database",
      "2. Review UUID & section conflicts",
      "3. Atomic commit + log handoff in Narrative",
    ],
  },
  georef: {
    label: "Coordinate decimal precision scale and how coordinate uncertainty and specimen extent combine",
    caption: "Keep every decimal from the GPS, widen uncertainty to at least twice the reported accuracy, and avoid counting extent twice.",
    leftTitle: "Decimal precision on the ground",
    leftSub: "Truncating decimals discards accuracy permanently",
    decimals: [
      { places: "5 dec", example: "0.00001°", distance: "~1.1 m", note: "Handheld GPS" },
      { places: "4 dec", example: "0.0001°", distance: "~11 m", note: "Single tree / trap" },
      { places: "3 dec", example: "0.001°", distance: "~111 m", note: "Small ridge" },
      { places: "2 dec", example: "0.01°", distance: "~1.1 km", note: "Wider than a trap line" },
    ],
    rightTitle: "Uncertainty vs. specimen extent",
    rightSub: "NAHPU adds both when exporting to Darwin Core",
    pointLabel: "Recorded point",
    uncertaintyLabel: "Uncertainty (m)",
    uncertaintySub: "≥ 2× GPS accuracy (or 30 m default)",
    extentLabel: "+ Coordinate extent (m)",
    extentSub: "Collecting area around the point",
    combinedLabel: "dwc:coordinateUncertaintyInMeters",
    combinedWarning: "Do not include the same area in both fields",
  },
  specimen: {
    label: "Anatomy of an extended specimen record in NAHPU",
    caption: "Keep identifications, measurements, parts, symbionts, and media linked to the voucher while field context is still fresh.",
    centerBadge: "Voucher",
    centerTitle: "Specimen record",
    centerSub: "Field ID · UUID · Event · Coordinate",
    branches: [
      {
        tone: "forest",
        title: "Identification",
        rule: "Never guess a species name to fill a blank; use a higher rank when uncertain.",
        chips: ["Confidence", "Determiner", "Method"],
      },
      {
        tone: "moss",
        title: "Measurements",
        rule: "Zero is a measurement; leave unmeasured traits blank and note damage.",
        chips: ["Displayed units", "Blank ≠ 0", "Remarks"],
      },
      {
        tone: "mist",
        title: "Parts & tissues",
        rule: "Log fresh-tissue timing and tube IDs at the prep table, not from memory.",
        chips: ["Tissue ID / Barcode", "Time taken & PMI", "Preparator"],
      },
      {
        tone: "gold",
        title: "Symbionts & media",
        rule: "Record Examined: Yes / Detected: No for clean hosts; include scale & Field ID in photos.",
        chips: ["Negative data", "Scale bar", "Copy vs. link"],
      },
    ],
  },
  backup: {
    label: "Two backup levels in NAHPU and the 3-2-1 copy rule for fieldwork",
    caption: "Match the backup to the job: fast project exports daily, full database backups weekly and before merges, and 3-2-1 copies off the device.",
    cadenceTitle: "Match the backup to the job",
    tiers: [
      {
        tone: "forest",
        when: "End of each field day",
        action: "Export project",
        format: "TAR.GZ / ZIP (or JSON.GZ light)",
        scope: "One project + available media · fast & light on battery",
      },
      {
        tone: "moss",
        when: "Weekly & before every merge",
        action: "Backup database",
        format: "Full installation archive",
        scope: "All projects, configs, presets, fonts, maps, and files",
      },
    ],
    ruleTitle: "Apply the 3-2-1 rule",
    ruleSub: "At least 3 copies · on 2 different media · with 1 off-device",
    copies: [
      { badge: "Copy 1", title: "Recording device", detail: "Active tablet or phone in camp" },
      { badge: "Copy 2", title: "Second local medium", detail: "USB-C flash drive or fallback phone" },
      { badge: "Copy 3", title: "Off-device / off-site", detail: "Cloud upload (verified) or separate bag" },
    ],
  },
  export: {
    label: "Decision guide for choosing the right NAHPU export or backup format",
    caption: "Only project exports, NAHPU Data Packages, and database backups can restore a NAHPU project.",
    headers: ["What you need", "Use in NAHPU", "Output", "Re-imports?"],
    rows: [
      { need: "Spreadsheet review or analysis", action: "Export records", format: "CSV / TSV / Excel", reimport: "No", reimportYes: false },
      { need: "Move or merge a project", action: "Export project", format: "TAR.GZ / ZIP / JSON.GZ", reimport: "Yes", reimportYes: true },
      { need: "Publish to GBIF or museum portal", action: "Bundle records (DwC)", format: ".dwca.zip / .dwc-dp.tar.gz", reimport: "No", reimportYes: false },
      { need: "Complete archive + R/Python + custom fields", action: "Bundle records (NAHPU DP)", format: ".nahpu-dp.tar.gz / .zip", reimport: "Yes", reimportYes: true },
      { need: "Rebuild an entire device", action: "Backup database", format: "Installation archive", reimport: "Full restore", reimportYes: true },
      { need: "Voucher tags, tissue labels, catalogs", action: "Export documents", format: "PDF", reimport: "No", reimportYes: false },
    ],
  },
  power: {
    label: "Power bank usable recharge budget and lithium-ion operating temperature limits",
    caption: "Plan recharges from ~60% usable power bank capacity and keep batteries out of freezing charging and direct sun.",
    powerTitle: "Usable power bank budget",
    powerSub: "Example: 25,000 mAh bank → 5,124 mAh small tablet",
    ratedLabel: "25,000 mAh rated",
    usableLabel: "15,000 mAh usable (~60%)",
    lossLabel: "~40% heat & conversion loss",
    tabletLabel: "≈ 2.9 full charges",
    resultLabel: "× ~5 days/charge ≈ 15 days per bank (2 banks ≈ 1 month)",
    tempTitle: "Lithium-ion temperature limits",
    tempSub: "Apple & Samsung phone/tablet ratings",
    zones: [
      { range: "Below 0 °C", label: "Never charge · warm inside pack first", tone: "cold" },
      { range: "0 °C – 35 °C", label: "Safe operating & charging range", tone: "safe" },
      { range: "35 °C – 45 °C", label: "Storage only · cool before charging", tone: "warm" },
      { range: "Hot sun / skin", label: "Degrades cells · never sleep with a bank", tone: "danger" },
    ],
    tempNote: "Storage limit: −20 °C to 45 °C (−4 to 113 °F)",
  },
};

const pt: BestPracticeStrings = {
  lifecycle: {
    label: "Ciclo de uma temporada de campo mapeado para os sete guias de práticas recomendadas do NAHPU",
    caption: "Cada guia cobre uma etapa da expedição, da configuração antes da saída à curadoria no museu.",
    phases: [
      {
        step: "1 · Antes da partida",
        title: "Preparar e alinhar",
        pages: [
          { name: "Configuração do aplicativo", href: "/pt/best-practices/app-setup/", note: "Configuração única, recursos compartilhados, ensaio offline" },
          { name: "Escolha e cuidado de dispositivos", href: "/pt/best-practices/device-care/", note: "Hardware, orçamento de energia, cuidado térmico" },
          { name: "Gerenciamento de projetos", href: "/pt/best-practices/project-management/", note: "Fluxo de trabalho, Field IDs, fonte de verdade" },
        ],
      },
      {
        step: "2 · Em campo",
        title: "Registrar com contexto",
        pages: [
          { name: "Coleta de dados", href: "/pt/best-practices/data-collection/", note: "Locais, georreferenciamento, eventos, narrativas" },
          { name: "Espécimes, partes e mídia", href: "/pt/best-practices/specimen-records/", note: "IDs, medições, tecidos, simbiontes, fotos" },
        ],
      },
      {
        step: "3 · Diariamente e nas entregas",
        title: "Proteger e combinar",
        pages: [
          { name: "Backups e recuperação", href: "/pt/best-practices/backups-and-recovery/", note: "Exportações diárias, backups semanais, regra 3-2-1" },
          { name: "Gerenciamento de projetos", href: "/pt/best-practices/project-management/#gerenciar-contribuicoes", note: "Entregas e mesclagens revisadas" },
        ],
      },
      {
        step: "4 · De volta ao museu",
        title: "Curar e compartilhar",
        pages: [
          { name: "Gestão de dados e curadoria", href: "/pt/best-practices/data-management/", note: "Revisão de registros, caixas de tecido, exportações, etiquetas" },
        ],
      },
    ],
  },
  setup: {
    label: "Como um mantenedor configura o NAHPU e distribui configurações e identidade do projeto para a equipe",
    caption: "Configure uma vez no dispositivo líder, compartilhe as configurações e a identidade do projeto e ensaie offline em cada dispositivo.",
    leadBadge: "1 · Um mantenedor",
    leadTitle: "Configurar uma vez",
    leadSteps: [
      "Execute Setup NAHPU (formato, IDs, vocabulários, presets)",
      "Adicione campos personalizados, modelos e mapas offline",
      "Crie o projeto e adicione pessoal e táxons principais",
    ],
    transferTitle: "2 · Compartilhar antes da saída",
    transferItems: [
      "user_configs.json (via Export user configs)",
      "QR do projeto ou JSON de informações (UUID compartilhado)",
      "QR ou JSON de Local / Evento / Táxon (se compartilhados)",
    ],
    separateNote: "Transfira fontes personalizadas e imagens de modelo separadamente",
    teamBadge: "3 · Cada dispositivo da equipe",
    teamTitle: "Importar e ensaiar",
    teamSteps: [
      "Selecione Import user configs em Setup NAHPU Welcome",
      "Escaneie o QR do projeto ou importe o JSON",
      "Teste um registro offline, uma exportação e uma restauração",
    ],
  },
  merge: {
    label: "Fluxo em estrela com um dispositivo autoritativo e mesclagens revisadas de projeto",
    caption: "Um dispositivo autoritativo mantém as definições compartilhadas e executa Merge project; o NAHPU nunca sincroniza em segundo plano.",
    hubBadge: "Dispositivo autoritativo",
    hubTitle: "Fonte única de verdade",
    hubItems: [
      "Lista mestre de táxons, pessoal e campos personalizados",
      "Locais e eventos compartilhados (Fluxo A)",
      "Revisa e executa cada Merge project",
    ],
    spokeBadge: "Dispositivos da equipe",
    spokeTitle: "Coleta paralela em campo",
    spokeItems: [
      "Importam o UUID do projeto e as configurações",
      "Catalogam na própria série de Field ID",
      "Criam locais/eventos próprios em linhas separadas (Fluxo B)",
    ],
    outArrow: "Configurações, UUID e registros compartilhados",
    inArrow: "Export project (TAR.GZ / ZIP)",
    mergeTitle: "Mesclagem revisada no dispositivo autoritativo",
    mergeSteps: [
      "1. Fazer backup do banco",
      "2. Revisar conflitos de UUID e seções",
      "3. Gravação atômica + registrar na Narrativa",
    ],
  },
  georef: {
    label: "Escala de precisão decimal de coordenadas e combinação entre incerteza e extensão do espécime",
    caption: "Mantenha todas as casas decimais do GPS, amplie a incerteza para ao menos o dobro da acurácia informada e evite contar a extensão duas vezes.",
    leftTitle: "Precisão decimal no terreno",
    leftSub: "Truncar decimais descarta precisão para sempre",
    decimals: [
      { places: "5 dec", example: "0,00001°", distance: "~1,1 m", note: "GPS portátil" },
      { places: "4 dec", example: "0,0001°", distance: "~11 m", note: "Árvore / armadilha" },
      { places: "3 dec", example: "0,001°", distance: "~111 m", note: "Trecho de crista" },
      { places: "2 dec", example: "0,01°", distance: "~1,1 km", note: "Maior que a linha" },
    ],
    rightTitle: "Incerteza vs. extensão do espécime",
    rightSub: "O NAHPU soma ambas ao exportar para Darwin Core",
    pointLabel: "Ponto registrado",
    uncertaintyLabel: "Uncertainty (m)",
    uncertaintySub: "≥ 2× acurácia do GPS (ou 30 m padrão)",
    extentLabel: "+ Coordinate extent (m)",
    extentSub: "Área de coleta ao redor do ponto",
    combinedLabel: "dwc:coordinateUncertaintyInMeters",
    combinedWarning: "Não inclua a mesma área nos dois campos",
  },
  specimen: {
    label: "Anatomia de um registro de espécime estendido no NAHPU",
    caption: "Mantenha identificações, medições, partes, simbiontes e mídia vinculados ao testemunho enquanto o contexto de campo está fresco.",
    centerBadge: "Testemunho",
    centerTitle: "Registro de espécime",
    centerSub: "Field ID · UUID · Evento · Coordenada",
    branches: [
      {
        tone: "forest",
        title: "Identificação",
        rule: "Nunca adivinhe uma espécie para preencher um campo; use uma categoria superior.",
        chips: ["Confiança", "Determinador", "Método"],
      },
      {
        tone: "moss",
        title: "Medições",
        rule: "Zero é uma medida; deixe traços não medidos em branco e anote danos.",
        chips: ["Unidades exibidas", "Vazio ≠ 0", "Observações"],
      },
      {
        tone: "mist",
        title: "Partes e tecidos",
        rule: "Registre hora da coleta e IDs dos tubos na bancada, não de memória.",
        chips: ["Tissue ID / Código", "Time taken e PMI", "Preparador"],
      },
      {
        tone: "gold",
        title: "Simbiontes e mídia",
        rule: "Registre Examined: Yes / Detected: No em hospedeiros limpos; inclua escala e Field ID nas fotos.",
        chips: ["Dado negativo", "Escala", "Copiar vs. vincular"],
      },
    ],
  },
  backup: {
    label: "Dois níveis de backup no NAHPU e a regra 3-2-1 para trabalho de campo",
    caption: "Combine o backup com a tarefa: exportações diárias do projeto, backups completos semanais e antes de mesclagens, e cópias 3-2-1 fora do dispositivo.",
    cadenceTitle: "Combine o backup com a tarefa",
    tiers: [
      {
        tone: "forest",
        when: "Fim de cada dia de campo",
        action: "Export project",
        format: "TAR.GZ / ZIP (ou JSON.GZ leve)",
        scope: "Um projeto + mídia disponível · rápido e leve na bateria",
      },
      {
        tone: "moss",
        when: "Semanalmente e antes de mesclar",
        action: "Backup database",
        format: "Arquivo completo da instalação",
        scope: "Todos os projetos, configs, presets, fontes, mapas e arquivos",
      },
    ],
    ruleTitle: "Aplique a regra 3-2-1",
    ruleSub: "Pelo menos 3 cópias · em 2 mídias diferentes · sendo 1 fora do dispositivo",
    copies: [
      { badge: "Cópia 1", title: "Dispositivo de coleta", detail: "Tablet ou celular ativo no acampamento" },
      { badge: "Cópia 2", title: "Segunda mídia local", detail: "Pendrive USB-C ou celular reserva" },
      { badge: "Cópia 3", title: "Fora do dispositivo", detail: "Nuvem (verificada) ou mochila separada" },
    ],
  },
  export: {
    label: "Guia de decisão para escolher o formato certo de exportação ou backup no NAHPU",
    caption: "Apenas exportações de projeto, NAHPU Data Packages e backups de banco restauram um projeto no NAHPU.",
    headers: ["O que você precisa", "Usar no NAHPU", "Saída", "Reimporta?"],
    rows: [
      { need: "Revisão em planilha ou análise", action: "Export records", format: "CSV / TSV / Excel", reimport: "Não", reimportYes: false },
      { need: "Mover ou mesclar um projeto", action: "Export project", format: "TAR.GZ / ZIP / JSON.GZ", reimport: "Sim", reimportYes: true },
      { need: "Publicar no GBIF ou portal de museu", action: "Bundle records (DwC)", format: ".dwca.zip / .dwc-dp.tar.gz", reimport: "Não", reimportYes: false },
      { need: "Arquivo completo + R/Python + campos custom", action: "Bundle records (NAHPU DP)", format: ".nahpu-dp.tar.gz / .zip", reimport: "Sim", reimportYes: true },
      { need: "Reconstruir um dispositivo inteiro", action: "Backup database", format: "Arquivo da instalação", reimport: "Restauração total", reimportYes: true },
      { need: "Etiquetas de testemunho, tecidos, catálogos", action: "Export documents", format: "PDF", reimport: "Não", reimportYes: false },
    ],
  },
  power: {
    label: "Orçamento de recarga útil de power bank e limites térmicos de baterias de íon-lítio",
    caption: "Calcule recargas com ~60% da capacidade útil do power bank e evite carregar sob congelamento ou expor ao sol direto.",
    powerTitle: "Capacidade útil do power bank",
    powerSub: "Exemplo: power bank de 25.000 mAh → tablet pequeno de 5.124 mAh",
    ratedLabel: "25.000 mAh nominais",
    usableLabel: "15.000 mAh úteis (~60%)",
    lossLabel: "~40% de perda em calor e conversão",
    tabletLabel: "≈ 2,9 cargas completas",
    resultLabel: "× ~5 dias/carga ≈ 15 dias por banco (2 bancos ≈ 1 mês)",
    tempTitle: "Limites térmicos de íon-lítio",
    tempSub: "Faixas nominais da Apple e Samsung",
    zones: [
      { range: "Abaixo de 0 °C", label: "Nunca carregue · aqueça na mochila antes", tone: "cold" },
      { range: "0 °C – 35 °C", label: "Faixa segura de uso e recarga", tone: "safe" },
      { range: "35 °C – 45 °C", label: "Apenas armazenamento · esfrie antes de carregar", tone: "warm" },
      { range: "Sol forte / pele", label: "Degrada células · nunca durma com o banco", tone: "danger" },
    ],
    tempNote: "Armazenamento: −20 °C a 45 °C",
  },
};

const es: BestPracticeStrings = {
  lifecycle: {
    label: "Ciclo de una temporada de campo mapeado a las siete guías de prácticas recomendadas de NAHPU",
    caption: "Cada guía cubre una etapa de la expedición, desde la configuración previa hasta la curaduría en el museo.",
    phases: [
      {
        step: "1 · Antes de salir",
        title: "Preparar y alinear",
        pages: [
          { name: "Configuración de la app", href: "/es/best-practices/app-setup/", note: "Una configuración, recursos compartidos, ensayo sin conexión" },
          { name: "Elección y cuidado de dispositivos", href: "/es/best-practices/device-care/", note: "Hardware, presupuesto energético, cuidado térmico" },
          { name: "Gestión de proyectos", href: "/es/best-practices/project-management/", note: "Flujo de trabajo, Field IDs, fuente de verdad" },
        ],
      },
      {
        step: "2 · En campo",
        title: "Registrar con contexto",
        pages: [
          { name: "Recolección de datos", href: "/es/best-practices/data-collection/", note: "Sitios, georreferenciación, eventos, narrativas" },
          { name: "Especímenes, partes y medios", href: "/es/best-practices/specimen-records/", note: "IDs, mediciones, tejidos, simbiontes, fotos" },
        ],
      },
      {
        step: "3 · Cada día y entrega",
        title: "Proteger y combinar",
        pages: [
          { name: "Copias de seguridad y recuperación", href: "/es/best-practices/backups-and-recovery/", note: "Exportaciones diarias, copias semanales, regla 3-2-1" },
          { name: "Gestión de proyectos", href: "/es/best-practices/project-management/#gestionar-contribuciones", note: "Entregas y fusiones revisadas" },
        ],
      },
      {
        step: "4 · De vuelta al museo",
        title: "Curar y compartir",
        pages: [
          { name: "Gestión de datos y curaduría", href: "/es/best-practices/data-management/", note: "Revisión de registros, cajas de tejido, exportaciones, etiquetas" },
        ],
      },
    ],
  },
  setup: {
    label: "Cómo un responsable configura NAHPU y distribuye la configuración y la identidad del proyecto al equipo",
    caption: "Configura una vez en el dispositivo líder, comparte la configuración y la identidad del proyecto, y ensaya sin conexión en cada dispositivo.",
    leadBadge: "1 · Un responsable",
    leadTitle: "Configurar una vez",
    leadSteps: [
      "Ejecuta Setup NAHPU (formato, IDs, vocabularios, presets)",
      "Agrega campos personalizados, plantillas y mapas sin conexión",
      "Crea el proyecto y agrega personal y taxones base",
    ],
    transferTitle: "2 · Compartir antes de salir",
    transferItems: [
      "user_configs.json (mediante Export user configs)",
      "QR del proyecto o JSON de información (UUID compartido)",
      "QR o JSON de Sitio / Evento / Taxón (si se comparten)",
    ],
    separateNote: "Transfiere fuentes personalizadas e imágenes de plantillas aparte",
    teamBadge: "3 · Cada dispositivo del equipo",
    teamTitle: "Importar y ensayar",
    teamSteps: [
      "Elige Import user configs en Setup NAHPU Welcome",
      "Escanea el QR del proyecto o importa el JSON",
      "Prueba un registro sin conexión, una exportación y una restauración",
    ],
  },
  merge: {
    label: "Flujo centralizado con un dispositivo autoritativo y fusiones revisadas de proyecto",
    caption: "Un dispositivo autoritativo mantiene las definiciones compartidas y ejecuta Merge project; NAHPU nunca sincroniza en silencio.",
    hubBadge: "Dispositivo autoritativo",
    hubTitle: "Fuente única de verdad",
    hubItems: [
      "Lista maestra de taxones, personal y campos personalizados",
      "Sitios y eventos compartidos (Flujo A)",
      "Revisa y ejecuta cada Merge project",
    ],
    spokeBadge: "Dispositivos del equipo",
    spokeTitle: "Registro paralelo en campo",
    spokeItems: [
      "Importan el UUID del proyecto y la configuración",
      "Catalogan con su propia serie de Field ID",
      "Crean sus propios sitios/eventos en líneas separadas (Flujo B)",
    ],
    outArrow: "Configuración, UUID y registros compartidos",
    inArrow: "Export project (TAR.GZ / ZIP)",
    mergeTitle: "Fusión revisada en el dispositivo autoritativo",
    mergeSteps: [
      "1. Respaldar la base de datos",
      "2. Revisar conflictos de UUID y secciones",
      "3. Confirmación atómica + anotar en Narrativa",
    ],
  },
  georef: {
    label: "Escala de precisión decimal de coordenadas y combinación entre incertidumbre y extensión del espécimen",
    caption: "Conserva todos los decimales del GPS, amplía la incertidumbre al menos al doble de la precisión reportada y no cuentes la extensión dos veces.",
    leftTitle: "Precisión decimal en el terreno",
    leftSub: "Truncar decimales descarta precisión para siempre",
    decimals: [
      { places: "5 dec", example: "0.00001°", distance: "~1.1 m", note: "GPS portátil" },
      { places: "4 dec", example: "0.0001°", distance: "~11 m", note: "Árbol / trampa" },
      { places: "3 dec", example: "0.001°", distance: "~111 m", note: "Cresta pequeña" },
      { places: "2 dec", example: "0.01°", distance: "~1.1 km", note: "Más ancho que la línea" },
    ],
    rightTitle: "Incertidumbre vs. extensión del espécimen",
    rightSub: "NAHPU suma ambos al exportar a Darwin Core",
    pointLabel: "Punto registrado",
    uncertaintyLabel: "Uncertainty (m)",
    uncertaintySub: "≥ 2× precisión del GPS (o 30 m por defecto)",
    extentLabel: "+ Coordinate extent (m)",
    extentSub: "Área de colecta alrededor del punto",
    combinedLabel: "dwc:coordinateUncertaintyInMeters",
    combinedWarning: "No incluyas la misma área en ambos campos",
  },
  specimen: {
    label: "Anatomía de un registro de espécimen extendido en NAHPU",
    caption: "Mantén identificaciones, mediciones, partes, simbiontes y medios vinculados al ejemplar mientras el contexto de campo sigue fresco.",
    centerBadge: "Ejemplar",
    centerTitle: "Registro de espécimen",
    centerSub: "Field ID · UUID · Evento · Coordenada",
    branches: [
      {
        tone: "forest",
        title: "Identificación",
        rule: "Nunca adivines una especie para llenar un espacio; usa un rango superior si hay duda.",
        chips: ["Confianza", "Determinador", "Método"],
      },
      {
        tone: "moss",
        title: "Mediciones",
        rule: "Cero es una medida; deja en blanco lo no medido y anota daños.",
        chips: ["Unidades visibles", "Vacío ≠ 0", "Notas"],
      },
      {
        tone: "mist",
        title: "Partes y tejidos",
        rule: "Registra la hora de toma y los IDs de tubos en la mesa, no de memoria.",
        chips: ["Tissue ID / Código", "Time taken y PMI", "Preparador"],
      },
      {
        tone: "gold",
        title: "Simbiontes y medios",
        rule: "Registra Examined: Yes / Detected: No en hospederos limpios; incluye escala y Field ID en fotos.",
        chips: ["Dato negativo", "Escala", "Copiar vs. enlazar"],
      },
    ],
  },
  backup: {
    label: "Dos niveles de respaldo en NAHPU y la regla 3-2-1 en campo",
    caption: "Ajusta el respaldo a la tarea: exportaciones diarias del proyecto, respaldos completos semanales y antes de fusionar, y copias 3-2-1 fuera del dispositivo.",
    cadenceTitle: "Ajusta el respaldo a la tarea",
    tiers: [
      {
        tone: "forest",
        when: "Al final de cada día",
        action: "Export project",
        format: "TAR.GZ / ZIP (o JSON.GZ ligero)",
        scope: "Un proyecto + medios disponibles · rápido y ligero en batería",
      },
      {
        tone: "moss",
        when: "Semanalmente y antes de fusionar",
        action: "Backup database",
        format: "Archivo completo de instalación",
        scope: "Todos los proyectos, configs, presets, fuentes, mapas y archivos",
      },
    ],
    ruleTitle: "Aplica la regla 3-2-1",
    ruleSub: "Al menos 3 copias · en 2 medios distintos · con 1 fuera del dispositivo",
    copies: [
      { badge: "Copia 1", title: "Dispositivo de registro", detail: "Tableta o teléfono activo en campamento" },
      { badge: "Copia 2", title: "Segundo medio local", detail: "Memoria USB-C o teléfono de respaldo" },
      { badge: "Copia 3", title: "Fuera del dispositivo", detail: "Nube (verificada) o mochila separada" },
    ],
  },
  export: {
    label: "Guía de decisión para elegir el formato adecuado de exportación o respaldo en NAHPU",
    caption: "Solo las exportaciones de proyecto, los NAHPU Data Packages y los respaldos de base de datos restauran un proyecto.",
    headers: ["Qué necesitas", "Usar en NAHPU", "Salida", "¿Se reimporta?"],
    rows: [
      { need: "Revisión en hoja de cálculo o análisis", action: "Export records", format: "CSV / TSV / Excel", reimport: "No", reimportYes: false },
      { need: "Mover o fusionar un proyecto", action: "Export project", format: "TAR.GZ / ZIP / JSON.GZ", reimport: "Sí", reimportYes: true },
      { need: "Publicar en GBIF o portal de museo", action: "Bundle records (DwC)", format: ".dwca.zip / .dwc-dp.tar.gz", reimport: "No", reimportYes: false },
      { need: "Archivo completo + R/Python + campos custom", action: "Bundle records (NAHPU DP)", format: ".nahpu-dp.tar.gz / .zip", reimport: "Sí", reimportYes: true },
      { need: "Reconstruir un dispositivo completo", action: "Backup database", format: "Archivo de instalación", reimport: "Restauración total", reimportYes: true },
      { need: "Etiquetas de ejemplares, tejidos, catálogos", action: "Export documents", format: "PDF", reimport: "No", reimportYes: false },
    ],
  },
  power: {
    label: "Presupuesto de recargas útiles de un banco de energía y límites térmicos de baterías de iones de litio",
    caption: "Calcula recargas con ~60% de capacidad útil y mantén las baterías fuera de cargas bajo cero y del sol directo.",
    powerTitle: "Capacidad útil del banco de energía",
    powerSub: "Ejemplo: banco de 25,000 mAh → tableta pequeña de 5,124 mAh",
    ratedLabel: "25,000 mAh nominales",
    usableLabel: "15,000 mAh útiles (~60%)",
    lossLabel: "~40% pérdida por calor y conversión",
    tabletLabel: "≈ 2.9 cargas completas",
    resultLabel: "× ~5 días/carga ≈ 15 días por banco (2 bancos ≈ 1 mes)",
    tempTitle: "Límites térmicos de iones de litio",
    tempSub: "Rangos nominales de Apple y Samsung",
    zones: [
      { range: "Menos de 0 °C", label: "Nunca cargues · entibia en la mochila primero", tone: "cold" },
      { range: "0 °C – 35 °C", label: "Rango seguro de uso y carga", tone: "safe" },
      { range: "35 °C – 45 °C", label: "Solo almacenamiento · enfría antes de cargar", tone: "warm" },
      { range: "Sol directo / piel", label: "Degrada celdas · nunca duermas con un banco", tone: "danger" },
    ],
    tempNote: "Almacenamiento: −20 °C a 45 °C",
  },
};

const id: BestPracticeStrings = {
  lifecycle: {
    label: "Siklus musim lapangan yang dipetakan ke tujuh panduan praktik terbaik NAHPU",
    caption: "Setiap panduan membahas satu tahap ekspedisi, dari persiapan sebelum berangkat hingga kurasi di museum.",
    phases: [
      {
        step: "1 · Sebelum berangkat",
        title: "Siapkan & selaraskan",
        pages: [
          { name: "Penyiapan Aplikasi", href: "/id/best-practices/app-setup/", note: "Satu konfigurasi, sumber daya bersama, latihan luring" },
          { name: "Pemilihan & Perawatan Perangkat", href: "/id/best-practices/device-care/", note: "Perangkat keras, anggaran daya, keamanan suhu" },
          { name: "Pengelolaan Proyek", href: "/id/best-practices/project-management/", note: "Alur kerja, Field ID, sumber kebenaran" },
        ],
      },
      {
        step: "2 · Di lapangan",
        title: "Catat dengan konteks",
        pages: [
          { name: "Pengumpulan Data", href: "/id/best-practices/data-collection/", note: "Lokasi, georeferensi, kegiatan, narasi" },
          { name: "Spesimen, Bagian & Media", href: "/id/best-practices/specimen-records/", note: "Identifikasi, pengukuran, jaringan, simbion, foto" },
        ],
      },
      {
        step: "3 · Harian & serah terima",
        title: "Lindungi & gabungkan",
        pages: [
          { name: "Cadangan & Pemulihan", href: "/id/best-practices/backups-and-recovery/", note: "Ekspor proyek harian, cadangan DB mingguan, 3-2-1" },
          { name: "Pengelolaan Proyek", href: "/id/best-practices/project-management/#mengelola-kontribusi", note: "Serah terima dan penggabungan yang ditinjau" },
        ],
      },
      {
        step: "4 · Kembali di museum",
        title: "Kurasi & bagikan",
        pages: [
          { name: "Pengelolaan Data & Kurasi", href: "/id/best-practices/data-management/", note: "Tinjauan catatan, kotak jaringan, ekspor, label" },
        ],
      },
    ],
  },
  setup: {
    label: "Cara satu penanggung jawab menyiapkan NAHPU dan membagikan konfigurasi serta identitas proyek ke tim",
    caption: "Siapkan sekali di perangkat utama, bagikan berkas konfigurasi dan identitas proyek, lalu latih luring di setiap perangkat.",
    leadBadge: "1 · Satu pengelola",
    leadTitle: "Siapkan sekali",
    leadSteps: [
      "Jalankan Setup NAHPU (format, ID, kosakata, preset)",
      "Tambahkan kolom kustom, templat cetak, dan peta luring",
      "Buat proyek dan tambahkan personel serta takson inti",
    ],
    transferTitle: "2 · Bagikan sebelum berangkat",
    transferItems: [
      "user_configs.json (melalui Export user configs)",
      "QR proyek atau JSON info proyek (UUID bersama)",
      "QR atau JSON Lokasi / Kegiatan / Takson (jika bersama)",
    ],
    separateNote: "Kirim fon kustom dan gambar templat secara terpisah",
    teamBadge: "3 · Setiap perangkat tim",
    teamTitle: "Impor & latih",
    teamSteps: [
      "Pilih Import user configs di langkah Welcome Setup NAHPU",
      "Pindai QR proyek atau impor JSON info proyek",
      "Uji catatan latihan luring, ekspor, dan pemulihan",
    ],
  },
  merge: {
    label: "Alur terpusat dengan satu perangkat otoritatif dan penggabungan proyek yang ditinjau",
    caption: "Satu perangkat otoritatif memegang definisi bersama dan menjalankan Merge project; NAHPU tidak pernah menyinkronkan diam-diam.",
    hubBadge: "Perangkat otoritatif",
    hubTitle: "Sumber kebenaran tunggal",
    hubItems: [
      "Daftar induk takson, personel, dan kolom kustom",
      "Lokasi & kegiatan bersama (Alur Kerja A)",
      "Meninjau dan menjalankan setiap Merge project",
    ],
    spokeBadge: "Perangkat tim",
    spokeTitle: "Pencatatan lapangan paralel",
    spokeItems: [
      "Mengimpor UUID proyek + konfigurasi bersama",
      "Mencatat dengan seri Field ID masing-masing",
      "Lokasi & kegiatan sendiri untuk jalur terpisah (Alur Kerja B)",
    ],
    outArrow: "Konfigurasi, UUID proyek & catatan bersama",
    inArrow: "Export project (TAR.GZ / ZIP)",
    mergeTitle: "Penggabungan yang ditinjau di perangkat otoritatif",
    mergeSteps: [
      "1. Cadangkan basis data",
      "2. Tinjau konflik UUID & bagian",
      "3. Simpan atomik + catat serah terima di Narasi",
    ],
  },
  georef: {
    label: "Skala presisi desimal koordinat serta cara ketidakpastian koordinat dan luas spesimen digabungkan",
    caption: "Pertahankan semua angka desimal dari GPS, perlebar ketidakpastian minimal dua kali akurasi perangkat, dan jangan menghitung luas dua kali.",
    leftTitle: "Presisi desimal di lapangan",
    leftSub: "Memotong desimal menghilangkan akurasi permanen",
    decimals: [
      { places: "5 des", example: "0,00001°", distance: "~1,1 m", note: "GPS genggam" },
      { places: "4 des", example: "0,0001°", distance: "~11 m", note: "Satu pohon / perangkap" },
      { places: "3 des", example: "0,001°", distance: "~111 m", note: "Punggungan kecil" },
      { places: "2 des", example: "0,01°", distance: "~1,1 km", note: "Lebih lebar dari transek" },
    ],
    rightTitle: "Ketidakpastian vs. luas spesimen",
    rightSub: "NAHPU menjumlahkan keduanya saat ekspor Darwin Core",
    pointLabel: "Titik tercatat",
    uncertaintyLabel: "Uncertainty (m)",
    uncertaintySub: "≥ 2× akurasi GPS (atau bawaan 30 m)",
    extentLabel: "+ Coordinate extent (m)",
    extentSub: "Area pengumpulan di sekitar titik",
    combinedLabel: "dwc:coordinateUncertaintyInMeters",
    combinedWarning: "Jangan memasukkan area yang sama di kedua kolom",
  },
  specimen: {
    label: "Anatomi catatan spesimen diperluas di NAHPU",
    caption: "Tautkan identifikasi, pengukuran, bagian spesimen, simbion, dan media ke spesimen acuan selagi konteks lapangan masih segar.",
    centerBadge: "Voucher",
    centerTitle: "Catatan spesimen",
    centerSub: "Field ID · UUID · Kegiatan · Koordinat",
    branches: [
      {
        tone: "forest",
        title: "Identifikasi",
        rule: "Jangan menebak nama spesies hanya agar tidak kosong; gunakan tingkat takson lebih tinggi.",
        chips: ["Keyakinan", "Penentu", "Metode"],
      },
      {
        tone: "moss",
        title: "Pengukuran",
        rule: "Nol adalah hasil ukur; biarkan kolom yang tidak diukur tetap kosong dan beri catatan.",
        chips: ["Satuan tampil", "Kosong ≠ 0", "Catatan"],
      },
      {
        tone: "mist",
        title: "Bagian & jaringan",
        rule: "Catat waktu pengambilan jaringan dan ID tabung di meja preparasi, bukan dari ingatan.",
        chips: ["Tissue ID / Barcode", "Time taken & PMI", "Preparator"],
      },
      {
        tone: "gold",
        title: "Simbion & media",
        rule: "Isi Examined: Yes / Detected: No untuk inang bersih; sertakan skala & Field ID di foto.",
        chips: ["Data negatif", "Skala", "Salin vs. tautan"],
      },
    ],
  },
  backup: {
    label: "Dua tingkat pencadangan di NAHPU dan aturan salinan 3-2-1 di lapangan",
    caption: "Sesuaikan cadangan dengan tugasnya: ekspor proyek harian, cadangan basis data mingguan dan sebelum penggabungan, serta salinan 3-2-1 di luar perangkat.",
    cadenceTitle: "Sesuaikan cadangan dengan tugasnya",
    tiers: [
      {
        tone: "forest",
        when: "Setiap akhir hari lapangan",
        action: "Export project",
        format: "TAR.GZ / ZIP (atau JSON.GZ ringan)",
        scope: "Satu proyek + media tersedia · cepat & hemat baterai",
      },
      {
        tone: "moss",
        when: "Mingguan & sebelum penggabungan",
        action: "Backup database",
        format: "Arsip instalasi lengkap",
        scope: "Semua proyek, konfigurasi, preset, fon, peta, dan berkas",
      },
    ],
    ruleTitle: "Terapkan aturan 3-2-1",
    ruleSub: "Minimal 3 salinan · pada 2 media berbeda · dengan 1 di luar perangkat",
    copies: [
      { badge: "Salinan 1", title: "Perangkat pencatat", detail: "Tablet atau ponsel aktif di perkemahan" },
      { badge: "Salinan 2", title: "Media lokal kedua", detail: "Flash drive USB-C atau ponsel cadangan" },
      { badge: "Salinan 3", title: "Di luar perangkat", detail: "Cloud (terverifikasi) atau tas terpisah" },
    ],
  },
  export: {
    label: "Panduan memilih format ekspor atau cadangan NAHPU yang tepat",
    caption: "Hanya ekspor proyek, NAHPU Data Package, dan cadangan basis data yang dapat memulihkan proyek NAHPU.",
    headers: ["Kebutuhan Anda", "Gunakan di NAHPU", "Keluaran", "Bisa diimpor ulang?"],
    rows: [
      { need: "Tinjauan spreadsheet atau analisis", action: "Export records", format: "CSV / TSV / Excel", reimport: "Tidak", reimportYes: false },
      { need: "Memindahkan atau menggabungkan proyek", action: "Export project", format: "TAR.GZ / ZIP / JSON.GZ", reimport: "Ya", reimportYes: true },
      { need: "Publikasi ke GBIF atau portal museum", action: "Bundle records (DwC)", format: ".dwca.zip / .dwc-dp.tar.gz", reimport: "Tidak", reimportYes: false },
      { need: "Arsip lengkap + R/Python + kolom kustom", action: "Bundle records (NAHPU DP)", format: ".nahpu-dp.tar.gz / .zip", reimport: "Ya", reimportYes: true },
      { need: "Memulihkan seluruh perangkat", action: "Backup database", format: "Arsip instalasi", reimport: "Pulih penuh", reimportYes: true },
      { need: "Label spesimen, tabung jaringan, katalog", action: "Export documents", format: "PDF", reimport: "Tidak", reimportYes: false },
    ],
  },
  power: {
    label: "Anggaran pengisian daya efektif power bank dan batas suhu baterai litium-ion",
    caption: "Hitung pengisian dari ~60% kapasitas efektif power bank dan hindari pengisian di bawah titik beku maupun sinar matahari langsung.",
    powerTitle: "Kapasitas efektif power bank",
    powerSub: "Contoh: power bank 25.000 mAh → tablet kecil 5.124 mAh",
    ratedLabel: "25.000 mAh tertera",
    usableLabel: "15.000 mAh efektif (~60%)",
    lossLabel: "~40% hilang sebagai panas & konversi",
    tabletLabel: "≈ 2,9 kali pengisian penuh",
    resultLabel: "× ~5 hari/isi ≈ 15 hari per bank (2 bank ≈ 1 bulan)",
    tempTitle: "Batas suhu litium-ion",
    tempSub: "Rentang resmi Apple & Samsung",
    zones: [
      { range: "Di bawah 0 °C", label: "Jangan cas · hangatkan dalam tas dulu", tone: "cold" },
      { range: "0 °C – 35 °C", label: "Rentang aman penggunaan & pengisian", tone: "safe" },
      { range: "35 °C – 45 °C", label: "Hanya penyimpanan · dinginkan sebelum cas", tone: "warm" },
      { range: "Terik / kulit", label: "Merusak sel · jangan tidur dengan power bank", tone: "danger" },
    ],
    tempNote: "Batas penyimpanan: −20 °C hingga 45 °C",
  },
};

export const bestPracticeStrings: Record<Locale, BestPracticeStrings> = { en, pt, es, id };
