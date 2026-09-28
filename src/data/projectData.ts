export const HTML_IMAGES = {
  headerLogo:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAP9CGH2OQsU0s0lpK2x5UZA5zNLzHYe6h3TkT8yyCnEDZl7yOPCSKbe0B9MsyQLxNWjqCiFwwk3kLg0drAyQZqotj5mOuis9ByUC0xtpJafTp3Z-ghHR1aXcqRwVKfp-4AchaUgLDQkgXBH_wdI8_7O8Q2knjeE94Sp4X8M1o4QIAp6i48fyGsA7mf4xnugv7mGo-MIYbC24IH6r8LSAX8YDlefpPauWbDG7WByxoPZpCGcyoX4VCHvqUzyIKL7sFJVQ",
  heroPhone:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCKddRY18VTeqXpBbRxBUSwaCXflgOL2KQOf3ffkc3csw0L-N3cIj3Ygk82mdr7Pw1BsXBAKDmvlnTBlsJHEcSbRyk8wW4PRqIIFyAlC--3mS1nuQo4ZvEm8h8Ng6nW5QPQa4ObjoR8T1cR27-jGfULyLIhbShQNy__WVoayjxjLpzfyJcjaHL3iBfilhy4W4YlBGw_RoAxSyCBfmDOcRg8U3Y2ya4fVNDXx7VSuXikPXBCglElIz3i",
  editorCapture:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA27JIYV5SLQCh955opPJNSHq4HyIFDYEveI91TlrvwLthW86EPM8XUJwuZPx2jIWjJI2BkwJkq2sGDeZj8RO2wCzSCS_gXoo3XhP3TfD5rsEkholfquk9AYIMwbRK-2Q-fQiNnm2O7gAr_roDC5n9MpnJK1QeTEAzzCQvtnYAhiYqQJS5GccenYxwAKR3BQK41vHAWhahnecdo7haNwfcKGcaZNGMI4DCLKahixh3-95pnBd3CYy6a",
  roadmapCapture:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDsjj0XDZaokdGQzq_3AdVkxv2r3XUsPtInemYn4PHc1rbYU1fRe44fReYWwpn5PCDeCyUfQQboSHxO5PXW9cRecQFrfyjuXhzg0Q7ZpYaruxixHzCV8BeTGfuBy8iG2iu3GXFtQD__l13pf8x56XeWeSObfW9ZgkjbszrtvNlC8aRF54ppMaeaUfz3gtufiIHxiQNG9TiyryoTbdZvo6NqbOHhwN33P7DpXVOUqSbLuu5fIIWMRFB-",
  statsCapture:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuArm8EZcZYQUnrZe8BnGAxPbZ5ytj-sHhMDkphw5AnPLjdXWXs_Z4MAXpnRO6EMDBrjqH6rkyQFWq8FYWy4pUlYwRgJ2lt_rdC3cZwGGEMJpP050LGRu-SI0RcFR-nflP9BkLoYwvWe4thiziLvsKy6Q9qedAToby_6Eb1qavZbUgOp59q0vPkOiPLKHW-bEUnOHUZUewwGGIZFiJA9EvAbjzPEOZVnV1O_gw6Uj0zAHVBP0a3c8npC",
  footerLogo:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAT7qmOXUDCCgfITMF3jmGmtB5E3yYb6GeliMz2uu8tR0xC6A3_PHZw-7sPgr25a7Zm-ZMhv0143jWBkaPVwGfock47RfgviPnvaExUbT0YRVVHjKlzW9mrvHwJe6SLKjGFAIudKBkyYTQF7SrgmdZDbygy0GbAo32C-bfaeGWe5TtICxoy9Qvb9B4GmNAq-jaAwNhmR9y576AVx-omcfyZ7JOHNn0nd_o4wJOFVUJyGhgQBLN00vF2ORa8L2-_FZeLIg",
};

export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  avatarBg: string;
  avatarText: string;
  badgeText: string;
  linkedinUrl: string;
  githubHandle: string;
  colSpan2?: boolean;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    initials: "RM",
    name: "Rodrigo Alexis Mejía Rivas",
    role: "Project Manager",
    avatarBg: "bg-primary-container",
    avatarText: "text-on-primary",
    badgeText: "text-primary",
    linkedinUrl: "https://github.com/MadeInRodri",
    githubHandle: "@MadeInRodri",
  },
  {
    initials: "BF",
    name: "Bryan Josue Fuentes Molina",
    role: "DevOps + Backend Developer",
    avatarBg: "bg-primary",
    avatarText: "text-on-primary",
    badgeText: "text-primary",
    linkedinUrl: "https://github.com/Bryndroid",
    githubHandle: "@Bryndroid",
  },
  {
    initials: "AP",
    name: "Andre Emanuel Preza Deras",
    role: "Full Stack Developer",
    avatarBg: "bg-secondary",
    avatarText: "text-on-secondary",
    badgeText: "text-secondary",
    linkedinUrl: "https://github.com/MadeInRodri/learning-app",
    githubHandle: "@AndrePreza",
  },
  {
    initials: "JM",
    name: "Joaquín Eduardo Morán Mejía",
    role: "DevOps + Backend Developer",
    avatarBg: "bg-tertiary-container",
    avatarText: "text-on-primary",
    badgeText: "text-primary",
    linkedinUrl: "https://github.com/Bryndroid/backend-dps",
    githubHandle: "@JoaquinMoran",
  },
  {
    initials: "LF",
    name: "Leonardo Enrique Flores Coto",
    role: "Full Stack Developer",
    avatarBg: "bg-secondary-container",
    avatarText: "text-on-secondary-fixed",
    badgeText: "text-secondary",
    linkedinUrl: "https://github.com/MadeInRodri/learning-app",
    githubHandle: "@LeonardoFlores",
    colSpan2: true,
  },
];

export interface CodingChallenge {
  id: string;
  language: string;
  moduleTitle: string;
  stepLabel: string;
  progress: number;
  prompt: string;
  initialCode: string[];
  editableLineIndex: number;
  expectedSubstring: string;
  defaultEditableLine: string;
  solutionLine: string;
  expectedOutput: string;
  mentorHint: string;
  mentorSuccess: string;
}

export const CODING_CHALLENGES: CodingChallenge[] = [
  {
    id: "kotlin-vars",
    language: "Kotlin",
    moduleTitle: "Variables & Data Types",
    stepLabel: "#2 of 15",
    progress: 75,
    prompt: "Define a 'String' variable named 'greeting' with the value 'Hello, World!'",
    initialCode: [
      "class Main {",
      "  fun main() {",
      "    // Define the variable here",
      '    var greeting: String = "Hello, World!"',
      '    val name = "Alice"',
      '    println("$greeting $name!")',
      "  }",
      "}",
    ],
    editableLineIndex: 3,
    defaultEditableLine: '    var greeting: String = "Hello, World!"',
    expectedSubstring: "greeting",
    solutionLine: '    var greeting: String = "Hello, World!"',
    expectedOutput: "Hello, World! Alice!",
    mentorHint:
      "Almost there! Remember to use var for mutable strings, and val for constants. Give it a try!",
    mentorSuccess:
      "¡Excelente! Definiste correctamente la variable 'greeting' de tipo String. +25 XP ganados.",
  },
  {
    id: "python-loops",
    language: "Python",
    moduleTitle: "Loops & Iterations",
    stepLabel: "#5 of 12",
    progress: 60,
    prompt: "Completa el ciclo for para imprimir cada lenguaje de la lista 'langs'.",
    initialCode: [
      'langs = ["Python", "TS", "SQL"]',
      "# Recorre la lista e imprime cada elemento",
      "for item in langs:",
      '    print(f"Aprendiendo {item}")',
    ],
    editableLineIndex: 2,
    defaultEditableLine: "for item in langs:",
    expectedSubstring: "for",
    solutionLine: "for item in langs:",
    expectedOutput: "Aprendiendo Python\nAprendiendo TS\nAprendiendo SQL",
    mentorHint:
      "Usa la sintaxis 'for item in langs:' seguida de dos puntos para iterar sobre la lista.",
    mentorSuccess:
      "¡Perfecto! El bucle for recorre todos los elementos limpiamente. +30 XP ganados.",
  },
  {
    id: "ts-functions",
    language: "TypeScript",
    moduleTitle: "Functions & Types",
    stepLabel: "#8 of 15",
    progress: 85,
    prompt: "Declara una función tipada 'calcularXP' que retorne el doble de puntos.",
    initialCode: [
      "function calcularXP(base: number): number {",
      "  // Retorna el doble de base",
      "  return base * 2;",
      "}",
      "console.log(calcularXP(150));",
    ],
    editableLineIndex: 2,
    defaultEditableLine: "  return base * 2;",
    expectedSubstring: "return",
    solutionLine: "  return base * 2;",
    expectedOutput: "300",
    mentorHint:
      "Asegúrate de retornar un valor numérico usando la palabra reservada 'return'.",
    mentorSuccess:
      "¡Tipado estricto validado! Tu función retorna un 'number' correctamente. +40 XP ganados.",
  },
];

export interface RoadmapNode {
  id: string;
  title: string;
  subtitle: string;
  status: "completed" | "current" | "locked" | "milestone";
  xp?: string;
  icon: string;
  lessonSummary: string;
  quizQuestion: string;
  quizOptions: string[];
  correctIndex: number;
}

export const ROADMAP_NODES: RoadmapNode[] = [
  {
    id: "basics",
    title: "Basics",
    subtitle: "Variables",
    status: "completed",
    icon: "check",
    lessonSummary:
      "Las variables almacenan datos en memoria para reutilizarlos en tu programa. En lenguajes tipados puedes definir constantes inmutables (val / const) o variables mutables (var / let).",
    quizQuestion: "¿Cuál palabra clave define una constante inmutable en Kotlin?",
    quizOptions: ["var", "val", "let", "mut"],
    correctIndex: 1,
  },
  {
    id: "datatypes",
    title: "Data Types",
    subtitle: "Integers, Strings",
    status: "completed",
    icon: "check",
    lessonSummary:
      "Los tipos de datos primitivos incluyen cadenas de texto (String), números enteros (Int), decimales (Double/Float) y valores lógicos (Boolean).",
    quizQuestion: "¿Qué tipo de dato representa 'Hola Code Inventors'?",
    quizOptions: ["Int", "Boolean", "String", "Float"],
    correctIndex: 2,
  },
  {
    id: "conditionals",
    title: "Conditionals",
    subtitle: "If/Else",
    status: "current",
    icon: "code",
    lessonSummary:
      "Las estructuras condicionales permiten tomar decisiones lógicas evaluando expresiones booleanas mediante bloques if, else if y else.",
    quizQuestion: "¿Qué operador comprueba igualdad estricta en JavaScript/TypeScript?",
    quizOptions: ["=", "==", "===", ":="],
    correctIndex: 2,
  },
  {
    id: "milestone-1",
    title: "Python Explorer",
    subtitle: "Insignia de Ruta",
    xp: "600 XP",
    status: "milestone",
    icon: "emoji_events",
    lessonSummary:
      "Has dominado los fundamentos de variables, tipos de datos y control de flujo condicional.",
    quizQuestion: "¿Cuántos XP otorga completar el bloque explorador?",
    quizOptions: ["200 XP", "400 XP", "600 XP", "1000 XP"],
    correctIndex: 2,
  },
  {
    id: "loops",
    title: "Loops",
    subtitle: "For, While",
    status: "completed",
    icon: "check",
    lessonSummary:
      "Los bucles for y while automatizan tareas repetitivas recorriendo colecciones o ejecutándose mientras se cumpla una condición.",
    quizQuestion: "¿Qué bucle es ideal para recorrer una lista de longitud conocida?",
    quizOptions: ["for", "switch", "try/catch", "import"],
    correctIndex: 0,
  },
  {
    id: "loops-adv",
    title: "Loops II",
    subtitle: "For, While",
    status: "completed",
    icon: "check",
    lessonSummary:
      "Control avanzado de iteraciones utilizando break para detener un ciclo y continue para saltar a la siguiente iteración.",
    quizQuestion: "¿Qué instrucción salta inmediatamente a la siguiente iteración del bucle?",
    quizOptions: ["return", "stop", "continue", "exit"],
    correctIndex: 2,
  },
  {
    id: "milestone-2",
    title: "Code Warrior",
    subtitle: "Rango Intermedio",
    xp: "500 XP",
    status: "milestone",
    icon: "workspace_premium",
    lessonSummary:
      "Insignia otorgada por resolver retos de iteración y algoritmos en interfaz táctil sin errores de sintaxis.",
    quizQuestion: "¿Qué habilidad desbloquea el rango Code Warrior?",
    quizOptions: ["Funciones modulares", "Solo lectura", "Borrar cuenta", "Modo avión"],
    correctIndex: 0,
  },
  {
    id: "functions",
    title: "Functions",
    subtitle: "Define, Call",
    status: "current",
    icon: "star",
    lessonSummary:
      "Las funciones encapsulan bloques de código reutilizables que aceptan parámetros de entrada y retornan un resultado procesado.",
    quizQuestion: "¿Qué palabra clave devuelve el resultado de una función?",
    quizOptions: ["yield_none", "return", "break", "print"],
    correctIndex: 1,
  },
  {
    id: "functions-master",
    title: "Functions Master",
    subtitle: "Callbacks & Closures",
    status: "completed",
    icon: "check",
    lessonSummary:
      "Funciones de orden superior, expresiones lambda y paso de funciones como argumentos para arquitecturas limpias.",
    quizQuestion: "¿Cómo se llama una función pasada como argumento a otra función?",
    quizOptions: ["Callback", "Variable", "Constructor", " loop"],
    correctIndex: 0,
  },
  {
    id: "file-io",
    title: "File I/O",
    subtitle: "Read & Write",
    status: "locked",
    icon: "lock",
    lessonSummary:
      "Lectura y escritura segura de archivos locales, manejo de flujos de datos y serialización JSON.",
    quizQuestion: "¿Qué formato de texto ligero es estándar para intercambio de datos en APIs?",
    quizOptions: ["JSON", "EXE", "MP4", "PNG"],
    correctIndex: 0,
  },
];
