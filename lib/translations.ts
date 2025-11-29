export const translations = {
  bs: {
    title: "TrueMeter - Detekcija Prevare Kilometraže",
    subtitle: "Provjerite da li je kilometraža na automobilu vjerodostojna",
    nav: {
      home: "Početna",
      about: "O aplikaciji"
    },
    footer: {
      madeBy: "Napravio",
      poweredBy: "Pokreće AI"
    },
    about: {
      title: "O aplikaciji",
      subtitle: "Kako TrueMeter pomaže u detekciji prevare kilometraže",
      howItWorks: {
        title: "Kako funkcioniše",
        intro: "TrueMeter koristi napredne algoritme mašinskog učenja za analizu automobila i detekciju potencijalne prevare sa kilometražom. Proces je jednostavan:",
        step1: {
          title: "Unesite podatke o automobilu",
          description: "Unesite osnovne informacije kao što su marka, model, godina, prijavljena kilometraža, tip goriva, mjenjač, konjske snage i cijena."
        },
        step2: {
          title: "AI analiza",
          description: "Naš sistem koristi dva specijalizovana modela: jedan predviđa očekivanu kilometražu na osnovu godine i drugih karakteristika vozila, drugi koristi XGBoost algoritam za klasifikaciju i detekciju anomalija."
        },
        step3: {
          title: "Dobijete rezultate",
          description: "Sistem analizira razliku između prijavljene i očekivane kilometraže, uporedi cijenu sa tržišnom vrijednosti i daje ukupan skor sumnje sa detaljnim obrazloženjem."
        }
      },
      dataset: {
        title: "Dataset i trening",
        description: "Naši modeli su trenirani na opsežnom 'Cars Germany' datasetu sa Kaggle platforme, koji sadrži podatke o više od 46,000 automobila sa njemačkog tržišta.",
        features: {
          title: "Dataset uključuje:",
          item1: "46,405 oglasa automobila",
          item2: "Detaljne informacije: marka, model, godina, kilometraža, cijena",
          item3: "Tehnički podaci: tip goriva, snaga motora, vrsta mjenjača",
          item4: "Tržišne informacije: tip ponude (novo/polovno)",
          item5: "Prikupljeno sa AutoScout24 platforme"
        },
        source: "Izvor dataseta",
        kaggleLink: "Pogledajte dataset na Kaggle"
      },
      technology: {
        title: "Tehnologija",
        description: "TrueMeter kombinuje više tehnologija za pouzdan rezultat:",
        ai: {
          title: "Mašinsko učenje",
          description: "XGBoost algoritam za klasifikaciju i regresioni model za predviđanje kilometraže"
        },
        analysis: {
          title: "Tržišna analiza",
          description: "Uporedba cijene sa očekivanom tržišnom vrijednosti za detekciju sumnjivo niskih cijena"
        },
        rules: {
          title: "Poslovna pravila",
          description: "Ekspertski definisani pragovi (70% razlika u kilometraži, 30,000€ razlika u cijeni) za preciznu detekciju"
        }
      },
      limitations: {
        title: "Važna napomena",
        description: "TrueMeter je alat za pomoć u procjeni, ali ne zamjenjuje stručni pregled vozila. Rezultati su zasnovani na statističkoj analizi i mogu varirati. Uvijek preporučujemo:",
        item1: "Fizički pregled vozila od strane stručnjaka",
        item2: "Provjeru istorije vozila (Carfax, AutoCheck)",
        item3: "Probnu vožnju i mehaničku inspekciju",
        item4: "Provjeru servisne knjižice i dokumentacije"
      }
    },
    form: {
      make: "Marka",
      makePlaceholder: "npr. Volkswagen",
      model: "Model",
      modelPlaceholder: "npr. Golf",
      year: "Godina proizvodnje",
      yearPlaceholder: "2019",
      reportedKm: "Prijavljena kilometraža",
      kmPlaceholder: "92000",
      fuelType: "Tip goriva",
      fuelTypes: {
        petrol: "Benzin",
        diesel: "Dizel",
        electric: "Električni",
        hybrid: "Hibrid"
      },
      gearbox: "Mjenjač",
      gearboxTypes: {
        manual: "Manualni",
        automatic: "Automatski"
      },
      horsepower: "Konjske snage",
      horsepowerPlaceholder: "115",
      price: "Cijena",
      pricePlaceholder: "14500",
      offerType: "Tip ponude",
      offerTypes: {
        used: "Polovni",
        new: "Novi"
      },
      check: "Provjeri automobil",
      checking: "Provjeravam..."
    },
    results: {
      title: "Rezultati analize",
      fraudScore: "Nivo sumnje",
      suspicious: "Sumnjivo",
      notSuspicious: "Nije sumnjivo",
      expectedKm: "Očekivana kilometraža",
      reasons: "Razlozi",
      noReasons: "Nema specifičnih razloga za sumnju",
      checkAnother: "Provjeri drugi automobil"
    },
    errors: {
      title: "Greška",
      generic: "Došlo je do greške. Molimo pokušajte ponovo.",
      network: "Problem sa mrežom. Provjerite vašu internet konekciju.",
      validation: "Molimo popunite sva obavezna polja."
    },
    language: "Jezik"
  },
  sr: {
    title: "TrueMeter - Detekcija Prevare Kilometraže",
    subtitle: "Proverite da li je kilometraža na automobilu verodostojna",
    nav: {
      home: "Početna",
      about: "O aplikaciji"
    },
    footer: {
      madeBy: "Napravio",
      poweredBy: "Pokreće AI"
    },
    about: {
      title: "O aplikaciji",
      subtitle: "Kako TrueMeter pomaže u detekciji prevare kilometraže",
      howItWorks: {
        title: "Kako funkcioniše",
        intro: "TrueMeter koristi napredne algoritme mašinskog učenja za analizu automobila i detekciju potencijalne prevare sa kilometražom. Proces je jednostavan:",
        step1: {
          title: "Unesite podatke o automobilu",
          description: "Unesite osnovne informacije kao što su marka, model, godina, prijavljena kilometraža, tip goriva, menjač, konjske snage i cena."
        },
        step2: {
          title: "AI analiza",
          description: "Naš sistem koristi dva specijalizovana modela: jedan predviđa očekivanu kilometražu na osnovu godine i drugih karakteristika vozila, drugi koristi XGBoost algoritam za klasifikaciju i detekciju anomalija."
        },
        step3: {
          title: "Dobijete rezultate",
          description: "Sistem analizira razliku između prijavljene i očekivane kilometraže, uporedi cenu sa tržišnom vrednošću i daje ukupan skor sumnje sa detaljnim obrazloženjem."
        }
      },
      dataset: {
        title: "Dataset i trening",
        description: "Naši modeli su trenirani na opsežnom 'Cars Germany' datasetu sa Kaggle platforme, koji sadrži podatke o više od 46,000 automobila sa nemačkog tržišta.",
        features: {
          title: "Dataset uključuje:",
          item1: "46,405 oglasa automobila",
          item2: "Detaljne informacije: marka, model, godina, kilometraža, cena",
          item3: "Tehnički podaci: tip goriva, snaga motora, vrsta menjača",
          item4: "Tržišne informacije: tip ponude (novo/polovno)",
          item5: "Prikupljeno sa AutoScout24 platforme"
        },
        source: "Izvor dataseta",
        kaggleLink: "Pogledajte dataset na Kaggle"
      },
      technology: {
        title: "Tehnologija",
        description: "TrueMeter kombinuje više tehnologija za pouzdan rezultat:",
        ai: {
          title: "Mašinsko učenje",
          description: "XGBoost algoritam za klasifikaciju i regresioni model za predviđanje kilometraže"
        },
        analysis: {
          title: "Tržišna analiza",
          description: "Uporedba cene sa očekivanom tržišnom vrednošću za detekciju sumnjivo niskih cena"
        },
        rules: {
          title: "Poslovna pravila",
          description: "Ekspertski definisani pragovi (70% razlika u kilometraži, 30,000€ razlika u ceni) za preciznu detekciju"
        }
      },
      limitations: {
        title: "Važna napomena",
        description: "TrueMeter je alat za pomoć u proceni, ali ne zamenjuje stručni pregled vozila. Rezultati su zasnovani na statističkoj analizi i mogu varirati. Uvek preporučujemo:",
        item1: "Fizički pregled vozila od strane stručnjaka",
        item2: "Proveru istorije vozila (Carfax, AutoCheck)",
        item3: "Probnu vožnju i mehaničku inspekciju",
        item4: "Proveru servisne knjižice i dokumentacije"
      }
    },
    form: {
      make: "Marka",
      makePlaceholder: "npr. Volkswagen",
      model: "Model",
      modelPlaceholder: "npr. Golf",
      year: "Godina proizvodnje",
      yearPlaceholder: "2019",
      reportedKm: "Prijavljena kilometraža",
      kmPlaceholder: "92000",
      fuelType: "Tip goriva",
      fuelTypes: {
        petrol: "Benzin",
        diesel: "Dizel",
        electric: "Električni",
        hybrid: "Hibrid"
      },
      gearbox: "Menjač",
      gearboxTypes: {
        manual: "Manuelni",
        automatic: "Automatski"
      },
      horsepower: "Konjske snage",
      horsepowerPlaceholder: "115",
      price: "Cena",
      pricePlaceholder: "14500",
      offerType: "Tip ponude",
      offerTypes: {
        used: "Polovan",
        new: "Nov"
      },
      check: "Proveri automobil",
      checking: "Provjeravam..."
    },
    results: {
      title: "Rezultati analize",
      fraudScore: "Nivo sumnje",
      suspicious: "Sumnjivo",
      notSuspicious: "Nije sumnjivo",
      expectedKm: "Očekivana kilometraža",
      reasons: "Razlozi",
      noReasons: "Nema specifičnih razloga za sumnju",
      checkAnother: "Proveri drugi automobil"
    },
    errors: {
      title: "Greška",
      generic: "Došlo je do greške. Molimo pokušajte ponovo.",
      network: "Problem sa mrežom. Proverite vašu internet konekciju.",
      validation: "Molimo popunite sva obavezna polja."
    },
    language: "Jezik"
  },
  hr: {
    title: "TrueMeter - Detekcija Prijevare Kilometraže",
    subtitle: "Provjerite je li kilometraža na automobilu vjerodostojna",
    nav: {
      home: "Početna",
      about: "O aplikaciji"
    },
    footer: {
      madeBy: "Napravio",
      poweredBy: "Pokreće AI"
    },
    about: {
      title: "O aplikaciji",
      subtitle: "Kako TrueMeter pomaže u detekciji prijevare kilometraže",
      howItWorks: {
        title: "Kako funkcionira",
        intro: "TrueMeter koristi napredne algoritme strojnog učenja za analizu automobila i detekciju potencijalne prijevare s kilometražom. Proces je jednostavan:",
        step1: {
          title: "Unesite podatke o automobilu",
          description: "Unesite osnovne informacije kao što su marka, model, godina, prijavljena kilometraža, tip goriva, mjenjač, konjske snage i cijena."
        },
        step2: {
          title: "AI analiza",
          description: "Naš sustav koristi dva specijalizirana modela: jedan predviđa očekivanu kilometražu na temelju godine i drugih karakteristika vozila, drugi koristi XGBoost algoritam za klasifikaciju i detekciju anomalija."
        },
        step3: {
          title: "Dobijete rezultate",
          description: "Sustav analizira razliku između prijavljene i očekivane kilometraže, uspoređuje cijenu s tržišnom vrijednosti i daje ukupan skor sumnje s detaljnim obrazloženjem."
        }
      },
      dataset: {
        title: "Dataset i trening",
        description: "Naši modeli su trenirani na opsežnom 'Cars Germany' datasetu s Kaggle platforme, koji sadrži podatke o više od 46,000 automobila s njemačkog tržišta.",
        features: {
          title: "Dataset uključuje:",
          item1: "46,405 oglasa automobila",
          item2: "Detaljne informacije: marka, model, godina, kilometraža, cijena",
          item3: "Tehnički podaci: tip goriva, snaga motora, vrsta mjenjača",
          item4: "Tržišne informacije: tip ponude (novo/rabljeno)",
          item5: "Prikupljeno s AutoScout24 platforme"
        },
        source: "Izvor dataseta",
        kaggleLink: "Pogledajte dataset na Kaggle"
      },
      technology: {
        title: "Tehnologija",
        description: "TrueMeter kombinira više tehnologija za pouzdan rezultat:",
        ai: {
          title: "Strojno učenje",
          description: "XGBoost algoritam za klasifikaciju i regresijski model za predviđanje kilometraže"
        },
        analysis: {
          title: "Tržišna analiza",
          description: "Usporedba cijene s očekivanom tržišnom vrijednošću za detekciju sumnjivo niskih cijena"
        },
        rules: {
          title: "Poslovna pravila",
          description: "Stručno definirani pragovi (70% razlika u kilometraži, 30,000€ razlika u cijeni) za preciznu detekciju"
        }
      },
      limitations: {
        title: "Važna napomena",
        description: "TrueMeter je alat za pomoć u procjeni, ali ne zamjenjuje stručni pregled vozila. Rezultati su temeljeni na statističkoj analizi i mogu varirati. Uvijek preporučujemo:",
        item1: "Fizički pregled vozila od strane stručnjaka",
        item2: "Provjeru povijesti vozila (Carfax, AutoCheck)",
        item3: "Probnu vožnju i mehaničku inspekciju",
        item4: "Provjeru servisne knjižice i dokumentacije"
      }
    },
    form: {
      make: "Marka",
      makePlaceholder: "npr. Volkswagen",
      model: "Model",
      modelPlaceholder: "npr. Golf",
      year: "Godina proizvodnje",
      yearPlaceholder: "2019",
      reportedKm: "Prijavljena kilometraža",
      kmPlaceholder: "92000",
      fuelType: "Tip goriva",
      fuelTypes: {
        petrol: "Benzin",
        diesel: "Dizel",
        electric: "Električni",
        hybrid: "Hibrid"
      },
      gearbox: "Mjenjač",
      gearboxTypes: {
        manual: "Manualni",
        automatic: "Automatski"
      },
      horsepower: "Konjske snage",
      horsepowerPlaceholder: "115",
      price: "Cijena",
      pricePlaceholder: "14500",
      offerType: "Tip ponude",
      offerTypes: {
        used: "Rabljeni",
        new: "Novi"
      },
      check: "Provjeri automobil",
      checking: "Provjeravam..."
    },
    results: {
      title: "Rezultati analize",
      fraudScore: "Razina sumnje",
      suspicious: "Sumnjivo",
      notSuspicious: "Nije sumnjivo",
      expectedKm: "Očekivana kilometraža",
      reasons: "Razlozi",
      noReasons: "Nema specifičnih razloga za sumnju",
      checkAnother: "Provjeri drugi automobil"
    },
    errors: {
      title: "Greška",
      generic: "Došlo je do greške. Molimo pokušajte ponovo.",
      network: "Problem s mrežom. Provjerite vašu internetsku vezu.",
      validation: "Molimo ispunite sva obavezna polja."
    },
    language: "Jezik"
  },
  en: {
    title: "TrueMeter - Odometer Fraud Detection",
    subtitle: "Check if the car's mileage is genuine",
    nav: {
      home: "Home",
      about: "About"
    },
    footer: {
      madeBy: "Made by"
    },
    about: {
      title: "About",
      subtitle: "How TrueMeter helps detect odometer fraud",
      howItWorks: {
        title: "How It Works",
        intro: "TrueMeter uses advanced machine learning algorithms to analyze cars and detect potential odometer fraud. The process is simple:",
        step1: {
          title: "Enter Car Details",
          description: "Input basic information such as make, model, year, reported mileage, fuel type, gearbox, horsepower, and price."
        },
        step2: {
          title: "AI Analysis",
          description: "Our system uses two specialized models: one predicts expected mileage based on year and vehicle characteristics, the other uses XGBoost algorithm for classification and anomaly detection."
        },
        step3: {
          title: "Get Results",
          description: "The system analyzes the difference between reported and expected mileage, compares price with market value, and provides an overall fraud score with detailed explanation."
        }
      },
      dataset: {
        title: "Dataset & Training",
        description: "Our models are trained on the extensive 'Cars Germany' dataset from Kaggle platform, containing data on over 46,000 vehicles from the German market.",
        features: {
          title: "Dataset includes:",
          item1: "46,405 car listings",
          item2: "Detailed information: make, model, year, mileage, price",
          item3: "Technical data: fuel type, engine power, gearbox type",
          item4: "Market information: offer type (new/used)",
          item5: "Collected from AutoScout24 platform"
        },
        source: "Dataset Source",
        kaggleLink: "View dataset on Kaggle"
      },
      technology: {
        title: "Technology",
        description: "TrueMeter combines multiple technologies for reliable results:",
        ai: {
          title: "Machine Learning",
          description: "XGBoost algorithm for classification and regression model for mileage prediction"
        },
        analysis: {
          title: "Market Analysis",
          description: "Price comparison with expected market value to detect suspiciously low prices"
        },
        rules: {
          title: "Business Rules",
          description: "Expert-defined thresholds (70% mileage difference, €30,000 price difference) for accurate detection"
        }
      },
      limitations: {
        title: "Important Note",
        description: "TrueMeter is a tool to assist in evaluation, but does not replace professional vehicle inspection. Results are based on statistical analysis and may vary. We always recommend:",
        item1: "Physical inspection by a professional mechanic",
        item2: "Vehicle history check (Carfax, AutoCheck)",
        item3: "Test drive and mechanical inspection",
        item4: "Service book and documentation verification"
      }
    },
    form: {
      make: "Make",
      makePlaceholder: "e.g. Volkswagen",
      model: "Model",
      modelPlaceholder: "e.g. Golf",
      year: "Year",
      yearPlaceholder: "2019",
      reportedKm: "Reported Mileage",
      kmPlaceholder: "92000",
      fuelType: "Fuel Type",
      fuelTypes: {
        petrol: "Petrol",
        diesel: "Diesel",
        electric: "Electric",
        hybrid: "Hybrid"
      },
      gearbox: "Gearbox",
      gearboxTypes: {
        manual: "Manual",
        automatic: "Automatic"
      },
      horsepower: "Horsepower",
      horsepowerPlaceholder: "115",
      price: "Price",
      pricePlaceholder: "14500",
      offerType: "Offer Type",
      offerTypes: {
        used: "Used",
        new: "New"
      },
      check: "Check Car",
      checking: "Checking..."
    },
    results: {
      title: "Analysis Results",
      fraudScore: "Fraud Score",
      suspicious: "Suspicious",
      notSuspicious: "Not Suspicious",
      expectedKm: "Expected Mileage",
      reasons: "Reasons",
      noReasons: "No specific reasons for suspicion",
      checkAnother: "Check Another Car"
    },
    errors: {
      title: "Error",
      generic: "An error occurred. Please try again.",
      network: "Network problem. Check your internet connection.",
      validation: "Please fill in all required fields."
    },
    language: "Language"
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.bs;
