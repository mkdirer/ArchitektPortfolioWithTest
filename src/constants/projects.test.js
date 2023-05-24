// this was the only way that I could get the test to work
const { projects } = require('./projects')

test('Project details are correct', () => {
    expect(projects).toMatchInlineSnapshot(`
    Array [
      Object {
        "description": "An elegant, modern, single-family home integrated with nature, with a sustainable approach to construction.",
        "id": 0,
        "image": "/images/ecoville.webp",
        "source": "https://www.ecovillage.net.au/lot-sales/ecovillage-plans/",
        "tags": Array [
          "EcoVilla",
          "SustainableHome",
          "NatureArchitecture",
        ],
        "title": "EcoVilla Residence",
        "visit": "https://laecovilla.com/",
      },
      Object {
        "description": "A modern office tower located in the city center, providing innovative workspace solutions.",
        "id": 1,
        "image": "/images/vecteezy_city-skylines-background-flat-building-perspective_6793043.webp",
        "source": "https://bdt.degruyter.com/entry/bdt_12_002/",
        "tags": Array [
          "CityscapeTower",
          "ModernArchitecture ",
        ],
        "title": "Cityscape Office Tower",
        "visit": "https://www.archdaily.com/995102/suhe-centre-office-tower-foster-plus-partners/63c5924c760dd22da66ee460-suhe-centre-office-tower-foster-plus-partners-photo",
      },
      Object {
        "description": "An exclusive seaside resort offering luxurious accommodations and stunning views.",
        "id": 2,
        "image": "/images/williams-beach-retreat-private-limited-hotel-colva-pic-1.webp",
        "source": "https://www.mcdonaldjoneshomes.com.au/home-design/seaside-retreat",
        "tags": Array [
          "CoastalResort",
          "LuxuryRetreat",
          "OceanViews",
        ],
        "title": "Coastal Resort Retreat",
        "visit": "https://www.mcdonaldjoneshomes.com.au/home-design/seaside-retreat",
      },
      Object {
        "description": "A simple app that allows users to track their friends' birthdays.",
        "id": 3,
        "image": "/images/DSC08162-Edit.webp",
        "source": "https://cavatina.pl/cavatina_projects/ocean-office-park/?lang=en",
        "tags": Array [
          "GreenTech",
          "ModernOffices",
          "Sustainable",
        ],
        "title": "GreenTech Office Park",
        "visit": "https://cavatina.pl/cavatina_projects/ocean-office-park/?lang=en",
      },
      Object {
        "description": "A multifunctional urban center featuring new residential units, offices, retail spaces, and social areas, contributing to urban revitalization.",
        "id": 4,
        "image": "/images/Kirkland_Vertical_mixed_use.webp",
        "source": "https://www.archdaily.com/994647/a-lab-and-lpo-unveil-design-for-a-mixed-use-development-as-part-of-fjord-city-oslo-a-large-scale-urban-renewal-project/63b6a2ab987c956d2f1f013c-a-lab-and-lpo-unveil-design-for-a-mixed-use-development-as-part-of-fjord-city-oslo-a-large-scale-urban-renewal-project-image?next_project=no",
        "tags": Array [
          "MixedUseDevelopment",
          "NewCityCenter",
        ],
        "title": "Urban Renewal Development",
        "visit": "https://www.archdaily.com/994647/a-lab-and-lpo-unveil-design-for-a-mixed-use-development-as-part-of-fjord-city-oslo-a-large-scale-urban-renewal-project/63b6a2a23caff30170715ad8-a-lab-and-lpo-unveil-design-for-a-mixed-use-development-as-part-of-fjord-city-oslo-a-large-scale-urban-renewal-project-image?next_project=no",
      },
    ]
  `)
})
