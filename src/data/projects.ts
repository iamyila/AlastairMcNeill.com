export type MediaProvider = 'youtube' | 'vimeo' | 'bandcamp' | 'soundcloud' | 'spotify' | 'apple' | 'atmos';
export type Media = { provider: MediaProvider; src: string };
export type Filter = 'all' | 'art' | 'music' | 'mastering' | 'production' | 'commercial';
export type Project = {
  id: number;
  title: string;
  timelineYear: number;
  year?: string;
  role: string;
  summary: string;
  categories: Filter[];
  image: string;
  media: { audio?: Media; video?: Media };
};

export const filters: { id: Filter; label: string }[] = [
  {
    "id": "all",
    "label": "Everything"
  },
  {
    "id": "art",
    "label": "Art"
  },
  {
    "id": "music",
    "label": "Music"
  },
  {
    "id": "mastering",
    "label": "Mastering"
  },
  {
    "id": "production",
    "label": "Production"
  },
  {
    "id": "commercial",
    "label": "Commercial"
  }
];

export const projects: Project[] = [
  {
    "id": 0,
    "title": "The Land We Knew the Best — Chris Eckman",
    "timelineYear": 2025,
    "year": "2025",
    "role": "PRODUCER · ENGINEER · INSTRUMENTATION",
    "summary": "Chris Eckman’s seventh solo album for Glitterhouse.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/release-the-land-we-knew.jpg",
    "media": {
      "audio": {
        "provider": "bandcamp",
        "src": "https://bandcamp.com/EmbeddedPlayer/album=3840611873/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/"
      },
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/TIuGFvr5yhU?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 1,
    "title": "Intention, Intensity, Shuffle — Zhlehtet",
    "timelineYear": 2026,
    "year": "2026",
    "role": "MASTERING",
    "summary": "Rok Zalokar and Zhlehtet’s 21-track musical diary.",
    "categories": [
      "music",
      "mastering"
    ],
    "image": "/media/projects/release-intention-intensity.jpg",
    "media": {
      "audio": {
        "provider": "bandcamp",
        "src": "https://bandcamp.com/EmbeddedPlayer/album=4027376985/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/"
      }
    }
  },
  {
    "id": 2,
    "title": "Dysfunctional Combinations and Collaborations, Vol. 2",
    "timelineYear": 2021,
    "year": "2021",
    "role": "PRODUCER · MIX · COMPOSITION",
    "summary": "Yila’s collaborative, dance-floor-facing second volume.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/release-dysfunctional-vol2.jpg",
    "media": {
      "audio": {
        "provider": "bandcamp",
        "src": "https://bandcamp.com/EmbeddedPlayer/album=3987444618/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/"
      },
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/CT0lMBIpXrg?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 3,
    "title": "Where the Spirit rests",
    "timelineYear": 2021,
    "year": "2021",
    "role": "CO-PRODUCER · RECORDING · MIX",
    "summary": "Chris Eckman’s German Record Critics’ Award-winning album.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/release-where-spirit-rests.jpg",
    "media": {
      "audio": {
        "provider": "bandcamp",
        "src": "https://bandcamp.com/EmbeddedPlayer/album=2683530894/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/"
      },
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/jgBRVmc9kFM?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 4,
    "title": "Functional Combinations and Collaborations, Vol. 1",
    "timelineYear": 2020,
    "year": "2020",
    "role": "ARTIST · PRODUCER · MIX",
    "summary": "Yila with Giom and Christian Kroupa / Alleged Witches.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/release-functional-vol1.jpg",
    "media": {
      "audio": {
        "provider": "bandcamp",
        "src": "https://bandcamp.com/EmbeddedPlayer/album=1823207988/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/"
      },
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/MeePC37cJN4?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 5,
    "title": "The World as a Composer",
    "timelineYear": 2021,
    "year": "2021",
    "role": "CREATOR",
    "summary": "Movement data and Covid-era speech reshaped into a digital sound work.",
    "categories": [
      "art"
    ],
    "image": "/media/projects/006.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/4yiIUScgvjk?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 6,
    "title": "Crest",
    "timelineYear": 2021,
    "role": "WRITER · PRODUCER · MIX",
    "summary": "Kreda’s experimental pop collaboration with Mina Špiler, Matevž Kolenc and Atej Tutta.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/release-crest.jpg",
    "media": {
      "audio": {
        "provider": "bandcamp",
        "src": "https://bandcamp.com/EmbeddedPlayer/album=3668449147/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/"
      },
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/LjFm8f_TQRc?rel=0&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 7,
    "title": "Nature Scene sessions",
    "timelineYear": 2020,
    "role": "PRODUCER · CURATOR · BROADCAST",
    "summary": "Nature Scene Studio livestreams in stereo and binaural sound.",
    "categories": [
      "art",
      "music",
      "production"
    ],
    "image": "/media/projects/008.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/videoseries?list=PL1LuBprOHA-4BszAGnULFztdbiHLs_MK0&rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 8,
    "title": "Cross Intentions",
    "timelineYear": 2018,
    "role": "CO-CREATOR · SPATIAL SOUND",
    "summary": "Motion-triggered installation about data, prediction and behaviour.",
    "categories": [
      "art"
    ],
    "image": "/media/projects/009.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/ggobwiSF3js?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 9,
    "title": "Reel To Reel Night Program",
    "timelineYear": 2018,
    "role": "LIVE PERFORMER",
    "summary": "Improvised Radio Študent broadcast with tape machines, modular synths and radio loop.",
    "categories": [
      "art"
    ],
    "image": "/media/projects/010.jpg",
    "media": {
      "audio": {
        "provider": "soundcloud",
        "src": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/611140548&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      }
    }
  },
  {
    "id": 10,
    "title": "Izis 6",
    "timelineYear": 2018,
    "role": "LIVE PERFORMER",
    "summary": "Real-time vocal and poetry manipulation with Matevž Kolenc.",
    "categories": [
      "art"
    ],
    "image": "/media/projects/011.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/u2kqmWqKeU4?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 11,
    "title": "Better (of) me",
    "timelineYear": 2018,
    "year": "2018",
    "role": "WRITER · PRODUCER · MIX",
    "summary": "Yila and Mina Špiler EP with Dave DK, Rose Tinted and Alleged Witches remixes.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/release-better-of-me.jpg",
    "media": {
      "audio": {
        "provider": "soundcloud",
        "src": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/441945816&color=%232b262b&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
      },
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/1W5_8dg0Kew?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 12,
    "title": "Souvenir Razkitje",
    "timelineYear": 2018,
    "role": "PERFORMER · SYSTEM DESIGN",
    "summary": "Improvised Ambisonic work from recorded voice at Sonica Festival and Vodnikova domačija.",
    "categories": [
      "art"
    ],
    "image": "/media/projects/souvenir-razkitje-performance.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/v4VemumPHKc?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 13,
    "title": "Brez Upora",
    "timelineYear": 2018,
    "role": "LIVE PERFORMER",
    "summary": "Tape and digital radio improvisation from Andrej Predin’s text.",
    "categories": [
      "art"
    ],
    "image": "/media/projects/brez-upora.jpg",
    "media": {
      "audio": {
        "provider": "soundcloud",
        "src": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/300955884&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      }
    }
  },
  {
    "id": 14,
    "title": "Souvenir",
    "timelineYear": 2018,
    "role": "PRODUCER",
    "summary": "Eight-piece multimedia musical theatre with dual projection and CRT screens.",
    "categories": [
      "art",
      "music"
    ],
    "image": "/media/projects/souvenir-performance.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/ZtCjo3scpSY?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 15,
    "title": "SEQ",
    "timelineYear": 2018,
    "role": "LIVE PERFORMER",
    "summary": "Improvised Polyend SEQ performance with Shekuza, Bowrain and Matevž Kolenc.",
    "categories": [
      "music",
      "commercial"
    ],
    "image": "/media/projects/seq-performance.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/_aU5dzBn0Dk?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 16,
    "title": "Matevz Kolenc",
    "timelineYear": 2018,
    "role": "MIX · PRE-MASTER · SPATIALISATION",
    "summary": "Stereo and binaural work with the Melodrom and Laibach-associated composer.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/017.jpg",
    "media": {
      "audio": {
        "provider": "soundcloud",
        "src": "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/matevzkolenc&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
      }
    }
  },
  {
    "id": 17,
    "title": "Dani Siciliano",
    "timelineYear": 2009,
    "role": "MUSICAL DIRECTOR",
    "summary": "Live presentation of Dani Siciliano’s Circus Company album.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/018.jpg",
    "media": {
      "audio": {
        "provider": "soundcloud",
        "src": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/235199102&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      }
    }
  },
  {
    "id": 18,
    "title": "Hairless toys",
    "timelineYear": 2015,
    "role": "SHOW DESIGN · PRE-PRODUCTION · MUSICIAN",
    "summary": "Róisín Murphy world tour: audio-reactive visuals, synths, vocal effects and guitar.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/019.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/nQUltYoJMFo?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 19,
    "title": "Overload",
    "timelineYear": 2015,
    "role": "ARTIST · PRODUCER",
    "summary": "Yila EP for Silver Bear / Sunday Best with video and remixes.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/release-overload.jpg",
    "media": {
      "audio": {
        "provider": "soundcloud",
        "src": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/460817271&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      },
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/sq_7V2Ys-kQ?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 20,
    "title": "Imaginature",
    "timelineYear": 2013,
    "role": "MUSICAL DIRECTOR · PERFORMER",
    "summary": "European tour supporting HK119’s One Little Indian release.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/hk119-imaginature.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/3fxylOCrYNY?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 21,
    "title": "Souvenir Suvenir",
    "timelineYear": 2017,
    "role": "ARTISTIC DIRECTOR",
    "summary": "Slovak multidisciplinary development of Yila’s Souvenir.",
    "categories": [
      "art"
    ],
    "image": "/media/projects/souvenir-suvenir.jpg",
    "media": {}
  },
  {
    "id": 22,
    "title": "Behind The Cover Rouge Dior",
    "timelineYear": 2018,
    "role": "COMPOSITION · SOUND DESIGN",
    "summary": "Harper’s Bazaar film for the bespoke Dior cover.",
    "categories": [
      "commercial",
      "production"
    ],
    "image": "/media/projects/023.jpg",
    "media": {
      "video": {
        "provider": "vimeo",
        "src": "https://player.vimeo.com/video/80522804"
      }
    }
  },
  {
    "id": 23,
    "title": "Lets Aurora",
    "timelineYear": 2018,
    "role": "COMPOSER",
    "summary": "Web composition for an Oxford Big Project-winning film.",
    "categories": [
      "commercial",
      "production"
    ],
    "image": "/media/projects/024.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/FqH7bqhf8as?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 24,
    "title": "Idu",
    "timelineYear": 2016,
    "role": "CO-ARTISTIC DIRECTOR",
    "summary": "Experimental audio-visual work on a custom 14.2-channel system.",
    "categories": [
      "art"
    ],
    "image": "/media/projects/idu-performance.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/A6FmxfUr44E?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 25,
    "title": "Skate Uphill",
    "timelineYear": 2012,
    "role": "CO-WRITER · PERFORMER",
    "summary": "Commissioned Nokia PureView song with Leander Lyons.",
    "categories": [
      "music",
      "commercial"
    ],
    "image": "/media/projects/026.jpg",
    "media": {}
  },
  {
    "id": 26,
    "title": "PWCA Tree",
    "timelineYear": 2013,
    "role": "CREATOR · SOUND INSTALLATION",
    "summary": "Three-day autonomous generative sound installation in a tree at Green Man Festival.",
    "categories": [
      "art"
    ],
    "image": "/media/projects/pwca-tree.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/yHwSYrdwsvQ?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 27,
    "title": "Un puit qui fuit",
    "timelineYear": 2016,
    "role": "PRODUCER",
    "summary": "Garance and the Mitochondries full-length album.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/release-un-puit-qui-fuit.jpg",
    "media": {
      "audio": {
        "provider": "bandcamp",
        "src": "https://bandcamp.com/EmbeddedPlayer/album=4251722872/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/"
      },
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/c49roqlqyTA?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 28,
    "title": "Sound of Kings",
    "timelineYear": 2013,
    "role": "COMPOSITION · SOUND INSTALLATION",
    "summary": "Public recordings of King’s Cross formed into a composition presented through a recycled multi-speaker installation and sculpture.",
    "categories": [
      "art"
    ],
    "image": "/media/projects/sound-kings-film.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/xDo8xWRQrmc?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 29,
    "title": "Jean Imbert",
    "timelineYear": 2014,
    "role": "COMPOSITION · RECORDING · MIX",
    "summary": "Sojasun sonic identity for television, web and radio.",
    "categories": [
      "commercial",
      "production"
    ],
    "image": "/media/projects/030.jpg",
    "media": {
      "video": {
        "provider": "vimeo",
        "src": "https://player.vimeo.com/video/89859467"
      }
    }
  },
  {
    "id": 30,
    "title": "Compulse",
    "timelineYear": 2016,
    "role": "COMPOSER",
    "summary": "Original music for Flyfaction’s audio-visual work mixing animation, stills and live action.",
    "categories": [
      "art"
    ],
    "image": "/media/projects/compulse-film.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/Cxfx9pqHUh8?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 31,
    "title": "Oh No the Drift Of the World",
    "timelineYear": 2012,
    "role": "PRODUCER · RECORDING · MIX",
    "summary": "Jackamo Brown’s debut album, recorded live in a Hackney church.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/release-oh-no-drift.jpg",
    "media": {}
  },
  {
    "id": 32,
    "title": "Felicity",
    "timelineYear": 2013,
    "role": "COMPOSER · MUSIC SUPERVISOR · MIXER",
    "summary": "Original score and 5.1 mix for the short film.",
    "categories": [
      "commercial",
      "production"
    ],
    "image": "/media/projects/033.jpg",
    "media": {}
  },
  {
    "id": 33,
    "title": "Distraction Pieces",
    "timelineYear": 2011,
    "year": "2011",
    "role": "EXECUTIVE PRODUCER · MIX ENGINEER",
    "summary": "Scroobius Pip’s solo album for Speech Development and Strange Famous Records.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/release-distraction-pieces.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/O3HCXh9WQSo?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 34,
    "title": "Aloosh EP",
    "timelineYear": 2009,
    "role": "ARTIST · PRODUCER",
    "summary": "The first Aloosh EP, including Separate.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/aloosh-ep.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/lqPcQeFbIVY?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 35,
    "title": "Takin Off",
    "timelineYear": 2011,
    "role": "SONGWRITER · ARRANGER · REMIXER · MIX",
    "summary": "Palmer’s debut nu-disco release.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/release-takin-off.jpg",
    "media": {
      "audio": {
        "provider": "soundcloud",
        "src": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/265042295&color=ff5500"
      }
    }
  },
  {
    "id": 36,
    "title": "Overpowered",
    "timelineYear": 2008,
    "role": "GUITAR",
    "summary": "Róisín Murphy’s Overpowered world tour.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/037.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/GjRSkOJemew?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 37,
    "title": "Angles",
    "timelineYear": 2008,
    "year": "2008",
    "role": "PRODUCTION · MIX",
    "summary": "Dan Le Sac vs Scroobius Pip album featuring Thou Shalt Always Kill.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/release-angles.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/CWrMGXwhFLk?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 38,
    "title": "Astronaut",
    "timelineYear": 2008,
    "role": "ARTIST · PRODUCER",
    "summary": "Yila release with Scroobius Pip and remixes by Clark and Dan Le Sac.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/release-astronaut.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube.com/embed/l8UfvHnna38?si=d9iyOcJN_cncsvBi&controls=0"
      }
    }
  },
  {
    "id": 39,
    "title": "Unknown Devices",
    "timelineYear": 2007,
    "role": "ENSEMBLE MEMBER · PERFORMER",
    "summary": "David Toop’s improvisers orchestra at Tate, Barbican and South London Gallery.",
    "categories": [
      "music"
    ],
    "image": "/media/projects/unknown-devices-performance.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/-nYdsNqHo1g?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 40,
    "title": "Playing God",
    "timelineYear": 2015,
    "role": "CREATOR · SOUND INSTALLATION",
    "summary": "Motion-triggered storm environment for 4.1 sound and projection.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/playing-god.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/4LRNh586ufc?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 41,
    "title": "The Only Thing I Know — Žigan & Kristijan Krajnčan",
    "timelineYear": 2026,
    "year": "2026",
    "role": "MASTERING",
    "summary": "Complete debut album by Žigan and Kristijan Krajnčan.",
    "categories": [
      "music",
      "mastering"
    ],
    "image": "/media/projects/mastering-the-only-thing-i-know.jpg",
    "media": {}
  },
  {
    "id": 42,
    "title": "Poletje Loops — Zhlehtet",
    "timelineYear": 2023,
    "year": "2023",
    "role": "MASTERING",
    "summary": "Zhlehtet’s live creative return, documented across summer 2022.",
    "categories": [
      "music",
      "mastering"
    ],
    "image": "/media/projects/release-poletje-loops.jpg",
    "media": {
      "audio": {
        "provider": "bandcamp",
        "src": "https://bandcamp.com/EmbeddedPlayer/album=2598884347/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/"
      }
    }
  },
  {
    "id": 43,
    "title": "Portals Vol. 2 — Zhlehtet",
    "timelineYear": 2023,
    "year": "2023",
    "role": "MASTERING",
    "summary": "Zhlehtet live in a single room at Cankarjev dom, Vrhnika.",
    "categories": [
      "music",
      "mastering"
    ],
    "image": "/media/projects/release-portals-vol2.jpg",
    "media": {
      "audio": {
        "provider": "bandcamp",
        "src": "https://bandcamp.com/EmbeddedPlayer/album=4116344490/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/"
      }
    }
  },
  {
    "id": 44,
    "title": "Vrt — Zhlehtet",
    "timelineYear": 2024,
    "year": "2024",
    "role": "MASTERING",
    "summary": "Zhlehtet’s ambient, improvised Vrt release.",
    "categories": [
      "music",
      "mastering"
    ],
    "image": "/media/projects/release-vrt.jpg",
    "media": {
      "audio": {
        "provider": "bandcamp",
        "src": "https://bandcamp.com/EmbeddedPlayer/album=2309671465/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/"
      }
    }
  },
  {
    "id": 45,
    "title": "Faded Worlds Suite — Zhlehtet",
    "timelineYear": 2025,
    "year": "2025",
    "role": "MASTERING",
    "summary": "Zhlehtet’s live suite of written and spontaneous composition.",
    "categories": [
      "music",
      "mastering"
    ],
    "image": "/media/projects/release-faded-worlds.jpg",
    "media": {
      "audio": {
        "provider": "bandcamp",
        "src": "https://bandcamp.com/EmbeddedPlayer/album=3751102071/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/"
      }
    }
  },
  {
    "id": 46,
    "title": "Pieces for Collective Change — Rok Zalokar & Zhlehtet",
    "timelineYear": 2025,
    "year": "2025",
    "role": "MASTERING",
    "summary": "Jazz Cerkno Records album by Rok Zalokar & Zhlehtet.",
    "categories": [
      "music",
      "mastering"
    ],
    "image": "/media/projects/release-pieces-collective-change.jpg",
    "media": {
      "audio": {
        "provider": "bandcamp",
        "src": "https://bandcamp.com/EmbeddedPlayer/album=321693275/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/"
      }
    }
  },
  {
    "id": 47,
    "title": "A Plea for Tenderness — Lenart De Bock",
    "timelineYear": 2025,
    "year": "2025",
    "role": "MASTERING",
    "summary": "Lenart De Bock’s debut solo album, released by Jazz Cerkno Records.",
    "categories": [
      "music",
      "mastering"
    ],
    "image": "/media/projects/mastering-a-plea-for-tenderness.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/YFQnCGROl-Y?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 48,
    "title": "SO.UND.ING Acousmonium INput",
    "timelineYear": 2026,
    "year": "2026",
    "role": "LIVE SPATIAL PERFORMANCE",
    "summary": "Original work in Cona and Kino Šiška’s octophonic festival of live spatial sound.",
    "categories": [
      "art",
      "music"
    ],
    "image": "/media/projects/sounding-acousmonium-input.jpg",
    "media": {}
  },
  {
    "id": 49,
    "title": "Ropotarnica XXIX",
    "timelineYear": 2023,
    "year": "2023",
    "role": "SOLO PERFORMER · SPATIAL SOUND",
    "summary": "SOMA Dvina, live electronics and real-time sound processing at Galerija ŠKUC.",
    "categories": [
      "art",
      "music"
    ],
    "image": "/media/projects/ropotarnica-xxix.jpg",
    "media": {}
  },
  {
    "id": 50,
    "title": "Sound Explicit 2024",
    "timelineYear": 2024,
    "year": "2024",
    "role": "SOLO PERFORMER · SPATIAL SOUND",
    "summary": "Electric cello, hexaphonic guitar tuner and guitar amplifiers spatialised across Cukrarna.",
    "categories": [
      "art",
      "music"
    ],
    "image": "/media/projects/sound-explicit-cukrarna.jpg",
    "media": {}
  },
  {
    "id": 51,
    "title": "M Antarei — Olenc",
    "timelineYear": 2024,
    "year": "2024",
    "role": "ATMOS MIX · MASTER",
    "summary": "Immersive mix and master for Olenc’s Nature Scene Records single.",
    "categories": [
      "music",
      "mastering",
      "production"
    ],
    "image": "/media/projects/olenc-m-antarei.jpg",
    "media": {
      "audio": {
        "provider": "atmos",
        "src": "https://music.apple.com/us/album/m-antarei-single/1738042517"
      }
    }
  },
  {
    "id": 52,
    "title": "Separate — Aloosh",
    "timelineYear": 2009,
    "role": "PRODUCER · MIX",
    "summary": "Limited 7-inch single for Nature Scene Records.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/aloosh-separate.jpg",
    "media": {
      "audio": {
        "provider": "bandcamp",
        "src": "https://bandcamp.com/EmbeddedPlayer/album=539135201/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/"
      },
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/lqPcQeFbIVY?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 53,
    "title": "Ceramic — Aloosh",
    "timelineYear": 2012,
    "role": "ARTIST · PRODUCER · MIX",
    "summary": "Aloosh’s eight-track debut album for Nature Scene Records.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/aloosh-ceramic.jpg",
    "media": {
      "audio": {
        "provider": "soundcloud",
        "src": "https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F1830102&show_artwork=true&auto_play=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
      },
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/PNGquFXmLOU?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 54,
    "title": "Time — Aloosh",
    "timelineYear": 2011,
    "role": "ARTIST · PRODUCER · MIX",
    "summary": "Single from the Ceramic album.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/aloosh-time.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/x4dNcYKDc-M?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 55,
    "title": "Butter — Aloosh",
    "timelineYear": 2013,
    "role": "ARTIST · PRODUCER · MIX",
    "summary": "Aloosh single with a remix release and the second Ceramic film.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/aloosh-butter.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/cuMjew8TbnE?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 56,
    "title": "Another Breakup — Aloosh",
    "timelineYear": 2022,
    "year": "2022",
    "role": "ARTIST · PRODUCER · MIX",
    "summary": "Aloosh’s 2022 release, bringing together Waiting, Hold On and Servant.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/aloosh-another-breakup.jpg",
    "media": {
      "audio": {
        "provider": "bandcamp",
        "src": "https://bandcamp.com/EmbeddedPlayer/album=1001479659/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/"
      }
    }
  },
  {
    "id": 57,
    "title": "Tiha milost / V poltemi",
    "timelineYear": 2026,
    "year": "2026",
    "role": "END-CREDIT SONG · MIX · ARRANGER",
    "summary": "Mix and arrangement for the film’s end-credit song.",
    "categories": [
      "commercial",
      "production"
    ],
    "image": "/media/projects/tiha-milost.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/xpJ9ajmBnTo?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 58,
    "title": "Gugutke — Gugutke",
    "timelineYear": 2025,
    "year": "2025",
    "role": "MASTERING",
    "summary": "Gugutke’s self-titled debut album for Celinka.si.",
    "categories": [
      "music",
      "mastering"
    ],
    "image": "/media/projects/gugutke.jpg",
    "media": {
      "video": {
        "provider": "youtube",
        "src": "https://www.youtube-nocookie.com/embed/6W4gbUsna6E?rel=0&modestbranding=1&playsinline=1&controls=1"
      }
    }
  },
  {
    "id": 59,
    "title": "Run After Boyz — Chewy She",
    "timelineYear": 2022,
    "year": "2022",
    "role": "PRE-PRODUCTION",
    "summary": "Chewy She’s Run After Boyz release.",
    "categories": [
      "music",
      "production"
    ],
    "image": "/media/projects/chewy-she-run-after-boyz.jpg",
    "media": {
      "audio": {
        "provider": "bandcamp",
        "src": "https://bandcamp.com/EmbeddedPlayer/album=2714683916/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/"
      }
    }
  }
];
