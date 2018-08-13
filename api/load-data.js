require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))

const db = new PouchDB(
  `${process.env.COUCH_HOSTNAME}${process.env.COUCH_DBNAME}`
)

const breweries = [
  {
    _id: 'brewery_revelry',
    type: 'brewery',
    name: 'Revelry Brewing Co.',
    phone: '(843) 203-6194',
    rating: 4.7,
    website: 'https://www.revelrybrewingco.com/',
    image:
      'https://media1.fdncms.com/charleston/imager/u/original/8480700/rev.jpg',
    hours: {
      mon: '4–10PM',
      tue: '4–10PM',
      wed: '4–10PM',
      thu: '4–10PM',
      fri: '12PM–12AM',
      sat: '12PM–12AM',
      sun: '12–10PM'
    },
    location: {
      address: '10 Conroy St, Charleston, SC 29403',
      longitude: -79.94501,
      latitude: 32.807076
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_westbrook',
    type: 'brewery',
    name: 'Westbrook Brewing Co.',
    phone: '(843) 654-9114',
    rating: 4.5,
    website: 'http://www.westbrookbrewing.com',
    image:
      'http://lh3.googleusercontent.com/-JSOU271bkOo/VYI2ERHSPuI/AAAAAAAAM1I/tJcFRfENIgQ/IMG_5680_thumb.jpg?imgmax=800',
    hours: {
      mon: 'Closed',
      tue: '4–8PM',
      wed: '4–8PM',
      thu: '4–8PM',
      fri: '4-8PM',
      sat: '12-6PM',
      sun: 'Closed'
    },
    location: {
      address: '510 Ridge Rd, Mt Pleasant, SC 29464',
      longitude: -79.876874,
      latitude: 32.846691
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_coast',
    type: 'brewery',
    name: 'COAST Brewing Co.',
    phone: '(843) 343-4727',
    rating: 4.7,
    website: 'https://www.coastbrewing.com/',
    image:
      'https://img1.coastalliving.timeinc.net/sites/default/files/styles/4_3_horizontal_inbody_900x506/public/image/2017/05/main/coast-brewing-charleston.jpg?itok=bML4ZDXA',
    hours: {
      mon: 'Closed',
      tue: 'Closed',
      wed: 'Closed',
      thu: '4–7PM',
      fri: '4-7PM',
      sat: '12–5PM',
      sun: 'Closed'
    },
    location: {
      address: '1250 2nd St N, North Charleston, SC 29405',
      longitude: -79.972024,
      latitude: 32.873618
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_two-blokes',
    type: 'brewery',
    name: 'Two Blokes Brewing',
    phone: '(843) 654-4564',
    rating: 4.8,
    website: 'http://www.twoblokesbrewing.com',
    image:
      'https://cdn.vox-cdn.com/uploads/chorus_image/image/53743921/twoblokes.0.0.jpg',
    hours: {
      mon: '4–9PM',
      tue: '4–9PM',
      wed: '4–9PM',
      thu: '3–9PM',
      fri: '2–10PM',
      sat: '12–10PM',
      sun: '12–8PM'
    },
    location: {
      address: '547 Long Point Rd #101, Mt Pleasant, SC 29464',
      longitude: -79.868884,
      latitude: 32.839756
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_freehouse',
    type: 'brewery',
    name: 'Freehouse Brewery',
    phone: 'Not available',
    rating: 4.6,
    website: 'http://www.freehousebeer.com',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/09/04/94/7f/freehouse-brewery.jpg',
    hours: {
      mon: 'Closed',
      tue: '3-8PM',
      wed: '3-8PM',
      thu: '3-8PM',
      fri: '3-8PM',
      sat: '1–8PM',
      sun: 'Closed'
    },
    location: {
      address: '2895 Pringle St B, North Charleston, SC 29405',
      longitude: -80.002431,
      latitude: 32.84214
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_cooper-river',
    type: 'brewery',
    name: 'Cooper River Brewing Co.',
    phone: '(843) 830-3681',
    rating: 4.8,
    website: 'http://www.cooperriverbrewing.com/',
    image:
      'https://media.xogrp.com/images/798d6a36-902d-4a26-b226-34769a208ac8~rs_840.h',
    hours: {
      mon: 'Closed',
      tue: 'Closed',
      wed: '5-9PM',
      thu: '4–10PM',
      fri: '4-10PM',
      sat: '2-10PM',
      sun: '1-7PM'
    },
    location: {
      address: '2201 Mechanic St B, Charleston, SC 29405',
      longitude: -79.954893,
      latitude: 32.815921
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_charles-towne',
    type: 'brewery',
    name: 'Charles Towne Fermentory',
    phone: '(843) 641-0431',
    rating: 4.7,
    website: 'https://www.chsfermentory.com/',
    image:
      'https://s3-media3.fl.yelpcdn.com/bphoto/nZC8Duv-FA_YpkPmE44STA/o.jpg',
    hours: {
      mon: '4–11PM',
      tue: '4–11PM',
      wed: '4–11PM',
      thu: '4–11PM',
      fri: '2-12AM',
      sat: '12PM–12AM',
      sun: '11AM–10PM'
    },
    location: {
      address: '809 Savannah Hwy, Charleston, SC 29407',
      longitude: -79.985249,
      latitude: 32.781634
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_palmetto',
    type: 'brewery',
    name: 'Palmetto Brewery',
    phone: '(843) 937-0903',
    rating: 4.5,
    website: 'http://www.palmettobrewery.com',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipNLNohI07z5sLm7XaEHdY4eth7t4nhRHX5YsyAh',
    hours: {
      mon: 'Closed',
      tue: '4–10PM',
      wed: '4–10PM',
      thu: '4–10PM',
      fri: '12–10PM',
      sat: '12–10PM',
      sun: '12–8PM'
    },
    location: {
      address: '289 Huger St, Charleston, SC 29403',
      longitude: -79.945808,
      latitude: 32.801211
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_lo-fi',
    type: 'brewery',
    name: 'Lo-Fi Brewing',
    phone: '(828) 582-2175',
    rating: 5.0,
    website: 'http://www.lofibrewing.com',
    image:
      'https://i1.wp.com/www.twohoppyblondes.com/wp-content/uploads/2017/11/IMG_1259.jpg?resize=900%2C598&ssl=1',
    hours: {
      mon: 'Closed',
      tue: 'Closed',
      wed: 'Closed',
      thu: '4–9PM',
      fri: '4-9PM',
      sat: '2-9PM',
      sun: '2-6PM'
    },
    location: {
      address: '2038 Meeting Street Rd, Charleston, SC 29405',
      longitude: -79.953558,
      latitude: 32.833928
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_edmunds-oast',
    type: 'brewery',
    name: "Edmund's Oast Brewing Co.",
    phone: '(843) 718-3224',
    rating: 4.7,
    website: 'http://www.edmundsoast.com/brewing-co',
    image:
      'https://media2.fdncms.com/charleston/imager/u/slideshow/10989483/edmunds_oast_brewing_co_01_jwb.jpg',
    hours: {
      mon: '11AM-10PM',
      tue: '11AM-10PM',
      wed: '11AM-10PM',
      thu: '11AM-10PM',
      fri: '11AM-10PM',
      sat: '11AM-10PM',
      sun: '11AM-10PM'
    },
    location: {
      address: '1505 King St #115, Charleston, SC 29405',
      longitude: -79.951582,
      latitude: 32.8177
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_holy-city',
    type: 'brewery',
    name: 'Holy City Brewing',
    phone: '(843) 225-5623',
    rating: 4.6,
    website: 'https://holycitybrewing.com/',
    image:
      'https://charlestonbusiness.com/core/files/scbiznews/uploads/images/Holy%20City%20Brewing%20-%20provided%20ZL.jpg',
    hours: {
      mon: '11–8PM',
      tue: '11–8PM',
      wed: '11–8PM',
      thu: '11–8PM',
      fri: '11–9PM',
      sat: '11–9PM',
      sun: '11–6PM'
    },
    location: {
      address: '4155 Dorchester Rd, Charleston, SC 29405',
      longitude: -80.002357,
      latitude: 32.853413
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: "brewery_fatty's",
    type: 'brewery',
    name: "Fatty's Beer Works",
    phone: '(843) 974-5330',
    rating: 4.5,
    website: 'https://www.fattysbeerworks.com/',
    image:
      'https://discussions.probrewer.com/attachment.php?attachmentid=57915&d=1517588601',
    hours: {
      mon: '4–9PM',
      tue: '4–9PM',
      wed: '4–9PM',
      thu: '4–9PM',
      fri: '4–10PM',
      sat: '12–10PM',
      sun: '2-9PM'
    },
    location: {
      address: '1436 Meeting St, Charleston, SC 29405',
      longitude: -79.950552,
      latitude: 32.816561
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_munkle',
    type: 'brewery',
    name: 'Munkle Brewing Co.',
    phone: '(843) 789-3109',
    rating: 4.8,
    website: 'https://www.munklebrewing.com/',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStM2NnNoEwUs3FeKKAMpkTW7nj-1CkBgEEpIOCoC-NtINhcERP',
    hours: {
      mon: 'Closed',
      tue: '4–9PM',
      wed: '4–9PM',
      thu: '4-9PM',
      fri: '2-10PM',
      sat: '1-10PM',
      sun: '12–7PM'
    },
    location: {
      address: '1513 Meeting Street Rd, Charleston, SC 29405',
      longitude: -79.951104,
      latitude: 32.81812
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_tradesman',
    type: 'brewery',
    name: 'Tradesman Brewing Co.',
    phone: '(843) 410-1315',
    rating: 4.8,
    website: 'http://www.tradesmanbrewing.com/',
    image:
      'https://bloximages.newyork1.vip.townnews.com/postandcourier.com/content/tncms/assets/v3/editorial/f/6e/f6ea8730-7edf-11e8-841d-f7113e2b42a6/5b3ba7460c5fa.image.jpg?resize=1200%2C879',
    hours: {
      mon: '12–6PM',
      tue: '12-8PM',
      wed: '12–8PM',
      thu: '12–8PM',
      fri: '12–10PM',
      sat: '12–10PM',
      sun: '12–6PM'
    },
    location: {
      address: '1647 King St Ext, Charleston, SC 29405',
      longitude: -79.953111,
      latitude: 32.822204
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_commonhouse',
    type: 'brewery',
    name: 'Commonhouse Aleworks',
    phone: '(843) 471-1400',
    rating: 4.7,
    website: 'http://www.commonhousealeworks.com/',
    image:
      'https://bloximages.newyork1.vip.townnews.com/postandcourier.com/content/tncms/assets/v3/editorial/1/c0/1c0c88b2-f7c5-11e7-913b-bf046bd3efb9/5a58fc668a450.image.jpg?resize=1200%2C783',
    hours: {
      mon: 'Closed',
      tue: '4–9PM',
      wed: '4–9PM',
      thu: '4–9PM',
      fri: '12–10PM',
      sat: '12–10PM',
      sun: '12–6PM'
    },
    location: {
      address: "4831 O'Hear Ave, North Charleston, SC 29405",
      longitude: -79.975997,
      latitude: 32.882375
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_rusty-bull',
    type: 'brewery',
    name: 'Rusty Bull Brewing Co.',
    phone: '(843) 225-8600',
    rating: 4.7,
    website: 'http://www.rustybullbrewing.com/',
    image:
      'https://s3-media3.fl.yelpcdn.com/bphoto/YCS4aQlVeJbxF3CkmGxSDA/o.jpg',
    hours: {
      mon: '11AM-11PM',
      tue: '11AM-11PM',
      wed: '11AM-11PM',
      thu: '11AM-11PM',
      fri: '11AM-11PM',
      sat: '11AM-11PM',
      sun: '1-9PM'
    },
    location: {
      address: '3005 W Montague Ave Suite 110, North Charleston, SC 29418',
      longitude: -80.012487,
      latitude: 32.867728
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_snafu',
    type: 'brewery',
    name: 'SNAFU Brewing Company',
    phone: '(843) 767-4121',
    rating: 4.8,
    website: 'http://snafubrewingcompany.com/',
    image:
      'https://static1.squarespace.com/static/580f5821414fb5635eb2e04d/t/59cd3d808a02c76b45c46065/1506795134313/?format=500w',
    hours: {
      mon: 'Closed',
      tue: '3–7PM',
      wed: '3–10PM',
      thu: '3–10PM',
      fri: '3–10PM',
      sat: '2–10PM',
      sun: 'Closed'
    },
    location: {
      address: '3280 Industry Dr, North Charleston, SC 29418',
      longitude: -80.068815,
      latitude: 32.925511
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_pawleys-island',
    type: 'brewery',
    name: "Pawley's Island Brewing Co.",
    phone: '(843) 225-8292',
    rating: 5.0,
    website: 'Not available',
    image:
      'https://bloximages.newyork1.vip.townnews.com/postandcourier.com/content/tncms/assets/v3/editorial/7/4d/74d8f7ea-b536-11e7-9201-1b2616a9962f/59e9520b2291d.image.jpg?resize=1200%2C750',
    hours: {
      mon: 'Closed',
      tue: 'Closed',
      wed: '2-8PM',
      thu: '2-8PM',
      fri: '12-8PM',
      sat: '12-8PM',
      sun: '12–6PM'
    },
    location: {
      address: '2668 Industrial Ave, North Charleston, SC 29405',
      longitude: -80.004715,
      latitude: 32.851689
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_ghost-monkey',
    type: 'brewery',
    name: 'Ghost Monkey Brewery',
    phone: '(843) 352-3462',
    rating: 4.8,
    website: 'http://ghostmonkeybrewery.com/',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRF03i3MjmYcQihqScW3QdnSxtxS3mcqY7OTB6oTPXz-WzYZz',
    hours: {
      mon: 'Closed',
      tue: 'Closed',
      wed: '4–9PM',
      thu: '4–9PM',
      fri: '4-10PM',
      sat: '11AM-10PM',
      sun: '12–6PM'
    },
    location: {
      address: '522 Wando Ln, Mt Pleasant, SC 29464',
      longitude: -79.873565,
      latitude: 32.835569
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_fat-pig',
    type: 'brewery',
    name: 'Fat Pig Brewing Co.',
    phone: '(843) 640-3256',
    rating: 4.9,
    website: 'http://www.fatpigbrewing.com/',
    image:
      'https://untappd.akamaized.net/photos/2018_08_10/4a9c69fead37d9326e18fcd8c5a07ce9_640x640.jpeg',
    hours: {
      mon: 'Closed',
      tue: 'Closed',
      wed: 'Closed',
      thu: '4–10PM',
      fri: '4-10PM',
      sat: '12-10PM',
      sun: 'Closed'
    },
    location: {
      address: '3690 State Rd S-10-1024, Johns Island, SC 29455',
      longitude: -80.114985,
      latitude: 32.802884
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },

  {
    _id: 'brewery_low-tide',
    type: 'brewery',
    name: 'Low Tide Brewing',
    phone: '(843) 501-7570',
    rating: 4.8,
    website: 'http://www.lowtidebrewing.com/',
    image: 'http://www.charlestonaletrail.com/img/header_brew/lowtide.jpg',
    hours: {
      mon: '3–10PM',
      tue: '3–10PM',
      wed: '3–10PM',
      thu: '3–10PM',
      fri: '12PM–12AM',
      sat: '12PM–12AM',
      sun: '12–10PM'
    },
    location: {
      address: '4808, 2863 Maybank Hwy, Johns Island, SC 29455',
      longitude: -80.041511,
      latitude: 32.741197
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  },
  {
    _id: 'brewery_frothy-beard',
    type: 'brewery',
    name: 'Frothy Beard Brewing Co.',
    phone: '(843) 872-4201',
    rating: 4.5,
    website: 'http://www.frothybeard.com/',
    image:
      'https://media2.fdncms.com/charleston/imager/u/original/7016557/froth.jpg',
    hours: {
      mon: '11AM–10PM',
      tue: '11AM–10PM',
      wed: '11AM–10PM',
      thu: '11AM–10PM',
      fri: '11AM–11PM',
      sat: '11AM–11PM',
      sun: '11AM–10PM'
    },
    location: {
      address: '1401 Sam Rittenberg Blvd, Charleston, SC 29407',
      longitude: -79.996588,
      latitude: 32.813618
    },
    coupons: {
      cpn1: 'Buy One, Get One FREE Draft Pint'
    }
  }
]

db.bulkDocs(breweries, function(err, result) {
  if (err) {
    console.log('ERROR', JSON.stringify(err))
    return
  }

  console.log('SUCCESS!', JSON.stringify(result, null, 2))
})
