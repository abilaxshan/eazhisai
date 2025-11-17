import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const getInitialLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("preferredLanguage") || "TA";
  }
  return "TA";
};

const sharedContent = {
  logo: {
    EN: "Eazhisai",
    TA: "ஏழிசை",
  },
};

const resources = {
  EN: {
    translation: {
      logo: sharedContent.logo.EN,
      home: "Home",
      about: "About",
      courses: "Courses",
      events: "Events",
      contact: "Contact",
      apply: "Apply Now",
      announcement: {
        email: "eazhisai@gmail.com",
        phone: "+94 70 5738946",
        address: "Malaimagal Street, Kalmunai, Uppuvelli",
        social: {
          facebook: "Facebook",
          x: "X",
          instagram: "Instagram",
          linkedin: "LinkedIn",
        },
      },
      hero: {
        title: "Layaritham",
        subtitle:
          "Start your journey in the world of music. Grow your talent with experienced mentors.",
        cta: "Apply Now",
      },
      features: {
        heading: "🎶 What do we teach?",
        items: [
          {
            title: "Experienced instructors",
            text: "Train with artists who blend tradition and technique.",
          },
          {
            title: "Live & hybrid classes",
            text: "Join uninterrupted live sessions or revisit recorded lessons.",
          },
        ],
      },
      coursesSection: {
        heading: "Courses",
        items: [
          {
            title: "Veena lessons",
            desc: "Veena coaching from fundamentals to advanced mastery.",
          },
          {
            title: "Mridangam lessons",
            desc: "Rhythm, accompaniment, and polished mridangam practice.",
          },
          {
            title: "Sangeetham lessons",
            desc: "Carnatic vocals, voice training, and structured syllabi.",
          },
        ],
      },
      eventsSection: {
        heading: "Events",
        items: [
          { title: "Concert", description: "A mesmerising musical performance." },
          {
            title: "Veena recital",
            description: "A special veena concert for classical music lovers.",
          },
          {
            title: "Sethupathi musical",
            description: "An enchanting evening of curated melodies.",
          },
        ],
      },
      team: {
        heading: "Our Team 🎶",
        description:
          "We share the heritage of Carnatic music and its nuances worldwide. Experienced artists and mentors provide top-tier musical education and stage practice.",
        members: [
          {
            name: "Kalyanasaran Aasaan",
            role: "Music Tutor",
            instrument: "Veena",
            bio: "30 years of experience mentoring students into accomplished performers.",
          },
          {
            name: "Kalyanasaran",
            role: "Vocal Coach",
            instrument: "Carnatic Vocal",
            bio: "15 years of teaching with numerous accolades.",
          },
          {
            name: "Kalyanasaran",
            role: "Music Tutor",
            instrument: "Mridangam",
            bio: "20 years of experience teaching traditional percussion.",
          },
        ],
      },
      footer: {
        about:
          "Eazhisai nurtures the beauty of classical music — a bridge between Tamil musical heritage and the next generation.",
        quickLinksTitle: "Quick Links",
        quickLinks: {
          about: "About Us",
          events: "Events",
          contact: "Contact",
        },
        followTitle: "Follow Us",
        rightsPrefix: "© {{year}} ",
        company: "Neyra Tech",
        rightsSuffix: ". All rights reserved.",
      },
      aboutSection: {
        title: "About",
        description:
          "Eazhisai Arts College offers Carnatic music training built on tradition and purpose. Use this space to introduce your organisation in depth.",
        storyTitle: "Our Heritage",
        story:
          "Founded as a gurukul-styled collective, we blend disciplined Carnatic pedagogy with compassionate mentorship. Morning ragams, theory circles, and collaborative kutcheris shape every learner.",
        missionTitle: "Living the Raga",
        mission:
          "We nurture confident performers who understand not only compositions but the cultural stories that power them.",
        highlights: [
          {
            title: "Gurukulam Mentorship",
            description: "Personal guidance from veena, mridangam, and vocal stalwarts.",
          },
          {
            title: "Heritage Repertoire",
            description: "Rare varnams and kritis curated from multi-generational archives.",
          },
          {
            title: "Stage-ready Programs",
            description: "Immersive kutcheri labs, talam circles, and collaborative ensembles.",
          },
        ],
        stats: [
          { label: "Years of legacy", value: "35+" },
          { label: "Annual performances", value: "120+" },
          { label: "Disciplines taught", value: "08" },
        ],
      },
      blogSection: {
        title: "Latest Articles",
        description:
          "Articles and news will appear here soon. (Placeholder)",
      },
      contactSection: {
        title: "Contact",
        emailLabel: "Email",
        phoneLabel: "Phone",
        subtitle:
          "Visit our gurukulam, schedule a trial session, or simply write to us about your musical aspirations.",
        address: "Malaimagal Street, Kalmunai, Uppuvelli",
        channels: [
          { label: "Email", value: "eazhisai@gmail.com", link: "mailto:eazhisai@gmail.com" },
          { label: "Phone", value: "+94 70 573 8946", link: "tel:+94705738946" },
          { label: "Office", value: "Malaimagal Street, Kalmunai, Uppuvelli" },
        ],
        visitCta: "Plan a visit",
        visitNote: "Campus tours are available on weekends with prior booking.",
      },
      application: {
        title: "Apply to Eazhisai Arts College",
        subtitle:
          "Tell us about your musical journey. Our mentors will guide you to the right program and schedule.",
        badge: "New Intake Open",
        fields: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          course: "Preferred Course",
          message: "Tell us about your goals",
          submit: "Submit Application",
          coursePlaceholder: "Select a course",
          messagePlaceholder: "Share your experience, interests or expectations...",
        },
        helperText: "We will reach out within 2–3 business days.",
        success: "Thank you! Our coordinators will reach out shortly.",
      },
      privacy: {
        title: "Privacy Policy",
        intro:
          "This policy explains how we collect, use, and protect your personal information on our website.",
        collectionTitle: "Information we collect",
        collectionIntro: "We may collect the following details:",
        collectionList: [
          "Name and contact details",
          "Email address",
          "Phone number",
        ],
      },
      terms: {
        title: "Terms of Use",
        intro:
          "These terms outline the conditions for using our services.",
        usageTitle: "Service usage",
        usageIntro: "By using our services, you agree to:",
        usageList: [
          "Regular participation in classes",
          "Following the curriculum",
          "Respecting payment policies",
        ],
      },
    },
  },
  TA: {
    translation: {
      logo: sharedContent.logo.TA,
      home: "முகப்புப் பக்கம்",
      about: "பற்றி",
      courses: "படிப்புகள்",
      events: "நிகழ்வுகள்",
      contact: "தொடர்பு",
      apply: "இப்போது விண்ணப்பிக்கவும்",
      announcement: {
        email: "eazhisai@gmail.com",
        phone: "+94 70 5738946",
        address: "மலைமகள் வீதி, கல்முனை, உப்புவெளி",
        social: {
          facebook: "facebook",
          x: "x",
          instagram: "instagram",
          linkedin: "linkedin",
        },
      },
      hero: {
        title: "லயரிதம்",
        subtitle:
          "இசையின் உலகில் உங்கள் பயணத்தை தொடங்குங்கள். அனுபவமிக்க ஆசிரியர்களுடன் உங்கள் திறமைகளை வளர்த்தெடுக்கலாம்.",
        cta: "இப்போது விண்ணப்பிக்கவும்",
      },
      features: {
        heading: "🎶 எதைக் கற்பது?",
        items: [
          {
            title: "அனுபவம் வாய்ந்த ஆசிரியர்கள்",
            text: "பாரம்பரியம் மற்றும் நுட்பங்களை உடைய கலைஞர்கள் மூலம் பயிற்சி.",
          },
          {
            title: "நேரலை & நேரடி வகுப்புகள்",
            text: "நேரடி இடையூறு இல்லாமல் நேரலை வகுப்புகள் மற்றும் பதிவு செய்யப்பட்ட பாடங்கள்.",
          },
        ],
      },
      coursesSection: {
        heading: "படிப்புகள்",
        items: [
          {
            title: "வீணை பாடம்",
            desc: "அடிப்படை முதல் மேம்பட்ட நிலை வரை வீணை இசை பயிற்சி.",
          },
          {
            title: "மிருதங்கம் பாடம்",
            desc: "தாளம், குரல் இணைப்பு மற்றும் நேர்த்தியான மிருதங்கம் பயிற்சி.",
          },
          {
            title: "சங்கீதம் பாடம்",
            desc: "கர்நாடக இசை, குரல் பயிற்சி மற்றும் பாடத்திட்டங்கள்.",
          },
        ],
      },
      eventsSection: {
        heading: "நிகழ்வுகள்",
        items: [
          { title: "கச்சேரி", description: "அற்புதமான இசை நிகழ்ச்சி." },
          {
            title: "வீணைக் கச்சேரி",
            description: "சங்கீத விருப்பங்களுக்கான வீணைக் கச்சேரி.",
          },
          {
            title: "சேதுபதி இசை நிகழ்ச்சி",
            description: "நிகழ்ச்சியின் அழகான இசை நிகழ்ச்சி.",
          },
        ],
      },
      team: {
        heading: "எங்கள் குழு 🎶",
        description:
          "கர்நாடக இசையின் பாரம்பரியத்தையும், அதன் அழகிய நுணுக்கங்களையும் உலகளவில் பரப்ப விழைகின்றோம். அனுபவம் வாய்ந்த கலைஞர்கள் மற்றும் ஆசிரியர்கள் இணைந்து, மாணவர்களுக்கு சிறந்த இசைக் கல்வியையும், மேடை அனுபவத்தையும் வழங்குகிறோம்.",
        members: [
          {
            name: "கல்யாண்சரண்  ஆசான்",
            role: "இசை ஆசிரியர்",
            instrument: "வீணை",
            bio: "30 ஆண்டுகள் அனுபவம். பல மாணவர்களை சிறந்த கலைஞர்களாக உருவாக்கியவர்.",
          },
          {
            name: "கல்யாண்சரண்",
            role: "பாட்டு ஆசிரியை",
            instrument: "கர்நாடக வோகல்",
            bio: "15 ஆண்டுகள் கற்பித்தல் அனுபவம். பல விருதுகள் பெற்றவர்.",
          },
          {
            name: "கல்யாண்சரண்",
            role: "இசை ஆசிரியர்",
            instrument: "மிருதங்கம்",
            bio: "20 ஆண்டுகள் அனுபவம். பாரம்பரிய முறையில் கற்பிப்பவர்.",
          },
        ],
      },
      footer: {
        about:
          "பாரம்பரிய இசையின் அழகை வளர்த்தெடுக்கும் ஈழிசை — தமிழ் இசைப் பண்பாட்டை புதிய தலைமுறையுடன் இணைக்கும் ஒரு முயற்சி.",
        quickLinksTitle: "விரைவு இணைப்புகள்",
        quickLinks: {
          about: "எங்களை பற்றி",
          events: "நிகழ்வுகள்",
          contact: "தொடர்பு",
        },
        followTitle: "பின்தொடரவும்",
        rightsPrefix: "© {{year}} ",
        company: "நெய்ரா டெக்",
        rightsSuffix: ". அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      },
      aboutSection: {
        title: "பற்றி",
        description:
          "ஈழிசைஆர்ட்ஸ் கல்லூரி — கர்நாடக இசையின் மரபையும் முதன்மை இலக்குகளையும் கொண்டு பயிற்சி தரும் நிறுவனம். இந்தப் பக்கம் உங்கள் நிறுவனம்/அமைப்பைப் பற்றி விளக்கமாகக் காண்பிக்கும்.",
        storyTitle: "எங்கள் பாரம்பரியம்",
        story:
          "குருகுல மரபில் உருவான எங்கள் நிறுவனம், எளிமையும் ஒழுக்கமும் உள்ள கர்நாடக கலைக்கல்வியைக் கருணையுடன் பேணுகிறது. காலை ராகம் பயிற்சிகள், சாஸ்திரிய கலந்துரையாடல்கள், கூட்டு கச்சேரிகள் ஆகியவை ஒவ்வொரு மாணவரையும் செழிக்கச் செய்கின்றன.",
        missionTitle: "ராகத்தில் வாழ்வு",
        mission:
          "இசையின் பின்னாலுள்ள கதைகளை அறிந்த சிறந்த மேடை கலைஞர்களாக மாணவர்களை உருவாக்குவதே எங்கள் இலக்கு.",
        highlights: [
          {
            title: "குருகுல வழிகாட்டல்",
            description: "வீணை, மிருதங்கம், வோகல் துறையின் வல்லுநர்களிடமிருந்து தனிப்பட்ட மேற்பார்வு.",
          },
          {
            title: "பாரம்பரிய தொகுப்புகள்",
            description: "பல தலைமுறை களஞ்சியங்களில் இருந்து தேர்ந்தெடுக்கப்பட்ட அரிய வர்ணம் மற்றும் கீர்த்தனைகள்.",
          },
          {
            title: "மேடை தயார் திட்டங்கள்",
            description: "கச்சேரி ஆய்வுகூடங்கள், தாள வட்டங்கள், கூட்டு அமைப்புகள் மூலம் முழுமை.",
          },
        ],
        stats: [
          { label: "பாரம்பரிய ஆண்டுகள்", value: "35+" },
          { label: "ஆண்டு கச்சேரிகள்", value: "120+" },
          { label: "பயிற்சி துறைகள்", value: "08" },
        ],
      },
      blogSection: {
        title: "சமீபத்திய கட்டுரைகள்",
        description:
          "கட்டுரைகள் மற்றும் செய்திகள் விரைவில் இங்கே இடம் பெறும். (Placeholder)",
      },
      contactSection: {
        title: "தொடர்பு",
        emailLabel: "மின்னஞ்சல்",
        phoneLabel: "தொலைபேசி",
        subtitle:
          "எங்கள் குருகுலத்தை நேரில் பார்வையிடவும், ஒரு சோதனை வகுப்பை முன்பதிவு செய்யவும், அல்லது உங்கள் இசை கனவுகளை எங்களுடன் பகிரவும்.",
        address: "மலைமகள் வீதி, கல்முனை, உப்புவெளி",
        channels: [
          { label: "மின்னஞ்சல்", value: "eazhisai@gmail.com", link: "mailto:eazhisai@gmail.com" },
          { label: "தொலைபேசி", value: "+94 70 573 8946", link: "tel:+94705738946" },
          { label: "அலுவலகம்", value: "மலைமகள் வீதி, கல்முனை, உப்புவெளி" },
        ],
        visitCta: "வருகையை திட்டமிடவும்",
        visitNote: "முன்பதிவு செய்யப்பட்டால் வார இறுதிகளில் வளாகத்தை பார்வையிடலாம்.",
      },
      application: {
        title: "ஏழிசை கலைக் கல்லூரியில் சேர விண்ணப்பிக்கவும்",
        subtitle:
          "உங்கள் இசைப் பயணத்தை எங்களுடன் பகிருங்கள். சரியான பயிற்சி திட்டம் மற்றும் அட்டவணையை எங்கள் ஆசிரியர்கள் வழிகாட்டுவார்கள்.",
        badge: "புதிய சேர்க்கை திறப்பு",
        fields: {
          name: "முழுப் பெயர்",
          email: "மின்னஞ்சல் முகவரி",
          phone: "தொலைபேசி எண்",
          course: "விருப்ப படிப்பு",
          message: "உங்கள் நோக்கங்களைப் பகிருங்கள்",
          submit: "விண்ணப்பத்தை சமர்ப்பிக்கவும்",
          coursePlaceholder: "ஒரு படிப்பைத் தேர்வு செய்யவும்",
          messagePlaceholder: "உங்கள் அனுபவம், விருப்பங்கள் அல்லது எதிர்பார்ப்புகளைப் பகிருங்கள்...",
        },
        helperText: "2–3 வேலை நாட்களுக்குள் நாங்கள் தொடர்பு கொள்வோம்.",
        success: "நன்றி! எங்கள் ஒருங்கிணைப்பாளர்கள் விரைவில் தொடர்பு கொள்வார்கள்.",
      },
      privacy: {
        title: "தனியுரிமைக் கொள்கை",
        intro:
          "இந்த தனியுரிமைக் கொள்கை எங்கள் வலைத்தளத்தில் தங்கள் தனிப்பட்ட தகவல்களை எவ்வாறு சேகரிக்கிறோம், பயன்படுத்துகிறோம் மற்றும் பாதுகாக்கிறோம் என்பதை விளக்குகிறது.",
        collectionTitle: "தகவல் சேகரிப்பு",
        collectionIntro: "நாங்கள் பின்வரும் தகவல்களை சேகரிக்கலாம்:",
        collectionList: [
          "பெயர் மற்றும் தொடர்பு விவரங்கள்",
          "மின்னஞ்சல் முகவரி",
          "தொலைபேசி எண்",
        ],
      },
      terms: {
        title: "பயன்பாட்டு விதிமுறைகள்",
        intro:
          "இந்த விதிமுறைகள் எங்கள் சேவைகளை பயன்படுத்துவதற்கான நிபந்தனைகளை விளக்குகின்றன.",
        usageTitle: "சேவை பயன்பாடு",
        usageIntro: "எங்கள் சேவைகளை பயன்படுத்தும்போது, நீங்கள் பின்வருவனவற்றை ஏற்கிறீர்கள்:",
        usageList: [
          "வகுப்புகளில் முறையான பங்கேற்பு",
          "பாடத் திட்டத்தை பின்பற்றுதல்",
          "கட்டண கொள்கைகளை மதித்தல்",
        ],
      },
    },
  },
};

i18n.use(initReactI18next).init({
    resources,
  lng: getInitialLanguage(),
  fallbackLng: "EN",
  interpolation: { escapeValue: false },
  });

export default i18n;
