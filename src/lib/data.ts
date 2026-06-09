export const img = {
  logo: "https://static.wixstatic.com/media/074fe1_6b1771c4d2dc495b9d0d010d6e6ef10b~mv2.jpg",
  hero: "https://static.wixstatic.com/media/074fe1_b1920e7ba6ca440eb411c6bc873e1922~mv2.jpg",
  clinicInterior:
    "https://static.wixstatic.com/media/074fe1_e1f891f99b884822bd0cf35b3b826bb4~mv2.jpg",
  servicesHero:
    "https://static.wixstatic.com/media/074fe1_e47bcfd891b84eaab218b2de5d2d873a~mv2.jpg",
  musculo:
    "https://static.wixstatic.com/media/074fe1_e7cb2bc73bdb4887aee802f9e1ed568d~mv2.jpg",
  pilates1:
    "https://static.wixstatic.com/media/074fe1_9af40f6a5869421287832eae4d6fa5ee~mv2.jpg",
  pilates2:
    "https://static.wixstatic.com/media/074fe1_70bf94eea39446ce84ec5831f0d47737~mv2.jpg",
  continence:
    "https://static.wixstatic.com/media/074fe1_553ce141ccd24eb2896c07c837eb3db6~mv2.jpg",
  acupuncture:
    "https://static.wixstatic.com/media/074fe1_fe76d0e79b014c2e9805e0fd32e5f7d3~mv2.jpg",
  pregnancy:
    "https://static.wixstatic.com/media/074fe1_2b42e40b728840a3a745b2f709817118~mv2.jpg",
  pregnancyVideoThumb:
    "https://static.wixstatic.com/media/074fe1_2ae03a33f5d94732a4c0fd6c7d06d8fdf002.jpg",
  elderly:
    "https://static.wixstatic.com/media/074fe1_0e6adfb8fb7a48c4824dd2a2df504220~mv2.jpg",
  womensHealth:
    "https://static.wixstatic.com/media/11062b_081222a691cf488cac75299ac1fbc147~mv2.jpg",
  rivka:
    "https://static.wixstatic.com/media/074fe1_f5885ae2cc794da8a723ca515ebff1b1~mv2.jpg",
  lisa: "https://static.wixstatic.com/media/074fe1_0dc64d587c9f4c57a079de98bf18d15f~mv2.jpeg",
  debbie:
    "https://static.wixstatic.com/media/074fe1_d83b4a086d734d53b5178003fbcd094b~mv2.jpeg",
  hcpc: "https://static.wixstatic.com/media/074fe1_93419818851a4c979e44a69afc848067~mv2.png",
  csp: "https://static.wixstatic.com/media/074fe1_3b365f4c799843c892a34ce64251dc57~mv2.jpg",
};

export const site = {
  name: "Oakley Physio",
  tagline: "North Manchester's No.1 Physiotherapy Practice",
  phone: "07806 358 752",
  phoneHref: "tel:07806358752",
  email: "oakleyphysio@aol.com",
  emailHref: "mailto:oakleyphysio@aol.com",
  address: "95 Windsor Road, Prestwich, Manchester, M25 0DB",
  footerAddress: "95 Windsor Road, Manchester, M25 0DB",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "The Team", href: "/the-team" },
  { label: "Appointments", href: "/appointments" },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact" },
];

export const features = [
  {
    title: "Our Services",
    text: "A wide range of services covering a variety of complaints and injuries.",
    href: "/services",
  },
  {
    title: "The Team",
    text: "Years of experience — all Chartered Physiotherapists, CSP and HPC registered.",
    href: "/the-team",
  },
  {
    title: "What Our Patients Say",
    text: "We are constantly striving to improve. Read what our patients have to say.",
    href: "/clients",
  },
];

export const stats = [
  { value: 24, suffix: "hrs", label: "Average appointment wait" },
  { value: 3, suffix: "+", label: "Specialist physiotherapists" },
  { value: 20, suffix: "+", label: "Years combined experience" },
  { value: 100, suffix: "%", label: "Major insurers recognised" },
];

export type Block =
  | { type: "p"; text: string }
  | { type: "bullets"; items: { lead?: string; text: string }[] };

export type Service = {
  slug: string;
  title: string;
  short: string;
  images: string[];
  videoThumb?: string;
  content: Block[];
  testimonials?: string[];
  bookingForm?: boolean;
};

export const services: Service[] = [
  {
    slug: "musculo-skeletal",
    title: "Musculo-Skeletal",
    short: "Treatment for spinal, joint, soft tissue, orthopaedic and sporting problems.",
    images: [img.musculo],
    content: [
      {
        type: "p",
        text: "Musculo-skeletal Physiotherapy includes the treatment of a variety of common problems such as:",
      },
      {
        type: "bullets",
        items: [
          {
            lead: "Spinal Problems:",
            text: "slipped disc, back pain, sciatica, stiff or painful necks, whiplash injuries.",
          },
          {
            lead: "Joint Problems:",
            text: "osteo-arthritis, rheumatoid arthritis, ankylosing spondylitis, frozen shoulders.",
          },
          {
            lead: "Soft Tissue Injuries:",
            text: "tennis elbow, tendinitis, repetitive strain injuries.",
          },
          {
            lead: "Orthopaedics:",
            text: "rehabilitation after fractures, dislocations, joint replacement surgery.",
          },
          {
            lead: "Sporting Injuries:",
            text: "ligament, cartilage or tendon damage.",
          },
        ],
      },
      {
        type: "p",
        text: "Treatments include using a range of skills and techniques including manipulation and massage, stretches and exercises, electrotherapy or acupuncture when appropriate and advice on prevention.",
      },
      {
        type: "p",
        text: "All physiotherapists at Oakley Physio are Chartered Physiotherapists. Achieving Chartered Physiotherapist status means that a physiotherapist must go through rigorous degree-level training for at least three years. After passing exams, they become state registered and qualified to work alongside medical teams in the NHS and in private practice.",
      },
    ],
  },
  {
    slug: "pilates",
    title: "Pilates",
    short: "Body conditioning targeting deep postural muscles for strength, control and posture.",
    images: [img.pilates1, img.pilates2],
    content: [
      {
        type: "p",
        text: "Pilates is a body conditioning method that targets the deep postural muscles in the back, and abdomen, building strength and control from the inside out.",
      },
      {
        type: "p",
        text: "It focuses on good posture, bringing the body into its correct alignment and adding slow controlled movements of the limbs to challenge balance.",
      },
      {
        type: "p",
        text: "Individuals can be seen for a tailored Pilates programme where Lisa will assess the individual's needs and prescribe exercises which will help them.",
      },
      {
        type: "p",
        text: "Small daytime classes are also held at the new studio. Lisa will always adapt exercises to suit the individuals in the class.",
      },
      {
        type: "p",
        text: "Lisa also runs evening classes on a Tuesday at the Elms Community Centre — it is a very popular class and is too big to take to the new studio.",
      },
      {
        type: "p",
        text: "Smaller classes generally mean more individual attention — prices reflect that.",
      },
      {
        type: "p",
        text: "Contact us to book an appointment or for pricing information.",
      },
    ],
  },
  {
    slug: "continence",
    title: "Continence Physiotherapy",
    short: "Discreet, expert help for bladder and pelvic floor problems.",
    images: [img.continence],
    content: [
      {
        type: "p",
        text: "Urinary incontinence or difficulty controlling your bladder is a symptom, not a disease.",
      },
      {
        type: "p",
        text: "It is still considered a taboo subject so many women (and men) who suffer with bladder problems do not seek help. However, 6 million people are affected in the UK; in fact more people suffer with bladder problems than asthma, epilepsy and diabetes put together!",
      },
      {
        type: "bullets",
        items: [
          { text: "Do you leak urine when you cough, sneeze, laugh or exercise?" },
          {
            text: "Do you go to the toilet more than 8 times a day or get up more than once in the night?",
          },
          { text: "Do you get little warning before needing to get to the toilet quickly?" },
        ],
      },
      {
        type: "p",
        text: "Most people consider their toilet habits to be normal but if you answered YES to any of the above questions then we could help you.",
      },
      {
        type: "p",
        text: "During your initial appointment, you will be asked many questions about your bladder and bowel, your medical history, and your work and lifestyle. A vaginal examination can be carried out with your full consent to ascertain your pelvic floor function.",
      },
      {
        type: "p",
        text: "Your physiotherapist will then be able to advise you on the best way to treat the problem. You may be taught about the pelvic floor muscles and bladder function. You will be taught strengthening exercises and may require the use of electrical stimulation to help. You will also be given lots of advice on training your bladder and perhaps some lifestyle changes.",
      },
    ],
  },
  {
    slug: "acupuncture",
    title: "Acupuncture",
    short: "Relieving acute and chronic muscle and joint pain.",
    images: [img.acupuncture],
    content: [
      { type: "p", text: "Acupuncture can be used with great success when it comes to relieving pain." },
      {
        type: "p",
        text: "At Oakley Physio you may be offered acupuncture as part of your treatment if it is appropriate. It could help relieve pain associated with acute or chronic muscle or joint problems including arthritis, low back pain, neck pain or 'whiplash', headaches, repetitive strain or sports injuries.",
      },
      {
        type: "p",
        text: "In traditional Chinese medicine, acupuncture has been used for thousands of years. The theory is that where there is pain in the body, there is a blockage of energy (Qi). By stimulating appropriate points along the energy channels called meridians, using very fine needles, these can be 'unblocked' and energy can flow freely.",
      },
      {
        type: "p",
        text: "In Western medicine, there is sound evidence showing that acupuncture stimulates the body's release of endorphins which reduce pain and aid recovery.",
      },
      {
        type: "p",
        text: "As we are a Physiotherapy Clinic and are governed by a Code of Conduct by the CSP, we will not undertake treatment of other conditions using acupuncture e.g. weight loss, smoking cessation, fertility, irritable bowel syndrome etc.",
      },
      {
        type: "p",
        text: "Safety and hygiene are paramount: only single use disposable needles are used.",
      },
    ],
  },
  {
    slug: "pregnancy",
    title: "Pregnancy Related Problems",
    short: "Relief from back and pelvic pain during pregnancy.",
    images: [img.pregnancy],
    videoThumb: img.pregnancyVideoThumb,
    content: [
      {
        type: "p",
        text: "Most women will experience some sort of back pain during their pregnancy. Increases in levels of the hormone elastin soften the ligaments around the low back and pelvis to allow for the growing baby and the birth. Weight gain and the expanding abdomen alter the curve in the lower back and can put stress on the joints of the spine and pelvis.",
      },
      {
        type: "p",
        text: "The laxity in the ligaments coupled with the dominant muscles pulling on the joints can lead to asymmetry of the pelvis which is usually the reason for the more severe pains felt typically when turning over in bed, getting in and out the car, climbing stairs and walking any distance. Stability of the joints depends greatly on the lower stomach muscles which are stretched during pregnancy.",
      },
      {
        type: "p",
        text: "Physiotherapy can often help. Mobilisations of the joints, massage, stretches and strengthening of muscles can be effective in reducing pain and discomfort. Using a pelvic support brace and crutches can be useful to reduce the forces through the pelvis in more severe cases.",
      },
    ],
  },
  {
    slug: "elderly-rehabilitation",
    title: "Elderly Rehabilitation",
    short: "Patient, dedicated rehabilitation with home visits available.",
    images: [img.elderly],
    content: [
      { type: "p", text: "Unfortunately the ageing population has a high risk of falls." },
      {
        type: "p",
        text: "We pride ourselves on rehabilitating our elderly patients, giving them the time and care they require.",
      },
      { type: "p", text: "We are able to do home visits if they are unable to get to our clinic." },
      {
        type: "p",
        text: "We have the studio space where we can see them for exercise, tailored for their specific needs.",
      },
      {
        type: "p",
        text: "We can teach someone how to get in and out of a chair or bed, how to walk with or without a walking aid and recommend the most appropriate aid to suit their needs.",
      },
      {
        type: "p",
        text: "We will look at the risk factors for falls and discuss reducing the risks, rehabilitating following an injury or preventing an injury from happening.",
      },
      {
        type: "p",
        text: "Exercises include those that build stamina, balance, strength and confidence.",
      },
    ],
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    short: "Specialist pelvic health, continence and menopause care.",
    images: [img.womensHealth],
    bookingForm: true,
    testimonials: [
      "I was really struggling with bladder issues. I went to see Lisa, and she has helped me so much. She put me at ease and gave me exercises and advice.",
      "Debbie is an expert in women's health. I was very nervous to go and get my issues seen to, but she was empathetic and made me feel very comfortable. I can't thank her enough.",
    ],
    content: [
      {
        type: "p",
        text: "Our Women's Health service specialises in pelvic health, continence care and prostate problems. Debbie Bernstein brings over 20 years of specialist clinical experience in the assessment and treatment of bladder, bowel and pelvic floor dysfunction, supporting patients through every stage of life.",
      },
      {
        type: "p",
        text: "Urinary incontinence or difficulty controlling your bladder is a symptom, not a disease. It is still considered a taboo subject so many women (and men) who suffer with bladder problems do not seek help. However, 6 million people are affected in the UK; in fact more people suffer with bladder problems than asthma, epilepsy and diabetes put together!",
      },
      {
        type: "bullets",
        items: [
          { text: "Do you leak urine when you cough, sneeze, laugh or exercise?" },
          {
            text: "Do you go to the toilet more than 8 times a day or get up more than once in the night?",
          },
          { text: "Do you get little warning before needing to get to the toilet quickly?" },
        ],
      },
      {
        type: "p",
        text: "Most people consider their toilet habits to be normal but if you answered YES to any of the above questions then we could help you.",
      },
      {
        type: "p",
        text: "During your initial appointment, you will be asked many questions about your bladder and bowel, your medical history, and your work and lifestyle. A vaginal examination can be carried out with your full consent to ascertain your pelvic floor function. Your physiotherapist will then advise you on the best way to treat the problem, including pelvic floor strengthening exercises, electrical stimulation, bladder training and lifestyle changes.",
      },
    ],
  },
];

export type Member = {
  name: string;
  qual: string;
  photo: string;
  bio: string;
};

export const team: Member[] = [
  {
    name: "Rivka Goldblatt",
    qual: "BSc (Hons) Physiotherapy",
    photo: img.rivka,
    bio: "After qualifying in 1999 from Salford University, Rivka started working at Hope Hospital where she continued to work up till 2013. In 2002, she specialised and took up a post in musculo-skeletal physiotherapy and has gained extensive experience in this area. Rivka has a keen interest in orthopaedics and has strong links with many of the orthopaedic surgeons in the Greater Manchester area. She has worked both in the NHS and privately, treating patients after joint replacement surgery, arthroscopies and sporting injuries. Rivka has studied for a post-graduate diploma in orthopaedic medicine. Rivka has also spent time training under a top London osteopath, specialising in spinal manipulation, which she can now offer to patients in the clinic. Rivka has worked in private practice since 2003.",
  },
  {
    name: "Lisa Miller",
    qual: "BSc (Hons) Physiotherapy",
    photo: img.lisa,
    bio: "Lisa qualified in 2001 from Glasgow Caledonian University with a degree in physiotherapy. After graduating she moved to Manchester and started working at Fairfield General Hospital, Pennine Acute NHS Trust. In 2003, Lisa took up a post in musculo-skeletal physiotherapy and developed a special interest in obstetrics and gynaecology. She has extensive experience in treating female incontinence problems, pregnancy related pelvic girdle pain (PGP) and symphysis pubis dysfunction (SPD). In 2012 Lisa left the NHS to take up a position in Heathlands Village, a large establishment encompassing a residential and nursing home, palliative care and warden-controlled flats. During the spring and summer of 2013 Lisa completed a course recognised across Europe and became qualified as a Postural Stability Instructor. This qualification has given her more in depth knowledge on the subject of falls prevention in the elderly. She has always had a keen interest in exercise and in 2008 she completed her APPI training as a Pilates instructor. She teaches individuals and small classes in the clinic studio as well as in the community. Lisa has also trained to use acupuncture to treat pain associated with musculo-skeletal conditions.",
  },
  {
    name: "Debbie Bernstein",
    qual: "BSc (Hons) Physiotherapy",
    photo: img.debbie,
    bio: "Debbie Bernstein is a highly experienced Women's and Men's Health Physiotherapist with over 20 years of specialist clinical experience in pelvic health, continence care and prostate problems. Having worked across both the NHS and private sector, Debbie has developed extensive expertise in the assessment and treatment of bladder, bowel and pelvic floor dysfunction, supporting people through every stage of life. Debbie is passionate about providing compassionate, evidence-based care and takes pride in creating a warm, supportive environment where patients feel listened to and understood. Alongside her specialist pelvic health work, she has a strong interest in menopause health and has completed additional certification as a menopause coach. Debbie also has a particular interest in supporting patients before and after HOLEP (Holmium laser Enucleation of the Prostate) procedures. She works closely with men to improve pelvic floor function, manage urinary symptoms and aid recovery, helping individuals regain confidence and return to daily activities safely and effectively. Throughout her career, Debbie has undertaken extensive postgraduate training in women's health, continence, pelvic floor dysfunction, perineal trauma and rehabilitation. Outside of work, Debbie enjoys travelling, Pilates, strength training, reading and spending time with her family and dog.",
  },
];

export const practitioners = ["Rivka Goldblatt", "Lisa Miller", "Debbie Bernstein"];

export const testimonials = [
  "Rivka Goldblatt is an outstanding physiotherapist and has helped me to overcome many operations and ongoing rehabilitative treatment. I credit her with my excellent progress following two total knee replacement operations and also ongoing back problems. I would highly recommend her personally too as being totally professional, warm and welcoming, but more importantly, very reassuring. I would highly recommend her.",
  "Amazing. Thank you for making me feel better. You do an amazing job Rivka. Also you need to join Lisa's Fabulous Pilates class it really makes you feel good and improves your posture and well being x",
  "A HUGE thank you to Oakley Physio!! When I came to them, I could barely walk from a torn calf muscle. 4 weeks later with their amazing treatment and wonderful guidance I can walk, jump, jog and look forward to returning to sport very soon. Me and my calf thank you!!",
  "Personal and caring treatment Lisa seemed to know what the matter was and treated me very sympathetically and was most caring.",
  "This is a great place. Rivka Goldblatt is an outstanding physio. I strongly recommend her, and have traveled all the way from Las Vegas to utilize her services.",
  "I was really struggling with bladder issues. I went to see Lisa, and she has helped me so much. She put me at ease and gave me exercises and advice.",
  "Debbie is an expert in women's health. I was very nervous to go and get my issues seen to, but she was empathetic and made me feel very comfortable. I can't thank her enough.",
];

export type PriceRow = {
  name: string;
  price: string;
  learnMore: string;
  bookHref: string;
};

export const pricing: PriceRow[] = [
  {
    name: "Physiotherapy initial assessment and treatment",
    price: "£44",
    learnMore: "/services#musculo-skeletal",
    bookHref: "tel:07806358752",
  },
  {
    name: "Follow up treatment",
    price: "£44",
    learnMore: "/services#musculo-skeletal",
    bookHref: "tel:07806358752",
  },
  {
    name: "Pregnancy related pain / longer appointment",
    price: "£70",
    learnMore: "/services#pregnancy",
    bookHref: "tel:07806358752",
  },
  {
    name: "Home visits",
    price: "£70",
    learnMore: "/services#elderly-rehabilitation",
    bookHref: "tel:07806358752",
  },
  {
    name: "Women's / Men's continence",
    price: "£85",
    learnMore: "/services#continence",
    bookHref: "tel:07806358752",
  },
  {
    name: "Follow up women's / men's continence",
    price: "£60",
    learnMore: "/services#continence",
    bookHref: "tel:07806358752",
  },
  {
    name: "Pilates",
    price: "Enquire within",
    learnMore: "/services#pilates",
    bookHref: "/contact",
  },
];
