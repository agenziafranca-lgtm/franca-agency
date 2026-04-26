export interface CaseStudy {
  slug: string
  client: string
  category: string
  tagline: string
  cardImage: string
  heroImage: string
  images: string[]
  services: string[]
  challenge: string
  approach: string[]
  results: { value: string; label: string }[]
  body: {
    section: string
    text: string
  }[]
}

export const cases: CaseStudy[] = [
  {
    slug: 'esse-ci-avvocati',
    client: 'Esse-CI Avvocati',
    category: 'Strategia Editoriale',
    tagline: 'Da stanza vuota a voce del diritto digitale.',
    cardImage: '/clients/esse-ci/cover.jpg',
    heroImage: '/clients/esse-ci/cover.jpg',
    images: ['/clients/esse-ci/02.jpg', '/clients/esse-ci/03.jpg'],
    services: ['Strategia editoriale', 'Social media management', 'Newsletter', 'Podcast', 'Shooting fotografico'],
    challenge: 'Esse-CI Avvocati è uno studio legale giovane con una competenza reale su diritto digitale, privacy e compliance — materie che interessano sempre più aziende ma che, nel modo sbagliato, annoiano tutti. Quando li abbiamo incontrati, pubblicavano live settimanali di un\'ora su temi tecnici, articoli pieni di gergo legale e post che sembravano circolari ministeriali. Parlavano ad una stanza vuota.',
    approach: [
      'Il primo passo è stato smettere di parlare agli avvocati e iniziare a parlare alle persone. Ogni argomento legale — dalla privacy dei dati all\'eredità digitale, dai droni come prove in tribunale ai contratti smart — esiste perché tocca la vita reale di qualcuno.',
      'Abbiamo trasformato i format esistenti: le live infinite sono diventate pillole veloci. Gli articoli tecnici sono diventati storie. "Privacy Today" è diventata una newsletter mensile che le persone aspettano — non una che archiviano senza leggere.',
      'Abbiamo anche lavorato sul lato umano dello studio: dietro ai titoli di avvocato ci sono persone con personalità, opinioni, passioni. Farle emergere ha cambiato il tono di tutto.',
    ],
    results: [
      { value: '10+', label: 'Articoli specialistici pubblicati' },
      { value: 'Mensile', label: 'Newsletter attiva e letta' },
      { value: '6 mesi', label: 'Per trasformare il posizionamento' },
    ],
    body: [
      {
        section: 'Il problema',
        text: 'Lo studio aveva un problema classico del settore legale: grande competenza, comunicazione da addetti ai lavori. I contenuti erano corretti — ma per un pubblico che già sapeva tutto. Chi avrebbe dovuto trovarli utili, smetteva di leggere dopo il primo paragrafo.',
      },
      {
        section: 'L\'approccio',
        text: 'Abbiamo costruito una strategia editoriale basata su un principio semplice: prima di pubblicare qualcosa, chiedersi "a chi serve davvero?". Ogni tema legale è stato reinterpretato attraverso situazioni reali — aziende che trattano dati, lavoratori da remoto, professionisti con un patrimonio digitale da proteggere.',
      },
      {
        section: 'Il risultato',
        text: 'Esse-CI non è più uno studio legale che pubblica contenuti. È diventato un punto di riferimento per chi vuole capire come il diritto digitale impatta sulla vita e sul lavoro — spiegato da persone che lo vivono ogni giorno.',
      },
    ],
  },
  {
    slug: 'landscape-barber',
    client: 'Landscape Barber',
    category: 'Social Media Management',
    tagline: 'Da follower comprati a community autentica.',
    cardImage: '/clients/landscape-barber/cover.jpg',
    heroImage: '/clients/landscape-barber/cover.jpg',
    images: ['/clients/landscape-barber/02.jpg', '/clients/landscape-barber/03.jpg'],
    services: ['Social media management', 'Content strategy', 'Produzione contenuti', 'Video editing'],
    challenge: 'Domenico è un barbiere con una professionalità assoluta e un amore viscerale per il viaggio. Quando ci ha contattato, stava facendo la cosa peggiore possibile: comprava follower. I numeri crescevano, ma erano vuoti — nessuna interazione, nessuna community, nessuna reputazione. Era ambassador di Gamma+ ma il più piccolo del gruppo. Voleva crescere, e cercava il modo sbagliato per farlo.',
    approach: [
      'Abbiamo smesso di guardare il contatore. Il primo passo è stato capire chi era Domenico davvero — non "un barbiere su Instagram", ma un esploratore con le forbici in mano. Questa è diventata la strategia.',
      'Il nuovo obiettivo non era più "vendere un taglio" ma "portare la community in viaggio con lui". Ogni destinazione — Argentina, Kenya, Egitto — è diventata un capitolo della sua storia. I contenuti mostravano Domenico al lavoro nei posti più inaspettati del mondo.',
      'Abbiamo lavorato sulla qualità della produzione, sulla coerenza narrativa e sull\'autenticità: meno promozione, più vita reale. Il risultato è stato una community che segue Domenico — non i suoi servizi.',
    ],
    results: [
      { value: '4 paesi', label: 'Contenuti da Argentina, Kenya, Egitto e oltre' },
      { value: '0', label: 'Follower comprati da quando lavoriamo insieme' },
      { value: 'Gamma+', label: 'Chiamato agli eventi internazionali del brand' },
    ],
    body: [
      {
        section: 'Il problema',
        text: 'Comprare follower è il sintomo di un equivoco: pensare che il numero conti più della relazione. Domenico aveva un pubblico finto su un profilo vero. La sua bravura era reale, ma nessuno la vedeva — perché stava comunicando nella direzione sbagliata.',
      },
      {
        section: 'L\'approccio',
        text: 'Abbiamo costruito un racconto. Domenico non vende tagli — porta le persone con lui. Buenos Aires, il Golden Gate, la savana del Kenya, le scuole in Africa. Ogni posto è diventato un set, ogni taglio una storia. La community ha iniziato a chiedersi "dove sei ora?" invece di "quanto costa?".',
      },
      {
        section: 'Il risultato',
        text: 'Gamma+ ha iniziato a chiamarlo per i propri eventi internazionali. Giocatori di Serie A e atleti nazionali vanno da lui — non per comprare un taglio, ma per far parte della sua storia. Domenico oggi non ha clienti: ha persone che vogliono viaggiare con lui.',
      },
    ],
  },
  {
    slug: 'loft',
    client: 'Loft',
    category: 'Sito Web + Social',
    tagline: 'Un lancio che sembrava un evento — perché lo era.',
    cardImage: '/clients/loft/cover.jpg',
    heroImage: '/clients/loft/cover.jpg',
    images: ['/clients/loft/02.jpg', '/clients/loft/03.jpg'],
    services: ['Progettazione sito web', 'Social media management', 'Strategia social', 'Evento di lancio', 'Shooting fotografico'],
    challenge: 'Loft aveva bisogno di una presenza digitale completa: un sito che funzionasse come vetrina e come strumento di vendita, e una strategia social che costruisse pubblico prima ancora dell\'apertura. Il rischio era fare le cose "per farle" — un sito generico, qualche post su Instagram, e poi silenzio.',
    approach: [
      'Abbiamo iniziato dalla strategia, non dal design. Prima di aprire qualsiasi file, abbiamo definito chi è Loft, a chi parla e cosa vuole comunicare. Solo dopo abbiamo costruito il sito e il piano social.',
      'Il lancio non è stato un momento — è stato una campagna. Abbiamo lavorato per creare attesa prima dell\'apertura, trasformando l\'evento di lancio del sito in qualcosa che le persone aspettavano di vivere di persona.',
      'La strategia social dei 12 mesi successivi è stata costruita per mantenere il ritmo: contenuti che raccontano il brand, non solo i prodotti. Perché un brand di moda non vende abiti — vende un\'idea di sé.',
    ],
    results: [
      { value: 'Sito', label: 'Lanciato con evento dedicato' },
      { value: '12 mesi', label: 'Piano social strutturato' },
      { value: '1', label: 'Strategia, non lista di post' },
    ],
    body: [
      {
        section: 'Il progetto',
        text: 'Sito web, e-commerce, piano editoriale, shooting e evento di lancio: tutto coordinato per comunicare la stessa cosa. Quando si apre un brand, il momento del lancio non torna. Abbiamo lavorato per farlo contare.',
      },
      {
        section: 'Il lancio',
        text: 'L\'evento di apertura non era una festa — era una dichiarazione. Abbiamo curato ogni dettaglio della comunicazione, dall\'invito alla copertura fotografica, per assicurarci che il ricordo che le persone si portavano a casa corrispondesse all\'identità che volevamo costruire.',
      },
      {
        section: 'Dopo il lancio',
        text: 'La strategia social dei mesi successivi ha mantenuto vivo l\'interesse costruito durante il lancio, trasformando la curiosità iniziale in una community affezionata al brand.',
      },
    ],
  },
  {
    slug: 'mondo-in-altalena',
    client: 'Mondo in Altalena',
    category: 'ADV + SEO + Rebranding',
    tagline: 'Otto destinazioni, una voce sola.',
    cardImage: '/clients/mondo-in-altalena/cover.jpg',
    heroImage: '/clients/mondo-in-altalena/cover.jpg',
    images: ['/clients/mondo-in-altalena/02.jpg', '/clients/mondo-in-altalena/03.jpg'],
    services: ['Rebranding e logo', 'Gestione ADV (Meta + Google)', 'Strategia SEO organica', 'Piano editoriale', 'Content management'],
    challenge: 'Mondo in Altalena organizza viaggi in otto destinazioni — Giappone, Islanda, Indonesia, Perù, USA, Dolomiti, Cinque Terre, barca a vela nel Mediterraneo. Prodotti eccezionali, esperienza vera, clienti soddisfatti. Ma la comunicazione non rendeva giustizia a nessuna di queste cose. L\'identità visiva era datata, la presenza online frammentata, le campagne ADV gestite senza una logica unificata.',
    approach: [
      'Il punto di partenza è stato il rebranding: un nuovo logo e un\'identità visiva capace di reggere su ogni destinazione — dal trekking sull\'Appennino all\'oceano islandese.',
      'Abbiamo costruito una strategia editoriale per destinazione: ogni viaggio ha la sua narrativa, il suo pubblico, il suo momento migliore per essere raccontato. Il Giappone in primavera parla a persone diverse dal Perù in autunno.',
      'Le campagne ADV sono state strutturate per portare traffico qualificato — non click generici, ma persone che avevano già cercato esattamente quel tipo di viaggio. La strategia SEO organica ha lavorato in parallelo per ridurre la dipendenza dal pagato nel tempo.',
    ],
    results: [
      { value: '8', label: 'Destinazioni con piano editoriale dedicato' },
      { value: 'Rebrand', label: 'Logo e identità visiva completa' },
      { value: 'Multi', label: 'Canale: social, ADV, SEO, newsletter' },
    ],
    body: [
      {
        section: 'Il progetto',
        text: 'La complessità di Mondo in Altalena è quella di chi ha tanti prodotti diversi ma deve comunicare con una voce sola. Abbiamo costruito un sistema che permette di personalizzare ogni destinazione mantenendo la coerenza del brand.',
      },
      {
        section: 'Le campagne',
        text: 'Ogni destinazione ha la sua logica ADV: diversi pubblici, diversi messaggi, diversi periodi. L\'Islanda funziona con immagini drammatiche e luce estiva. Il Giappone lavora sulla cultura e l\'autenticità. Il Perù vende un\'avventura. Abbiamo costruito le campagne di conseguenza.',
      },
      {
        section: 'Il lungo termine',
        text: 'Parallelamente all\'ADV, abbiamo avviato una strategia SEO organica per ridurre nel tempo la dipendenza dal pagato e costruire una presenza che cresce da sola.',
      },
    ],
  },
  {
    slug: 'miramonti',
    client: 'Miramonti',
    category: 'Web + Contenuti Visivi',
    tagline: 'La montagna che vale il viaggio.',
    cardImage: '/clients/miramonti/cover.jpg',
    heroImage: '/clients/miramonti/cover.jpg',
    images: ['/clients/miramonti/02.jpg', '/clients/miramonti/03.jpg'],
    services: ['Sito web', 'Shooting fotografico', 'Produzione video', 'Content management'],
    challenge: 'Miramonti è una struttura ricettiva immersa nella natura, con camere curate, una cucina di qualità e un\'atmosfera che difficilmente si trova altrove. Il problema era che tutto questo lo si scopriva solo arrivando. Online, la struttura era quasi invisibile — e quel poco che si trovava non rendeva merito a quello che c\'era.',
    approach: [
      'Prima di qualsiasi cosa: uno shooting fotografico serio. Non foto di repertorio, non smartphone in corridoio — una produzione pensata per mostrare gli spazi come li vive chi ci dorme, non come li cataloga un annuncio.',
      'I contenuti video hanno raccontato la struttura in movimento: la luce del mattino, il silenzio delle camere, la cucina al lavoro. Il tipo di contenuto che fa scorrere il dito e poi fermare.',
      'Il sito è stato costruito intorno a queste immagini: pulito, veloce, ottimizzato per chi prenota da mobile dopo aver visto un contenuto.',
    ],
    results: [
      { value: 'Shooting', label: 'Produzione foto e video professionale' },
      { value: 'Sito', label: 'Nuovo, ottimizzato per la prenotazione' },
      { value: '3', label: 'Tipologie di contenuto prodotte' },
    ],
    body: [
      {
        section: 'Il progetto',
        text: 'Miramonti meritava di essere visto. Abbiamo costruito tutto il sistema visivo e digitale necessario per far sì che le persone che lo trovavano online volessero viverlo di persona.',
      },
      {
        section: 'Lo shooting',
        text: 'Abbiamo fotografato ogni spazio — le camere, le suite, i corridoi, il ristorante, i dintorni — con l\'unico obiettivo di trasmettere la sensazione di stare lì. Non la lista dei servizi: la sensazione.',
      },
      {
        section: 'Il sito',
        text: 'Un sito semplice, fotografico, con prenotazione diretta. Veloce su mobile, pensato per chi decide in pochi secondi se proseguire o tornare indietro.',
      },
    ],
  },
  {
    slug: 'trail-della-pietra',
    client: 'Trail della Pietra',
    category: 'Branding + Sito Web',
    tagline: 'Tre percorsi. Un brand che regge la montagna.',
    cardImage: '/clients/trail-della-pietra/cover.jpg',
    heroImage: '/clients/trail-della-pietra/cover.jpg',
    images: ['/clients/trail-della-pietra/02.jpg', '/clients/trail-della-pietra/03.jpg'],
    services: ['Branding e identità visiva', 'Sito web', 'Contenuti per i percorsi', 'Materiali stampa', 'Planning eventi 2025–2026'],
    challenge: 'Il Trail della Pietra è un evento di trail running sull\'Appennino Reggiano, con tre percorsi chiamati Inferno, Purgatorio e Paradiso. Un concept forte, un territorio straordinario, un\'organizzazione seria. Mancava un brand all\'altezza: qualcosa che comunicasse la durezza e la bellezza dell\'Appennino senza sembrare amatoriale.',
    approach: [
      'Il nome dei percorsi era già un sistema narrativo perfetto. Abbiamo costruito l\'identità visiva intorno a quel filo — tre livelli, tre esperienze diverse, un\'unica anima.',
      'Il sito è stato progettato come prima esperienza dell\'evento: ogni percorso ha la sua scheda, con descrizione, difficoltà, dislivello e atmosfera. Non un\'iscrizione — un invito.',
      'Abbiamo lavorato anche sui materiali stampati per l\'evento: locandine, cartelli, materiale per i punti di ristoro. Ogni pezzo coerente con il brand, ogni pezzo pensato per resistere alla pioggia e al fango dell\'Appennino.',
    ],
    results: [
      { value: '3', label: 'Percorsi con identità e contenuti dedicati' },
      { value: '2025–26', label: 'Progetto pluriennale in corso' },
      { value: 'Full', label: 'Brand: sito, stampa, materiali evento' },
    ],
    body: [
      {
        section: 'Il brand',
        text: 'Inferno, Purgatorio, Paradiso. Tre parole che già raccontano tutto. Il nostro lavoro è stato costruire un sistema visivo che reggesse questo concept — duro, bello, appenninico. Niente effetti speciali: solo materia e luce.',
      },
      {
        section: 'Il sito',
        text: 'Il sito del Trail della Pietra è pensato per chi deve decidere se iscriversi. Ogni percorso è descritto con precisione e rispetto — non per spaventare, ma per preparare. Chi arriva alla partenza sa già cosa lo aspetta.',
      },
      {
        section: 'Il progetto ricorrente',
        text: 'Il Trail della Pietra torna ogni anno. Lavoriamo con l\'organizzazione in modo continuativo: aggiorniamo i contenuti, adattiamo i materiali, miglioriamo l\'esperienza online a ogni edizione.',
      },
    ],
  },
  {
    slug: 'theraflux',
    client: 'Theraflux',
    category: 'Brand Identity + Merchandise',
    tagline: 'Un brand che si vede anche quando sei offline.',
    cardImage: '/clients/theraflux/spille-01.png',
    heroImage: '/clients/theraflux/spille-01.png',
    images: ['/clients/theraflux/spille-01.png', '/clients/theraflux/spille-02.png', '/clients/theraflux/website-screenshot.png'],
    services: ['Brand identity', 'Progettazione merchandise', 'Grafica applicativi', 'Preventivo e produzione stampa'],
    challenge: 'Theraflux lavora nel settore del benessere con macchinari e trattamenti di qualità. Il problema era la percezione: online e offline, i materiali di comunicazione non rispecchiavano il livello del servizio. Logo improvvisato, materiali disomogenei, nessuna identità riconoscibile. Difficile farsi prendere sul serio quando la prima cosa che vedi non ispira fiducia.',
    approach: [
      'Abbiamo iniziato dall\'identità visiva: un sistema di logo declinabile su tutti i supporti, con una palette cromatica coerente e una gerarchia tipografica chiara.',
      'Il lavoro si è poi esteso agli applicativi fisici: cartelloni, volantini, merchandise. Ogni pezzo progettato partendo dall\'identità, non dalla convenienza.',
      'La linea merchandise — polo, spille, gadget — è stata pensata per essere usata, non per stare in un cassetto. Oggetti che le persone portano fuori e che diventano comunicazione.',
    ],
    results: [
      { value: 'Brand', label: 'Identità visiva completa e applicata' },
      { value: 'Merch', label: 'Linea merchandise prodotta e distribuita' },
      { value: '4', label: 'Formati di applicativi progettati' },
    ],
    body: [
      {
        section: 'L\'identità',
        text: 'Un brand del benessere deve trasmettere fiducia prima ancora di spiegare cosa fa. Abbiamo costruito un sistema visivo che funziona su ogni formato — digitale e fisico — senza perdere coerenza.',
      },
      {
        section: 'Il merchandise',
        text: 'Le polo, le spille e i gadget di Theraflux sono strumenti di comunicazione passiva: chi li indossa o li usa porta il brand fuori dallo studio. Li abbiamo progettati per essere desiderabili, non solo funzionali.',
      },
      {
        section: 'Gli applicativi',
        text: 'Cartelloni 70x100, volantini A5, materiale per fiere. Ogni formato è stato progettato con la stessa attenzione all\'identità, per garantire che l\'esperienza di Theraflux sia coerente ovunque.',
      },
    ],
  },
  {
    slug: 'pro-loco-felina',
    client: 'Pro Loco Felina',
    category: 'Portale Turistico',
    tagline: 'L\'Appennino che non sapevi di volere.',
    cardImage: '/clients/pro-loco-felina/cover.jpg',
    heroImage: '/clients/pro-loco-felina/cover.jpg',
    images: ['/clients/pro-loco-felina/02.jpg', '/clients/pro-loco-felina/03.jpg'],
    services: ['Sviluppo portale web', 'Content curation', 'Gestione database attività', 'Aggiornamento continuo'],
    challenge: 'Felina è un borgo dell\'Appennino Reggiano con un castello, una torre medievale, una Big Bench sul Monte Fosola, ristoranti buoni e un\'aria che non trovi altrove. Il problema era la visibilità: chi non veniva da lì, non sapeva che esisteva. E chi cercava qualcosa da fare in zona non trovava niente di organizzato e aggiornato.',
    approach: [
      'Abbiamo costruito un portale turistico che funziona come guida locale: ristoranti, alloggi, escursioni, eventi, sport. Tutto in un\'unica piattaforma aggiornabile in tempo reale.',
      'Il database è stato costruito con cura: ogni attività ha una scheda, ogni scheda ha le informazioni che servono davvero a chi arriva da fuori. Non una lista — un\'esperienza di scoperta.',
      'Il progetto è pensato per crescere: ogni nuovo ristorante, ogni nuovo evento, ogni nuova escursione può essere aggiunta senza rimettere mano alla struttura.',
    ],
    results: [
      { value: '10+', label: 'Ristoranti e strutture catalogati' },
      { value: '8', label: 'Escursioni e punti di interesse' },
      { value: '∞', label: 'Aggiornabile nel tempo' },
    ],
    body: [
      {
        section: 'Il portale',
        text: 'Felina non aveva un posto dove convogliare le persone che volevano scoprirla. Abbiamo costruito quel posto: un portale semplice, aggiornato e orientato all\'esperienza di chi arriva da fuori con poco tempo e voglia di fare le cose giuste.',
      },
      {
        section: 'Il territorio',
        text: 'La Big Bench del Monte Fosola, la Torre di Felina, il Borgo di Roncroffio, l\'Oasi La Vita. Il Furnason Bike Park per gli appassionati di MTB. Trattorie con cucina appenninica vera. Tutto è stato catalogato e raccontato con lo stesso rispetto che merita.',
      },
      {
        section: 'Il progetto continuo',
        text: 'La Pro Loco aggiorna il portale con le novità del territorio — nuove attività, nuovi eventi, cambi di orario. Il database è stato costruito per rendere questi aggiornamenti semplici e veloci, senza bisogno di interventi tecnici.',
      },
    ],
  },
]

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug)
}
