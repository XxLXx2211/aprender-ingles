// Gran base de datos de 2000 adjetivos en inglés
// Estructura: adjetivos con sus formas comparativas y superlativas

// Función para generar automáticamente las formas comparativas y superlativas
const generateForms = (adjective) => {
  // Adjetivos irregulares conocidos
  const irregulars = {
    'good': { comparative: 'better', superlative: 'best' },
    'bad': { comparative: 'worse', superlative: 'worst' },
    'far': { comparative: 'farther', superlative: 'farthest' },
    'little': { comparative: 'less', superlative: 'least' },
    'many': { comparative: 'more', superlative: 'most' },
    'much': { comparative: 'more', superlative: 'most' },
    'old': { comparative: 'older/elder', superlative: 'oldest/eldest' },
  };

  // Verificar si es un adjetivo irregular conocido
  if (irregulars[adjective]) {
    return {
      word: adjective,
      comparative: irregulars[adjective].comparative,
      superlative: irregulars[adjective].superlative,
      category: 'irregular'
    };
  }

  // Reglas para adjetivos regulares
  if (adjective.length >= 8) {
    // Adjetivos largos (3+ sílabas generalmente)
    return {
      word: adjective,
      comparative: `more ${adjective}`,
      superlative: `most ${adjective}`,
      category: 'long'
    };
  } else if (adjective.endsWith('y') && !['a', 'e', 'i', 'o', 'u'].includes(adjective.charAt(adjective.length - 2))) {
    // Adjetivos terminados en 'y' precedida por consonante
    const stem = adjective.slice(0, -1);
    return {
      word: adjective,
      comparative: `${stem}ier`,
      superlative: `${stem}iest`,
      category: 'short',
      rule: 'y-ending'
    };
  } else if (adjective.endsWith('e')) {
    // Adjetivos terminados en 'e'
    return {
      word: adjective,
      comparative: `${adjective}r`,
      superlative: `${adjective}st`,
      category: 'short',
      rule: 'e-ending'
    };
  } else if (
    adjective.length <= 6 &&
    !['a', 'e', 'i', 'o', 'u'].includes(adjective.charAt(adjective.length - 1)) &&
    ['a', 'e', 'i', 'o', 'u'].includes(adjective.charAt(adjective.length - 2)) &&
    !['a', 'e', 'i', 'o', 'u'].includes(adjective.charAt(adjective.length - 3))
  ) {
    // Adjetivos cortos con patrón consonante-vocal-consonante
    return {
      word: adjective,
      comparative: `${adjective}${adjective.charAt(adjective.length - 1)}er`,
      superlative: `${adjective}${adjective.charAt(adjective.length - 1)}est`,
      category: 'short',
      rule: 'doubling'
    };
  } else if (adjective.length <= 7) {
    // Otros adjetivos cortos
    return {
      word: adjective,
      comparative: `${adjective}er`,
      superlative: `${adjective}est`,
      category: 'short',
      rule: 'regular'
    };
  } else {
    // Por defecto, tratar como adjetivo largo
    return {
      word: adjective,
      comparative: `more ${adjective}`,
      superlative: `most ${adjective}`,
      category: 'long'
    };
  }
};

// Lista de adjetivos (2000 en total)
const adjectivesList = [
  // Primeros 300 (A-D)
  'able', 'absent', 'absolute', 'abstract', 'abundant', 'academic', 'acceptable', 'accurate', 'acid', 'active',
  'actual', 'acute', 'admirable', 'adored', 'adoring', 'adventurous', 'affected', 'afraid', 'aged', 'aggressive',
  'agile', 'airy', 'alarming', 'alive', 'all', 'alleged', 'allergic', 'allied', 'alone', 'amazing',
  'ambitious', 'amiable', 'amicable', 'amused', 'amusing', 'ancient', 'angelic', 'angry', 'animated', 'annoyed',
  'annoying', 'anxious', 'any', 'apart', 'appalling', 'appealing', 'apprehensive', 'appropriate', 'arbitrary', 'architectural',
  'arid', 'arrogant', 'artificial', 'artistic', 'ashamed', 'asleep', 'astonishing', 'athletic', 'attached', 'attentive',
  'attractive', 'atypical', 'audacious', 'auspicious', 'authentic', 'authoritative', 'automatic', 'available', 'avid', 'awake',
  'aware', 'awful', 'awkward', 'babyish', 'back', 'bad', 'baffling', 'balanced', 'bald', 'barefoot',
  'barren', 'basic', 'battered', 'beaming', 'beautiful', 'believable', 'belligerent', 'beloved', 'beneficial', 'bent',
  'best', 'better', 'bewildered', 'big', 'blissful', 'bloody', 'blossoming', 'blue', 'blush', 'boastful',
  'bold', 'bony', 'bored', 'boring', 'bouncy', 'boundless', 'brainy', 'brave', 'breakable', 'brief',
  'bright', 'brisk', 'broad', 'broken', 'bronze', 'bubbly', 'bulky', 'bumpy', 'buoyant', 'busy',
  'buttery', 'buzzing', 'calamitous', 'callous', 'calm', 'candid', 'canine', 'capable', 'capricious', 'careful',
  'careless', 'caring', 'cautious', 'cavernous', 'celebrated', 'central', 'certain', 'changeable', 'charming', 'cheap',
  'cheerful', 'chemical', 'chief', 'childish', 'childlike', 'chilly', 'chivalrous', 'chubby', 'circular', 'classic',
  'clean', 'clear', 'clever', 'clinical', 'cloudy', 'clueless', 'clumsy', 'coarse', 'coastal', 'cognitive',
  'cold', 'colorful', 'colossal', 'combative', 'comfortable', 'commercial', 'common', 'compact', 'compassionate', 'competent',
  'complete', 'complex', 'complicated', 'composed', 'concrete', 'confident', 'confused', 'confusing', 'conscious', 'consequent',
  'conservative', 'considerable', 'consistent', 'constant', 'contagious', 'contemporary', 'content', 'continual', 'continuous', 'contrary',
  'controlled', 'conventional', 'convinced', 'convincing', 'cool', 'cooperative', 'corporate', 'correct', 'cosmic', 'costly',
  'courageous', 'courteous', 'coy', 'cozy', 'cracked', 'crafted', 'crafty', 'cranky', 'crass', 'creative',
  'credible', 'creepy', 'criminal', 'crisp', 'critical', 'crooked', 'crowded', 'crude', 'cruel', 'cryptic',
  'cultured', 'cumulative', 'curious', 'curly', 'curt', 'curved', 'customary', 'cute', 'cynical', 'dainty',
  'damaged', 'damp', 'dangerous', 'dapper', 'daring', 'dark', 'dazzling', 'dead', 'deaf', 'deceiving',
  'decent', 'decisive', 'dedicated', 'deep', 'defeated', 'defensive', 'defiant', 'deficient', 'definite', 'deliberate',
  'delicate', 'delicious', 'delightful', 'delusional', 'democratic', 'dense', 'dependent', 'depressed', 'depressing', 'descriptive',
  'deserted', 'desirable', 'desired', 'desirous', 'desperate', 'detached', 'determined', 'devout', 'different', 'difficult',
  'digital', 'diligent', 'dim', 'diminished', 'dirty', 'disabled', 'disadvantaged', 'disappointed', 'disappointing', 'disastrous',

  // Siguientes 300 (D-I)
  'discreet', 'disgusted', 'disgusting', 'disheartened', 'dishonest', 'disillusioned', 'indispensable', 'disorderly', 'disoriented', 'dispirited',
  'displeased', 'disproportionate', 'distressed', 'disturbing', 'diverse', 'dizzy', 'dominant', 'double', 'doubtful', 'down',
  'dreary', 'drowsy', 'drunk', 'dry', 'dual', 'dull', 'dutiful', 'dynamic', 'eager', 'early',
  'earnest', 'earthy', 'easy', 'economic', 'educated', 'efficient', 'elaborate', 'elderly', 'electric', 'electrical',
  'electronic', 'elegant', 'elemental', 'elementary', 'eligible', 'eloquent', 'embarrassed', 'embarrassing', 'embodied', 'emotional',
  'empowered', 'empty', 'enchanted', 'enchanting', 'endless', 'energetic', 'enforced', 'engaged', 'engaging', 'enhanced',
  'enigmatic', 'enjoyable', 'enormous', 'enough', 'enraged', 'entertaining', 'enthusiastic', 'entire', 'environmental', 'envious',
  'equal', 'equivalent', 'erroneous', 'essential', 'established', 'esteemed', 'ethical', 'euphoric', 'even', 'evident',
  'evil', 'exact', 'excellent', 'exceptional', 'excessive', 'excited', 'exciting', 'exclusive', 'exotic', 'expanded',
  'expansive', 'expected', 'expensive', 'expert', 'expired', 'explicit', 'explosive', 'exposed', 'expressive', 'exquisite',
  'extended', 'extensive', 'external', 'extra', 'extraordinary', 'extravagant', 'extreme', 'exultant', 'fabulous', 'faded',
  'faint', 'fair', 'faithful', 'false', 'familiar', 'famous', 'fancy', 'fantastic', 'far', 'fascinated',
  'fascinating', 'fast', 'fat', 'faulty', 'favorable', 'favorite', 'fearful', 'fearless', 'feasible', 'feeble',
  'feminine', 'fertile', 'festive', 'few', 'fierce', 'fiery', 'financial', 'fine', 'finished', 'first',
  'fit', 'fixed', 'flaky', 'flamboyant', 'flashy', 'flat', 'flawless', 'fleeting', 'flexible', 'flimsy',
  'flippant', 'floaty', 'floppy', 'flowery', 'fluffy', 'fluid', 'flustered', 'foggy', 'foiled', 'folded',
  'foolish', 'forceful', 'foremost', 'foretold', 'forever', 'forgetful', 'formidable', 'foul', 'fragile', 'fragrant',
  'frail', 'frank', 'frantic', 'fresh', 'frequent', 'friendly', 'frightened', 'frightening', 'frigid', 'front',
  'frustrated', 'frustrating', 'full', 'fumbling', 'functional', 'funny', 'furry', 'fussy', 'futuristic', 'fuzzy',
  'galactic', 'gallant', 'gaping', 'garrulous', 'gaseous', 'general', 'generous', 'genial', 'gentle', 'genuine',
  'ghastly', 'gifted', 'gigantic', 'giddy', 'girly', 'glamorous', 'gleaming', 'glistening', 'global', 'gloomy',
  'glorious', 'glossy', 'glum', 'golden', 'good', 'gorgeous', 'graceful', 'gracious', 'gradual', 'grand',
  'graphic', 'grateful', 'gratuitous', 'grave', 'greasy', 'great', 'greedy', 'green', 'gregarious', 'grey',
  'grieving', 'grim', 'gritty', 'grounded', 'growing', 'growling', 'gruesome', 'grumpy', 'guarded', 'guiltless',
  'guilty', 'gummy', 'hairy', 'half', 'halting', 'handy', 'happy', 'hard', 'harmful', 'harmless',
  'harmonious', 'harsh', 'hasty', 'hateful', 'haughty', 'hazy', 'healthy', 'heartbreaking', 'heartfelt', 'hearty',
  'heavenly', 'heavy', 'helpful', 'helpless', 'hesitant', 'hidden', 'high', 'hilarious', 'historical', 'hoarse',
  'hollow', 'holy', 'honest', 'honorable', 'hopeful', 'hopeless', 'horrible', 'horrified', 'hostile', 'hot',
  'huge', 'humble', 'humid', 'humorous', 'hungry', 'hurt', 'hushed', 'husky', 'icy', 'ideal',

  // Siguientes 300 (I-P)
  'identical', 'idle', 'ignorant', 'ill', 'illegal', 'illegitimate', 'illicit', 'illiterate', 'illustrious', 'imaginary',
  'imaginative', 'immortal', 'impartial', 'impatient', 'impeccable', 'important', 'impressed', 'impressive', 'improbable', 'improper',
  'improved', 'impudent', 'impure', 'incapacitated', 'inadequate', 'inanimate', 'inappropriate', 'inauspicious', 'incensed', 'inclined',
  'incoherent', 'incomplete', 'incongruous', 'inconsiderate', 'inconsistent', 'independent', 'indiscreet', 'indistinct', 'individual', 'indolent',
  'industrial', 'ineffective', 'ineffectual', 'inevitable', 'inexperienced', 'infamous', 'infantile', 'inferior', 'infinite', 'informal',
  'informed', 'infrequent', 'inherent', 'inherited', 'inhibited', 'inhuman', 'initial', 'injured', 'innocent', 'innovative',
  'inquisitive', 'insecure', 'insignificant', 'insincere', 'insistent', 'insolent', 'inspired', 'inspiring', 'instantaneous', 'instrumental',
  'insufficient', 'intact', 'integral', 'integrated', 'intelligent', 'intended', 'intense', 'intensive', 'interested', 'interesting',
  'interior', 'internal', 'international', 'intimidating', 'intoxicated', 'intrepid', 'intriguing', 'intrinsic', 'introverted', 'intuitive',
  'invalid', 'invaluable', 'inventive', 'inverse', 'invisible', 'invited', 'inviting', 'involuntary', 'involved', 'iridescent',
  'irritable', 'irritated', 'isolating', 'isolated', 'itchy', 'jazzy', 'jealous', 'jittery', 'joint', 'jolly',
  'joyful', 'joyous', 'jubilant', 'judicious', 'juicy', 'jumbo', 'jumpy', 'just', 'keen', 'kind',
  'knowledgeable', 'known', 'laborious', 'lacking', 'lame', 'landlocked', 'large', 'last', 'lasting', 'late',
  'latter', 'lax', 'lazy', 'leading', 'leafy', 'lean', 'learned', 'least', 'leather', 'left',
  'legal', 'legendary', 'legislative', 'legitimate', 'lengthy', 'less', 'lethal', 'level', 'liable', 'liberal',
  'licensed', 'life', 'light', 'liked', 'likely', 'limited', 'limp', 'linear', 'linguistic', 'liquid',
  'listless', 'literal', 'literate', 'little', 'lively', 'living', 'local', 'logical', 'lonely', 'long',
  'loose', 'lopsided', 'loud', 'lovable', 'lovely', 'loving', 'low', 'lower', 'loyal', 'lucid',
  'lucky', 'lukewarm', 'luminous', 'lumpy', 'luscious', 'lush', 'lustrous', 'luxurious', 'mad', 'majestic',
  'major', 'male', 'malicious', 'manageable', 'manic', 'manifest', 'manipulative', 'manual', 'many', 'marble',
  'married', 'marvelous', 'massive', 'maternal', 'mauve', 'maximum', 'meager', 'mean', 'meaningful', 'medical',
  'medieval', 'melancholy', 'mellow', 'melodic', 'memorable', 'mental', 'mercantile', 'merciful', 'mere', 'merry',
  'messy', 'metallic', 'methodical', 'meticulous', 'middle', 'mighty', 'mild', 'military', 'milky', 'mindful',
  'mindless', 'mini', 'minimal', 'minor', 'miraculous', 'mischievous', 'misguided', 'misty', 'mixed', 'mobile',
  'moderate', 'modern', 'modest', 'moist', 'molecular', 'molten', 'monetary', 'moody', 'moral', 'morbid',
  'more', 'morose', 'mortal', 'most', 'motherly', 'motivated', 'mournful', 'muddy', 'muddled', 'mundane',
  'municipal', 'murky', 'muscular', 'musty', 'mute', 'mystical', 'mythic', 'naive', 'narrow', 'nasty',
  'national', 'native', 'natural', 'nautical', 'near', 'neat', 'necessary', 'negative', 'neglected', 'negligible',
  'neighborly', 'needy', 'nefarious', 'nervous', 'new', 'newborn', 'nice', 'nifty', 'nimble', 'noble',
  'noisy', 'nonchalant', 'normal', 'nostalgic', 'notable', 'noted', 'noteworthy', 'notorious', 'novel', 'noxious',

  // Siguientes 300 (N-S)
  'numb', 'numerous', 'obedient', 'obese', 'objective', 'oblique', 'oblivious', 'obscure', 'observant', 'obsolete',
  'occasional', 'occupied', 'odd', 'offbeat', 'offensive', 'official', 'oily', 'old', 'ominous', 'only',
  'open', 'operating', 'operative', 'opportunistic', 'opposed', 'opposite', 'optimal', 'optimistic', 'optional', 'oral',
  'ordinary', 'organic', 'organized', 'original', 'ornate', 'orphaned', 'orthodox', 'ostentatious', 'other', 'outdoor',
  'outer', 'outgoing', 'outstanding', 'oval', 'overall', 'overconfident', 'overcooked', 'overdue', 'overhand', 'overjoyed',
  'overlooked', 'overripe', 'overseas', 'overt', 'overweight', 'overwhelming', 'painful', 'painless', 'painted', 'pale',
  'pampered', 'panicky', 'parallel', 'parental', 'parked', 'partial', 'passionate', 'past', 'paternal', 'patient',
  'patriotic', 'peaceful', 'peculiar', 'pending', 'pensive', 'perched', 'perfect', 'periodic', 'permanent', 'permissible',
  'perpetual', 'perplexed', 'personal', 'persuasive', 'pertinent', 'pessimistic', 'petite', 'philosophical', 'physical', 'picturesque',
  'piercing', 'pink', 'picturesque', 'pillowy', 'pitted', 'pivotal', 'placid', 'plain', 'plastic', 'playful',
  'pleasant', 'pleased', 'pleasing', 'pliable', 'plural', 'poignant', 'pointed', 'pointless', 'poised', 'polished',
  'polite', 'political', 'poor', 'popular', 'portable', 'positive', 'possible', 'posthumous', 'potential', 'potent',
  'powerful', 'powerless', 'practical', 'precious', 'precise', 'predictable', 'preferred', 'pregnant', 'preliminary', 'premature',
  'premier', 'prepared', 'present', 'pressed', 'pressing', 'prevalent', 'previous', 'pricey', 'prickly', 'primary',
  'prime', 'primitive', 'principal', 'prior', 'pristine', 'private', 'probable', 'problematic', 'proficient', 'profound',
  'progressive', 'prominent', 'promised', 'proper', 'prophetic', 'proportionate', 'prosperous', 'protective', 'proud', 'provincial',
  'provoking', 'prudent', 'psychological', 'public', 'puffy', 'pulpy', 'punctilious', 'punctured', 'pungent', 'pure',
  'purposeful', 'pushy', 'puzzled', 'quaint', 'qualified', 'quality', 'quarrelsome', 'quaint', 'quarantined', 'quarterly',
  'quasar', 'quaking', 'qualified', 'quantitative', 'queer', 'quenched', 'querulous', 'questioning', 'quick', 'quiescent',
  'quiet', 'quirked', 'quirky', 'quizzical', 'quivering', 'rabid', 'racial', 'radiant', 'radical', 'ragged',
  'rambling', 'rampant', 'random', 'rangy', 'rapid', 'rare', 'rash', 'raw', 'ready', 'real',
  'realistic', 'reasonable', 'rebellious', 'receptive', 'reciprocal', 'reckless', 'recognized', 'rectangular', 'red', 'referent',
  'refined', 'reflective', 'regal', 'regional', 'regular', 'relevant', 'reliable', 'reluctant', 'remarkable', 'remedied',
  'remorseful', 'remote', 'removed', 'renowned', 'repeated', 'repentant', 'replaceable', 'reprehensible', 'representative', 'repressed',
  'reputed', 'required', 'resentful', 'reserved', 'residential', 'resilient', 'resistant', 'resolute', 'resourceful', 'respected',
  'respectful', 'responsible', 'responsive', 'restless', 'restored', 'restrained', 'restrictive', 'retired', 'revealing', 'reveling',
  'revengeful', 'revered', 'reverent', 'reversible', 'revived', 'revolutionary', 'rewarding', 'rhetorical', 'rich', 'righteous',
  'rigid', 'rigorous', 'risible', 'rival', 'robotic', 'robust', 'rocky', 'romantic', 'roomy', 'rooted',
  'rosy', 'rough', 'round', 'routine', 'royal', 'rubbery', 'rude', 'rugged', 'ruined', 'running',
  'rural', 'rustic', 'ruthless', 'sacked', 'sacred', 'sacrificed', 'sad', 'safe', 'soggy', 'said',

  // Últimos adjetivos (S-Z)
  'saintly', 'salient', 'salted', 'salty', 'same', 'sandy', 'sarcastic', 'satisfied', 'satisfying', 'savory',
  'scandalous', 'scarce', 'scared', 'scary', 'scattered', 'skeptical', 'scholarly', 'scientific', 'scornful', 'scratchy',
  'screaming', 'scraggly', 'secretive', 'seduced', 'sedentary', 'selfish', 'sensible', 'sensitive', 'sensory', 'sensual',
  'sensuous', 'separate', 'serene', 'serious', 'serpentine', 'serrated', 'set', 'severe', 'shaky', 'shallow',
  'sham', 'shamefaced', 'shameful', 'shameless', 'sharp', 'shattered', 'sheepish', 'sheer', 'shiny', 'shivering',
  'shoddy', 'short', 'showy', 'shrewd', 'shrill', 'shy', 'sick', 'significant', 'silent', 'silky',
  'silly', 'silver', 'similar', 'simple', 'sincere', 'sinister', 'sinking', 'skinny', 'sleepy', 'slight',
  'slim', 'slippery', 'slow', 'small', 'smart', 'smelly', 'smiling', 'smoggy', 'smooth', 'smug',
  'sneaky', 'sniveling', 'snoopy', 'soaking', 'social', 'soft', 'solemn', 'solicitous', 'solid', 'solitary',
  'somber', 'sophisticated', 'sore', 'sorrowful', 'soulful', 'sound', 'sour', 'southern', 'spatial', 'special',
  'specific', 'spicy', 'spirited', 'spiritual', 'splendid', 'spotless', 'spotted', 'sprawling', 'spry', 'squeaky',
  'squirming', 'stained', 'stale', 'standing', 'static', 'statuesque', 'staunch', 'steady', 'steep', 'sticky',
  'stiff', 'still', 'stinging', 'stingy', 'stormy', 'stout', 'straight', 'strange', 'strategic', 'stray',
  'streaked', 'street', 'stressed', 'striking', 'striped', 'strong', 'structural', 'stubborn', 'stunned', 'stunning',
  'sturdy', 'stylish', 'suave', 'submissive', 'subsequent', 'substantial', 'subtle', 'suburban', 'successful', 'succinct',
  'sudden', 'sufficient', 'suggestive', 'suitable', 'sulky', 'sullen', 'sumptuous', 'sunny', 'super', 'superb',
  'superficial', 'superior', 'superlative', 'supportive', 'supreme', 'sure', 'surprised', 'surprising', 'suspicious', 'sustained',
  'swanky', 'swarming', 'sweaty', 'sweet', 'sweeping', 'swift', 'sympathetic', 'synchronized', 'synonymous', 'synthetic',
  'tacit', 'tactical', 'talented', 'talkative', 'tall', 'tame', 'tangy', 'tangled', 'tanned', 'tart',
  'tasteful', 'tasteless', 'tasty', 'tattered', 'taut', 'tawdry', 'tearful', 'teasing', 'technical', 'tedious',
  'teenage', 'temporary', 'tenacious', 'tender', 'tense', 'tentative', 'tepid', 'terrible', 'terrific', 'territorial',
  'tested', 'thankful', 'therapeutic', 'thick', 'thin', 'thirsty', 'thorny', 'thorough', 'thoughtful', 'thoughtless',
  'threatening', 'thriving', 'timid', 'tiny', 'tired', 'tiresome', 'torn', 'total', 'touchy', 'tough',
  'towering', 'traditional', 'trained', 'tranquil', 'translucent', 'transparent', 'trapped', 'trashy', 'traumatic', 'treacherous',
  'trendy', 'tribal', 'tricky', 'trim', 'triumphant', 'trivial', 'tropical', 'troubled', 'troubling', 'true',
  'trusting', 'trustworthy', 'truthful', 'tubby', 'turbulent', 'turquoise', 'twisted', 'typical', 'ugly', 'ultimate',
  'unbearable', 'unbiased', 'uncertain', 'unconcerned', 'uncomfortable', 'unconscious', 'unconventional', 'uncooperative', 'underdeveloped', 'understated',
  'undesirable', 'undisturbed', 'undivided', 'undoubted', 'uneasy', 'uneducated', 'unemployed', 'unequal', 'uneven', 'unexpected',
  'unfair', 'unfaithful', 'unfamiliar', 'unfavorable', 'unfinished', 'unforgivable', 'unfortunate', 'unfriendly', 'unfurnished', 'ungenerous',
  'ungrateful', 'unhappy', 'unhealthy', 'uniform', 'unilateral', 'unimportant', 'unique', 'united', 'unjust', 'unkind',
  'unknown', 'unlawful', 'unlikely', 'unlimited', 'unloaded', 'unlucky', 'unmet', 'unnatural', 'unnecessary', 'unofficial',
  'unpleasant', 'unpredictable', 'unprepared', 'unproductive', 'unprofessional', 'unprofitable', 'unqualified', 'unrealistic', 'unreasonable', 'unrelated',
  'unreliable', 'unselfish', 'unsteady', 'successful', 'unsuitable', 'unsuspecting', 'untamed', 'untidy', 'untimely', 'untrained',
  'unusual', 'unwary', 'unwelcome', 'unwilling', 'unyielding', 'upbeat', 'upcoming', 'upper', 'upright', 'upset',
  'urban', 'urgent', 'used', 'useful', 'useless', 'usual', 'vacant', 'vague', 'valid', 'valuable',
  'varied', 'various', 'vast', 'veiled', 'velvety', 'vendetta', 'venal', 'vengeful', 'venomous', 'venturesome',
  'verbose', 'verifiable', 'verified', 'vernacular', 'versatile', 'vested', 'veteran', 'viable', 'vibrant', 'vicious',
  'victorious', 'vigilant', 'vigorous', 'vile', 'villainous', 'vindictive', 'vintage', 'violet', 'viral', 'virtual',
  'virtuous', 'visible', 'visionary', 'vital', 'vivacious', 'vivid', 'vocal', 'void', 'volcanic', 'voluntary',
  'voracious', 'vulnerable', 'wary', 'washed', 'wasted', 'watchful', 'watery', 'weak', 'wealthy', 'weary',
  'weathered', 'wedding', 'weeping', 'welcome', 'well', 'wet', 'whimsical', 'whisked', 'whole', 'wholesome',
  'wide', 'wild', 'willing', 'wily', 'windy', 'winged', 'winning', 'wise', 'wistful', 'witty',
  'wobbling', 'woeful', 'wooden', 'woolly', 'wordy', 'worn', 'worried', 'worrying', 'worse', 'worst',
  'worthful', 'worthless', 'worthwhile', 'worthy', 'wrathful', 'wrecked', 'wrenched', 'wretched', 'wrinkled', 'wrong',
  'wry', 'yawning', 'yearly', 'zealous', 'zany', 'zapped', 'zesty', 'zigzag', 'zipping', 'zoned',
  'zooming', 'absentminded', 'accessible', 'adroit', 'aesthetic', 'aghast', 'airborne', 'altruistic', 'amicable', 'anonymous',
  'aquatic', 'arrogant', 'articulate', 'astounding', 'authoritarian', 'benevolent', 'blasphemous', 'boisterous', 'bogus', 'bovine',
  'callous', 'candid', 'carnivorous', 'cavalier', 'celestial', 'charismatic', 'chronic', 'civil', 'clandestine', 'coherent',
  'coherent', 'combative', 'commendable', 'compelling', 'concise', 'conniving', 'conspicuous', 'conversant', 'convoluted', 'cordial',
  'corpulent', 'corrosive', 'counterfeit', 'credible', 'cryptic', 'culpable', 'cumulative', 'customary', 'cutting', 'cynical',
  'dazzling', 'decadent', 'deceptive', 'deferential', 'defunct', 'deliberate', 'delirious', 'deniable', 'deplorable', 'derogatory',
  'desolate', 'despicable', 'destructive', 'detrimental', 'devious', 'diligent', 'dimwitted', 'diplomatic', 'discerning', 'discordant',
  'dismal', 'dismissive', 'disparate', 'dispassionate', 'distinct', 'distinctive', 'docile', 'dormant', 'draconian', 'dreary',
  'dubious', 'ductile', 'dynamic', 'eccentric', 'eclectic', 'ecstatic', 'eloquent', 'elusive', 'empathetic', 'empowered',
  'enigmatic', 'equitable', 'evasive', 'exemplary', 'exhaustive', 'exorbitant', 'expedient', 'exquisite', 'facetious', 'fallacious',
  'farcical', 'fastidious', 'feral', 'fervent', 'fickle', 'flamboyant', 'florid', 'foamy', 'forensic', 'formidable',
  'fraudulent', 'frivolous', 'fundamental', 'furious', 'gargantuan', 'gaudy', 'generic', 'genuine', 'gloomy', 'gracious',
  'grasping', 'gregarious', 'grim', 'guttural', 'habitable', 'harmonious', 'heinous', 'hereditary', 'hideous', 'homogeneous',
  'humble', 'hypocritical', 'ideal', 'ideological', 'ignominious', 'illegitimate', 'immaculate', 'imminent', 'impartial', 'imperative',
  'impetuous', 'impeccable', 'impervious', 'implicit', 'impromptu', 'impudent', 'incandescent', 'incisive', 'incredible', 'indigenous',
  'indolent', 'infamous', 'infinitesimal', 'inherent', 'innate', 'innocuous', 'insatiable', 'insidious', 'insolent', 'intermittent',
  'intolerant', 'intricate', 'intuitive', 'invigorating', 'invincible', 'jubilant', 'judicious', 'kindred', 'lackadaisical', 'lamentable',
  'laudable', 'lavish', 'legitimate', 'lethargic', 'loquacious', 'lucid', 'luminous', 'lurid', 'magnanimous', 'malevolent',
  'malleable', 'mediocre', 'meeker', 'meticulous', 'migratory', 'militant', 'minuscule', 'mirthful', 'mischievous', 'mundane',
  'munificent', 'mysterious', 'mythical', 'narcissistic', 'nefarious', 'negligible', 'nimble', 'nomadic', 'nonchalant', 'notorious',
  'noxious', 'nudist', 'nurturing', 'obese', 'objective', 'oblivious', 'obscure', 'obsolete', 'officious', 'ominous',
  'opulent', 'ornate', 'ostentatious', 'pacifist', 'palatable', 'palpable', 'paramount', 'passive', 'paternalistic', 'peculiar',
  'penitent', 'pensive', 'perilous', 'perpetual', 'petulant', 'philanthropic', 'phlegmatic', 'plausible', 'poignant', 'ponderous',
  'precarious', 'precise', 'precocious', 'predatory', 'premeditated', 'pretentious', 'primal', 'pristine', 'proficient', 'prolific',
  'prominent', 'prophetic', 'prosaic', 'prudent', 'pugnacious', 'pulsating', 'punctual', 'pungent', 'puritanical', 'quaint',
  'quantitative', 'quirky', 'rambunctious', 'ravenous', 'reciprocal', 'redundant', 'reflective', 'relentless', 'remorseful', 'resilient',
  'resolute', 'resplendent', 'restive', 'reverent', 'rigorous', 'rustic', 'saccharine', 'sagacious', 'salient', 'sanctimonious',
  'sardonic', 'scurrilous', 'seditious', 'serendipitous', 'serene', 'skeptical', 'shrewd', 'simultaneous', 'sinuous', 'skeletal',
  'sluggish', 'solemn', 'solicited', 'solvent', 'sophomoric', 'spacious', 'sporadic', 'spurious', 'stagnant', 'staid',
  'stately', 'steadfast', 'stoic', 'stringent', 'submissive', 'subordinate', 'subservient', 'substantial', 'subtle', 'succulent',
  'superfluous', 'superlative', 'surly', 'susceptible', 'sycophantic', 'taciturn', 'tangible', 'tenacious', 'tentative', 'timid',
  'tenacious', 'tranquil', 'transient', 'translucent', 'treacherous', 'trepidatious', 'trite', 'truculent', 'tumultuous', 'ubiquitous',
  'unanimous', 'unblemished', 'uncanny', 'unctuous', 'undulating', 'unerring', 'unethical', 'unflappable', 'ungainly', 'unimpeachable',
  'unparalleled', 'unprecedented', 'unsavory', 'unscathed', 'unscrupulous', 'unwitting', 'uproarious', 'urbane', 'utopian', 'vacant',
  'vacillating', 'valiant', 'vapid', 'vehement', 'venal', 'venerable', 'venomous', 'verbose', 'verdant', 'verified',
  'vexatious', 'vibrant', 'vigilant', 'vindictive', 'virile', 'visceral', 'volatile', 'voluble', 'voracious', 'vulnerable',
  'whimsical', 'witty', 'wrathful', 'zealous', 'zesty', 'abhorrent', 'adamant', 'amorphous', 'austere', 'belligerent',
  'callous', 'capricious', 'clandestine', 'culpable', 'desolate', 'diffident', 'effervescent', 'ephemeral', 'fortuitous'
];

// Generar los adjetivos con sus formas
export const largeAdjectivesData = adjectivesList.map(adj => generateForms(adj));

// Exportar también la función para generar formas para poder usarla con el resto de adjetivos
export const generateAdjectiveForms = generateForms;
