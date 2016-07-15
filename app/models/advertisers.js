var advertisers = [
  {
    'return': {
      'advertiser': 'Mercado Porto Seguro',
      'category': 'mercado',
      'phones': {
        'phone': [
          '(11)2585-5588','(11)2585-5588'
        ],
        'cel': [
          '(11)94656-5588','(11)94656-5588'
        ]
      },
      'address': {
        'address': 'Rua professor alípio de barros',
        'number': '100',
        'city': 'São Paulo',
        'neighbourhood': 'JD.Helena',
        'region':'Zona Leste',
        'coordinates': {
          'latitude': '25585',
          'longitude': '5588'
        }
      },
      'social': [
        {
          'icon': 'website',
          'website': 'http://www.mercadoportoseguro.com.br'
        },
        {
          'icon': 'facebook',
          'facebook': 'http://www.facebook.com/mercado_porto_seguro'
        }
      ],
      'office_hours': [
        {
          'day': 'segunda-feira',
          'info': '09:00 – 18:00'
        },
        {
          'day': 'terça-feira',
          'info': '09:00 – 18:00'
        }
      ],
      'images': {
        'banner': [
          'img/image_banner.png'
        ],
        'galery': [
          'img/image_galery_1.png',
          'img/image_galery_2.png',
          'img/image_galery_3.png'
        ]
      },
      'comments': [
        {
          'name': 'Tiago Lima',
          'comment': 'Super mercado ótimo',
          'created': {
            'date':'15/07/2016',
            'hours': '11:48'
          }
        }
      ],
      'starts': 10,
      'created': {
        'date':'15/07/2016',
        'hours': '11:48'
      }
    }
  }
];

module.exports = function(){
  return advertisers;
};
