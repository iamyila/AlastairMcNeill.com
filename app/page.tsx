'use client';

import { useState, type CSSProperties } from 'react';

const projects = [
  ['Dysfunctional Combinations and Collaborations, Vol. 2', 'https://alastairmcneill.com/assets/projects/1630251627_projects_4376_612baa6b13ff1.png'],
  ['Where the Spirit rests', 'https://alastairmcneill.com/assets/projects/1630243195_projects_4374_612b897bc190d.png'],
  ['Functional Combinations and Collaborations, Vol. 1', 'https://alastairmcneill.com/assets/projects/1630240300_projects_4369_612b7e8a961d8.png'],
  ['The World as a Composer', 'https://alastairmcneill.com/assets/projects/1630241565_projects_4372_612b831d466b5.png'],
  ['Crest', 'https://alastairmcneill.com/assets/projects/1581411491_projects_4366_5e426ca32481c.png'],
  ['Nature Scene sessions', 'https://alastairmcneill.com/assets/projects/1581413147_projects_4368_5e42731b6e9c7.png'],
  ['Cross Intentions', 'https://alastairmcneill.com/assets/projects/1542890615_projects_4327_5bf6a4778b135.png'],
  ['Reel To Reel Night Program', 'https://alastairmcneill.com/assets/projects/1562959574_projects_4362_5d28ded6ba326.png'],
  ['Izis 6', 'https://alastairmcneill.com/assets/projects/1549968919_projects_4346_5c62a61727f06.png'],
  ['Better (of) me', 'https://alastairmcneill.com/assets/projects/1528455350_projects_4288_5b1a60b6296ea.jpg'],
  ["Souvenir Razkitje", 'https://alastairmcneill.com/assets/projects/1527803795_projects_4282_5b106f93475d7.png'],
  ['Brez Upora', 'https://alastairmcneill.com/assets/projects/1527804101_projects_4296_5b1070c5c9487.png'],
  ['Souvenir', 'https://alastairmcneill.com/assets/projects/1528456100_projects_4298_5b1a63a43ee9d.jpg'],
  ['SEQ', 'https://alastairmcneill.com/assets/projects/1543524195_projects_4344_5c004f63d7922.png'],
  ['Matevz Kolenc', 'https://alastairmcneill.com/assets/projects/1562957780_projects_4358_5d28d7d427152.png'],
  ['Dani Siciliano', 'https://alastairmcneill.com/assets/projects/1562958328_projects_4360_5d28d9f8efbdf.png'],
  ['Hairless toys', 'https://alastairmcneill.com/assets/projects/1543321649_projects_4300_5bfd383192d81.png'],
  ['Overload', 'https://alastairmcneill.com/assets/projects/1527804772_projects_4302_5b10736432d1b.png'],
  ['Imaginature', 'https://alastairmcneill.com/assets/projects/1563116836_projects_4364_5d2b45240ba9e.png'],
  ['Souvenir Suvenir', 'https://alastairmcneill.com/assets/projects/1528453405_projects_4304_5b1a591d5360b.jpg'],
  ['Behind The Cover Rouge Dior', 'https://alastairmcneill.com/assets/projects/1552416278_projects_4352_5c87fe1652fa5.jpeg'],
  ['Lets Aurora', 'https://alastairmcneill.com/assets/projects/1552426010_projects_4356_5c88241a2938f.jpeg'],
  ['Idu', 'https://alastairmcneill.com/assets/projects/1528453429_projects_4310_5b1a5935886b5.jpg'],
  ['Skate Uphill', 'https://alastairmcneill.com/assets/projects/1549974610_projects_4348_5c62bc52ea1ee.png'],
  ['PWCA Tree', 'https://alastairmcneill.com/assets/projects/1528456801_projects_4308_5b1a666101a58.jpg'],
  ['Un puit qui fuit', 'https://alastairmcneill.com/assets/projects/1543330065_projects_4340_5bfd5911ea730.png'],
  ['Sound of Kings', 'https://alastairmcneill.com/assets/projects/1528455115_projects_4306_5b1a5fcbd974d.jpg'],
  ['Jean Imbert', 'https://alastairmcneill.com/assets/projects/1552421822_projects_4354_5c8813be7ce37.jpeg'],
  ['Compulse', 'https://alastairmcneill.com/assets/projects/1529255652_projects_4321_5b2696e493e8a.png'],
  ['Oh No the Drift Of the World', 'https://alastairmcneill.com/assets/projects/1543329228_projects_4338_5bfd55cc5e564.png'],
  ['Felicity', 'https://alastairmcneill.com/assets/projects/1552411778_projects_4350_5c87ec8208471.jpeg'],
  ['Distraction Pieces', 'https://alastairmcneill.com/assets/projects/1543316956_projects_4313_5bfd25dcf20a9.png'],
  ['Aloosh', 'https://alastairmcneill.com/assets/projects/1530450551_projects_4323_5b38d2771c095.png'],
  ['Takin Off', 'https://alastairmcneill.com/assets/projects/1543266173_projects_4329_5bfc5f7d6aad.png'],
  ['Overpowered', 'https://alastairmcneill.com/assets/projects/1543322057_projects_4333_5bfd39c966070.png'],
  ['Angles', 'https://alastairmcneill.com/assets/projects/1543339851_projects_4342_5bfd7f4b86876.png'],
  ['Astronaut', 'https://alastairmcneill.com/assets/projects/1543323912_projects_4335_5bfd4108abcd3.png'],
  ['Unknown Devices', 'https://alastairmcneill.com/assets/projects/1528454802_projects_4315_5b1a5e923bbcc.jpg'],
  ['Playing God', 'https://alastairmcneill.com/assets/projects/1528453799_projects_4318_5b1a5aa79bbc2.jpg'],
] as const;

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);
  return <main className="project-field" aria-label="Alastair McNeill project archive">
    {projects.map(([title, image], index) => <button key={image} type="button" className={`slice ${open === index ? 'is-open' : ''}`} onClick={() => setOpen(open === index ? null : index)} aria-label={title} aria-pressed={open === index}>
      <span className="slab" style={{ '--project-image': `url(${image})` } as CSSProperties}><span className="face front texture" aria-hidden="true" /><span className="face right texture"><span>{title}</span></span><span className="face back texture" aria-hidden="true"><span className="play" /><span className="signal"><i /><i /><i /><i /><i /><i /><i /></span></span><span className="face left texture" aria-hidden="true" /><span className="face top texture" aria-hidden="true" /><span className="face bottom texture" aria-hidden="true" /></span>
    </button>)}
  </main>;
}
