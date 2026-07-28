const FLASHCARD_DECKS = {
  "anatomy": [
    {
      "term": "Intracellular fluid (ICF)",
      "def": "fluid inside cells"
    },
    {
      "term": "Extracellular fluid (ECF)",
      "def": "fluid outside cells (plasma + interstitial fluid)"
    },
    {
      "term": "Respiratory system",
      "def": "regulates CO₂ (and therefore carbonic acid) levels via breathing rate"
    },
    {
      "term": "Urinary system",
      "def": "excretes H⁺ ions and reabsorbs bicarbonate"
    },
    {
      "term": "Buffer mechanism",
      "def": "chemical systems (e.g., bicarbonate buffer) that resist pH change instantly"
    },
    {
      "term": "conduction system",
      "def": "named explicitly in the curriculum, likely tested"
    },
    {
      "term": "Lymphatic system",
      "def": "a network of vessels, tissues, and organs that drains excess interstitial fluid back into the blood and forms a core part of the immune system"
    },
    {
      "term": "Immunoglobulin (Ig)",
      "def": "antibody proteins produced by B-lymphocytes/plasma cells that bind to specific antigens to neutralize or mark them for destruction"
    },
    {
      "term": "Muscle",
      "def": "a tissue composed of contractile fibers that produces movement and generates force"
    },
    {
      "term": "Bone",
      "def": "a hard connective tissue forming the skeleton"
    },
    {
      "term": "Joint",
      "def": "the point where two bones meet"
    },
    {
      "term": "Axial skeleton",
      "def": "skull, vertebral column, ribs, sternum (the body's central axis)"
    },
    {
      "term": "Appendicular skeleton",
      "def": "limbs, shoulder girdle, pelvic girdle"
    },
    {
      "term": "lever",
      "def": "bones act as levers, joints as fulcrums, muscles provide the force"
    }
  ],
  "chemistry": [
    {
      "term": "Element",
      "def": "a pure substance of one atom type"
    },
    {
      "term": "Compound",
      "def": "a fixed-ratio chemical combination of elements"
    },
    {
      "term": "Radical",
      "def": "a group of atoms behaving as a single unit in reactions (e.g., SO₄²⁻). Balancing methods:"
    },
    {
      "term": "Dalton's Atomic Theory",
      "def": "matter is made of indivisible atoms; atoms of the same element are identical"
    },
    {
      "term": "Mole concept",
      "def": "one mole = 6.022×10²³ particles (Avogadro's number); moles relate mass, volume, and particle count"
    },
    {
      "term": "Limiting reagent",
      "def": "the reactant that runs out first, determining how much product forms"
    },
    {
      "term": "Rutherford's model",
      "def": "atom has a dense positive nucleus with electrons orbiting around it (from the gold foil experiment)"
    },
    {
      "term": "Bohr's model",
      "def": "electrons orbit in fixed energy levels; explains the hydrogen spectrum"
    },
    {
      "term": "Aufbau principle",
      "def": "electrons fill lowest-energy orbitals first"
    },
    {
      "term": "Hund's rule",
      "def": "electrons fill empty orbitals singly before pairing up"
    },
    {
      "term": "Electrovalent (ionic) bond",
      "def": "electron transfer"
    },
    {
      "term": "Covalent bond",
      "def": "electron sharing"
    },
    {
      "term": "Co-ordinate covalent bond",
      "def": "both shared electrons come from one atom"
    },
    {
      "term": "Hydrogen bond",
      "def": "affects solubility, viscosity, and boiling point (explains why water has an unusually high boiling point)"
    }
  ],
  "physics": [
    {
      "term": "Surface charge density",
      "def": "charge per unit area"
    },
    {
      "term": "Coulomb's Law",
      "def": "the force between two point charges is proportional to the product of charges and inversely proportional to the square of distance between them"
    },
    {
      "term": "Dielectric constant (permittivity)",
      "def": "describes how a medium affects electric field strength"
    },
    {
      "term": "Electric potential",
      "def": "the potential energy per unit charge at a point"
    },
    {
      "term": "Capacitor",
      "def": "a device that stores electric charge;"
    },
    {
      "term": "Electron volt (eV)",
      "def": "a unit of energy used at atomic scale"
    },
    {
      "term": "Magnetic moment",
      "def": "a measure of a magnet's strength and orientation"
    },
    {
      "term": "Pole strength",
      "def": "the strength of a magnetic pole"
    },
    {
      "term": "Coulomb's law for magnetism",
      "def": "force between two magnetic poles, analogous to electric Coulomb's law"
    },
    {
      "term": "Neutral point",
      "def": "a point where the magnetic field of a magnet is cancelled by Earth's magnetic field"
    },
    {
      "term": "Dip",
      "def": "the angle a compass needle makes with the horizontal"
    },
    {
      "term": "Declination",
      "def": "the angle between magnetic north and true (geographic) north"
    },
    {
      "term": "Dia/Para/Ferromagnetic",
      "def": "three categories of how materials respond to magnetic fields (weakly repelled, weakly attracted, strongly attracted respectively)"
    },
    {
      "term": "Ohm's Law: V = I × R",
      "def": "the single most-tested formula in this unit"
    }
  ],
  "botany": [
    {
      "term": "Law of Dominance",
      "def": "one allele masks the expression of the other in a heterozygote"
    },
    {
      "term": "Law of Segregation",
      "def": "the two alleles for a trait separate during gamete formation"
    },
    {
      "term": "Law of Independent Assortment",
      "def": "genes for different traits are inherited independently of each other"
    },
    {
      "term": "Guttation",
      "def": "loss of water as liquid droplets (not vapor) from leaf tips/edges, distinct from transpiration"
    },
    {
      "term": "Abiotic factors",
      "def": "climatic, edaphic (soil), topographic"
    },
    {
      "term": "Biotic factors",
      "def": "autotrophs (producers) and heterotrophs (consumers)"
    },
    {
      "term": "Food chain vs Food web",
      "def": "linear vs interconnected feeding relationships"
    },
    {
      "term": "Ecological pyramid",
      "def": "represents energy/biomass/numbers at each trophic level"
    },
    {
      "term": "water pollution",
      "def": "causes, health consequences, prevention"
    },
    {
      "term": "Biological invasion",
      "def": "spread of non-native species disrupting ecosystems"
    },
    {
      "term": "Ethnobotany",
      "def": "the study of how local/indigenous communities use plants, including traditional medicine practices in Nepal specifically"
    },
    {
      "term": "Plant tissue culture",
      "def": "growing plant cells/tissue in controlled lab conditions to produce clones"
    },
    {
      "term": "Biofertilizer",
      "def": "biological substances that enrich soil nutrients"
    }
  ],
  "zoology": [
    {
      "term": "Sarcoptes scabiei",
      "def": "causes scabies"
    },
    {
      "term": "Anopheles, Culex, Aedes",
      "def": "vectors for malaria, filariasis, dengue respectively"
    },
    {
      "term": "Periplaneta americana",
      "def": "mechanical disease carrier"
    },
    {
      "term": "Integrated Vector Management (IVM)",
      "def": "a combined approach (environmental, chemical, biological control) to controlling disease-carrying vectors like mosquitoes, named explicitly in the curriculum"
    },
    {
      "term": "Host",
      "def": "an organism that harbors and provides nutrition to a parasite (e.g., humans are the host for"
    },
    {
      "term": "Parasite",
      "def": "an organism that lives on or in a host and derives nutrition at the host's expense (e.g.,"
    },
    {
      "term": "Glomerular filtration",
      "def": "blood is filtered under pressure in the glomerulus, forming filtrate"
    },
    {
      "term": "Selective reabsorption",
      "def": "useful substances (glucose, water, ions) are reabsorbed back into blood in the tubules"
    },
    {
      "term": "Tubular secretion",
      "def": "waste substances are actively secreted into the tubule from surrounding blood"
    },
    {
      "term": "Binomial nomenclature",
      "def": "Carolus Linnaeus's two-part naming system (Genus + species)"
    },
    {
      "term": "Lamarckism",
      "def": "theory of inheritance of acquired characteristics (now largely rejected, but historically important)"
    },
    {
      "term": "Darwinism",
      "def": "natural selection: organisms with favorable traits survive and reproduce more"
    },
    {
      "term": "Neo-Darwinism",
      "def": "modern synthetic theory, combining Darwinism with genetics"
    },
    {
      "term": "Human evolution",
      "def": "traced from ancestor"
    }
  ],
  "math": [
    {
      "term": "Infant Mortality Rate (IMR)",
      "def": "number of deaths of infants under 1 year per 1,000 live births in a given year"
    },
    {
      "term": "Maternal Mortality Rate (MMR)",
      "def": "number of maternal deaths due to pregnancy-related causes per 100,000 live births"
    },
    {
      "term": "Set",
      "def": "a well-defined collection of distinct objects. Represented in Venn diagrams"
    },
    {
      "term": "Union (∪)",
      "def": "combines all elements of both sets;"
    },
    {
      "term": "Intersection (∩)",
      "def": "only common elements"
    },
    {
      "term": "Cardinality",
      "def": "the number of elements in a finite set, written n(A)"
    },
    {
      "term": "De Morgan's Law",
      "def": "(A∪B)′ = A′∩B′ and (A∩B)′ = A′∪B′ (named explicitly, expect a proof question)"
    },
    {
      "term": "Absolute value, open/closed intervals",
      "def": "foundational real-number concepts"
    },
    {
      "term": "Function",
      "def": "a relation where each input maps to exactly one output"
    },
    {
      "term": "Composite function",
      "def": "applying one function to the result of another"
    },
    {
      "term": "Exponential and Logarithmic functions",
      "def": "inverse operations of each other"
    },
    {
      "term": "Limit",
      "def": "the value a function approaches as the input approaches some value"
    },
    {
      "term": "Derivative",
      "def": "the rate of change of a function (geometrically, the slope of the tangent line). Rules: sum, difference, product, quotient, and chain rule"
    },
    {
      "term": "Statistics",
      "def": "the science of collecting, organizing, analyzing, and interpreting data; has both utility and limitations"
    }
  ],
  "english": [
    {
      "term": "A Respectable Woman",
      "def": "Kate Chopin"
    },
    {
      "term": "A Devoted Son",
      "def": "Anita Desai"
    },
    {
      "term": "The Last Lesson",
      "def": "Alphonse Daudet"
    },
    {
      "term": "Birth",
      "def": "A. J. Cronin"
    },
    {
      "term": "A Day",
      "def": "Emily Dickinson"
    },
    {
      "term": "Every Morning I Wake",
      "def": "Dylan Thomas"
    },
    {
      "term": "The Parrot in the Cage",
      "def": "Lekhanath Poudyal"
    },
    {
      "term": "Childhood",
      "def": "Kevin Young"
    },
    {
      "term": "Lunatic",
      "def": "Laxmiprasad Devkota"
    },
    {
      "term": "Marriage as a Social Institution",
      "def": "Stephen L. Nock"
    },
    {
      "term": "Journey to the End of the Earth",
      "def": "Tishani Doshi"
    },
    {
      "term": "The Six-Million Dollar Man",
      "def": "Harold J. Morowitz"
    },
    {
      "term": "Stay Hungry, Stay Foolish!",
      "def": "Steve Jobs"
    },
    {
      "term": "Review of Tenses",
      "def": "Present/Past/Future × Simple/Continuous/Perfect/Perfect Continuous — 12 combinations total; match tense to when the action happens relative to now"
    }
  ],
  "nepali": [
    {
      "term": "भूमिका",
      "def": "विषय चिनाउने २-३ वाक्य"
    },
    {
      "term": "मुख्य भाग",
      "def": "प्रत्येक अनुच्छेदमा एउटा स्पष्ट बुँदा"
    },
    {
      "term": "निष्कर्ष",
      "def": "सारांश र अन्तिम विचार"
    },
    {
      "term": "सिपाही",
      "def": "विश्वेश्वरप्रसाद कोइराला"
    },
    {
      "term": "रातभरि हुरी चल्यो",
      "def": "इन्द्रबहादुर राई"
    },
    {
      "term": "संस्कृतिको नयाँ यात्रा",
      "def": "सुधा त्रिपाठी"
    },
    {
      "term": "महापुरुषको संगत",
      "def": "भैरव अर्याल"
    },
    {
      "term": "आमाको सपना",
      "def": "गोपाल प्रसाद रिमाल"
    },
    {
      "term": "नेपालै नरहे",
      "def": "माधव प्रसाद घिमिरे"
    },
    {
      "term": "क्षयरोग",
      "def": "Tuberculosis"
    },
    {
      "term": "रक्तचाप",
      "def": "Blood pressure"
    },
    {
      "term": "ह्दयरोग",
      "def": "Heart disease"
    },
    {
      "term": "प्रसूति",
      "def": "Childbirth/delivery"
    },
    {
      "term": "औषधालय",
      "def": "Pharmacy/dispensary"
    }
  ],
  "social": [
    {
      "term": "mountaineering, rafting, trekking",
      "def": "Nepal's core tourism economy"
    },
    {
      "term": "Constitution promulgated",
      "def": "2072 BS (2015 AD)"
    },
    {
      "term": "National flower",
      "def": "Rhododendron (Laligurans)"
    },
    {
      "term": "National bird",
      "def": "Himalayan Monal (Danphe)"
    }
  ]
};
