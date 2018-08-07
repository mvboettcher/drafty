const breweries = [
  {
    _id: 'brewery_revelry',
    type: 'brewery',
    name: 'Revelry Brewing Co.',
    phone: '(843) 203-6194',
    rating: 4.7,
    website: 'https://www.revelrybrewingco.com/',
    location: {
      address: '10 Conroy St, Charleston, SC 29403',
      longitude: -79.94501,
      latitude: 32.807076
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_westbrook',
    type: 'brewery',
    name: 'Westbrook Brewing Co.',
    phone: '(843) 654-9114',
    rating: 4.5,
    website: 'http://www.westbrookbrewing.com',
    location: {
      address: '510 Ridge Rd, Mt Pleasant, SC 29464',
      longitude: -79.876874,
      latitude: 32.846691
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_coast',
    type: 'brewery',
    name: 'COAST Brewing Co.',
    phone: '(843) 343-4727',
    rating: 4.7,
    website: 'https://www.coastbrewing.com/',
    location: {
      address: '1250 2nd St N, North Charleston, SC 29405',
      longitude: -79.972024,
      latitude: 32.873618
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_two-blokes',
    type: 'brewery',
    name: 'Two Blokes Brewing',
    phone: '(843) 654-4564',
    rating: 4.8,
    website: 'http://www.twoblokesbrewing.com',
    location: {
      address: '547 Long Point Rd #101, Mt Pleasant, SC 29464',
      longitude: -79.868884,
      latitude: 32.839756
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_freehouse',
    type: 'brewery',
    name: 'Freehouse Brewery',
    phone: 'Not available',
    rating: 4.6,
    website: 'http://www.freehousebeer.com',
    location: {
      address: '2895 Pringle St B, North Charleston, SC 29405',
      longitude: -80.002431,
      latitude: 32.84214
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_cooper-river',
    type: 'brewery',
    name: 'Cooper River Brewing Co.',
    phone: '(843) 830-3681',
    rating: 4.8,
    website: 'http://www.cooperriverbrewing.com/',
    location: {
      address: '2201 Mechanic St B, Charleston, SC 29405',
      longitude: -79.954893,
      latitude: 32.815921
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_charles-towne',
    type: 'brewery',
    name: 'Charles Towne Fermentory',
    phone: '(843) 641-0431',
    rating: 4.7,
    website: 'https://www.chsfermentory.com/',
    location: {
      address: '809 Savannah Hwy, Charleston, SC 29407',
      longitude: -79.985249,
      latitude: 32.781634
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_palmetto',
    type: 'brewery',
    name: 'Palmetto Brewery',
    phone: '(843) 937-0903',
    rating: 4.5,
    website: 'http://www.palmettobrewery.com',
    location: {
      address: '289 Huger St, Charleston, SC 29403',
      longitude: -79.945808,
      latitude: 32.801211
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_lo-fi',
    type: 'brewery',
    name: 'Lo-Fi Brewing',
    phone: '(828) 582-2175',
    rating: 5.0,
    website: 'http://www.lofibrewing.com',
    location: {
      address: '2038 Meeting Street Rd, Charleston, SC 29405',
      longitude: -79.953558,
      latitude: 32.833928
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_edmunds-oast',
    type: 'brewery',
    name: "Edmund's Oast Brewing Co.",
    phone: '(843) 718-3224',
    rating: 4.7,
    website: 'http://www.edmundsoast.com/brewing-co',
    location: {
      address: '1505 King St #115, Charleston, SC 29405',
      longitude: -79.951582,
      latitude: 32.8177
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_holy-city',
    type: 'brewery',
    name: 'Holy City Brewing',
    phone: '(843) 225-5623',
    rating: 4.6,
    website: 'https://holycitybrewing.com/',
    location: {
      address: '4155 Dorchester Rd, Charleston, SC 29405',
      longitude: -80.002357,
      latitude: 32.853413
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: "brewery_fatty's",
    type: 'brewery',
    name: "Fatty's Beer Works",
    phone: '(843) 974-5330',
    rating: 4.5,
    website: 'https://www.fattysbeerworks.com/',
    location: {
      address: '1436 Meeting St, Charleston, SC 29405',
      longitude: -79.950552,
      latitude: 32.816561
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_munkle',
    type: 'brewery',
    name: 'Munkle Brewing Co.',
    phone: '(843) 789-3109',
    rating: 4.8,
    website: 'https://www.munklebrewing.com/',
    location: {
      address: '1513 Meeting Street Rd, Charleston, SC 29405',
      longitude: -79.951104,
      latitude: 32.81812
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_tradesman',
    type: 'brewery',
    name: 'Tradesman Brewing Co.',
    phone: '(843) 410-1315',
    rating: 4.8,
    website: 'http://www.tradesmanbrewing.com/',
    location: {
      address: '1647 King St Ext, Charleston, SC 29405',
      longitude: -79.953111,
      latitude: 32.822204
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_commonhouse',
    type: 'brewery',
    name: 'Commonhouse Aleworks',
    phone: '(843) 471-1400',
    rating: 4.7,
    website: 'http://www.commonhousealeworks.com/',
    location: {
      address: "4831 O'Hear Ave, North Charleston, SC 29405",
      longitude: -79.975997,
      latitude: 32.882375
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_rusty-bull',
    type: 'brewery',
    name: 'Rusty Bull Brewing Co.',
    phone: '(843) 225-8600',
    rating: 4.7,
    website: 'http://www.rustybullbrewing.com/',
    location: {
      address: '3005 W Montague Ave Suite 110, North Charleston, SC 29418',
      longitude: -80.012487,
      latitude: 32.867728
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_snafu',
    type: 'brewery',
    name: 'SNAFU Brewing Company',
    phone: '(843) 767-4121',
    rating: 4.8,
    website: 'http://snafubrewingcompany.com/',
    location: {
      address: '3280 Industry Dr, North Charleston, SC 29418',
      longitude: -80.068815,
      latitude: 32.925511
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_pawleys-island',
    type: 'brewery',
    name: "Pawley's Island Brewing Co.",
    phone: '(843) 225-8292',
    rating: 5.0,
    website: 'Not available',
    location: {
      address: '2668 Industrial Ave, North Charleston, SC 29405',
      longitude: -80.004715,
      latitude: 32.851689
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_ghost-monkey',
    type: 'brewery',
    name: 'Ghost Monkey Brewery',
    phone: '(843) 352-3462',
    rating: 4.8,
    website: 'http://ghostmonkeybrewery.com/',
    location: {
      address: '522 Wando Ln, Mt Pleasant, SC 29464',
      longitude: -79.873565,
      latitude: 32.835569
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_fat-pig',
    type: 'brewery',
    name: 'Fat Pig Brewing Co.',
    phone: '(843) 640-3256',
    rating: 4.9,
    website: 'http://www.fatpigbrewing.com/',
    location: {
      address: '3690 State Rd S-10-1024, Johns Island, SC 29455',
      longitude: -80.114985,
      latitude: 32.802884
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  },

  {
    _id: 'brewery_low-tide',
    type: 'brewery',
    name: 'Low Tide Brewing',
    phone: '(843) 501-7570',
    rating: 4.8,
    website: 'http://www.lowtidebrewing.com/',
    location: {
      address: '4808, 2863 Maybank Hwy, Johns Island, SC 29455',
      longitude: -80.041511,
      latitude: 32.741197
    },
    coupons: {
      buy1Get1: '',
      halfPitcher: '',
      dollarOff: '',
      freeSlice: ''
    }
  }
]
