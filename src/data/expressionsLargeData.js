// Gran base de datos de expresiones comunes en inglés (primeras 300 de 2000)
// Estructura: expresiones con espacios para completar con palabras clave

export const expressionCategories = [
  {
    id: 'idioms',
    name: 'Expresiones Idiomáticas',
    description: 'Frases que tienen un significado figurativo diferente de su significado literal.'
  },
  {
    id: 'phrasal',
    name: 'Verbos Frasales',
    description: 'Combinaciones de verbos y preposiciones o adverbios que crean un nuevo significado.'
  },
  {
    id: 'collocations',
    name: 'Colocaciones',
    description: 'Combinaciones de palabras que suelen aparecer juntas y suenan naturales para los hablantes nativos.'
  },
  {
    id: 'everyday',
    name: 'Expresiones Cotidianas',
    description: 'Frases comunes utilizadas en situaciones diarias.'
  },
  {
    id: 'business',
    name: 'Expresiones de Negocios',
    description: 'Frases utilizadas en entornos profesionales y de negocios.'
  },
  {
    id: 'academic',
    name: 'Expresiones Académicas',
    description: 'Frases utilizadas en contextos académicos y educativos.'
  },
  {
    id: 'slang',
    name: 'Jerga/Argot',
    description: 'Expresiones informales utilizadas en conversaciones casuales.'
  },
  {
    id: 'proverbs',
    name: 'Proverbios',
    description: 'Dichos populares que expresan verdades o consejos basados en la experiencia común.'
  }
];

// Primeras 300 expresiones
export const largeExpressionsData = [
  // Expresiones idiomáticas
  {
    text: "It's raining _____ and dogs.",
    answer: "cats",
    category: "idioms",
    translation: "Está lloviendo a cántaros.",
    explanation: "Expresión que indica que está lloviendo muy fuerte."
  },
  {
    text: "That's a piece of _____.",
    answer: "cake",
    category: "idioms",
    translation: "Eso es pan comido.",
    explanation: "Expresión que indica que algo es muy fácil de hacer."
  },
  {
    text: "I'm feeling under the _____.",
    answer: "weather",
    category: "idioms",
    translation: "Me siento mal/enfermo.",
    explanation: "Expresión que indica que alguien se siente enfermo o indispuesto."
  },
  {
    text: "She let the _____ out of the bag.",
    answer: "cat",
    category: "idioms",
    translation: "Ella reveló el secreto.",
    explanation: "Expresión que significa revelar un secreto accidentalmente."
  },
  {
    text: "You're pulling my _____!",
    answer: "leg",
    category: "idioms",
    translation: "¡Me estás tomando el pelo!",
    explanation: "Expresión que indica que alguien está bromeando o mintiendo."
  },
  {
    text: "That's the last _____ for me.",
    answer: "straw",
    category: "idioms",
    translation: "Esa es la gota que colma el vaso para mí.",
    explanation: "Expresión que indica que algo pequeño ha causado que alguien pierda la paciencia después de una serie de problemas."
  },
  {
    text: "I'm _____ my wits' end with this problem.",
    answer: "at",
    category: "idioms",
    translation: "Estoy desesperado con este problema.",
    explanation: "At one's wits' end: estar extremadamente frustrado o sin saber qué hacer."
  },
  {
    text: "She's the _____ of the earth.",
    answer: "salt",
    category: "idioms",
    translation: "Ella es una persona muy buena y honesta.",
    explanation: "Salt of the earth: persona muy buena, honesta y confiable."
  },
  {
    text: "It costs an arm and a _____.",
    answer: "leg",
    category: "idioms",
    translation: "Cuesta un ojo de la cara.",
    explanation: "Expresión que indica que algo es muy caro."
  },
  {
    text: "He's feeling _____ blue today.",
    answer: "a bit",
    category: "idioms",
    translation: "Se siente un poco triste hoy.",
    explanation: "Feeling blue: sentirse triste o deprimido."
  },
  {
    text: "She has a _____ of gold.",
    answer: "heart",
    category: "idioms",
    translation: "Ella tiene un corazón de oro.",
    explanation: "Heart of gold: ser muy amable y generoso."
  },
  {
    text: "I need to get this _____ my chest.",
    answer: "off",
    category: "idioms",
    translation: "Necesito desahogarme.",
    explanation: "Get something off one's chest: expresar algo que te ha estado molestando."
  },
  {
    text: "Let's not beat around the _____.",
    answer: "bush",
    category: "idioms",
    translation: "No andemos con rodeos.",
    explanation: "Beat around the bush: evitar llegar al punto principal de una conversación."
  },
  {
    text: "I'll be there in the _____ of an eye.",
    answer: "blink",
    category: "idioms",
    translation: "Estaré allí en un abrir y cerrar de ojos.",
    explanation: "In the blink of an eye: muy rápidamente."
  },
  {
    text: "She's a _____ in the neck.",
    answer: "pain",
    category: "idioms",
    translation: "Ella es una molestia.",
    explanation: "Pain in the neck: persona o cosa muy molesta o irritante."
  },
  {
    text: "It's not my cup of _____.",
    answer: "tea",
    category: "idioms",
    translation: "No es lo mío/No me gusta.",
    explanation: "Not my cup of tea: algo que no es del gusto o interés de alguien."
  },
  {
    text: "You can't teach an old _____ new tricks.",
    answer: "dog",
    category: "idioms",
    translation: "No se puede enseñar trucos nuevos a un perro viejo.",
    explanation: "Expresión que sugiere que es difícil que las personas mayores cambien sus hábitos o aprendan cosas nuevas."
  },
  {
    text: "He's got a _____ up his sleeve.",
    answer: "trick",
    category: "idioms",
    translation: "Tiene un as bajo la manga.",
    explanation: "Tener un plan o recurso secreto en reserva."
  },
  {
    text: "She's on cloud _____.",
    answer: "nine",
    category: "idioms",
    translation: "Está en las nubes/Está muy feliz.",
    explanation: "Estar extremadamente feliz o eufórico."
  },
  {
    text: "That's the _____ of the iceberg.",
    answer: "tip",
    category: "idioms",
    translation: "Eso es solo la punta del iceberg.",
    explanation: "Solo una pequeña parte visible de un problema mucho mayor."
  },

  // Verbos frasales
  {
    text: "I need to look _____ my little sister tonight.",
    answer: "after",
    category: "phrasal",
    translation: "Necesito cuidar a mi hermana pequeña esta noche.",
    explanation: "Look after: cuidar de alguien o algo."
  },
  {
    text: "Please turn _____ the lights when you leave.",
    answer: "off",
    category: "phrasal",
    translation: "Por favor, apaga las luces cuando te vayas.",
    explanation: "Turn off: apagar algo."
  },
  {
    text: "I can't figure _____ how to solve this problem.",
    answer: "out",
    category: "phrasal",
    translation: "No puedo descubrir cómo resolver este problema.",
    explanation: "Figure out: entender o resolver algo después de pensar en ello."
  },
  {
    text: "We need to put _____ the meeting until next week.",
    answer: "off",
    category: "phrasal",
    translation: "Necesitamos posponer la reunión hasta la próxima semana.",
    explanation: "Put off: posponer o retrasar algo."
  },
  {
    text: "I'm going to give _____ smoking.",
    answer: "up",
    category: "phrasal",
    translation: "Voy a dejar de fumar.",
    explanation: "Give up: dejar de hacer algo, rendirse."
  },
  {
    text: "We need to _____ up with a solution quickly.",
    answer: "come",
    category: "phrasal",
    translation: "Necesitamos encontrar una solución rápidamente.",
    explanation: "Come up with: pensar o proponer una idea o solución."
  },
  {
    text: "I'll pick you _____ at 8 o'clock.",
    answer: "up",
    category: "phrasal",
    translation: "Te recogeré a las 8 en punto.",
    explanation: "Pick up: recoger a alguien o algo."
  },
  {
    text: "She broke _____ with her boyfriend last week.",
    answer: "up",
    category: "phrasal",
    translation: "Ella rompió con su novio la semana pasada.",
    explanation: "Break up: terminar una relación."
  },
  {
    text: "I need to fill _____ this form.",
    answer: "out",
    category: "phrasal",
    translation: "Necesito rellenar este formulario.",
    explanation: "Fill out: completar un formulario con información."
  },
  {
    text: "Let's get _____ to business.",
    answer: "down",
    category: "phrasal",
    translation: "Vamos a ponernos manos a la obra.",
    explanation: "Get down to: comenzar a hacer algo seriamente."
  },
  {
    text: "I ran _____ an old friend yesterday.",
    answer: "into",
    category: "phrasal",
    translation: "Me encontré con un viejo amigo ayer.",
    explanation: "Run into: encontrarse con alguien por casualidad."
  },
  {
    text: "The plane took _____ on time.",
    answer: "off",
    category: "phrasal",
    translation: "El avión despegó a tiempo.",
    explanation: "Take off: despegar (un avión)."
  },
  {
    text: "I'll look _____ the information and get back to you.",
    answer: "up",
    category: "phrasal",
    translation: "Buscaré la información y te responderé.",
    explanation: "Look up: buscar información."
  },
  {
    text: "She's trying to cut _____ on sugar.",
    answer: "down",
    category: "phrasal",
    translation: "Ella está tratando de reducir el consumo de azúcar.",
    explanation: "Cut down on: reducir el consumo o uso de algo."
  },
  {
    text: "I need to catch _____ on my work.",
    answer: "up",
    category: "phrasal",
    translation: "Necesito ponerme al día con mi trabajo.",
    explanation: "Catch up on: ponerse al día con algo."
  },
  {
    text: "Please hand _____ your assignments by Friday.",
    answer: "in",
    category: "phrasal",
    translation: "Por favor, entreguen sus tareas antes del viernes.",
    explanation: "Hand in: entregar algo (generalmente un trabajo o tarea)."
  },
  {
    text: "I can't make _____ what he's saying.",
    answer: "out",
    category: "phrasal",
    translation: "No puedo entender lo que está diciendo.",
    explanation: "Make out: distinguir o entender algo con dificultad."
  },
  {
    text: "The company is looking to take _____ new employees.",
    answer: "on",
    category: "phrasal",
    translation: "La empresa está buscando contratar nuevos empleados.",
    explanation: "Take on: contratar o asumir nuevas responsabilidades."
  },
  {
    text: "We need to sort _____ this misunderstanding.",
    answer: "out",
    category: "phrasal",
    translation: "Necesitamos resolver este malentendido.",
    explanation: "Sort out: resolver o arreglar un problema."
  },
  {
    text: "I'm going to set _____ early tomorrow morning.",
    answer: "off",
    category: "phrasal",
    translation: "Voy a partir temprano mañana por la mañana.",
    explanation: "Set off: comenzar un viaje."
  },

  // Colocaciones
  {
    text: "She made a good _____ in her job interview.",
    answer: "impression",
    category: "collocations",
    translation: "Ella causó una buena impresión en su entrevista de trabajo.",
    explanation: "Make an impression: causar una impresión."
  },
  {
    text: "I need to pay _____ to what the teacher is saying.",
    answer: "attention",
    category: "collocations",
    translation: "Necesito prestar atención a lo que dice el profesor.",
    explanation: "Pay attention: prestar atención."
  },
  {
    text: "Let's take a quick _____ at the report.",
    answer: "look",
    category: "collocations",
    translation: "Echemos un vistazo rápido al informe.",
    explanation: "Take a look: mirar o examinar algo."
  },
  {
    text: "She always keeps her _____ in stressful situations.",
    answer: "cool",
    category: "collocations",
    translation: "Ella siempre mantiene la calma en situaciones estresantes.",
    explanation: "Keep your cool: mantener la calma o el control."
  },
  {
    text: "We need to make a _____ about where to go for vacation.",
    answer: "decision",
    category: "collocations",
    translation: "Necesitamos tomar una decisión sobre dónde ir de vacaciones.",
    explanation: "Make a decision: tomar una decisión."
  },
  {
    text: "The new policy _____ into effect next month.",
    answer: "comes",
    category: "collocations",
    translation: "La nueva política entra en vigor el próximo mes.",
    explanation: "Come into effect: comenzar a aplicarse o tener validez legal."
  },
  {
    text: "I want to do some _____ shopping this weekend.",
    answer: "window",
    category: "collocations",
    translation: "Quiero ir a mirar tiendas este fin de semana.",
    explanation: "Window shopping: mirar escaparates sin intención de comprar."
  },
  {
    text: "She has a _____ sense of humor.",
    answer: "great",
    category: "collocations",
    translation: "Ella tiene un gran sentido del humor.",
    explanation: "Great/good sense of humor: tener buen sentido del humor."
  },
  {
    text: "I need to get some _____ air.",
    answer: "fresh",
    category: "collocations",
    translation: "Necesito tomar aire fresco.",
    explanation: "Fresh air: aire fresco, normalmente al aire libre."
  },
  {
    text: "Let's have a _____ talk about your future.",
    answer: "serious",
    category: "collocations",
    translation: "Tengamos una conversación seria sobre tu futuro.",
    explanation: "Serious talk: conversación seria o importante."
  },
  {
    text: "I need to take a _____ break from studying.",
    answer: "short",
    category: "collocations",
    translation: "Necesito tomar un breve descanso de estudiar.",
    explanation: "Short break: descanso breve."
  },
  {
    text: "She gave me a _____ smile.",
    answer: "warm",
    category: "collocations",
    translation: "Ella me dio una cálida sonrisa.",
    explanation: "Warm smile: sonrisa amable y acogedora."
  },
  {
    text: "I have a _____ headache.",
    answer: "splitting",
    category: "collocations",
    translation: "Tengo un fuerte dolor de cabeza.",
    explanation: "Splitting headache: dolor de cabeza muy intenso."
  },
  {
    text: "We had a _____ conversation about politics.",
    answer: "heated",
    category: "collocations",
    translation: "Tuvimos una acalorada conversación sobre política.",
    explanation: "Heated conversation/discussion: conversación intensa o con desacuerdos."
  },
  {
    text: "She's my _____ friend.",
    answer: "best",
    category: "collocations",
    translation: "Ella es mi mejor amiga.",
    explanation: "Best friend: mejor amigo/a."
  },
  {
    text: "I need to make a _____ call.",
    answer: "phone",
    category: "collocations",
    translation: "Necesito hacer una llamada telefónica.",
    explanation: "Make a phone call: hacer una llamada telefónica."
  },
  {
    text: "Let's have a _____ chat about this issue.",
    answer: "quick",
    category: "collocations",
    translation: "Tengamos una charla rápida sobre este tema.",
    explanation: "Quick chat: conversación breve."
  },
  {
    text: "She gave a _____ performance in the play.",
    answer: "brilliant",
    category: "collocations",
    translation: "Ella dio una actuación brillante en la obra.",
    explanation: "Brilliant performance: actuación excelente."
  },
  {
    text: "We need to take _____ action immediately.",
    answer: "swift",
    category: "collocations",
    translation: "Necesitamos tomar medidas rápidas inmediatamente.",
    explanation: "Swift action: acción rápida o inmediata."
  },
  {
    text: "He made a _____ mistake in his calculations.",
    answer: "serious",
    category: "collocations",
    translation: "Él cometió un grave error en sus cálculos.",
    explanation: "Serious mistake: error grave o importante."
  },

  // Expresiones cotidianas
  {
    text: "_____ to meet you!",
    answer: "Nice",
    category: "everyday",
    translation: "¡Encantado de conocerte!",
    explanation: "Expresión común al conocer a alguien por primera vez."
  },
  {
    text: "How's it _____?",
    answer: "going",
    category: "everyday",
    translation: "¿Cómo va todo?",
    explanation: "Forma casual de preguntar cómo está alguien."
  },
  {
    text: "_____ your time, there's no rush.",
    answer: "Take",
    category: "everyday",
    translation: "Tómate tu tiempo, no hay prisa.",
    explanation: "Expresión para indicar a alguien que no se apresure."
  },
  {
    text: "I'll give you a _____ later.",
    answer: "call",
    category: "everyday",
    translation: "Te llamaré más tarde.",
    explanation: "Expresión común para indicar que se llamará a alguien."
  },
  {
    text: "_____ care of yourself!",
    answer: "Take",
    category: "everyday",
    translation: "¡Cuídate!",
    explanation: "Expresión común para despedirse, deseando bienestar."
  },
  {
    text: "_____ a good day!",
    answer: "Have",
    category: "everyday",
    translation: "¡Que tengas un buen día!",
    explanation: "Expresión común para despedirse durante el día."
  },
  {
    text: "_____ me a favor, please.",
    answer: "Do",
    category: "everyday",
    translation: "Hazme un favor, por favor.",
    explanation: "Forma común de pedir ayuda."
  },
  {
    text: "I'm _____ sorry for the delay.",
    answer: "really",
    category: "everyday",
    translation: "Realmente lo siento por el retraso.",
    explanation: "Forma de disculparse enfatizando el arrepentimiento."
  },
  {
    text: "_____ ahead, I'll join you later.",
    answer: "Go",
    category: "everyday",
    translation: "Adelante, me uniré a ti más tarde.",
    explanation: "Expresión para indicar a alguien que continúe sin ti."
  },
  {
    text: "_____ me know when you arrive.",
    answer: "Let",
    category: "everyday",
    translation: "Avísame cuando llegues.",
    explanation: "Forma común de pedir que te informen sobre algo."
  },

  // Más expresiones cotidianas
  {
    text: "_____ your best!",
    answer: "Do",
    category: "everyday",
    translation: "¡Haz lo mejor que puedas!",
    explanation: "Expresión de ánimo para que alguien se esfuerce."
  },
  {
    text: "I'm _____ forward to seeing you.",
    answer: "looking",
    category: "everyday",
    translation: "Estoy deseando verte.",
    explanation: "Expresión que indica anticipación positiva."
  },
  {
    text: "_____ in touch!",
    answer: "Stay",
    category: "everyday",
    translation: "¡Mantengamos el contacto!",
    explanation: "Expresión para indicar que se quiere seguir en contacto."
  },
  {
    text: "_____ me a second.",
    answer: "Give",
    category: "everyday",
    translation: "Dame un segundo.",
    explanation: "Expresión para pedir un momento."
  },
  {
    text: "_____ yourself at home.",
    answer: "Make",
    category: "everyday",
    translation: "Siéntete como en casa.",
    explanation: "Expresión para hacer sentir cómodo a un invitado."
  },
  {
    text: "_____ a minute, I need to think about this.",
    answer: "Hold",
    category: "everyday",
    translation: "Espera un minuto, necesito pensar en esto.",
    explanation: "Expresión para pedir a alguien que espere."
  },
  {
    text: "_____ it easy!",
    answer: "Take",
    category: "everyday",
    translation: "¡Tómatelo con calma!",
    explanation: "Expresión para sugerir a alguien que se relaje o no se preocupe tanto."
  },
  {
    text: "_____ your mind!",
    answer: "Never",
    category: "everyday",
    translation: "¡No te preocupes!",
    explanation: "Expresión para tranquilizar a alguien."
  },
  {
    text: "_____ kidding me!",
    answer: "You're",
    category: "everyday",
    translation: "¡Me estás tomando el pelo!",
    explanation: "Expresión de sorpresa o incredulidad."
  },
  {
    text: "_____ on!",
    answer: "Come",
    category: "everyday",
    translation: "¡Vamos!",
    explanation: "Expresión de ánimo o para mostrar incredulidad."
  },

  // Expresiones de negocios
  {
    text: "We need to think outside the _____.",
    answer: "box",
    category: "business",
    translation: "Necesitamos pensar fuera de la caja.",
    explanation: "Pensar de manera creativa o no convencional."
  },
  {
    text: "Let's touch _____ on this issue next week.",
    answer: "base",
    category: "business",
    translation: "Hablemos de este tema la próxima semana.",
    explanation: "Discutir o revisar un tema brevemente."
  },
  {
    text: "We're still in the _____ stages of the project.",
    answer: "early",
    category: "business",
    translation: "Todavía estamos en las etapas iniciales del proyecto.",
    explanation: "Las primeras fases de un proyecto o proceso."
  },
  {
    text: "This is a win-win _____.",
    answer: "situation",
    category: "business",
    translation: "Esta es una situación beneficiosa para ambas partes.",
    explanation: "Situación en la que todas las partes involucradas se benefician."
  },
  {
    text: "We need to get the ball _____.",
    answer: "rolling",
    category: "business",
    translation: "Necesitamos poner las cosas en marcha.",
    explanation: "Comenzar a trabajar en algo o iniciar un proceso."
  },
  {
    text: "Let's _____ to the point.",
    answer: "get",
    category: "business",
    translation: "Vayamos al grano.",
    explanation: "Hablar directamente sobre el tema principal sin rodeos."
  },
  {
    text: "We're on the same _____.",
    answer: "page",
    category: "business",
    translation: "Estamos en la misma página/Estamos de acuerdo.",
    explanation: "Tener el mismo entendimiento o estar de acuerdo sobre algo."
  },
  {
    text: "Let's _____ this meeting started.",
    answer: "get",
    category: "business",
    translation: "Comencemos esta reunión.",
    explanation: "Iniciar formalmente una reunión o evento."
  },
  {
    text: "We need to _____ up with the competition.",
    answer: "keep",
    category: "business",
    translation: "Necesitamos mantenernos al día con la competencia.",
    explanation: "Mantenerse actualizado o al mismo nivel que otros."
  },
  {
    text: "This project is a top _____.",
    answer: "priority",
    category: "business",
    translation: "Este proyecto es una prioridad máxima.",
    explanation: "Algo que es muy importante y debe tratarse primero."
  },

  // Expresiones académicas
  {
    text: "This theory has been _____ to criticism.",
    answer: "subject",
    category: "academic",
    translation: "Esta teoría ha sido objeto de críticas.",
    explanation: "Algo que ha recibido críticas o análisis."
  },
  {
    text: "The research _____ light on this issue.",
    answer: "sheds",
    category: "academic",
    translation: "La investigación arroja luz sobre este tema.",
    explanation: "Proporcionar información o claridad sobre algo."
  },
  {
    text: "This finding _____ significant implications.",
    answer: "has",
    category: "academic",
    translation: "Este hallazgo tiene implicaciones significativas.",
    explanation: "Tener consecuencias o efectos importantes."
  },
  {
    text: "The author _____ a compelling argument.",
    answer: "makes",
    category: "academic",
    translation: "El autor presenta un argumento convincente.",
    explanation: "Presentar un razonamiento persuasivo."
  },
  {
    text: "This concept is _____ to understand.",
    answer: "difficult",
    category: "academic",
    translation: "Este concepto es difícil de entender.",
    explanation: "Algo que requiere esfuerzo para comprender."
  },
  {
    text: "The data _____ that the hypothesis is correct.",
    answer: "suggests",
    category: "academic",
    translation: "Los datos sugieren que la hipótesis es correcta.",
    explanation: "Indicar o apuntar hacia una conclusión."
  },
  {
    text: "This study _____ previous research.",
    answer: "builds on",
    category: "academic",
    translation: "Este estudio se basa en investigaciones anteriores.",
    explanation: "Continuar o expandir trabajo previo."
  },
  {
    text: "The results are _____ with our expectations.",
    answer: "consistent",
    category: "academic",
    translation: "Los resultados son consistentes con nuestras expectativas.",
    explanation: "Estar en línea o de acuerdo con algo."
  },
  {
    text: "This theory has been widely _____.",
    answer: "accepted",
    category: "academic",
    translation: "Esta teoría ha sido ampliamente aceptada.",
    explanation: "Algo que es generalmente reconocido como válido."
  },
  {
    text: "The author _____ to several key studies.",
    answer: "refers",
    category: "academic",
    translation: "El autor hace referencia a varios estudios clave.",
    explanation: "Mencionar o citar algo como referencia."
  },

  // Jerga/Argot
  {
    text: "That movie was totally _____!",
    answer: "awesome",
    category: "slang",
    translation: "¡Esa película fue totalmente increíble!",
    explanation: "Expresión informal para indicar que algo es muy bueno."
  },
  {
    text: "I'm _____ out.",
    answer: "hanging",
    category: "slang",
    translation: "Estoy pasando el rato.",
    explanation: "Pasar tiempo de forma relajada, generalmente con amigos."
  },
  {
    text: "That's so _____!",
    answer: "cool",
    category: "slang",
    translation: "¡Eso es genial!",
    explanation: "Expresión informal para mostrar aprobación."
  },
  {
    text: "I'm _____ broke.",
    answer: "totally",
    category: "slang",
    translation: "Estoy completamente sin dinero.",
    explanation: "No tener nada de dinero."
  },
  {
    text: "That's _____ up!",
    answer: "messed",
    category: "slang",
    translation: "¡Eso está mal/es injusto!",
    explanation: "Expresión para indicar que algo es injusto o está mal."
  },
  {
    text: "I'm _____ with that.",
    answer: "down",
    category: "slang",
    translation: "Estoy de acuerdo con eso.",
    explanation: "Estar de acuerdo o dispuesto a hacer algo."
  },
  {
    text: "That party was _____!",
    answer: "lit",
    category: "slang",
    translation: "¡Esa fiesta estuvo increíble!",
    explanation: "Expresión para indicar que algo fue muy emocionante o divertido."
  },
  {
    text: "He's my _____.",
    answer: "bro",
    category: "slang",
    translation: "Él es mi hermano/amigo cercano.",
    explanation: "Término informal para referirse a un amigo cercano."
  },
  {
    text: "That's _____ sick!",
    answer: "totally",
    category: "slang",
    translation: "¡Eso es totalmente genial!",
    explanation: "En jerga moderna, 'sick' puede significar algo impresionante o excelente."
  },
  {
    text: "I'm _____ out.",
    answer: "chilling",
    category: "slang",
    translation: "Estoy relajándome.",
    explanation: "Pasar el tiempo de forma relajada."
  },

  // Proverbios
  {
    text: "A bird in the hand is worth _____ in the bush.",
    answer: "two",
    category: "proverbs",
    translation: "Más vale pájaro en mano que ciento volando.",
    explanation: "Es mejor tener algo seguro que arriesgarse por algo potencialmente mejor pero incierto."
  },
  {
    text: "Don't count your chickens before they _____.",
    answer: "hatch",
    category: "proverbs",
    translation: "No cuentes tus pollos antes de que nazcan.",
    explanation: "No des por hecho algo antes de que realmente suceda."
  },
  {
    text: "The early bird catches the _____.",
    answer: "worm",
    category: "proverbs",
    translation: "A quien madruga, Dios le ayuda.",
    explanation: "Quien actúa temprano o con prontitud tiene más posibilidades de éxito."
  },
  {
    text: "Actions speak louder than _____.",
    answer: "words",
    category: "proverbs",
    translation: "Las acciones hablan más fuerte que las palabras.",
    explanation: "Lo que una persona hace es más significativo que lo que dice."
  },
  {
    text: "All that glitters is not _____.",
    answer: "gold",
    category: "proverbs",
    translation: "No todo lo que brilla es oro.",
    explanation: "Las apariencias pueden ser engañosas."
  },
  {
    text: "Don't put all your eggs in one _____.",
    answer: "basket",
    category: "proverbs",
    translation: "No pongas todos los huevos en una canasta.",
    explanation: "No arriesgues todo en una sola oportunidad o inversión."
  },
  {
    text: "The pen is mightier than the _____.",
    answer: "sword",
    category: "proverbs",
    translation: "La pluma es más poderosa que la espada.",
    explanation: "La comunicación y la educación son más efectivas que la fuerza o la violencia."
  },
  {
    text: "When in Rome, do as the Romans _____.",
    answer: "do",
    category: "proverbs",
    translation: "Donde fueres, haz lo que vieres.",
    explanation: "Adaptarse a las costumbres y normas del lugar donde uno se encuentra."
  },
  {
    text: "You can't teach an old dog new _____.",
    answer: "tricks",
    category: "proverbs",
    translation: "No se puede enseñar trucos nuevos a un perro viejo.",
    explanation: "Es difícil que las personas mayores o con hábitos arraigados cambien su forma de ser o aprendan cosas nuevas."
  },
  {
    text: "A stitch in time saves _____.",
    answer: "nine",
    category: "proverbs",
    translation: "Más vale prevenir que curar.",
    explanation: "Es mejor resolver un problema cuando es pequeño que esperar a que se haga grande."
  }
];
