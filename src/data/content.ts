// ────────────────────────────────────────────────────────────────────────────
//  Wedding content — all locale-specific strings in one place.
//  EN at "/", VI at "/vi". Pages read from here so the two locales stay in sync.
// ────────────────────────────────────────────────────────────────────────────

export interface Locale {
  code: "en" | "vi";
  prefix: string; // nav href prefix
  events: {
    title: string;
    description: string;
    intro: string;
    dateLabel: string;
    venueLabel: string;
    hanoi: {
      title: string;
      body: string;
      date: string;
      venue: string;
      map: string;
    };
    hcm: {
      title: string;
      body: string;
      date: string;
      venue: string;
      map: string;
    };
  };
  story: {
    title: string;
    description: string;
    lede: string;
    sections: {
      heading: string;
      date: string;
      body: string;
      images: { src: string; alt: string }[];
      externalImage?: { src: string; alt: string };
    }[];
  };
  gallery: { title: string };
  gifts: {
    title: string;
    intro: string;
    momoHeading: string;
    momoAlt: string;
    sections: { heading: string; body: string }[];
  };
  rsvp: {
    title: string;
    intro: string;
    deadline: string;
    noteLabel: string;
    note: string;
  };
  home: {
    hero: string;
    hanoi: string;
    hcm: string;
    tagline: string;
    ctaRsvp: string;
    ctaGifts: string;
    thankTitle: string;
    thankBody: string;
    signoff: string;
    features: { icon: string; title: string; details: string; link: string }[];
  };
}

const en: Locale = {
  code: "en",
  prefix: "/",
  events: {
    title: "Our Wedding Celebrations",
    description:
      "Join us for two wedding celebrations in Hanoi and Ho Chi Minh City. Find all the details about dates, venues, and countdowns.",
    dateLabel: "Date",
    venueLabel: "Venue",
    intro:
      "We are thrilled to invite you to celebrate our marriage! We will be hosting two special events to share our joy with all our loved ones.",
    hanoi: {
      title: "Celebration Party in Hanoi",
      body: "Join us for a joyous celebration in the beautiful city of Hanoi. We can\u2019t wait to celebrate with our family and friends in the North.",
      date: "Monday, 11:00, December 29, 2025",
      venue: "Trong Dong Palace, 40 Hang Cot, Hoan Kiem, Ha Noi, Vietnam",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8738140325736!2d105.84422976119241!3d21.037734437388757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb95cf9d3d1%3A0xf3f702ec451c57e2!2zVHLhu5FuZyDEkOG7k25nIFBhbGFjZQ!5e0!3m2!1sfi!2sfi!4v1759608602595!5m2!1sfi!2sfi",
    },
    hcm: {
      title: "Wedding Party in Ho Chi Minh City",
      body: "Our main wedding celebration will take place in the vibrant Ho Chi Minh City. We look forward to sharing this momentous occasion with all of you.",
      date: "Sunday, 11:00, January 11, 2026",
      venue:
        "Pavillon Tan Son Nhat, 202 Hoang Van Thu st., Ward 9, Phu Nhuan District, Ho Chi Minh City, Vietnam",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.134738705387!2d106.66826771125325!3d10.800990889304837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752928b68fbc3f%3A0xc58bea5686708420!2zVHJ1bmcgVMOibSBI4buZaSBOZ2jhu4sgJiBUaeG7h2MgQ8aw4bubaSBQYXZpbGxvbiBUw6JuIFPGoW4gTmjhuqV0!5e0!3m2!1sfi!2sfi!4v1759253938944!5m2!1sfi!2sfi",
    },
  },
  story: {
    title: "Our Story",
    description:
      "From the first text message to the day Linh said \u201CI do\u201D \u2014 read about how Kha and Linh met and their journey to the altar.",
    lede: "From the first text message to the day Linh said \u201CI do\u201D.",
    sections: [
      {
        heading: "The Wish",
        date: "July 22, 2023",
        body: "One evening, Kha looked up at the moon and made a wish: \u201CI feel so bored living alone on this earth, I wish I could find a like-minded life partner\u201D. The Moon Lady replied: \u201CSo be it.\u201D",
        images: [{ src: "the-wish.jpeg", alt: "The Wish" }],
      },
      {
        heading: "The Day We Met",
        date: "September 2, 2023",
        body: "Our first date was at Que Em restaurant, Kamppi.",
        images: [],
        externalImage: {
          src: "https://files.venuu.se/attachments/000/265/972/26b798e0af7d85c06d6f8acfd20cdc8e6d01dd9d.jpg",
          alt: "The first time we met",
        },
      },
      {
        heading: "Time Together",
        date: "2024 and 2025",
        body: "From then on, we started doing everything together.",
        images: [
          { src: "sup.jpg", alt: "Romantic moment" },
          { src: "cruise.jpeg", alt: "Romantic moment" },
          { src: "badminton.jpg", alt: "Romantic moment" },
          { src: "ski-2.jpeg", alt: "Romantic moment" },
          { src: "aurora.jpeg", alt: "Romantic moment" },
        ],
      },
      {
        heading: "The Proposal",
        date: "February 9, 2025",
        body: "Kha proposed and Linh said \u201COK\u201D.",
        images: [
          { src: "propose.jpg", alt: "The Proposal" },
          { src: "wedding-ring.jpg", alt: "The Proposal" },
          { src: "wedding-ring-2.jpg", alt: "The Proposal" },
        ],
      },
      {
        heading: "We\u2019re Getting Married!",
        date: "January 11, 2026",
        body: "",
        images: [{ src: "lake-como.jpg", alt: "We\u2019re getting married" }],
      },
    ],
  },
  gallery: { title: "Gallery" },
  gifts: {
    title: "Wedding Gifts",
    intro:
      "Your presence at our wedding is the greatest gift for us. Linh and Kha would like to thank you for your love.",
    momoHeading: "Momo",
    momoAlt: "Momo QR code",
    sections: [
      {
        heading: "Bank Transfer (Vietnam)",
        body: "**Account Name:** Nguyen Le Hoang Kha\n- **Bank Name:** MBBank\n- **Account Number:** 1804198879\n\n**Account Name:** Nguyen Khanh Linh\n- **Bank Name:** MBBank\n- **Account Number:** 028111997",
      },
      {
        heading: "MobilePay (Finland)",
        body: "**Recipient:** Kha Nguyen\n- **Number:** 0449884108\n\n**Recipient:** Khanh Linh Nguyen\n- **Number:** 0452777977",
      },
      {
        heading: "Bank Transfer (Finland)",
        body: "- **Bank Name:** Revolut Bank UAB\n- **Account Name:** Le Hoang Kha Nguyen\n- **IBAN:** LT04 3250 0061 6339 9979\n- **BIC/SWIFT:** REVOLT21\n- **Currency:** EURO",
      },
      {
        heading: "Web (International)",
        body: "[Revolut](https://revolut.me/khanguyen)",
      },
    ],
  },
  rsvp: {
    title: "Kindly Respond",
    intro: "We are so excited to celebrate our special day with you!",
    deadline:
      "Please let us know if you will be able to attend by filling out the Google Form below by **November 29th, 2025**. This will help us welcome you thoroughly and fully. Thank you!",
    noteLabel: "Important Note",
    note: "This Google Form requires cookies to function correctly. Please approve any cookie requests to ensure you can submit your RSVP. Your privacy is important to us, and this is a standard security measure for embedded forms.",
  },
  home: {
    hero: "Kha & Linh",
    hanoi: "29/12/2025  Hanoi",
    hcm: "11/01/2026  Ho Chi Minh",
    tagline: "We\u2019re so excited to celebrate our special day with you.",
    ctaRsvp: "RSVP",
    ctaGifts: "Gifts",
    thankTitle: "Thank You",
    thankBody:
      "Thank you to all our friends, family, and loved ones for your unwavering companionship and support. We are incredibly grateful to have you in our lives and eagerly await sharing our special day with you. Your presence to witness and celebrate with us means the world.",
    signoff: "With love, Kha & Linh",
    features: [
      {
        icon: "\u{1F389}",
        title: "The Big Days",
        details:
          "Find all the details about the wedding ceremony and reception.",
        link: "/events",
      },
      {
        icon: "\u{1F496}",
        title: "Our Story",
        details: "Read about how we met and our journey to the altar.",
        link: "/story",
      },
      {
        icon: "\u{1F4F7}",
        title: "Wedding Photo Album",
        details: "View our wedding photos.",
        link: "/gallery",
      },
    ],
  },
};

const vi: Locale = {
  code: "vi",
  prefix: "/vi",
  events: {
    title: "C\u00E1c s\u1EF1 ki\u1EC7n c\u01B0\u1EDBi",
    description:
      "Tham gia c\u00F9ng ch\u00FAng m\u00ECnh trong hai bu\u1ED5i ti\u1EC7c t\u1EA1i H\u00E0 N\u1ED9i v\u00E0 Th\u00E0nh ph\u1ED1 H\u1ED3 Ch\u00ED Minh. T\u00ECm hi\u1EC3u chi ti\u1EBFt v\u1EC1 ng\u00E0y gi\u1EDD, \u0111\u1ECBa \u0111i\u1EC3m v\u00E0 th\u1EDDi gian \u0111\u1EBFm ng\u01B0\u1EE3c.",
    dateLabel: "Ng\u00E0y",
    venueLabel: "\u0110\u1ECBa \u0111i\u1EC3m",
    intro:
      "S\u1EF1 hi\u1EC7n di\u1EC7n c\u1EE7a c\u00E1c b\u1EA1n l\u00E0 ni\u1EC1m vinh h\u1EA1nh cho gia \u0111\u00ECnh v\u00E0 v\u1EE3 ch\u1ED3ng m\u00ECnh.",
    hanoi: {
      title: "Ti\u1EC7c b\u00E1o h\u1EF7 t\u1EA1i H\u00E0 N\u1ED9i",
      body: "M\u1EDDi b\u1EA1n \u0111\u1EBFn tham d\u1EF1 b\u1EEFA ti\u1EC7c th\u00E2n m\u1EADt c\u00F9ng gia \u0111\u00ECnh ch\u00FAng m\u00ECnh.",
      date: "Th\u1EE9 Hai, 11:00, ng\u00E0y 29 th\u00E1ng 12 n\u0103m 2025",
      venue:
        "Tr\u1ED1ng \u0110\u1ED3ng Palace, 40 H\u00E0ng C\u00F3t, Ho\u00E0n Ki\u1EBFm, H\u00E0 N\u1ED9i",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8738140325736!2d105.84422976119241!3d21.037734437388757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb95cf9d3d1%3A0xf3f702ec451c57e2!2zVHLhu5FuZyDEkOG7k25nIFBhbGFjZQ!5e0!3m2!1sfi!2sfi!4v1759608602595!5m2!1sfi!2sfi",
    },
    hcm: {
      title:
        "L\u1EC5 th\u00E0nh h\u00F4n t\u1EA1i Th\u00E0nh ph\u1ED1 H\u1ED3 Ch\u00ED Minh",
      body: "L\u1EC5 c\u01B0\u1EDBi ch\u00EDnh c\u1EE7a ch\u00FAng m\u00ECnh s\u1EBD di\u1EC5n ra t\u1EA1i Th\u00E0nh ph\u1ED1 H\u1ED3 Ch\u00ED Minh s\u00F4i \u0111\u1ED9ng. Ch\u00FAng m\u00ECnh mong ch\u1EDD \u0111\u01B0\u1EE3c chia s\u1EBB kho\u1EA3nh kh\u1EAFc tr\u1ECDng \u0111\u1EA1i n\u00E0y v\u1EDBi t\u1EA5t c\u1EA3 c\u00E1c b\u1EA1n.",
      date: "Ch\u1EE7 Nh\u1EADt, 11:00, ng\u00E0y 11 th\u00E1ng 1 n\u0103m 2026",
      venue:
        "Trung t\u00E2m ti\u1EC7c c\u01B0\u1EDBi Pavillon T\u00E2n S\u01A1n Nh\u1EA5t, 202 \u0110. Ho\u00E0ng V\u0103n Th\u1EE5, Ph\u01B0\u1EDDng 9, Ph\u00FA Nhu\u1EADn, H\u1ED3 Ch\u00ED Minh",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.134738705387!2d106.66826771125325!3d10.800990889304837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752928b68fbc3f%3A0xc58bea5686708420!2zVHJ1bmcgVMOibSBI4buZaSBOZ2jhu4sgJiBUaeG7h2MgQ8aw4bubaSBQYXZpbGxvbiBUw6JuIFPGoW4gTmjhuqV0!5e0!3m2!1sfi!2sfi!4v1759253938944!5m2!1sfi!2sfi",
    },
  },
  story: {
    title: "C\u00E2u chuy\u1EC7n c\u1EE7a ch\u00FAng m\u00ECnh",
    description:
      "T\u1EEB l\u1EA7n \u0111\u1EA7u nh\u1EAFn tin cho \u0111\u1EBFn ng\u00E0y Linh n\u00F3i \u201CEm \u0111\u1ED3ng \u00FD\u201D \u2014 c\u00E2u chuy\u1EC7n t\u00ECnh y\u00EAu c\u1EE7a Kha v\u00E0 Linh.",
    lede: "T\u1EEB l\u1EA7n \u0111\u1EA7u nh\u1EAFn tin cho \u0111\u1EBFn ng\u00E0y Linh n\u00F3i \u201CEm \u0111\u1ED3ng \u00FD\u201D.",
    sections: [
      {
        heading: "\u0110i\u1EC1u \u01B0\u1EDBc",
        date: "22 th\u00E1ng 7 n\u0103m 2023",
        body: "M\u1ED9t bu\u1ED5i t\u1ED1i n\u1ECD, Kha nh\u00ECn l\u00EAn m\u1EB7t tr\u0103ng v\u00E0 \u01B0\u1EDBc: \u201CTa c\u1EA3m th\u1EA5y s\u1ED1ng m\u00E3i m\u1ED9t m\u00ECnh \u1EDF tr\u1EA7n gian n\u00E0y th\u1EADt ch\u00E1n qu\u00E1, \u01B0\u1EDBc g\u00EC ta t\u00ECm \u0111\u01B0\u1EE3c m\u1ED9t ng\u01B0\u1EDDi b\u1EA1n \u0111\u1EDDi t\u00E2m \u0111\u1EA7u \u00FD h\u1EE3p\u201D. Ch\u1ECB H\u1EB1ng li\u1EC1n tr\u1EA3 l\u1EDDi: \u201C\u0110\u01B0\u1EE3c th\u00F4i\u201D.",
        images: [{ src: "the-wish.jpeg", alt: "\u0110i\u1EC1u \u01B0\u1EDBc" }],
      },
      {
        heading: "Ng\u00E0y ch\u00FAng m\u00ECnh g\u1EB7p nhau",
        date: "2 th\u00E1ng 9 n\u0103m 2023",
        body: "Bu\u1ED5i h\u1EB9n h\u00F2 \u0111\u1EA7u ti\u00EAn c\u1EE7a b\u1ECDn m\u00ECnh \u1EDF nh\u00E0 h\u00E0ng Qu\u00EA Em, Kamppi.",
        images: [],
        externalImage: {
          src: "https://files.venuu.se/attachments/000/265/972/26b798e0af7d85c06d6f8acfd20cdc8e6d01dd9d.jpg",
          alt: "L\u1EA7n \u0111\u1EA7u g\u1EB7p nhau",
        },
      },
      {
        heading: "Th\u1EDDi gian b\u00EAn nhau",
        date: "2024 v\u00E0 2025",
        body: "T\u1EEB \u0111\u00F3, b\u1ECDn m\u00ECnh b\u1EAFt \u0111\u1EA7u l\u00E0m m\u1ECDi th\u1EE9 c\u00F9ng nhau.",
        images: [
          { src: "sup.jpg", alt: "Kho\u1EA3nh kh\u1EAFc l\u00E3ng m\u1EA1n" },
          {
            src: "cruise.jpeg",
            alt: "Kho\u1EA3nh kh\u1EAFc l\u00E3ng m\u1EA1n",
          },
          {
            src: "badminton.jpg",
            alt: "Kho\u1EA3nh kh\u1EAFc l\u00E3ng m\u1EA1n",
          },
          {
            src: "ski-2.jpeg",
            alt: "Kho\u1EA3nh kh\u1EAFc l\u00E3ng m\u1EA1n",
          },
          {
            src: "aurora.jpeg",
            alt: "Kho\u1EA3nh kh\u1EAFc l\u00E3ng m\u1EA1n",
          },
        ],
      },
      {
        heading: "L\u1EDDi c\u1EA7u h\u00F4n",
        date: "9 th\u00E1ng 2 n\u0103m 2025",
        body: "Kha ng\u1ECF l\u1EDDi v\u00E0 Linh n\u00F3i \u201COK\u201D.",
        images: [
          { src: "propose.jpg", alt: "L\u1EDDi c\u1EA7u h\u00F4n" },
          { src: "wedding-ring.jpg", alt: "L\u1EDDi c\u1EA7u h\u00F4n" },
          { src: "wedding-ring-2.jpg", alt: "L\u1EDDi c\u1EA7u h\u00F4n" },
        ],
      },
      {
        heading: "Ch\u00FAng m\u00ECnh s\u1EAFp k\u1EBFt h\u00F4n!",
        date: "11 th\u00E1ng 1 n\u0103m 2026",
        body: "",
        images: [
          {
            src: "lake-como.jpg",
            alt: "Ch\u00FAng t\u00F4i s\u1EAFp k\u1EBFt h\u00F4n",
          },
        ],
      },
    ],
  },
  gallery: { title: "Th\u01B0 vi\u1EC7n \u1EA3nh" },
  gifts: {
    title: "M\u1EEBng c\u01B0\u1EDBi",
    intro:
      "S\u1EF1 hi\u1EC7n di\u1EC7n c\u1EE7a b\u1EA1n t\u1EA1i \u0111\u00E1m c\u01B0\u1EDBi l\u00E0 m\u00F3n qu\u00E0 l\u1EDBn nh\u1EA5t d\u00E0nh cho ch\u00FAng m\u00ECnh. Linh v\u00E0 Kha xin c\u1EA3m \u01A1n t\u00ECnh c\u1EA3m c\u1EE7a t\u1EA5t c\u1EA3 m\u1ECDi ng\u01B0\u1EDDi.",
    momoHeading: "Momo",
    momoAlt: "M\u00E3 QR Momo",
    sections: [
      {
        heading: "Chuy\u1EC3n kho\u1EA3n ng\u00E2n h\u00E0ng (Vi\u1EC7t Nam)",
        body: "**T\u00EAn t\u00E0i kho\u1EA3n:** Nguyen Le Hoang Kha\n- **T\u00EAn ng\u00E2n h\u00E0ng:** MBBank\n- **S\u1ED1 t\u00E0i kho\u1EA3n:** 1804198879\n\n**T\u00EAn t\u00E0i kho\u1EA3n:** Nguyen Khanh Linh\n- **T\u00EAn ng\u00E2n h\u00E0ng:** MBBank\n- **S\u1ED1 t\u00E0i kho\u1EA3n:** 028111997",
      },
      {
        heading: "MobilePay (Ph\u1EA7n Lan)",
        body: "**Ng\u01B0\u1EDDi nh\u1EADn:** Kha Nguyen\n- **S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:** 0449884108\n\n**Ng\u01B0\u1EDDi nh\u1EADn:** Khanh Linh Nguyen\n- **S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:** 0452777977",
      },
      {
        heading: "Chuy\u1EC3n kho\u1EA3n ng\u00E2n h\u00E0ng (Ph\u1EA7n Lan)",
        body: "- **T\u00EAn ng\u00E2n h\u00E0ng:** Revolut Bank UAB\n- **T\u00EAn t\u00E0i kho\u1EA3n:** Le Hoang Kha Nguyen\n- **IBAN:** LT04 3250 0061 6339 9979\n- **BIC/SWIFT:** REVOLT21\n- **Ti\u1EC1n t\u1EC7:** EURO",
      },
      {
        heading: "Web (Qu\u1ED1c t\u1EBF)",
        body: "[Revolut](https://revolut.me/khanguyen)",
      },
    ],
  },
  rsvp: {
    title: "X\u00E1c nh\u1EADn tham d\u1EF1",
    intro:
      "Ch\u00FAng m\u00ECnh r\u1EA5t vui m\u1EEBng \u0111\u01B0\u1EE3c k\u1EF7 ni\u1EC7m ng\u00E0y \u0111\u1EB7c bi\u1EC7t c\u00F9ng v\u1EDBi b\u1EA1n!",
    deadline:
      "Vui l\u00F2ng x\u00E1c nh\u1EADn tham d\u1EF1 tr\u01B0\u1EDBc **ng\u00E0y 29 th\u00E1ng 11 n\u0103m 2025** b\u1EB1ng c\u00E1ch \u0111i\u1EC1n v\u00E0o Google Form d\u01B0\u1EDBi \u0111\u00E2y. \u0110i\u1EC1u n\u00E0y s\u1EBD gi\u00FAp ch\u00FAng m\u00ECnh \u0111\u00F3n ti\u1EBFp c\u00E1c b\u1EA1n chu \u0111\u00E1o v\u00E0 \u0111\u1EA7y \u0111\u1EE7 h\u01A1n. Xin c\u1EA3m \u01A1n!",
    noteLabel: "L\u01B0u \u00FD quan tr\u1ECDng",
    note: "Bi\u1EC3u m\u1EABu Google n\u00E0y y\u00EAu c\u1EA7u cookie \u0111\u1EC3 ho\u1EA1t \u0111\u1ED9ng ch\u00EDnh x\u00E1c. Vui l\u00F2ng ch\u1EA5p thu\u1EADn m\u1ECDi y\u00EAu c\u1EA7u cookie \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o b\u1EA1n c\u00F3 th\u1EC3 g\u1EEDi ph\u1EA3n h\u1ED3i c\u1EE7a m\u00ECnh. Quy\u1EC1n ri\u00EAng t\u01B0 c\u1EE7a b\u1EA1n r\u1EA5t quan tr\u1ECDng \u0111\u1ED1i v\u1EDBi ch\u00FAng m\u00ECnh v\u00E0 \u0111\u00E2y l\u00E0 bi\u1EC7n ph\u00E1p b\u1EA3o m\u1EADt ti\u00EAu chu\u1EA9n cho c\u00E1c bi\u1EC3u m\u1EABu nh\u00FAng.",
  },
  home: {
    hero: "Kha & Linh",
    hanoi: "29/12/2025  H\u00E0 N\u1ED9i",
    hcm: "11/01/2026  H\u1ED3 Ch\u00ED Minh",
    tagline:
      "Tr\u00E2n tr\u1ECDng k\u00EDnh m\u1EDDi b\u1EA1n \u0111\u1EBFn d\u1EF1 ti\u1EC7c th\u00E2n m\u1EADt v\u00E0 l\u1EC5 th\u00E0nh h\u00F4n c\u1EE7a ch\u00FAng m\u00ECnh.",
    ctaRsvp: "X\u00E1c nh\u1EADn tham d\u1EF1",
    ctaGifts: "Qu\u00E0 m\u1EEBng",
    thankTitle: "L\u1EDDi C\u1EA3m \u01A0n",
    thankBody:
      "Xin c\u1EA3m \u01A1n t\u1EA5t c\u1EA3 t\u00ECnh c\u1EA3m t\u1EEB gia \u0111\u00ECnh, ng\u01B0\u1EDDi th\u00E2n, v\u00E0 b\u1EA1n b\u00E8 d\u00E0nh cho Kha v\u00E0 Linh. Ch\u00FAng con/ch\u00FAng m\u00ECnh r\u1EA5t bi\u1EBFt \u01A1n khi c\u00F3 s\u1EF1 \u0111\u1ED3ng h\u00E0nh v\u00E0 \u1EE7ng h\u1ED9 c\u1EE7a m\u1ECDi ng\u01B0\u1EDDi. Hy v\u1ECDng m\u1ECDi ng\u01B0\u1EDDi s\u1EBD c\u00F3 m\u1EB7t trong ng\u00E0y quan tr\u1ECDng n\u00E0y \u0111\u1EC3 ch\u1EE9ng ki\u1EBFn v\u00E0 chung vui c\u00F9ng c\u00F4 d\u00E2u v\u00E0 ch\u00FA r\u1EC3.",
    signoff: "Th\u00E2n m\u1EBFn, Kha & Linh",
    features: [
      {
        icon: "\u{1F389}",
        title: "Ng\u00E0y Tr\u1ECDng \u0110\u1EA1i",
        details:
          "T\u1EA5t c\u1EA3 th\u00F4ng tin chi ti\u1EBFt v\u1EC1 ti\u1EC7c b\u00E1o h\u1EF7 v\u00E0 l\u1EC5 th\u00E0nh h\u00F4n.",
        link: "/vi/events",
      },
      {
        icon: "\u{1F496}",
        title: "C\u00E2u Chuy\u1EC7n C\u1EE7a Ch\u00FAng M\u00ECnh",
        details:
          "T\u1EEB bu\u1ED5i h\u1EB9n \u0111\u1EA7u ti\u00EAn \u0111\u1EBFn l\u1EC5 \u0111\u01B0\u1EDDng th\u00E0nh h\u00F4n.",
        link: "/vi/story",
      },
      {
        icon: "\u{1F4F7}",
        title: "Album \u1EA2nh C\u01B0\u1EDBi",
        details: "Xem album \u1EA3nh c\u01B0\u1EDBi.",
        link: "/vi/gallery",
      },
    ],
  },
};

export const locales: Record<"en" | "vi", Locale> = { en, vi };

export function localeFromPath(pathname: string): Locale {
  return pathname === "/vi" || pathname.startsWith("/vi/") ? vi : en;
}
