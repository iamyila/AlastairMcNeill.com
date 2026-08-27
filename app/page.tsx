export type Media = { provider: 'youtube' | 'bandcamp' | 'spotify' | 'apple' | 'atmos'; src: string };
export type ProjectMedia = { audio?: Media; video?: Media };
export type Filter = 'all' | 'art' | 'music' | 'mastering' | 'production' | 'commercial';
export type ProjectInfo = { year?: string; role: string; summary: string };

export const titles = [
  'The Land We Knew the Best — Chris Eckman', 'Intention, Intensity, Shuffle — Zhlehtet', 'Dysfunctional Combinations and Collaborations, Vol. 2', 'Where the Spirit rests', 'Functional Combinations and Collaborations, Vol. 1', 'The World as a Composer', 'Crest', 'Nature Scene sessions', 'Cross Intentions', 'Reel To Reel Night Program', 'Izis 6', 'Better (of) me', 'Souvenir Razkitje', 'Brez Upora', 'Souvenir', 'SEQ', 'Matevz Kolenc', 'Dani Siciliano', 'Hairless toys', 'Overload', 'Imaginature', 'Souvenir Suvenir', 'Behind The Cover Rouge Dior', 'Lets Aurora', 'Idu', 'Skate Uphill', 'PWCA Tree', 'Un puit qui fuit', 'Sound of Kings', 'Jean Imbert', 'Compulse', 'Oh No the Drift Of the World', 'Felicity', 'Distraction Pieces', 'Aloosh', 'Takin Off', 'Overpowered', 'Angles', 'Astronaut', 'Unknown Devices', 'Playing God', 'The Only Thing I Know — Žigan & Kristijan Krajnčan', 'Poletje Loops — Zhlehtet', 'Portals Vol. 2 — Zhlehtet', 'Vrt — Zhlehtet', 'Faded Worlds Suite — Zhlehtet', 'Pieces for Collective Change — Rok Zalokar & Zhlehtet', 'A Plea for Tenderness — Lenart De Bock', 'SO.UND.ING Acousmonium INput', 'Ropotarnica XXIX', 'Sound Explicit 2024', 'M Antarei — Olenc',
] as const;

export const fallbackImages = [
  '', '', 'https://alastairmcneill.com/assets/projects/1630251627_projects_4376_612baa6b13ff1.png', 'https://alastairmcneill.com/assets/projects/1630243195_projects_4374_612b897bc190d.png', 'https://alastairmcneill.com/assets/projects/1630240394_projects_4369_612b7e8a961d8.png', 'https://alastairmcneill.com/assets/projects/1630241565_projects_4372_612b831d466b5.png', 'https://alastairmcneill.com/assets/projects/1581411491_projects_4366_5e426ca32481c.png', 'https://alastairmcneill.com/assets/projects/1581413147_projects_4368_5e42731b6e9c7.png', 'https://alastairmcneill.com/assets/projects/1542890615_projects_4327_5bf6a4778b135.png', 'https://alastairmcneill.com/assets/projects/1562959574_projects_4362_5d28ded6ba326.png', 'https://alastairmcneill.com/assets/projects/1549968919_projects_4346_5c62a61727f06.png', 'https://alastairmcneill.com/assets/projects/1528455350_projects_4288_5b1a60b6296ea.jpg', 'https://alastairmcneill.com/assets/projects/1527803795_projects_4282_5b106f93475d7.png', 'https://alastairmcneill.com/assets/projects/1527804101_projects_4296_5b1070c5c9487.png', 'https://alastairmcneill.com/assets/projects/1528456100_projects_4298_5b1a63a43ee9d.jpg', 'https://alastairmcneill.com/assets/projects/1543524195_projects_4344_5c004f63d7922.png', 'https://alastairmcneill.com/assets/projects/1562957780_projects_4358_5d28d7d427152.png', 'https://alastairmcneill.com/assets/projects/1562958328_projects_4360_5d28d9f8efbdf.png', 'https://alastairmcneill.com/assets/projects/1543321649_projects_4300_5bfd383192d81.png', 'https://alastairmcneill.com/assets/projects/1527804772_projects_4302_5b10736432d1b.png', 'https://alastairmcneill.com/assets/projects/1563116836_projects_4364_5d2b45240ba9e.png', 'https://alastairmcneill.com/assets/projects/1528453405_projects_4304_5b1a591d5360b.jpg', 'https://alastairmcneill.com/assets/projects/1552416278_projects_4352_5c87fe1652fa5.jpeg', 'https://alastairmcneill.com/assets/projects/1552426010_projects_4356_5c88241a2938f.jpeg', 'https://alastairmcneill.com/assets/projects/1528453429_projects_4310_5b1a5935886b5.jpg', 'https://alastairmcneill.com/assets/projects/1549974610_projects_4348_5c62bc52ea1ee.png', 'https://alastairmcneill.com/assets/projects/1528456801_projects_4308_5b1a666101a58.jpg', 'https://alastairmcneill.com/assets/projects/1543330065_projects_4340_5bfd5911ea730.png', 'https://alastairmcneill.com/assets/projects/1528455115_projects_4306_5b1a5fcbd974d.jpg', 'https://alastairmcneill.com/assets/projects/1552421822_projects_4354_5c8813be7ce37.jpeg', 'https://alastairmcneill.com/assets/projects/1529255652_projects_4321_5b2696e493e8a.png', 'https://alastairmcneill.com/assets/projects/1543329228_projects_4338_5bfd55cc5e564.png', 'https://alastairmcneill.com/assets/projects/1552411778_projects_4350_5c87ec8208471.jpeg', 'https://alastairmcneill.com/assets/projects/1543316956_projects_4313_5bfd25dcf20a9.png', 'https://alastairmcneill.com/assets/projects/1530450551_projects_4323_5b38d2771c095.png', 'https://alastairmcneill.com/assets/projects/1543266173_projects_4329_5bfc5f7d6aad.png', 'https://alastairmcneill.com/assets/projects/1543322057_projects_4333_5bfd39c966070.png', 'https://alastairmcneill.com/assets/projects/1543339851_projects_4342_5bfd7f4b86876.png', 'https://alastairmcneill.com/assets/projects/1543323912_projects_4335_5bfd4108abcd3.png', 'https://alastairmcneill.com/assets/projects/1528454802_projects_4315_5b1a5e923bbcc.jpg', 'https://alastairmcneill.com/assets/projects/1528453799_projects_4318_5b1a5aa79bbc2.jpg',
] as const;

export const media: Record<number, ProjectMedia> = {
  0: {
    audio: { provider: 'bandcamp', src: 'https://bandcamp.com/EmbeddedPlayer/album=3840611873/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/' },
    video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/TIuGFvr5yhU?rel=0&modestbranding=1&playsinline=1&controls=1' },
  },
  1: { audio: { provider: 'bandcamp', src: 'https://bandcamp.com/EmbeddedPlayer/album=4027376985/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/' } },
  2: {
    audio: { provider: 'bandcamp', src: 'https://bandcamp.com/EmbeddedPlayer/album=3987444618/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/' },
    video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/CT0lMBIpXrg?rel=0&modestbranding=1&playsinline=1&controls=1' },
  },
  3: {
    audio: { provider: 'bandcamp', src: 'https://bandcamp.com/EmbeddedPlayer/album=2683530894/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/' },
    video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/jgBRVmc9kFM?rel=0&modestbranding=1&playsinline=1&controls=1' },
  },
  4: {
    audio: { provider: 'bandcamp', src: 'https://bandcamp.com/EmbeddedPlayer/album=1823207988/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/' },
    video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/MeePC37cJN4?rel=0&modestbranding=1&playsinline=1&controls=1' },
  },
  5: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/4yiIUScgvjk?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  6: {
    audio: { provider: 'bandcamp', src: 'https://bandcamp.com/EmbeddedPlayer/album=3668449147/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/' },
    video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/LjFm8f_TQRc?rel=0&playsinline=1&controls=1' },
  },
  7: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/videoseries?list=PL1LuBprOHA-4BszAGnULFztdbiHLs_MK0&rel=0&modestbranding=1&playsinline=1&controls=1' } },
  8: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/ggobwiSF3js?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  10: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/u2kqmWqKeU4?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  11: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/1W5_8dg0Kew?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  12: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/v4VemumPHKc?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  14: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/ZtCjo3scpSY?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  15: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/_aU5dzBn0Dk?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  18: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/nQUltYoJMFo?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  19: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/sq_7V2Ys-kQ?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  23: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/FqH7bqhf8as?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  24: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/A6FmxfUr44E?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  25: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/qGPiNf4X4co?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  26: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/yHwSYrdwsvQ?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  27: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/c49roqlqyTA?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  28: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/xDo8xWRQrmc?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  30: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/Cxfx9pqHUh8?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  33: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/O3HCXh9WQSo?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  34: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/lqPcQeFbIVY?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  36: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/GjRSkOJemew?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  37: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/CWrMGXwhFLk?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  38: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/l8UfvHnna38?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  39: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/-nYdsNqHo1g?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  40: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/4LRNh586ufc?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  42: { audio: { provider: 'bandcamp', src: 'https://bandcamp.com/EmbeddedPlayer/album=2598884347/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/' } },
  43: { audio: { provider: 'bandcamp', src: 'https://bandcamp.com/EmbeddedPlayer/album=4116344490/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/' } },
  44: { audio: { provider: 'bandcamp', src: 'https://bandcamp.com/EmbeddedPlayer/album=2309671465/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/' } },
  45: { audio: { provider: 'bandcamp', src: 'https://bandcamp.com/EmbeddedPlayer/album=3751102071/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/' } },
  46: { audio: { provider: 'bandcamp', src: 'https://bandcamp.com/EmbeddedPlayer/album=321693275/size=large/bgcol=111111/linkcol=f4f4f1/transparent=true/' } },
  47: { video: { provider: 'youtube', src: 'https://www.youtube-nocookie.com/embed/YFQnCGROl-Y?rel=0&modestbranding=1&playsinline=1&controls=1' } },
  51: { audio: { provider: 'atmos', src: 'https://music.apple.com/us/album/m-antarei-single/1738042517' } },
};

export const projectInfo: Record<number, ProjectInfo> = {
  0: { year: '2025', role: 'PRODUCER · ENGINEER · INSTRUMENTATION', summary: 'Chris Eckman’s seventh solo album for Glitterhouse.' },
  1: { year: '2026', role: 'MASTERING', summary: 'Rok Zalokar and Zhlehtet’s 21-track musical diary.' },
  2: { year: '2021', role: 'PRODUCER · MIX · COMPOSITION', summary: 'Yila’s collaborative, dance-floor-facing second volume.' },
  3: { year: '2021', role: 'CO-PRODUCER · RECORDING · MIX', summary: 'Chris Eckman’s German Record Critics’ Award-winning album.' },
  4: { year: '2020', role: 'ARTIST · PRODUCER · MIX', summary: 'Yila with Giom and Christian Kroupa / Alleged Witches.' },
  5: { year: '2021', role: 'CONCEPT · SOUND · SPATIALISATION', summary: 'Movement data and Covid-era speech reshaped into a digital sound work.' },
  6: { role: 'WRITER · PRODUCER · MIX', summary: 'Kreda’s experimental pop collaboration with Mina Špiler, Matevž Kolenc and Atej Tutta.' },
  7: { role: 'PRODUCER · CURATOR · BROADCAST', summary: 'Nature Scene Studio livestreams in stereo and binaural sound.' },
  8: { role: 'CO-CREATOR · SPATIAL SOUND', summary: 'Motion-triggered installation about data, prediction and behaviour.' },
  9: { role: 'LIVE PERFORMER', summary: 'Improvised Radio Študent broadcast with tape machines, modular synths and radio loop.' },
  10: { role: 'LIVE PERFORMER', summary: 'Real-time vocal and poetry manipulation with Matevž Kolenc.' },
  11: { year: '2018', role: 'WRITER · PRODUCER · MIX', summary: 'Yila and Mina Špiler EP with Dave DK, Rose Tinted and Alleged Witches remixes.' },
  12: { role: 'PERFORMER · SYSTEM DESIGN', summary: 'Improvised Ambisonic work from recorded voice at Sonica Festival and Vodnikova domačija.' },
  13: { role: 'LIVE PERFORMER', summary: 'Tape and digital radio improvisation from Andrej Predin’s text.' },
  14: { role: 'CO-PRODUCER · PERFORMER', summary: 'Eight-piece multimedia musical theatre with dual projection and CRT screens.' },
  15: { role: 'LIVE PERFORMER', summary: 'Improvised Polyend SEQ performance with Shekuza, Bowrain and Matevž Kolenc.' },
  16: { role: 'MIX · PRE-MASTER · SPATIALISATION', summary: 'Stereo and binaural work with the Melodrom and Laibach-associated composer.' },
  17: { role: 'MUSICAL DIRECTOR', summary: 'Live presentation of Dani Siciliano’s Circus Company album.' },
  18: { role: 'SHOW DESIGN · PRE-PRODUCTION · MUSICIAN', summary: 'Róisín Murphy world tour: audio-reactive visuals, synths, vocal effects and guitar.' },
  19: { role: 'ARTIST · PRODUCER', summary: 'Yila EP for Silver Bear / Sunday Best with video and remixes.' },
  20: { role: 'MUSICAL DIRECTOR · PERFORMER', summary: 'European tour supporting HK119’s One Little Indian release.' },
  21: { role: 'ARTISTIC DIRECTOR', summary: 'Slovak multidisciplinary development of Yila’s Souvenir.' },
  22: { role: 'COMPOSITION · SOUND DESIGN', summary: 'Harper’s Bazaar film for the bespoke Dior cover.' },
  23: { role: 'COMPOSER', summary: 'Web composition for an Oxford Big Project-winning film.' },
  24: { role: 'CO-ARTISTIC DIRECTOR', summary: 'Experimental audio-visual work on a custom 14.2-channel system.' },
  25: { role: 'CO-WRITER · PERFORMER', summary: 'Commissioned Nokia PureView song with Leander Lyons.' },
  26: { role: 'CREATOR · SOUND INSTALLATION', summary: 'Three-day autonomous generative sound installation in a tree at Green Man Festival.' },
  27: { role: 'PRODUCER', summary: 'Garance and the Mitochondries full-length album.' },
  28: { role: 'CREATOR · COMPOSITION', summary: 'Participatory sound work tracing the changing soundscape of King’s Cross.' },
  29: { role: 'COMPOSITION · RECORDING · MIX', summary: 'Sojasun sonic identity for television, web and radio.' },
  30: { role: 'CO-CREATOR · SOUND', summary: 'Flyfaction audio-visual work mixing animation, stills and live action.' },
  31: { role: 'RECORDING · MIX', summary: 'Jackamo Brown’s debut album, recorded live in a Hackney church.' },
  32: { role: 'COMPOSER · MUSIC SUPERVISOR · MIXER', summary: 'Original score and 5.1 mix for the short film.' },
  33: { year: '2011', role: 'EXECUTIVE PRODUCER · MIX ENGINEER', summary: 'Scroobius Pip’s solo album for Speech Development and Strange Famous Records.' },
  34: { role: 'ARTIST · PRODUCTION', summary: 'Aloosh’s eight-track experimental indie-pop debut for Nature Scene Records.' },
  35: { role: 'SONGWRITER · ARRANGER · REMIXER · MIX', summary: 'Palmer’s debut nu-disco release.' },
  36: { role: 'GUITAR', summary: 'Róisín Murphy’s Overpowered world tour.' },
  37: { year: '2008', role: 'PRODUCTION · MIX', summary: 'Dan Le Sac vs Scroobius Pip album featuring Thou Shalt Always Kill.' },
  38: { role: 'ARTIST · PRODUCER', summary: 'Yila release with Scroobius Pip and remixes by Clark and Dan Le Sac.' },
  39: { role: 'ENSEMBLE MEMBER · PERFORMER', summary: 'David Toop’s improvisers orchestra at Tate, Barbican and South London Gallery.' },
  40: { role: 'CREATOR · SOUND INSTALLATION', summary: 'Motion-triggered storm environment for 4.1 sound and projection.' },
  41: { year: '2026', role: 'MASTERING', summary: 'Complete debut album by Žigan and Kristijan Krajnčan.' },
  42: { year: '2023', role: 'MASTERING', summary: 'Zhlehtet’s live creative return, documented across summer 2022.' },
  43: { year: '2023', role: 'MASTERING', summary: 'Zhlehtet live in a single room at Cankarjev dom, Vrhnika.' },
  44: { year: '2024', role: 'MASTERING', summary: 'Zhlehtet’s ambient, improvised Vrt release.' },
  45: { year: '2025', role: 'MASTERING', summary: 'Zhlehtet’s live suite of written and spontaneous composition.' },
  46: { year: '2025', role: 'MASTERING', summary: 'Jazz Cerkno Records album by Rok Zalokar & Zhlehtet, featuring Lenart De Bock on tenor saxophone and flute.' },
  47: { year: '2025', role: 'MASTERING', summary: 'Lenart De Bock’s debut solo album, released by Jazz Cerkno Records.' },
  48: { year: '2026', role: 'LIVE SPATIAL PERFORMANCE', summary: 'Original work in Cona and Kino Šiška’s octophonic festival of live spatial sound.' },
  49: { year: '2023', role: 'SOLO PERFORMER · SPATIAL SOUND', summary: 'SOMA Dvina, live electronics and real-time sound processing at Galerija ŠKUC.' },
  50: { year: '2024', role: 'SOLO PERFORMER · SPATIAL SOUND', summary: 'Electric cello, hexaphonic guitar tuner and guitar amplifiers spatialised across Cukrarna.' },
  51: { year: '2024', role: 'ATMOS MIX · MASTER', summary: 'Immersive mix and master for Olenc’s Nature Scene Records single.' },
};

export const categories: Record<number, Filter[]> = {
  0: ['music', 'production'], 1: ['music', 'mastering'], 2: ['music', 'production'], 3: ['music', 'production'], 4: ['music', 'production'], 5: ['art'], 6: ['music', 'production'], 7: ['art', 'music', 'production'], 8: ['art'], 9: ['art'], 10: ['art'], 11: ['music', 'production'], 12: ['art'], 13: ['art'], 14: ['art', 'music'], 15: ['music', 'commercial'], 16: ['music', 'production'], 17: ['music', 'production'], 18: ['music', 'production'], 19: ['music', 'production'], 20: ['music', 'production'], 21: ['art'], 22: ['commercial', 'production'], 23: ['commercial', 'production'], 24: ['art'], 25: ['music', 'commercial'], 26: ['art'], 27: ['art'], 28: ['art'], 29: ['commercial', 'production'], 30: ['art'], 31: ['art'], 32: ['commercial', 'production'], 33: ['music', 'production'], 34: ['art'], 35: ['music', 'production'], 36: ['music', 'production'], 37: ['music', 'production'], 38: ['music', 'production'], 39: ['music'], 40: ['music', 'production'], 41: ['music', 'mastering'], 42: ['music', 'mastering'], 43: ['music', 'mastering'], 44: ['music', 'mastering'], 45: ['music', 'mastering'], 46: ['music', 'mastering'], 47: ['music', 'mastering'], 48: ['art', 'music'], 49: ['art', 'music'], 50: ['art', 'music'], 51: ['music', 'mastering', 'production'],
};

export const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Everything' }, { id: 'art', label: 'Art' }, { id: 'music', label: 'Music' }, { id: 'mastering', label: 'Mastering' }, { id: 'production', label: 'Production' }, { id: 'commercial', label: 'Commercial' },
];

export const localImage = (index: number) => {
  const masteringImages: Record<number, string> = {
    1: '/media/projects/mastering-intention-intensity-shuffle.jpg',
    41: '/media/projects/mastering-the-only-thing-i-know.jpg',
    42: '/media/projects/mastering-poletje-loops.jpg',
    43: '/media/projects/mastering-portals-vol-2.jpg',
    44: '/media/projects/mastering-vrt.jpg',
    45: '/media/projects/mastering-faded-worlds-suite.jpg',
    46: '/media/projects/mastering-pieces-for-collective-change.jpg',
    47: '/media/projects/mastering-a-plea-for-tenderness.jpg',
  };
  if (masteringImages[index]) return masteringImages[index];
  if (index === 3) return '/media/projects/where-the-spirit-rests.jpg';
  if (index === 4) return '/media/projects/functional-combinations-vol1-cover.jpg';
  if (index === 48) return '/media/projects/sounding-acousmonium-input.jpg';
  if (index === 49) return '/media/projects/ropotarnica-xxix.jpg';
  if (index === 50) return '/media/projects/sound-explicit-cukrarna.jpg';
  if (index === 51) return '/media/projects/olenc-m-antarei.jpg';
  return index === 35 ? fallbackImages[index] : `/media/projects/${String(index + 1).padStart(3, '0')}.jpg`;
};
